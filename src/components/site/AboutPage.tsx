"use client";

import Link from "next/link";
import { Arrow, Phone, Check } from "./icons";
import { Btn, Kicker, Img, PhotoSlot, dScroll, PHONE, PHONE_TEL } from "./primitives";
import { DNav, DTrustBar, DContact, DFooter } from "./DirectionD";

/* ============================================================
   ABOUT — inner page.
   Ported from the claude.design handoff (page-about.jsx).
   Engineer-owned story page. Reuses Direction D's nav, trust
   bar, contact form, and footer.
   COMPLIANCE: no ratings/testimonials, no superlatives or
   guarantees, no em-dashes, inspection-first language. Financing
   and one-business-day quote are residential-only and do NOT
   appear here.
   The two owner photo slots ship as labeled placeholders (the
   design specifies no photo yet); drop real photos in when ready.
   ============================================================ */

/* ---------- HERO ---------- */
function AHero() {
  return (
    <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
      <div className="d-blueprint" style={{ opacity: .5 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 64 }}>
        <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 30 }}>
          <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
          <span style={{ color: "var(--red)" }}>/</span>
          <span style={{ color: "#fff" }}>About</span>
        </div>
        <div className="a-hero">
          <div>
            <Kicker color="#fff">About Cardinal Foundation Services</Kicker>
            <h1 className="disp" style={{ fontSize: 58, margin: "20px 0 0", color: "#fff" }}>
              A foundation repair company <span style={{ color: "var(--red)" }}>run by an engineer.</span>
            </h1>
            <p style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.6, margin: "24px 0 28px", maxWidth: 540, fontWeight: 500 }}>
              Cardinal Foundation Services is a foundation repair and commercial concrete contractor headquartered in Fort Worth, Texas, serving homeowners, commercial property owners, and builders across DFW and Texas. The company is co-owned by Josh Lavelle and Daneel Nortier, PE, a licensed Texas Professional Engineer since 2012 (License #113157, verifiable on the TBPELS public roster), and the team brings more than 35 years of combined experience across residential repair, commercial structural work, and new construction.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn variant="red" arrow="ur" href="/request/">Request an Inspection</Btn>
              <Btn variant="ghost" arrow="none" href={PHONE_TEL}><Phone s={15} c="#fff" /> {PHONE}</Btn>
            </div>
          </div>
          <div style={{ position: "relative", minHeight: 420 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <Img label="Cracked brick foundation corner on a Fort Worth home in need of repair" src="/images/foundation-repair-fort-worth-cracked-brick.webp" style={{ height: "100%" }} />
            </div>
            <div style={{ position: "absolute", left: 0, bottom: 0, background: "var(--red)", color: "#fff", padding: "18px 24px", maxWidth: 320 }}>
              <div className="disp" style={{ fontSize: 19 }}>Foundation Repair Experts Serving DFW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STORY ---------- */
function AStory() {
  return (
    <section style={{ background: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap c-2">
        <div>
          <Kicker>What we believe about this industry</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 18px", color: "var(--ink)" }}>Foundation repair has a trust problem, and we think it earned it.</h2>
        </div>
        <div>
          <p className="lead" style={{ marginBottom: 18 }}>
            Commission-driven inspections, pier counts that grow with the salesperson&apos;s quota, and homeowners who cannot tell a real problem from a pitch. Our answer is structural: measure first, recommend from data, and be willing to say the sentence most companies will not: sometimes the right answer is that you do not need a repair.
          </p>
          <p className="lead">
            Every free inspection produces a written report: an elevation survey of your foundation, visual analysis, a topographical map showing which areas have moved, and supporting analysis of how the foundation is performing. You leave with documentation, not a pitch. And when you want verification, a structural engineer&apos;s review and report can be added to any inspection, a second layer most companies cannot offer because most companies do not have an engineer to offer it.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- OUR TEAM (two owners) ---------- */
const A_OWNERS = [
  {
    name: "Daneel Nortier, PE",
    role: "Owner / Engineer",
    label: "Photo of Daneel Nortier, PE",
    photo: "/images/daneel-nortier-pe-owner.webp",
    bio: "Licensed Texas Professional Engineer since 2012 (License #113157, verifiable on the TBPELS public roster), with a degree from New Mexico State University and structural experience across Texas, Oklahoma, and Arkansas. Daneel's structural engineer's review and report can be added to any inspection as a verification tier.",
  },
  {
    name: "Josh Lavelle",
    role: "Owner",
    label: "Photo of Josh Lavelle",
    photo: "/images/josh-lavelle-owner.webp",
    bio: "A Mechanical Engineering graduate of Missouri University of Science and Technology, in the industry since 2020. Josh leads implementation and production, bringing strong project management and a fresh perspective to every project type.",
  },
];
function ATeam() {
  return (
    <section id="a-team" style={{ background: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ maxWidth: 720, marginBottom: 40 }}>
          <Kicker>Our team</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 14px", color: "var(--ink)" }}>The owners on your project</h2>
          <p className="lead">Daneel Nortier and Josh Lavelle form a team built around precise design, implementation, and production of structural projects. Together they combine engineering depth and project management to execute every job, start to finish.</p>
        </div>
        <div className="c-2" style={{ alignItems: "stretch" }}>
          {A_OWNERS.map((o) => (
            <div key={o.name} style={{ border: "1px solid var(--line)", background: "#fff", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", height: 340 }}>
                {o.photo ? (
                  <Img label={o.label} src={o.photo} style={{ position: "absolute", inset: 0, height: "100%", objectPosition: "50% 20%" }} />
                ) : (
                  <PhotoSlot label={o.label} style={{ position: "absolute", inset: 0 }} />
                )}
              </div>
              <div style={{ padding: "26px 28px 28px", borderTop: "3px solid var(--red)" }}>
                <h3 className="disp" style={{ fontSize: 26, color: "var(--ink)" }}>{o.name}</h3>
                <div className="over" style={{ color: "var(--red)", fontSize: 11.5, margin: "6px 0 14px" }}>{o.role}</div>
                <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.6, fontWeight: 500, margin: 0 }}>{o.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VALUES ---------- */
/* "How we work" per content/25; the oversight sentence finalizes at the marker. */
const A_VALUES = [
  { t: "Engineer-owned", d: "A licensed PE co-owns the company, and an engineer's review is available on any inspection as a verification tier. We treat engineering as proof to stand behind rather than a slogan to lead with." },
  { t: "Self-performed", d: "Our own crews execute the work we scope, residential through commercial through new construction. The company that diagnosed your foundation is the company standing on it." },
  { t: "Documented", d: "Projects are published with conditions found, methods selected, and results, and commercial clients receive engineered bids with the reasoning attached. Work carries a transferable workmanship warranty, terms vary by service." },
];
function AValues() {
  return (
    <section className="tex-dark" style={{ padding: "88px 0" }}>
      <div className="wrap">
        <div style={{ maxWidth: 720, marginBottom: 40 }}>
          <Kicker>How we work</Kicker>
          <h2 className="disp" style={{ color: "#fff", fontSize: 46, marginTop: 16 }}>Three commitments on every project</h2>
          <p style={{ color: "#bdbdbd", fontWeight: 500, lineHeight: 1.6, marginTop: 14 }}>
            Fort Worth is home. We serve the Dallas-Fort Worth Metroplex for residential and commercial work, the Houston area for residential foundation repair, and take larger commercial and specialty structural projects across Texas. Cardinal is BBB A+ rated and holds a 4.9 rating on Google.
          </p>
        </div>
        <div className="c-svc">
          {A_VALUES.map((v, i) => (
            <div key={v.t} style={{ background: "var(--ink-2)", border: "1px solid rgba(255,255,255,.07)", borderTop: "3px solid var(--red)", padding: "30px 28px" }}>
              <span className="disp" style={{ fontSize: 15, color: "var(--red)" }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="disp" style={{ color: "#fff", fontSize: 22, margin: "12px 0 12px", lineHeight: 1.06 }}>{v.t}</h3>
              <p style={{ color: "#a8a8a8", fontSize: 14.5, lineHeight: 1.55 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHAT WE DO (pathways) ---------- */
const A_PATHS = [
  { t: "Commercial", href: "/commercial", d: "Foundation repair, concrete lifting, tilt-wall, retaining walls, and drainage for warehouses, retail, multifamily, and industrial sites." },
  { t: "Residential", href: "/residential", d: "Specialized, large-scale repairs. Custom homes, complex structural movement, large retaining walls, and the jobs others refer out." },
  { t: "New Construction", href: "/new-construction", d: "Commercial concrete, tilt-wall, builder work, and earthwork for builders and developers. A separate pathway, not a repair add-on." },
];
function APaths() {
  return (
    <section style={{ background: "var(--paper)", padding: "84px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
          <div>
            <Kicker>What we do</Kicker>
            <h2 className="disp" style={{ fontSize: 44, marginTop: 16, color: "var(--ink)" }}>Three ways we serve Texas</h2>
          </div>
          <p style={{ color: "var(--muted)", fontWeight: 500, maxWidth: 380, lineHeight: 1.55 }}>Based in Fort Worth, serving DFW and Greater Houston.</p>
        </div>
        <div className="c-svc">
          {A_PATHS.map((p) => (
            <Link href={p.href} key={p.t} className="lift" style={{ border: "1px solid var(--line)", borderTop: "3px solid var(--red)", padding: "28px 28px 26px", display: "flex", flexDirection: "column", minHeight: 200 }}>
              <h3 className="disp" style={{ fontSize: 24, color: "var(--ink)", marginBottom: 12 }}>{p.t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.55, fontWeight: 500, marginBottom: 18 }}>{p.d}</p>
              <span style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--red)" }}>
                Explore {p.t} <Arrow s={14} c="var(--red)" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CREDENTIALS ---------- */
const A_CREDS: [string, string][] = [
  ["Licensed PE", "Owner is a licensed Professional Engineer, since 2012"],
  ["BBB A+", "Accredited Better Business Bureau rating"],
  ["AAGD / TAB / ASA", "Member associations, apartment and building trades"],
  ["Licensed & Insured", "Full coverage on every project"],
];
function ACreds() {
  return (
    <section style={{ background: "var(--bone)", padding: "76px 0" }}>
      <div className="wrap">
        <div style={{ maxWidth: 620, marginBottom: 34 }}>
          <Kicker>Credentials</Kicker>
          <h2 className="disp" style={{ fontSize: 40, marginTop: 14, color: "var(--ink)" }}>Verify us before you call</h2>
        </div>
        <div className="a-creds">
          {A_CREDS.map(([t, d]) => (
            <div key={t} style={{ background: "#fff", border: "1px solid var(--line)", padding: "24px 22px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <Check s={18} c="var(--red)" />
              <div>
                <div className="disp" style={{ fontSize: 17, color: "var(--ink)" }}>{t}</div>
                <div style={{ color: "var(--muted)", fontSize: 13.5, fontWeight: 500, marginTop: 5, lineHeight: 1.5 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CREWS ---------- */
function ACrews() {
  return (
    <section style={{ background: "var(--paper)", padding: "88px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap c-2">
        <div style={{ position: "relative", minHeight: 400 }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Img label="Skid steer performing foundation work at a new construction home" src="/images/foundation-work-new-construction-home-skid-steer.webp" style={{ height: "100%" }} />
          </div>
          <div style={{ position: "absolute", left: 0, bottom: 0, background: "var(--red)", color: "#fff", padding: "18px 24px", maxWidth: 320 }}>
            <div className="disp" style={{ fontSize: 19 }}>Foundation &amp; New Construction Work Across DFW</div>
          </div>
        </div>
        <div>
          <Kicker>Our crews</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 18px", color: "var(--ink)" }}>The plan is only as good as the crew that builds it</h2>
          <p className="lead" style={{ marginBottom: 16 }}>
            Cardinal crews are employees, not day labor. They install every pier type we specify: concrete pressed, steel, helical, drilled, and hybrid, and they work under engineering supervision.
          </p>
          <p className="lead" style={{ marginBottom: 28 }}>
            On commercial sites they are trained to work around tenants, shifts, and operations. In homes they treat finishes, landscaping, and your time with respect, and they restore the site before they leave.
          </p>
          <Btn variant="outline" arrow="ur" href="/projects/">See our work</Btn>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function ACta() {
  return (
    <section style={{ background: "var(--red)", padding: "54px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <div>
          <h2 className="disp" style={{ color: "#fff", fontSize: 34, lineHeight: 1.05 }}>Start with an engineer.</h2>
          <p style={{ color: "rgba(255,255,255,.92)", fontWeight: 500, fontSize: 16, marginTop: 8 }}>Free, no-obligation inspection. Commercial, residential, or new construction.</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/request/" className="btn" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>Request an inspection <Arrow s={15} /></a>
          <a className="btn" href={PHONE_TEL} style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)" }}><Phone s={14} c="#fff" /> {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- ASSEMBLY ---------- */
export default function AboutPage() {
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      <AHero />
      <DTrustBar />
      <AStory />
      <ATeam />
      <AValues />
      <APaths />
      <ACreds />
      <ACrews />
      <DContact />
      <DFooter />
    </div>
  );
}
