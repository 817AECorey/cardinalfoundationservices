import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/lube-pit-foundation-repair-dfw/). */

export const metadata: Metadata = {
  title: { absolute: "Lube Pit Foundation Repair in DFW | Cardinal Foundation Services" },
  description:
    "Lube pit foundation repair in DFW: below-grade stabilization, pit wall and slab repair, underpinning, and void fill for automotive shops, dealerships, and fleet maintenance facilities, with minimal downtime.",
  alternates: { canonical: "/commercial/specialty/lube-pit-foundation-repair/" },
  openGraph: { images: [{ url: "/images/lube-pit-foundation-repair.webp", width: 1536, height: 1024 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services", href: "/commercial/specialty/" }, { label: "Lube Pit Foundation Repair" }],
  kicker: "Specialty Structural · DFW",
  h1: "Lube Pit Foundation Repair",
  heroImage: { src: "/images/lube-pit-foundation-repair.webp", alt: "Lube pit foundation during commercial repair", width: 1536, height: 1024 },
  intro: [
    "Lube pits in automotive shops, quick lube centers, dealerships, and fleet maintenance facilities endure constant heavy vehicle loads, fluid spills, vibration, and chemical exposure. Over time this causes settlement, cracking, and structural failure of the pit foundation. Cardinal Foundation Services specializes in lube pit foundation repair across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities, with engineered stabilization and repair solutions that restore structural integrity with minimal downtime to your shop operations.",
  ],
  sections: [
    {
      h2: "Types of lube pit foundation repair we offer",
      bullets: [
        "Lube pit foundation repair and below-grade foundation stabilization",
        "Lube pit wall stabilization and pit slab repair",
        "Structural crack repair and foundation underpinning",
        "Void fill beneath lube pits and subgrade stabilization",
        "Equipment bay slab support and service bay floor leveling",
        "Scopes for general contractors, property managers, automotive facilities, and industrial properties",
      ],
    },
    {
      h2: "Commercial and industrial service facilities",
      img: { src: "/images/commercial-lube-pit-foundation-repair.webp", alt: "Commercial lube pit foundation repair" },
      paras: [
        "We provide commercial lube pit foundation repair for dealerships, quick-lube centers, and service garages across DFW, stabilizing pit walls and floors while minimizing disruption to daily operations.",
        "For fleet maintenance facilities, transportation hubs, and heavy-equipment service operations, our team works efficiently to reduce downtime and maintain safe working conditions. Lube pit repairs require experience with below-grade structures and confined service environments; every repair is based on site conditions, soil behavior, and the structural loading around the pit and service bay.",
      ],
    },
  ],
  related: [
    ["Specialty Services", "/commercial/specialty/"],
    ["Underpinning", "/commercial/foundation-repair/underpinning/"],
    ["Polyurethane Foam Injection", "/commercial/concrete-lifting/polyurethane-foam-injection/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Pit walls or floors moving?",
  ctaSub: "Below-grade stabilization with minimal downtime to your shop.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Lube Pit Foundation Repair", description: metadata.description!, path: "/commercial/specialty/lube-pit-foundation-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }, { label: "Lube Pit Foundation Repair", path: "/commercial/specialty/lube-pit-foundation-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
