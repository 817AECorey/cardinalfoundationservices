import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Root Barriers for Foundation Protection in DFW | Cardinal",
  description:
    "How tree roots affect foundation soil moisture, when a root barrier makes sense, and when it does not. Engineer-led evaluation and honest recommendations across DFW.",
  alternates: { canonical: "/residential/drainage/root-barriers/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Drainage", href: "/residential/drainage/" }, { label: "Root Barriers" }],
  kicker: "Drainage & Soil · DFW",
  h1: "Root Barriers",
  heroImage: { src: "/images/root-barrier-function-diagram.webp", alt: "Diagram showing how a root barrier separates tree roots from foundation soil", width: 1600, height: 1257, contain: true },
  intro: [
    "North Texas clay swells when wet and shrinks when dry, and a mature tree near a foundation moves a lot of water. A root barrier is a below-grade divider that keeps roots from drawing moisture out of the soil that supports your slab. Installed in the right situation, it evens out the seasonal moisture swing on that side of the house.",
  ],
  sections: [
    {
      h2: "How tree roots affect foundation soil",
      paras: [
        "A large tree can pull hundreds of gallons of water from the soil in a hot week, and it pulls hardest from the moist soil under and beside a slab. In expansive clay, that localized drying shrinks the soil and lets the foundation edge settle seasonally, then rebound when the rain returns. The symptom pattern is often cyclical: doors that stick in late summer and free up in winter, cracks that open and close with the seasons.",
      ],
    },
    {
      h2: "When a barrier makes sense, and when it does not",
      bullets: [
        "A mature, water-hungry tree within roughly its own height of the foundation, on the side showing seasonal movement",
        "Elevation data that shows the movement pattern matching the tree side of the structure",
        "Situations where removing a healthy, established tree is the alternative nobody wants",
      ],
      parasAfter: [
        "Not every tree needs one. Many trees coexist with foundations for decades without an issue, and a barrier installed where roots are not the problem fixes nothing. The inspection determines whether the moisture pattern actually points at the tree before a barrier is recommended. Sometimes the honest answer is drainage correction, or no work at all.",
      ],
    },
    {
      h2: "How installation works",
      paras: [
        "A trench is cut between the tree and the foundation to design depth, a solid barrier panel is set vertically, and the trench is backfilled. Roots that previously ran toward the slab are redirected deeper and away. Installation is typically a one-to-two-day scope with minimal disturbance to the yard, and it pairs naturally with drainage corrections when the evaluation calls for both.",
      ],
    },
  ],
  related: [
    ["Drainage", "/residential/drainage/"],
    ["French Drains", "/residential/drainage/french-drains/"],
    ["Foundation Repair", "/residential/foundation-repair/"],
  ],
  faqs: [
    ["Will a root barrier hurt my tree?", "A properly placed barrier redirects roots rather than starving the tree. Placement and depth are chosen so the tree keeps its water sources on the other sides while the foundation soil stabilizes."],
    ["How do I know the tree is causing my foundation movement?", "The elevation survey from a free inspection shows where the foundation is moving. When the settled area tracks the tree side and the symptoms cycle with the seasons, roots are a likely contributor. If the data points elsewhere, we tell you that."],
    ["Is removing the tree a better fix?", "Sometimes, but removal changes the soil moisture pattern too, and a healthy established tree is usually worth keeping. A barrier lets the tree and the foundation share the lot on better terms."],
  ],
  ctaLabel: "Request a free inspection",
};

export default function RootBarriers() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Root Barrier Installation", serviceType: "Foundation Protection", description: metadata.description!, path: "/residential/drainage/root-barriers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Drainage", path: "/residential/drainage/" }, { label: "Root Barriers", path: "/residential/drainage/root-barriers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
