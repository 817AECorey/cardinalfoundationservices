import { NextRequest } from "next/server";
import { Resend } from "resend";
import { appendFile, mkdir } from "fs/promises";
import { dirname } from "path";

/*
  Lead pipeline (spec section 8, hard launch gate).

  Flow: validate -> DURABLY STORE (JSONL append, always first) -> send
  transactional email -> on send failure: alert email + failure recorded.
  Client redirects to /thank-you/ (noindex) on success, which fires the
  GA4 event and Google Ads conversion.

  Routing by lead type:
    Commercial       -> CONTACT_TO_COMMERCIAL
    Residential      -> CONTACT_TO_RESIDENTIAL
    New Construction -> CONTACT_TO_NEWCONSTRUCTION
  Any unset route falls back to CONTACT_TO_DEFAULT.

  ENV (see launch runbook):
    RESEND_API_KEY        transactional email provider key (REQUIRED)
    CONTACT_FROM_EMAIL    verified sender (default website@cardinalfoundationservices.com)
    CONTACT_TO_DEFAULT    default inbox (default info@cardinalfoundationservices.com)
    CONTACT_TO_COMMERCIAL / CONTACT_TO_RESIDENTIAL / CONTACT_TO_NEWCONSTRUCTION (optional)
    LEADS_FILE            durable JSONL path (default /data/leads.jsonl; mount a volume there)
    ALERT_EMAIL           send-failure alert recipient (default CONTACT_TO_DEFAULT)
*/

const DEFAULT_TO = process.env.CONTACT_TO_DEFAULT ?? "info@cardinalfoundationservices.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "website@cardinalfoundationservices.com";
const LEADS_FILE = process.env.LEADS_FILE ?? "/data/leads.jsonl";
const ALERT_EMAIL = process.env.ALERT_EMAIL ?? DEFAULT_TO;

function routeFor(lead: string): string {
  switch (lead) {
    case "Commercial":
      return process.env.CONTACT_TO_COMMERCIAL ?? DEFAULT_TO;
    case "Residential":
      return process.env.CONTACT_TO_RESIDENTIAL ?? DEFAULT_TO;
    case "New Construction":
      return process.env.CONTACT_TO_NEWCONSTRUCTION ?? DEFAULT_TO;
    default:
      return DEFAULT_TO;
  }
}

function clean(v: unknown, max = 5000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}
function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/* Durable storage: JSONL append, one record per submission (and per
   send-failure). Never throws into the request path. */
async function store(record: Record<string, unknown>): Promise<boolean> {
  const line = JSON.stringify({ ts: new Date().toISOString(), ...record }) + "\n";
  try {
    await mkdir(dirname(LEADS_FILE), { recursive: true });
    await appendFile(LEADS_FILE, line, "utf8");
    return true;
  } catch (err) {
    // storage failure must not lose the lead silently: it still goes to email
    console.error("[lead-store] FAILED to persist submission:", err, line);
    return false;
  }
}

/* Per-IP throttle: 5 requests per 10 minutes, then 429. In-memory and
   per-instance (each Fly machine counts separately), which is adequate
   spam pressure relief without external state. */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) { hits.set(ip, recent); return true; }
  recent.push(now);
  hits.set(ip, recent);
  // opportunistic cleanup so the map cannot grow unbounded
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
  }
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("fly-client-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json({ error: "Too many requests. Please call us instead." }, { status: 429 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users leave this empty. Accept silently so bots think it worked.
  if (clean(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const lead = clean(payload.lead, 40) || "Residential";
  const service = clean(payload.service, 120);
  const property = clean(payload.property, 120);
  const city = clean(payload.city, 160);
  const urgency = clean(payload.urgency, 80);
  const details = clean(payload.details, 4000);
  const name = clean(payload.name, 200);
  const email = clean(payload.email, 200);
  const phone = clean(payload.phone, 60);
  const company = clean(payload.company, 200);
  const source = clean(payload.source, 60);

  // Required fields (server-side): name, phone, city/zip on every form.
  if (!name || !phone || !city) {
    return Response.json(
      { error: "Please provide your name, phone number, and city or ZIP." },
      { status: 422 }
    );
  }

  const record = { lead, service, property, name, phone, email, city, urgency, details, company, source };

  // 1) Durable storage FIRST: every submission lands on disk before email.
  const stored = await store({ type: "lead", ...record });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    await store({ type: "send-failure", reason: "RESEND_API_KEY unset", ...record });
    return Response.json({ error: "Email service is not configured yet." }, { status: 500 });
  }

  const to = routeFor(lead);
  const resend = new Resend(apiKey);

  const lines = [
    `New ${lead} inquiry from cardinalfoundationservices.com`,
    ``,
    `Lead type: ${lead}`,
    `Service:   ${service || "(not specified)"}`,
    property ? `Property:  ${property}` : null,
    `Name:      ${name}`,
    `Phone:     ${phone}`,
    `Email:     ${email || "(not provided)"}`,
    company ? `Company:   ${company}` : null,
    `City/ZIP:  ${city}`,
    urgency ? `Timeline:  ${urgency}` : null,
    ``,
    details ? `Notes:` : null,
    details || null,
    ``,
    `Routed to: ${to}`,
    `Form:      ${source || "unknown"}`,
    stored ? null : `WARNING: durable storage failed for this lead; email is the only copy.`,
  ].filter((l) => l !== null);

  try {
    const { error } = await resend.emails.send({
      from: `Cardinal Website <${FROM_EMAIL}>`,
      to: [to],
      replyTo: email && isEmail(email) ? email : undefined,
      subject: `New ${lead} inquiry - ${name}`,
      text: lines.join("\n"),
    });
    if (error) throw new Error(JSON.stringify(error));
    return Response.json({ ok: true });
  } catch (err) {
    // 2) Send failure: record it durably and alert.
    console.error("[contact] send failure:", err);
    await store({ type: "send-failure", reason: String(err), ...record });
    try {
      await resend.emails.send({
        from: `Cardinal Website <${FROM_EMAIL}>`,
        to: [ALERT_EMAIL],
        subject: `ALERT: lead email delivery failed (${lead} / ${name})`,
        text: `A lead email failed to deliver and is stored in ${LEADS_FILE}.\n\nError: ${String(err)}\n\n${lines.join("\n")}`,
      });
    } catch (alertErr) {
      console.error("[contact] ALERT email also failed:", alertErr);
    }
    return Response.json({ error: "We couldn't send your message. Please call us instead." }, { status: 502 });
  }
}
