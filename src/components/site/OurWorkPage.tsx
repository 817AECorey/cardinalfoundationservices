"use client";

import { useState } from "react";
import Link from "next/link";
import { Arrow, Phone } from "./icons";
import { Btn, Kicker, PhotoSlot, dScroll, PHONE, PHONE_TEL } from "./primitives";
import { DNav, DTrustBar, DContact, DFooter } from "./DirectionD";

/* ============================================================
   OUR WORK — inner page (portfolio).
   Ported from the claude.design handoff (page-our-work.jsx).
   Filterable project gallery. Reuses Direction D's nav, trust
   bar, contact form, and footer.
   COMPLIANCE: no ratings/testimonials, no superlatives or
   guarantees, no em-dashes, no fabricated client quotes. All
   photos are labeled placeholder slots for real jobsite photos.
   ============================================================ */

/* The nine documented case studies, snapshot-parity carryover; each card
   links to its full case-study page under /projects/{slug}/. */
const W_CATS = ["All", "Commercial", "Multifamily", "Industrial"];
type WProject = { t: string; cat: string; loc: string; scope: string[]; d: string; href: string; feature?: boolean };
const W_PROJECTS: WProject[] = [
  { t: "Tilt Wall Foundation & Drainage Restoration", cat: "Commercial", loc: "Dallas, TX", scope: ["Tilt Wall", "Foam Injection", "Drainage"], d: "Tilt wall panels lifted and stabilized, interior slabs foam-lifted, and stormwater drainage corrected at a modern commercial space.", href: "/projects/tilt-wall-foundation-drainage-restoration/", feature: true },
  { t: "Steel Piers at N Stemmons", cat: "Commercial", loc: "Dallas, TX", scope: ["Steel Piers 50+ ft", "French Drain", "Post-Tension Repair"], d: "Hotel foundation restored with steel piers driven 50+ feet, a perimeter french drain, and post-tension cables spliced and re-tensioned.", href: "/projects/steel-piers-n-stemmons/" },
  { t: "Diplomat Drive: Industrial Poly Lift & Void Fill", cat: "Industrial", loc: "DFW, TX", scope: ["Poly Injection", "Void Filling", "Slab Lift"], d: "Sunken industrial office floors lifted back to level with precision polyurethane injection, no invasive demolition.", href: "/projects/diplomat-drive-polyurethane-injection-industrial-foundation-lift-void-fill/" },
  { t: "Baytown Multifamily Foundation Repair", cat: "Multifamily", loc: "Baytown, TX", scope: ["Piers 30-35 ft", "Capital Restoration"], d: "Capital-expenditure foundation repair with piers designed to regional soil, restoring an aging community to modern condition.", href: "/projects/baytown-multi-family/" },
  { t: "Lewisville Multifamily: 850+ Steel Piers", cat: "Multifamily", loc: "Lewisville, TX", scope: ["850+ Steel Piers", "Drainage", "Plumbing Verified"], d: "Lender-driven repair for sale and refinance: 850+ piers, drainage stabilization, and post-lift plumbing verification in one month.", href: "/projects/lewisville-tx-multi-family-pier-stabilization-foundation-lifting-and-drainage-repair/" },
  { t: "Multifamily Foundation Repair, Austin", cat: "Multifamily", loc: "Austin, TX", scope: ["Steel Piers", "Hillside", "Cast-Iron Coordination"], d: "High-volume pier installation on a hillside property, coordinated around aging cast-iron plumbing and occupied units.", href: "/projects/multi-family-foundation-repair-in-austin-tx/" },
  { t: "Multifamily Foundation Repair, Carrollton", cat: "Multifamily", loc: "Carrollton, TX", scope: ["Targeted Repairs", "Custom Drainage", "Occupied Units"], d: "Foundation and drainage renovation on highly expansive soils, sequenced vacant-units-first around residents.", href: "/projects/multifamily-foundation-repair-carrollton-tx/" },
  { t: "Restaurant Foundation Repair & Foam Injection", cat: "Commercial", loc: "DFW, TX", scope: ["Hybrid Piers", "Foam Injection", "Zero Interruptions"], d: "Hybrid piers at perimeter walls and a clean interior slab lift, scheduled around an active drive-thru with no business interruptions.", href: "/projects/restaurant-foundation-repair-foam-injection/" },
  { t: "Creekside Erosion & Foundation Stabilization", cat: "Commercial", loc: "DFW, TX", scope: ["Piers to Bedrock", "Plumbing Repair", "Mudjacking"], d: "Office building beside an eroding creek stabilized with piers pressed to bedrock at 10,000 PSI, plus plumbing repair and void fill.", href: "/projects/commercial-foundation-stabilization-creekside-erosion-repair/" },
];

/* ---------- HERO ---------- */
function WHero() {
  return (
    <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
      <div className="d-blueprint" style={{ opacity: .5 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 56 }}>
        <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 30 }}>
          <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
          <span style={{ color: "var(--red)" }}>/</span>
          <span style={{ color: "#fff" }}>Our Work</span>
        </div>
        <Kicker color="#fff">Portfolio · Evidence system</Kicker>
        <h1 className="disp" style={{ fontSize: 58, margin: "20px 0 0", color: "#fff", maxWidth: 760 }}>
          Our Work
        </h1>
        <p style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 0", maxWidth: 680, fontWeight: 500 }}>
          Every project here is documented the same way: what we found, what we recommended and why, how the work was executed, and what the result was. That standard exists because proof beats promises, especially from a company you have not hired yet. Filter by project type, or start with the ones that match your property.
        </p>
      </div>
    </section>
  );
}

