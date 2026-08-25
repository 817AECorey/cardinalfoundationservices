import { NextRequest } from "next/server";
import { createHash, timingSafeEqual } from "crypto";
import { readFile } from "fs/promises";

/*
  Protected CSV export of the durable lead store (spec: leads-export gate).

  GET /api/leads/export?key=<LEADS_EXPORT_KEY>[&since=YYYY-MM-DD]

  Auth: constant-time compare against the LEADS_EXPORT_KEY fly secret.
  Bad or missing key returns a plain 404 so the endpoint's existence is
  never advertised. Unset secret disables the endpoint entirely.
  Rows: type "lead" records only (the canonical always-written row per
  submission; "sent"/"send-failure" are delivery bookkeeping), newest
  first. UTF-8 BOM so Excel opens it clean.
*/

const LEADS_FILE = process.env.LEADS_FILE ?? "/data/leads.jsonl";

function keyMatches(supplied: string | null): boolean {
  const secret = process.env.LEADS_EXPORT_KEY;
  if (!secret || !supplied) return false;
  // hash both sides: equal-length buffers, no length leak
  const a = createHash("sha256").update(supplied).digest();
  const b = createHash("sha256").update(secret).digest();
  return timingSafeEqual(a, b);
}

function csvCell(v: unknown): string {
  const s = v == null ? "" : String(v);
  return `"${s.replace(/"/g, '""')}"`;
}

const AUDIENCE: Record<string, string> = {
  Residential: "residential",
  Commercial: "commercial",
  "New Construction": "nc",
};

const CT = "America/Chicago";
function ctStamp(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleString("en-US", { timeZone: CT, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
}

const HEADER = [
  "submitted_at", "audience", "service", "name", "phone", "email", "city_or_zip",
  "message", "page", "landing", "referrer", "utm_source", "utm_medium",
  "utm_campaign", "gclid_present", "first_touch_source", "first_touch_medium",
  "first_touch_campaign", "first_touch_landing", "first_touch_date",
];

export async function GET(request: NextRequest) {
  const notFound = () => new Response("Not Found", { status: 404 });
  if (!keyMatches(request.nextUrl.searchParams.get("key"))) return notFound();

  let raw: string;
  try {
    raw = await readFile(LEADS_FILE, "utf8");
  } catch {
    raw = "";
  }

  const since = request.nextUrl.searchParams.get("since");
  const sinceMs = since && /^\d{4}-\d{2}-\d{2}$/.test(since) ? Date.parse(since + "T00:00:00-06:00") : null;

  type Row = Record<string, unknown> & { first_touch?: Record<string, string> | null };
  const rows: Row[] = [];
  for (const line of raw.split("\n")) {
    if (!line.trim()) continue;
    try {
      const r = JSON.parse(line);
      if (r.type !== "lead") continue;
      if (sinceMs !== null && Date.parse(r.ts) < sinceMs) continue;
      rows.push(r);
    } catch { /* skip malformed line */ }
  }
  rows.reverse(); // file is append-order; newest first

  const lines = [HEADER.map(csvCell).join(",")];
  for (const r of rows) {
    const ft = (r.first_touch ?? {}) as Record<string, string>;
    lines.push([
      ctStamp(String(r.ts ?? "")),
      AUDIENCE[String(r.lead)] ?? String(r.lead ?? ""),
      r.service, r.name, r.phone, r.email, r.city,
      r.details, r.page, r.landing, r.referrer,
      r.utm_source, r.utm_medium, r.utm_campaign,
      r.gclid ? "yes" : "",
      ft.utm_source, ft.utm_medium, ft.utm_campaign, ft.landing,
      ft.ts ? ctStamp(ft.ts).split(",")[0] : "",
    ].map(csvCell).join(","));
  }

  const today = new Date().toLocaleDateString("en-CA", { timeZone: CT });
  return new Response("\uFEFF" + lines.join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="leads-${today}.csv"`,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
