"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Arrow, Phone, Check } from "./icons";
import { Btn, Kicker, Img, Logo, TCPA, dScroll, PHONE, PHONE_TEL, EMAIL } from "./primitives";

/* ============================================================
   DIRECTION D — Production homepage.
   Ported from the claude.design handoff. Compliance preserved:
   no fabricated ratings/testimonials, no superlatives/guarantees,
   financing + one-business-day quote = residential only,
   no em-dashes in on-page copy, DFW/Texas geography only.
   ============================================================ */

/* ---------- form submission helper ---------- */
export type LeadPayload = Record<string, string> & { lead: string; source: string };
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/contact/", {
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
  Residential: ["Complex Structural Repair", "Large Retaining Walls", "Concrete Lifting / Leveling", "Custom Home Foundation", "Not sure, need an inspection"],
  "New Construction": ["Commercial Concrete", "Tilt-Wall Construction", "Builder Work / Additions", "Earthwork / Grading", "Not sure, need to scope"],
};
const D_URGENCY = ["Active damage / urgent", "Within the month", "Planning / budgeting"];
export const DFW_CITIES = ["Fort Worth", "Dallas", "Arlington", "Plano", "Frisco", "McKinney", "Denton", "Keller", "Grapevine", "Mansfield", "Carrollton", "Lewisville", "Irving", "Garland", "Richardson", "Grand Prairie", "Allen", "Flower Mound", "Prosper", "Celina", "Little Elm", "Melissa", "Bedford", "Euless", "Hurst", "North Richland Hills", "Burleson", "Southlake", "Colleyville", "Rockwall", "Wylie", "Weatherford", "Midlothian"];
export const HOUSTON_CITIES = ["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress"];
export const D_CITIES = [...DFW_CITIES, ...HOUSTON_CITIES];
/* Credibility bar per content/14. The 4.9 Google rating appears as visible
   text only, NEVER as review markup; TODO: link it to the Google Business
   Profile once the GBP URL is provided. */
export const GOOGLE_RATING = "4.9 \u2605 on Google";
export const GOOGLE_REVIEWS_URL = "https://share.google/h26ZNieW3Lfqdk5WL";

const D_TRUSTBAR = ["BBB A+", GOOGLE_RATING, "Licensed PE Ownership", "AAGD / TAB / ASA Member", "Transferable Workmanship Warranty", "Free Foundation Check"];

const D_COMMERCIAL: { n: string; t: string; d: string; items: string[]; href?: string }[] = [
  { n: "01", t: "Commercial Foundation Repair", d: "Engineered pier systems for warehouses, retail, and structural buildings.", items: ["Helical Piers & Tiebacks", "Drilled Piers", "Hybrid Pier Systems", "Underpinning", "Post-Tension Repair"], href: "/services/commercial-foundation-repair/" },
  { n: "02", t: "Concrete Lifting & Floor Leveling", d: "Settled warehouse slabs and commercial floors raised back to grade with polyurethane foam or mudjacking. Large areas, minimal downtime.", items: ["Warehouse Slab Foundation Repair", "Concrete Leveling", "Slab Lifting", "Void Filling"], href: "/commercial/concrete-lifting/" },
  { n: "03", t: "Commercial Concrete & Tilt-Wall", d: "Structural slab pours, tilt-wall fabrication, and structural crack repair.", items: ["Slab Pouring", "Tilt-Wall Fabrication", "Structural Crack Repair", "Expansion Joint & Mastic"], href: "/commercial/tilt-wall/" },
  { n: "04", t: "Structural Retaining Walls", d: "Tieback anchors and structural retaining wall work that manage load and slope.", items: ["Tieback Anchors", "Structural Wall Repair"] },
  { n: "05", t: "Commercial Drainage & Stormwater", d: "Water management that protects the building envelope and foundation.", items: ["French Drain Systems", "Perimeter Drainage", "Stormwater Management"] },
];
const D_NEWCON = [
  { t: "Commercial Concrete & Tilt-Wall", d: "Structural slab pours, panel fabrication, and erection for warehouse and industrial shells." },
  { t: "Builder Work & Additions", d: "Specialized structural work for builders and developers. Custom residential, additions, and builder piers." },
  { t: "Earthwork & Grading", d: "Site preparation, grading, and developer infrastructure that sets the foundation up correctly." },
];
const D_STEPS = [
  { n: "01", t: "Free On-Site Assessment", d: "An engineer-led team inspects the structure and soil. An inspection determines the cause before anything is recommended." },
  { n: "02", t: "Engineered Plan & Documented Quote", d: "You will receive an engineered plan from one of our foundation experts, including a quote for the repairs." },
  { n: "03", t: "Turn-Key Repairs", d: "Our own crews self-perform the full scope on schedule, and we verify the work before we leave the site." },
];
const D_PIERS: [string, string][] = [
  ["Concrete Pressed Piers", "Proven stability for slab foundations."],
  ["Steel Piers", "High-grade steel driven to load-bearing strata."],
  ["Helical Piers", "Screw-in steel piers, fast and low-disturbance."],
  ["Drilled Piers", "Deep cast-in-place piers for heavy structures."],
  ["Hybrid Piers", "A blend of strength, depth, and cost control."],
];
const D_WORK = [
  { t: "Tilt-Wall Foundation & Drainage Restoration", scope: "Commercial · Foundation + Drainage", img: "/images/project-tiltresto-02.webp", href: "/projects/tilt-wall-foundation-drainage-restoration/" },
  { t: "Industrial Polyurethane Lift & Void Fill", scope: "Industrial · Concrete Lifting", img: "/images/project-diplomat-01.webp", href: "/projects/diplomat-drive-polyurethane-injection-industrial-foundation-lift-void-fill/" },
  { t: "Multifamily Foundation Repair", scope: "Multifamily · DFW", img: "/images/project-baytown-01.webp", href: "/projects/baytown-multi-family/" },
  { t: "Steel Pier Installation", scope: "Foundation · Steel Piers", img: "/images/project-stemmons-04.webp", href: "/projects/steel-piers-n-stemmons/" },
];
const D_RES: { t: string; items: string[]; href?: string }[] = [
  { t: "Complex Structural Repair", items: ["Multi-symptom failures", "Engineered pier plans"], href: "/residential/foundation-repair/" },
  { t: "Large Retaining Walls", items: ["Tieback anchors", "Structural rebuilds"] },
  { t: "Large & Custom Homes", items: ["Pier & beam", "Slab foundations"] },
  { t: "Concrete Lifting & Leveling", items: ["House lifting", "Driveways & pool decks", "Slab lifting"], href: "/residential/concrete-leveling/" },
];

