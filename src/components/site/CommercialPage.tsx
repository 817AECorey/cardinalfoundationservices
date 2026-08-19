"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Arrow, Phone, Check } from "./icons";
import { Btn, Kicker, Img, TCPA, dScroll, PHONE, PHONE_TEL } from "./primitives";
import { DNav, DTrustBar, DPierPath, DPierSystems, DContact, DFooter, submitLead } from "./DirectionD";

/* ============================================================
   COMMERCIAL — top-level inner page.
   Ported from the claude.design handoff (page-commercial.jsx).
   Hub for commercial foundation repair that links out to each
   individual commercial service page. Reuses Direction D's nav,
   trust bar, pier path, pier systems, contact and footer.
   COMPLIANCE: no ratings or testimonials, no superlatives or
   guarantees, no em-dashes in copy, inspection-first language,
   workmanship warranty wording only. Financing and the
   one-business-day quote are residential-only, so they do NOT
   appear on this page.
   ============================================================ */

/* ---------- HERO ---------- */
function CHero() {
  return (
    <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Img label="Commercial foundation repair in progress. Pier installation at a warehouse" src="/images/commhub-hero.webp" style={{ height: "100%" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,12,12,.92) 0%, rgba(12,12,12,.6) 45%, rgba(12,12,12,.92) 100%)" }} />
      <div className="d-blueprint" style={{ opacity: .45 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 58 }}>
        <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 26 }}>
          <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
          <span style={{ color: "var(--red)" }}>/</span>
          <span style={{ color: "#fff" }}>Commercial</span>
        </div>
        <div className="c-hero">
          <div>
            <Kicker color="#fff">Commercial &amp; Industrial · Texas</Kicker>
            <h1 className="disp" style={{ fontSize: 60, margin: "20px 0 0", color: "#fff" }}>
              Commercial foundation repair, engineered and self-performed.
            </h1>
            <p style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 14px", maxWidth: 560, fontWeight: 500 }}>
              Warehouses, retail centers, multifamily, and industrial buildings settle for reasons an inspection can identify. We assess the structure and soil, engineer the plan of repair, and our own crews carry it out around your operations.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}><CAssessCard /></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- hero card: commercial assessment request ---------- */
const C_SVC_OPTS = ["Foundation Repair", "Concrete Lifting / Floor Leveling", "Concrete & Tilt-Wall", "Retaining Walls", "Drainage / Stormwater", "Not sure, need an assessment"];
const C_PROP = ["Warehouse / Industrial", "Retail / Office", "Multifamily", "Other commercial"];
function CAssessCard() {
  const router = useRouter();
  const [prop, setProp] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  /* commercial context: name, phone, city/zip, and email all required */
  const ready = !!(name.trim() && phone.trim() && city.trim() && email.trim());

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    if (website) { setSent(true); return; } // bot
    setBusy(true); setErr("");
    const ok = await submitLead({ lead: "Commercial", property: prop, service, name, phone, email, city, source: "commercial-hero-card", website });
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
            Your request is with our commercial team. We&apos;ll call <strong style={{ color: "var(--ink)" }}>{phone}</strong> to schedule the on-site assessment.
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
        <div style={{ fontSize: 12.5, fontWeight: 600, opacity: .92, marginTop: 2 }}>Free, no-obligation site visit</div>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 11 }}>
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
        <select className="form-input" value={prop} onChange={(e) => setProp(e.target.value)} style={{ color: prop ? "#222" : "#5d5b58" }}>
          <option value="">Property type…</option>
          {C_PROP.map((p) => <option key={p}>{p}</option>)}
        </select>
        <select className="form-input" value={service} onChange={(e) => setService(e.target.value)} style={{ color: service ? "#222" : "#5d5b58" }}>
          <option value="">Select a service…</option>
          {C_SVC_OPTS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input className="form-input" aria-label="Full name" placeholder="Full name *" required value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-input" aria-label="Phone number" placeholder="Phone number *" required value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" />
        <input className="form-input" aria-label="Email" placeholder="Email *" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-input" aria-label="City or ZIP" placeholder="City or ZIP *" required value={city} onChange={(e) => setCity(e.target.value)} />
        {err && <div style={{ color: "var(--red)", fontSize: 13, fontWeight: 600 }}>{err}</div>}
        <button type="submit" className="btn btn-red" disabled={!ready || busy}
          style={{ justifyContent: "center", width: "100%", marginTop: 2, opacity: ready && !busy ? 1 : .55, cursor: ready && !busy ? "pointer" : "not-allowed" }}>
          {busy ? "Sending…" : "Submit"} <Arrow s={15} />
        </button>
        <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>Engineer-owned · Fort Worth, TX</div>
        <TCPA />
      </div>
    </form>
  );
}

