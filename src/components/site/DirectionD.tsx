"use client";

import { useState } from "react";
import { Arrow, Phone, Check } from "./icons";
import { Btn, Kicker, Img, Logo, dScroll, PHONE, PHONE_TEL, EMAIL } from "./primitives";

/* ============================================================
   DIRECTION D — Production homepage.
   Ported from the claude.design handoff. Compliance preserved:
   no fabricated ratings/testimonials, no superlatives/guarantees,
   financing + one-business-day quote = residential only,
   no em-dashes in on-page copy, DFW/Texas geography only.
   ============================================================ */

/* ---------- form submission helper ---------- */
type LeadPayload = Record<string, string> & { lead: string; source: string };
async function submitLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/* ---------- data ---------- */
const D_LEADS = ["Commercial", "Residential", "New Construction"];
const D_SVC: Record<string, string[]> = {
  Commercial: ["Foundation Repair", "Concrete Lifting / Floor Leveling", "Concrete & Tilt-Wall", "Retaining Walls", "Drainage / Stormwater", "Not sure, need an assessment"],
  Residential: ["Complex Structural Repair", "Large Retaining Walls", "Concrete Lifting / Leveling", "High-End Home Foundation", "Not sure, need an inspection"],
  "New Construction": ["Commercial Concrete", "Tilt-Wall Construction", "Builder Work / Additions", "Earthwork / Grading", "Not sure, need to scope"],
};
const D_URGENCY = ["Active damage / urgent", "Within the month", "Planning / budgeting"];
const D_CITIES = ["Fort Worth", "Dallas", "Arlington", "Plano", "Frisco", "McKinney", "Denton", "Keller", "Grapevine", "Mansfield", "Carrollton", "Lewisville"];
const D_TRUSTBAR = ["Engineer-Owned & Operated", "Licensed Professional Engineer", "BBB A-Rated", "AAGD / TAB / ASA Member", "Free Inspection", "Turn-Key Execution"];

