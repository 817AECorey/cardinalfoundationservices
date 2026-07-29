import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-retaining-wall-contractors/structural-retaining-wall-repair-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Structural Retaining Wall Repair Contractors in DFW | Cardinal" },
  description:
    "Engineered commercial retaining wall repair in DFW: stabilize, reinforce, and restore wall systems, addressing both the visible distress and the soil or drainage causes behind it.",
  alternates: { canonical: "/commercial/retaining-walls/structural-repair/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Retaining Walls", href: "/commercial/retaining-walls/" }, { label: "Structural Repair" }],
  kicker: "Commercial Retaining Walls · DFW",
  h1: "Commercial Retaining Wall Repair",
  intro: [
    "Retaining wall failure can compromise site grading, drainage, and structural safety. Cardinal Foundation Services provides engineered commercial retaining wall repair across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. We stabilize, reinforce, and restore retaining wall systems used in commercial developments, industrial properties, and municipal infrastructure. Our approach addresses both visible wall distress and the underlying soil or drainage causes contributing to movement.",
  ],
  sections: [
    {
      h2: "What is structural retaining wall repair?",
      paras: [
        "Structural retaining wall repair involves correcting cracking, displacement, settlement, and lateral pressure damage affecting load-bearing wall systems. In DFW, expansive clay soils and hydrostatic buildup are common contributors to retaining wall distress. Our repairs focus on restoring structural integrity while improving drainage and soil stability to prevent recurrence, with coordination with general contractors and minimal disruption to active operations.",
      ],
    },
    {
      h2: "Our commercial retaining wall repair services",
      bullets: [
        ["Crack and structural reinforcement. ", "Repair structural cracking and reinforce compromised wall sections."],
        ["Wall realignment and stabilization. ", "Correct bowing or leaning walls through anchor systems or structural reinforcement."],
        ["Drainage correction behind walls. ", "Relieve hydrostatic pressure contributing to movement, in coordination with commercial drainage systems."],
        ["Integrated foundation coordination. ", "If wall movement impacts building foundations, projects may involve commercial foundation repair."],
      ],
    },
    {
      h2: "Where structural retaining wall repair is used",
      paras: [
        "Commercial developments, office parks, retail centers, industrial facilities, municipal and government projects, and multi-tenant commercial sites, with engineered repair methods and soil-and-drainage-focused correction.",
      ],
    },
  ],
  related: [
    ["Commercial Retaining Walls", "/commercial/retaining-walls/"],
    ["Tieback Anchors", "/commercial/retaining-walls/tieback-anchors/"],
    ["Commercial Drainage", "/commercial/drainage/"],
    ["Residential Retaining Walls", "/residential/retaining-walls/"],
  ],
  faqs: [
    ["What causes retaining wall failure in DFW?", "Expansive clay soils and hydrostatic buildup are the most common contributors: water accumulates behind the wall, pressure grows, and the wall moves."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "A wall losing its argument with the soil?",
  ctaSub: "Structural integrity restored, cause corrected.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Retaining Wall Repair", description: metadata.description!, path: "/commercial/retaining-walls/structural-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Retaining Walls", path: "/commercial/retaining-walls/" }, { label: "Structural Repair", path: "/commercial/retaining-walls/structural-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
