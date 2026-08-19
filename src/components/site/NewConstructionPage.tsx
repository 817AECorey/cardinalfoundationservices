"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Arrow, Phone, Check } from "./icons";
import { Btn, Kicker, Img, TCPA, dScroll, PHONE, PHONE_TEL } from "./primitives";
import { DNav, DTrustBar, DPierSystems, DContact, DFooter, submitLead } from "./DirectionD";

/* ============================================================
   NEW CONSTRUCTION — top-level inner page.
   Composed to mirror the commercial and residential pages (no
   design handoff file exists for this one). Hub for new
   construction work that links out to each individual service
   page. Reuses Direction D's nav, trust bar, pier systems,
   contact and footer.
   POSITIONING: a separate pathway, not a repair add-on.
   Specialized work for builders and developers, engineering and
   concrete under one roof. Repair-oriented sections (signs of
   damage, the Pier Path) are intentionally absent; a plans-to-
   pour process section takes their place.
   COMPLIANCE: no ratings or testimonials, no superlatives or
   guarantees, no em-dashes in copy, workmanship warranty wording
   only. Financing and the one-business-day quote are
   residential-only, so they do NOT appear on this page.
   SERVICE AREA: DFW plus Houston and surrounding key cities.
   ============================================================ */

/* ---------- HERO ---------- */
function NHero() {
  return (
    <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Img label="Rebar mat over vapor barrier prepared for a new construction foundation pour" src="/images/new-construction-foundation-rebar-vapor-barrier.webp" style={{ height: "100%" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,12,12,.92) 0%, rgba(12,12,12,.6) 45%, rgba(12,12,12,.92) 100%)" }} />
      <div className="d-blueprint" style={{ opacity: .45 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 58 }}>
        <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 26 }}>
          <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
          <span style={{ color: "var(--red)" }}>/</span>
          <span style={{ color: "#fff" }}>New Construction</span>
        </div>
        <div className="c-hero">
          <div>
            <Kicker color="#fff">Builders &amp; Developers · DFW &amp; Houston</Kicker>
            <h1 className="disp" style={{ fontSize: 60, margin: "20px 0 0", color: "#fff" }}>
              New construction concrete, engineered and self-performed.
            </h1>
            <p style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 14px", maxWidth: 560, fontWeight: 500 }}>
              Commercial concrete, tilt-wall, builder work, and earthwork as a dedicated pathway, not a repair add-on. Engineering and concrete under one roof, which helps in tough approval environments.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}><NScopeCard /></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- hero card: project scoping request ---------- */
