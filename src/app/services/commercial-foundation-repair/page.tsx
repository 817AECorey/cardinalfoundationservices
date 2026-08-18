import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* PRESERVED LEGACY URL, 200, the only commercial foundation-repair hub.
   /commercial/foundation-repair/ 301s here; never build a page at the clean path. */

export const metadata: Metadata = {
  title: { absolute: "Commercial Foundation Repair in DFW | Cardinal Foundation Services" },
  description:
    "Commercial foundation repair across Dallas-Fort Worth for warehouses, multifamily, retail, hotels, and industrial facilities. Engineered scope, self-performed crews, minimal disruption. Request an assessment.",
  alternates: { canonical: "/services/commercial-foundation-repair/" },
  openGraph: { images: [{ url: "/images/commercial-foundation-repair-pressed-piers-haltom-city.webp", width: 1600, height: 1200 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Commercial Foundation Repair" }],
  kicker: "Commercial & Industrial · Dallas-Fort Worth",
  h1: "Commercial Foundation Repair in Dallas-Fort Worth",
  heroImage: { src: "/images/commercial-foundation-repair-pressed-piers-haltom-city.webp", alt: "Concrete pier sections staged for foundation repair at a commercial building", width: 1600, height: 1200 },
  intro: [
    "Foundation movement in a commercial building is a business problem before it is a structural one. It affects safety, operations, tenant experience, and long-term asset value. Cardinal Foundation Services provides commercial foundation repair across the Dallas-Fort Worth area, including Fort Worth, Dallas, Arlington, Irving, Grand Prairie, Coppell, Carrollton, Plano, and the surrounding commercial corridors, for warehouses, industrial facilities, multifamily properties, hotels, retail centers, and parking structures.",
  ],
  sections: [
    {
      h2: "Built for commercial loads and commercial schedules",
      img: { src: "/images/pier-hole-hydraulic-ram-commercial.webp", alt: "Hydraulic ram set in a pier hole cut at a commercial slab edge" },
      paras: [
        "Commercial structures move differently than homes. Heavier loads, larger slabs, longer spans, and North Texas expansive clay create settlement patterns that require a structural read of root cause and load paths, not a one-size pier count. Every Cardinal commercial project is scoped from an assessment of the structure and soil conditions, documented for ownership, and executed by our own crews. We self-perform the work, which means the company that scoped your repair is the company standing on your slab.",
        "Our crews are equipped for active sites: occupied buildings, tenant coordination, after-hours access, phased work around operations, and the safety requirements that come with them. Where a property must stay open, the repair plan is built around keeping it open.",
      ],
    },
    {
      h2: "Commercial foundation repair services",
      bullets: [
        "Underpinning for settled or overloaded foundations",
        "Steel piers for deep, high-capacity support",
        "Drilled piers and helical piers with tieback applications",
        "Hybrid pier systems matched to soil and load",
        "Post-tension slab repair",
        "Void fill and polyurethane injection beneath slabs",
        "Warehouse floor leveling around active operations",
        "Tilt wall repair and stabilization",
        "Commercial drainage correction, the root cause behind much of the movement we see",
      ],
      parasAfter: ["Each service links to its own page with scope detail, and to completed projects that show the work."],
    },
    {
      h2: "Proof, not promises",
      img: { src: "/images/commercial-foundation-drilling-rig-crew.webp", alt: "Drilling rig and crew installing foundation piers" },
      paras: [
        "Cardinal's commercial portfolio includes tilt wall stabilization and drainage restoration, industrial polyurethane lifting and void fill, steel pier installation for hospitality structures, and multifamily foundation repair in Carrollton, Lewisville, Baytown, and Austin. Recent projects are documented with conditions found, methods selected, and results, so you can evaluate the work before you contact us.",
        "Engineering oversight runs through our process, from scoping through final sign-off, and a licensed Professional Engineer co-owns the company. We put that in the proof column rather than the headline: what matters on your project is that the scope is engineered, documented, and executed as specified. Work is backed by a workmanship warranty, and terms vary by service.",
      ],
    },
    {
      h2: "What to expect",
      steps: [
        ["Assessment", "We walk the structure, review conditions, and identify probable root cause."],
        ["Engineered bid", "You receive a documented scope with the reasoning behind it, suitable for ownership review."],
        ["Execution", "Self-performed crews, phasing that respects your operations, and documentation through completion."],
      ],
      parasAfter: ["Sometimes the right answer is that you do not need a repair. When monitoring or drainage correction is the honest recommendation, that is the recommendation you get."],
    },
  ],
  childCards: [
    { t: "Underpinning", d: "Load transfer to deeper, competent soil for settled or overloaded commercial foundations.", href: "/commercial/foundation-repair/underpinning/" },
    { t: "Steel Piers", d: "Deep driven support for heavy loads, installed around active operations.", href: "/commercial/foundation-repair/steel-piers/" },
    { t: "Drilled Piers", d: "Deep foundation shafts for new construction and retrofit stabilization.", href: "/commercial/foundation-repair/drilled-piers/" },
    { t: "Helical Piers & Tiebacks", d: "Torque-verified deep support and lateral anchoring for walls under pressure.", href: "/commercial/foundation-repair/helical-piers-tiebacks/" },
    { t: "Hybrid Piers", d: "Drilled and helical systems combined for variable soils and large footprints.", href: "/commercial/foundation-repair/hybrid-piers/" },
    { t: "Post-Tension Repair", d: "Tendon investigation, replacement, and re-anchoring under engineered oversight.", href: "/commercial/foundation-repair/post-tension-repair/" },
  ],
  related: [
    ["Tilt Wall", "/commercial/tilt-wall/"],
    ["Warehouse Floor Leveling", "/commercial/concrete-lifting/warehouse-floor-leveling/"],
    ["Multifamily", "/commercial/multifamily/"],
    ["Multifamily Due Diligence", "/commercial/due-diligence-walks/"],
    ["Structural Repair", "/commercial/structural-repair/"],
    ["Projects", "/projects/"],
  ],
  faqs: [
    ["Can repairs happen while the building stays occupied?", "Usually, yes. Most commercial foundation work can be phased around tenants and operations. Access needs, noise windows, and staging are established in the scope before work begins."],
    ["What types of buildings does Cardinal repair?", "Warehouses and industrial facilities, multifamily communities, hotels, retail centers, offices, restaurants, and parking structures across DFW, with larger commercial and specialty structural projects across Texas."],
    ["How is a commercial assessment different from a residential inspection?", "Commercial assessments address load paths, structural systems, code considerations, and documentation requirements that ownership groups and lenders expect. The deliverable is a documented scope, not just a price."],
    ["What causes commercial foundation problems in North Texas?", "Expansive clay soil that swells with moisture and shrinks in drought, combined with drainage conditions around the structure. Heavy loads amplify the movement. That is why drainage correction is often part of a lasting repair."],
    ["Does Cardinal handle multifamily acquisitions?", "Yes. Our multifamily foundation and structural due diligence service supports acquisition teams with pre-purchase assessments. See the due diligence page for scope options."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Have a commercial building that is moving?",
  ctaSub: "Engineered scope, self-performed crews, minimal disruption.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Foundation Repair", description: metadata.description!, path: "/services/commercial-foundation-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Commercial Foundation Repair", path: "/services/commercial-foundation-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
