import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-drainage-stormwater-contractors/commercial-french-drain-system-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Commercial French Drain System Contractors in DFW | Cardinal" },
  description:
    "Engineered commercial french drain systems in DFW: intercept and redirect groundwater away from foundations, slabs, and retaining walls, sized for commercial water volumes.",
  alternates: { canonical: "/commercial/drainage/french-drains/" },
  openGraph: { images: [{ url: "/images/french-drain-installation-commercial.webp", width: 1200, height: 1600 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Drainage", href: "/commercial/drainage/" }, { label: "French Drains" }],
  kicker: "Commercial Drainage · DFW",
  h1: "Commercial French Drain Systems",
  heroImage: { src: "/images/french-drain-installation-commercial.webp", alt: "French drain trench during installation", width: 1200, height: 1600 },
  intro: [
    "Excess groundwater around commercial structures can contribute to slab movement, foundation instability, and retaining wall pressure. Cardinal Foundation Services installs engineered commercial french drain systems across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. French drains are subsurface drainage systems designed to intercept and redirect groundwater away from commercial foundations and slab systems. In North Texas, where expansive clay soils react significantly to moisture fluctuations, managing subsurface water is critical to long-term structural performance.",
  ],
  sections: [
    {
      h2: "What is a commercial french drain system?",
      img: { src: "/images/commercial-french-drain-gravel.webp", alt: "Commercial french drain gravel trench" },
      paras: [
        "A french drain consists of a perforated pipe installed within a gravel-filled trench designed to collect and redirect groundwater away from structural elements. In commercial settings, these systems are engineered to handle larger water volumes and integrate with site grading and stormwater flow paths. Properly installed french drains help reduce hydrostatic pressure and minimize moisture-related soil expansion beneath slabs and foundations.",
      ],
    },
    {
      h2: "Our commercial french drain services",
      bullets: [
        ["Subsurface water interception. ", "Capture groundwater before it reaches foundations or slab systems."],
        ["Slab protection drainage. ", "Reduce moisture fluctuations that contribute to settlement or slab heave."],
        ["Retaining wall drain integration. ", "Relieve pressure buildup behind commercial retaining walls."],
        ["Site-specific drainage design. ", "Engineered layouts integrated with commercial foundation repair when movement has occurred."],
      ],
    },
    {
      h2: "Where commercial french drains are used",
      img: { src: "/images/commercial-drainage-french-drains-fill1.webp", alt: "french drains work" },
      paras: [
        "Warehouses and distribution centers, office buildings and corporate campuses, retail centers, industrial facilities, municipal and government buildings, and multi-tenant commercial developments, with engineered subsurface solutions and a long-term moisture control strategy.",
      ],
    },
  ],
  related: [
    ["Commercial Drainage", "/commercial/drainage/"],
    ["Perimeter Drainage", "/commercial/drainage/perimeter-drainage/"],
    ["Commercial Retaining Walls", "/commercial/retaining-walls/"],
    ["Residential French Drains", "/residential/drainage/french-drains/"],
  ],
  faqs: [
    ["How do french drains protect commercial foundations?", "By intercepting groundwater before it reaches the structure, french drains keep soil moisture more consistent, reducing the expansion and contraction cycles and hydrostatic pressure that drive movement."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Groundwater reaching your structure?",
  ctaSub: "Engineered interception, sized for commercial volumes.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial French Drain Systems", description: metadata.description!, path: "/commercial/drainage/french-drains/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Drainage", path: "/commercial/drainage/" }, { label: "French Drains", path: "/commercial/drainage/french-drains/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
