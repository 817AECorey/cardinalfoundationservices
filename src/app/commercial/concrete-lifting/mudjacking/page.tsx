import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-concrete-lifting-stabilization-contractors/commercial-mudjacking-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Commercial Mudjacking Contractors in DFW & Houston | Cardinal" },
  description:
    "Commercial mudjacking across DFW, Houston, and Texas: controlled slurry injection that lifts and stabilizes settled parking lots, drive lanes, sidewalks, and large exterior slabs. Request an assessment.",
  alternates: { canonical: "/commercial/concrete-lifting/mudjacking/" },
  openGraph: { images: [{ url: "/images/mudjacking-crew-v2.webp", width: 1600, height: 1200 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Lifting", href: "/commercial/concrete-lifting/" }, { label: "Mudjacking" }],
  kicker: "Concrete Lifting & Stabilization · DFW",
  h1: "Commercial Mudjacking",
  heroImage: { src: "/images/mudjacking-crew-v2.webp", alt: "Mudjacking crew and pump at a property", width: 1600, height: 1200 },
  intro: [
    "When large commercial slabs settle due to soil washout or compaction failure, mudjacking can provide an effective stabilization solution. Cardinal Foundation Services provides commercial mudjacking across Texas, from our Fort Worth base serving Dallas-Fort Worth, Houston, and commercial markets statewide. Mudjacking uses a controlled slurry mixture injected beneath concrete to lift and stabilize settled slab systems. While polyurethane systems are often preferred for precision work, mudjacking remains viable for certain large-scale commercial applications.",
  ],
  sections: [
    {
      h2: "What is commercial mudjacking?",
      img: { src: "/images/commercial-mudjacking-interior-slab.webp", alt: "Commercial mudjacking on an interior slab" },
      paras: [
        "Mudjacking involves pumping a cementitious slurry beneath a slab to fill voids and restore elevation. This method is commonly used on parking lots, large flatwork areas, and commercial exterior slabs. Proper evaluation determines whether mudjacking or foam injection is most appropriate.",
      ],
    },
    {
      h2: "Our commercial mudjacking services",
      bullets: [
        ["Parking lot slab lifting. ", "Restore elevation to settled commercial parking areas."],
        ["Exterior flatwork stabilization. ", "Lift sidewalks, drive lanes, and plaza areas."],
        ["Large-area void filling. ", "Fill subgrade voids beneath expansive slabs."],
        ["Elevation correction for high-traffic areas. ", "Eliminate trip hazards and ADA compliance concerns."],
      ],
    },
    {
      h2: "Where commercial mudjacking is used",
      img: { src: "/images/mudjacking-where-v2.webp", alt: "Leveled concrete slab after mudjacking" },
      paras: [
        "Parking lots, commercial drive lanes, sidewalk systems, and large exterior slabs. Projects may coordinate with commercial concrete lifting or integrate with drainage correction when water washout is identified. Serving Fort Worth, Dallas, Arlington, Irving, Grand Prairie, Plano, Garland, Mesquite, Grapevine, Mansfield, and surrounding DFW metroplex cities.",
      ],
    },
  ],
  related: [
    ["Concrete Lifting", "/commercial/concrete-lifting/"],
    ["Polyurethane Foam Injection", "/commercial/concrete-lifting/polyurethane-foam-injection/"],
    ["Commercial Drainage", "/commercial/drainage/"],
  ],
  faqs: [
    ["Is mudjacking as precise as foam injection?", "Foam injection often provides greater precision, but mudjacking can be effective for certain large-area applications."],
    ["Does mudjacking stop future settlement?", "If soil instability or drainage issues are corrected, long-term performance improves significantly."],
    ["How long does the process take?", "Most projects can be completed with minimal operational interruption."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Large slabs out of level?",
  ctaSub: "Site-specific evaluation decides mudjacking or foam. We install both.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Mudjacking", description: metadata.description!, path: "/commercial/concrete-lifting/mudjacking/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Lifting", path: "/commercial/concrete-lifting/" }, { label: "Mudjacking", path: "/commercial/concrete-lifting/mudjacking/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