const D_COMMERCIAL = [
  { n: "01", t: "Commercial Foundation Repair", d: "Engineered pier systems for warehouses, retail, and structural buildings.", items: ["Helical Piers & Tiebacks", "Drilled Piers", "Hybrid Pier Systems", "Underpinning", "Post-Tension Repair"] },
  { n: "02", t: "Concrete Lifting & Floor Leveling", d: "Settled warehouse slabs and commercial floors raised back to grade with polyurethane foam or mudjacking. Large areas, minimal downtime.", items: ["Warehouse Slab Foundation Repair", "Concrete Leveling", "Slab Lifting", "Void Filling"] },
  { n: "03", t: "Commercial Concrete & Tilt-Wall", d: "Structural slab pours, tilt-wall fabrication, and structural crack repair.", items: ["Slab Pouring", "Tilt-Wall Fabrication", "Structural Crack Repair", "Expansion Joint & Mastic"] },
  { n: "04", t: "Structural Retaining Walls", d: "Tieback anchors and structural retaining wall work that manage load and slope.", items: ["Tieback Anchors", "Structural Wall Repair"] },
  { n: "05", t: "Commercial Drainage & Stormwater", d: "Water management that protects the building envelope and foundation.", items: ["French Drain Systems", "Perimeter Drainage", "Stormwater Management"] },
];
const D_NEWCON = [
  { t: "Commercial Concrete & Tilt-Wall", d: "Structural slab pours, panel fabrication, and erection for warehouse and industrial shells." },
  { t: "Builder Work & Additions", d: "Specialized structural work for builders and developers. Custom and high-end residential, additions, and builder piers." },
  { t: "Earthwork & Grading", d: "Site preparation, grading, and developer infrastructure that sets the foundation up correctly." },
];
const D_STEPS = [
  { n: "01", t: "Free On-Site Assessment", d: "An engineer-led team inspects the structure and soil. An inspection determines the cause before anything is recommended." },
  { n: "02", t: "Engineered Plan & Fixed Quote", d: "You receive an accurate engineered plan of repair and a clear, fixed quote for the scope." },
  { n: "03", t: "Turn-Key Repair, Verified", d: "Our own crews self-perform the full scope on schedule, and we verify the work before we leave the site." },
];
const D_PIERS: [string, string][] = [
  ["Concrete Pressed Piers", "Proven stability for slab foundations."],
  ["Steel Piers", "High-grade steel driven to load-bearing strata."],
  ["Helical Piers", "Screw-in steel piers, fast and low-disturbance."],
  ["Drilled Piers", "Deep cast-in-place piers for heavy structures."],
  ["Hybrid Piers", "A blend of strength, depth, and cost control."],
];
const D_WORK = [
  { t: "Tilt-Wall Foundation & Drainage Restoration", scope: "Commercial · Foundation + Drainage", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1100&q=80" },
  { t: "Industrial Polyurethane Lift & Void Fill", scope: "Industrial · Concrete Lifting", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80" },
  { t: "Multifamily Foundation Repair", scope: "Multifamily · DFW", img: "https://images.unsplash.com/photo-1597047084897-51e81819a499?w=900&q=80" },
  { t: "Steel Pier Installation", scope: "Foundation · Steel Piers", img: "https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=900&q=80" },
];
const D_RES = [
  { t: "Complex Structural Repair", items: ["Multi-symptom failures", "Engineered pier plans"] },
  { t: "Large Retaining Walls", items: ["Tieback anchors", "Structural rebuilds"] },
  { t: "High-End & Custom Homes", items: ["Pier & beam", "Slab foundations"] },
  { t: "Concrete Lifting & Leveling", items: ["House lifting", "Driveways & pool decks", "Slab lifting"] },
];

/* ---------- 1 · NAV ---------- */
function DNav() {
  const [open, setOpen] = useState(false);
  const menu: Record<string, string[]> = {
    Commercial: ["Commercial Foundation Repair", "Concrete Lifting & Floor Leveling", "Commercial Concrete & Tilt-Wall", "Structural Retaining Walls", "Drainage & Stormwater"],
    Residential: ["Complex Structural Repair", "Large Retaining Walls", "Concrete Lifting & Leveling", "High-End Home Foundations"],
    "New Construction": ["Commercial Concrete", "Tilt-Wall Construction", "Builder Work & Additions", "Earthwork & Grading"],
  };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ background: "var(--ink)", color: "#fff" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 36 }}>
          <span className="over" style={{ fontSize: 11, color: "#cfcfcf", letterSpacing: ".12em" }}>
            <span style={{ color: "var(--red)" }}>●</span>&nbsp; Engineer-Owned · Fort Worth, TX · BBB A-Rated
          </span>
          <a href={`mailto:${EMAIL}`} className="over" style={{ fontSize: 11, color: "#cfcfcf" }}>{EMAIL}</a>
        </div>
      </div>
      <div style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 74 }}>
          <Logo light={false} h={40} />
          <nav className="d-nav-links">
            {Object.keys(menu).map((m) => (
              <div className="navlink" key={m} style={{ display: "flex", alignItems: "center" }}>
                <span className="over" style={{ color: "var(--ink)", cursor: "pointer", fontSize: 12.5, letterSpacing: ".06em", whiteSpace: "nowrap" }}>{m} ▾</span>
                <div className="dd">{menu[m].map((i) => <a key={i} href="#">{i}</a>)}</div>
              </div>
            ))}
            {["About", "Our Work", "Contact"].map((l) => (
              <a key={l} href="#" className="over" style={{ color: "var(--muted)", fontSize: 12.5, letterSpacing: ".06em", whiteSpace: "nowrap" }}>{l}</a>
            ))}
            <a className="phone-link" href={PHONE_TEL} style={{ color: "var(--ink)", fontSize: 15, whiteSpace: "nowrap" }}>
              <Phone s={14} c="var(--red)" /> {PHONE}
            </a>
            <Btn variant="red" arrow="ur" href="#contact" onClick={(e) => { e.preventDefault(); dScroll("contact"); }} style={{ padding: "11px 16px", fontSize: 12.5 }}>Free Inspection</Btn>
          </nav>
          <button className="d-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu"
            style={{ background: "none", border: 0, padding: 8, flexDirection: "column", gap: 5, cursor: "pointer" }}>
            <span style={{ width: 26, height: 3, background: "var(--ink)", display: "block", transition: ".2s", transform: open ? "translateY(8px) rotate(45deg)" : "none" }} />
            <span style={{ width: 26, height: 3, background: "var(--ink)", display: "block", opacity: open ? 0 : 1 }} />
            <span style={{ width: 26, height: 3, background: "var(--ink)", display: "block", transition: ".2s", transform: open ? "translateY(-8px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>
      <div className={"d-mobile" + (open ? " open" : "")} style={{ background: "var(--ink)", borderTop: "3px solid var(--red)" }}>
        <div className="wrap" style={{ padding: "18px 22px 24px", display: "flex", flexDirection: "column" }}>
          {["Commercial", "Residential", "New Construction", "About", "Our Work", "Contact"].map((l) => (
            <a key={l} href="#" onClick={() => setOpen(false)} className="disp" style={{ color: "#fff", fontSize: 22, padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}>{l}</a>
          ))}
          <a className="phone-link" href={PHONE_TEL} style={{ color: "#fff", fontSize: 18, margin: "18px 0" }}>
            <Phone s={16} c="var(--red)" /> {PHONE}
          </a>
          <Btn variant="red" arrow="ur" href="#contact" onClick={(e) => { e.preventDefault(); setOpen(false); dScroll("contact"); }} style={{ justifyContent: "center" }}>Free Inspection</Btn>
        </div>
      </div>
    </header>
  );
}

/* ---------- hero quick estimate card ---------- */
function DQuickCard() {
  const [lead, setLead] = useState("Commercial");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const ready = name.trim() && phone.trim();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    if (website) { setSent(true); return; } // bot
    setBusy(true); setErr("");
    const ok = await submitLead({ lead, service, name, phone, source: "hero-quick-card", website });
    setBusy(false);
    if (ok) setSent(true);
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
            Your {lead.toLowerCase()} request is on its way to the right team. We&apos;ll call <strong style={{ color: "var(--ink)" }}>{phone}</strong> to schedule your free inspection.
            {lead === "Residential" && " Residential quotes arrive within one business day, and financing is available."}
          </p>
          <a className="btn btn-red" href={PHONE_TEL} style={{ justifyContent: "center", width: "100%" }}><Phone s={15} c="#fff" /> Call now instead</a>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} style={{ background: "#fff", width: "100%", maxWidth: 380, boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}>
      <div style={{ background: "var(--red)", color: "#fff", padding: "15px 22px" }}>
        <div className="disp" style={{ fontSize: 19 }}>Get a Free Estimate</div>
        <div style={{ fontSize: 12.5, fontWeight: 600, opacity: .92, marginTop: 2 }}>Free, no-obligation inspection</div>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 11 }}>
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
        <div style={{ display: "flex", border: "2px solid var(--ink)" }}>
          {D_LEADS.map((x) => (
            <button type="button" key={x} onClick={() => { setLead(x); setService(""); }}
              className="disp" style={{ flex: 1, padding: "10px 4px", fontSize: 11.5, border: 0, cursor: "pointer", background: lead === x ? "var(--ink)" : "#fff", color: lead === x ? "#fff" : "var(--ink)", whiteSpace: "nowrap" }}>{x === "New Construction" ? "New Const." : x}</button>
          ))}
        </div>
        <select className="form-input" value={service} onChange={(e) => setService(e.target.value)} style={{ color: service ? "#222" : "#5d5b58" }}>
          <option value="">Select a service…</option>
          {D_SVC[lead].map((s) => <option key={s}>{s}</option>)}
        </select>
        <input className="form-input" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-input" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" />
        {err && <div style={{ color: "var(--red)", fontSize: 13, fontWeight: 600 }}>{err}</div>}
        <button type="submit" className="btn btn-red" disabled={!ready || busy}
          style={{ justifyContent: "center", width: "100%", marginTop: 2, opacity: ready && !busy ? 1 : .55, cursor: ready && !busy ? "pointer" : "not-allowed" }}>
          {busy ? "Sending…" : "Request Free Inspection"} <Arrow s={15} />
        </button>
        <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>
          Engineer-owned · Fort Worth, TX{lead === "Residential" && " · Quote in one business day"}
        </div>
      </div>
    </form>
  );
}

