import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /area-drains/; snapshot body was empty,
   coverage drawn from the approved residential drainage content). */

export const metadata: Metadata = {
  title: { absolute: "Area Drain Installation & Repair in DFW | Cardinal" },
  description:
    "Area and surface drains for DFW homes: collect standing water from yards, patios, and low spots before it reaches your foundation. Free drainage evaluation.",
  alternates: { canonical: "/residential/drainage/area-drains/" },
  openGraph: { images: [{ url: "/images/area-drain-installation-residential.webp", width: 1200, height: 1600 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Drainage", href: "/residential/drainage/" }, { label: "Area Drains" }],
  kicker: "Residential Drainage · DFW",
  h1: "Area Drain Installation and Repair",
  heroImage: { src: "/images/area-drain-installation-residential.webp", alt: "Area drain installation at a residential property", width: 1200, height: 1600 },
  intro: [
    "Area drains collect the water you can see: standing water in yards, patios, courtyards, and low spots that has nowhere to go. Cardinal installs and repairs area and surface drain systems across Dallas-Fort Worth and the Houston area as part of complete drainage design, because standing water near a home is foundation trouble on a delay in North Texas clay.",
  ],
  sections: [
    {
      h2: "How area drains work",
      img: { src: "/images/area-drain-installation.webp", alt: "Area drain installation" },
      paras: [
        "Grated inlets are set at the low points where water actually collects, connected by solid pipe pitched to carry the collected water to a safe discharge point away from the home. The design starts with how your lot sheds water: where it enters, where it stalls, and where it can legitimately go. Area drains handle surface water; where water is moving through the soil itself, a french drain intercepts it, and many yards need both working together.",
      ],
    },
    {
      h2: "Area drains and your foundation",
      img: { src: "/images/area-drain-grate-foundation.webp", alt: "Area drain grate at a home foundation" },
      paras: [
        "Standing water beside a slab feeds the swell side of the expansive clay cycle, and a low spot that never dries writes that moisture imbalance directly into the foundation. Correcting surface collection is often one of the most cost-effective protections a property can buy. If your foundation is already showing symptoms, the evaluation covers what the water has done, not just where it pools. Residential drainage work carries a transferable workmanship warranty, terms vary by service, with financing available.",
      ],
    },
  ],
  related: [
    ["Drainage", "/residential/drainage/"],
    ["French Drains", "/residential/drainage/french-drains/"],
    ["Foundation Repair", "/residential/foundation-repair/"],
  ],
  faqs: [
    ["Area drain or french drain: which do I need?", "Area drains collect water you can see on the surface; french drains intercept water moving through the soil. The design follows where your water actually comes from, and some yards need both."],
    ["Where does the collected water go?", "To daylight at a lower elevation, a storm drainage path, or another approved outlet that carries water genuinely away from the home."],
  ],
  ctaLabel: "Schedule a free drainage evaluation",
  ctaHeading: "Standing water that never leaves?",
  ctaSub: "Collected at the low spot, carried away from the foundation.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Area Drain Installation and Repair", description: metadata.description!, path: "/residential/drainage/area-drains/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Drainage", path: "/residential/drainage/" }, { label: "Area Drains", path: "/residential/drainage/area-drains/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
