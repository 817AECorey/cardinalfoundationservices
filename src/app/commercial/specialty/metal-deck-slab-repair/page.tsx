import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/metal-deck-slab-repair-fort-worth/). */

export const metadata: Metadata = {
  title: { absolute: "Metal Deck & Pan-Pour Slab Repair in DFW & Houston | Cardinal" },
  description:
    "Engineered repair of metal deck and pan-pour slab systems across DFW, Houston, and Texas: delamination mapping, selective demolition, steel treatment, high-bond restoration, and waterproofing protection.",
  alternates: { canonical: "/commercial/specialty/metal-deck-slab-repair/" },
  openGraph: { images: [{ url: "/images/metal-deck-slab-repair.webp", width: 1536, height: 1024 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services", href: "/commercial/specialty/" }, { label: "Metal Deck Slab Repair" }],
  kicker: "Specialty Structural · Fort Worth & DFW",
  h1: "Metal Deck and Pan-Pour Slab Repair",
  heroImage: { src: "/images/metal-deck-slab-repair.webp", alt: "Metal deck slab during commercial repair work", width: 1536, height: 1024 },
  intro: [
    "Cardinal Foundation Services specializes in engineered repair of metal deck and pan-pour slab systems across Fort Worth and the DFW metroplex, restoring the structural integrity of elevated concrete slabs while extending service life and preventing future deterioration. Metal deck and pan-pour slabs are common structural systems across parking garages, roof decks, mezzanines, industrial floors, and multi-story commercial buildings throughout North Texas. Over time, these elevated slabs show cracking, delamination, and spalling, usually tied to moisture intrusion and steel corrosion within the concrete or deck pan below.",
  ],
  sections: [
    {
      h2: "What causes metal deck and pan-pour damage?",
      img: { src: "/images/metal-deck-slab-repair-crew.webp", alt: "Crew repairing a metal deck slab" },
      paras: [
        "Pan-pours deteriorate for several key reasons: moisture intrusion from above or below, steel deck corrosion causing concrete delamination, chloride exposure in parking structures, failed joints and waterproofing membranes, and heavy traffic loads with long-term fatigue. As corrosion expands inside the slab, the topping begins to separate from the metal deck, creating delaminated hollow areas, cracking, or visible spalling.",
      ],
    },
    {
      h2: "Our repair process",
      bullets: [
        ["Assessment and mapping. ", "Sounding, delamination mapping, visual inspection, and nondestructive testing where needed, to identify corrosion locations, concrete separation, and deck deterioration."],
        ["Selective demolition. ", "Remove all unsound concrete to expose the metal deck and reinforcing steel, so the new repair bonds properly."],
        ["Steel treatment or replacement. ", "Corroded reinforcing and deck pans are cleaned, treated, or replaced depending on severity, with steel primers or galvanic products applied as required."],
        ["High-bond concrete restoration. ", "Polymer-modified repair materials and high-bond patch mortars engineered for elevated deck performance."],
        ["Crack repair and injection. ", "Epoxy injection or route-and-seal methods restore slab continuity and prevent water migration that could restart the corrosion cycle."],
        ["Waterproofing protection. ", "Coatings, sealers, or membranes designed for foot traffic, vehicle traffic, or roof exposure, essential to preventing moisture return."],
      ],
    },
    {
      h2: "Where we typically work",
      img: { src: "/images/commercial-specialty-metal-deck-slab-repair-fill1.webp", alt: "metal deck slab repair work" },
      paras: [
        "Parking garages and podium decks, retail and mixed-use elevated slabs, roof deck topping slabs, industrial mezzanines and catwalks, and medical, education, and office buildings. Serving Fort Worth, Dallas, Arlington, Irving, Grapevine, Weatherford, and the greater DFW metroplex, with repair plans tailored to the building's use and engineering requirements and minimal operational disruption.",
      ],
    },
  ],
  related: [
    ["Specialty Services", "/commercial/specialty/"],
    ["Parking Garage Repair", "/commercial/specialty/parking-garage-repair/"],
    ["Balcony Repair", "/commercial/specialty/balcony-repair/"],
    ["Waterproofing", "/commercial/specialty/waterproofing/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Elevated slab sounding hollow?",
  ctaSub: "Delamination mapped, cause corrected, deck restored.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Metal Deck and Pan-Pour Slab Repair", description: metadata.description!, path: "/commercial/specialty/metal-deck-slab-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }, { label: "Metal Deck Slab Repair", path: "/commercial/specialty/metal-deck-slab-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