/* ---------- FEATURED PROJECT ---------- */
function WFeature() {
  const p = W_PROJECTS[0];
  return (
    <section style={{ background: "var(--paper)", padding: "84px 0 0" }}>
      <div className="wrap">
        <div style={{ marginBottom: 30 }}>
          <Kicker>Featured project</Kicker>
        </div>
        <div className="w-feature" style={{ border: "1px solid var(--line)" }}>
          <Link href={p.href} style={{ position: "relative", minHeight: 400, display: "block" }}>
            <PhotoSlot label={p.t + ". Real before and after jobsite photos"} style={{ position: "absolute", inset: 0 }} />
          </Link>
          <div style={{ background: "var(--ink)", color: "#fff", padding: "42px 40px", display: "flex", flexDirection: "column" }}>
            <span className="over" style={{ color: "var(--red)", fontSize: 11 }}>{p.loc}</span>
            <h2 className="disp" style={{ fontSize: 32, margin: "14px 0 14px", lineHeight: 1.05 }}>{p.t}</h2>
            <p style={{ color: "#b8b8b8", fontSize: 15.5, lineHeight: 1.6, marginBottom: 20 }}>{p.d}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 26 }}>
              {p.scope.map((s) => <span key={s} style={{ border: "1px solid rgba(255,255,255,.2)", padding: "6px 11px", fontSize: 12, fontWeight: 600, color: "#e3e1de" }}>{s}</span>)}
            </div>
            <div style={{ marginTop: "auto", display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Btn variant="red" arrow="right" href={p.href}>Read the case study</Btn>
              <Btn variant="ghost" arrow="none" href="#contact" onClick={(e) => { e.preventDefault(); dScroll("contact"); }}>Discuss a similar project</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function WGallery() {
  const [cat, setCat] = useState("All");
  const list = W_PROJECTS.slice(1).filter((p) => cat === "All" || p.cat === cat);
  return (
    <section id="w-gallery" style={{ background: "var(--paper)", padding: "64px 0 92px" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 18, marginBottom: 28 }}>
          <h2 className="disp" style={{ fontSize: 40, color: "var(--ink)" }}>All projects</h2>
          <div className="w-filters">
            {W_CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className="over"
                style={{ border: "2px solid " + (cat === c ? "var(--red)" : "var(--line)"), background: cat === c ? "var(--red)" : "#fff", color: cat === c ? "#fff" : "var(--ink)", padding: "9px 14px", fontSize: 11, cursor: "pointer", letterSpacing: ".08em" }}>{c}</button>
            ))}
          </div>
        </div>
        <div className="w-grid">
          {list.map((p) => (
            <a href={p.href} key={p.t} className="lift" style={{ border: "1px solid var(--line)", background: "#fff", display: "flex", flexDirection: "column" }}>
              <PhotoSlot label={p.t + ". Real jobsite photo"} style={{ height: 200 }} />
              <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <span className="over" style={{ color: "var(--red)", fontSize: 10.5 }}>{p.loc}</span>
                <h3 className="disp" style={{ fontSize: 19, margin: "10px 0 10px", lineHeight: 1.1, color: "var(--ink)" }}>{p.t}</h3>
                <p style={{ color: "var(--muted)", fontSize: 13.5, lineHeight: 1.55, fontWeight: 500, marginBottom: 14 }}>{p.d}</p>
                <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.scope.map((s) => <span key={s} style={{ border: "1px solid var(--line)", padding: "4px 9px", fontSize: 11, fontWeight: 600, color: "var(--muted)" }}>{s}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
        {list.length === 0 && <p style={{ color: "var(--muted)", fontWeight: 500 }}>No projects in this category yet.</p>}
      </div>
    </section>
  );
}

/* ---------- PROCESS STRIP ---------- */
const W_HOW: [string, string][] = [
  ["Documented elevations", "Every project starts and ends with an elevation survey, so the result is measured, not described."],
  ["Engineered scopes", "The plan on the wall is the plan in the ground. Pier type, spacing, and depth are specified before work starts."],
  ["Self-performed", "Cardinal crews built every project on this page. No subcontracted pier work."],
];
function WHow() {
  return (
    <section className="tex-dark" style={{ padding: "80px 0" }}>
      <div className="wrap">
        <div style={{ maxWidth: 620, marginBottom: 38 }}>
          <Kicker>Behind every project</Kicker>
          <h2 className="disp" style={{ color: "#fff", fontSize: 42, marginTop: 16 }}>How the results hold up</h2>
        </div>
        <div className="w-grid">
          {W_HOW.map(([t, d], i) => (
            <div key={t} style={{ borderTop: "3px solid var(--red)", paddingTop: 18 }}>
              <span className="disp" style={{ fontSize: 15, color: "var(--red)" }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="disp" style={{ color: "#fff", fontSize: 21, margin: "8px 0 10px" }}>{t}</h3>
              <p style={{ color: "#a8a8a8", fontSize: 14.5, lineHeight: 1.55 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function WCta() {
  return (
    <section style={{ background: "var(--red)", padding: "54px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <div>
          <h2 className="disp" style={{ color: "#fff", fontSize: 34, lineHeight: 1.05 }}>Have a project like these?</h2>
          <p style={{ color: "rgba(255,255,255,.92)", fontWeight: 500, fontSize: 16, marginTop: 8 }}>Free, no-obligation inspection. Commercial, residential, or new construction.</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={() => dScroll("contact")} className="btn" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>Request an inspection <Arrow s={15} /></button>
          <a className="btn" href={PHONE_TEL} style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)" }}><Phone s={14} c="#fff" /> {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ASSEMBLY ---------- */
export default function OurWorkPage() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <WHero />
      <DTrustBar />
      <WFeature />
      <WGallery />
      <WHow />
      <DContact />
      <DFooter />
    </div>
  );
}
