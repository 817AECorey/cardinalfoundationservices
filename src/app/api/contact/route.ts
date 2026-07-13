import { NextRequest } from "next/server";
import { Resend } from "resend";

/*
  Contact endpoint for both the hero quick-estimate card and the multi-step
  quote form. Routes submissions by lead type to the right inbox:

    Commercial       -> CONTACT_TO_COMMERCIAL
    Residential      -> CONTACT_TO_RESIDENTIAL
    New Construction -> CONTACT_TO_NEWCONSTRUCTION

  Any unset route falls back to CONTACT_TO_DEFAULT (info@cardinalfoundationservices.com).
  Set these as Fly secrets in production; they can all point at one inbox to start.
*/

const DEFAULT_TO = process.env.CONTACT_TO_DEFAULT ?? "info@cardinalfoundationservices.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "website@cardinalfoundationservices.com";

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

export async function POST(request: NextRequest) {
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

  const lead = clean(payload.lead, 40) || "Commercial";
  const service = clean(payload.service, 120);
  const city = clean(payload.city, 160);
  const urgency = clean(payload.urgency, 80);
  const details = clean(payload.details, 4000);
  const name = clean(payload.name, 200);
  const email = clean(payload.email, 200);
  const phone = clean(payload.phone, 60);
  const company = clean(payload.company, 200);
  const source = clean(payload.source, 60);

  // Phone + name are the only hard requirements (email is optional on the forms).
  if (!name || !phone) {
    return Response.json(
      { error: "Please provide your name and a phone number." },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return Response.json({ error: "Email service is not configured yet." }, { status: 500 });
  }

  const to = routeFor(lead);
  const resend = new Resend(apiKey);

  const lines = [
    `New ${lead} inquiry from cardinalfoundationservices.com`,
    ``,
    `Lead type: ${lead}`,
    `Service:   ${service || "(not specified)"}`,
    `Name:      ${name}`,
    `Phone:     ${phone}`,
    `Email:     ${email || "(not provided)"}`,
    company ? `Company:   ${company}` : null,
    city ? `City:      ${city}` : null,
    urgency ? `Timeline:  ${urgency}` : null,
    ``,
    details ? `Notes:` : null,
    details || null,
    ``,
    `Routed to: ${to}`,
    `Form:      ${source || "unknown"}`,
  ].filter((l) => l !== null);

  try {
    const { error } = await resend.emails.send({
      from: `Cardinal Website <${FROM_EMAIL}>`,
      to: [to],
      replyTo: email && isEmail(email) ? email : undefined,
      subject: `New ${lead} inquiry — ${name}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json({ error: "We couldn't send your message. Please call us instead." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json({ error: "We couldn't send your message. Please call us instead." }, { status: 500 });
  }
}
