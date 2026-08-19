"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Arrow, Phone, Check } from "./icons";
import { Btn, Kicker, Img, TCPA, dScroll, PHONE, PHONE_TEL } from "./primitives";
import { DNav, DTrustBar, DPierPath, DPierSystems, DContact, DFooter, submitLead } from "./DirectionD";
import { WhereWePerform, FaqJsonLd } from "./ServicePage";

/* ============================================================
   RESIDENTIAL FOUNDATION REPAIR — inner service page.
   Ported from the claude.design handoff
   (page-residential-foundation.jsx). Specialized positioning per
   client notes: large-scale, complex, high-end residential work.
   Not small routine jobs. Reuses Direction D's nav, trust bar,
   pier path, pier systems, contact form, and footer.
   COMPLIANCE: no ratings/testimonials, no superlatives or
   guarantees, no em-dashes, inspection-first language.
   RESIDENTIAL-ONLY messaging allowed here: financing available,
   quote in one business day.
   ============================================================ */

/* ---------- HERO ---------- */
function RfHero() {
  return (
    <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Img label="Crew installing foundation piers beneath a North Texas home" src="/images/foundation-repair-pier-installation-fort-worth.webp" style={{ height: "100%" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,12,12,.92) 0%, rgba(12,12,12,.6) 45%, rgba(12,12,12,.92) 100%)" }} />
      <div className="d-blueprint" style={{ opacity: .45 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 58 }}>
        <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 26 }}>
          <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
          <span style={{ color: "var(--red)" }}>/</span>
          <Link href="/residential" style={{ color: "#9a9a9a" }}>Residential</Link>
          <span style={{ color: "var(--red)" }}>/</span>
          <span style={{ color: "#fff" }}>Foundation Repair</span>
        </div>
        <div className="c-hero">
          <div>
            <Kicker color="#fff">Specialized residential · DFW &amp; Houston</Kicker>
            <h1 className="disp" style={{ fontSize: 58, margin: "20px 0 0", color: "#fff" }}>
              Residential foundation repair for homes of every size.
            </h1>
            <p style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 14px", maxWidth: 560, fontWeight: 500 }}>
              Large, structural, and full-scope residential repairs. Multi-symptom movement, big elevation changes, and homes other contractors refer out. An engineer inspects your home, and the same company performs the repair.
            </p>
            <p style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: "0 0 28px", display: "flex", alignItems: "center", gap: 10 }}>
              <Check s={16} c="var(--red)" /> Inspected by an engineer, not a commissioned salesperson.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn variant="red" arrow="ur" href="/request/">Book a Free Home Inspection</Btn>
              <Btn variant="ghost" arrow="none" href={PHONE_TEL}><Phone s={15} c="#fff" /> {PHONE}</Btn>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}><RfQuickCard /></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- hero card (residential-only messaging allowed) ---------- */
