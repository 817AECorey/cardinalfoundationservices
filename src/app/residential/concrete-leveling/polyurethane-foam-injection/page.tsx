import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Leads with slab lifting / foam leveling / sunken concrete buyer language
   per spec. Consolidates 2 live pages. */

export const metadata: Metadata = {
  title: { absolute: "Concrete Slab Lifting & Foam Leveling for Homes in DFW | Cardinal" },
  description:
    "Sunken driveway, patio, or interior slab? Polyurethane foam injection lifts settled concrete back to level in hours. Clean, fast slab lifting for DFW homes.",
  alternates: { canonical: "/residential/concrete-leveling/polyurethane-foam-injection/" },
  openGraph: { images: [{ url: "/images/polyurethane-foam-injection-slab-lifting.webp", width: 1400, height: 1005 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Concrete Leveling", href: "/residential/concrete-leveling/" }, { label: "Slab Lifting (Poly)" }],
  kicker: "Concrete Leveling · DFW",
  h1: "Concrete Slab Lifting with Polyurethane Foam",
  heroImage: { src: "/images/polyurethane-foam-injection-slab-lifting.webp", alt: "Rendering of polyurethane foam injection lifting a settled concrete slab", width: 1400, height: 1005 },
  intro: [
    "A sunken driveway slab, a settled patio, a garage floor that dips toward the door: settled concrete is one of the most common problems homeowners across Dallas-Fort Worth and the Houston area live with, and one of the fastest to fix. Polyurethane foam injection lifts settled concrete back to level by filling the failed soil beneath it, usually in hours, with the slab back in use the same day.",
  ],
  sections: [
    {
      h2: "How foam lifting works",
      img: { src: "/images/polyurethane-foam-injection-lift.webp", alt: "Polyurethane foam injection lifting a slab" },
      paras: [
        "Small injection ports are drilled through the settled slab. Structural polyurethane is injected beneath it, where it expands, fills the voids that let the slab drop, and lifts the concrete back toward level. The foam cures in minutes, is engineered to bear load, and does not wash out the way soil does. Compared with tearing out and repouring, foam lifting is faster, cleaner, far less disruptive, and preserves the concrete you already have.",
      ],
    },
    {
      h2: "What we lift and level at homes",
      bullets: [
        "Driveways and driveway approaches",
        "Patios and pool decks",
        "Sidewalks and walkways",
        "Garage floors",
        "Interior slab floors that have settled",
        "Steps and stoops pulling away from the house",
      ],
      parasAfter: [
        "If the settlement traces to a drainage problem or foundation movement rather than simple soil failure, the evaluation says so, because lifting a slab over an active washout only rents the result.",
      ],
    },
    {
      h2: "Foam or mudjacking?",
      paras: [
        "Both lift settled concrete. Foam is lighter, faster-curing, and injects through smaller ports; mudjacking uses a traditional slurry and can be the economical fit for certain slabs. We install both, and the recommendation follows the slab, the soil, and your budget rather than a house preference. See the mudjacking page for the comparison.",
        "Residential work is backed by a transferable workmanship warranty, terms vary by service, with financing available and a written quote within one business day of your evaluation.",
      ],
    },
  ],
  related: [
    ["Concrete Leveling", "/residential/concrete-leveling/"],
    ["Mudjacking", "/residential/concrete-leveling/mudjacking/"],
  ],
  faqs: [
    ["How long before I can use the concrete again?", "Typically the same day. Polyurethane reaches working strength in minutes, and most driveways return to vehicle traffic within hours."],
    ["Will the lift close the cracks in my slab?", "Lifting realigns the slab sections and closes many separation gaps, and existing cracks remain part of the slab. Crack repair can be paired with lifting where appearance matters."],
    ["How long does foam lifting last?", "The foam itself is stable and does not degrade in soil. Longevity in service depends on the ground beneath it, which is why we identify and address the cause of the settlement, not just the symptom."],
    ["Is foam injection safe next to my foundation?", "Yes, applied correctly, and it is also used beneath foundations themselves as void fill. Injection plans are set by trained crews based on the slab and soil conditions."],
  ],
  ctaLabel: "Schedule a free evaluation",
  ctaHeading: "Sunken concrete at your home?",
  ctaSub: "Lifted back to level, usually in hours, back in use the same day.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Concrete Slab Lifting with Polyurethane Foam", description: metadata.description!, path: "/residential/concrete-leveling/polyurethane-foam-injection/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Concrete Leveling", path: "/residential/concrete-leveling/" }, { label: "Slab Lifting (Poly)", path: "/residential/concrete-leveling/polyurethane-foam-injection/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
