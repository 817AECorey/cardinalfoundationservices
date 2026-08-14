"use client";

import { useState } from "react";
import Link from "next/link";
import { Arrow, Phone, Check } from "./icons";
import { Btn, Kicker, Img, dScroll, PHONE, PHONE_TEL } from "./primitives";
import { DNav, DTrustBar, DContact, DFooter } from "./DirectionD";

/* ============================================================
   SERVICE / CONTENT PAGE TEMPLATE
   Populates the approved Direction D design system with the
   finished copy from the content/ bundle, verbatim. Do not
   restyle or restructure; content pages differ only in data.
   Sections alternate paper/bone; FAQs render as visible
   accordions; every internal link is a crawlable HTML anchor.
   ============================================================ */

export type Crumb = { label: string; href?: string };
export type Bullet = string | [string, string]; // [bold lead-in, rest]
export type Section = {
  h2: string;
  paras?: string[];
  bullets?: Bullet[];
  parasAfter?: string[];
  /* real project photo for the section's media slot; placeholder shows when absent */
  img?: { src: string; alt: string };
  steps?: [string, string][]; // numbered what-to-expect style
  table?: { head: string[]; rows: string[][]; note?: string };
};
export type ServicePageData = {
  crumbs: Crumb[];
  kicker: string;
  h1: string;
  intro: string[];
  /* Optional hero photo (image insertion pass). Renders only when provided;
     pages without one keep the approved text-only hero untouched. */
  heroImage?: { src: string; alt: string; width: number; height: number; contain?: boolean };
  sections: Section[];
  /* hub pages: linked child cards composed from each child page's opening (do not invent services) */
  childCards?: { t: string; d: string; href: string }[];
  related?: [string, string][]; // [label, href] internal links per front-matter
  faqs: [string, string][];
  faqTitle?: string;
  ctaLabel: string;
  ctaHeading?: string;
  ctaSub?: string;
};

/* ---------- "Where we perform this work" (geo consistency pass) ----------
   Field Notes style: mono bright-red kicker, one sentence, linked city
   names. Rendered on every service page above the FAQ. The tree is
   inferred from the breadcrumb trail and uses the SAME footprint policy
   that generates each page's Service areaServed markup. */
export function WhereWePerform({ tree }: { tree: "residential" | "commercial" | "newcon" }) {
  return (
    <section style={{ background: "var(--bone)", padding: "44px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--red)", marginBottom: 10 }}>Where we perform this work</div>
        <p style={{ color: "#3a3a3a", fontSize: 16.5, lineHeight: 1.6, fontWeight: 500, margin: 0, maxWidth: 820 }}>
          {tree === "residential" && (
            <>Cardinal performs this work across the <Link href="/locations/dallas/" style={{ color: "var(--red)", fontWeight: 700 }}>Dallas</Link>-<Link href="/locations/fort-worth/" style={{ color: "var(--red)", fontWeight: 700 }}>Fort Worth</Link> <Link href="/locations/" style={{ color: "var(--red)", fontWeight: 700 }}>Metroplex</Link> and the <Link href="/locations/houston/" style={{ color: "var(--red)", fontWeight: 700 }}>Houston area</Link>.</>
          )}
          {tree === "commercial" && (
            <>Cardinal performs this work across <Link href="/locations/dallas/" style={{ color: "var(--red)", fontWeight: 700 }}>Dallas</Link>-<Link href="/locations/fort-worth/" style={{ color: "var(--red)", fontWeight: 700 }}>Fort Worth</Link>, with larger commercial and specialty projects <Link href="/locations/" style={{ color: "var(--red)", fontWeight: 700 }}>statewide</Link>.</>
          )}
          {tree === "newcon" && (
            <>Serving builders and property owners across the <Link href="/locations/" style={{ color: "var(--red)", fontWeight: 700 }}>Dallas-Fort Worth area</Link>.</>
          )}
        </p>
      </div>
    </section>
  );
}