/* ---------- 1 · NAV: full-width mega menu ----------
   Per 00_NAV_AND_BUILD_ADDENDUM.md (governs navigation): max 6 items + CTA,
   curated dropdowns linking LIVE pages only. Every link is a crawlable HTML
   anchor, server-rendered in the DOM at all times; closed panels hide
   visually (opacity/visibility), never display:none via JS injection.
   Commercial Foundation Repair links the LEGACY URL, never the clean path.
   Not-yet-live addendum items (Pier & Beam, Slab Repair, Second Opinion,
   Root Barriers, Warning Signs, Cost Guide, FAQs, Field Notes) enter when
   their pages ship; Resources renders one column until then. */
/* href omitted = not-yet-live service: renders as plain muted text (never a
   link to a non-existent route); adding the href when the page ships is the
   only change needed to make it live */
type MegaLink = { label: string; href?: string; hub?: boolean };
type MegaColumn = { num: string; title: string; links: MegaLink[] };
type MegaFeature = { kicker: string; title: string; desc: string; href: string; cta: string };
type NavEntry = { label: string; href: string; columns?: MegaColumn[]; feature?: MegaFeature };

const NAV: NavEntry[] = [
  {
    label: "Commercial", href: "/commercial/",
    columns: [
      {
        num: "01", title: "Structural", links: [
          /* Legacy URL by spec; NEVER the clean path */
          { label: "Multifamily & Apartments", href: "/commercial/multifamily/" },
          { label: "Commercial Foundation Repair", href: "/services/commercial-foundation-repair/", hub: true },
          { label: "Steel Piers", href: "/commercial/foundation-repair/steel-piers/" },
          { label: "Underpinning", href: "/commercial/foundation-repair/underpinning/" },
          { label: "Tilt Wall", href: "/commercial/tilt-wall/" },
        ],
      },
      {
        num: "02", title: "Concrete", links: [
          { label: "Concrete Lifting & Warehouse Floors", href: "/commercial/concrete-lifting/", hub: true },
          { label: "Warehouse Floor Leveling", href: "/commercial/concrete-lifting/warehouse-floor-leveling/" },
          { label: "Poly Injection", href: "/commercial/concrete-lifting/polyurethane-foam-injection/" },
          { label: "Slab Repair", href: "/commercial/concrete-construction/slab-repair/" },
          { label: "Concrete Construction", href: "/commercial/concrete-construction/" },
        ],
      },
      {
        num: "03", title: "Site & Specialty", links: [
          { label: "Drainage", href: "/commercial/drainage/", hub: true },
          { label: "French Drains", href: "/commercial/drainage/french-drains/" },
          { label: "Retaining Walls", href: "/commercial/retaining-walls/" },
          { label: "Structural Repair", href: "/commercial/structural-repair/" },
          { label: "Specialty Services", href: "/commercial/specialty/" },
        ],
      },
    ],
    feature: {
      /* Deliberate promotion slot through October */
      kicker: "",
      title: "Multifamily Due Diligence",
      desc: "Pre-acquisition foundation and structural assessments, starting free on select buildings.",
      href: "/commercial/due-diligence-walks/",
      cta: "See the assessments",
    },
  },
  {
    label: "Residential", href: "/residential/",
    columns: [
      {
        num: "01", title: "Foundation Repair", links: [
          { label: "Foundation Repair", href: "/residential/foundation-repair/", hub: true },
          { label: "Steel Piers", href: "/residential/foundation-repair/steel-piers/" },
          { label: "Drilled Piers", href: "/residential/foundation-repair/drilled-piers/" },
          { label: "Pressed Piers", href: "/residential/foundation-repair/concrete-pressed-piers/" },
          { label: "Helical Piers", href: "/residential/foundation-repair/helical-piers/" },
          { label: "Hybrid Piers", href: "/residential/foundation-repair/hybrid-piers/" },
          { label: "Pier & Beam", href: "/residential/foundation-repair/pier-and-beam/" },
          { label: "Slab Repair", href: "/residential/foundation-repair/slab-repair/" },
          { label: "Post-Tension Slab Repair", href: "/residential/foundation-repair/post-tension-slab-repair/" },
        ],
      },
      {
        num: "02", title: "Concrete Leveling", links: [
          { label: "Concrete Leveling", href: "/residential/concrete-leveling/", hub: true },
          { label: "Concrete Slab Lifting (Poly)", href: "/residential/concrete-leveling/polyurethane-foam-injection/" },
          { label: "Mudjacking", href: "/residential/concrete-leveling/mudjacking/" },
          { label: "Crack Repair", href: "/residential/concrete-leveling/concrete-crack-repair/" },
        ],
      },
      {
        num: "03", title: "Drainage & Walls", links: [
          { label: "Drainage", href: "/residential/drainage/", hub: true },
          { label: "French Drains", href: "/residential/drainage/french-drains/" },
          { label: "Area Drains", href: "/residential/drainage/area-drains/" },
          { label: "Root Barriers", href: "/residential/drainage/root-barriers/" },
          { label: "Sump Pumps", href: "/residential/drainage/sump-pumps/" },
          { label: "Retaining Walls", href: "/residential/retaining-walls/" },
          { label: "Financing", href: "/financing/" },
        ],
      },
    ],
    feature: {
      kicker: "Includes elevation map",
      title: "Free Foundation Check",
      desc: "Elevation readings mapped across your foundation, and a written report before anyone talks price.",
      href: "/contact/",
      cta: "Schedule yours",
    },
  },
  {
    label: "New Construction", href: "/new-construction/",
    columns: [
      {
        num: "01", title: "Site & Concrete", links: [
          { label: "Earthwork & Grading", href: "/new-construction/earthwork-grading/" },
          { label: "Concrete Flatwork, Slabs & Stamped", href: "/new-construction/concrete-flatwork/" },
        ],
      },
      {
        num: "02", title: "Coming Online", links: [
          { label: "Pier Drilling" },
          { label: "Foundations" },
          { label: "Soil Conditioning" },
        ],
      },
    ],
    feature: {
      kicker: "Engineering + concrete, one scope",
      title: "For Builders & GCs",
      desc: "Grading, select fill, and finished flatwork planned and self-performed as one engineered scope. One contractor from pad prep to pour.",
      href: "/new-construction/",
      cta: "See how we work",
    },
  },
  { label: "Projects", href: "/projects/" },
  {
    label: "Resources", href: "/resources/pier-systems-explained/",
    columns: [
      {
        num: "01", title: "Guides", links: [
          { label: "Pier Systems Compared", href: "/resources/pier-systems-explained/", hub: true },
        ],
      },
    ],
    feature: {
      kicker: "Steel vs concrete vs helical",
      title: "Pier Systems Compared",
      desc: "How each system works, how deep each goes, and which situations fit each. A plain comparison.",
      href: "/resources/pier-systems-explained/",
      cta: "Read the guide",
    },
  },
  { label: "About", href: "/about/" },
];

