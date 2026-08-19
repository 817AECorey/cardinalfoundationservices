import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-foundation-repair-contractors/helical-piers-tieback-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Helical Piers & Tieback Contractors in DFW | Cardinal" },
  description:
    "Engineered helical pier and tieback systems in DFW: deep foundation support and lateral anchoring for commercial structures and retaining walls, with torque-monitored installation. Request an assessment.",
  alternates: { canonical: "/commercial/foundation-repair/helical-piers-tiebacks/" },
  openGraph: { images: [{ url: "/images/helical-piers-tieback-installation.webp", width: 1600, height: 900 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Commercial Foundation Repair", href: "/services/commercial-foundation-repair/" }, { label: "Helical Piers & Tiebacks" }],
  kicker: "Commercial Foundation Repair · DFW",
  h1: "Helical Piers and Tieback Systems",
  heroImage: { src: "/images/helical-piers-tieback-installation.webp", alt: "Helical pier and tieback installation at a commercial site", width: 1600, height: 900 },
  intro: [
    "Soil movement and lateral pressure are two of the most common causes of commercial structural instability across North Texas. Cardinal Foundation Services provides engineered helical pier and tieback systems across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. Helical systems are deep foundation and anchoring solutions that stabilize structures experiencing settlement or lateral wall movement, transferring loads to stable soil layers and providing long-term structural reinforcement without full demolition.",
  ],
  sections: [
    {
      h2: "What are helical piers and tiebacks?",
      img: { src: "/images/helical-pier-tieback.webp", alt: "Helical pier and tieback system" },
      paras: [
        "Helical piers are steel shafts with helical plates that are torque-driven into stable bearing soils to support vertical structural loads. Tiebacks, also called helical anchors, resist lateral earth pressure on retaining walls and foundation walls. These systems are commonly used in commercial applications where precision load capacity and minimal disruption are required.",
      ],
    },
    {
      h2: "Our commercial helical system services",
      bullets: [
        ["Helical pier installation. ", "Deep foundation support for commercial slabs, grade beams, and structural columns."],
        ["Helical tieback anchor systems. ", "Lateral stabilization for retaining walls and foundation walls under pressure."],
        ["Retrofitting existing foundations. ", "Reinforce structures experiencing settlement without full replacement."],
        ["Load testing and engineering coordination. ", "Torque-monitored installation and engineered design verification."],
      ],
    },
    {
      h2: "Where helical systems are used",
      img: { src: "/images/commercial-helical-piers-tiebacks-fill1.webp", alt: "helical piers tiebacks work" },
      paras: [
        "Warehouses and distribution centers, retail centers and office buildings, multifamily developments, industrial facilities, municipal structures, retaining walls and sloped sites, and parking structures. Helical systems often work in coordination with commercial foundation repair and our commercial retaining wall services, with minimal vibration and site disruption. Serving Fort Worth, Dallas, Arlington, Irving, Grand Prairie, Plano, Garland, Mesquite, Grapevine, Mansfield, and surrounding DFW metroplex cities.",
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Commercial Retaining Walls", "/commercial/retaining-walls/"],
    ["Drilled Piers", "/commercial/foundation-repair/drilled-piers/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
  ],
  faqs: [
    ["When are helical piers preferred over drilled piers?", "Helical systems are often ideal for limited access areas and controlled load verification during installation."],
    ["Can tiebacks stabilize leaning retaining walls?", "Yes. Helical tieback anchors are commonly used to correct lateral wall displacement."],
    ["Are helical systems long-term solutions?", "When engineered properly, they provide long-term structural support."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Settlement or lateral movement?",
  ctaSub: "Schedule a DFW site evaluation to protect your building and maintain operational stability.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Helical Piers and Tieback Systems", description: metadata.description!, path: "/commercial/foundation-repair/helical-piers-tiebacks/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Commercial Foundation Repair", path: "/services/commercial-foundation-repair/" }, { label: "Helical Piers & Tiebacks", path: "/commercial/foundation-repair/helical-piers-tiebacks/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
