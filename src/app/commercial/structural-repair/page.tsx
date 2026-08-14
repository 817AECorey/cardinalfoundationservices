import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-structural-repair/). */

export const metadata: Metadata = {
  title: { absolute: "Commercial Structural Repair & Reinforcement in DFW | Cardinal" },
  description:
    "Commercial and industrial structural repair and reinforcement across DFW: load-bearing walls, beams and columns, structural steel, concrete, and tilt-wall structural repair. Engineered for real load conditions.",
  alternates: { canonical: "/commercial/structural-repair/" },
  openGraph: { images: [{ url: "/images/commercial-structural-repair.webp", width: 1600, height: 1066 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Structural Repair" }],
  kicker: "Commercial & Industrial · DFW",
  h1: "Commercial Structural Repair and Reinforcement",
  heroImage: { src: "/images/commercial-structural-repair.webp", alt: "Commercial structural repair work in progress", width: 1600, height: 1066 },
  intro: [
    "Cardinal Foundation Services specializes in commercial and industrial structural repair and reinforcement for properties across the Dallas-Fort Worth metroplex, including Dallas, Fort Worth, Arlington, Irving, Grand Prairie, Coppell, Carrollton, and Plano. Structural issues in commercial buildings can impact safety, code compliance, and long-term asset value. Our team delivers engineered structural solutions designed for real load conditions, not cosmetic fixes, for warehouses, industrial facilities, multifamily properties, hotels, retail centers, and parking structures.",
  ],
  sections: [
    {
      h2: "Types of structural repair and reinforcement we offer",
      bullets: [
        "Structural reinforcement and load-bearing wall repair",
        "Beam and column repair and structural steel repair",
        "Concrete structural repair and structural crack repair",
        "Foundation-to-structure ties and slab structural support",
        "Tilt-wall structural repair and retaining wall reinforcement",
        "Scopes for general contractors, property managers, industrial facilities, and commercial properties",
      ],
    },
    {
      h2: "Why choose Cardinal for structural repair",
      bullets: [
        ["Commercial and industrial focus. ", "This service line is built for commercial and industrial structures."],
        ["Built for heavy loads. ", "Reinforcement solutions designed to support commercial traffic, equipment, and operational demands."],
        ["Engineered repair approach. ", "Recommendations based on structural evaluation and load requirements, not surface-level symptoms."],
        ["DFW structural experience. ", "North Texas construction methods, soil behavior, and the structural challenges common across DFW."],
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Tilt Wall", "/commercial/tilt-wall/"],
    ["Structural Crack Repair", "/commercial/concrete-construction/structural-crack-repair/"],
    ["Specialty Services", "/commercial/specialty/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Structural issues affecting your building?",
  ctaSub: "Engineered solutions for real load conditions.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Structural Repair and Reinforcement", description: metadata.description!, path: "/commercial/structural-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Structural Repair", path: "/commercial/structural-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
