import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-foundation-repair-contractors/post-tension-repair-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Commercial Post-Tension Repair Contractors in DFW & Houston | Cardinal" },
  description:
    "Engineered commercial post-tension slab repair across DFW, Houston, and Texas: tendon investigation, replacement and re-anchoring, and structural crack repair for offices, retail, parking structures, warehouses, and industrial slabs.",
  alternates: { canonical: "/commercial/foundation-repair/post-tension-repair/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Commercial Foundation Repair", href: "/services/commercial-foundation-repair/" }, { label: "Post-Tension Repair" }],
  kicker: "Commercial Foundation Repair · DFW",
  h1: "Commercial Post-Tension Slab Repair",
  intro: [
    "Post-tension slab systems are widely used in commercial construction across North Texas. When cables fail, corrode, or lose tension, structural performance can decline rapidly. Cardinal Foundation Services provides engineered post-tension repair across Texas, from our Fort Worth base serving Dallas-Fort Worth, Houston, and commercial markets statewide, restoring structural integrity in commercial slabs used in warehouses, office buildings, retail centers, parking structures, and industrial facilities.",
  ],
  sections: [
    {
      h2: "What is post-tension repair?",
      img: { src: "/images/commercial-post-tension-repair.webp", alt: "Commercial post-tension repair" },
      paras: [
        "Post-tension slabs use tensioned steel tendons embedded within concrete to increase strength and reduce cracking. When tendons fail, slabs may deflect, crack, or lose load capacity. Commercial repair involves locating compromised tendons, performing safe de-tensioning procedures when necessary, replacing or re-anchoring cables, and restoring slab integrity under engineered oversight.",
      ],
    },
    {
      h2: "Our commercial post-tension services",
      bullets: [
        ["Tendon investigation and assessment. ", "Evaluate slab performance and locate compromised cables."],
        ["Tendon replacement and re-anchoring. ", "Restore proper structural tension capacity."],
        ["Structural slab crack repair. ", "Engineered repair of cracking associated with tendon failure."],
        ["Integrated foundation stabilization. ", "If soil movement is present, projects coordinate with commercial foundation repair."],
      ],
    },
    {
      h2: "Where post-tension systems are used",
      img: { src: "/images/post-tension-slab-cable-system.webp", alt: "Post-tension slab cable system" },
      paras: [
        "Office buildings, retail centers, parking structures, industrial facilities, warehouses, and multi-tenant developments. Serving Fort Worth, Dallas, Arlington, Irving, Grand Prairie, Plano, Garland, Mesquite, Grapevine, Mansfield, and surrounding DFW metroplex cities.",
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Residential Post-Tension Slab Repair", "/residential/foundation-repair/post-tension-slab-repair/"],
    ["Concrete Construction", "/commercial/concrete-construction/"],
  ],
  faqs: [
    ["How can I tell if a post-tension cable has failed?", "Signs include widening slab cracks, uneven floor elevations, or exposed tendon ends during renovations."],
    ["Can post-tension slabs be repaired instead of replaced?", "Yes, many failures can be corrected through targeted tendon repair."],
    ["Is engineering oversight required?", "Commercial post-tension systems typically require structural engineering review."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Suspect a tendon problem?",
  ctaSub: "Schedule a DFW site evaluation to protect your building and maintain operational stability.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Post-Tension Slab Repair", description: metadata.description!, path: "/commercial/foundation-repair/post-tension-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Commercial Foundation Repair", path: "/services/commercial-foundation-repair/" }, { label: "Post-Tension Repair", path: "/commercial/foundation-repair/post-tension-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