/* Eyebrow kicker geo suffix by tree (decorative labels, NOT title tags —
   the title freeze on migrated ranking pages is untouched):
     residential "· DFW"        -> "· DFW & Houston"
     commercial  "· DFW" family -> "· DFW & Texas"
     new construction           -> unchanged
   Kickers already carrying a broader geo ("Texas", "DFW & Texas") keep it. */
const DFW_VARIANTS = new Set(["DFW", "Dallas-Fort Worth", "Fort Worth & DFW", "Fort Worth & Dallas"]);
function geoKicker(kicker: string, tree: "residential" | "commercial" | "newcon" | null): string {
  if (!tree || tree === "newcon") return kicker;
  const parts = kicker.split("·").map((s) => s.trim());
  if (parts.length < 2) return kicker;
  const geo = parts[parts.length - 1];
  if (tree === "residential" && (DFW_VARIANTS.has(geo) || geo === "Texas")) parts[parts.length - 1] = "DFW & Houston";
  if (tree === "commercial" && DFW_VARIANTS.has(geo)) parts[parts.length - 1] = "DFW & Texas";
  return parts.join(" · ");
}

function treeFromCrumbs(crumbs: Crumb[]): "residential" | "commercial" | "newcon" | null {
  for (const c of crumbs) {
    if (c.href === "/residential/") return "residential";
    if (c.href === "/commercial/") return "commercial";
    if (c.href === "/new-construction/") return "newcon";
  }
  return null;
}

/* FAQPage JSON-LD generated from the SAME data as the visible accordion,
   so markup and text always match. Rendered server-side with the page. */