const N_SVC_OPTS = ["Commercial Concrete", "Tilt-Wall Construction", "Builder Work / Additions", "Earthwork / Grading", "Not sure, need to scope"];
const N_PROP = ["Warehouse / Industrial", "Retail / Office / Medical", "Custom home / Addition", "Municipal / Other"];
function NScopeCard() {
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
  /* new-construction context: name, phone, city/zip, and email all required */
  const ready = !!(name.trim() && phone.trim() && city.trim() && email.trim());

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    if (website) { setSent(true); return; } // bot
    setBusy(true); setErr("");
    const ok = await submitLead({ lead: "New Construction", property: prop, service, name, phone, email, city, source: "newconstruction-hero-card", website });
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
            Your request is with our new construction team. We&apos;ll call <strong style={{ color: "var(--ink)" }}>{phone}</strong> to talk through the project and next steps.
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
        <div style={{ fontSize: 12.5, fontWeight: 600, opacity: .92, marginTop: 2 }}>Free, no-obligation scoping</div>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 11 }}>
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
        <select className="form-input" value={prop} onChange={(e) => setProp(e.target.value)} style={{ color: prop ? "#222" : "#5d5b58" }}>
          <option value="">Project type…</option>
          {N_PROP.map((p) => <option key={p}>{p}</option>)}
        </select>
        <select className="form-input" value={service} onChange={(e) => setService(e.target.value)} style={{ color: service ? "#222" : "#5d5b58" }}>
          <option value="">Select a service…</option>
          {N_SVC_OPTS.map((s) => <option key={s}>{s}</option>)}
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
const N_SCOPE: [string, string][] = [
  ["Scope", "Plans and specs reviewed, quantities taken off, and the schedule mapped."],
  ["Engineer", "Structural questions answered in-house by a licensed Professional Engineer."],
  ["Self-perform", "Our own crews pour, erect, and grade. No chain of subs between bid and pour."],
  ["Verify", "Elevations and finish checked against spec before handoff to the next trade."],
];
function NIntro() {
  return (
    <section style={{ background: "var(--paper)", padding: "84px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="c-2" style={{ marginBottom: 44 }}>
          <div>
            <Kicker>How we work on new builds</Kicker>
            <h2 className="disp" style={{ fontSize: 46, margin: "16px 0 0", color: "var(--ink)" }}>Engineering and concrete under one roof</h2>
          </div>
          <p className="lead">
            New construction concrete gets bids, questioned, and inspected before anything is poured. Having the engineering and the crews inside one company means structural questions get answered early, in-house, instead of becoming change orders after the schedule is set.
          </p>
        </div>
        <div className="c-scope">
          {N_SCOPE.map(([t, d], i) => (
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
const N_SERVICES = [
  { n: "01", t: "Commercial Concrete", d: "Structural slab pours, building pads, and site concrete for new commercial shells.", items: ["Structural Slab Pours", "Building Pads", "Site Paving", "Foundations"], img: "/images/finished-concrete-foundation-slab.webp", feature: true },
  { n: "02", t: "Tilt-Wall Construction", d: "Panel fabrication and erection for warehouse and industrial shells.", items: ["Panel Fabrication", "Panel Erection", "Warehouse & Industrial Shells"], img: "/images/nchub-tiltwall.webp", imgAlt: "Tilt-wall construction" },
  { n: "03", t: "Builder Work & Additions", d: "Specialized structural work for builders and developers. Custom residential, additions, and builder piers.", items: ["Builder Piers", "Additions", "Custom Homes"], img: "/images/nchub-builder.webp", imgAlt: "Builder work and additions" },
  { n: "04", t: "Earthwork & Grading", d: "Site preparation, grading, and developer infrastructure that sets the foundation up correctly.", items: ["Cut & Fill", "Site Grading", "Soil Preparation", "Developer Infrastructure"], img: "/images/nchub-earthwork.webp", imgAlt: "Earthwork and site grading" },
];
function NServices() {
  return (
    <section id="n-services" className="tex-dark" style={{ padding: "92px 0" }}>
      <div className="wrap">
        <div className="c-2" style={{ alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <Kicker>New construction services</Kicker>
            <h2 className="disp" style={{ color: "#fff", fontSize: 50, marginTop: 16 }}>From pad to panels, self-performed</h2>
          </div>
          <p style={{ color: "#bdbdbd", fontWeight: 500, lineHeight: 1.55 }}>
            Four service lines, one contractor. Select a service for details on how the work is engineered, sequenced, and installed.
          </p>
        </div>
        <div className="r-svc">
          {N_SERVICES.map((s) => (
            <a href="#" key={s.t} className="lift" style={{ background: s.feature ? "var(--red)" : "var(--ink-2)", color: "#fff", border: "1px solid rgba(255,255,255,.07)", display: "flex", flexDirection: "column" }}>
              <Img label={s.imgAlt ?? s.t + ". Jobsite photo"} src={s.img} h={158} />
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
        <p style={{ color: "#8a8a8a", fontSize: 13, fontWeight: 500, marginTop: 22 }}>Workmanship warranty, terms vary by service.</p>
      </div>
    </section>
  );
}

/* ---------- PROCESS: PLANS TO POUR (replaces the repair Pier Path) ---------- */
const N_STEPS = [
  { n: "01", t: "Send Us the Plans", d: "Send plans and specs. We take off quantities, flag structural questions early, and walk the site when it helps the number." },
  { n: "02", t: "An Engineered Bid", d: "A clear, documented scope and engineered bids, with the engineering answered up front instead of surfacing later as change orders." },
  { n: "03", t: "Self-Performed on Schedule", d: "Our own crews do the work and coordinate with your other trades, and we verify against spec before handoff." },
];
function NProcess() {
  return (
    <section style={{ background: "var(--bone)", padding: "90px 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 44 }}>
          <div>
            <Kicker>Plans to pour</Kicker>
            <h2 className="disp" style={{ fontSize: 48, marginTop: 16, color: "var(--ink)" }}>Three steps to engineered bids</h2>
          </div>
          <Btn variant="outline" arrow="ur" href="/request/">Scope a project</Btn>
        </div>
        <div className="d-3" style={{ gap: 22 }}>
          {N_STEPS.map((s) => (
            <div key={s.n} style={{ background: "#fff", padding: "32px 30px 28px", borderTop: "3px solid var(--red)", display: "flex", flexDirection: "column" }}>
              <div className="disp" style={{ fontSize: 46, color: "var(--gray-2)" }}>{s.n}</div>
              <h3 className="disp" style={{ color: "var(--ink)", fontSize: 22, margin: "10px 0 12px", lineHeight: 1.05 }}>{s.t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.55, fontWeight: 500, marginBottom: 16 }}>{s.d}</p>
              <a href="/request/"
                className="over" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 6, color: "var(--red)", fontSize: 11 }}>
                Scope a project <Arrow s={13} c="var(--red)" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHO WE WORK WITH ---------- */
const N_CLIENTS = ["General Contractors", "Developers", "Custom Home Builders", "Production Builders", "Owners, Direct", "Municipal & Institutional"];
function NClients() {
  return (
    <section style={{ background: "var(--paper)", padding: "76px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 30 }}>
          <div>
            <Kicker>Who we work with</Kicker>
            <h2 className="disp" style={{ fontSize: 40, marginTop: 14, color: "var(--ink)" }}>Built to slot into your project</h2>
          </div>
          <p style={{ color: "var(--muted)", fontWeight: 500, maxWidth: 380, lineHeight: 1.55 }}>As a sub on your schedule or direct to the owner, across DFW and the Houston area.</p>
        </div>
        <div className="c-ind">
          {N_CLIENTS.map((t) => (
            <div key={t} style={{ border: "1px solid var(--line)", borderTop: "3px solid var(--red)", padding: "20px 18px", minHeight: 96, display: "flex", alignItems: "flex-start" }}>
              <span className="disp" style={{ fontSize: 16, lineHeight: 1.15, color: "var(--ink)" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY / BUILDER VALUE ---------- */
const N_WHY: [string, string][] = [
  ["Engineering and concrete under one roof", "Structural questions get answered in-house, which helps in tough approval environments."],
  ["Self-performed crews", "Schedule control without a chain of subs between the bid and the pour."],
  ["One accountable contractor", "The company that bids the scope also engineers it and performs it."],
  ["Documentation for lenders and inspectors", "Engineered plans, elevation records, and close-out documents for your files."],
];
function NWhy() {
  return (
    <section className="tex-light" style={{ padding: "88px 0" }}>
      <div className="wrap c-2">
        <div>
          <Kicker>For builders and developers</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 18px", color: "var(--ink)" }}>Built for how new construction gets delivered</h2>
          <div>
            {N_WHY.map(([t, d], i) => (
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
            <Img label="Tilt-wall panel erection at a new construction site" src="/images/nchub-panel.webp" style={{ height: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA BAND ---------- */
function NCtaBand() {
  return (
    <section style={{ background: "var(--red)", padding: "54px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <div>
          <h2 className="disp" style={{ color: "#fff", fontSize: 34, lineHeight: 1.05 }}>Building something new?</h2>
          <p style={{ color: "rgba(255,255,255,.92)", fontWeight: 500, fontSize: 16, marginTop: 8 }}>Send the plans and get engineered bids from a self-performing contractor.</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/request/" className="btn" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>Scope a project <Arrow s={15} /></a>
          <a className="btn" href={PHONE_TEL} style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)" }}><Phone s={14} c="#fff" /> {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ASSEMBLY ---------- */
export default function NewConstructionPage() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <NHero />
      <DTrustBar />
      <NServices />
      <NIntro />
      <NProcess />
      <DPierSystems />
      <NClients />
      <NWhy />
      <DContact />
      <DFooter />
    </div>
  );
}