type PathProps = { tag: string; title: string; body: string; cta: string; onClick: () => void; primary?: boolean; quote?: boolean; cls: string };
function DPath({ tag, title, body, cta, onClick, primary, quote, cls }: PathProps) {
  return (
    <button onClick={onClick} className={"lift " + cls} style={{
      textAlign: "left", cursor: "pointer", display: "flex", flexDirection: "column",
      background: primary ? "#fff" : quote ? "var(--red)" : "rgba(17,17,17,.82)",
      color: primary || quote ? undefined : "#fff",
      border: primary || quote ? 0 : "1px solid rgba(255,255,255,.16)",
      borderTop: "4px solid var(--red)",
      boxShadow: "0 24px 55px rgba(0,0,0,.4)", padding: "24px 26px 24px",
    }}>
      <span className="over" style={{ color: quote ? "rgba(255,255,255,.85)" : "var(--red)", fontSize: 10.5, marginBottom: 10 }}>{tag}</span>
      <span className="disp" style={{ fontSize: primary ? 26 : 22, lineHeight: 1.04, color: primary ? "var(--ink)" : "#fff" }}>{title}</span>
      <span style={{ color: primary ? "var(--muted)" : quote ? "rgba(255,255,255,.92)" : "#cfcfcf", fontSize: 13.5, lineHeight: 1.5, fontWeight: 500, margin: "9px 0 16px" }}>{body}</span>
      <span style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: primary ? "var(--red)" : "#fff" }}>
        {cta} <Arrow s={15} c={primary ? "var(--red)" : "#fff"} />
      </span>
    </button>
  );
}

/* ---------- 2 · HERO + 3 · FORK ---------- */
function DHero() {
  return (
    <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Img label="Commercial or structural jobsite, crew and equipment" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1700&q=80" style={{ height: "100%" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,12,12,.9) 0%, rgba(12,12,12,.55) 44%, rgba(12,12,12,.9) 100%)" }} />
      <div className="d-blueprint" style={{ opacity: .45 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 64, paddingBottom: 60 }}>
        <div className="d-hero">
          <div>
            <Kicker color="#fff">Fort Worth, Texas · Serving DFW and Beyond</Kicker>
            <h1 className="disp fade-up" style={{ fontSize: 62, margin: "20px 0 0", color: "#fff" }}>
              Commercial foundations, <span style={{ color: "var(--red)" }}>engineered and self-performed.</span>
            </h1>
            <p className="fade-up" style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 14px", maxWidth: 560, fontWeight: 500 }}>
              Turn-key foundation, concrete, drainage, and structural repair, plus new construction, for commercial properties and homeowners across Texas. Engineering oversight from assessment to final sign-off.
            </p>
            <p className="fade-up" style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: "0 0 28px", display: "flex", alignItems: "center", gap: 10 }}>
              <Check s={16} c="var(--red)" /> Owned and operated by a licensed Professional Engineer.
            </p>
            <div className="fade-up" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn variant="red" arrow="ur" href="#d-commercial" onClick={(e) => { e.preventDefault(); dScroll("d-commercial"); }}>Explore Commercial Services</Btn>
              <Btn variant="ghost" arrow="none" href={PHONE_TEL}><Phone s={15} c="#fff" /> {PHONE}</Btn>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}><DQuickCard /></div>
        </div>
        <div className="d-fork">
          <DPath cls="d-fork-com" primary tag="Commercial / Property Manager" title="Protecting a commercial asset?"
            body="Engineered scopes and self-performed crews keep warehouses, retail, and industrial sites operating during the work."
            cta="Commercial Services" onClick={() => dScroll("d-commercial")} />
          <DPath cls="d-fork-res" tag="Homeowner" title="A complex repair on your home?"
            body="Specialized crews for large, structural, and high-end residential work."
            cta="Residential Services" onClick={() => dScroll("d-residential")} />
          <DPath cls="d-fork-new" tag="New Construction / Builder" title="Building something new?"
            body="Concrete, tilt-wall, and builder work as its own pathway, not a repair add-on."
            cta="New Construction" onClick={() => dScroll("d-newcon")} />
          <DPath cls="d-fork-quote" quote tag="Fast track" title="Quote / Call Now"
            body="Talk to our team or start a free inspection request."
            cta="Start Now" onClick={() => dScroll("contact")} />
        </div>
      </div>
    </section>
  );
}

