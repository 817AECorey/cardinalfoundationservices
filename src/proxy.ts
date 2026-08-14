import { NextResponse, type NextRequest } from "next/server";
import { REDIRECTS_301, GONE_410 } from "@/lib/redirects";

/* Legacy URL dispositions (Next 16 Proxy, formerly Middleware).
   Single-hop by design: lookup keys are slash-normalized so both
   /old-url and /old-url/ 301 DIRECTLY to the final destination with its
   trailing slash, never chaining through Next's slash redirect. */

const GONE = new Set(GONE_410);

/* Security headers on every proxy response (pages, redirects, 410s).
   Deliberately no CSP. Static assets bypass the proxy via the matcher. */
function secured<T extends Response>(res: T): T {
  res.headers.set("Strict-Transport-Security", "max-age=31536000");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "SAMEORIGIN");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return res;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // canonical host: non-www apex; www 301s to it, single hop, path preserved
  const host = request.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4);
    return secured(NextResponse.redirect(url, 301));
  }
  const key = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (GONE.has(key)) {
    return secured(new NextResponse("Gone", { status: 410 }));
  }

  const dest = REDIRECTS_301[key];
  if (dest && dest !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = dest;
    return secured(NextResponse.redirect(url, 301));
  }

  const res = secured(NextResponse.next());
  /* only the production domain may be indexed; staging, previews, and any
     other host get a hard noindex */
  if (host !== "cardinalfoundationservices.com") {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  // skip static assets and API routes; everything else gets the lookup
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
