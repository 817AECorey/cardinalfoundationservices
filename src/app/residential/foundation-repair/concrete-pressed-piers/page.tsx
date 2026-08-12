import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/foundation-repair-fort-worth/concrete-pressed-piers/).
   Old copy's superlatives removed per hard rules; coverage carried. */

export const metadata: Metadata = {
  title: { absolute: "Concrete Pressed Piers in DFW | Cardinal Foundation Services" },
  description:
    "Pressed concrete pilings for DFW homes: the region's most common and most economical repair pier, pressed to resistance using the structure's own weight. Free inspection report with a mapped elevation survey.",
  alternates: { canonical: "/residential/foundation-repair/concrete-pressed-piers/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Foundation Repair", href: "/residential/foundation-repair/" }, { label: "Concrete Pressed Piers" }],
  kicker: "Residential Foundation Repair · DFW",
  h1: "Concrete Pressed Piers",
  heroImage: { src: "/images/concrete-pressed-piling-installation-fort-worth.webp", alt: "Concrete pressed piling installation beneath a residential foundation", width: 1400, height: 788 },
  intro: [
    "Pressed concrete pilings are the most common repair pier in North Texas for a simple reason: for lighter homes on lots where soil resistance is reached at decent bearing depth, they deliver stability at the lowest installed cost. Cardinal installs concrete pressed piers across Dallas-Fort Worth and the Houston area as one of five pier systems, and the inspection findings, not a house preference, decide when they are the right call.",
  ],
  sections: [
    {
      h2: "How pressed piers work",
      img: { src: "/images/pier-jacks-under-grade-beam.webp", alt: "Hydraulic jacks supporting a grade beam during pier installation" },
      paras: [
        "Precast concrete cylinders are hydraulically pressed into the soil in sequence, using the structure's own weight as the reaction force, until soil resistance stops them. The home is then lifted toward level and the load rests on the stacked pilings. It is a proven, economical method for leveling settled slab foundations, and our crews guide you through the process and explain what is happening under your home at each step.",
      ],
    },
    {
      h2: "When pressed piers fit, and when they do not",
      paras: [
        "Pressed pilings perform well under lighter structures on shallower active soils. Where the active clay zone runs deep or the structure is heavy, they can stop within soil that still moves with the weather, which is when steel, drilled, or helical systems earn their higher cost. The comparison guide covers the trade-offs plainly, and every recommendation follows the mapped elevation data from your free inspection report. When work is recommended: written quote within one business day, financing available, transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
  ],
  faqs: [
    ["Are pressed concrete piers reliable?", "Yes, in the right conditions: lighter homes and soils where the press reaches decent bearing. Longevity comes from what the pier bears on, which the inspection determines."],
    ["Why are pressed piers the most economical option?", "Precast sections and the press method install quickly with the structure providing the driving force, keeping material and installation cost down."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "The economical pier, when it fits.",
  ctaSub: "The inspection data decides. Free, with a mapped elevation survey.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Concrete Pressed Piers", description: metadata.description!, path: "/residential/foundation-repair/concrete-pressed-piers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Foundation Repair", path: "/residential/foundation-repair/" }, { label: "Concrete Pressed Piers", path: "/residential/foundation-repair/concrete-pressed-piers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
