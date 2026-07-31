import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/foundation-repair-fort-worth/slab-repair-fort-worth/). */

export const metadata: Metadata = {
  title: { absolute: "Slab Foundation Repair in Fort Worth & DFW | Cardinal Foundation Services" },
  description:
    "Slab repair for DFW homes: foundation crack repair, sunken slab correction, and settlement repair on conventional and post-tension slabs. Free inspection report with a mapped elevation survey.",
  alternates: { canonical: "/residential/foundation-repair/slab-repair/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Foundation Repair", href: "/residential/foundation-repair/" }, { label: "Slab Repair" }],
  kicker: "Residential Foundation Repair · DFW",
  h1: "Slab Foundation Repair",
  heroImage: { src: "/images/settled-concrete-slab-foundation-crack.webp", alt: "Concrete slab showing settlement cracking, illustrative condition photo", width: 1400, height: 951 },
  intro: [
    "Slab repair maintains the structural integrity of your home, preventing further damage from cracks, uneven settling, and erosion under the slab. Cardinal repairs slab foundations across Dallas-Fort Worth and the Houston area, addressing the movement and the cause behind it, on both conventional and post-tension foundations.",
  ],
  sections: [
    {
      h2: "Our slab repair services",
      bullets: [
        ["Concrete slab repair. ", "Repair cracked or damaged slab foundations, restoring stability and surface evenness."],
        ["Foundation crack repair. ", "Address and mend foundation cracks to prevent water ingress and further structural damage."],
        ["Sunken slab repair. ", "Lift and stabilize sunken slab sections with pier systems or slab jacking, correcting uneven foundations."],
      ],
    },
    {
      h2: "How slab repair is scoped",
      paras: [
        "The free inspection report includes elevation readings mapped across the slab and notated findings, so the recommendation follows what the foundation is actually doing rather than what a crack looks like. Where movement is structural, pier systems restore support; where the slab has settled over failed soil, lifting corrects elevation; where a crack is seasonal, we say so. When work is recommended: written quote within one business day, financing available, transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Post-Tension Slab Repair", "/residential/foundation-repair/post-tension-slab-repair/"],
    ["Concrete Slab Lifting (Poly)", "/residential/concrete-leveling/polyurethane-foam-injection/"],
    ["Concrete Crack Repair", "/residential/concrete-leveling/concrete-crack-repair/"],
  ],
  faqs: [
    ["How do I know if my slab needs repair?", "Visible cracks, uneven floors, and doors that will not close are key indicators. An inspection determines whether the cause is structural."],
    ["What does slab repair cost?", "Costs vary with what the inspection finds; you receive a written quote within one business day of the assessment."],
    ["How long does slab repair take?", "Duration depends on the extent of the damage; most residential scopes run days, not weeks, and the quote includes the schedule."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Cracks or settling in your slab?",
  ctaSub: "Cause-first repair, built on mapped elevation data.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Slab Foundation Repair", description: metadata.description!, path: "/residential/foundation-repair/slab-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Foundation Repair", path: "/residential/foundation-repair/" }, { label: "Slab Repair", path: "/residential/foundation-repair/slab-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