function sectionFor(pathname: string): string | null {
  if (pathname.startsWith("/residential")) return "Residential";
  if (pathname.startsWith("/commercial") || pathname.startsWith("/services/commercial-foundation-repair")) return "Commercial";
  if (pathname.startsWith("/new-construction")) return "New Construction";
  if (pathname.startsWith("/projects")) return "Projects";
  if (pathname.startsWith("/resources")) return "Resources";
  if (pathname.startsWith("/about")) return "About";
  return null;
}

/* Panel overview links: the in-panel route to each hub (top-right, red, arrow) */
const OVERVIEW: Record<string, { label: string; href: string }> = {
  Residential: { label: "All residential services", href: "/residential/" },
  Commercial: { label: "All commercial services", href: "/commercial/" },
  "New Construction": { label: "All new construction services", href: "/new-construction/" },
};

function MegaPanel({ entry, open, onKeyDown, panelRef }: { entry: NavEntry; open: boolean; onKeyDown: (e: React.KeyboardEvent) => void; panelRef: (el: HTMLDivElement | null) => void }) {
  const overview = OVERVIEW[entry.label];
  return (
    <div className={"mega" + (open ? " open" : "")} ref={panelRef} onKeyDown={onKeyDown} aria-hidden={!open} role="region" aria-label={entry.label + " menu"}>
      <div className="wrap" style={{ position: "relative" }}>
        {overview && (
          <Link className="mega-overview" href={overview.href} tabIndex={open ? 0 : -1}>
            {overview.label} <Arrow s={14} c="currentColor" />
          </Link>
        )}
        <div className="mega-grid" style={entry.columns && entry.columns.length < 3 ? { gridTemplateColumns: `repeat(${entry.columns.length}, 1fr) 320px` } : undefined}>
          {entry.columns?.map((col, ci) => (
            <div className="mega-col" key={col.title}>
              <div className="mono mega-kicker"><span className="num">{col.num}</span>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                {col.links.map((l, li) =>
                  l.href ? (
                    <a key={l.href + l.label} href={l.href} className={l.hub ? "hub" : undefined} data-col={ci}
                      data-idx={col.links.slice(0, li).filter((x) => x.href).length} tabIndex={open ? 0 : -1}>{l.label}</a>
                  ) : (
                    <span key={l.label} className="soon">{l.label}</span>
                  )
                )}
              </div>
            </div>
          ))}
          {entry.feature && (
            <div className="mega-feature">
              {entry.feature.kicker && <span className="mono mega-kicker" style={{ marginBottom: 6 }}>{entry.feature.kicker}</span>}
              <span className="title">{entry.feature.title}</span>
              <span className="desc">{entry.feature.desc}</span>
              <a className="go" href={entry.feature.href} data-col={entry.columns?.length ?? 0} data-idx={0} tabIndex={open ? 0 : -1}>
                {entry.feature.cta} <Arrow s={14} c="currentColor" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="mega-foot">
        <div className="wrap mega-foot-in">
          <span className="mono trust"><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener" style={{ color: "inherit" }}><b>{GOOGLE_RATING}</b></a> / <b>Transferable workmanship warranty</b></span>
          <Link className="mono recent" href="/projects/" tabIndex={open ? 0 : -1}>View recent projects -&gt;</Link>
        </div>
      </div>
    </div>
  );
}

export function DNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const active = sectionFor(pathname ?? "");
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const triggerRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const clearTimers = () => {
    if (openTimer.current) { clearTimeout(openTimer.current); openTimer.current = null; }
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };
  /* hover intent: 120ms to open, short grace to close */
  const intentOpen = (label: string) => { clearTimers(); openTimer.current = setTimeout(() => setOpenMenu(label), 120); };
  const intentClose = () => { clearTimers(); closeTimer.current = setTimeout(() => setOpenMenu(null), 200); };
  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };

  const closeAndRefocus = useCallback(() => {
    setOpenMenu((cur) => {
      if (cur) triggerRefs.current[cur]?.focus();
      return null;
    });
  }, []);

  /* Escape + outside click close */
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeAndRefocus(); };
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onDown); };
  }, [openMenu, closeAndRefocus]);

  /* panel keyboard: focus trap + arrow keys between columns/links */
  const panelKeys = (label: string) => (e: React.KeyboardEvent) => {
    const panel = panelRefs.current[label];
    if (!panel) return;
    const links = Array.from(panel.querySelectorAll<HTMLAnchorElement>("a[data-col], .mega-foot a"));
    const cur = document.activeElement as HTMLAnchorElement | null;
    const i = cur ? links.indexOf(cur) : -1;
    if (e.key === "Tab") {
      /* trap focus within the open panel */
      if (links.length === 0) return;
      if (!e.shiftKey && i === links.length - 1) { e.preventDefault(); links[0].focus(); }
      else if (e.shiftKey && i <= 0) { e.preventDefault(); links[links.length - 1].focus(); }
      return;
    }
    const col = cur?.dataset.col !== undefined ? Number(cur.dataset.col) : null;
    const idx = cur?.dataset.idx !== undefined ? Number(cur.dataset.idx) : null;
    const at = (c: number, x: number) => panel.querySelector<HTMLAnchorElement>(`a[data-col="${c}"][data-idx="${x}"]`);
    if (e.key === "ArrowDown" && col !== null && idx !== null) { e.preventDefault(); (at(col, idx + 1) ?? at(col, 0))?.focus(); }
    if (e.key === "ArrowUp" && col !== null && idx !== null) { e.preventDefault(); (at(col, idx - 1) ?? at(col, 0))?.focus(); }
    /* a column may hold only coming-soon text (no anchors); step past it */
    if (e.key === "ArrowRight" && col !== null) { e.preventDefault(); (at(col + 1, 0) ?? at(col + 2, 0) ?? at(0, 0))?.focus(); }
    if (e.key === "ArrowLeft" && col !== null) { e.preventDefault(); (at(col - 1, 0) ?? at(col - 2, 0) ?? at(col, 0))?.focus(); }
  };

  const megaEntries = NAV.filter((n) => n.columns);

  return (
    <header ref={navRef} style={{ position: "sticky", top: 0, zIndex: 100 }} onMouseLeave={intentClose} onMouseEnter={cancelClose}>
      <div style={{ background: "var(--ink)", color: "#fff" }}>
        <div className="hdr-wrap hdr-top">
          <span className="over" style={{ fontSize: 11, color: "#cfcfcf", letterSpacing: ".12em" }}>
            <span style={{ color: "var(--red)" }}>●</span>&nbsp; Engineer-Owned · Fort Worth, TX · BBB A+
          </span>
          <a href={`mailto:${EMAIL}`} className="over hdr-email" style={{ fontSize: 11, color: "#cfcfcf" }}>{EMAIL}</a>
        </div>
      </div>
      <div style={{ background: "#fff", borderBottom: "1px solid var(--line)", position: "relative" }}>
        <div className="hdr-wrap hdr-row">
          <Logo light={false} h={40} />
          <nav className="d-nav-links" aria-label="Primary">
            {NAV.map((m) => (
              m.columns ? (
                <Link
                  key={m.label}
                  href={m.href}
                  ref={(el) => { triggerRefs.current[m.label] = el; }}
                  className={"over nav-trigger" + (openMenu === m.label ? " is-open" : "") + (active === m.label ? " is-active" : "")}
                  style={{ color: "var(--ink)", fontSize: 12.5, letterSpacing: ".06em", whiteSpace: "nowrap" }}
                  aria-expanded={openMenu === m.label}
                  aria-haspopup="true"
                  onMouseEnter={() => intentOpen(m.label)}
                  /* click NAVIGATES to the hub URL (real link); hover opens the
                     panel; touch devices navigate straight to the hub, where the
                     panel's overview link is mirrored by the hub page itself */
                  onKeyDown={(e) => {
                    /* Enter follows the link (default); ArrowDown or Space opens the panel */
                    if (e.key === "ArrowDown" || e.key === " ") {
                      e.preventDefault();
                      clearTimers();
                      setOpenMenu(m.label);
                      requestAnimationFrame(() => {
                        panelRefs.current[m.label]?.querySelector<HTMLAnchorElement>('a[data-col="0"][data-idx="0"]')?.focus();
                      });
                    }
                  }}
                >{m.label} ▾</Link>
              ) : (
                <Link key={m.label} href={m.href}
                  className={"over nav-trigger" + (active === m.label ? " is-active" : "")}
                  style={{ color: "var(--ink)", fontSize: 12.5, letterSpacing: ".06em", whiteSpace: "nowrap" }}
                  onMouseEnter={() => { clearTimers(); setOpenMenu(null); }}
                >{m.label}</Link>
              )
            ))}
            <a className="phone-link" href={PHONE_TEL} style={{ color: "var(--ink)", fontSize: 15, whiteSpace: "nowrap" }}>
              <Phone s={14} c="var(--red)" /> {PHONE}
            </a>
            <Btn variant="red" arrow="ur" href="/request/" style={{ padding: "11px 16px", fontSize: 12.5 }}>Free Foundation Check</Btn>
          </nav>
          <button className="d-burger" onClick={() => setMobileOpen((o) => !o)} aria-label="Menu" aria-expanded={mobileOpen}
            style={{ background: "none", border: 0, padding: 8, flexDirection: "column", gap: 5, cursor: "pointer" }}>
            <span style={{ width: 26, height: 3, background: "var(--ink)", display: "block", transition: ".2s", transform: mobileOpen ? "translateY(8px) rotate(45deg)" : "none" }} />
            <span style={{ width: 26, height: 3, background: "var(--ink)", display: "block", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ width: 26, height: 3, background: "var(--ink)", display: "block", transition: ".2s", transform: mobileOpen ? "translateY(-8px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
        {/* Full-width panels: always in the DOM, one per mega entry */}
        {megaEntries.map((m) => (
          <MegaPanel key={m.label} entry={m} open={openMenu === m.label}
            onKeyDown={panelKeys(m.label)}
            panelRef={(el) => { panelRefs.current[m.label] = el; }} />
        ))}
      </div>
      {/* Mobile: full-screen overlay, homeowner-first accordion order, pinned actions */}
      <div className={"m-nav" + (mobileOpen ? " open" : "")}>
        <div className="m-nav-scroll">
          {NAV.map((m) => (
            m.columns ? (
              <details key={m.label} open={m.label === "Residential"}>
                <summary className="disp" style={{ color: "#fff", fontSize: 22, padding: "14px 0" }}>
                  <span className="mono m-kicker" style={{ display: "block", marginBottom: 4 }}>{m.label === "Residential" ? "Homeowners" : m.label === "Commercial" ? "Owners & PMs" : m.label === "New Construction" ? "Builders & GCs" : "Guides"}</span>
                  {m.label} ▾
                </summary>
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: 14 }}>
                  {/* first row: section overview link to the hub page */}
                  <Link href={m.href} onClick={() => setMobileOpen(false)} style={{ color: "#fff", fontWeight: 800, fontSize: 15, padding: "7px 0 7px 14px" }}>{m.label} overview</Link>
                  {/* mobile lists live pages only; coming-soon (href-less) items stay desktop-panel-only */}
                  {m.columns.filter((col) => col.links.some((l) => l.href)).map((col) => (
                    <div key={col.title} style={{ paddingLeft: 14 }}>
                      <div className="mono m-kicker" style={{ margin: "10px 0 2px" }}>{col.num} {col.title}</div>
                      {col.links.filter((l): l is MegaLink & { href: string } => !!l.href).map((l) => (
                        <Link key={l.href + l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ display: "block", color: l.hub ? "#e3e1de" : "#bdbdbd", fontWeight: l.hub ? 800 : 600, fontSize: 14.5, padding: "6px 0 6px 14px" }}>{l.label}</Link>
                      ))}
                    </div>
                  ))}
                  {m.feature && (
                    <Link href={m.feature.href} onClick={() => setMobileOpen(false)} style={{ margin: "12px 0 4px 14px", border: "1px solid var(--red)", padding: "12px 14px", color: "#fff", fontWeight: 800, fontSize: 14 }}>
                      {m.feature.kicker && <span className="mono m-kicker" style={{ display: "block", marginBottom: 4 }}>{m.feature.kicker}</span>}
                      {m.feature.title}
                    </Link>
                  )}
                </div>
              </details>
            ) : (
              <Link key={m.label} href={m.href} onClick={() => setMobileOpen(false)} className="disp" style={{ display: "block", color: "#fff", fontSize: 22, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}>{m.label}</Link>
            )
          ))}
          <a className="phone-link" href={PHONE_TEL} style={{ color: "#fff", fontSize: 18, margin: "18px 0", display: "inline-flex" }}>
            <Phone s={16} c="var(--red)" /> {PHONE}
          </a>
        </div>
        <div className="m-pin">
          <a href={PHONE_TEL} style={{ flex: 1, background: "var(--ink-2)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "16px", fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".04em", fontSize: 14 }}><Phone s={15} c="#fff" /> Call</a>
          <a href="/request/" style={{ flex: 1.4, background: "var(--red)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "16px", fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".04em", fontSize: 14 }}>Free Foundation Check <Arrow s={15} c="#fff" /></a>
        </div>
      </div>
    </header>
  );
}

/* ---------- sticky mobile call bar (spec section 8) ---------- */
export function DMobileCTABar() {
  return (
    <div className="mobile-cta">
      <a href={PHONE_TEL} style={{ flex: 1, background: "var(--ink)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "15px", fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".04em", fontSize: 14 }}><Phone s={15} c="#fff" /> Call</a>
      <a href="/request/" style={{ flex: 1.4, background: "var(--red)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "15px", fontFamily: "var(--display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".04em", fontSize: 14 }}>Free Foundation Check <Arrow s={15} c="#fff" /></a>
    </div>
  );
}

/* ---------- hero quick estimate card ----------
   Spec section 8: email + city/zip fields; success routes to /thank-you/
   (noindex) which fires the GA4 + Ads conversion events. */
function DQuickCard() {
  const router = useRouter();
  const [lead, setLead] = useState("Residential");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  /* name, phone, city/zip required; email optional on residential only */
  const ready = !!(name.trim() && phone.trim() && city.trim() && (lead === "Residential" || email.trim()));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    if (website) { router.push("/thank-you/"); return; } // bot
    setBusy(true); setErr("");
    const ok = await submitLead({ lead, service, name, phone, email, city, source: "hero-quick-card", website });
    setBusy(false);
    if (ok) router.push("/thank-you/");
    else setErr("Something went wrong. Please call us instead.");
  }

  return (
    <form onSubmit={onSubmit} style={{ background: "#fff", width: "100%", maxWidth: 380, boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}>
      <div style={{ background: "var(--red)", color: "#fff", padding: "15px 22px" }}>
        <div className="disp" style={{ fontSize: 19 }}>Schedule a Free Foundation Check</div>
        <div style={{ fontSize: 12.5, fontWeight: 600, opacity: .92, marginTop: 2 }}>Free, no-obligation inspection</div>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 11 }}>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
        <div style={{ display: "flex", border: "2px solid var(--ink)" }}>
          {D_LEADS.map((x) => (
            <button type="button" key={x} onClick={() => { setLead(x); setService(""); }}
              className="disp" style={{ flex: 1, padding: "10px 4px", fontSize: 11.5, border: 0, cursor: "pointer", background: lead === x ? "var(--ink)" : "#fff", color: lead === x ? "#fff" : "var(--ink)", whiteSpace: "nowrap" }}>{x === "New Construction" ? "New Const." : x}</button>
          ))}
        </div>
        <select className="form-input" aria-label="Service" value={service} onChange={(e) => setService(e.target.value)} style={{ color: service ? "#222" : "#5d5b58" }}>
          <option value="">Select a service…</option>
          {D_SVC[lead].map((s) => <option key={s}>{s}</option>)}
        </select>
        <input className="form-input" aria-label="Full name" placeholder="Full name *" required value={name} onChange={(e) => setName(e.target.value)} />
        <input className="form-input" aria-label="Phone number" placeholder="Phone number *" required value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" />
        <input className="form-input" aria-label="Email" placeholder={lead === "Residential" ? "Email (optional)" : "Email *"} type="email" required={lead !== "Residential"} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-input" aria-label="City or ZIP" placeholder="City or ZIP *" required value={city} onChange={(e) => setCity(e.target.value)} />
        {err && <div style={{ color: "var(--red)", fontSize: 13, fontWeight: 600 }}>{err}</div>}
        <button type="submit" className="btn btn-red" disabled={!ready || busy}
          style={{ justifyContent: "center", width: "100%", marginTop: 2, opacity: ready && !busy ? 1 : .55, cursor: ready && !busy ? "pointer" : "not-allowed" }}>
          {busy ? "Sending…" : lead === "Residential" ? "Schedule Free Foundation Check" : "Request an Assessment"} <Arrow s={15} />
        </button>
        <div style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "var(--muted)" }}>
          Engineer-owned · Fort Worth, TX{lead === "Residential" && " · Written quote in one business day"}
        </div>
        <TCPA />
      </div>
    </form>
  );
}

/* Fork cards are crawlable HTML anchors per content/14 ("three crawlable cards"). */
type PathProps = { tag: string; title: string; body: string; cta: string; href: string; market?: string; primary?: boolean; quote?: boolean; cls: string };
function DPath({ tag, title, body, cta, href, market, primary, quote, cls }: PathProps) {
  return (
    <Link href={href} className={"lift " + cls} style={{
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
      {market && (
        <span className="mono" style={{ fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: primary ? "var(--red)" : "var(--red-bright)", marginBottom: 14 }}>{market}</span>
      )}
      <span style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: primary ? "var(--red)" : "#fff" }}>
        {cta} <Arrow s={15} c={primary ? "var(--red)" : "#fff"} />
      </span>
    </Link>
  );
}

/* ---------- 2 · HERO + 3 · FORK ---------- */
function DHero() {
  return (
    <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Img label="Drilling rig and crew installing commercial foundation piers" src="/images/commercial-foundation-drilling-rig-crew.webp" style={{ height: "100%" }} />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,12,12,.9) 0%, rgba(12,12,12,.55) 44%, rgba(12,12,12,.9) 100%)" }} />
      <div className="d-blueprint" style={{ opacity: .45 }} />
      <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 64, paddingBottom: 60 }}>
        <div className="d-hero">
          <div>
            <Kicker color="#fff">Fort Worth, Texas · Serving DFW and Texas</Kicker>
            <h1 className="disp fade-up" style={{ fontSize: 62, margin: "20px 0 0", color: "#fff" }}>
              Foundation Repair in Dallas-Fort Worth &amp; Houston
            </h1>
            <p className="fade-up" style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.55, margin: "22px 0 14px", maxWidth: 560, fontWeight: 500 }}>
              From commercial and residential foundation repair to new construction and concrete work, we deliver expert solutions and self-performed workmanship backed by local knowledge and engineer-owned service you can trust.
            </p>
            <p className="fade-up" style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: "0 0 28px", display: "flex", alignItems: "center", gap: 10 }}>
              <Check s={16} c="var(--red)" /> Owned and operated with a licensed Professional Engineer.
            </p>
            <div className="fade-up" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Btn variant="red" arrow="ur" href="/request/">Schedule a Free Foundation Check</Btn>
              <Btn variant="ghost" arrow="none" href={PHONE_TEL}><Phone s={15} c="#fff" /> {PHONE}</Btn>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}><DQuickCard /></div>
        </div>
      </div>
    </section>
  );
}