const RF_ISSUES = ["Cracks in walls or brick", "Sloping or uneven floors", "Doors or windows sticking", "Pier & beam problems", "Sunken slab or concrete", "Multiple symptoms / not sure"];
function RfQuickCard() {
  const router = useRouter();
  const [issue, setIssue] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  /* residential context: name, phone, city/zip required; email optional */
  const ready = !!(name.trim() && phone.trim() && city.trim());

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    if (website) { setSent(true); return; } // bot
    setBusy(true); setErr("");
    const ok = await submitLead({ lead: "Residential", service: "Residential Foundation Repair", details: issue, name, phone, email, city, source: "residential-foundation-hero-card", website });
    setBusy(false);
    if (ok) router.push("/thank-you/");
    else setErr("Something went wrong. Please call us instead.");
  }

  if (sent) {
    return (
      <div style={{ background: "#fff", width: "100%", maxWidth: 380, boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}>
        <div style={{ background: "var(--red)", color: "#fff", padding: "16px 24px", display: "flex", alignItems: "center", gap: 10 }}>
          <Check s={20} c="#fff" /><span className="disp" style={{ fontSize: 16 }}>Request received</span>
        </div>
        <div style={{ padding: "28px 26px 26px" }}>
          <div className="disp" style={{ fontSize: 24, lineHeight: 1.1, color: "var(--ink)" }}>Thanks, {name.split(" ")[0]}.</div>
          <p style={{ color: "var(--muted)", fontWeight: 500, lineHeight: 1.5, margin: "12px 0 18px" }}>
            Our residential team will call <strong style={{ color: "var(--ink)" }}>{phone}</strong> to schedule your free inspection. Your quote arrives within one business day of the visit, and financing is available.
          </p>
          <a className="btn btn-red" href={PHONE_TEL} style={{ justifyContent: "center", width: "100%" }}><Phone s={15} c="#fff" /> Call now instead</a>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} style={{ background: "#fff", width: "100%", maxWidth: 380, boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}>
      <div style={{ background: "var(--red)", color: "#fff", padding: "15px 22px" }}>
        <div className="disp" style={{ fontSize: 19 }}>Schedule a free, no-obligation inspection or assessment</div>
        <div style={{ fontSize: 12.5, fontWeight: 600, opacity: .92, marginTop: 2 }}>You&apos;ll receive a mapped elevation survey and quote within one business day.</div>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 11 }}>
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
        <select className="form-input" value={issue} onChange={(e) => setIssue(e.target.value)} style={{ color: issue ? "#222" : "#5d5b58" }}>
          <option value="">What are you noticing?…</option>
          {RF_ISSUES.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input className="form-input" aria-label="Full name" placeholder="Full name *" required value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-input" aria-label="Phone number" placeholder="Phone number *" required value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" />
        <input className="form-input" aria-label="Email" placeholder="Email (optional)" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-input" aria-label="City or ZIP" placeholder="City or ZIP *" required value={city} onChange={(e) => setCity(e.target.value)} />
        {err && <div style={{ color: "var(--red)", fontSize: 13, fontWeight: 600 }}>{err}</div>}
        <button type="submit" className="btn btn-red" disabled={!ready || busy}
          style={{ justifyContent: "center", width: "100%", marginTop: 2, opacity: ready && !busy ? 1 : .55, cursor: ready && !busy ? "pointer" : "not-allowed" }}>
          {busy ? "Sending…" : "Submit"} <Arrow s={15} />
        </button>
        <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>Engineer-owned · Financing available</div>
        <TCPA />
      </div>
    </form>
  );
}

