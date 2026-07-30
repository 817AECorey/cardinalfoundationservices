"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Arrow, Phone, Check } from "./icons";
import { Btn, Kicker, Img, TCPA, dScroll, PHONE, PHONE_TEL } from "./primitives";
import { DNav, DTrustBar, DPierPath, DPierSystems, DContact, DFooter, submitLead } from "./DirectionD";

/* ============================================================
   RESIDENTIAL — top-level inner page.
   Composed to mirror the commercial page (no design handoff file
   exists for this one). Hub for specialized residential work that
   links out to each individual residential service page. Reuses
   Direction D's nav, trust bar, pier path, pier systems, contact
   and footer.
   POSITIONING: large, complex, and high-end residential work,
   not small routine jobs.
   COMPLIANCE: no ratings or testimonials, no superlatives or
   guarantees, no em-dashes in copy, inspection-first language,
   workmanship warranty wording only. Financing and the
   one-business-day quote are residential-only, so they DO
   appear on this page.
   SERVICE AREA: DFW plus Houston and surrounding key cities.
   ============================================================ */

/* ---------- HERO ---------- */
function RHero() {
  return (
    <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Img label="Residential foundation repair in progress. Pier installation at a Texas home" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1700&q=80" style={{ height: "100%" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,12,12,.92) 0%, rgba(12,12,12,.6) 45%, rgba(12,12,12,.92) 100%)" }} />
      <div className="d-blueprint" style={{ opacity: .45 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 58 }}>
        <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 26 }}>
          <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
          <span style={{ color: "var(--red)" }}>/</span>
          <span style={{ color: "#fff" }}>Residential</span>
        </div>
        <div className="c-hero">
          <div>
            <Kicker color="#fff">Specialized Residential · DFW &amp; Houston</Kicker>
            <h1 className="disp" style={{ fontSize: 60, margin: "20px 0 0", color: "#fff" }}>
              Residential foundation repair, <span style={{ color: "var(--red)" }}>engineered and self-performed.</span>
            </h1>
            <p style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 14px", maxWidth: 560, fontWeight: 500 }}>
              We take the large, complicated repairs that call for specialized crews. Complex structural issues, big retaining walls, concrete lifting, and custom homes across DFW and the Houston area. An inspection determines the cause before anything is recommended.
            </p>
            <p style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: "0 0 28px", display: "flex", alignItems: "center", gap: 10 }}>
              <Check s={16} c="var(--red)" /> Every scope is reviewed by a licensed Professional Engineer.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn variant="red" arrow="ur" href="#r-services" onClick={(e) => { e.preventDefault(); dScroll("r-services"); }}>Browse Residential Services</Btn>
              <Btn variant="ghost" arrow="none" href={PHONE_TEL}><Phone s={15} c="#fff" /> {PHONE}</Btn>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}><RInspectCard /></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- hero card: free home inspection request ---------- */
const R_SVC_OPTS = ["Complex Structural Repair", "Large Retaining Walls", "Concrete Lifting / Leveling", "Custom Home Foundation", "Not sure, need an inspection"];
const R_PROP = ["Single-family home", "Custom / high-end home", "Pier & beam home", "Townhome / duplex", "Other"];
function RInspectCard() {
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
  /* residential context: name, phone, city/zip required; email optional */
  const ready = !!(name.trim() && phone.trim() && city.trim());

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    if (website) { setSent(true); return; } // bot
    setBusy(true); setErr("");
    const ok = await submitLead({ lead: "Residential", property: prop, service, name, phone, email, city, source: "residential-hero-card", website });
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
            Your request is with our residential team. We&apos;ll call <strong style={{ color: "var(--ink)" }}>{phone}</strong> to schedule your free inspection. Financing is available, and your quote arrives within one business day.
          </p>
          <a className="btn btn-red" href={PHONE_TEL} style={{ justifyContent: "center", width: "100%" }}><Phone s={15} c="#fff" /> Call now instead</a>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} style={{ background: "#fff", width: "100%", maxWidth: 380, boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}>
      <div style={{ background: "var(--red)", color: "#fff", padding: "15px 22px" }}>
        <div className="disp" style={{ fontSize: 19 }}>Book a Free Inspection</div>
        <div style={{ fontSize: 12.5, fontWeight: 600, opacity: .92, marginTop: 2 }}>Free, no-obligation, engineer-led</div>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 11 }}>
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
        <select className="form-input" value={prop} onChange={(e) => setProp(e.target.value)} style={{ color: prop ? "#222" : "#5d5b58" }}>
          <option value="">Home type…</option>
          {R_PROP.map((p) => <option key={p}>{p}</option>)}
        </select>
        <select className="form-input" value={service} onChange={(e) => setService(e.target.value)} style={{ color: service ? "#222" : "#5d5b58" }}>
          <option value="">Select a service…</option>
          {R_SVC_OPTS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input className="form-input" aria-label="Full name" placeholder="Full name *" required value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-input" aria-label="Phone number" placeholder="Phone number *" required value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" />
        <input className="form-input" aria-label="Email" placeholder="Email (optional)" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-input" aria-label="City or ZIP" placeholder="City or ZIP *" required value={city} onChange={(e) => setCity(e.target.value)} />
        {err && <div style={{ color: "var(--red)", fontSize: 13, fontWeight: 600 }}>{err}</div>}
        <button type="submit" className="btn btn-red" disabled={!ready || busy}
          style={{ justifyContent: "center", width: "100%", marginTop: 2, opacity: ready && !busy ? 1 : .55, cursor: ready && !busy ? "pointer" : "not-allowed" }}>
          {busy ? "Sending…" : "Request Free Inspection"} <Arrow s={15} />
        </button>
        <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>Financing available · Quote in one business day</div>
        <TCPA />
      </div>
    </form>
  );
}

