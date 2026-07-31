import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Post-Tension Slab & Cable Repair in DFW | Cardinal Foundation Services" },
  description:
    "Post-tension slab repair for DFW homes: cable and tendon issues, slab settlement on post-tension foundations, and repairs that respect the system. Free inspection report.",
  alternates: { canonical: "/residential/foundation-repair/post-tension-slab-repair/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Foundation Repair", href: "/residential/foundation-repair/" }, { label: "Post-Tension Slab Repair" }],
  kicker: "Residential Foundation Repair · DFW",
  h1: "Post-Tension Slab and Cable Repair",
  heroImage: { src: "/images/post-tension-slab-cable-repair-fort-worth.webp", alt: "Post-tension slab edge and cable anchor during repair", width: 1000, height: 1000 },
  intro: [
    "Many North Texas homes built since the 1990s sit on post-tension slabs: concrete foundations reinforced with steel cables tensioned after the pour, which compress the slab and help it resist our expansive clay. When a post-tension foundation settles, cracks, or a cable issue is suspected, the repair has to respect the system, because cutting or drilling a tensioned slab in the wrong place is dangerous and expensive. Cardinal repairs post-tension foundations across Dallas-Fort Worth and the Houston area with methods planned around the tendons.",
  ],
  sections: [
    {
      h2: "Post-tension problems we repair",
      bullets: [
        ["Slab settlement ", "on post-tension foundations, corrected with pier systems installed with tendon locations mapped and respected"],
        ["Post-tension cable repair", ", including corroded, damaged, or failed tendons and blown-out anchor points at the slab edge"],
        ["Slab cracking ", "evaluated for what it means on a tensioned system, which differs from conventional slabs"],
        ["Moisture and leak-related damage", ", coordinated with hydrostatic testing when an under-slab plumbing leak is suspected"],
      ],
    },
    {
      h2: "Why post-tension repair is its own discipline",
      paras: [
        "A post-tension slab is a system under load. Repairs begin by locating tendons, understanding the original design intent, and planning pier placement and any penetration around them. Engineering oversight runs through our scoping and sign-off, and a licensed Professional Engineer co-owns the company, which is the right backdrop for a repair category where guesswork is genuinely hazardous.",
        "The inspection includes mapped elevation readings across the slab and notated findings, so the recommendation is built on data. Sometimes that recommendation is monitoring rather than repair. When work is recommended, you receive a written quote within one business day, financing is available, and work carries a transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
  ],
  faqs: [
    ["How do I know if my home has a post-tension slab?", "Homes commonly have a stamped notice at the garage slab edge or in documents warning against cutting or drilling the slab. Age and builder are clues; verification is part of our inspection."],
    ["Is a crack in a post-tension slab an emergency?", "Not automatically. Hairline shrinkage cracks are common; wider, offset, or growing cracks warrant evaluation. On a tensioned slab, the assessment considers the system, not just the crack."],
    ["Can piers be installed under a post-tension foundation?", "Yes. Pier systems work under post-tension slabs when placement is planned around the tendons and load points, which is exactly how we scope them."],
    ["What causes cable or anchor failures?", "Corrosion over time, construction-era defects, and slab-edge deterioration are the usual causes. Repairs restore the tendon or anchor and address what let it fail."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Post-tension slab acting up?",
  ctaSub: "Repairs planned around the tendons, built on mapped elevation data.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Post-Tension Slab and Cable Repair", description: metadata.description!, path: "/residential/foundation-repair/post-tension-slab-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Foundation Repair", path: "/residential/foundation-repair/" }, { label: "Post-Tension Slab Repair", path: "/residential/foundation-repair/post-tension-slab-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