/* ---------- POSITIONING (who this is for) ---------- */
const RF_FIT = [
  { t: "Complex structural movement", d: "Multiple symptoms at once. Cracking, sloping floors, and separation that point to structural movement rather than one settled corner." },
  { t: "Large and custom homes", d: "Custom homes, large slabs, pier and beam estates, and properties where the repair plan has to respect finishes and landscaping." },
  { t: "Large retaining walls", d: "Failing or leaning walls that hold real load, repaired with tieback anchors or rebuilt structurally." },
  { t: "Builder repairs", d: "Warranty and construction-defect repairs performed for builders. Specialized projects that call for specialized crews." },
  { t: "The jobs others refer out", d: "Repairs that need engineering, custom pier plans, or equipment most residential foundation companies do not carry." },
  { t: "House lifting & concrete leveling", d: "Polyurethane lifting for settled slabs, driveways, and pool decks, and structural lifts to recover elevation." },
];
function RfFit() {
  return (
    <section style={{ background: "var(--paper)", padding: "84px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="c-2" style={{ marginBottom: 40 }}>
          <div>
            <Kicker>What we take on</Kicker>
            <h2 className="disp" style={{ fontSize: 46, margin: "16px 0 0", color: "var(--ink)" }}>Built for the difficult repairs</h2>
          </div>
          <p className="lead">
            We are not set up for small patch jobs, and we will say so when that is all a home needs. Our residential crews are built for large, complicated, and high-value repairs where an engineered plan matters.
          </p>
        </div>
        <div className="c-svc">
          {RF_FIT.map((s, i) => (
            <div key={s.t} style={{ border: "1px solid var(--line)", borderTop: "3px solid var(--red)", padding: "26px 26px 24px", display: "flex", flexDirection: "column" }}>
              <span className="disp" style={{ fontSize: 14, color: "var(--red)" }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="disp" style={{ fontSize: 20, margin: "10px 0 10px", lineHeight: 1.08, color: "var(--ink)" }}>{s.t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.55, fontWeight: 500 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SIGNS ---------- */
const RF_SIGNS: [string, string][] = [
  ["Cracks in brick or drywall", "Stair-step cracks in brick, cracks above door frames, or cracks that keep returning after patching."],
  ["Sloping or bouncy floors", "A slope you can feel walking across a room, or pier and beam floors that give underfoot."],
  ["Doors and windows sticking", "Frames racking out of square as the foundation moves seasonally."],
  ["Gaps at trim and ceilings", "Separation where walls meet crown molding, cabinets pulling from walls."],
  ["Sunken exterior concrete", "Driveways, walkways, patios, and pool decks that have settled below grade."],
  ["Plumbing and moisture changes", "Recurring leaks or moisture under the slab. An inspection sorts cause from effect."],
];
function RfSigns() {
  return (
    <section style={{ background: "var(--bone)", padding: "86px 0" }}>
      <div className="wrap">
        <div style={{ maxWidth: 680, marginBottom: 36 }}>
          <Kicker>What to look for</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 12px", color: "var(--ink)" }}>Signs worth an inspection</h2>
          <p className="lead">Symptoms are indicators, not a diagnosis. A free engineer-led inspection determines whether the cause is foundation movement, drainage, or normal seasonal activity, and whether any repair is warranted at all.</p>
        </div>
        <div className="c-signs">
          {RF_SIGNS.map(([t, d]) => (
            <div key={t} style={{ background: "#fff", padding: "26px 26px 24px" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <Check s={17} c="var(--red)" />
                <div>
                  <h3 className="disp" style={{ fontSize: 18, color: "var(--ink)", marginBottom: 8 }}>{t}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.55, fontWeight: 500 }}>{d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <Btn variant="outline" arrow="none" href={PHONE_TEL}><Phone s={15} /> {PHONE}</Btn>
        </div>
      </div>
    </section>
  );
}

/* ---------- HONESTY / ENGINEER (residential framing) ---------- */
function RfHonesty() {
  return (
    <section style={{ background: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap c-2">
        <div style={{ position: "relative", minHeight: 400 }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Img label="Foundation inspection and structural assessment in progress" src="/images/hub-engineer-inspection.webp" style={{ height: "100%" }} />
          </div>
          <div style={{ position: "absolute", left: 0, bottom: 0, right: 0, background: "linear-gradient(0deg, rgba(15,15,15,.92), transparent)", padding: "40px 26px 22px" }}>
            <div className="over" style={{ color: "var(--red)", fontSize: 11, marginBottom: 6 }}>Meet the owner &amp; principal engineer</div>
            <div className="disp" style={{ color: "#fff", fontSize: 22 }}>Owner &amp; Principal Engineer</div>
            <div style={{ color: "#cfcfcf", fontWeight: 600, fontSize: 13, marginTop: 4 }}>Licensed PE since 2012</div>
          </div>
        </div>
        <div>
          <Kicker>The honest difference</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 18px", color: "var(--ink)" }}>
            Sometimes the right answer is &quot;you don&apos;t need a repair.&quot;
          </h2>
          <p style={{ color: "#3a3a3a", fontSize: 17, lineHeight: 1.6, fontWeight: 500, marginBottom: 14 }}>
            Foundation repair is stressful because homeowners rarely know who to trust. Here, the person who inspects your home is an engineer, not a commissioned salesperson. The recommendation is based on what the structure and soil are actually doing.
          </p>
          <p style={{ color: "#3a3a3a", fontSize: 17, lineHeight: 1.6, fontWeight: 500, marginBottom: 28 }}>
            If seasonal movement is all we find, we will tell you what to watch and send you on your way. If repair is warranted, you get an engineered plan and a written quote within one business day.
          </p>
          <Btn variant="outline" arrow="ur" href="/request/">Book a free inspection</Btn>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINANCING BAND (residential-only) ---------- */
function RfFinancing() {
  return (
    <section style={{ background: "var(--red)", padding: "50px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 34, flexWrap: "wrap" }}>
          {[["Free inspection", "Engineer-led, no obligation"], ["Written quote in one business day", "Engineered scope, documented"], ["Financing available", "Flexible payment options"]].map(([t, d]) => (
            <div key={t} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
              <Check s={18} c="#fff" />
              <div>
                <div className="disp" style={{ color: "#fff", fontSize: 17 }}>{t}</div>
                <div style={{ color: "rgba(255,255,255,.88)", fontWeight: 500, fontSize: 13.5, marginTop: 3 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
        <a className="btn" href={PHONE_TEL} style={{ background: "#fff", color: "var(--ink)", border: 0 }}><Phone s={14} /> {PHONE}</a>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const RF_FAQ: [string, string][] = [
  ["How much does residential foundation repair cost?", "It depends on what the inspection finds. Pier count, pier type, depth, and access drive the price. You get a written quote within one business day of the inspection, and financing is available."],
  ["How long does the work take?", "Most residential repairs run from a few days to about a week on site, depending on pier count and access. The quote includes a schedule."],
  ["Will you need to get under or inside my home?", "Slab repairs work from the exterior where possible. Pier and beam work uses crawl-space access. Interior piers, when required, are cut, installed, and patched with the slab restored."],
  ["What about my landscaping and finishes?", "The plan accounts for finishes, hardscape, and plantings before work starts, and the site is restored when the piers are in."],
  ["Do I need a repair if I see a crack?", "Not necessarily. Seasonal soil movement opens and closes hairline cracks. An inspection determines whether movement is structural before any repair is proposed."],
  ["Is the work warrantied?", "Yes. Workmanship warranty, terms vary by service. The specifics are in your quote."],
];
function RfFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: "var(--paper)", padding: "86px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ maxWidth: 640, marginBottom: 36 }}>
          <Kicker>Common questions</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 0", color: "var(--ink)" }}>Residential repair FAQ</h2>
        </div>
        <div className="rf-faq">
          {RF_FAQ.map(([q, a], i) => (
            <div key={q} style={{ border: "1px solid var(--line)", background: open === i ? "var(--bone)" : "#fff" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`rf-faq-${i}`} style={{ width: "100%", textAlign: "left", background: "none", border: 0, padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, cursor: "pointer" }}>
                <span className="disp" style={{ fontSize: 17, color: "var(--ink)", lineHeight: 1.15 }}>{q}</span>
                <span className="disp" style={{ fontSize: 20, color: "var(--red)", flexShrink: 0 }}>{open === i ? "–" : "+"}</span>
              </button>
              <p id={`rf-faq-${i}`} hidden={open !== i} style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.6, fontWeight: 500, padding: "0 22px 22px", margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ASSEMBLY ---------- */
export default function ResidentialFoundationPage() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <RfHero />
      <DTrustBar />
      <RfFit />
      <RfSigns />
      <DPierPath />
      <DPierSystems />
      <RfHonesty />
      <RfFinancing />
      <WhereWePerform tree="residential" />
      <FaqJsonLd faqs={RF_FAQ} />
      <RfFaq />
      <DContact />
      <DFooter />
    </div>
  );
}