/* ---------- AUTHORITY INTRO ---------- */
const R_SCOPE: [string, string][] = [
  ["Assess", "An engineer-led inspection of your home, slab elevations, and the soil around it."],
  ["Engineer", "A plan of repair that specifies the pier system, spacing, and depths for your house."],
  ["Self-perform", "Our own crews carry out the scope, scheduled around your household."],
  ["Verify", "Elevations re-checked and the work reviewed with you before we leave."],
];
function RIntro() {
  return (
    <section style={{ background: "var(--paper)", padding: "84px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="c-2" style={{ marginBottom: 44 }}>
          <div>
            <Kicker>What residential foundation repair involves</Kicker>
            <h2 className="disp" style={{ fontSize: 46, margin: "16px 0 0", color: "var(--ink)" }}>One company from inspection to sign-off</h2>
          </div>
          <p className="lead">
            Homes in North Texas and the Houston area sit on expansive clay soils that swell and shrink with moisture. Some movement is seasonal and cosmetic. Some is structural. An inspection determines which one your home has, and if it shows you don&apos;t need work, we&apos;ll tell you.
          </p>
        </div>
        <div className="c-scope">
          {R_SCOPE.map(([t, d], i) => (
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
const R_SERVICES: { n: string; t: string; d: string; items: string[]; img: string; feature?: boolean; href?: string }[] = [
  { n: "01", t: "Complex Structural Repair", d: "Multi-symptom failures and engineered pier plans for homes with more than one thing going on.", items: ["Foundation Settlement", "Engineered Pier Plans", "Pier & Beam Repair", "Multi-Symptom Failures"], img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80", feature: true, href: "/residential/foundation-repair" },
  { n: "02", t: "Large Retaining Walls", d: "Tieback anchors, structural rebuilds, and replacement for walls that hold back real load.", items: ["Tieback Anchors", "Structural Rebuilds", "Wall Replacement"], img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80" },
  { n: "03", t: "Concrete Lifting & Leveling", d: "Settled slabs, driveways, and pool decks raised back to grade with polyurethane foam or mudjacking.", items: ["House Lifting", "Driveways & Pool Decks", "Slab Lifting", "Void Filling"], img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80" },
  { n: "04", t: "Large & Custom Home Foundations", d: "Foundation work for large and custom homes, where the repair has to respect the house.", items: ["Pier & Beam", "Slab Foundations", "Custom Home Repair"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" },
];
function RServices() {
  return (
    <section id="r-services" className="tex-dark" style={{ padding: "92px 0" }}>
      <div className="wrap">
        <div className="c-2" style={{ alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Kicker>Residential services</Kicker>
            <h2 className="disp" style={{ color: "#fff", fontSize: 50, marginTop: 16 }}>The repairs that call for specialized crews</h2>
          </div>
          <p style={{ color: "#bdbdbd", fontWeight: 500, lineHeight: 1.55 }}>
            Four service lines, one contractor. We focus on large, complex, full-scope residential work rather than small routine jobs. Select a service for details on how the work is engineered and installed.
          </p>
        </div>
        <div className="r-svc">
          {R_SERVICES.map((s) => (
            <a href={s.href ?? "#"} key={s.t} className="lift" style={{ background: s.feature ? "var(--red)" : "var(--ink-2)", color: "#fff", border: "1px solid rgba(255,255,255,.07)", display: "flex", flexDirection: "column" }}>
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
                <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: s.feature ? "#fff" : "var(--red)" }}>
                  View service <Arrow s={14} c={s.feature ? "#fff" : "var(--red)"} />
                </div>
              </div>
            </a>
          ))}
        </div>
        <p style={{ color: "#8a8a8a", fontSize: 13, fontWeight: 500, marginTop: 22 }}>Workmanship warranty, terms vary by service. Financing available on residential work.</p>
      </div>
    </section>
  );
}

/* ---------- SIGNS (educational, no scare tactics) ---------- */
const R_SIGNS: [string, string][] = [
  ["Cracks in brick or sheetrock", "Stair-step cracks in brick, or drywall cracks that open at door and window corners."],
  ["Doors and windows sticking", "Doors that drag or no longer latch, windows that have become hard to open."],
  ["Sloping or uneven floors", "A slope you can feel walking across a room, or gaps opening under baseboards."],
  ["Separation at trim and joints", "Gaps at crown molding, frieze boards, or where brick meets siding."],
  ["Standing water at the perimeter", "Water that pools near the foundation after rain instead of draining away."],
  ["Sunken driveways and pool decks", "Concrete that has settled below its original grade, or trip hazards at the joints."],
];
function RSigns() {
  return (
    <section style={{ background: "var(--bone)", padding: "86px 0" }}>
      <div className="wrap">
        <div style={{ maxWidth: 680, marginBottom: 36 }}>
          <Kicker>What to look for</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 12px", color: "var(--ink)" }}>Signs worth an inspection</h2>
          <p className="lead">These are common indicators, not a diagnosis. An inspection determines whether the cause is foundation movement, drainage, or normal seasonal soil activity, and whether any repair is warranted.</p>
        </div>
        <div className="c-signs">
          {R_SIGNS.map(([t, d]) => (
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
      </div>
    </section>
  );
}

/* ---------- SERVICE AREA (DFW + Houston) ---------- */
const R_AREA_DFW = ["Fort Worth", "Dallas", "Arlington", "Plano", "Frisco", "McKinney", "Denton", "Keller", "Grapevine", "Mansfield", "Carrollton", "Lewisville"];
const R_AREA_HOU = ["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress"];
function RServiceArea() {
  return (
    <section style={{ background: "var(--paper)", padding: "76px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 30 }}>
          <div>
            <Kicker>Where we work</Kicker>
            <h2 className="disp" style={{ fontSize: 40, marginTop: 14, color: "var(--ink)" }}>Fort Worth based. DFW and Houston served.</h2>
          </div>
          <p style={{ color: "var(--muted)", fontWeight: 500, maxWidth: 380, lineHeight: 1.55 }}>Our crews run out of Fort Worth and serve homes across the DFW metroplex and the greater Houston area.</p>
        </div>
        <div className="c-2" style={{ alignItems: "flex-start" }}>
          {[["DFW & North Texas", R_AREA_DFW], ["Houston & Surrounding", R_AREA_HOU]].map(([h, cities]) => (
            <div key={h as string} style={{ border: "1px solid var(--line)", borderTop: "3px solid var(--red)", padding: "24px 24px 26px" }}>
              <h3 className="disp" style={{ fontSize: 20, color: "var(--ink)", marginBottom: 16 }}>{h}</h3>
              <div className="r-area">
                {(cities as string[]).map((c) => (
                  <span key={c} style={{ border: "1px solid var(--line)", padding: "6px 12px", fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13.5, fontWeight: 500, marginTop: 18 }}>Not on the list? Ask. We take on the right projects across Texas.</p>
      </div>
    </section>
  );
}

/* ---------- WHY / HOMEOWNER VALUE ---------- */
const R_WHY: [string, string][] = [
  ["An engineer inspects, not a salesperson", "The person who evaluates your home is engineer-led, and the recommendation is based on what the structure and soil are actually doing."],
  ["A written quote in one business day", "Residential quotes arrive within one business day of the inspection, with the scope spelled out."],
  ["Financing available", "Payment options that let you address the problem now and spread the cost over time."],
  ["One accountable contractor", "The company that inspects your home also engineers the plan and performs the work."],
];
function RWhy() {
  return (
    <section className="tex-light" style={{ padding: "88px 0" }}>
      <div className="wrap c-2">
        <div>
          <Kicker>For homeowners</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 18px", color: "var(--ink)" }}>Built for how a home repair should go</h2>
          <div>
            {R_WHY.map(([t, d], i) => (
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
            <Img label="Crew installing piers at a Texas home" src="https://images.unsplash.com/photo-1597047084897-51e81819a499?w=1000&q=80" style={{ height: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA BAND ---------- */
function RCtaBand() {
  return (
    <section style={{ background: "var(--red)", padding: "54px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <div>
          <h2 className="disp" style={{ color: "#fff", fontSize: 34, lineHeight: 1.05 }}>Worried about your home?</h2>
          <p style={{ color: "rgba(255,255,255,.92)", fontWeight: 500, fontSize: 16, marginTop: 8 }}>Book a free, no-pressure inspection from an engineer-led team.</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={() => dScroll("contact")} className="btn" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>Book a free home inspection <Arrow s={15} /></button>
          <a className="btn" href={PHONE_TEL} style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)" }}><Phone s={14} c="#fff" /> {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ASSEMBLY ---------- */
export default function ResidentialPage() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <RHero />
      <DTrustBar />
      <RIntro />
      <RServices />
      <RSigns />
      <DPierPath />
      <DPierSystems />
      <RServiceArea />
      <RWhy />
      <RCtaBand />
      <DContact />
      <DFooter />
    </div>
  );
}
