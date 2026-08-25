"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "./icons";
import { Kicker, PHONE, PHONE_TEL } from "./primitives";
import { DNav, DTrustBar, DFooter, DFW_CITIES, HOUSTON_CITIES, CITY_LINKS } from "./DirectionD";
import { KContactForm } from "./ContactPage";

/* ============================================================
   REQUEST — dedicated inspection-request landing page.
   Composed entirely from existing patterns: ContactPage's hero and
   k-main form/side-panel layout, homepage service-area chips.
   Every sitewide "Free Foundation Check" CTA points here.
   COMPLIANCE: financing / one-business-day language is
   residential-scoped; no em-dashes; no ratings markup.
   ============================================================ */

/* Hero promise follows the audience selected in the form's property-type
   field (COMPLIANCE: the one-business-day quote is residential-only).
   Before any selection the line stays audience-neutral. */
const HERO_LINES: Record<string, string> = {
  Residential: "Free inspection with mapped elevation readings. If repair is recommended, your written quote is typically delivered within one business day.",
  Commercial: "Engineer-led assessment with documented findings and a project-specific scope and proposal.",
  "New Construction": "Project review and scope development based on plans, site conditions, and schedule.",
};
const HERO_NEUTRAL = "Schedule a free, no-obligation inspection or assessment. Engineer-led, documented findings, and a clear next step.";

export default function RequestPage() {
  const [lead, setLead] = useState("");
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
        <div className="d-blueprint" style={{ opacity: .5 }} />
        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 56 }}>
          <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 30 }}>
            <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
            <span style={{ color: "var(--red)" }}>/</span>
            <span style={{ color: "#fff" }}>Request an Inspection</span>
          </div>
          <Kicker color="#fff">Free, engineer-led, no obligation</Kicker>
          <h1 className="disp" style={{ fontSize: 56, margin: "20px 0 0", color: "#fff", maxWidth: 780 }}>Request Your Free Inspection</h1>
          <p style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 0", maxWidth: 620, fontWeight: 500 }}>
            {HERO_LINES[lead] ?? HERO_NEUTRAL}
          </p>
        </div>
      </section>
      <DTrustBar />
      <section id="contact" style={{ background: "var(--paper)", padding: "84px 0" }}>
        <div className="wrap k-main">
          <KContactForm onLeadChange={setLead} />
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: "var(--ink)", color: "#fff", padding: "28px 30px" }}>
              <div className="over" style={{ color: "var(--red)", marginBottom: 8 }}>Phone</div>
              <a href={PHONE_TEL} className="disp" style={{ color: "#fff", fontSize: 28, display: "block" }}>{PHONE}</a>
              <div className="over" style={{ color: "var(--red)", margin: "20px 0 8px" }}>Hours</div>
              <div style={{ color: "#cfcfcf", fontWeight: 600, lineHeight: 1.5 }}>Monday to Friday, 7:00 AM to 6:00 PM</div>
            </div>
            <div style={{ border: "1px solid var(--line)", padding: "26px 28px" }}>
              <div className="over" style={{ color: "var(--red)", marginBottom: 10 }}>Service area</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[...DFW_CITIES, ...HOUSTON_CITIES].map((c) => (
                  CITY_LINKS[c]
                    ? <a key={c} href={CITY_LINKS[c]} style={{ border: "1px solid var(--line)", padding: "5px 10px", fontSize: 12, fontWeight: 600, color: "var(--muted)", cursor: "pointer" }}>{c}</a>
                    : <span key={c} style={{ border: "1px solid var(--line)", padding: "5px 10px", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>{c}</span>
                ))}
              </div>
              <p style={{ color: "var(--muted)", fontSize: 13.5, fontWeight: 500, marginTop: 16, marginBottom: 0 }}>Not on the list? Ask. We take on the right projects across Texas.</p>
              <div style={{ display: "flex", gap: 16, marginTop: 18, flexWrap: "wrap" }}>
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
