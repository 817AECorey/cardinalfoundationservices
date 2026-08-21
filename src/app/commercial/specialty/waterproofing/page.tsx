import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-waterproofing-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Commercial Waterproofing Contractors in DFW & Houston | Cardinal" },
  description:
    "Commercial waterproofing across DFW, Houston, and Texas: foundations, retaining walls, below-grade structures, crack sealing, and plaza, garage, and roof deck protection against water intrusion.",
  alternates: { canonical: "/commercial/specialty/waterproofing/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services", href: "/commercial/specialty/" }, { label: "Waterproofing" }],
  kicker: "Specialty Structural · Fort Worth & Dallas",
  h1: "Commercial Waterproofing",
  intro: [
    "Cardinal Foundation Services provides commercial waterproofing solutions for buildings across the Dallas-Fort Worth metroplex. From foundations and retaining walls to below-grade concrete structures, our team protects against water intrusion, erosion, and long-term moisture damage. Whether you are constructing a new commercial facility or repairing an existing one, waterproofing systems are tailored to the demands of Texas soils and weather, working with contractors, engineers, developers, and property owners to deliver code-compliant results.",
  ],
  sections: [
    {
      h2: "Our commercial waterproofing services",
      bullets: [
        ["Foundation waterproofing. ", "Protection for below-grade slabs and vertical walls, using membranes, coatings, and drainage systems."],
        ["Retaining wall waterproofing. ", "Prevent hydrostatic pressure and water seepage with barrier systems and integrated drainage solutions."],
        ["Concrete crack sealing. ", "High-performance crack injection and surface sealing to block water penetration and restore structural integrity."],
        ["Negative and positive side waterproofing. ", "Interior and exterior solutions for both existing structures and new construction."],
        ["Drainage systems and french drains. ", "Direct water away from critical structural components with engineered commercial drainage."],
        ["Plaza deck, garage, and roof deck waterproofing. ", "Protect exposed horizontal surfaces from water infiltration with durable coatings and sealants."],
      ],
    },
    {
      h2: "Why waterproofing matters in DFW",
      img: { src: "/images/commercial-waterproofing.webp", alt: "Commercial waterproofing work" },
      paras: [
        "In the Dallas-Fort Worth region, expansive clay soils and unpredictable rainfall make commercial waterproofing critical. Unchecked water intrusion can lead to foundation settling and structural cracks, mold, mildew, and air quality issues, costly damage to interior finishes and equipment, and regulatory and insurance complications.",
        "We work with commercial general contractors, property developers and real estate investors, industrial facility owners, architects and civil engineers, and public sector and municipal projects.",
      ],
    },
  ],
  related: [
    ["Specialty Services", "/commercial/specialty/"],
    ["Commercial Drainage", "/commercial/drainage/"],
    ["Commercial Retaining Walls", "/commercial/retaining-walls/"],
    ["Structural Crack Repair", "/commercial/concrete-construction/structural-crack-repair/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Water finding its way in?",
  ctaSub: "Protection from the ground up, built for Texas soils and weather.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Waterproofing", description: metadata.description!, path: "/commercial/specialty/waterproofing/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }, { label: "Waterproofing", path: "/commercial/specialty/waterproofing/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
