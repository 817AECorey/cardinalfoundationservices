import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PhotoSlot, Img, Kicker } from "@/components/site/primitives";
import { DNav, DTrustBar, DContact, DFooter } from "@/components/site/DirectionD";
import ProjectCta from "./project-cta";
import { JsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Project case studies, snapshot-parity carryover from the WordPress
   portfolio. Each documents conditions found, methods used, and results.
   Superlative claims from old copy removed per hard rules; facts kept. */

type Project = {
  /* real CompanyCam photos for the fixed 3-slot gallery; slots without one stay grey */
  photos?: { src: string; alt: string }[]; title: string; cat: string; loc: string; highlights: [string, string][]; description: string[] };

const PROJECTS: Record<string, Project> = {
  "tilt-wall-foundation-drainage-restoration": {
    photos: [
      { src: "/images/project-tiltresto-01.webp", alt: "Tilt wall panel and interior conditions at the restoration project (photo 1)" },
      { src: "/images/project-tiltresto-02.webp", alt: "Tilt wall panel and interior conditions at the restoration project (photo 2)" },
      { src: "/images/project-tiltresto-03.webp", alt: "Tilt wall panel and interior conditions at the restoration project (photo 3)" },
    ],
    title: "Tilt Wall Foundation & Drainage Restoration",
    cat: "Commercial", loc: "Dallas, TX",
    highlights: [
      ["Tilt wall panel lift", "Panels lifted and stabilized to restore long-term structural performance and alignment."],
      ["Interior slab foam injection", "Clean, efficient slab lift using polyurethane foam to restore floor level and support operations."],
      ["Waterproofing and drainage correction", "Sealed storefront windows and regraded exterior concrete to improve stormwater flow and prevent water intrusion."],
      ["Architecturally adaptive solutions", "Addressed shifting in a newer commercial building with tailored foundation repair strategies."],
    ],
    description: [
      "Even newer commercial buildings in Dallas can experience significant movement within the first decade due to drought conditions and highly expansive regional soils. Cardinal Foundation Services was contracted to stabilize and restore foundation elements for a modern commercial space experiencing structural shifting.",
      "The project involved lifting tilt wall panels, waterproofing storefront window frames, injecting polyurethane foam beneath interior slabs, and reworking exterior flatwork to ensure proper stormwater drainage and improve overall aesthetics. With sensitivity to architectural complexity and tenant operation, the team delivered structural integrity with minimal business disruption.",
    ],
  },
  "steel-piers-n-stemmons": {
    photos: [
      { src: "/images/project-stemmons-01.webp", alt: "Steel pier installation at the N Stemmons hotel property (photo 1)" },
      { src: "/images/project-stemmons-02.webp", alt: "Steel pier installation at the N Stemmons hotel property (photo 2)" },
      { src: "/images/project-stemmons-03.webp", alt: "Steel pier installation at the N Stemmons hotel property (photo 3)" },
    ],
    title: "Steel Piers at N Stemmons",
    cat: "Commercial", loc: "Dallas, TX",
    highlights: [
      ["Steel piers driven 50+ feet", "Piers driven more than 50 feet deep into stable strata to restore elevation at a working hotel."],
      ["4-inch french drain", "Installed around the building footprint to correct soil movement caused by negative drainage and vegetation."],
      ["Post-tension cable repair", "Damaged cables discovered during excavation were spliced and re-tensioned before concrete backfill."],
    ],
    description: [
      "Cardinal Foundation Services completed a comprehensive structural repair and stabilization project at a hotel where foundation settlement had impacted the breakfast area. Steel piers were driven more than 50 feet deep into stable strata to restore the building's elevation and support long-term stability.",
      "The team also addressed soil movement caused by poor drainage and surrounding vegetation, which led to uneven moisture levels beneath the slab. To correct these issues and prevent future shifting, a 4-inch french drain system was installed around the building's footprint to redirect surface and subsurface water. Additionally, damaged post-tension cables discovered during excavation were carefully spliced, re-tensioned, and reinforced prior to concrete backfill, restoring the structural integrity of the slab.",
    ],
  },
  "diplomat-drive-polyurethane-injection-industrial-foundation-lift-void-fill": {
    photos: [
      { src: "/images/project-diplomat-01.webp", alt: "Polyurethane injection and void fill at the Diplomat Drive industrial facility (photo 1)" },
      { src: "/images/project-diplomat-02.webp", alt: "Polyurethane injection and void fill at the Diplomat Drive industrial facility (photo 2)" },
      { src: "/images/project-diplomat-03.webp", alt: "Polyurethane injection and void fill at the Diplomat Drive industrial facility (photo 3)" },
    ],
    title: "Diplomat Drive: Industrial Polyurethane Lift & Void Fill",
    cat: "Industrial", loc: "DFW, TX",
    highlights: [
      ["Void fill and slab lift", "Polyurethane foam injection used to void fill, lift, and restore interior sections of foundation slab."],
      ["Expansive soil settlement", "Sections of industrial office flooring had sunk from highly expansive soils and seasonal shifting."],
      ["Controlled structural lift", "Foam injected under the concrete expands rapidly, with lift controlled by material amount."],
    ],
    description: [
      "Cardinal Foundation Services performed a polyurethane foam injection project at an industrial facility on Diplomat Drive, addressing settlement issues caused by highly expansive soils and seasonal ground movement. Several interior office floor sections had sunk over time, creating uneven surfaces and structural concerns.",
      "Our team utilized precision polyurethane foam injection, a method suited to void filling, slab lifting, and restoring foundation stability without invasive demolition. When injected beneath the concrete, the foam reacts and expands rapidly to achieve a controlled structural lift, bringing the interior slab back to level and reinforcing the integrity of the foundation.",
    ],
  },
  "baytown-multi-family": {
    photos: [
      { src: "/images/project-baytown-01.webp", alt: "Concrete pier installation at the Baytown multifamily property (photo 1)" },
      { src: "/images/project-baytown-02.webp", alt: "Concrete pier installation at the Baytown multifamily property (photo 2)" },
      { src: "/images/project-baytown-03.webp", alt: "Concrete pier installation at the Baytown multifamily property (photo 3)" },
    ],
    title: "Baytown Multifamily Foundation Repair",
    cat: "Multifamily", loc: "Baytown, TX",
    highlights: [
      ["Capital-expenditure restoration", "Foundation repair completed as part of an ownership capital expenditure and property restoration."],
      ["Piers to 30-35 feet", "Pier installation designed for the region's soil type, with depths ranging from 30 to 35 feet."],
      ["Property restored", "Conditions restored, bringing an aging property back to modern condition."],
    ],
    description: [
      "Cardinal Foundation Services partnered with ownership to complete a comprehensive foundation repair project as part of a capital expenditure and property restoration initiative for a multifamily complex on Shady Hill Dr.",
      "Our engineering team designed a pier installation plan tailored to the region's soil conditions, with depths ranging from 30 to 35 feet for lasting structural stability. Once the foundation was reinforced and elevations restored, the property was carefully rehabilitated, transforming an aging structure into a modern, stabilized asset that protects both property value and tenant safety.",
    ],
  },
  "lewisville-tx-multi-family-pier-stabilization-foundation-lifting-and-drainage-repair": {
    photos: [
      { src: "/images/project-lewisville-01.webp", alt: "Steel pier stabilization and drainage repair at the Lewisville multifamily property (photo 1)" },
      { src: "/images/project-lewisville-02.webp", alt: "Steel pier stabilization and drainage repair at the Lewisville multifamily property (photo 2)" },
      { src: "/images/project-lewisville-03.webp", alt: "Steel pier stabilization and drainage repair at the Lewisville multifamily property (photo 3)" },
    ],
    title: "Lewisville Multifamily: Pier Stabilization, Foundation Lifting & Drainage",
    cat: "Multifamily", loc: "Lewisville, TX",
    highlights: [
      ["850+ steel piers", "Installed across the structure to reinforce distressed sections and reestablish load-bearing support."],
      ["Lender-driven scope", "Foundation repairs required for successful sale and refinance, meeting strict lending criteria."],
      ["Drainage and soil stabilization", "Custom drainage solutions to control moisture and reduce future movement in expansive Texas soils."],
      ["Plumbing verified and repaired", "All systems inspected post-lift with repairs completed for safe, uninterrupted building operations."],
    ],
    description: [
      "Cardinal Foundation Services completed a large-scale foundation repair project for a multifamily property in the Dallas-Fort Worth metroplex, driven by lender requirements for sale and refinance. Over 850 steel piers were strategically installed across the structure to reinforce distressed sections and reestablish long-term load-bearing support.",
      "The team also implemented drainage improvements to stabilize surrounding soils and reduce future movement. After carefully lifting the foundation, all plumbing systems were tested and repaired to ensure full operational integrity. Completed on time within a one-month timeline, the project delivered structural stability, lender compliance, and long-term performance.",
    ],
  },
  "multi-family-foundation-repair-in-austin-tx": {
    title: "Multifamily Foundation Repair in Austin",
    cat: "Multifamily", loc: "Austin, TX",
    highlights: [
      ["High-volume steel piers", "Critical foundation zones reinforced with high-volume steel pier installation across the property."],
      ["Hillside structural stabilization", "Repairs delivered for successful sale and refinance, meeting strict lending criteria."],
      ["Cast-iron plumbing coordination", "Close coordination with plumbing contractors around aging cast-iron systems."],
      ["Custom drainage", "Solutions implemented to control moisture and reduce future movement in expansive Texas soils."],
    ],
    description: [
      "Due to the age and design of the structure, multiple access points were required throughout garages, apartment units, and landscaped areas to properly reach and stabilize affected foundation elements while minimizing disruption to residents and property operations.",
      "This project also required close coordination with plumbing contractors due to the presence of aging cast-iron plumbing systems often associated with older apartment buildings. Proper collaboration between foundation and plumbing teams is critical during these restorations to help prevent additional structural or plumbing complications during repair work.",
    ],
  },
  "multifamily-foundation-repair-carrollton-tx": {
    photos: [
      { src: "/images/project-carrollton-01.webp", alt: "Property documentation at the Carrollton multifamily foundation repair project (photo 1)" },
      { src: "/images/project-carrollton-02.webp", alt: "Property documentation at the Carrollton multifamily foundation repair project (photo 2)" },
      { src: "/images/project-carrollton-03.webp", alt: "Property documentation at the Carrollton multifamily foundation repair project (photo 3)" },
    ],
    title: "Multifamily Foundation Repair in Carrollton",
    cat: "Multifamily", loc: "Carrollton, TX",
    highlights: [
      ["Expansive-soil repairs", "Foundation repairs tailored to the region's expansive clay soils to restore long-term structural integrity."],
      ["Multifamily coordination", "Coordinated repair timeline, safety compliance, and communication across occupied and vacant units."],
      ["Custom drainage integration", "Drainage systems installed to regulate moisture content and reduce future soil movement beneath the structure."],
      ["Resident-conscious execution", "Interior construction focused on vacant units first, minimizing disruption to tenants and daily operations."],
    ],
    description: [
      "Cardinal Foundation Services completed a comprehensive foundation and drainage renovation for a multifamily property situated on highly expansive soils in Carrollton, Texas. The scope included stabilizing the foundation with targeted repairs and implementing custom drainage solutions to maintain consistent moisture levels and reduce soil volatility.",
      "Crews worked in coordination with property management to prioritize vacant units for interior access, ensuring minimal disruption to residents throughout the project. The result was a stable, tenant-friendly solution delivered with precision and care.",
    ],
  },
  "restaurant-foundation-repair-foam-injection": {
    title: "Restaurant Foundation Repair & Foam Injection",
    cat: "Commercial", loc: "DFW, TX",
    highlights: [
      ["Hybrid piers at perimeter walls", "Steel and concrete combination systems for added depth and durability with reduced material costs."],
      ["Clean interior slab lift", "Polyurethane foam injection lifted the dining area slab during flooring renovations with minimal downtime."],
      ["Zero business interruptions", "Operations scheduled around the drive-thru lane to keep the restaurant open throughout construction."],
    ],
    description: [
      "Cardinal Foundation Services was contracted to support foundation stabilization and interior slab restoration during renovations of a Jack in the Box restaurant. Hybrid piers, a combination of steel and concrete systems, were installed along perimeter walls to provide added depth and durability while staying cost-effective.",
      "Interior slab lifting in the dining area was completed using precision polyurethane foam injection, allowing clean and efficient restoration during flooring replacement. The team also coordinated closely with restaurant operations to work around the active drive-thru, ensuring no business interruptions throughout the project.",
    ],
  },
  "commercial-foundation-stabilization-creekside-erosion-repair": {
    title: "Commercial Foundation Stabilization & Creekside Erosion Repair",
    cat: "Commercial", loc: "DFW, TX",
    highlights: [
      ["Piers to bedrock at 10,000 PSI", "Steel piers along the eroding creek embankment pressed to bedrock or refusal."],
      ["Plumbing breaks repaired", "Three breaks located under the slab, tunneled and repaired for soil stability."],
      ["Mudjacking void fill", "The 2-inch gap created by the building lift pressure-filled with grout injection for uniform support."],
    ],
    description: [
      "Cardinal Foundation Services completed a structural stabilization project for an office building situated adjacent to a creek embankment experiencing active erosion. To reinforce the compromised foundation, steel piers were installed along the east side of the structure and driven to bedrock or refusal at 10,000 PSI, ensuring deep, stable support.",
      "During excavation, three plumbing breaks were discovered beneath the slab, which were tunneled and repaired to restore proper drainage and enhance soil stability. Following the building lift, a 2-inch void formed between the foundation and underlying soil, which was pressure-filled using mudjacking grout injection to create a uniform and fully supported base, providing long-term protection against soil movement and water-related settlement.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS[slug];
  if (!p) return {};
  return {
    title: { absolute: `${p.title} | Cardinal Foundation Services` },
    description: p.description[0].slice(0, 300),
    alternates: { canonical: `/projects/${slug}/` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROJECTS[slug];
  if (!p) notFound();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Projects", path: "/projects/" }, { label: p.title, path: `/projects/${slug}/` }])} />
      <div className="page dirD c-page">
        <span id="top" />
        <DNav />
        <section style={{ position: "relative", background: "var(--ink)", overflow: "hidden" }}>
          <div className="d-blueprint" style={{ opacity: .5 }} />
          <div className="wrap" style={{ position: "relative", zIndex: 2, paddingTop: 26, paddingBottom: 56 }}>
            <div className="c-crumb over" style={{ fontSize: 11, color: "#9a9a9a", marginBottom: 26 }}>
              <Link href="/" style={{ color: "#9a9a9a" }}>Home</Link>
              <span style={{ color: "var(--red)" }}>/</span>
              <Link href="/projects/" style={{ color: "#9a9a9a" }}>Projects</Link>
              <span style={{ color: "var(--red)" }}>/</span>
              <span style={{ color: "#fff" }}>{p.title}</span>
            </div>
            <Kicker color="#fff">{p.cat} · {p.loc}</Kicker>
            <h1 className="disp" style={{ fontSize: 50, margin: "20px 0 0", color: "#fff", maxWidth: 860 }}>{p.title}</h1>
          </div>
        </section>
        <DTrustBar />
        <section style={{ background: "var(--paper)", padding: "72px 0", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap">
            <h2 className="disp" style={{ fontSize: 36, marginBottom: 24, color: "var(--ink)" }}>Project highlights</h2>
            <div className="c-svc">
              {p.highlights.map(([t, d], i) => (
                <div key={t} style={{ borderTop: "3px solid var(--red)", paddingTop: 16 }}>
                  <div className="disp" style={{ fontSize: 15, color: "var(--red)" }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="disp" style={{ fontSize: 19, margin: "8px 0 8px", color: "var(--ink)" }}>{t}</h3>
                  <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.55, fontWeight: 500 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section style={{ background: "var(--bone)", padding: "72px 0" }}>
          <div className="wrap">
            <h2 className="disp" style={{ fontSize: 36, marginBottom: 20, color: "var(--ink)" }}>What happened on this project</h2>
            {p.description.map((para) => (
              <p key={para.slice(0, 40)} className="lead" style={{ maxWidth: 820, marginBottom: 16 }}>{para}</p>
            ))}
            <h2 className="disp" style={{ fontSize: 30, margin: "34px 0 18px", color: "var(--ink)" }}>Project gallery</h2>
            <div className="c-svc">
              {[1, 2, 3].map((n) => {
                const photo = p.photos?.[n - 1];
                return photo ? (
                  <Img key={n} label={photo.alt} src={photo.src} style={{ height: 220 }} />
                ) : (
                  <PhotoSlot key={n} label={`${p.title}. Real jobsite photo ${n}`} style={{ height: 220 }} />
                );
              })}
            </div>
          </div>
        </section>
        <ProjectCta />
        <DContact />
        <DFooter />
      </div>
    </>
  );
}
