import { NextResponse, type NextRequest } from "next/server";
import { REDIRECTS_301, GONE_410 } from "@/lib/redirects";

/* Legacy URL dispositions (Next 16 Proxy, formerly Middleware).
   Single-hop by design: lookup keys are slash-normalized so both
   /old-url and /old-url/ 301 DIRECTLY to the final destination with its
   trailing slash, never chaining through Next's slash redirect. */

const GONE = new Set(GONE_410);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // canonical host: non-www apex; www 301s to it, single hop, path preserved
  const host = request.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.slice(4);
    return NextResponse.redirect(url, 301);
  }
  const key = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (GONE.has(key)) {
    return new NextResponse("Gone", { status: 410 });
  }

  const dest = REDIRECTS_301[key];
  if (dest && dest !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = dest;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // skip static assets and API routes; everything else gets the lookup
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
