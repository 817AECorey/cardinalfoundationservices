import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Category hub per content/27_hub-retaining-walls.md (verbatim intro).
   Child pages (structural-repair, tieback-anchors) ship in the
   snapshot-parity pass. */

export const metadata: Metadata = {
  title: { absolute: "Commercial Retaining Walls in DFW | Cardinal Foundation Services" },
  description:
    "Commercial Retaining Walls for commercial properties across Dallas-Fort Worth: structural retaining wall repair and tieback anchor systems. Engineered scope, self-performed crews.",
  alternates: { canonical: "/commercial/retaining-walls/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Retaining Walls" }],
  kicker: "Commercial & Industrial · Dallas-Fort Worth",
  h1: "Commercial Retaining Walls",
  heroImage: { src: "/images/retaining-wall-repair-crew.webp", alt: "Crew working at a stone retaining wall during repair", width: 1600, height: 1200 },
  intro: [
    "Commercial structural retaining wall repair and tieback anchor systems across Dallas-Fort Worth, scoped from an engineered assessment and executed by Cardinal's own crews around your operations. Each service below carries its own page with scope detail and documented project links.",
    "Every scope starts with the structural read: conditions, probable root cause, and documented engineered bids ownership can review. Work carries a workmanship warranty, terms vary by service.",
  ],
  sections: [],
  childCards: [
    { t: "Structural Wall Repair", d: "Stabilize, reinforce, and restore commercial retaining wall systems, correcting the soil and drainage causes behind the movement.", href: "/commercial/retaining-walls/structural-repair/" },
    { t: "Tieback Anchors", d: "Deep anchoring systems that resist lateral earth pressure and restore wall alignment without full reconstruction.", href: "/commercial/retaining-walls/tieback-anchors/" },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Commercial Drainage", "/commercial/drainage/"],
    ["Residential Retaining Walls", "/residential/retaining-walls/"],
    ["Projects", "/projects/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Retaining Walls", description: metadata.description!, path: "/commercial/retaining-walls/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Retaining Walls", path: "/commercial/retaining-walls/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
