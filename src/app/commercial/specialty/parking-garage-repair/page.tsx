import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/parking-garage-concrete-structural-repair/). */

export const metadata: Metadata = {
  title: { absolute: "Parking Garage Concrete & Structural Repair in DFW | Cardinal" },
  description:
    "Parking garage concrete and structural repair across DFW: deck repair, slab settlement, beam and column repair, expansion joints, and structural reinforcement for multi-level parking structures.",
  alternates: { canonical: "/commercial/specialty/parking-garage-repair/" },
  openGraph: { images: [{ url: "/images/parking-garage-concrete-structural-repair.webp", width: 1600, height: 1066 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services", href: "/commercial/specialty/" }, { label: "Parking Garage Repair" }],
  kicker: "Specialty Structural · DFW",
  h1: "Parking Garage Concrete and Structural Repair",
  heroImage: { src: "/images/parking-garage-concrete-structural-repair.webp", alt: "Parking garage concrete during structural repair work", width: 1600, height: 1066 },
  intro: [
    "Cardinal Foundation Services provides parking garage concrete and structural repair for commercial properties across the Dallas-Fort Worth metroplex, including Dallas, Fort Worth, Arlington, Irving, Grand Prairie, Coppell, Carrollton, and Plano. Parking garages are high-load, high-traffic structures that require specialized repair solutions. Cracked concrete, settlement, and structural deterioration can lead to safety hazards, liability concerns, and costly closures. Our services are engineered specifically for multi-level parking garages, parking decks, and concrete parking structures.",
  ],
  sections: [
    {
      h2: "Types of parking garage repair we offer",
      bullets: [
        "Parking garage concrete repair and structural parking garage repair",
        "Concrete deck repair and slab settlement repair",
        "Structural reinforcement and beam and column repair",
        "Expansion joint repair and crack repair and stabilization",
        "Load-bearing concrete repair and garage foundation stabilization",
        "Scopes for general contractors, property managers, commercial structures, and parking facilities",
      ],
    },
    {
      h2: "Commercial and industrial parking structures",
      paras: [
        "We provide parking garage concrete and structural repair for office buildings, retail centers, hospitals, hotels, and mixed-use developments across DFW. Repairs restore safety, extend service life, and reduce liability.",
        "For industrial campuses, logistics centers, and high-capacity vehicle operations, our team works efficiently to minimize disruptions and maintain access. All repairs are engineered to support vehicle traffic, multi-level loading, and ongoing facility use, with recommendations based on structural evaluation, load requirements, and long-term performance.",
      ],
    },
  ],
  related: [
    ["Specialty Services", "/commercial/specialty/"],
    ["Structural Repair", "/commercial/structural-repair/"],
    ["Metal Deck Slab Repair", "/commercial/specialty/metal-deck-slab-repair/"],
    ["Expansion Joint & Mastic Repair", "/commercial/concrete-construction/expansion-joint-mastic-repair/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "A garage with cracking, settlement, or spalling?",
  ctaSub: "Engineered for high traffic and multi-level loads.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Parking Garage Concrete and Structural Repair", description: metadata.description!, path: "/commercial/specialty/parking-garage-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }, { label: "Parking Garage Repair", path: "/commercial/specialty/parking-garage-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
