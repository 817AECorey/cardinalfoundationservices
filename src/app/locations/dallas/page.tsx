import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Redirect destination for the deleted Dallas page (content/18).
   Language rule: service-area phrasing, no office implication. */

export const metadata: Metadata = {
  title: { absolute: "Foundation Repair in Dallas, TX | Cardinal Foundation Services" },
  description:
    "Foundation repair for Dallas homes and commercial properties: piers, slab lifting, drainage, and structural work across Dallas and nearby communities. Free residential inspection report with a mapped elevation survey.",
  alternates: { canonical: "/locations/dallas/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Locations", href: "/locations/" }, { label: "Dallas" }],
  kicker: "Foundation Repair · Dallas, TX",
  h1: "Foundation Repair in Dallas",
  heroImage: { src: "/images/dallas-area-foundation-crew.webp", alt: "Cardinal crew at a Dallas-area multifamily foundation project", width: 1600, height: 1200 },
  intro: [
    "Dallas sits on the same expansive clay that keeps foundation crews busy across North Texas: soil that swells through wet springs and shrinks hard in summer drought, moving the houses and buildings on top of it. Cardinal serves property owners throughout Dallas and nearby communities with residential foundation repair, commercial and structural work, concrete lifting, and drainage correction, from our Fort Worth base with crews working across the Metroplex.",
  ],
  sections: [
    {
      h2: "Residential foundation repair in Dallas",
      paras: [
        "Stair-step brick cracks, sticking doors, sloping floors, and gaps at frames are the Dallas classics, and older neighborhoods with pier and beam homes add crawl space repair to the list. Every free inspection report includes elevation readings mapped across your foundation and notated visual findings, so the recommendation is built on data, and sometimes the honest recommendation is that you do not need a repair. When work is recommended: written quote within one business day, financing available, and a transferable workmanship warranty, terms vary by service.",
        "Common Dallas services: steel piers and pressed concrete pilings, drilled and helical piers, pier and beam repair, slab repair on conventional and post-tension foundations, concrete slab lifting for driveways and patios, french drains and drainage design, and root barriers where mature trees are working on foundation soils.",
      ],
    },
    {
      h2: "Commercial and structural work in Dallas",
      paras: [
        "Dallas commercial properties, from warehouses along the corridors to multifamily communities and retail centers, are served through our commercial division: engineered assessments, phased execution around operations, and documented scope for ownership. Our portfolio includes the N Stemmons steel pier project and multifamily repairs in nearby Carrollton and Lewisville.",
      ],
    },
  ],
  related: [
    ["Residential Foundation Repair", "/residential/foundation-repair/"],
    ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Concrete Leveling", "/residential/concrete-leveling/"],
    ["Drainage", "/residential/drainage/"],
    ["Service Areas", "/locations/"],
  ],
  faqs: [
    ["Do you really cover all of Dallas?", "We serve property owners throughout Dallas and the surrounding communities. If you are unsure about your address, call and we will answer straight."],
    ["Is the inspection free for Dallas homes?", "Yes, including the mapped elevation survey, with a written quote in one business day if repair is recommended."],
    ["What makes Dallas soil hard on foundations?", "Expansive clay moisture cycles: the wetter the spring and the hotter the summer, the harder the swing, and drainage conditions at each lot decide how hard each house feels it."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Dallas property showing symptoms?",
  ctaSub: "Free residential inspection with a mapped elevation survey.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Foundation Repair in Dallas", serviceType: "Foundation Repair", description: metadata.description!, path: "/locations/dallas/", areaServed: ["Dallas", "Dallas-Fort Worth"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Locations", path: "/locations/" }, { label: "Dallas", path: "/locations/dallas/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
