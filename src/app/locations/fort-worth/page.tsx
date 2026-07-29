import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* HQ location page, inherits Fort Worth geo intent (content/19). */

export const metadata: Metadata = {
  title: { absolute: "Foundation Repair in Fort Worth, TX | Cardinal Foundation Services" },
  description:
    "Fort Worth's engineer-owned foundation repair and concrete contractor: piers, slab lifting, drainage, pier and beam, and commercial structural work. Free inspection report with a mapped elevation survey.",
  alternates: { canonical: "/locations/fort-worth/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Locations", href: "/locations/" }, { label: "Fort Worth" }],
  kicker: "Foundation Repair · Fort Worth, TX · Headquarters",
  h1: "Foundation Repair in Fort Worth",
  intro: [
    "Fort Worth is home base. Cardinal Foundation Services is headquartered here, our crews work these neighborhoods daily, and the soil under this city, expansive clay that moves with every wet-dry cycle, is the soil our company was built to handle. We provide residential foundation repair, commercial and structural work, concrete services, and drainage correction across Fort Worth and the surrounding communities.",
  ],
  sections: [
    {
      h2: "Residential foundation repair in Fort Worth",
      paras: [
        "From pier and beam homes near the city's core to newer post-tension slabs across the growing north side, Fort Worth houses show movement in familiar ways: brick cracks, sticking doors and windows, floors out of level, and driveways settling at the approach. The free inspection report includes elevation readings mapped across your foundation and notated findings, so you see what has moved before anyone talks price. Sometimes the right answer is that you do not need a repair. When you do: written quote within one business day, financing available, transferable workmanship warranty, terms vary by service.",
        "Fort Worth services: steel piers, pressed concrete pilings, drilled and helical piers, pier and beam and crawl space repair, slab and post-tension repair, concrete slab lifting and mudjacking, french drains and full drainage design, root barriers, and retaining walls.",
      ],
    },
    {
      h2: "Commercial, structural, and new construction",
      paras: [
        "Fort Worth commercial properties are served by the same crews that built our commercial portfolio: warehouse floor leveling, tilt wall repair, multifamily work, and specialty structural services, with engineered assessments and documented scope. Builders and developers work with our new construction division for piers, foundations, earthwork, and concrete, with engineering and concrete under one roof, which matters in Fort Worth's approval environment.",
      ],
    },
  ],
  related: [
    ["Residential Foundation Repair", "/residential/foundation-repair/"],
    ["Concrete Leveling", "/residential/concrete-leveling/"],
    ["Drainage", "/residential/drainage/"],
    ["Retaining Walls", "/residential/retaining-walls/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["New Construction", "/new-construction/"],
    ["Projects", "/projects/"],
    ["Service Areas", "/locations/"],
  ],
  faqs: [
    ["Where in Fort Worth do you work?", "Throughout the city and surrounding communities, from our headquarters here. If you can see the Fort Worth skyline or the stockyards traffic, you are in our daily service area."],
    ["Why do Fort Worth foundations move so much?", "Expansive clay plus weather whiplash: wet springs swell the soil, triple-digit summers shrink it, and every cycle works on the structures above. Drainage conditions at each property set how hard the cycle hits."],
    ["Do you handle both my house and my business property?", "Yes, through separate residential and commercial processes, each with its own assessment path and the same crews standing behind the work."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Fort Worth is home base.",
  ctaSub: "Free inspection with a mapped elevation survey, from the crews that work these neighborhoods daily.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Foundation Repair in Fort Worth", serviceType: "Foundation Repair", description: metadata.description!, path: "/locations/fort-worth/", areaServed: ["Fort Worth", "Dallas-Fort Worth"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Locations", path: "/locations/" }, { label: "Fort Worth", path: "/locations/fort-worth/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
