import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-concrete-installation-repair-contractors/commercial-slab-pouring-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Commercial Slab Pouring Contractors in DFW | Cardinal" },
  description:
    "Commercial slab pouring in DFW: reinforced structural slabs for warehouses, retail, office, and industrial facilities, with subgrade preparation built for North Texas expansive clay. Request engineered bids.",
  alternates: { canonical: "/commercial/concrete-construction/slab-pouring/" },
  openGraph: { images: [{ url: "/images/slab-pouring-formed-foundation.webp", width: 1600, height: 1200 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Construction", href: "/commercial/concrete-construction/" }, { label: "Slab Pouring" }],
  kicker: "Concrete Construction · DFW",
  h1: "Commercial Slab Pouring",
  heroImage: { src: "/images/slab-pouring-formed-foundation.webp", alt: "Formed foundation prepared for concrete placement", width: 1600, height: 1200 },
  intro: [
    "Commercial slab systems must be engineered to handle structural loads, equipment traffic, and long-term soil movement. Cardinal Foundation Services provides professional commercial slab pouring across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. From new warehouse slabs to structural foundation slabs for retail, office, and industrial facilities, our team installs reinforced concrete systems built for durability and performance. Proper subgrade preparation and reinforcement are critical in North Texas, where expansive clay soils can impact slab longevity.",
  ],
  sections: [
    {
      h2: "What is commercial slab pouring?",
      img: { src: "/images/commercial-slab-pouring.webp", alt: "Commercial slab pour in progress" },
      paras: [
        "Commercial slab pouring involves preparing the subgrade, installing reinforcement, and placing engineered concrete systems designed for heavy-load environments. Unlike residential flatwork, commercial slabs must meet structural tolerances and often integrate with deep foundation systems. We coordinate slab installation with commercial foundation repair or drilled pier systems when required for site stability.",
      ],
    },
    {
      h2: "Our commercial slab services",
      bullets: [
        ["Structural foundation slabs. ", "New slab-on-grade systems for commercial buildings."],
        ["Reinforced industrial slabs. ", "Heavy-load slabs for warehouses and manufacturing facilities."],
        ["Slab replacement. ", "Remove and replace failed slab sections while preserving structural integrity."],
        ["Integrated stabilization planning. ", "Coordinate slab systems with commercial drainage and stabilization services."],
      ],
    },
    {
      h2: "Where commercial slabs are used",
      paras: [
        "Warehouses and distribution centers, retail developments, office buildings, industrial facilities, municipal structures, and multi-tenant commercial projects, with engineered reinforcement planning, coordination with contractors and engineers, and a long-term durability focus.",
      ],
    },
  ],
  related: [
    ["Concrete Construction", "/commercial/concrete-construction/"],
    ["Drilled Piers", "/commercial/foundation-repair/drilled-piers/"],
    ["Concrete Flatwork (residential & builder)", "/new-construction/concrete-flatwork/"],
  ],
  faqs: [
    ["How important is subgrade preparation?", "Subgrade stability directly impacts slab performance and longevity, especially on North Texas expansive clay."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "A slab that has to carry real loads?",
  ctaSub: "Engineered reinforcement, prepared subgrade, one self-performing crew.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Slab Pouring", description: metadata.description!, path: "/commercial/concrete-construction/slab-pouring/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Construction", path: "/commercial/concrete-construction/" }, { label: "Slab Pouring", path: "/commercial/concrete-construction/slab-pouring/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
