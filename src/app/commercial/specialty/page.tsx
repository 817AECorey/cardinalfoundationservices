import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Category hub per content/27_hub-specialty.md (verbatim intro). Child
   pages (parking-garage-repair, lube-pit-foundation-repair,
   metal-deck-slab-repair, balcony-repair, lightweight-concrete-repair,
   historical-building-foundation-repair, waterproofing, waters-of-the-us)
   ship in the snapshot-parity pass. */

export const metadata: Metadata = {
  title: { absolute: "Specialty Structural Services in DFW | Cardinal Foundation Services" },
  description:
    "Specialty Structural Services for commercial properties across Dallas-Fort Worth: parking garages, lube pits, metal deck slabs, balconies, lightweight concrete, historical buildings, waterproofing, waters of the US compliance, erosion work, and emergency shoring. Engineered scope, self-performed crews.",
  alternates: { canonical: "/commercial/specialty/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services" }],
  kicker: "Commercial & Industrial · Dallas-Fort Worth",
  h1: "Specialty Structural Services",
  intro: [
    "Commercial parking garages, lube pits, metal deck slabs, balconies, lightweight concrete, historical buildings, waterproofing, waters of the US compliance, erosion work, and emergency shoring across Dallas-Fort Worth, scoped from an engineered assessment and executed by Cardinal's own crews around your operations. Each service below carries its own page with scope detail and documented project links.",
    "Every scope starts with the structural read: conditions, probable root cause, and a documented engineered bid ownership can review. Work carries a workmanship warranty, terms vary by service.",
  ],
  sections: [],
  childCards: [
    { t: "Parking Garage Repair", d: "Concrete and structural repair for multi-level parking garages, decks, and parking structures.", href: "/commercial/specialty/parking-garage-repair/" },
    { t: "Lube Pit Foundation Repair", d: "Below-grade stabilization for automotive shops, dealerships, and fleet maintenance facilities.", href: "/commercial/specialty/lube-pit-foundation-repair/" },
    { t: "Metal Deck Slab Repair", d: "Engineered restoration of metal deck and pan-pour slab systems on elevated structures.", href: "/commercial/specialty/metal-deck-slab-repair/" },
    { t: "Balcony Repair", d: "Structural balcony repair, waterproofing, and railing anchor restoration for multifamily and commercial buildings.", href: "/commercial/specialty/balcony-repair/" },
    { t: "Lightweight Concrete Repair", d: "Elevated lightweight slab restoration that preserves strength and fire rating.", href: "/commercial/specialty/lightweight-concrete-repair/" },
    { t: "Historical Building Foundation Repair", d: "Preservation-conscious foundation repair for historic homes, churches, and landmarks.", href: "/commercial/specialty/historical-building-foundation-repair/" },
    { t: "Waterproofing", d: "Foundation, retaining wall, and deck waterproofing against Texas soils and weather.", href: "/commercial/specialty/waterproofing/" },
    { t: "Waters of the US (WOTUS)", d: "Permitting, compliance, and construction for projects near regulated waters.", href: "/commercial/specialty/waters-of-the-us/" },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Structural Repair", "/commercial/structural-repair/"],
    ["Projects", "/projects/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Specialty Structural Services", description: metadata.description!, path: "/commercial/specialty/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