/* ---------- AUTHORITY INTRO ---------- */
const C_SCOPE: [string, string][] = [
  ["Assess", "An engineer-led inspection of the structure, slab elevations, and soil conditions."],
  ["Engineer", "A stamped plan of repair that specifies the pier system, spacing, and depths."],
  ["Self-perform", "Our own crews install the scope, sequenced around tenants and operations."],
  ["Verify", "Elevations re-checked and the work reviewed before we close out the site."],
];
function CIntro() {
  return (
    <section style={{ background: "var(--paper)", padding: "84px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="c-2" style={{ marginBottom: 44 }}>
          <div>
            <Kicker>What commercial foundation repair involves</Kicker>
            <h2 className="disp" style={{ fontSize: 46, margin: "16px 0 0", color: "var(--ink)" }}>One company from assessment to sign-off</h2>
          </div>
          <p className="lead">
            Commercial structures move for identifiable reasons. Expansive clay soils, moisture changes, poor drainage, undersized original foundations, and added load all show up differently in a slab than in a home. An inspection determines the cause, then the repair is engineered for the building it is going under.
          </p>
        </div>
        <div className="c-scope">
          {C_SCOPE.map(([t, d], i) => (
            <div key={t} style={{ borderTop: "3px solid var(--red)", paddingTop: 18 }}>
              <div className="disp" style={{ fontSize: 15, color: "var(--red)" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="disp" style={{ fontSize: 21, margin: "8px 0 10px", color: "var(--ink)" }}>{t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.55, fontWeight: 500 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES GRID (links to individual pages) ---------- */
const C_SERVICES = [
  { n: "01", t: "Commercial Foundation Repair", d: "Engineered pier systems that stabilize settling slabs and structural foundations.", items: ["Helical Piers", "Drilled Piers", "Steel & Hybrid Piers", "Underpinning", "Post-Tension Repair"], img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80", feature: true },
  { n: "02", t: "Concrete Lifting & Floor Leveling", d: "Settled warehouse slabs and commercial floors raised back to grade with polyurethane foam or mudjacking.", items: ["Warehouse Slab Foundation Repair", "Concrete Leveling", "Slab Lifting", "Void Filling"], img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80" },
  { n: "03", t: "Commercial Concrete & Tilt-Wall", d: "Structural slab pours, tilt-wall panel work, and structural crack repair.", items: ["Structural Slab Pours", "Tilt-Wall Panels", "Structural Crack Repair", "Expansion Joints"], img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80" },
  { n: "04", t: "Structural Retaining Walls", d: "Tieback anchors and structural wall work that manage load, slope, and lateral pressure.", items: ["Tieback Anchors", "Structural Wall Repair", "Wall Replacement"], img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80" },
  { n: "05", t: "Commercial Drainage & Stormwater", d: "Water management that protects the slab, footings, and building envelope.", items: ["French Drains", "Perimeter Drainage", "Stormwater Management", "Grading"], img: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=900&q=80" },
  { n: "06", t: "Earthwork & Site Grading", d: "Site preparation and grading that corrects how water moves across the property.", items: ["Cut & Fill", "Site Grading", "Soil Preparation"], img: "https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=900&q=80" },
];
function CServices() {
  return (
    <section id="c-services" className="tex-dark" style={{ padding: "92px 0" }}>
      <div className="wrap">
        <div className="c-2" style={{ alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Kicker>Commercial services</Kicker>
            <h2 className="disp" style={{ color: "#fff", fontSize: 50, marginTop: 16 }}>Every scope, self-performed</h2>
          </div>
          <p style={{ color: "#bdbdbd", fontWeight: 500, lineHeight: 1.55 }}>
            Six service lines, one contractor. Select a service for details on how the work is engineered, sequenced, and installed.
          </p>
        </div>
        <div className="c-svc">
          {C_SERVICES.map((s) => (
            <a href="#" key={s.t} className="lift" style={{ background: s.feature ? "var(--red)" : "var(--ink-2)", color: "#fff", border: "1px solid rgba(255,255,255,.07)", display: "flex", flexDirection: "column" }}>
              <Img label={s.t + ". Jobsite photo"} src={s.img} h={158} />
              <div style={{ padding: "24px 26px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                <span className="disp" style={{ fontSize: 14, color: s.feature ? "rgba(255,255,255,.7)" : "var(--red)" }}>{s.n}</span>
                <h3 className="disp" style={{ fontSize: 21, margin: "10px 0 10px", lineHeight: 1.06 }}>{s.t}</h3>
                <p style={{ color: s.feature ? "rgba(255,255,255,.92)" : "#a8a8a8", fontSize: 13.5, lineHeight: 1.5, marginBottom: 14 }}>{s.d}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "auto 0 0", display: "flex", flexWrap: "wrap", gap: "6px 14px" }}>
                  {s.items.map((it) => (
                    <li key={it} style={{ fontSize: 12, fontWeight: 600, color: s.feature ? "#fff" : "#cfcfcf", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 5, height: 5, background: s.feature ? "#fff" : "var(--red)" }} />{it}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
        <p style={{ color: "#8a8a8a", fontSize: 13, fontWeight: 500, marginTop: 22 }}>Workmanship warranty, terms vary by service.</p>
      </div>
    </section>
  );
}

/* ---------- SIGNS (educational, no scare tactics) ---------- */
const C_SIGNS: [string, string][] = [
  ["Interior slab cracks", "Cracks that widen over time, or that run across a floor rather than along a joint."],
  ["Sloping or uneven floors", "Racking in a warehouse, forklift ride quality changing, or doors dragging."],
  ["Separation at walls", "Gaps opening at tilt-wall panel joints, brick, or where walls meet the ceiling."],
  ["Doors and dock equipment", "Overhead doors out of square, dock levelers no longer sitting flush."],
  ["Standing water at the perimeter", "Water that pools near the foundation after rain instead of draining away."],
  ["Sunken exterior concrete", "Approaches, aprons, and walkways that have settled below their original grade."],
];
function CSigns() {
  return (
    <section style={{ background: "var(--bone)", padding: "86px 0" }}>
      <div className="wrap">
        <div style={{ maxWidth: 680, marginBottom: 36 }}>
          <Kicker>What to look for</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 12px", color: "var(--ink)" }}>Signs worth an inspection</h2>
          <p className="lead">These are common indicators, not a diagnosis. An inspection determines whether the cause is foundation movement, drainage, or something else, and whether any repair is warranted.</p>
        </div>
        <div className="c-signs">
          {C_SIGNS.map(([t, d]) => (
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

/* ---------- INDUSTRIES ---------- */
const C_INDUSTRIES = ["Warehouse & Distribution", "Retail & Shopping Centers", "Multifamily & Apartments", "Office & Medical", "Industrial & Manufacturing", "Municipal & Institutional"];
function CIndustries() {
  return (
    <section style={{ background: "var(--paper)", padding: "76px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 30 }}>
          <div>
            <Kicker>Properties we work on</Kicker>
            <h2 className="disp" style={{ fontSize: 40, marginTop: 14, color: "var(--ink)" }}>Industries served</h2>
          </div>
          <p style={{ color: "var(--muted)", fontWeight: 500, maxWidth: 380, lineHeight: 1.55 }}>Work is scheduled around tenants, shifts, and operations to keep the property running.</p>
        </div>
        <div className="c-ind">
          {C_INDUSTRIES.map((t) => (
            <div key={t} style={{ border: "1px solid var(--line)", borderTop: "3px solid var(--red)", padding: "20px 18px", minHeight: 96, display: "flex", alignItems: "flex-start" }}>
              <span className="disp" style={{ fontSize: 16, lineHeight: 1.15, color: "var(--ink)" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY / PROPERTY MANAGER VALUE ---------- */
const C_WHY: [string, string][] = [
  ["Engineered scopes, not estimates by eye", "The plan specifies pier type, spacing, and depth, so bids can be compared on the same basis."],
  ["Low disruption around operations", "Phased work, off-hours scheduling, and dust and access control inside occupied buildings."],
  ["Documentation for owners and lenders", "Elevation records, engineered plans, and close-out documents for your files."],
  ["One accountable contractor", "The company that assesses the building also engineers the plan and performs the work."],
];
function CWhy() {
  return (
    <section className="tex-light" style={{ padding: "88px 0" }}>
      <div className="wrap c-2">
        <div>
          <Kicker>For owners and property managers</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 18px", color: "var(--ink)" }}>Built for how commercial projects get approved</h2>
          <div>
            {C_WHY.map(([t, d], i) => (
              <div key={t} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, padding: "18px 0", borderTop: i ? "1px solid var(--line)" : "2px solid var(--ink)" }}>
                <span className="disp" style={{ color: "var(--red)", fontSize: 15 }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="disp" style={{ fontSize: 18, color: "var(--ink)" }}>{t}</div>
                  <div style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.55, marginTop: 6, fontWeight: 500 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", minHeight: 430 }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Img label="Crew installing piers at an occupied commercial property" src="https://images.unsplash.com/photo-1597047084897-51e81819a499?w=1000&q=80" style={{ height: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA BAND ---------- */
function CCtaBand() {
  return (
    <section style={{ background: "var(--red)", padding: "54px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <div>
          <h2 className="disp" style={{ color: "#fff", fontSize: 34, lineHeight: 1.05 }}>Have a building that is moving?</h2>
          <p style={{ color: "rgba(255,255,255,.92)", fontWeight: 500, fontSize: 16, marginTop: 8 }}>Request an engineered assessment from the contractor who will perform the work.</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/request/" className="btn" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>Request a commercial assessment <Arrow s={15} /></a>
          <a className="btn" href={PHONE_TEL} style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)" }}><Phone s={14} c="#fff" /> {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ASSEMBLY ---------- */
export default function CommercialPage() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <CHero />
      <DTrustBar />
      <CServices />
      <CIntro />
      <CSigns />
      <DPierPath />
      <DPierSystems />
      <CIndustries />
      <CWhy />
      <DContact />
      <DFooter />
    </div>
  );
}
