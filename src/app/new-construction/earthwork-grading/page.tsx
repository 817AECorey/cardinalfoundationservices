import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Redirect destination for live /grading/ (content/22). */

export const metadata: Metadata = {
  title: { absolute: "Earthwork, Grading & Soil Conditioning in DFW | Cardinal" },
  description:
    "Earthwork, lot grading, and soil conditioning for builders, developers, and property owners in DFW. Site prep from the contractor that repairs what bad grading causes.",
  alternates: { canonical: "/new-construction/earthwork-grading/" },
  openGraph: { images: [{ url: "/images/site-grading-telehandler-building-pad.webp", width: 1280, height: 1706 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "New Construction", href: "/new-construction/" }, { label: "Earthwork & Grading" }],
  kicker: "New Construction · DFW",
  h1: "Earthwork, Grading, and Soil Conditioning",
  heroImage: { src: "/images/site-grading-telehandler-building-pad.webp", alt: "Telehandler on a graded building pad during site preparation", width: 1280, height: 1706 },
  intro: [
    "Every foundation problem we repair started as a dirt decision. Grading that drains toward the structure, uncompacted fill, unconditioned expansive clay: the repair industry runs on site work done wrong. Cardinal performs earthwork, grading, and soil conditioning across DFW for builders, developers, and property owners, with the bias of a company that spends the other half of its week fixing what bad site work causes.",
  ],
  sections: [
    {
      h2: "Site services",
      bullets: [
        ["Lot and pad grading ", "cut to drain away from structures, verified, not eyeballed"],
        ["Earthwork and excavation ", "for pads, foundations, and site improvements"],
        ["Soil conditioning ", "for expansive clay: moisture conditioning and preparation so the pad behaves under the structure it will carry"],
        ["Regrading for existing properties ", "where original grading is feeding water to a foundation, commonly scoped alongside our drainage work"],
        ["Compaction and base preparation ", "under slabs and flatwork"],
      ],
    },
    {
      h2: "For builders and developers",
      img: { src: "/images/earthwork-grading-building-pad.webp", alt: "Graded building pad with forms set for a new foundation" },
      paras: [
        "Site work, piers, foundations, and concrete under one engineered scope and one self-performing contractor: fewer handoffs, fewer places for the dirt to be somebody else's problem. Engineering oversight runs through scoping and sign-off, which travels well in approval conversations. Deliverable is engineered bids with documentation.",
      ],
    },
    {
      h2: "For property owners",
      img: { src: "/images/earthwork-site-finishing-crew.webp", alt: "Crew finishing graded site work at a construction pad" },
      paras: [
        "If water stands against your house or your lot slopes the wrong way, regrading is often the highest-value fix on the property, and it pairs naturally with drainage design. Residential regrading carries a transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["New Construction", "/new-construction/"],
    ["Concrete Flatwork", "/new-construction/concrete-flatwork/"],
    ["Residential Drainage", "/residential/drainage/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
  ],
  faqs: [
    ["What does soil conditioning actually do?", "It manages the moisture content of expansive clay before building on it, so the pad starts stable instead of starting a swell-shrink cycle under a brand new slab."],
    ["Can you fix the grading around my existing home?", "Yes. Regrading plus drainage correction is one of the most common and most effective scopes we run for established properties."],
    ["Do you handle the whole site or just the pad?", "Scopes run from single-pad prep through lot-level earthwork, matched to the project. The bid states exactly what is included."],
  ],
  ctaLabel: "Request a quote",
  ctaHeading: "Site work that sets the foundation up right.",
  ctaSub: "From the contractor that repairs what bad grading causes.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Earthwork, Grading, and Soil Conditioning", description: metadata.description!, path: "/new-construction/earthwork-grading/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "New Construction", path: "/new-construction/" }, { label: "Earthwork & Grading", path: "/new-construction/earthwork-grading/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