export function FaqJsonLd({ faqs }: { faqs: [string, string][] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function Faq({ faqs, title }: { faqs: [string, string][]; title: string }) {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: "var(--paper)", padding: "86px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <div style={{ maxWidth: 640, marginBottom: 36 }}>
          <Kicker>Common questions</Kicker>
          <h2 className="disp" style={{ fontSize: 44, margin: "16px 0 0", color: "var(--ink)" }}>{title}</h2>
        </div>
        <div className="rf-faq">
          {faqs.map(([q, a], i) => (
            <div key={q} style={{ border: "1px solid var(--line)", background: open === i ? "var(--bone)" : "#fff" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`svc-faq-${i}`} style={{ width: "100%", textAlign: "left", background: "none", border: 0, padding: "20px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, cursor: "pointer" }}>
                <span className="disp" style={{ fontSize: 17, color: "var(--ink)", lineHeight: 1.15 }}>{q}</span>
                <span className="disp" style={{ fontSize: 20, color: "var(--red)", flexShrink: 0 }}>{open === i ? "–" : "+"}</span>
              </button>
              <p id={`svc-faq-${i}`} hidden={open !== i} style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.6, fontWeight: 500, padding: "0 22px 22px", margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const d = data;
  const tree = treeFromCrumbs(d.crumbs);
  return (
    <div className="page dirD c-page">
      <span id="top" />
      <DNav />
      {/* HERO — when the page has real project media, it fills the hero
         behind the same gradient treatment as the residential hub */}
      <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
        {d.heroImage && !d.heroImage.contain && (
          <>
            <div style={{ position: "absolute", inset: 0 }}>
              <Img label={d.heroImage.alt} src={d.heroImage.src} style={{ height: "100%" }} />
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,12,12,.92) 0%, rgba(12,12,12,.6) 45%, rgba(12,12,12,.92) 100%)" }} />
          </>
        )}
        <div className="d-blueprint" style={{ opacity: d.heroImage ? .45 : .5 }} />
        <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 58 }}>
          <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 26 }}>
            {d.crumbs.map((c, i) => (
              <span key={c.label} style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                {i > 0 && <span style={{ color: "var(--red)" }}>/</span>}
                {c.href ? <Link href={c.href} style={{ color: "#9a9a9a" }}>{c.label}</Link> : <span style={{ color: "#fff" }}>{c.label}</span>}
              </span>
            ))}
          </div>
          {(() => {
            const heroText = (
              <div>
                {d.kicker && <Kicker color="#fff">{geoKicker(d.kicker, tree)}</Kicker>}
                <h1 className="disp" style={{ fontSize: 54, margin: "20px 0 0", color: "#fff", maxWidth: 820 }}>{d.h1}</h1>
                {d.intro.map((p) => (
                  <p key={p.slice(0, 40)} style={{ color: "#d6d6d6", fontSize: 18, lineHeight: 1.6, margin: "22px 0 0", maxWidth: 720, fontWeight: 500 }}>{p}</p>
                ))}
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
                  <Btn variant="red" arrow="ur" href="/request/">{d.ctaLabel}</Btn>
                  <Btn variant="ghost" arrow="none" href={PHONE_TEL}><Phone s={15} c="#fff" /> {PHONE}</Btn>
                </div>
              </div>
            );
            if (!d.heroImage?.contain) return heroText;
            /* diagram pages: standard two-column hero (text left, framed
               light media panel right), diagram uncropped via contain */
            return (
              <div className="c-hero">
                {heroText}
                <div style={{ background: "#fff", padding: 16, boxShadow: "0 30px 70px rgba(0,0,0,.5)" }}>
                  <img src={d.heroImage.src} alt={d.heroImage.alt} width={d.heroImage.width} height={d.heroImage.height}
                    style={{ width: "100%", height: "auto", maxHeight: 440, objectFit: "contain", display: "block" }} />
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <DTrustBar />
      {/* BODY SECTIONS — hub design vocabulary: numbered red kickers,
         alternating two-column media splits for prose-only sections,
         sign-style card grids for bullet sections */}
      {d.sections.map((s, si) => {
        const proseOnly = !s.bullets && !s.steps && !s.table;
        const num = String(si + 1).padStart(2, "0");
        const media = (
          <div style={{ position: "relative", minHeight: 340 }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <Img label={s.img?.alt ?? s.h2} src={s.img?.src} style={{ height: "100%" }} />
            </div>
          </div>
        );
        const heading = (
          <>
            <div className="disp" style={{ fontSize: 15, color: "var(--red)" }}>{num}</div>
            <h2 className="disp" style={{ fontSize: 42, margin: "10px 0 18px", color: "var(--ink)", maxWidth: 760 }}>{s.h2}</h2>
          </>
        );
        if (proseOnly) {
          return (
            <section key={s.h2} style={{ background: si % 2 ? "var(--bone)" : "var(--paper)", padding: "84px 0", borderBottom: "1px solid var(--line)" }}>
              <div className="wrap c-2">
                {si % 2 === 1 && media}
                <div>
                  {heading}
                  {s.paras?.map((p) => (
                    <p key={p.slice(0, 40)} className="lead" style={{ marginBottom: 16 }}>{p}</p>
                  ))}
                  {s.parasAfter?.map((p) => (
                    <p key={p.slice(0, 40)} className="lead" style={{ margin: "16px 0 0" }}>{p}</p>
                  ))}
                </div>
                {si % 2 === 0 && media}
              </div>
            </section>
          );
        }
        return (
        <section key={s.h2} style={{ background: si % 2 ? "var(--bone)" : "var(--paper)", padding: "84px 0", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap">
            {heading}
            {s.paras?.map((p) => (
              <p key={p.slice(0, 40)} className="lead" style={{ maxWidth: 820, marginBottom: 16 }}>{p}</p>
            ))}
            {s.bullets && (
              <div className="c-signs" style={{ marginTop: 26 }}>
                {s.bullets.map((b, bi) => (
                  <div key={bi} style={{ background: "#fff", padding: "24px 24px 22px" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ flexShrink: 0, marginTop: 3 }}><Check s={16} c="var(--red)" /></span>
                      {Array.isArray(b) ? (
                        <div>
                          <h3 className="disp" style={{ fontSize: 18, color: "var(--ink)", marginBottom: 8 }}>{b[0]}</h3>
                          <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.55, fontWeight: 500 }}>{b[1]}</p>
                        </div>
                      ) : (
                        <span style={{ color: "#3a3a3a", fontSize: 15.5, lineHeight: 1.55, fontWeight: 500 }}>{b}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {s.steps && (
              <div className="c-svc" style={{ marginTop: 10, maxWidth: 1000 }}>
                {s.steps.map(([t, sd], i) => (
                  <div key={t} style={{ borderTop: "3px solid var(--red)", paddingTop: 16 }}>
                    <div className="disp" style={{ fontSize: 15, color: "var(--red)" }}>{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="disp" style={{ fontSize: 20, margin: "8px 0 8px", color: "var(--ink)" }}>{t}</h3>
                    <p style={{ color: "var(--muted)", fontSize: 14.5, lineHeight: 1.55, fontWeight: 500 }}>{sd}</p>
                  </div>
                ))}
              </div>
            )}
            {s.table && (
              <div style={{ overflowX: "auto", marginTop: 10, border: "1px solid var(--line)" }}>
                <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 760, fontSize: 14.5 }}>
                  <thead>
                    <tr>{s.table.head.map((h) => <th key={h} className="disp" style={{ background: "var(--ink)", color: "#fff", textAlign: "left", padding: "14px 16px", fontSize: 14 }}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r, ri) => (
                      <tr key={ri} style={{ background: ri % 2 ? "var(--bone)" : "#fff" }}>
                        {r.map((c, ci) => <td key={ci} style={{ padding: "13px 16px", borderTop: "1px solid var(--line)", color: ci === 0 ? "var(--ink)" : "var(--muted)", fontWeight: ci === 0 ? 800 : 500, lineHeight: 1.5 }}>{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.table?.note && <p style={{ color: "var(--muted)", fontSize: 13.5, fontWeight: 500, marginTop: 12, maxWidth: 820 }}>{s.table.note}</p>}
            {s.parasAfter?.map((p) => (
              <p key={p.slice(0, 40)} className="lead" style={{ maxWidth: 820, margin: "16px 0 0" }}>{p}</p>
            ))}
          </div>
        </section>
        );
      })}
      {/* HUB CHILD CARDS (live children only; new children enter as they ship) */}
      {d.childCards && d.childCards.length > 0 && (
        <section className="tex-dark" style={{ padding: "80px 0" }}>
          <div className="wrap">
            <div style={{ maxWidth: 620, marginBottom: 34 }}>
              <Kicker>Services in this category</Kicker>
            </div>
            <div className="c-svc">
              {d.childCards.map((c) => (
                <Link href={c.href} key={c.href} className="lift" style={{ background: "var(--ink-2)", color: "#fff", padding: "28px 26px", border: "1px solid rgba(255,255,255,.07)", display: "flex", flexDirection: "column", minHeight: 200 }}>
                  <h3 className="disp" style={{ fontSize: 21, marginBottom: 10, lineHeight: 1.06 }}>{c.t}</h3>
                  <p style={{ color: "#a8a8a8", fontSize: 13.5, lineHeight: 1.55, marginBottom: 16 }}>{c.d}</p>
                  <span style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--red)" }}>
                    View service <Arrow s={14} c="var(--red)" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* RELATED LINKS (crawlable, per front-matter links line) */}
      {d.related && d.related.length > 0 && (
        <section className="tex-dark" style={{ padding: "54px 0" }}>
          <div className="wrap">
            <div className="over" style={{ color: "var(--red)", marginBottom: 14 }}>Related pages</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 10px" }}>
              {d.related.map(([t, href]) => (
                <Link key={href} href={href} style={{ border: "1px solid rgba(255,255,255,.2)", padding: "8px 13px", fontSize: 12.5, fontWeight: 700, color: "#e3e1de" }}>{t}</Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* WHERE WE PERFORM THIS WORK: above the FAQ on every service page */}
      {tree && <WhereWePerform tree={tree} />}
      {/* FAQ (visible accordion + matching FAQPage markup) */}
      {d.faqs.length > 0 && <FaqJsonLd faqs={d.faqs} />}
      {d.faqs.length > 0 && <Faq faqs={d.faqs} title={d.faqTitle ?? "Frequently asked questions"} />}
      <DContact />
      <DFooter />
    </div>
  );
}
