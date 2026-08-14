import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-foundation-repair-contractors/hybrid-pier-system-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Hybrid Pier System Contractors in DFW | Cardinal" },
  description:
    "Commercial hybrid pier systems in DFW: drilled and helical piers combined into one engineered stabilization plan for variable soils and large commercial footprints. Request an assessment.",
  alternates: { canonical: "/commercial/foundation-repair/hybrid-piers/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Commercial Foundation Repair", href: "/services/commercial-foundation-repair/" }, { label: "Hybrid Piers" }],
  kicker: "Commercial Foundation Repair · DFW",
  h1: "Hybrid Pier Systems for Commercial Buildings",
  intro: [
    "Commercial buildings across North Texas often experience settlement in varying zones due to inconsistent soil conditions. When a single deep foundation system is not sufficient across an entire footprint, hybrid pier systems provide engineered flexibility. Cardinal Foundation Services installs commercial hybrid pier systems across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. Hybrid systems combine drilled piers and helical piers to address site-specific load requirements and soil variability, allowing precise stabilization where needed while maintaining cost efficiency across large commercial properties.",
  ],
  sections: [
    {
      h2: "What are hybrid pier systems?",
      paras: [
        "Hybrid pier systems integrate multiple deep foundation methods into one engineered stabilization plan. They are commonly used in warehouses, retail centers, industrial buildings, and large-scale commercial developments where soil conditions differ across the structure. By customizing pier type based on load demand and soil depth, hybrid systems provide targeted stabilization and long-term structural performance.",
      ],
    },
    {
      h2: "Our commercial hybrid pier services",
      bullets: [
        ["Combined drilled and helical systems. ", "Strategic use of drilled shafts and helical piers based on structural load zones."],
        ["Differential settlement correction. ", "Stabilize only affected areas without over-engineering the entire structure."],
        ["Large-footprint commercial stabilization. ", "Suited to expansive commercial slabs experiencing uneven movement."],
        ["Engineered retrofit integration. ", "Often paired with commercial foundation repair and drilled pier systems for full structural stabilization."],
      ],
    },
    {
      h2: "Where hybrid pier systems are used",
      paras: [
        "Warehouses and distribution centers, retail developments, office campuses, industrial facilities, and municipal buildings, with soil-specific stabilization planning and engineered deep foundation integration. Serving Fort Worth, Dallas, Arlington, Irving, Grand Prairie, Plano, Garland, Mesquite, Grapevine, Mansfield, and surrounding DFW metroplex cities.",
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Drilled Piers", "/commercial/foundation-repair/drilled-piers/"],
    ["Helical Piers & Tiebacks", "/commercial/foundation-repair/helical-piers-tiebacks/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
  ],
  faqs: [
    ["When are hybrid systems recommended?", "When soil conditions vary across a building footprint or different structural zones require different load capacities."],
    ["Are hybrid systems more efficient than single-method repairs?", "They can be more cost-effective by applying higher-capacity systems only where required."],
    ["Do hybrid systems require engineering oversight?", "Yes. Commercial hybrid systems are typically engineered for load compliance."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Uneven movement across a large footprint?",
  ctaSub: "Schedule a DFW site evaluation to protect your building and maintain operational stability.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Hybrid Pier Systems", description: metadata.description!, path: "/commercial/foundation-repair/hybrid-piers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Commercial Foundation Repair", path: "/services/commercial-foundation-repair/" }, { label: "Hybrid Piers", path: "/commercial/foundation-repair/hybrid-piers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
