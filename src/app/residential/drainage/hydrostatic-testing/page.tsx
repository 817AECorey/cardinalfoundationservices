import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hydrostatic Plumbing Testing in DFW | Cardinal",
  description:
    "What a hydrostatic test is, when a foundation inspection recommends one, and how under-slab plumbing leaks relate to foundation movement in DFW clay soils.",
  alternates: { canonical: "/residential/drainage/hydrostatic-testing/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Drainage", href: "/residential/drainage/" }, { label: "Hydrostatic Testing" }],
  kicker: "Diagnostics · DFW",
  h1: "Hydrostatic Testing",
  intro: [
    "A hydrostatic test checks whether the drain lines under a slab hold water or leak it into the soil. Under-slab leaks matter to foundations because leaked water changes soil moisture right where the slab bears, and in expansive clay that moisture change becomes movement.",
  ],
  sections: [
    {
      h2: "What the test is",
      paras: [
        "The drain system is temporarily plugged at the main cleanout and filled with water to slab level. If the water level holds, the lines under the slab are tight. If it drops, water is leaving the system somewhere beneath the house, and further isolation testing narrows down where. It is a diagnostic, not a repair: the result is information about what is happening under the slab.",
      ],
    },
    {
      h2: "When an inspection recommends one",
      bullets: [
        "Foundation movement concentrated near kitchens, baths, or utility rooms where the drain lines run",
        "Moisture patterns the elevation survey cannot explain by grading, drainage, or trees",
        "After significant foundation lifting, to verify aging drain lines survived the movement",
      ],
      parasAfter: [
        "Plumbing is its own licensed trade, and testing is performed accordingly. Our role is the structural read: whether the moisture pattern under your foundation points at plumbing, and what the elevation data says the leak is doing to the slab. When the test comes back clean, that possibility is eliminated honestly and the evaluation moves on.",
      ],
    },
  ],
  related: [
    ["Drainage", "/residential/drainage/"],
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Slab Repair", "/residential/foundation-repair/slab-repair/"],
  ],
  faqs: [
    ["Does every foundation inspection need a hydrostatic test?", "No. It is recommended when the movement or moisture pattern points at under-slab plumbing. Most inspections do not need one, and we say so when yours does not."],
    ["Is a hydrostatic test destructive?", "No. It uses the existing cleanout, fills the lines with water, and observes the level. No slab is cut for the test itself."],
    ["What if the test finds a leak?", "The leak gets located by isolation testing and repaired by a licensed plumber. If the leak has already caused movement, the elevation data tells us whether the foundation also needs attention, and in what order the work should happen."],
  ],
  ctaLabel: "Request a free inspection",
};

export default function HydrostaticTesting() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Hydrostatic Testing", serviceType: "Foundation Diagnostics", description: metadata.description!, path: "/residential/drainage/hydrostatic-testing/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Drainage", path: "/residential/drainage/" }, { label: "Hydrostatic Testing", path: "/residential/drainage/hydrostatic-testing/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