/* ---------- 3b · AUDIENCE TILES (relocated below the trust bar, run v2 B) ---------- */
function DForkTiles() {
  return (
    <section className="tex-dark" style={{ padding: "44px 0" }}>
      <div className="wrap">
        <div className="d-fork" style={{ marginBottom: 0 }}>
          <DPath cls="d-fork-res" tag="Residential" title="Cracks, sticking doors, uneven floors?"
            body="Start with a free inspection that includes a mapped elevation survey of your foundation."
            cta="Residential Services" href="/residential/" />
          <DPath cls="d-fork-com" tag="Commercial / Property Manager" title="Protecting a commercial asset?"
            body="Warehouses, multifamily, retail, hotels. Engineered assessments, phased work around operations, documented scope."
            cta="Commercial Services" href="/commercial/" />
          <DPath cls="d-fork-new" tag="New Construction / Builder" title="Building something new?"
            body="Piers, foundations, earthwork, and concrete for builders and developers, engineering and concrete under one roof."
            cta="New Construction" href="/new-construction/" />
          <DPath cls="d-fork-quote" quote tag="Fast track" title="Quote / Call Now"
            body="Talk to our team or start a free foundation check request."
            cta="Start Now" href="/request/" />
        </div>
      </div>
    </section>
  );
}

