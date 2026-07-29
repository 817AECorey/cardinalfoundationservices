import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /kansas-city-foundation-repair/).
   RULE (nav addendum): this page appears in NO navigation and NO footer;
   sitemap.xml only. Old copy's "homegrown/industry-leading/countless"
   claims removed per hard rules; service coverage carried. */

export const metadata: Metadata = {
  title: { absolute: "Foundation Repair in Kansas City | Cardinal Foundation Services" },
  description:
    "Foundation repair, basement waterproofing, crawl space encapsulation, concrete leveling, and drainage solutions for Kansas City properties from Cardinal Foundation Services.",
  alternates: { canonical: "/kansas-city-foundation-repair/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Kansas City" }],
  kicker: "Service Area · Kansas City",
  h1: "Foundation Repair in Kansas City",
  intro: [
    "Cardinal Foundation Services serves Kansas City property owners with foundation repair and stabilization, basement waterproofing, crawl space encapsulation, concrete leveling and repair, and drainage solutions, built on the same inspection-first approach we run in Texas: measure first, recommend from the findings, and back the work with a transferable workmanship warranty, terms vary by service.",
  ],
  sections: [
    {
      h2: "Services in the Kansas City area",
      bullets: [
        ["Foundation repair and stabilization. ", "Pier systems and structural repairs matched to the soil and the structure."],
        ["Basement waterproofing. ", "Protection against water intrusion and the damage it causes below grade."],
        ["Crawl space encapsulation. ", "Moisture control that protects the structure and indoor air quality."],
        ["Concrete leveling and repair. ", "Settled slabs, driveways, and walkways lifted back to level."],
        ["Drainage solutions. ", "Water management that addresses the cause behind foundation movement."],
      ],
      parasAfter: [
        "Kansas City's soil and weather conditions swing hard between seasons, and foundations feel every cycle. An inspection determines the cause before anything is recommended, and sometimes the honest answer is that you do not need a repair.",
      ],
    },
  ],
  faqs: [],
  ctaLabel: "Schedule a free consultation",
  ctaHeading: "Kansas City property showing symptoms?",
  ctaSub: "Inspection first. The recommendation follows the findings.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Foundation Repair in Kansas City", serviceType: "Foundation Repair", description: metadata.description!, path: "/kansas-city-foundation-repair/", areaServed: ["Kansas City"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Kansas City", path: "/kansas-city-foundation-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
