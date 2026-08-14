import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Merge destination for the live repair + design pages (content/20). */

export const metadata: Metadata = {
  title: { absolute: "Retaining Wall Repair & Design in DFW | Cardinal" },
  description:
    "Retaining wall repair, design, and installation for DFW homes: leaning, cracking, or failing walls corrected at the cause. Free evaluation.",
  alternates: { canonical: "/residential/retaining-walls/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Retaining Walls" }],
  kicker: "Residential · DFW",
  h1: "Retaining Wall Repair and Design",
  heroImage: { src: "/images/retaining-wall-construction-fort-worth.webp", alt: "Retaining wall construction at a residential property", width: 1200, height: 796 },
  intro: [
    "A retaining wall that leans, bulges, or cracks is losing its argument with the soil behind it, and in North Texas that argument is usually about water. Cardinal repairs, designs, and installs residential retaining walls across Dallas-Fort Worth and the Houston area, treating the wall and the pressure behind it as one problem, because fixing the wall without relieving the load rebuilds the failure.",
  ],
  sections: [
    {
      h2: "Retaining wall repair",
      paras: [
        "Leaning and rotation, stair-step cracking in block and stone, bulging faces, failed footings, and walls undermined by erosion. Repair scopes are matched to the failure mode: drainage relief behind the wall, footing repair, structural reinforcement, partial rebuilds, and, where loads justify it, engineered solutions drawn from our commercial tieback work. The evaluation identifies why the wall failed, and the fix addresses that, not just the appearance.",
      ],
    },
    {
      h2: "Retaining wall design and installation",
      paras: [
        "New walls for grade changes, erosion control, and landscape structure, designed for the soil pressure and water they will actually face. Every design considers drainage first, weep paths, backfill, and where the collected water goes, because a wall built without a water plan has a countdown running.",
        "Residential work carries a transferable workmanship warranty, terms vary by service, with financing available and a written quote within one business day of evaluation.",
      ],
    },
  ],
  related: [
    ["Residential", "/residential/"],
    ["Drainage", "/residential/drainage/"],
    ["Commercial Retaining Walls", "/commercial/retaining-walls/"],
    ["New Construction", "/new-construction/"],
  ],
  faqs: [
    ["Why is my retaining wall leaning?", "Almost always hydrostatic pressure: water accumulating in the soil behind the wall with nowhere to go. Freeze cycles, poor backfill, and undersized footings contribute, and the evaluation tells you which applies."],
    ["Repair or rebuild?", "Depends on the wall's construction and how far the failure has progressed. Early lean with a sound footing often repairs well; a wall failed through its structure is honestly a rebuild, and we say which."],
    ["How tall a wall can you handle?", "Typical residential landscape walls through engineered walls with structural requirements. Taller and heavily loaded walls draw on the same methods our commercial crews use, including tiebacks."],
  ],
  ctaLabel: "Schedule a free evaluation",
  ctaHeading: "Wall leaning, bulging, or cracking?",
  ctaSub: "The wall and the pressure behind it, treated as one problem.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Retaining Wall Repair and Design", description: metadata.description!, path: "/residential/retaining-walls/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Retaining Walls", path: "/residential/retaining-walls/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
