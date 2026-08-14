import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Category hub per content/27_hub-concrete-construction.md (verbatim intro).
   Child pages (slab-pouring, slab-repair, expansion-joint-mastic-repair,
   structural-crack-repair) ship in the snapshot-parity pass and enter as
   cards then. */

export const metadata: Metadata = {
  title: { absolute: "Commercial Concrete Construction & Repair in DFW | Cardinal" },
  description:
    "Commercial Concrete Construction & Repair for commercial properties across Dallas-Fort Worth: slab pouring, slab repair, expansion joint and mastic repair, and structural crack repair. Engineered scope, self-performed crews.",
  alternates: { canonical: "/commercial/concrete-construction/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Construction" }],
  kicker: "Commercial & Industrial · Dallas-Fort Worth",
  h1: "Commercial Concrete Construction & Repair",
  heroImage: { src: "/images/concrete-construction-slab-forms-rebar.webp", alt: "Formed slab with reinforcement ready for pour", width: 1600, height: 1200 },
  intro: [
    "Commercial slab pouring, slab repair, expansion joint and mastic repair, and structural crack repair across Dallas-Fort Worth, scoped from an engineered assessment and executed by Cardinal's own crews around your operations. Each service below carries its own page with scope detail and documented project links.",
    "Every scope starts with the structural read: conditions, probable root cause, and documented engineered bids ownership can review. Work carries a workmanship warranty, terms vary by service.",
  ],
  sections: [],
  childCards: [
    { t: "Slab Pouring", d: "Reinforced structural slabs for warehouses, retail, office, and industrial facilities, with subgrade prep built for expansive clay.", href: "/commercial/concrete-construction/slab-pouring/" },
    { t: "Slab Repair", d: "Commercial slab repair and leveling engineered for forklifts, machinery, racking, and vehicle traffic.", href: "/commercial/concrete-construction/slab-repair/" },
    { t: "Expansion Joint & Mastic Repair", d: "Joint sealing, replacement, and semi-rigid fillers that protect slabs from moisture intrusion and wear.", href: "/commercial/concrete-construction/expansion-joint-mastic-repair/" },
    { t: "Structural Crack Repair", d: "Epoxy injection and reinforcement that restore load capacity and address the underlying cause.", href: "/commercial/concrete-construction/structural-crack-repair/" },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Tilt Wall", "/commercial/tilt-wall/"],
    ["Projects", "/projects/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Concrete Construction & Repair", description: metadata.description!, path: "/commercial/concrete-construction/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Construction", path: "/commercial/concrete-construction/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
