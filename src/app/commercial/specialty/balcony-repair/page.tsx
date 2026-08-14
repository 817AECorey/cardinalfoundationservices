import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/balcony-repair-fort-worth/). */

export const metadata: Metadata = {
  title: { absolute: "Balcony Repair & Concrete Restoration in DFW | Cardinal" },
  description:
    "Balcony repair throughout Fort Worth and DFW: structural concrete repair, waterproofing and membranes, railing anchor repair, and large-scale multifamily and HOA remediation.",
  alternates: { canonical: "/commercial/specialty/balcony-repair/" },
  openGraph: { images: [{ url: "/images/balcony-structural-repair.webp", width: 1536, height: 1024 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services", href: "/commercial/specialty/" }, { label: "Balcony Repair" }],
  kicker: "Specialty Structural · Fort Worth & DFW",
  h1: "Balcony Repair and Concrete Restoration",
  heroImage: { src: "/images/balcony-structural-repair.webp", alt: "Balcony structure during commercial repair work", width: 1536, height: 1024 },
  intro: [
    "Balconies in North Texas experience heavy wear from weather exposure, drainage failures, structural movement, and moisture penetration, making them one of the most common elevated structures to fail in multifamily and commercial buildings. Cardinal Foundation Services delivers balcony repair throughout Fort Worth and the DFW metroplex, restoring safety, structural capacity, and long-term durability. Balcony deterioration is more than cosmetic: it can compromise load-bearing integrity and create liability for property owners. Our repair methods are built to safety codes, HOA requirements, and commercial building standards.",
  ],
  sections: [
    {
      h2: "What causes balcony damage?",
      paras: [
        "Poor drainage or clogged scuppers, failed waterproof membranes, standing water leading to spalling and corrosion, cracked or delaminated concrete, rusted railing bases compromising safety, and UV damage, freeze-thaw cycles, and age. We evaluate the balcony as a complete system, slab, substrate, waterproofing, guardrails, and load paths, so repairs address root causes rather than symptoms.",
      ],
    },
    {
      h2: "Our balcony concrete repair services",
      bullets: [
        ["Structural concrete repair. ", "Remove deteriorated concrete, repair corroded steel, and rebuild slabs with structural patching materials."],
        ["Waterproofing and membranes. ", "High-performance coatings, membranes, and drainage solutions tailored for Texas weather."],
        ["Railing and guardrail repair. ", "Repair or replace railing bases and anchor points to meet current safety codes and prevent future failure."],
        ["Crack repair, spall repair, and resurfacing. ", "Structural cracks injected or routed and sealed; spalling areas rebuilt for long-term durability."],
        ["HOA and multifamily compliance. ", "Large-scale balcony remediation for HOAs, apartment complexes, condo buildings, and mixed-use properties."],
      ],
    },
    {
      h2: "Where we perform balcony repairs",
      paras: [
        "Multifamily apartments, condominiums and townhomes, commercial mixed-use properties, hotels and hospitality structures, and office buildings with exterior walkways. Serving Fort Worth, Dallas, Arlington, Irving, Grapevine, Weatherford, and the greater DFW metroplex, with minimal disruption to operations and clear communication, safety planning, and documentation.",
      ],
    },
  ],
  related: [
    ["Specialty Services", "/commercial/specialty/"],
    ["Metal Deck Slab Repair", "/commercial/specialty/metal-deck-slab-repair/"],
    ["Waterproofing", "/commercial/specialty/waterproofing/"],
    ["Possum Kingdom Lake", "/locations/possum-kingdom-lake/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Balconies showing their age?",
  ctaSub: "The whole system evaluated: slab, waterproofing, railings, and load paths.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Balcony Repair and Concrete Restoration", description: metadata.description!, path: "/commercial/specialty/balcony-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }, { label: "Balcony Repair", path: "/commercial/specialty/balcony-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
