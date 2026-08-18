import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-foundation-repair-contractors/underpinning-contractors/).
   Entity name corrected to Cardinal Foundation Services per hard rule. */

export const metadata: Metadata = {
  title: { absolute: "Commercial Underpinning Contractors in DFW | Cardinal" },
  description:
    "Engineered commercial underpinning in DFW: load transfer to deeper competent soil for warehouses, offices, retail, municipal, and industrial buildings experiencing settlement. Request an assessment.",
  alternates: { canonical: "/commercial/foundation-repair/underpinning/" },
  openGraph: { images: [{ url: "/images/underpinning-crew-structural-support.webp", width: 1600, height: 2133 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Commercial Foundation Repair", href: "/services/commercial-foundation-repair/" }, { label: "Underpinning" }],
  kicker: "Commercial Foundation Repair · DFW",
  h1: "Commercial Underpinning in Dallas-Fort Worth",
  heroImage: { src: "/images/underpinning-crew-structural-support.webp", alt: "Crew performing underpinning work beneath an existing structure", width: 1600, height: 2133, pos: "50% 25%" },
  intro: [
    "When commercial foundations lose support due to soil movement or structural loading changes, underpinning restores stability by transferring weight to deeper, competent soil layers. Cardinal Foundation Services provides engineered commercial underpinning across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities, for warehouses, office buildings, retail centers, municipal facilities, and industrial properties experiencing settlement or load redistribution.",
  ],
  sections: [
    {
      h2: "What is commercial underpinning?",
      img: { src: "/images/project-stemmons-07.webp", alt: "Steel pier pipe sections staged along a perimeter excavation at a building wall" },
      paras: [
        "Underpinning is the process of strengthening and stabilizing an existing foundation by extending its depth or redistributing its load. In commercial settings, this often involves installing drilled piers, helical piers, or hybrid systems beneath load-bearing elements. It is commonly used when structural settlement affects columns, grade beams, or slab systems.",
      ],
    },
    {
      h2: "Our commercial underpinning services",
      bullets: [
        ["Load transfer stabilization. ", "Shift structural weight to deeper stable soil layers."],
        ["Settlement correction. ", "Address differential movement impacting slab and structural performance."],
        ["Structural reinforcement planning. ", "Coordinate underpinning with commercial foundation repair and deep foundation systems."],
        ["Phased stabilization for active sites. ", "Designed to minimize operational disruption."],
      ],
    },
    {
      h2: "Where underpinning is used",
      img: { src: "/images/commercial-foundation-drilling-rig-crew.webp", alt: "Drilling rig and crew installing foundation piers" },
      paras: [
        "Warehouses and distribution centers, office buildings, retail developments, industrial facilities, and parking structures. We serve businesses in Fort Worth, Dallas, Arlington, Irving, Grand Prairie, Plano, Garland, Mesquite, Grapevine, Mansfield, and surrounding DFW metroplex cities, with an engineered load-transfer strategy, coordination with engineers and GCs, and DFW soil condition experience behind every scope.",
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Drilled Piers", "/commercial/foundation-repair/drilled-piers/"],
    ["Helical Piers & Tiebacks", "/commercial/foundation-repair/helical-piers-tiebacks/"],
    ["Hybrid Piers", "/commercial/foundation-repair/hybrid-piers/"],
  ],
  faqs: [
    ["When is underpinning required?", "When existing foundations cannot adequately support structural loads due to soil movement or settlement."],
    ["Is underpinning disruptive?", "Projects are often phased to maintain operational continuity."],
    ["Does underpinning prevent future settlement?", "When properly engineered, it significantly reduces future structural movement."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Structural settlement at your property?",
  ctaSub: "Schedule a DFW site evaluation to protect your building and maintain operational stability.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Underpinning", description: metadata.description!, path: "/commercial/foundation-repair/underpinning/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Commercial Foundation Repair", path: "/services/commercial-foundation-repair/" }, { label: "Underpinning", path: "/commercial/foundation-repair/underpinning/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
