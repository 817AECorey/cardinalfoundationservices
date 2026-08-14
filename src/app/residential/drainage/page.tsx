import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Drainage Repair & Design for Homes in DFW | Cardinal" },
  description:
    "Home drainage repair and design in Dallas-Fort Worth: french drains, area drains, grading, and drainage correction that protects your foundation. Free evaluation.",
  alternates: { canonical: "/residential/drainage/" },
  openGraph: { images: [{ url: "/images/french-drain-installation-fort-worth-texas.webp", width: 1400, height: 1400 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Drainage" }],
  kicker: "Residential Drainage · DFW",
  h1: "Home Drainage Repair and Design in Dallas-Fort Worth",
  heroImage: { src: "/images/french-drain-installation-fort-worth-texas.webp", alt: "French drain trench with gravel and pipe along a home foundation", width: 1400, height: 1400 },
  intro: [
    "Most foundation problems in North Texas are water problems first. Expansive clay swells where water collects and shrinks where it is starved, and a yard that drains badly writes that cycle directly into your foundation. Cardinal designs and installs residential drainage systems across Dallas-Fort Worth and the Houston area that move water away from your home and keep the soil around it stable.",
  ],
  sections: [
    {
      h2: "Drainage services for homes",
      bullets: [
        ["French drains ", "that intercept and carry subsurface water away from the foundation"],
        ["Area and surface drains ", "that collect standing water from yards, patios, and low spots"],
        ["Drainage design ", "for whole-property water management, built from how your lot actually sheds water"],
        ["Grading correction ", "so the ground slopes away from the house instead of toward it"],
        ["Root barriers ", "where trees are drawing moisture unevenly from foundation soils"],
        ["Downspout and discharge routing ", "so roof water leaves the property instead of pooling at the slab"],
      ],
    },
    {
      h2: "Drainage and your foundation",
      paras: [
        "Water pooling at a foundation edge, a chronically damp side yard, or soil pulling away from the slab in summer are the early chapters of the cracks-and-sticking-doors story. Correcting drainage is often the highest-value work we do: it treats the cause, it costs less than structural repair, and in some cases it is the honest recommendation instead of piers. If your foundation is already showing symptoms, an inspection with mapped elevation readings tells you whether drainage correction, structural repair, or both is the right scope.",
        "Work is backed by a transferable workmanship warranty, terms vary by service, and financing is available for residential projects.",
      ],
    },
  ],
  related: [
    ["French Drains", "/residential/drainage/french-drains/"],
    ["Foundation Repair", "/residential/foundation-repair/"],
  ],
  faqs: [
    ["How do I know if my yard drainage is hurting my foundation?", "Standing water near the slab after rain, soil separation from the foundation in dry months, damp crawl spaces, and one side of the house moving differently than the other are the common signs. An evaluation identifies where the water is going and what it is doing."],
    ["French drain or surface drain: which do I need?", "Surface drains collect water you can see; french drains intercept water moving through the soil. Many yards need one, some need both, and the design follows where your water actually comes from."],
    ["Can drainage work fix my foundation problem without piers?", "Sometimes. When movement is early and driven by moisture imbalance, drainage correction plus monitoring can be the right scope. When structural repair is needed, drainage protects it. The inspection findings decide."],
    ["Do you handle grading?", "Yes. Grading and soil work are self-performed, and regrading is often part of a complete drainage design."],
  ],
  ctaLabel: "Schedule a free drainage evaluation",
  ctaHeading: "Water where it should not be?",
  ctaSub: "Drainage correction is foundation protection.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Home Drainage Repair and Design", description: metadata.description!, path: "/residential/drainage/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Drainage", path: "/residential/drainage/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
