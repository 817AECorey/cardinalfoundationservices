import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Warehouse Floor Leveling & Slab Repair in DFW | Cardinal" },
  description:
    "Warehouse floor leveling and slab foundation repair around active operations in Dallas-Fort Worth. Void fill, polyurethane lifting, engineered scope, minimal downtime.",
  alternates: { canonical: "/commercial/concrete-lifting/warehouse-floor-leveling/" },
  openGraph: { images: [{ url: "/images/warehouse-floor-leveling-industrial.webp", width: 1600, height: 1066 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Lifting", href: "/commercial/concrete-lifting/" }, { label: "Warehouse Floor Leveling" }],
  kicker: "Industrial · Dallas-Fort Worth",
  h1: "Warehouse Floor Leveling in Dallas-Fort Worth",
  heroImage: { src: "/images/warehouse-floor-leveling-industrial.webp", alt: "Industrial warehouse floor prepared for concrete leveling", width: 1600, height: 1066 },
  intro: [
    "An uneven warehouse floor is a forklift problem, a racking problem, a safety problem, and eventually a structural problem. Cardinal levels warehouse and industrial floors across Dallas-Fort Worth, corrects the voids and settlement underneath them, and does it around your operations rather than instead of them.",
  ],
  sections: [
    {
      h2: "Warehouse slab foundation repair, not just surface leveling",
      img: { src: "/images/warehouse-floor-leveling-interior.webp", alt: "Warehouse floor leveling interior" },
      paras: [
        "Sunken or rocking slab panels usually mean the soil beneath has eroded, compacted, or washed out, leaving voids that grow under traffic loads. Grinding high spots or topping low ones treats the symptom. Our approach treats the support: polyurethane injection lifts settled panels and fills voids with structural foam, restoring bearing under the slab. Where movement traces to the foundation or drainage, the scope says so, because releveling a floor over an unresolved washout is money spent twice.",
      ],
    },
    {
      h2: "Built for active facilities",
      bullets: [
        "Work phased by aisle, bay, or shift so racking and operations continue",
        "Fast-curing polyurethane that returns floors to forklift traffic quickly, typically the same day",
        "Clean, low-water process suited to occupied industrial space",
        "Elevation surveys before and after, documented for ownership",
        "Coordination with your safety requirements and site rules",
      ],
    },
    {
      h2: "Related conditions we correct",
      paras: [
        "Expansion joint and mastic failures, slab cracking at panel joints, dock and approach settlement, and drainage conditions feeding water under the slab. Where floors meet tilt wall panels, we assess both, because panel-line movement and floor settlement often share a cause.",
        "Work is backed by a workmanship warranty, and terms vary by service. The scope you receive is engineered bids with the reasoning documented.",
      ],
    },
  ],
  related: [
    ["Concrete Lifting", "/commercial/concrete-lifting/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Tilt Wall", "/commercial/tilt-wall/"],
  ],
  faqs: [
    ["How long is a warehouse floor out of service during leveling?", "Usually hours, not days, per treated area. Polyurethane cures fast enough that most floors return to traffic the same day, and phasing keeps the rest of the facility running."],
    ["What causes warehouse floors to sink in North Texas?", "Voids from soil erosion or compaction under the slab, expansive clay moisture cycles, and drainage delivering water beneath the building. Heavy point loads from racking accelerate it."],
    ["Is polyurethane strong enough for forklift and racking loads?", "Structural polyurethane foams are engineered for industrial bearing loads and are widely used under trafficked slabs. The injection plan is matched to your loading in the scope."],
    ["Do you fix the cause or just lift the floor?", "Both, or we tell you why not. If drainage or foundation movement is driving the settlement, the assessment identifies it and the scope addresses it."],
  ],
  ctaLabel: "Request an assessment",
  ctaHeading: "Floor out of level?",
  ctaSub: "Phased around your operations, documented for ownership.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Warehouse Floor Leveling", description: metadata.description!, path: "/commercial/concrete-lifting/warehouse-floor-leveling/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Lifting", path: "/commercial/concrete-lifting/" }, { label: "Warehouse Floor Leveling", path: "/commercial/concrete-lifting/warehouse-floor-leveling/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
