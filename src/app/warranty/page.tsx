import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Transferable Workmanship Warranty",
  description:
    "How Cardinal Foundation Services' transferable workmanship warranty works: coverage terms vary by service and are provided in writing with every scope, and the warranty can transfer to a new owner when a home sells.",
  alternates: { canonical: "/warranty/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Warranty" }],
  kicker: "How our warranty works",
  h1: "Transferable Workmanship Warranty",
  intro: [
    "Work Cardinal performs is backed by a workmanship warranty. Coverage terms vary by service and are provided in writing with every scope, so you know exactly what is covered before any work begins.",
  ],
  sections: [
    {
      h2: "What the warranty covers",
      noMedia: true,
      paras: [
        "A workmanship warranty covers the quality of the work we perform: the installation itself, done to the engineered scope you approved. Because foundation repair, drainage, concrete, and structural services behave differently over time, the coverage terms differ by service. Rather than one vague blanket promise, every written scope you receive includes the specific warranty terms that apply to that work.",
        "If something covered by your warranty needs attention, you call us and we address it. The documentation you received with your scope is the reference for what applies.",
      ],
    },
    {
      h2: "What transferable means for home sales",
      noMedia: true,
      paras: [
        "When a home with warranted work sells, the remaining warranty can transfer to the new owner. For sellers, documented repairs with a transferable warranty answer the question every buyer and inspector asks about past foundation work. For buyers, it means the workmanship protection continues rather than dying at closing.",
        "Transfer details are part of the written terms provided with the original scope. If you are buying or selling a home with Cardinal work and want the paperwork verified, contact us and we will walk through it with you.",
      ],
    },
    {
      h2: "Getting your terms in writing",
      noMedia: true,
      paras: [
        "Every quote and engineered bid we issue states the warranty terms for that scope. Nothing is left to a handshake. If you have questions about coverage on a past or upcoming project, ask your Cardinal representative or call the office.",
      ],
    },
  ],
  related: [
    ["Request an Inspection", "/request/"],
    ["Residential Services", "/residential/"],
    ["About Cardinal", "/about/"],
  ],
  faqs: [
    ["Is the warranty the same for every service?", "No. Coverage terms vary by service and are provided in writing with every scope. Foundation piers, drainage systems, and concrete work each carry the terms appropriate to that type of work."],
    ["Does the warranty transfer if I sell my home?", "Yes, the workmanship warranty is transferable to a new owner. The written terms provided with your scope describe how the transfer works."],
    ["How do I make a warranty claim?", "Call us or send the contact form with your project address. We pull the original scope and its written terms, and schedule an evaluation of the concern."],
  ],
  ctaLabel: "Request a free inspection",
};

export default function Warranty() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Warranty", path: "/warranty/" }])} />
      <ServicePage data={data} />
    </>
  );
}
