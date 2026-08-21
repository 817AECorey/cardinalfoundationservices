import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/foundation-repair-fort-worth/pier-and-beam-foundation-repair/). */

export const metadata: Metadata = {
  title: { absolute: "Pier & Beam Foundation Repair in DFW | Cardinal" },
  description:
    "Pier and beam and crawl space foundation repair for DFW homes: interior elevation survey, visual crawl inspection, beam and sill replacement, and re-shimming to restore elevation. Free inspection report.",
  alternates: { canonical: "/residential/foundation-repair/pier-and-beam/" },
  openGraph: { images: [{ url: "/images/pier-and-beam-crawl-space-repair-crew.webp", width: 1200, height: 1600 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Foundation Repair", href: "/residential/foundation-repair/" }, { label: "Pier & Beam" }],
  kicker: "Residential Foundation Repair · DFW",
  h1: "Pier and Beam Foundation Repair",
  heroImage: { src: "/images/pier-and-beam-crawl-space-repair-crew.webp", alt: "Cardinal crew installing piers beneath a pier and beam home in a crawl space", width: 1200, height: 1600 },
  intro: [
    "Pier and beam and crawl space foundations are their own discipline: wood members, shims, and piers working together above open ground, common in older Dallas-Fort Worth and Houston-area neighborhoods and homes with real character. Cardinal repairs both traditional and complex pier and beam systems, with an inspection process built for what actually fails under these homes.",
  ],
  sections: [
    {
      h2: "How we inspect a pier and beam home",
      img: { src: "/images/pier-and-beam-crawlspace-repair.webp", alt: "Pier and beam crawl space foundation repair" },
      paras: [
        "The inspection includes an interior elevation survey and a visual crawl underneath the home, checking for warped or twisted beams, wood rot, misaligned piers and sonotubes, and standing water. Crawl space moisture is often the story behind the symptoms, which is why the drainage picture is part of the same look.",
      ],
    },
    {
      h2: "How the repair works",
      img: { src: "/images/pierbeam-diagram-v2.webp", alt: "Pier and beam foundation diagram" },
      paras: [
        "The repair process is targeted and precise: defective wood members are replaced, and the sunken or affected areas of the foundation are reset and re-shimmed to restore elevation. Where piers themselves have failed or settled, new supports are added, and where moisture is driving the deterioration, drainage correction is scoped alongside the structural work so the repair is not rebuilt by the same water. When work is recommended: written quote within one business day, financing available, transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Drainage", "/residential/drainage/"],
    ["Historic Building Foundation Repair", "/commercial/specialty/historical-building-foundation-repair/"],
  ],
  faqs: [
    ["What are the signs of pier and beam problems?", "Bouncy or sloping floors, doors racking out of square, musty crawl space smells, and visible sagging at floor lines are the common indicators."],
    ["Do you go under the house?", "Yes. The visual crawl is part of every pier and beam inspection, along with the interior elevation survey."],
    ["Can you fix just part of the foundation?", "Yes. Repairs are targeted to the affected areas: replacing failed members and re-shimming where elevation has been lost."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Floors giving underfoot?",
  ctaSub: "Elevation survey inside, visual crawl underneath, straight answer after.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Pier and Beam Foundation Repair", description: metadata.description!, path: "/residential/foundation-repair/pier-and-beam/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Foundation Repair", path: "/residential/foundation-repair/" }, { label: "Pier & Beam", path: "/residential/foundation-repair/pier-and-beam/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
