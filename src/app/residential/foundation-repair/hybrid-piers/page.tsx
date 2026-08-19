import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/foundation-repair-fort-worth/hybrid-piers/;
   snapshot body was empty, coverage drawn from the approved pier-systems guide). */

export const metadata: Metadata = {
  title: { absolute: "Hybrid Piers for Home Foundation Repair in DFW | Cardinal" },
  description:
    "Hybrid pier systems for DFW homes: concrete pilings combined with steel components to buy depth and capacity at less than full steel's cost. Free inspection report with a mapped elevation survey.",
  alternates: { canonical: "/residential/foundation-repair/hybrid-piers/" },
  openGraph: { images: [{ url: "/images/hybrid-pier-system-foundation-repair.webp", width: 1600, height: 946 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Foundation Repair", href: "/residential/foundation-repair/" }, { label: "Hybrid Piers" }],
  kicker: "Residential Foundation Repair · DFW",
  h1: "Hybrid Piers for Home Foundation Repair",
  heroImage: { src: "/images/hybrid-pier-system-foundation-repair.webp", alt: "Cutaway rendering of a hybrid pier system beneath a home foundation", width: 1600, height: 946 },
  intro: [
    "Hybrid pier systems combine materials, most commonly concrete pilings with steel components, to buy some of steel's depth and capacity at less than steel's cost. They are a legitimate middle path when a home's conditions ask for more than pressed concrete but do not justify full steel, and Cardinal installs them across Dallas-Fort Worth and the Houston area as one of five pier systems.",
  ],
  sections: [
    {
      h2: "How hybrid piers work",
      img: { src: "/images/hybrid-pier-system-repair.webp", alt: "Hybrid pier system foundation repair" },
      paras: [
        "A hybrid pier stacks steel components with precast concrete sections in one driven support, reaching deeper than pressed concrete typically achieves while keeping material cost below an all-steel drive. The result lands between pressed and steel systems in both depth and price, which is exactly the gap it exists to fill.",
      ],
    },
    {
      h2: "When a hybrid system is the right call",
      paras: [
        "Homes on moderately deep active clay, structures a bit too heavy for pressed pilings alone, and repairs where budget matters but bearing depth cannot be compromised. Like every system we install, the selection follows the mapped elevation data and soil behavior from your free inspection, and engineered scopes sometimes mix pier types across a single foundation where conditions vary. When work is recommended: written quote within one business day, financing available, transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Concrete Pressed Piers", "/residential/foundation-repair/concrete-pressed-piers/"],
    ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
  ],
  faqs: [
    ["What is a hybrid pier made of?", "Most commonly concrete pilings combined with steel components, pressed as one support."],
    ["Is a hybrid pier better than pressed concrete?", "It reaches deeper and carries more, at a higher cost. Whether that depth is needed at your home is what the inspection determines."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Between pressed and steel?",
  ctaSub: "The middle path, chosen from data. Free inspection report with a mapped elevation survey.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Hybrid Piers for Home Foundation Repair", description: metadata.description!, path: "/residential/foundation-repair/hybrid-piers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Foundation Repair", path: "/residential/foundation-repair/" }, { label: "Hybrid Piers", path: "/residential/foundation-repair/hybrid-piers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
