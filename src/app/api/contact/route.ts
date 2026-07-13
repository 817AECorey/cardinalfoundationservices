import { NextRequest } from "next/server";
import { Resend } from "resend";

// Where inquiries are delivered. Override with CONTACT_TO_EMAIL in Fly secrets.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "leads@cardinalfoundationservices.com";
// Must be an address on a domain you've verified in Resend.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "website@cardinalfoundationservices.com";

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function clean(v: unknown, max = 5000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fails loudly in logs but never leaks config to the visitor.
    console.error("[contact] RESEND_API_KEY is not set");
    return Response.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(payload.name, 200);
  const email = clean(payload.email, 200);
  const phone = clean(payload.phone, 60);
  const message = clean(payload.message, 5000);

  if (!name || !message || !isEmail(email)) {
    return Response.json(
      { error: "Please provide your name, a valid email, and a message." },
      { status: 422 }
    );
  }

  const resend = new Resend(apiKey);

  const text = [
    `New inspection request from cardinalfoundationservices.com`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || "(not provided)"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: `Cardinal Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New inspection request — ${name}`,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return Response.json(
        { error: "We couldn't send your message. Please call us instead." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json(
      { error: "We couldn't send your message. Please call us instead." },
      { status: 500 }
    );
  }
}
