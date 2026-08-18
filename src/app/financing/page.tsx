import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Foundation Repair Financing | Cardinal",
  description:
    "Flexible payment options for residential foundation repair with Cardinal Foundation Services. Simple application, fast decisions, discussed alongside your written scope. Financing subject to credit approval.",
  alternates: { canonical: "/financing/" },
};

/* JOSH-REVIEW: promo banner held for redline. Uncomment and fill the
   bracketed numbers when the current program is confirmed.

   PROMO BANNER (renders above the sections):
   "[XX] months promotional financing available on qualifying residential
   repairs, from $[XXX]/month on typical pier scopes."

   RATE/TERM SECTION (add as a section when numbers are approved):
   h2: "Current programs"
   - "[XX]-month program: $[XXX]/month on a typical [scope description]"
   - "[XX]-month program: $[XXX]/month on a typical [scope description]"
*/

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Financing" }],
  kicker: "Residential financing",
  h1: "Foundation Repair Financing",
  intro: [
    "Foundation repair is rarely an expense a homeowner plans for. Cardinal offers flexible payment options on residential work so a necessary repair does not have to wait on a lump sum.",
  ],
  sections: [
    {
      h2: "How financing works with your quote",
      bullets: [
        "Simple application you can complete in minutes",
        "Fast decisions, typically while your quote is still fresh",
        "Options discussed alongside your written scope, so you can compare the repair and the payment in one sitting",
        "No obligation until you approve the scope and the terms",
      ],
      parasAfter: [
        "Financing is part of the same conversation as your quote. After your free inspection, your written quote arrives within one business day, and your Cardinal representative can walk through current payment options against the actual scope, not a hypothetical.",
      ],
    },
    {
      h2: "Why homeowners finance foundation repair",
      noMedia: true,
      paras: [
        "Foundation movement does not improve on its own, and drainage or structural causes tend to compound. Financing lets you address the cause on the engineering timeline rather than the savings timeline. The inspection is free either way, and sometimes the honest finding is that you do not need a repair at all.",
      ],
      parasAfter: [
        "Financing subject to credit approval. Terms vary by program and job type. Ask your Cardinal representative about current options.",
      ],
    },
  ],
  related: [
    ["Request an Inspection", "/request/"],
    ["Residential Foundation Repair", "/residential/foundation-repair/"],
    ["Warranty", "/warranty/"],
  ],
  faqs: [
    ["Is financing available on commercial work?", "Financing is a residential program. Commercial projects receive engineered bids, and payment structure is part of the bid conversation."],
    ["Do I need to decide about financing before the inspection?", "No. The inspection is free and carries no obligation. Financing is simply one of the payment options discussed when you review your written quote."],
    ["What does financing cost?", "Terms vary by program and job type. Your Cardinal representative can walk through current options against your written scope."],
  ],
  faqTitle: "Financing questions",
  ctaLabel: "Request a free inspection",
};

export default function Financing() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Financing", path: "/financing/" }])} />
      <ServicePage data={data} />
    </>
  );
}
