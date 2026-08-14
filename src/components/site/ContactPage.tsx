"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Arrow, Check } from "./icons";
import { Kicker, TCPA, PHONE, PHONE_TEL, EMAIL } from "./primitives";
import { DNav, DFooter, submitLead } from "./DirectionD";

/* ============================================================
   CONTACT — rebuilt verbatim from content/26_contact.md.
   Form fields per spec: name, phone, email (optional for
   homeowners), city/zip, property type, what you are noticing.
   TCPA consent line under the submit button; honeypot kept;
   success routes to /thank-you/.
   ============================================================ */

const K_PROPERTY = ["Home", "Commercial property", "Multifamily", "New construction / builder"];
const RESIDENTIAL_TYPES = new Set(["Home"]);

function leadFor(property: string): string {
  if (property === "Commercial property" || property === "Multifamily") return "Commercial";
  if (property === "New construction / builder") return "New Construction";
  return "Residential";
}

export function KContactForm() {
  const router = useRouter();
  const [property, setProperty] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  /* name, phone, city/zip required everywhere; email optional only in
     residential contexts */
  const emailOk = RESIDENTIAL_TYPES.has(property) || property === "" ? true : !!email.trim();
  const ready = !!(name.trim() && phone.trim() && city.trim() && emailOk);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    if (website) { router.push("/thank-you/"); return; } // bot
    setBusy(true); setErr("");
    const ok = await submitLead({ lead: leadFor(property), property, name, phone, email, city, details, source: "contact-page-form", website });
    setBusy(false);
    if (ok) router.push("/thank-you/");
    else setErr("Something went wrong. Please call us instead.");
  }

  return (
    <form onSubmit={onSubmit} style={{ background: "#fff", border: "1px solid var(--line)", padding: "30px 32px 26px" }}>
      <h3 className="disp" style={{ fontSize: 24, marginBottom: 18, color: "var(--ink)" }}>Send the form, we get you scheduled</h3>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <input className="form-input" aria-label="Name" placeholder="Name *" required value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-input" aria-label="Phone" placeholder="Phone *" required value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" />
        <input className="form-input" aria-label="Email" placeholder={RESIDENTIAL_TYPES.has(property) || property === "" ? "Email (optional)" : "Email *"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-input" aria-label="City or ZIP" placeholder="City / ZIP *" required value={city} onChange={(e) => setCity(e.target.value)} />
        <select className="form-input" aria-label="Property type" value={property} onChange={(e) => setProperty(e.target.value)} style={{ gridColumn: "1 / -1", color: property ? "#222" : "#5d5b58" }}>
          <option value="">Property type…</option>
          {K_PROPERTY.map((p) => <option key={p}>{p}</option>)}
        </select>
        <textarea className="form-input" aria-label="What you are noticing" rows={4} placeholder="What are you noticing?" value={details} onChange={(e) => setDetails(e.target.value)} style={{ gridColumn: "1 / -1", resize: "vertical" }} />
      </div>
      {err && <p style={{ color: "var(--red)", fontSize: 13, fontWeight: 600, marginTop: 12 }}>{err}</p>}
      <button type="submit" className="btn btn-red" disabled={!ready || busy}
        style={{ justifyContent: "center", width: "100%", marginTop: 16, opacity: ready && !busy ? 1 : .55, cursor: ready && !busy ? "pointer" : "not-allowed" }}>
        {busy ? "Sending…" : "Send"} <Arrow s={15} />
      </button>
      <div style={{ marginTop: 10 }}><TCPA /></div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
        <div className="d-blueprint" style={{ opacity: .5 }} />
        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 56 }}>
          <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 30 }}>
            <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
            <span style={{ color: "var(--red)" }}>/</span>
            <span style={{ color: "#fff" }}>Contact</span>
          </div>
          <Kicker color="#fff">Contact Cardinal</Kicker>
          <h1 className="disp" style={{ fontSize: 56, margin: "20px 0 0", color: "#fff", maxWidth: 780 }}>Contact Cardinal Foundation Services</h1>
          <p style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 0", maxWidth: 620, fontWeight: 500 }}>
            Call, email, or send the form and we will get you scheduled. Residential inspections are free and include a mapped elevation survey of your foundation. Commercial inquiries route to an engineered assessment.
          </p>
        </div>
      </section>
      {/* FORM + INFO */}
      <section id="contact" style={{ background: "var(--paper)", padding: "84px 0" }}>
        <div className="wrap k-main">
          <KContactForm />
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: "var(--ink)", color: "#fff", padding: "28px 30px" }}>
              <div className="over" style={{ color: "var(--red)", marginBottom: 8 }}>Phone</div>
              <a href={PHONE_TEL} className="disp" style={{ color: "#fff", fontSize: 28, display: "block" }}>{PHONE}</a>
            </div>
            <div style={{ border: "1px solid var(--line)", padding: "26px 28px" }}>
              <div className="over" style={{ color: "var(--red)", marginBottom: 10 }}>Email</div>
              <a href={`mailto:${EMAIL}`} style={{ color: "var(--ink)", fontWeight: 700, fontSize: 15, wordBreak: "break-all" }}>{EMAIL}</a>
              <div className="over" style={{ color: "var(--red)", margin: "20px 0 10px" }}>Headquarters</div>
              <div style={{ color: "var(--muted)", fontWeight: 600, lineHeight: 1.5 }}>803 Forest Ridge Dr, Suite #205<br />Bedford, TX 76022<br />Fort Worth based, serving DFW, the Houston area, and Texas.</div>
              <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
                {["Free residential inspection", "No obligation"].map((t) => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontWeight: 700, fontSize: 13, color: "var(--ink)" }}><Check s={15} c="var(--red)" />{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <DFooter />
    </div>
  );
}
