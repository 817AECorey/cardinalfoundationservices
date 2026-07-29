import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Consolidates 2 live pages. Value-oriented slab work audience. */

export const metadata: Metadata = {
  title: { absolute: "Mudjacking & Concrete Leveling for Homes in DFW | Cardinal" },
  description:
    "Mudjacking lifts sunken driveways, patios, and walkways back to level with a proven, economical slurry method. Concrete leveling for DFW homes. Free evaluation.",
  alternates: { canonical: "/residential/concrete-leveling/mudjacking/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Concrete Leveling", href: "/residential/concrete-leveling/" }, { label: "Mudjacking" }],
  kicker: "Concrete Leveling · DFW",
  h1: "Mudjacking for Sunken Concrete",
  intro: [
    "Mudjacking is the original concrete leveling method: a cement-based slurry pumped beneath a settled slab to fill the voids under it and raise it back to level. It has been lifting driveways, patios, and walkways for decades because it works, and for the right slab it remains the economical way to fix sunken concrete without tearing it out, across Dallas-Fort Worth and the Houston area.",
  ],
  sections: [
    {
      h2: "How mudjacking works",
      paras: [
        "Ports are drilled through the settled slab, and the slurry is pumped beneath it under controlled pressure. The material fills the voids that allowed the drop, then lifts the slab toward level. Once cured, the slurry forms a dense, stable base under the concrete. The slab you already paid for goes back to work, at a fraction of replacement cost.",
      ],
    },
    {
      h2: "Where mudjacking fits at homes",
      bullets: [
        "Driveways and approaches with settled sections",
        "Patios, walkways, and sidewalks",
        "Porch and garage slabs",
        "Uneven joints creating trip points",
      ],
    },
    {
      h2: "Mudjacking or foam?",
      paras: [
        "Mudjacking uses a heavier traditional slurry and larger ports; polyurethane foam is lighter, cures in minutes, and uses smaller ports at a higher material cost. One is not universally better. Slab condition, soil, access, and budget pick the method, and since Cardinal installs both, the recommendation is about your slab rather than our truck. The foam page covers the other side of the comparison.",
        "As with all lifting work: if the settlement is being driven by drainage failure or foundation movement, the evaluation identifies it, because the durable fix addresses the cause.",
        "Residential work carries a transferable workmanship warranty, terms vary by service, with financing available and a written quote within one business day.",
      ],
    },
  ],
  related: [
    ["Concrete Leveling", "/residential/concrete-leveling/"],
    ["Concrete Slab Lifting (Poly)", "/residential/concrete-leveling/polyurethane-foam-injection/"],
  ],
  faqs: [
    ["Is mudjacking cheaper than replacing the concrete?", "Substantially, in typical cases, because the existing slab is preserved rather than demolished and repoured."],
    ["How long does mudjacking last?", "The slurry base is stable for the long term. Service life depends on the soil and water conditions beneath, which is why cause correction is part of our evaluation."],
    ["How soon can I drive on it?", "Mudjacking slurry needs cure time before heavy loads, typically a day or more depending on conditions. Foam is the faster-return option when same-day traffic matters."],
    ["Will it work on badly cracked slabs?", "Heavily fractured slabs may not lift cleanly and are evaluated honestly: sometimes lifting is right, sometimes partial replacement is the better spend."],
  ],
  ctaLabel: "Schedule a free evaluation",
  ctaHeading: "Sunken driveway, patio, or walkway?",
  ctaSub: "A proven, economical lift, without tearing out the slab.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Mudjacking and Concrete Leveling", description: metadata.description!, path: "/residential/concrete-leveling/mudjacking/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Concrete Leveling", path: "/residential/concrete-leveling/" }, { label: "Mudjacking", path: "/residential/concrete-leveling/mudjacking/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
