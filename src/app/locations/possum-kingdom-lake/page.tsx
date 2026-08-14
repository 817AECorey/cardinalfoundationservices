import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Merge destination x3: PK structural, PK concrete leveling, PK balcony
   (content/23). */

export const metadata: Metadata = {
  title: { absolute: "Foundation & Structural Repair at Possum Kingdom Lake | Cardinal" },
  description:
    "Structural foundation repair, concrete leveling, and balcony repair for Possum Kingdom Lake properties: lake homes, slopes, and structures that need real engineering attention.",
  alternates: { canonical: "/locations/possum-kingdom-lake/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Locations", href: "/locations/" }, { label: "Possum Kingdom Lake" }],
  kicker: "Locations · Possum Kingdom Lake",
  h1: "Foundation and Structural Repair at Possum Kingdom Lake, Texas",
  intro: [
    "Possum Kingdom Lake properties combine everything that makes structural work interesting: slopes, water, rock transitioning to soil, and homes built to reach the view. Cardinal serves PK Lake property owners with structural foundation repair, concrete leveling, and balcony and elevated-structure repair, bringing engineering-backed scopes to a market where guesswork gets expensive fast.",
  ],
  sections: [
    {
      h2: "Structural foundation repair",
      paras: [
        "Lake homes settle differently: sloped lots, cut-and-fill pads, and moisture patterns that change from the road side to the water side of the same house. Repairs draw on the full pier toolbox, steel, drilled, helical, and pressed systems, selected from what the site actually presents. Helical piers earn their keep on slopes and limited-access lake lots.",
      ],
    },
    {
      h2: "Concrete leveling",
      paras: [
        "Settled driveways on grade, patios and lakeside flatwork, and walkway sections lifted back to level with foam injection or mudjacking, matched to the slab and access.",
      ],
    },
    {
      h2: "Balcony and elevated structure repair",
      paras: [
        "Decks and balconies reaching for the water carry real loads on posts and connections that weather hard at the lake. We repair and restore elevated structures with the same structural seriousness as foundations, because a balcony failure is not a cosmetic event.",
        "Every project starts with an evaluation, and the recommendation follows the findings. Residential work carries a transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Residential Foundation Repair", "/residential/foundation-repair/"],
    ["Concrete Leveling", "/residential/concrete-leveling/"],
    ["Service Areas", "/locations/"],
  ],
  faqs: [
    ["Do you travel to Possum Kingdom regularly?", "Yes, PK Lake is an established part of our service footprint, and scopes are scheduled to make the trip count."],
    ["My lake house sits on a slope. Does that change the repair?", "Usually, and for the better when planned properly: slope conditions steer system selection, and helical and drilled piers handle lake-lot geometry well."],
    ["Can you assess a property I am buying at the lake?", "Yes. Pre-purchase structural evaluations at PK Lake are a common request, and the deliverable is documentation you can use in the transaction."],
  ],
  ctaLabel: "Schedule an evaluation",
  ctaHeading: "A lake property that needs structural attention?",
  ctaSub: "Engineering-backed scopes for slopes, slabs, and elevated structures.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Foundation and Structural Repair at Possum Kingdom Lake", serviceType: "Foundation Repair", description: metadata.description!, path: "/locations/possum-kingdom-lake/", areaServed: ["Possum Kingdom Lake", "Texas"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Locations", path: "/locations/" }, { label: "Possum Kingdom Lake", path: "/locations/possum-kingdom-lake/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
