import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /concrete-crack-repair/).
   Old copy's award/superlative claims removed per hard rules. */

export const metadata: Metadata = {
  title: { absolute: "Concrete Crack Repair in Fort Worth & DFW | Cardinal Foundation Services" },
  description:
    "Concrete crack repair in Fort Worth and DFW: driveways, patios, sidewalks, foundations, and commercial surfaces, repaired and reinforced to prevent further damage. Free evaluation.",
  alternates: { canonical: "/residential/concrete-leveling/concrete-crack-repair/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Concrete Leveling", href: "/residential/concrete-leveling/" }, { label: "Concrete Crack Repair" }],
  kicker: "Concrete Leveling · DFW",
  h1: "Concrete Crack Repair",
  heroImage: { src: "/images/cracked-driveway-concrete-repair.webp", alt: "Cracked residential driveway before concrete repair", width: 1600, height: 897 },
  intro: [
    "Cracks in concrete can lead to structural issues if not addressed. Cardinal repairs cracked concrete across Dallas-Fort Worth and the Houston area, whether it is your driveway, patio, sidewalk, foundation, or a commercial property, repairing and reinforcing the concrete to prevent further damage and restore integrity and appearance.",
  ],
  sections: [
    {
      h2: "What we repair",
      bullets: [
        ["Cracked driveway repair. ", "Restore the strength and look of your driveway with durable repairs for all driveway types."],
        ["Foundation crack repair. ", "Address foundational cracks to support the stability and safety of your home, for both residential and commercial structures."],
        ["Patio and sidewalk repair. ", "Fix cracks in outdoor living spaces and walkways to maintain both appearance and safety."],
        ["Commercial concrete repair. ", "Parking lots, warehouse floors, sidewalks, and loading docks, with minimal disruption to operations."],
      ],
    },
    {
      h2: "Crack repair and the cause behind it",
      paras: [
        "A crack is a symptom before it is a problem. Where cracking traces to settlement, the evaluation says so, because sealing a crack over moving soil only reschedules it: pairing crack repair with slab lifting or foundation work is often the durable answer. Where the crack is cosmetic or seasonal, we say that too. Residential work carries a transferable workmanship warranty, terms vary by service, with financing available and a written quote within one business day of evaluation.",
      ],
    },
  ],
  related: [
    ["Concrete Leveling", "/residential/concrete-leveling/"],
    ["Concrete Slab Lifting (Poly)", "/residential/concrete-leveling/polyurethane-foam-injection/"],
    ["Slab Repair", "/residential/foundation-repair/slab-repair/"],
    ["Structural Crack Repair (commercial)", "/commercial/concrete-construction/structural-crack-repair/"],
  ],
  faqs: [
    ["Is every concrete crack a problem?", "No. Hairline shrinkage cracks are normal; widening, offset, or recurring cracks warrant evaluation, and the assessment tells you which kind you have."],
    ["Will the repaired crack come back?", "Not if the cause is addressed. That is why the evaluation looks at what moved the concrete, not just the crack itself."],
  ],
  ctaLabel: "Schedule a free evaluation",
  ctaHeading: "Cracks spreading through your concrete?",
  ctaSub: "Repaired and reinforced, with the cause identified honestly.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Concrete Crack Repair", description: metadata.description!, path: "/residential/concrete-leveling/concrete-crack-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Concrete Leveling", path: "/residential/concrete-leveling/" }, { label: "Concrete Crack Repair", path: "/residential/concrete-leveling/concrete-crack-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
