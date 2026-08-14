import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Locations hub (content/28). Language rule: service-area phrasing only.
   Additional DFW community pages enter the cards as they come online. */

export const metadata: Metadata = {
  title: { absolute: "Service Areas | Cardinal | DFW, Houston & Texas" },
  description:
    "Cardinal Foundation Services serves DFW for residential and commercial work, the Houston area for residential foundation repair, and Texas for larger commercial and structural projects.",
  alternates: { canonical: "/locations/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Service Areas" }],
  kicker: "",
  h1: "Where We Work",
  intro: [
    "Cardinal Foundation Services is headquartered in Fort Worth, Texas. We serve the Dallas-Fort Worth Metroplex for residential and commercial foundation, concrete, and structural work; the Houston area for residential foundation repair; and take larger commercial and specialty structural projects across Texas.",
    "Austin and San Antonio are served for commercial and specialty structural projects. Not sure whether we cover your address? Call and we will answer straight: (972) 656-8251.",
  ],
  sections: [],
  childCards: [
    { t: "Fort Worth", d: "Home base. Headquartered here, with crews working these neighborhoods daily. Residential, commercial, and new construction.", href: "/locations/fort-worth/" },
    { t: "Dallas", d: "Residential foundation repair, commercial and structural work, concrete lifting, and drainage correction throughout Dallas and nearby communities.", href: "/locations/dallas/" },
    { t: "Houston Area", d: "Residential foundation repair across Katy, Sugar Land, Pearland, Friendswood, Kingwood, and surrounding communities, with commercial work in the region.", href: "/locations/houston/" },
    { t: "Possum Kingdom Lake", d: "Structural foundation repair, concrete leveling, and balcony repair for lake homes, slopes, and elevated structures.", href: "/locations/possum-kingdom-lake/" },
  ],
  related: [
    ["Residential", "/residential/"],
    ["Commercial", "/commercial/"],
    ["New Construction", "/new-construction/"],
  ],
  faqs: [],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Not sure whether we cover your address?",
  ctaSub: "Call and we will answer straight.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Cardinal Foundation Services Service Areas", serviceType: "Foundation Repair", description: metadata.description!, path: "/locations/", areaServed: ["Dallas-Fort Worth", "Houston", "Texas"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Service Areas", path: "/locations/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
