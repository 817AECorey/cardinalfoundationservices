import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/lightweight-concrete-repair-fort-worth/). */

export const metadata: Metadata = {
  title: { absolute: "Lightweight Concrete Repair for Elevated Slabs in DFW | Cardinal" },
  description:
    "Lightweight concrete repair throughout Fort Worth and DFW: cracking, delamination, moisture damage, and fire-rated assembly restoration for multifamily and commercial elevated slabs.",
  alternates: { canonical: "/commercial/specialty/lightweight-concrete-repair/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services", href: "/commercial/specialty/" }, { label: "Lightweight Concrete Repair" }],
  kicker: "Specialty Structural · Fort Worth & DFW",
  h1: "Lightweight Concrete Repair for Elevated Slabs",
  intro: [
    "Cardinal Foundation Services provides lightweight concrete repair throughout Fort Worth, Dallas, Arlington, Grapevine, Irving, and the DFW region, restoring strength, fire rating, and long-term durability while minimizing occupant disruption. Lightweight concrete systems are widely used across North Texas for multifamily housing, commercial buildings, elevated corridors, mezzanines, and balcony structures. While these slabs offer reduced weight and improved fire performance, they require specialized repair methods when cracking, delamination, structural fatigue, or water intrusion occur.",
  ],
  sections: [
    {
      h2: "Common lightweight slab failures we repair",
      img: { src: "/images/lightweight-concrete-walkway-repair.webp", alt: "Elevated lightweight concrete walkway repair" },
      paras: [
        "Cracking and delamination from structural movement, moisture intrusion causing soft spots, spalling, and corrosion, fire-rated lightweight assemblies losing performance due to damage, topping slab separation from substrate or metal decking, surface wear, pitting, and abrasion, and failure from HVAC leaks, balcony drainage, or poor waterproofing. Each problem requires a tailored approach that does not compromise the structural integrity or the fire rating of the assembly.",
      ],
    },
    {
      h2: "Our lightweight concrete repair process",
      bullets: [
        ["Structural and moisture assessment. ", "Evaluate load paths, substrate condition, moisture content, and fire-rating requirements."],
        ["Removal of damaged material. ", "Deteriorated lightweight gypsum or concrete is removed without disturbing adjacent assemblies."],
        ["Structural repair and reinforcement. ", "Rebuild the section using high-strength, engineered repair materials designed for elevated decks and lightweight systems."],
        ["Crack injection and surface restoration. ", "Structural resin injection or polymer-modified repair mortars restore integrity and prevent further deterioration."],
        ["Waterproofing and protection. ", "Membranes, coatings, or sealers to prevent moisture-related failures, the leading cause of lightweight slab breakdown."],
      ],
    },
    {
      h2: "Where we typically work",
      paras: [
        "Multifamily balconies, breezeways and elevated walkways, parking structure ramps and decks, commercial corridors, mezzanines and elevated floors, and attached condo and apartment decks. Serving Fort Worth, Dallas, Arlington, Irving, Grapevine, Weatherford, and the greater DFW metroplex, with code-compliant repairs and minimal disruption to residents and tenants.",
      ],
    },
  ],
  related: [
    ["Specialty Services", "/commercial/specialty/"],
    ["Balcony Repair", "/commercial/specialty/balcony-repair/"],
    ["Metal Deck Slab Repair", "/commercial/specialty/metal-deck-slab-repair/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Lightweight slabs failing?",
  ctaSub: "Strength, fire rating, and durability restored.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Lightweight Concrete Repair", description: metadata.description!, path: "/commercial/specialty/lightweight-concrete-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }, { label: "Lightweight Concrete Repair", path: "/commercial/specialty/lightweight-concrete-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