/* ---------- 4 · TRUST BAR ---------- */
export function DTrustBar() {
  return (
    <section style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,.08)" }}>
      <div className="wrap d-trust">
        {D_TRUSTBAR.map((t) => (
          <div key={t}>
            <Check s={16} c="var(--red)" />
            {t === GOOGLE_RATING ? (
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener" className="over" style={{ color: "#e3e1de", fontSize: 11, letterSpacing: ".06em", lineHeight: 1.5 }}>{t}</a>
            ) : (
              <span className="over" style={{ color: "#e3e1de", fontSize: 11, letterSpacing: ".06em", lineHeight: 1.5 }}>{t}</span>
            )}
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
            <a href={c.href ?? "#"} key={c.t} className="lift" style={{ background: i === 0 ? "var(--red)" : "var(--ink-2)", color: "#fff", padding: "28px 26px", border: "1px solid rgba(255,255,255,.06)", display: "flex", flexDirection: "column", minHeight: 250 }}>
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
              <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: i === 0 ? "#fff" : "var(--red-bright)" }}>
                View service <Arrow s={14} c={i === 0 ? "#fff" : "var(--red-bright)"} />
              </div>
            </a>
          ))}
          <a href="/commercial/" className="lift" style={{ background: "var(--ink-2)", border: "1px dashed rgba(255,255,255,.22)", padding: "28px 26px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 250 }}>
            <h3 className="disp" style={{ color: "#fff", fontSize: 21, lineHeight: 1.06 }}>See all commercial services</h3>
            <p style={{ color: "#a8a8a8", fontSize: 13.5, lineHeight: 1.5, margin: "12px 0 16px" }}>Browse every commercial scope we self-perform across Texas.</p>
            <span style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--red-bright)" }}>All services <Arrow s={14} c="var(--red-bright)" /></span>
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
export function DPierPath() {
  return (
    <section style={{ background: "var(--bone)", padding: "90px 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 44 }}>
          <div>
            <Kicker>The Pier Path</Kicker>
            <h2 className="disp" style={{ fontSize: 48, marginTop: 16, color: "var(--ink)" }}>Three steps to a clear quote</h2>
          </div>
        </div>
        <div className="d-3" style={{ gap: 22 }}>
          {D_STEPS.map((s) => (
            <div key={s.n} style={{ background: "#fff", padding: "32px 30px 28px", borderTop: "3px solid var(--red)", display: "flex", flexDirection: "column" }}>
              <div className="disp" style={{ fontSize: 46, color: "var(--gray-2)" }}>{s.n}</div>
              <h3 className="disp" style={{ color: "var(--ink)", fontSize: 22, margin: "10px 0 12px", lineHeight: 1.05 }}>{s.t}</h3>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.55, fontWeight: 500 }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 34 }}>
          <Btn variant="outline" arrow="ur" href="/request/">Book an inspection</Btn>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8 · PIER SYSTEMS ---------- */
export function DPierSystems() {
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
              <div className="over" style={{ color: "var(--red)", fontSize: 11, marginBottom: 6 }}>Meet the owner &amp; principal engineer</div>
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
              Every inspection starts with measurements, not a pitch. Elevation readings mapped across your foundation show what has actually moved, and the recommendation follows the data.
            </p>
            <p style={{ color: "#3a3a3a", fontSize: 17.5, lineHeight: 1.6, fontWeight: 500, marginBottom: 28 }}>
              When monitoring or drainage correction is the honest answer, that is the answer you get.
            </p>
            <Btn variant="outline" arrow="ur" href="/request/">Book a free inspection</Btn>
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
          <p style={{ color: "#bdbdbd", fontWeight: 500, lineHeight: 1.55, maxWidth: 380 }}>
            Tilt wall stabilization, industrial void fill, multifamily repairs in Carrollton, Lewisville, Baytown, and Austin, steel piers under working hotels. 35+ years of combined team experience. <Link href="/projects/" style={{ color: "#fff", fontWeight: 700 }}>See the projects</Link>
          </p>
        </div>
        <div className="d-workscroll">
          {D_WORK.map((p) => (
            <a href={p.href} key={p.t} className="lift" style={{ background: "var(--ink-2)", border: "1px solid rgba(255,255,255,.06)", display: "flex", flexDirection: "column" }}>
              <Img label={p.t + ". Real jobsite photo"} src={p.img} h={180} />
              <div style={{ padding: "20px 22px 22px" }}>
                <div className="over" style={{ color: "var(--red)", fontSize: 11, marginBottom: 8 }}>{p.scope}</div>
                <h3 className="disp" style={{ color: "#fff", fontSize: 18, lineHeight: 1.08 }}>{p.t}</h3>
              </div>
            </a>
          ))}
        </div>
        {/* Visible rating text only; NO AggregateRating/review markup anywhere.
            TODO: link this text to the Google Business Profile when the GBP URL is provided. */}
        <div style={{ marginTop: 36, border: "1px dashed rgba(255,255,255,.25)", padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <div>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener"><div className="disp" style={{ color: "#fff", fontSize: 24 }}>{GOOGLE_RATING}</div></a>
            <p style={{ color: "#cfcfcf", fontWeight: 500, fontSize: 15, maxWidth: 620, lineHeight: 1.55, marginTop: 8 }}>
              Read our verified reviews on our Google Business Profile.
            </p>
          </div>
          <span className="over" style={{ color: "#7d7d7d", fontSize: 11 }}>FOR-LINK: Google Business Profile URL</span>
        </div>
        {/* SERVICE SHORTCUTS (crawlable links) per content/14 */}
        <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", gap: "8px 10px" }}>
          {([
            ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
            ["Drilled Piers", "/residential/foundation-repair/drilled-piers/"],
            ["Post-Tension Repair", "/residential/foundation-repair/post-tension-slab-repair/"],
            ["Concrete Slab Lifting", "/residential/concrete-leveling/polyurethane-foam-injection/"],
            ["Drainage & French Drains", "/residential/drainage/french-drains/"],
            ["Warehouse Floor Leveling", "/commercial/concrete-lifting/warehouse-floor-leveling/"],
            ["Tilt Wall", "/commercial/tilt-wall/"],
            ["Multifamily Due Diligence", "/commercial/due-diligence-walks/"],
            ["Pier Systems Compared", "/resources/pier-systems-explained/"],
          ] as [string, string][]).map(([t, href]) => (
            <Link key={href} href={href} style={{ border: "1px solid rgba(255,255,255,.2)", padding: "8px 13px", fontSize: 12.5, fontWeight: 700, color: "#e3e1de" }}>{t}</Link>
          ))}
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
            We take the large, complicated repairs many contractors won&apos;t. Custom homes, large retaining walls, complex structural issues, and builder repairs that call for specialized crews. Not small routine jobs.
          </p>
        </div>
        <div className="d-3" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {D_RES.map((r) => (
            <a href={r.href ?? "#"} key={r.t} className="lift" style={{ background: "#fff", border: "1px solid var(--line)", padding: "24px 22px", display: "flex", flexDirection: "column", minHeight: 178 }}>
              <h3 className="disp" style={{ fontSize: 18, marginBottom: 14, color: "var(--ink)" }}>{r.t}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                {r.items.map((it) => <li key={it} style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "flex", gap: 7, alignItems: "center" }}><span style={{ width: 5, height: 5, background: "var(--red)" }} />{it}</li>)}
              </ul>
              <div style={{ marginTop: "auto", paddingTop: 14 }}><Arrow s={17} c="var(--red)" /></div>
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30, alignItems: "center" }}>
          <Btn variant="red" arrow="ur" href="/request/">Book a free home inspection</Btn>
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
              <a href="/request/" className="btn" style={{ background: "#fff", color: "var(--ink)", border: 0 }}>{x.cta} <Arrow s={15} /></a>
              <a className="btn" href={PHONE_TEL} style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.55)" }}><Phone s={14} c="#fff" /> {PHONE}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 14 · MULTI-STEP QUOTE FORM ---------- */
export function DQuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [d, setD] = useState({ lead: "Residential", service: "", city: "", urgency: "", details: "", name: "", email: "", phone: "", company: "", website: "" });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const set = (k: string, v: string) => setD((p) => ({ ...p, [k]: v }));
  /* step 1 requires city/zip; step 2 requires name + phone, and email
     outside residential contexts */
  const canNext = step === 0 ? !!d.service : step === 1 ? !!d.city.trim() : !!(d.name.trim() && d.phone.trim() && (d.lead === "Residential" || d.email.trim()));

  async function onSubmit() {
    if (!canNext || busy) return;
    if (d.website) { router.push("/thank-you/"); return; }
    setBusy(true); setErr("");
    const ok = await submitLead({ ...d, source: "contact-form" });
    setBusy(false);
    if (ok) router.push("/thank-you/");
    else setErr("Something went wrong. Please call us instead.");
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
              <input className="form-input" placeholder="Full name *" required value={d.name} onChange={(e) => set("name", e.target.value)} />
              <input className="form-input" placeholder="Phone *" required value={d.phone} onChange={(e) => set("phone", e.target.value)} inputMode="tel" />
              <input className="form-input" type="email" required={d.lead !== "Residential"} placeholder={d.lead === "Residential" ? "Email (optional)" : "Email *"} value={d.email} onChange={(e) => set("email", e.target.value)} style={{ gridColumn: "1 / -1" }} />
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
      {step === 2 && <div style={{ padding: "0 34px 20px" }}><TCPA /></div>}
    </div>
  );
}

export function DContact() {
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

/* ---------- 15 · FOOTER ----------
   The deep-link layer per the nav addendum: every live page gets its
   sitewide link here. Pages not yet live (Reviews, Financing, Warranty,
   Field Notes, remaining location pages, /locations/ index) enter this
   footer the moment they ship. Kansas City page appears in NO footer. */
export function DFooter() {
  const cols: { h: string; l: [string, string][] }[] = [
    {
      h: "Residential", l: [
        ["Residential Services", "/residential/"],
        ["Foundation Repair", "/residential/foundation-repair/"],
        ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
        ["Drilled Piers", "/residential/foundation-repair/drilled-piers/"],
        ["Pressed Piers", "/residential/foundation-repair/concrete-pressed-piers/"],
        ["Helical Piers", "/residential/foundation-repair/helical-piers/"],
        ["Hybrid Piers", "/residential/foundation-repair/hybrid-piers/"],
        ["Pier & Beam", "/residential/foundation-repair/pier-and-beam/"],
        ["Slab Repair", "/residential/foundation-repair/slab-repair/"],
        ["Post-Tension Slab Repair", "/residential/foundation-repair/post-tension-slab-repair/"],
        ["Concrete Leveling", "/residential/concrete-leveling/"],
        ["Concrete Slab Lifting (Poly)", "/residential/concrete-leveling/polyurethane-foam-injection/"],
        ["Mudjacking", "/residential/concrete-leveling/mudjacking/"],
        ["Crack Repair", "/residential/concrete-leveling/concrete-crack-repair/"],
        ["Drainage", "/residential/drainage/"],
        ["French Drains", "/residential/drainage/french-drains/"],
        ["Area Drains", "/residential/drainage/area-drains/"],
        ["Root Barriers", "/residential/drainage/root-barriers/"],
        ["Sump Pumps", "/residential/drainage/sump-pumps/"],
        ["Hydrostatic Testing", "/residential/drainage/hydrostatic-testing/"],
        ["Retaining Walls", "/residential/retaining-walls/"],
        ["Stamped Concrete", "/stamped-concrete-contractor-fort-worth/"],
        ["Financing", "/financing/"],
      ],
    },
    {
      h: "Commercial", l: [
        ["Commercial Services", "/commercial/"],
        /* Legacy hub URL first, by spec */
        ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
        ["Commercial Steel Piers", "/commercial/foundation-repair/steel-piers/"],
        ["Drilled Piers", "/commercial/foundation-repair/drilled-piers/"],
        ["Helical Piers & Tiebacks", "/commercial/foundation-repair/helical-piers-tiebacks/"],
        ["Hybrid Piers", "/commercial/foundation-repair/hybrid-piers/"],
        ["Post-Tension Repair", "/commercial/foundation-repair/post-tension-repair/"],
        ["Underpinning", "/commercial/foundation-repair/underpinning/"],
        ["Structural Repair", "/commercial/structural-repair/"],
        ["Tilt Wall", "/commercial/tilt-wall/"],
        ["Concrete Lifting", "/commercial/concrete-lifting/"],
        ["Warehouse Floor Leveling", "/commercial/concrete-lifting/warehouse-floor-leveling/"],
        ["Poly Injection", "/commercial/concrete-lifting/polyurethane-foam-injection/"],
        ["Commercial Mudjacking", "/commercial/concrete-lifting/mudjacking/"],
        ["Municipal Concrete Leveling", "/commercial/concrete-lifting/municipal/"],
        ["Concrete Construction", "/commercial/concrete-construction/"],
        ["Slab Pouring", "/commercial/concrete-construction/slab-pouring/"],
        ["Commercial Slab Repair", "/commercial/concrete-construction/slab-repair/"],
        ["Structural Crack Repair", "/commercial/concrete-construction/structural-crack-repair/"],
        ["Expansion Joint & Mastic", "/commercial/concrete-construction/expansion-joint-mastic-repair/"],
        ["Drainage", "/commercial/drainage/"],
        ["Commercial French Drains", "/commercial/drainage/french-drains/"],
        ["Perimeter Drainage", "/commercial/drainage/perimeter-drainage/"],
        ["Retaining Walls", "/commercial/retaining-walls/"],
        ["Retaining Wall Repair", "/commercial/retaining-walls/structural-repair/"],
        ["Tieback Anchors", "/commercial/retaining-walls/tieback-anchors/"],
        ["Multifamily", "/commercial/multifamily/"],
        ["Multifamily Due Diligence", "/commercial/due-diligence-walks/"],
      ],
    },
    {
      h: "Specialty + New Construction", l: [
        ["Specialty Services", "/commercial/specialty/"],
        ["Parking Garage Repair", "/commercial/specialty/parking-garage-repair/"],
        ["Balcony Repair", "/commercial/specialty/balcony-repair/"],
        ["Metal Deck Slab Repair", "/commercial/specialty/metal-deck-slab-repair/"],
        ["Lube Pit Foundation Repair", "/commercial/specialty/lube-pit-foundation-repair/"],
        ["Lightweight Concrete Repair", "/commercial/specialty/lightweight-concrete-repair/"],
        ["Historic Building Foundations", "/commercial/specialty/historical-building-foundation-repair/"],
        ["Commercial Waterproofing", "/commercial/specialty/waterproofing/"],
        ["WOTUS Contracting", "/commercial/specialty/waters-of-the-us/"],
        ["New Construction", "/new-construction/"],
        ["Concrete Flatwork", "/new-construction/concrete-flatwork/"],
        ["Earthwork & Grading", "/new-construction/earthwork-grading/"],
      ],
    },
    {
      h: "Company + Locations", l: [
        ["About", "/about/"],
        ["Projects", "/projects/"],
        ["Contact", "/contact/"],
        ["Request an Inspection", "/request/"],
        ["Warranty", "/warranty/"],
        ["Financing", "/financing/"],
        ["Resources: Pier Systems Compared", "/resources/pier-systems-explained/"],
        ["Service Areas", "/locations/"],
        ["Fort Worth", "/locations/fort-worth/"],
        ["Dallas", "/locations/dallas/"],
        ["Houston", "/locations/houston/"],
        ["Possum Kingdom Lake", "/locations/possum-kingdom-lake/"],
        ["Privacy Policy", "/privacy-policy/"],
      ],
    },
  ];
  return (
    <footer className="tex-dark" style={{ paddingTop: 60 }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 34, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div>
          <Logo />
          <p style={{ color: "#9a9a9a", fontWeight: 500, lineHeight: 1.6, marginTop: 18, maxWidth: 280 }}>
            Engineer-owned and operated. Turn-key residential, commercial, and new construction foundation and concrete services across Texas. Transferable workmanship warranty, terms vary by service.
          </p>
          <a className="phone-link" href={PHONE_TEL} style={{ color: "#fff", fontSize: 17, marginTop: 18, display: "inline-flex" }}><Phone s={15} c="var(--red)" /> {PHONE}</a>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div className="over" style={{ color: "var(--red)", marginBottom: 16 }}>{c.h}</div>
            {c.l.map(([x, href]) => <Link key={href} href={href} style={{ display: "block", color: "#cfcfcf", fontWeight: 500, padding: "6px 0", fontSize: 14 }}>{x}</Link>)}
          </div>
        ))}
      </div>
      <div className="wrap" style={{ padding: "26px 40px 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="https://www.bbb.org/us/tx/fort-worth/profile/foundation-repair/cardinal-foundation-services-0825-1000232923/#sealclick" target="_blank" rel="nofollow noopener"><img src="https://seal-austin.bbb.org/seals/blue-seal-250-52-bbb-1000232923.png" width="250" height="52" loading="lazy" style={{ border: 0 }} alt="Cardinal Foundation Services BBB Business Review" /></a>
      </div>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 40px", color: "#7d7d7d", fontSize: 13, fontWeight: 500, flexWrap: "wrap", gap: 10 }}>
        <span>Cardinal Foundation Services, LLC · 803 Forest Ridge Dr, Suite #205, Bedford, TX 76022 · <a href={PHONE_TEL} style={{ color: "#9a9a9a" }}>{PHONE}</a> · Engineer-owned and operated. Transferable workmanship warranty, terms vary by service.</span>
        <span>© 2026 Cardinal Foundation Services, LLC. All rights reserved.</span>
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
      <DForkTiles />
      <DCommercial />
      <DResidential />
      <DNewConstruction />
      <DPierPath />
      <DPierSystems />
      <DHonesty />
      <DWork />
      <DContact />
      <DFooter />
    </div>
  );
}
