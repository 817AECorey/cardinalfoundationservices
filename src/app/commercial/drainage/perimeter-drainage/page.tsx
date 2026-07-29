import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-drainage-stormwater-contractors/foundation-perimeter-drainage-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Foundation Perimeter Drainage Contractors in DFW | Cardinal" },
  description:
    "Engineered foundation perimeter drainage for commercial properties in DFW: intercept and redirect groundwater away from foundation edges and slab perimeters to protect against moisture-related movement.",
  alternates: { canonical: "/commercial/drainage/perimeter-drainage/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Drainage", href: "/commercial/drainage/" }, { label: "Perimeter Drainage" }],
  kicker: "Commercial Drainage · DFW",
  h1: "Foundation Perimeter Drainage",
  intro: [
    "Water accumulation around commercial foundations is one of the leading causes of slab movement, differential settlement, and long-term structural damage in North Texas. Cardinal Foundation Services provides engineered foundation perimeter drainage systems across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. Our perimeter drainage solutions intercept and redirect groundwater away from foundation edges and slab perimeters, helping maintain consistent soil moisture levels and protecting your commercial building from moisture-related movement.",
  ],
  sections: [
    {
      h2: "What is foundation perimeter drainage?",
      paras: [
        "Foundation perimeter drainage consists of engineered subsurface drain systems installed along the outer edge of commercial foundations and slabs. These systems collect excess groundwater before it can reach structural footings or slab edges and safely redirect it away from the building. In DFW's expansive clay soils, proper perimeter drainage is critical to preventing the soil expansion and contraction cycles that cause foundation settlement and slab cracking. Our systems are designed specifically for commercial properties and integrate with existing foundation repair and concrete stabilization projects.",
      ],
    },
    {
      h2: "Our commercial drainage services",
      bullets: [
        ["Foundation edge drain systems. ", "Protect slab edges and grade beams from water accumulation."],
        ["Water diversion and redirection. ", "Redirect runoff away from structural footings."],
        ["Integrated drainage and stabilization planning. ", "Often implemented alongside commercial foundation repair."],
        ["Drainage correction for slab movement. ", "Installed when addressing settlement or hydrostatic pressure issues."],
      ],
    },
    {
      h2: "Where foundation perimeter drainage is used",
      paras: [
        "Warehouses and distribution centers, office buildings and corporate campuses, retail centers, industrial facilities, municipal and government buildings, and multi-tenant developments, with engineered subsurface solutions, integration with foundation and slab stabilization, and coordination with engineers and general contractors.",
      ],
    },
  ],
  related: [
    ["Commercial Drainage", "/commercial/drainage/"],
    ["Commercial French Drains", "/commercial/drainage/french-drains/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
  ],
  faqs: [
    ["How does perimeter drainage reduce settlement risk?", "By keeping soil moisture at the foundation edge consistent, perimeter drainage limits the expansion and contraction cycles in expansive clay that drive movement."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Water working on your foundation?",
  ctaSub: "Engineered perimeter systems that treat the root cause.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Foundation Perimeter Drainage", description: metadata.description!, path: "/commercial/drainage/perimeter-drainage/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Drainage", path: "/commercial/drainage/" }, { label: "Perimeter Drainage", path: "/commercial/drainage/perimeter-drainage/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