/* ---------- 4 · TRUST BAR ---------- */
function DTrustBar() {
  return (
    <section style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,.08)" }}>
      <div className="wrap d-trust">
        {D_TRUSTBAR.map((t) => (
          <div key={t}>
            <Check s={16} c="var(--red)" />
            <span className="over" style={{ color: "#e3e1de", fontSize: 11, letterSpacing: ".06em", lineHeight: 1.5 }}>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 5 · COMMERCIAL ---------- */
function DCommercial() {
  return (
    <section id="d-commercial" className="tex-dark" style={{ padding: "94px 0" }}>
      <div className="wrap">
        <div className="d-2" style={{ alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Kicker>Commercial &amp; industrial</Kicker>
            <h2 className="disp" style={{ color: "#fff", fontSize: 52, marginTop: 16 }}>Commercial Services</h2>
          </div>
          <p style={{ color: "#bdbdbd", fontWeight: 500, lineHeight: 1.55, maxWidth: 440 }}>
            Self-performed, engineered scopes for warehouses, retail, multifamily, and industrial sites across Texas, planned around your operations. Each service links to a dedicated page.
          </p>
        </div>
        <div className="d-3">
          {D_COMMERCIAL.map((c, i) => (
            <a href="#" key={c.t} className="lift" style={{ background: i === 0 ? "var(--red)" : "var(--ink-2)", color: "#fff", padding: "28px 26px", border: "1px solid rgba(255,255,255,.06)", display: "flex", flexDirection: "column", minHeight: 250 }}>
              <span className="disp" style={{ fontSize: 15, color: i === 0 ? "rgba(255,255,255,.65)" : "var(--red)" }}>{c.n}</span>
              <h3 className="disp" style={{ fontSize: 21, margin: "12px 0 10px", lineHeight: 1.06 }}>{c.t}</h3>
              <p style={{ color: i === 0 ? "rgba(255,255,255,.92)" : "#a8a8a8", fontSize: 13.5, lineHeight: 1.5, marginBottom: 14 }}>{c.d}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "auto 0 0", display: "flex", flexWrap: "wrap", gap: "6px 14px" }}>
                {c.items.slice(0, 4).map((it) => (
                  <li key={it} style={{ fontSize: 12, fontWeight: 600, color: i === 0 ? "#fff" : "#cfcfcf", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 5, height: 5, background: i === 0 ? "#fff" : "var(--red)" }} />{it}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: i === 0 ? "#fff" : "var(--red)" }}>
                View service <Arrow s={14} c={i === 0 ? "#fff" : "var(--red)"} />
              </div>
            </a>
          ))}
          <a href="#" className="lift" style={{ background: "var(--ink-2)", border: "1px dashed rgba(255,255,255,.22)", padding: "28px 26px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 250 }}>
            <h3 className="disp" style={{ color: "#fff", fontSize: 21, lineHeight: 1.06 }}>See all commercial services</h3>
            <p style={{ color: "#a8a8a8", fontSize: 13.5, lineHeight: 1.5, margin: "12px 0 16px" }}>Browse every commercial scope we self-perform across Texas.</p>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--red)" }}>All services <Arrow s={14} c="var(--red)" /></span>
          </a>
        </div>
        <p style={{ color: "#8a8a8a", fontSize: 13, fontWeight: 500, marginTop: 22 }}>Workmanship warranty, terms vary by service.</p>
      </div>
    </section>
  );
}

/* ---------- 6 · NEW CONSTRUCTION ---------- */
function DNewConstruction() {
  return (
    <section id="d-newcon" style={{ background: "var(--paper)", padding: "92px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="d-2" style={{ alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Kicker>A separate pathway, not a repair add-on</Kicker>
            <h2 className="disp" style={{ fontSize: 52, marginTop: 16, color: "var(--ink)" }}>New Construction</h2>
          </div>
          <p style={{ color: "var(--muted)", fontWeight: 500, lineHeight: 1.55, maxWidth: 440 }}>
            Specialized work for builders and developers. Engineering and concrete under one roof, which helps in tough approval environments. One broad category today, with dedicated pages to follow.
          </p>
        </div>
        <div className="d-3">
          {D_NEWCON.map((c, i) => (
            <a href="#" key={c.t} className="lift" style={{ background: "var(--ink)", color: "#fff", padding: "30px 28px 26px", display: "flex", flexDirection: "column", minHeight: 210, position: "relative", overflow: "hidden" }}>
              <div className="d-blueprint" style={{ opacity: .5 }} />
              <span className="disp" style={{ fontSize: 15, color: "var(--red)", position: "relative" }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="disp" style={{ fontSize: 22, margin: "12px 0 10px", lineHeight: 1.06, position: "relative" }}>{c.t}</h3>
              <p style={{ color: "#b8b8b8", fontSize: 14, lineHeight: 1.5, position: "relative" }}>{c.d}</p>
              <span style={{ marginTop: "auto", paddingTop: 16, display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--red)", position: "relative" }}>
                Learn more <Arrow s={14} c="var(--red)" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 7 · PIER PATH ---------- */
function DPierPath() {
  return (
    <section style={{ background: "var(--bone)", padding: "90px 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 44 }}>
          <div>
            <Kicker>The Pier Path</Kicker>
            <h2 className="disp" style={{ fontSize: 48, marginTop: 16, color: "var(--ink)" }}>Three steps to a fixed quote</h2>
          </div>
          <Btn variant="outline" arrow="ur" href="#contact" onClick={(e) => { e.preventDefault(); dScroll("contact"); }}>Book an inspection</Btn>
        </div>
        <div className="d-3" style={{ gap: 22 }}>
          {D_STEPS.map((s) => (
            <div key={s.n} style={{ background: "#fff", padding: "32px 30px 28px", borderTop: "3px solid var(--red)", display: "flex", flexDirection: "column" }}>
              <div className="disp" style={{ fontSize: 46, color: "var(--gray-2)" }}>{s.n}</div>
              <h3 className="disp" style={{ color: "var(--ink)", fontSize: 22, margin: "10px 0 12px", lineHeight: 1.05 }}>{s.t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.55, fontWeight: 500, marginBottom: 16 }}>{s.d}</p>
              <a href="#contact" onClick={(e) => { e.preventDefault(); dScroll("contact"); }}
                className="over" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, color: "var(--red)", fontSize: 11 }}>
                Book an inspection <Arrow s={13} c="var(--red)" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8 · PIER SYSTEMS ---------- */
function DPierSystems() {
  return (
    <section style={{ background: "var(--paper)", padding: "80px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
          <Kicker style={{ justifyContent: "center" }}>Every pier type, in-house</Kicker>
          <h2 className="disp" style={{ fontSize: 42, margin: "16px 0 10px", color: "var(--ink)" }}>Foundation Pier Systems</h2>
          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.55, fontWeight: 500 }}>We match the system to the soil and the structure, not the other way around. All five installed by our own engineer-supervised crews.</p>
        </div>
        <div className="d-5">
          {D_PIERS.map(([t, d], i) => (
            <div key={t} style={{ background: "#fff", border: "1px solid var(--line)", borderTop: "3px solid var(--red)", padding: "20px 20px 22px" }}>
              <div className="disp" style={{ color: "var(--red)", fontSize: 14 }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="disp" style={{ color: "var(--ink)", fontSize: 17, margin: "8px 0 8px", lineHeight: 1.05 }}>{t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 12.5, lineHeight: 1.45, fontWeight: 500 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9 · HONESTY ---------- */
function DHonesty() {
  return (
    <section style={{ background: "var(--paper)", padding: "92px 0", position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <div className="d-honesty">
          <div style={{ position: "relative", minHeight: 380 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <Img label="The Principal Engineer on a jobsite" src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" style={{ height: "100%" }} />
            </div>
            <div style={{ position: "absolute", left: 0, bottom: 0, right: 0, background: "linear-gradient(0deg, rgba(15,15,15,.92), transparent)", padding: "40px 26px 22px" }}>
              <div className="over" style={{ color: "var(--red)", fontSize: 11, marginBottom: 6 }}>Meet the engineer</div>
              <div className="disp" style={{ color: "#fff", fontSize: 22 }}>Owner &amp; Principal Engineer</div>
              <div style={{ color: "#cfcfcf", fontWeight: 600, fontSize: 13, marginTop: 4 }}>Licensed PE since 2012</div>
            </div>
          </div>
          <div>
            <Kicker>The honest difference</Kicker>
            <h2 className="disp" style={{ fontSize: 46, margin: "16px 0 18px", color: "var(--ink)" }}>
              Sometimes the right answer is <span style={{ color: "var(--red)" }}>&quot;you don&apos;t need a repair.&quot;</span>
            </h2>
            <p style={{ color: "#3a3a3a", fontSize: 17.5, lineHeight: 1.6, fontWeight: 500, marginBottom: 14 }}>
              The person who inspects your foundation is an engineer, not a commissioned salesperson. The recommendation is based on what the structure and soil are actually doing.
            </p>
            <p style={{ color: "#3a3a3a", fontSize: 17.5, lineHeight: 1.6, fontWeight: 500, marginBottom: 28 }}>
              If an inspection shows you don&apos;t need work, we&apos;ll tell you. That is the point of being engineer-owned.
            </p>
            <Btn variant="outline" arrow="ur" href="#contact" onClick={(e) => { e.preventDefault(); dScroll("contact"); }}>Book a free inspection</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10 · WORK ---------- */
function DWork() {
  return (
    <section id="d-work" className="tex-dark" style={{ padding: "90px 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
          <div>
            <Kicker>Selected work</Kicker>
            <h2 className="disp" style={{ color: "#fff", fontSize: 48, marginTop: 16 }}>Real Texas projects</h2>
          </div>
          <p style={{ color: "#bdbdbd", fontWeight: 500, lineHeight: 1.55, maxWidth: 380 }}>Inspected, engineered, and self-performed by Cardinal. Labeled placeholders below, real jobsite photos drop in.</p>
        </div>
        <div className="d-workscroll">
          {D_WORK.map((p) => (
            <a href="#" key={p.t} className="lift" style={{ background: "var(--ink-2)", border: "1px solid rgba(255,255,255,.06)", display: "flex", flexDirection: "column" }}>
              <Img label={p.t + ". Real jobsite photo"} src={p.img} h={180} />
              <div style={{ padding: "20px 22px 22px" }}>
                <div className="over" style={{ color: "var(--red)", fontSize: 11, marginBottom: 8 }}>{p.scope}</div>
                <h3 className="disp" style={{ color: "#fff", fontSize: 18, lineHeight: 1.08 }}>{p.t}</h3>
              </div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 36, border: "1px dashed rgba(255,255,255,.25)", padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <div>
            <div className="over" style={{ color: "var(--red)", marginBottom: 8 }}>Placeholder: live Google Reviews feed (rotating)</div>
            <p style={{ color: "#cfcfcf", fontWeight: 500, fontSize: 15, maxWidth: 620, lineHeight: 1.55 }}>
              A live rotating Google Reviews widget will appear here once the Google Business Profile is connected. We only display verified reviews.
            </p>
          </div>
          <span className="over" style={{ color: "#7d7d7d", fontSize: 11 }}>Connect Google Business Profile</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 12 · RESIDENTIAL ---------- */
function DResidential() {
  return (
    <section id="d-residential" className="tex-light" style={{ padding: "88px 0" }}>
      <div className="wrap">
        <div className="d-2" style={{ alignItems: "flex-end", marginBottom: 36 }}>
          <div>
            <Kicker>Specialized residential</Kicker>
            <h2 className="disp" style={{ fontSize: 46, marginTop: 16, color: "var(--ink)" }}>Residential Services</h2>
          </div>
          <p style={{ color: "#3a3a3a", fontWeight: 500, lineHeight: 1.55, maxWidth: 440 }}>
            We take the large, complicated repairs many contractors won&apos;t. High-end homes, large retaining walls, complex structural issues, and builder repairs that call for specialized crews. Not small routine jobs.
          </p>
        </div>
        <div className="d-3" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {D_RES.map((r) => (
            <a href="#" key={r.t} className="lift" style={{ background: "#fff", border: "1px solid var(--line)", padding: "24px 22px", display: "flex", flexDirection: "column", minHeight: 178 }}>
              <h3 className="disp" style={{ fontSize: 18, marginBottom: 14, color: "var(--ink)" }}>{r.t}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                {r.items.map((it) => <li key={it} style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "flex", gap: 7, alignItems: "center" }}><span style={{ width: 5, height: 5, background: "var(--red)" }} />{it}</li>)}
              </ul>
              <div style={{ marginTop: "auto", paddingTop: 14 }}><Arrow s={17} c="var(--red)" /></div>
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30, alignItems: "center" }}>
          <Btn variant="red" arrow="ur" href="#contact" onClick={(e) => { e.preventDefault(); dScroll("contact"); }}>Book a free home inspection</Btn>
          <span style={{ color: "var(--muted)", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
            <Check s={15} /> Financing available &nbsp;·&nbsp; Quote in one business day
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 13 · DUAL CTA BAND ---------- */
function DCtaBand() {
  const panels = [
    { t: "Managing a commercial property?", d: "Request an engineered assessment from a self-performing contractor.", cta: "Request a commercial assessment", dark: true },
    { t: "Worried about your home?", d: "Book a free, no-pressure inspection from an engineer-led team.", cta: "Book a free home inspection", dark: false },
  ];
  return (
    <section style={{ background: "var(--red)", padding: "56px 0" }}>
      <div className="wrap d-2" style={{ gap: 30 }}>
        {panels.map((x) => (
          <div key={x.t} style={{ background: x.dark ? "var(--ink)" : "rgba(0,0,0,.14)", padding: "32px 34px" }}>
            <h3 className="disp" style={{ color: "#fff", fontSize: 26, lineHeight: 1.05 }}>{x.t}</h3>
            <p style={{ color: "rgba(255,255,255,.9)", fontWeight: 500, margin: "10px 0 20px", fontSize: 15.5 }}>{x.d}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => dScroll("contact")} className="btn" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>{x.cta} <Arrow s={15} /></button>
              <a className="btn" href={PHONE_TEL} style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)" }}><Phone s={14} c="#fff" /> {PHONE}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 14 · MULTI-STEP QUOTE FORM ---------- */
function DQuoteForm() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState({ lead: "Commercial", service: "", city: "", urgency: "", details: "", name: "", email: "", phone: "", company: "", website: "" });
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const set = (k: string, v: string) => setD((p) => ({ ...p, [k]: v }));
  const canNext = step === 0 ? !!d.service : step === 1 ? !!d.city : !!(d.name.trim() && d.phone.trim());

  async function onSubmit() {
    if (!canNext || busy) return;
    if (d.website) { setSent(true); return; }
    setBusy(true); setErr("");
    const ok = await submitLead({ ...d, source: "contact-form" });
    setBusy(false);
    if (ok) setSent(true);
    else setErr("Something went wrong. Please call us instead.");
  }

  if (sent) {
    return (
      <div style={{ background: "#fff", border: "1px solid var(--line)", padding: "50px 44px", textAlign: "center" }}>
        <div style={{ width: 60, height: 60, background: "var(--red)", margin: "0 auto 18px", display: "flex", alignItems: "center", justifyContent: "center" }}><Check s={30} c="#fff" /></div>
        <h3 className="disp" style={{ fontSize: 30, color: "var(--ink)" }}>Request received, {d.name.split(" ")[0]}.</h3>
        <p className="lead" style={{ maxWidth: 460, margin: "12px auto 22px" }}>
          Your {d.lead.toLowerCase()} request is on its way to the right team. We&apos;ll call <strong>{d.phone}</strong> to schedule your free inspection.
          {d.lead === "Residential" && " Financing is available, and residential quotes arrive within one business day."}
        </p>
        <a className="btn btn-red" href={PHONE_TEL} style={{ display: "inline-flex" }}><Phone s={14} c="#fff" /> Or call now: {PHONE}</a>
      </div>
    );
  }
  return (
    <div style={{ background: "#fff", border: "1px solid var(--line)" }}>
      <div style={{ display: "flex", borderBottom: "1px solid var(--line)" }}>
        {["Lead Type & Service", "Project", "Contact"].map((l, i) => (
          <div key={l} style={{ flex: 1, padding: "14px 8px", textAlign: "center", background: i === step ? "var(--ink)" : i < step ? "#fff" : "#fafafa", color: i === step ? "#fff" : i < step ? "var(--ink)" : "var(--muted)", borderRight: i < 2 ? "1px solid var(--line)" : "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
            <span style={{ width: 20, height: 20, background: i <= step ? "var(--red)" : "var(--gray-2)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11 }}>{i < step ? "✓" : i + 1}</span>
            <span className="over" style={{ fontSize: 10.5 }}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: "30px 34px 26px", minHeight: 310 }}>
        {/* honeypot */}
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={d.website} onChange={(e) => set("website", e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
        {step === 0 && (
          <div>
            <h3 className="disp" style={{ fontSize: 24, marginBottom: 16, color: "var(--ink)" }}>What do you need help with?</h3>
            <div style={{ display: "flex", border: "2px solid var(--ink)", maxWidth: 460, marginBottom: 20 }}>
              {D_LEADS.map((x) => (
                <button key={x} type="button" onClick={() => { set("lead", x); set("service", ""); }} className="disp"
                  style={{ flex: 1, padding: "11px 6px", fontSize: 12.5, border: 0, cursor: "pointer", background: d.lead === x ? "var(--ink)" : "#fff", color: d.lead === x ? "#fff" : "var(--ink)", whiteSpace: "nowrap" }}>{x === "New Construction" ? "New Const." : x}</button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {D_SVC[d.lead].map((s) => (
                <button key={s} type="button" onClick={() => set("service", s)}
                  style={{ textAlign: "left", padding: "15px 17px", border: "2px solid " + (d.service === s ? "var(--red)" : "var(--line)"), background: d.service === s ? "rgba(224,39,31,.06)" : "#fff", cursor: "pointer", fontWeight: 700, fontSize: 14, color: "var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  {s} {d.service === s && <Check s={16} />}
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <h3 className="disp" style={{ fontSize: 24, marginBottom: 16, color: "var(--ink)" }}>About the property</h3>
            <label className="over" style={{ color: "var(--muted)", display: "block", marginBottom: 8 }}>Property city / address</label>
            <input className="form-input" placeholder="e.g. Fort Worth, TX" value={d.city} onChange={(e) => set("city", e.target.value)} style={{ marginBottom: 20 }} />
            <label className="over" style={{ color: "var(--muted)", display: "block", marginBottom: 10 }}>Timeline</label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
              {D_URGENCY.map((u) => (
                <button key={u} type="button" onClick={() => set("urgency", u)} style={{ padding: "11px 15px", border: "2px solid " + (d.urgency === u ? "var(--red)" : "var(--line)"), background: d.urgency === u ? "rgba(224,39,31,.06)" : "#fff", cursor: "pointer", fontWeight: 700, fontSize: 13.5, color: "var(--ink)" }}>{u}</button>
              ))}
            </div>
            <label className="over" style={{ color: "var(--muted)", display: "block", marginBottom: 8 }}>What are you noticing? (optional)</label>
            <textarea className="form-input" rows={3} placeholder="An inspection determines the cause. Tell us what you're seeing." value={d.details} onChange={(e) => set("details", e.target.value)} style={{ resize: "vertical" }} />
          </div>
        )}
        {step === 2 && (
          <div>
            <h3 className="disp" style={{ fontSize: 24, marginBottom: 16, color: "var(--ink)" }}>Where do we send your details?</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input className="form-input" placeholder="Full name *" value={d.name} onChange={(e) => set("name", e.target.value)} />
              <input className="form-input" placeholder="Phone *" value={d.phone} onChange={(e) => set("phone", e.target.value)} inputMode="tel" />
              <input className="form-input" placeholder="Email" value={d.email} onChange={(e) => set("email", e.target.value)} style={{ gridColumn: "1 / -1" }} />
              {d.lead !== "Residential" && <input className="form-input" placeholder="Company" value={d.company} onChange={(e) => set("company", e.target.value)} style={{ gridColumn: "1 / -1" }} />}
            </div>
            {err && <p style={{ color: "var(--red)", fontSize: 13, fontWeight: 600, marginTop: 12 }}>{err}</p>}
            <p style={{ color: "var(--muted)", fontSize: 13, fontWeight: 500, marginTop: 14 }}>
              Free, no obligation. Your request goes to the right team for {d.lead.toLowerCase()} work.
              {d.lead === "Residential" && " Financing is available, with a quote in one business day."}
            </p>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 34px 24px", borderTop: "1px solid var(--line)" }}>
        <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} style={{ background: "none", border: 0, fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".05em", fontSize: 13, color: step === 0 ? "var(--gray-2)" : "var(--ink)", cursor: step === 0 ? "default" : "pointer" }}>← Back</button>
        <span className="over" style={{ color: "var(--muted)" }}>Step {step + 1} of 3</span>
        {step < 2
          ? <button type="button" onClick={() => canNext && setStep((s) => s + 1)} className="btn btn-red" disabled={!canNext} style={{ border: 0, opacity: canNext ? 1 : .5, cursor: canNext ? "pointer" : "not-allowed" }}>Continue <Arrow s={15} /></button>
          : <button type="button" onClick={onSubmit} className="btn btn-red" disabled={!canNext || busy} style={{ border: 0, opacity: canNext && !busy ? 1 : .5, cursor: canNext && !busy ? "pointer" : "not-allowed" }}>{busy ? "Sending…" : "Submit request"} <Arrow s={15} /></button>}
      </div>
    </div>
  );
}

function DContact() {
  return (
    <section id="contact" className="tex-light" style={{ padding: "90px 0" }}>
      <div className="wrap">
        <Kicker>Request an inspection</Kicker>
        <h2 className="disp" style={{ fontSize: 50, margin: "16px 0 8px", color: "var(--ink)" }}>Start with an engineer</h2>
        <p className="lead" style={{ maxWidth: 580, marginBottom: 38 }}>Tell us about your property and we&apos;ll schedule a free, no-obligation inspection. Your request routes to the right team: commercial, residential, or new construction.</p>
        <div className="d-contact">
          <DQuoteForm />
          <div style={{ background: "var(--ink)", color: "#fff", padding: "36px 34px", display: "flex", flexDirection: "column" }}>
            <div className="over" style={{ color: "var(--red)" }}>Speak to our team</div>
            <a href={PHONE_TEL} className="disp" style={{ color: "#fff", fontSize: 32, margin: "10px 0 4px", display: "block" }}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`} style={{ color: "#cfcfcf", fontWeight: 600, fontSize: 14 }}>{EMAIL}</a>
            <div style={{ height: 1, background: "rgba(255,255,255,.14)", margin: "22px 0" }} />
            <div className="over" style={{ color: "#9a9a9a", marginBottom: 10 }}>Hours</div>
            <div style={{ fontWeight: 600, marginBottom: 18 }}>Mon–Fri · 7:00a to 6:00p</div>
            <div className="over" style={{ color: "#9a9a9a", marginBottom: 10 }}>Service area · Fort Worth based, serving Texas</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px 8px" }}>
              {D_CITIES.map((c) => <span key={c} style={{ border: "1px solid rgba(255,255,255,.18)", padding: "5px 10px", fontSize: 12, fontWeight: 600, color: "#e3e1de" }}>{c}</span>)}
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 22, flexWrap: "wrap" }}>
              {["Free inspection", "No obligation"].map((x) => (
                <div key={x} style={{ display: "flex", alignItems: "center", gap: 7, fontWeight: 700, fontSize: 13 }}><Check s={15} c="var(--red)" />{x}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 15 · FOOTER ---------- */
function DFooter() {
  const cols = [
    { h: "Commercial", l: ["Foundation Repair", "Concrete Lifting", "Tilt-Wall & Concrete", "Retaining Walls", "Drainage"] },
    { h: "Residential", l: ["Structural Repair", "Retaining Walls", "Concrete Lifting", "High-End Homes"] },
    { h: "New Construction", l: ["Commercial Concrete", "Tilt-Wall", "Builder Work", "Earthwork & Grading"] },
    { h: "Company", l: ["About Us", "Our Work", "Contact Us", "Free Inspection"] },
  ];
  return (
    <footer className="tex-dark" style={{ paddingTop: 60 }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 34, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div>
          <Logo />
          <p style={{ color: "#9a9a9a", fontWeight: 500, lineHeight: 1.6, marginTop: 18, maxWidth: 280 }}>
            Engineer-owned and operated. Turn-key commercial, residential &amp; new construction foundation and concrete services across Texas.
          </p>
          <a className="phone-link" href={PHONE_TEL} style={{ color: "#fff", fontSize: 17, marginTop: 18, display: "inline-flex" }}><Phone s={15} c="var(--red)" /> {PHONE}</a>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="over" style={{ color: "var(--red)", marginBottom: 16 }}>{c.h}</div>
            {c.l.map((x) => <a key={x} href="#" style={{ display: "block", color: "#cfcfcf", fontWeight: 500, padding: "6px 0", fontSize: 14 }}>{x}</a>)}
          </div>
        ))}
      </div>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 40px", color: "#7d7d7d", fontSize: 13, fontWeight: 500, flexWrap: "wrap", gap: 10 }}>
        <span>© 2026 Cardinal Foundation Services LLC. All rights reserved.</span>
        <div style={{ display: "flex", gap: 18 }}>{["Facebook", "Instagram", "YouTube"].map((s) => <a key={s} href="#" style={{ color: "#9a9a9a" }}>{s}</a>)}</div>
      </div>
    </footer>
  );
}

/* ---------- ASSEMBLY ---------- */
export default function DirectionD() {
  return (
    <div className="page dirD">
      <span id="top" />
      <DNav />
      <DHero />
      <DTrustBar />
      <DCommercial />
      <DNewConstruction />
      <DPierPath />
      <DPierSystems />
      <DHonesty />
      <DWork />
      <DResidential />
      <DCtaBand />
      <DContact />
      <DFooter />
    </div>
  );
}
