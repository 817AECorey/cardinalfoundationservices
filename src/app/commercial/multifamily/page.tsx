import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Redirect destination for deleted /multifamily-foundation-repair-dfw/.
   Intent ownership: property type + structural services (the DD page owns
   acquisition; the PM page, when live, owns the ongoing relationship). */

export const metadata: Metadata = {
  title: { absolute: "Multifamily Foundation Repair in DFW & Texas | Cardinal Foundation Services" },
  description:
    "Foundation repair for apartment communities and multifamily properties in DFW and Texas. Documented projects in Carrollton, Lewisville, Baytown, and Austin. Phased around residents. Request an assessment.",
  alternates: { canonical: "/commercial/multifamily/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Multifamily" }],
  kicker: "DFW & Texas",
  h1: "Multifamily Foundation Repair",
  heroImage: { src: "/images/multifamily-foundation-repair-exterior.webp", alt: "Multifamily building during exterior foundation repair", width: 1600, height: 1200 },
  intro: [
    "Multifamily foundation problems multiply: one soil condition, many buildings, hundreds of residents, and an asset whose value moves with its structural story. Cardinal repairs multifamily foundations across DFW and Texas with scopes built for how communities actually operate, and a project record you can inspect before you call.",
  ],
  sections: [
    {
      h2: "Documented multifamily work",
      img: { src: "/images/foundation-settlement-brick-crack.webp", alt: "Settlement cracking in a multifamily masonry wall before repair" },
      paras: [
        "Four completed multifamily projects are published in our portfolio: pier stabilization, foundation lifting, and drainage repair in Lewisville, multifamily foundation repair in Carrollton, a Baytown community, and a project in Austin. Each is documented with conditions found, methods used, and results, because a multifamily owner deserves more evidence than a brochure.",
      ],
    },
    {
      h2: "Built for occupied communities",
      bullets: [
        "Phasing by building and unit block so residents stay housed and leasing stays open",
        "Coordination with property management on notice, access, and parking",
        "Exterior-first methods wherever conditions allow",
        "Elevation documentation per building for ownership and lender files",
        "Drainage correction scoped alongside structural repair, because community-scale water problems drive community-scale movement",
      ],
    },
    {
      h2: "For owners, managers, and buyers",
      paras: [
        "Owners and managers get engineered bids with documented reasoning, immediate-versus-monitor honesty, and work executed by our own crews. Acquisition teams evaluating a property should start with our multifamily foundation and structural due diligence service, which is built for the deal timeline. Work carries a workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Multifamily Due Diligence", "/commercial/due-diligence-walks/"],
    ["Commercial Drainage", "/commercial/drainage/"],
    ["Projects", "/projects/"],
  ],
  faqs: [
    ["Do residents have to relocate during foundation repair?", "Rarely. Most multifamily scopes phase around occupied units, and any unit-level access needs are planned with management in advance."],
    ["Can you repair just the buildings that need it?", "Yes, and the assessment ranks buildings immediate versus monitor so capital goes where movement is active rather than everywhere at once."],
    ["What drives foundation problems across a whole community?", "Shared soil and shared drainage. Expansive clay moisture cycles, site grading, and aging drainage systems act on every building on the parcel, which is why the assessment reads the site, not just one slab."],
  ],
  ctaLabel: "Request a multifamily assessment",
  ctaHeading: "A community showing movement?",
  ctaSub: "Scopes built for how communities actually operate.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Multifamily Foundation Repair", description: metadata.description!, path: "/commercial/multifamily/", areaServed: ["Dallas-Fort Worth", "Texas"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Multifamily", path: "/commercial/multifamily/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
