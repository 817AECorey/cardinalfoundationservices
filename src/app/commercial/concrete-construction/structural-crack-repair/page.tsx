import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-concrete-installation-repair-contractors/concrete-crack-structural-repair-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Concrete Crack Structural Repair Contractors in DFW | Cardinal" },
  description:
    "Engineered commercial concrete crack repair in DFW: structural epoxy injection, slab crack reinforcement, and wall and column repair that addresses the underlying cause, not just the crack.",
  alternates: { canonical: "/commercial/concrete-construction/structural-crack-repair/" },
  openGraph: { images: [{ url: "/images/concrete-crack-structural-repair.webp", width: 1600, height: 1600 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Construction", href: "/commercial/concrete-construction/" }, { label: "Structural Crack Repair" }],
  kicker: "Concrete Construction · DFW",
  h1: "Commercial Concrete Crack Repair",
  heroImage: { src: "/images/concrete-crack-structural-repair.webp", alt: "Structural concrete crack prepared for repair", width: 1600, height: 1600 },
  intro: [
    "Structural concrete cracking in commercial buildings can indicate load stress, soil movement, or moisture-related expansion. Cardinal Foundation Services provides engineered concrete crack structural repair across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. We repair structural cracks in commercial slabs, walls, and load-bearing elements to restore integrity and prevent further deterioration. Unlike cosmetic patching, our approach addresses the underlying causes contributing to crack formation.",
  ],
  sections: [
    {
      h2: "What is structural concrete crack repair?",
      img: { src: "/images/structural-concrete-crack-repair.webp", alt: "Structural concrete crack repair" },
      paras: [
        "Structural crack repair restores load capacity and structural continuity in commercial concrete systems. In DFW, expansive soil conditions often contribute to slab movement and cracking. Our methods include epoxy injection, reinforcement strategies, and coordination with commercial foundation repair when settlement is identified.",
      ],
    },
    {
      h2: "Our commercial concrete crack repair services",
      bullets: [
        ["Structural epoxy injection. ", "Restore structural continuity within load-bearing concrete."],
        ["Slab crack reinforcement. ", "Repair slab cracks affecting heavy-load environments."],
        ["Wall and column crack repair. ", "Stabilize cracking in vertical structural elements."],
        ["Settlement-related crack correction. ", "Integrate repair with deep foundation stabilization systems."],
      ],
    },
    {
      h2: "Where concrete crack repair is used",
      paras: [
        "Warehouses, retail centers, office buildings, industrial facilities, parking structures, and municipal buildings, with engineered crack repair methods, DFW soil movement knowledge, and an integrated stabilization approach.",
      ],
    },
  ],
  related: [
    ["Concrete Construction", "/commercial/concrete-construction/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Post-Tension Repair", "/commercial/foundation-repair/post-tension-repair/"],
  ],
  faqs: [
    ["Are all concrete cracks structural?", "No. Structural cracks typically show displacement or continued widening; the assessment tells you which kind you have."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Cracks that keep growing?",
  ctaSub: "Cause-first repair, not cosmetic patching.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Concrete Crack Repair", description: metadata.description!, path: "/commercial/concrete-construction/structural-crack-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Construction", path: "/commercial/concrete-construction/" }, { label: "Structural Crack Repair", path: "/commercial/concrete-construction/structural-crack-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
