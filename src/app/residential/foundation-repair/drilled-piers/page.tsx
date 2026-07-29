import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Drilled Piers for Foundation Repair in DFW | Cardinal Foundation Services" },
  description:
    "Drilled concrete piers for DFW homes, patios, decks, and additions. Poured-in-place reinforced piers for long-term stability in North Texas soil. Free inspection report.",
  alternates: { canonical: "/residential/foundation-repair/drilled-piers/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Foundation Repair", href: "/residential/foundation-repair/" }, { label: "Drilled Piers" }],
  kicker: "Residential Foundation Repair · DFW",
  h1: "Drilled Piers for Home Foundation Repair",
  intro: [
    "Drilled piers are reinforced concrete columns poured in place beneath a structure: a shaft is drilled to design depth, steel reinforcement is set, and concrete is placed to create a solid, engineered support. They are a long-trusted system for stabilizing homes, additions, patio decks, staircases, and other structures across Dallas-Fort Worth and the Houston area, and one of several pier types Cardinal installs based on what the inspection finds.",
  ],
  sections: [
    {
      h2: "How drilled piers work",
      paras: [
        "Unlike driven systems, drilled piers are constructed in the ground rather than pushed into it. The drilled shaft allows steel-reinforced concrete to be formed at a controlled depth and diameter, sized to the load above it. In stable strata below the active clay layer, that produces a high-capacity support with excellent long-term performance, which is why drilled piers are also a mainstay of new construction across Texas.",
      ],
    },
    {
      h2: "Where drilled piers fit",
      bullets: [
        "Homes needing engineered support where soil and access favor a poured system",
        "Additions, porches, patio decks, and exterior staircases that have settled",
        "Structures where a specific pier diameter and reinforcement design is called for",
        "New construction piers for builders, which Cardinal also self-performs",
      ],
      parasAfter: [
        "Drilled piers, steel piers, pressed concrete pilings, and helical piers each carry different strengths. The comparison guide walks through all of them, and the inspection determines which one your structure actually needs. Sometimes the honest finding is that you do not need piers at all.",
      ],
    },
    {
      h2: "What the inspection includes",
      paras: [
        "Elevation readings mapped across the foundation so you can see what has moved, notated visual findings, and a clear recommendation. If work is recommended, the written quote arrives within one business day, financing is available, and the work carries a transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
  ],
  faqs: [
    ["What is the difference between drilled piers and pressed piers?", "Pressed pilings are precast concrete sections pushed into the soil using the weight of the structure. Drilled piers are poured in place with steel reinforcement at a designed depth and diameter. The right choice depends on soil, load, and access."],
    ["How deep are drilled piers installed?", "To the depth the design calls for, set below the active soil zone wherever conditions allow. Depth is determined by soil conditions and the load being supported."],
    ["Can drilled piers support small structures like decks and stairs?", "Yes, and they are frequently the best fit for exactly those structures, which need real support but not a full foundation system."],
    ["How long does installation take?", "Most residential drilled pier projects run from a few days to about a week depending on pier count and access. Your written quote includes the schedule."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Settled addition, porch, or home?",
  ctaSub: "The inspection determines the system. Free, with a mapped elevation survey.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Drilled Pier Foundation Repair", description: metadata.description!, path: "/residential/foundation-repair/drilled-piers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Foundation Repair", path: "/residential/foundation-repair/" }, { label: "Drilled Piers", path: "/residential/foundation-repair/drilled-piers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
