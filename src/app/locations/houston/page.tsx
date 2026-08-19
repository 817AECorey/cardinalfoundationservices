import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* FULL POLISH: paid campaign destination, foundation-repair-led.
   Names 10 communities crawlably; message-matches the ad groups
   (cracks, sticking doors, existing quote). */

export const metadata: Metadata = {
  title: { absolute: "Foundation Repair in Houston | Cardinal Foundation Services" },
  description:
    "Foundation repair for Houston-area homes in Katy, Sugar Land, Pearland, Friendswood, Kingwood, and surrounding communities. Free inspection report with a mapped elevation survey and a written quote in one business day.",
  alternates: { canonical: "/locations/houston/" },
  openGraph: { images: [{ url: "/images/houston-area-pier-installation-multifamily.webp", width: 1600, height: 1200 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Locations", href: "/locations/" }, { label: "Houston" }],
  kicker: "Foundation Repair · Greater Houston",
  h1: "Foundation Repair in the Houston Area, Texas",
  heroImage: { src: "/images/houston-area-pier-installation-multifamily.webp", alt: "Pier sections staged at a Houston-area multifamily property", width: 1600, height: 1200 },
  intro: [
    "Houston-area homes sit on some of the most active clay soil in Texas, and the symptoms read the same across the metro: stair-step cracks in brick, doors and windows that stick, floors going out of level, gaps opening around frames. Cardinal Foundation Services provides foundation repair for homeowners across the Houston area, bringing the same engineer-owned, inspection-first approach we built in Fort Worth to Gulf Coast clay.",
  ],
  sections: [
    {
      h2: "Communities we serve",
      img: { src: "/images/loc-houston-communities.webp", alt: "Communities served across the Houston area" },
      paras: [
        "Katy, Sugar Land, Missouri City, Pearland, Friendswood, Kingwood, Spring, Cypress, Meyerland, and Bellaire, along with surrounding Houston-area neighborhoods. If you are near these communities and unsure whether we cover you, call and we will tell you straight.",
      ],
    },
    {
      h2: "What the free inspection report includes",
      img: { src: "/images/houston-multifamily-foundation-jobsite.webp", alt: "Foundation repair jobsite at a Houston-area multifamily property" },
      paras: [
        "Every inspection produces a written report: elevation readings mapped as a topographical survey of your foundation, so you can see exactly which areas have moved and by how much, plus notated visual findings inside and out. You leave with data about your home, not just a sales number. If repair is recommended, the written quote arrives within one business day. If it is not, we say so: sometimes the right answer is that you do not need a repair.",
      ],
    },
    {
      h2: "Already have a quote from another company?",
      paras: [
        "Bring it. Second opinions are a normal part of how Houston homeowners buy foundation repair, and our mapped elevation survey gives you an independent data point to weigh any proposal against, including pier counts. There is no charge and no pressure attached to looking.",
      ],
    },
    {
      h2: "Repairs we perform in the Houston area",
      bullets: [
        "Pressed concrete pilings and steel piers, matched to your soil and structure",
        "Drilled and helical piers where conditions call for them",
        "Pier and beam and crawl space repair for older homes",
        "Concrete slab lifting for sunken driveways, patios, and walks",
        "Drainage correction, because Gulf Coast water management is foundation protection",
      ],
      parasAfter: [
        "Residential work is backed by a transferable workmanship warranty, terms vary by service, and financing is available.",
      ],
    },
    {
      h2: "Commercial and multifamily",
      img: { src: "/images/loc-houston-multifamily.webp", alt: "Commercial and multifamily foundation work in Houston" },
      paras: [
        "Cardinal also performs commercial and multifamily foundation work in the Houston region, including a completed multifamily project in Baytown documented in our portfolio. Commercial inquiries route to an engineered assessment rather than the residential inspection path.",
      ],
    },
  ],
  related: [
    ["Residential Foundation Repair", "/residential/foundation-repair/"],
    ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
    ["Concrete Leveling", "/residential/concrete-leveling/"],
    ["Drainage", "/residential/drainage/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Projects", "/projects/"],
  ],
  faqs: [
    ["Do you charge for the inspection?", "No. Residential foundation inspections in our Houston service area are free and include the mapped elevation survey."],
    ["How fast can you get to my home?", "Scheduling is typically within days, and the written quote follows the inspection within one business day."],
    ["My builder or another company already quoted piers. Will you check it?", "Yes. That is one of the most common calls we take, and the elevation map gives you something objective to compare against the proposal you have."],
    ["Is a Fort Worth company really local enough for Houston work?", "Our crews perform Houston-area work directly, our Baytown multifamily project is on the site to review, and Gulf Coast clay behaves by the same physics as North Texas clay: it moves with moisture, and repairs have to reach below it."],
  ],
  ctaLabel: "Schedule your free inspection",
  ctaHeading: "Houston-area home showing symptoms?",
  ctaSub: "Free inspection with a mapped elevation survey. Written quote in one business day.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Foundation Repair in the Houston Area", serviceType: "Foundation Repair", description: metadata.description!, path: "/locations/houston/", areaServed: ["Houston", "Katy", "Sugar Land", "Missouri City", "Pearland", "Friendswood", "Kingwood", "Spring", "Cypress", "Meyerland", "Bellaire"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Locations" }, { label: "Houston", path: "/locations/houston/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
