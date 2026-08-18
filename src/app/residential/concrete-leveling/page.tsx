import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* INTERIM HUB. The nav addendum requires a Concrete Leveling hub carrying
   its children; no finished hub copy exists in the content bundle yet.
   Body below is assembled from the approved child-page copy (verbatim
   sentences), pending the hub content / snapshot parity pass. */

export const metadata: Metadata = {
  title: { absolute: "Concrete Leveling for Homes in DFW | Cardinal Foundation Services" },
  description:
    "Concrete leveling for DFW homes: polyurethane foam slab lifting and mudjacking for sunken driveways, patios, walkways, and interior slabs. Free evaluation.",
  alternates: { canonical: "/residential/concrete-leveling/" },
  openGraph: { images: [{ url: "/images/polyurethane-foam-injection-slab-lifting.webp", width: 1400, height: 1005 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Concrete Leveling" }],
  kicker: "DFW & Houston",
  h1: "Concrete Leveling for Homes in DFW",
  heroImage: { src: "/images/polyurethane-foam-injection-slab-lifting.webp", alt: "Rendering of polyurethane foam injection lifting a settled concrete slab", width: 1400, height: 1005 },
  intro: [
    "Settled concrete is one of the most common problems homeowners across Dallas-Fort Worth and the Houston area live with, and one of the fastest to fix. Cardinal lifts sunken driveways, patios, walkways, garage floors, and interior slabs back to level, and installs both of the proven methods, so the recommendation is about your slab rather than our truck.",
  ],
  sections: [
    {
      h2: "Two ways to lift a slab",
      bullets: [
        ["Concrete slab lifting with polyurethane foam. ", "Structural polyurethane is injected beneath the settled slab, where it expands, fills the voids that let the slab drop, and lifts the concrete back toward level. The foam cures in minutes, and most slabs are back in use the same day."],
        ["Mudjacking. ", "The original concrete leveling method: a cement-based slurry pumped beneath a settled slab to fill the voids under it and raise it back to level. For the right slab it remains the economical way to fix sunken concrete without tearing it out."],
      ],
      parasAfter: [
        "One is not universally better. Slab condition, soil, access, and budget pick the method. If the settlement traces to a drainage problem or foundation movement rather than simple soil failure, the evaluation says so, because lifting a slab over an active washout only rents the result.",
        "Residential work is backed by a transferable workmanship warranty, terms vary by service, with financing available and a written quote within one business day of your evaluation.",
      ],
    },
  ],
  related: [
    ["Stamped Concrete", "/stamped-concrete-contractor-fort-worth/"],
    ["Concrete Slab Lifting (Poly)", "/residential/concrete-leveling/polyurethane-foam-injection/"],
    ["Mudjacking", "/residential/concrete-leveling/mudjacking/"],
    ["Drainage", "/residential/drainage/"],
    ["Foundation Repair", "/residential/foundation-repair/"],
  ],
  faqs: [],
  ctaLabel: "Schedule a free evaluation",
  ctaHeading: "Sunken concrete at your home?",
  ctaSub: "Foam or mudjacking: the recommendation follows the slab, the soil, and your budget.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Concrete Leveling", description: metadata.description!, path: "/residential/concrete-leveling/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Concrete Leveling", path: "/residential/concrete-leveling/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
