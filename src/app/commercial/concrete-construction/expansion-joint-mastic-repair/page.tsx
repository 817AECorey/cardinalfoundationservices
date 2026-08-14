import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-concrete-installation-repair-contractors/expansion-joint-mastic-repair-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Expansion Joint & Mastic Repair Contractors in DFW | Cardinal" },
  description:
    "Commercial expansion joint and mastic repair in DFW: control joint sealing, joint replacement, and semi-rigid fillers that protect slabs from moisture intrusion and structural wear.",
  alternates: { canonical: "/commercial/concrete-construction/expansion-joint-mastic-repair/" },
  openGraph: { images: [{ url: "/images/expansion-joint-mastic-repair.webp", width: 1600, height: 1066 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Construction", href: "/commercial/concrete-construction/" }, { label: "Expansion Joint & Mastic Repair" }],
  kicker: "Concrete Construction · DFW",
  h1: "Expansion Joint and Mastic Repair",
  heroImage: { src: "/images/expansion-joint-mastic-repair.webp", alt: "Expansion joint prepared for mastic repair at a commercial property", width: 1600, height: 1066 },
  intro: [
    "Expansion joints and sealants protect commercial concrete systems from moisture intrusion and structural stress. Cardinal Foundation Services provides professional expansion joint and mastic repair across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. Proper joint maintenance prevents water infiltration, slab deterioration, and premature structural wear. In high-traffic commercial environments, joint performance is critical to long-term durability.",
  ],
  sections: [
    {
      h2: "What is expansion joint and mastic repair?",
      paras: [
        "Expansion joints allow concrete to expand and contract with temperature and moisture changes. When sealants deteriorate or fail, moisture intrusion can accelerate slab damage and subgrade erosion. Commercial joint repair restores watertight protection and structural flexibility.",
      ],
    },
    {
      h2: "Our commercial joint repair services",
      bullets: [
        ["Control joint sealing. ", "Seal slab control joints to prevent water infiltration."],
        ["Expansion joint replacement. ", "Remove and replace failed joint systems."],
        ["Semi-rigid joint fillers. ", "Install fillers in high-traffic warehouse environments."],
        ["Integrated slab protection. ", "Coordinate joint repair with commercial concrete installation and repair."],
      ],
    },
    {
      h2: "Where joint and mastic repair is used",
      paras: [
        "Warehouses and distribution centers, retail and shopping plazas, office buildings, parking structures, industrial facilities, and municipal and government buildings, with high-traffic slab performance, DFW climate durability planning, and long-term moisture protection in the scope.",
      ],
    },
  ],
  related: [
    ["Concrete Construction", "/commercial/concrete-construction/"],
    ["Slab Repair", "/commercial/concrete-construction/slab-repair/"],
    ["Warehouse Floor Leveling", "/commercial/concrete-lifting/warehouse-floor-leveling/"],
  ],
  faqs: [
    ["How often should expansion joints be inspected?", "Regular inspection is recommended in high-traffic commercial environments."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Joints failing under traffic?",
  ctaSub: "Watertight protection and structural flexibility, restored.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Expansion Joint and Mastic Repair", description: metadata.description!, path: "/commercial/concrete-construction/expansion-joint-mastic-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Construction", path: "/commercial/concrete-construction/" }, { label: "Expansion Joint & Mastic Repair", path: "/commercial/concrete-construction/expansion-joint-mastic-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
