import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* PATCHED per run-3 micro-patch (product structure per Josh 7/28):
   free select-building inspection report, then paid Type A / Type B.
   CRE vocabulary; never claims full PCA/ASTM E2018 scope. */

export const metadata: Metadata = {
  title: { absolute: "Multifamily Foundation Due Diligence | DFW & Texas | Cardinal" },
  description:
    "Pre-acquisition foundation and structural due diligence for multifamily and commercial properties in DFW and Texas. Free inspection report on select buildings, then Type A or Type B property-wide analysis.",
  alternates: { canonical: "/commercial/due-diligence-walks/" },
  openGraph: { images: [{ url: "/images/due-diligence-multifamily-pool-courtyard.webp", width: 1600, height: 1200 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Multifamily Due Diligence" }],
  kicker: "Acquisitions · DFW & Texas",
  h1: "Multifamily Foundation and Structural Due Diligence",
  heroImage: { src: "/images/due-diligence-multifamily-pool-courtyard.webp", alt: "Multifamily pool courtyard during a property walk", width: 1600, height: 1200 },
  intro: [
    "Foundation issues found after closing become your capital plan. Found before closing, they become your negotiation. Cardinal provides foundation and structural due diligence for multifamily and commercial acquisitions across Dallas-Fort Worth and Texas, structured so you can start free and scale the analysis to the size of the deal.",
  ],
  sections: [
    {
      h2: "How the assessment scales",
      bullets: [
        ["Start free: inspection report on select buildings. ", "A no-cost inspection of a representative set of buildings on the property, producing the same report our paying clients receive: elevation survey, visual analysis, topographical mapping, and supporting analysis of foundation performance. Enough signal to know whether the asset has a structural story, before you spend a dollar."],
        ["Scale paid: property-wide inspection. ", "When the deal or the findings justify covering more buildings, the paid property inspection extends the analysis at the scope you choose."],
        ["Type A report: full analysis. ", "The complete workup per building: elevation survey, visual analysis, topographical mapping, and full foundation performance analysis, for the buildings where depth matters."],
        ["Type B report: overview analysis. ", "Exterior visual review, common-factor assessment, and overview analysis, the efficient read for screening large properties or lower-concern buildings."],
      ],
      parasAfter: [
        "Many engagements mix them: Type A on the buildings the free inspection flagged, Type B across the rest. A structural engineer's review and report can be added for verification where the deal file requires it.",
      ],
    },
    {
      h2: "What acquisition teams receive",
      bullets: [
        "Documented observations by building, with photographs and elevation data",
        "Foundation and structural concerns ranked immediate versus monitor",
        "Drainage and soil conditions that will drive future movement",
        "Areas requiring further investigation before reliance",
        "Budgeting inputs for capital needs and reserve conversations where scoped",
        "Stated limitations of each report type, so you know exactly what it covers",
      ],
      parasAfter: [
        "All of it supplements your broader property condition assessment rather than replacing it: we cover the foundation and structural picture in depth; your PCA covers the rest of the asset.",
      ],
    },
    {
      h2: "Why a foundation-specific review",
      paras: [
        "General property condition reports flag foundation symptoms; they rarely diagnose them. In North Texas, expansive clay makes the difference between cosmetic settlement and progressive movement a soil-and-drainage question, and pricing that wrong on a multifamily portfolio is expensive in either direction. Cardinal has completed multifamily foundation repairs in Carrollton, Lewisville, Baytown, and Austin, documented in our project records, and a licensed Professional Engineer co-owns the company.",
      ],
    },
    {
      h2: "Timing",
      paras: [
        "Multifamily and private equity budget cycles concentrate in August through October. Free select-building inspections scheduled ahead of that window feed your capital plan instead of trailing it.",
      ],
    },
  ],
  related: [
    ["Multifamily Foundation Repair", "/commercial/multifamily/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Projects", "/projects/"],
  ],
  faqs: [
    ["Is the free inspection really the same report?", "Same components, on a select number of buildings: elevation survey, visual analysis, topographical map, and performance analysis. The paid tiers extend coverage, not quality."],
    ["Type A or Type B: how do we choose?", "Type A where you need full per-building depth; Type B where an exterior and common-factor overview answers the question. The free inspection findings usually make the split obvious."],
    ["Is this a Property Condition Assessment?", "No. It is a foundation and structural due diligence review built to supplement a PCA with discipline-depth the PCA does not provide."],
    ["Can you work inside our inspection period?", "Yes. Select-building inspections schedule fast, and report timelines are confirmed at engagement so they land inside your window."],
  ],
  ctaLabel: "Schedule a free select-building inspection",
  ctaHeading: "A deal in diligence?",
  ctaSub: "Start free on select buildings, scale to Type A or Type B as the deal requires.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Multifamily Foundation and Structural Due Diligence", description: metadata.description!, path: "/commercial/due-diligence-walks/", areaServed: ["Dallas-Fort Worth", "Texas"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Multifamily Due Diligence", path: "/commercial/due-diligence-walks/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
