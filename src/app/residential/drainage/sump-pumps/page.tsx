import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sump Pump Installation & Drainage in DFW | Cardinal",
  description:
    "Sump basins, pumps, and discharge routing for DFW clay-soil drainage. When gravity cannot carry water away from a foundation, a properly designed sump system does.",
  alternates: { canonical: "/residential/drainage/sump-pumps/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Drainage", href: "/residential/drainage/" }, { label: "Sump Pumps" }],
  kicker: "Drainage · DFW",
  h1: "Sump Pumps",
  intro: [
    "Most DFW drainage problems are solved with grading and gravity. But some lots sit low, some patios and basements collect water with nowhere to send it, and some drainage routes simply have no downhill. That is what a sump system is for: collect the water in a basin, and pump it to a discharge point that gravity cannot reach.",
  ],
  sections: [
    {
      h2: "Basins, pumps, and discharge routing",
      paras: [
        "A sump system has three parts that have to be designed together. The basin collects water from area drains, french drains, or surface flow, sized so the pump is not cycling constantly. The pump is matched to the volume and the lift the lot actually requires. And the discharge line carries the water to a point where it leaves the property for good, not back into the same saturated soil beside the foundation.",
        "The discharge is where undersized installs fail. Water pumped ten feet away in clay soil comes right back. Routing, check valves, and freeze-conscious discharge placement are part of the design, not afterthoughts.",
      ],
    },
    {
      h2: "When a sump system fits DFW clay drainage",
      bullets: [
        "Low spots and courtyards that collect water with no gravity route out",
        "French drain or area drain systems on lots where the street sits higher than the yard",
        "Recurring standing water against the foundation after normal rain",
      ],
      parasAfter: [
        "Expansive clay makes standing water beside a slab a structural issue, not just a nuisance. Saturated soil swells, dry soil shrinks, and the foundation rides the difference. When an inspection shows water that cannot leave the lot by grade, a sump system is the honest recommendation. When gravity can do the job, it is the cheaper and better answer, and that is what we recommend instead.",
      ],
    },
  ],
  related: [
    ["Drainage", "/residential/drainage/"],
    ["Area Drains", "/residential/drainage/area-drains/"],
    ["French Drains", "/residential/drainage/french-drains/"],
  ],
  faqs: [
    ["Do sump pumps require maintenance?", "Yes, modest but real: the basin should be kept clear of debris and the pump tested ahead of the wet season. A stuck float on a neglected pump is the most common failure we see."],
    ["What happens when the power goes out in a storm?", "A standard sump pump stops. Battery backup options exist for lots where an outage during a storm would flood something that matters. Whether that is worth it depends on what the system protects, and we will give you a straight answer."],
    ["Can a sump system connect to my french drains?", "Yes. On flat lots a sump basin is often the collection point that makes a french drain system work at all, since the collected water needs somewhere to go."],
  ],
  ctaLabel: "Request a free inspection",
};

export default function SumpPumps() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Sump Pump Installation", serviceType: "Drainage", description: metadata.description!, path: "/residential/drainage/sump-pumps/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Drainage", path: "/residential/drainage/" }, { label: "Sump Pumps", path: "/residential/drainage/sump-pumps/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
