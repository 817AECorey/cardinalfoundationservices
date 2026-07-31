import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Most profitable line; promotion treatment (homepage feature, priority
   internal links). First 150 words are homeowner language by spec.
   Proof note: N Stemmons + hotel projects are COMMERCIAL; label clearly
   if referenced. Method-focused content until a residential project is
   documented. */

export const metadata: Metadata = {
  title: { absolute: "Steel Piers for Foundation Repair in DFW | Cardinal Foundation Services" },
  description:
    "Steel pier foundation repair for DFW homes. Driven to load-bearing strata for deep, lasting support in North Texas expansive clay. Free inspection report with a mapped elevation survey.",
  alternates: { canonical: "/residential/foundation-repair/steel-piers/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Foundation Repair", href: "/residential/foundation-repair/" }, { label: "Steel Piers" }],
  kicker: "Residential Foundation Repair · DFW",
  h1: "Steel Piers for Home Foundation Repair",
  heroImage: { src: "/images/steel-pier-installation-fort-worth-tx.webp", alt: "Steel pier sections being hydraulically driven at a home foundation", width: 1200, height: 800 },
  intro: [
    "Steel piers are the deepest-reaching repair system we install under homes across Dallas-Fort Worth and the Houston area. Driven steel reaches through the active clay layer to load-bearing strata, which is why steel is the system we reach for when a home needs support that does not renegotiate with the soil every season. If your doors have started sticking, brick is cracking in stair steps, or floors have gone out of level, an inspection determines whether piers are the answer and which system fits your home.",
  ],
  sections: [
    {
      h2: "How steel piers work",
      paras: [
        "Sections of steel pipe are hydraulically driven beneath the foundation, one on top of the next, until they reach soil or strata capable of carrying the load, commonly far deeper than pressed concrete pilings typically reach in our area. Depth is the point: North Texas expansive clay swells when wet and shrinks in drought, and a pier that terminates inside that active zone moves with it. Steel driven below it does not. The home is then lifted toward level and the piers carry the load on strata that does not cycle with the weather.",
      ],
    },
    {
      h2: "When steel is the right call, and when it is not",
      paras: [
        "Steel piers are generally the premium option: highest capacity, greatest depth, strongest fit for heavier homes, additions, and soils with deep active zones. They are not automatically the right call for every home. Lighter structures on shallower active soils are often well served by concrete pressed piers at lower cost, and some conditions call for drilled or helical systems. Our recommendation follows the inspection findings, and sometimes the right answer is that you do not need a repair at all.",
        "For a direct comparison, see Steel Piers vs. Concrete Piers in our pier systems guide.",
      ],
    },
    {
      h2: "What the inspection includes",
      paras: [
        "Every Cardinal inspection includes elevation readings across your foundation, mapped so you can see which areas have moved and by how much, along with notated visual findings. You leave with data about your home, not just a number. If repair is recommended, you receive a written quote within one business day, financing is available, and the work is backed by a transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Drilled Piers", "/residential/foundation-repair/drilled-piers/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
    ["Projects", "/projects/"],
  ],
  faqs: [
    ["How deep do steel piers go?", "As deep as the load requires: they are driven until they reach competent load-bearing strata, which in much of North Texas means well below the depth pressed concrete pilings typically achieve. Your soil determines the number."],
    ["Why do steel piers cost more than concrete piers?", "Material and depth. Steel sections and the drive to deeper strata cost more to install, and in exchange the pier bears on ground that does not cycle with the weather."],
    ["Will installing steel piers disturb my yard?", "Installation requires excavation at each pier location, and our crews restore work areas when the lift is complete. Access and landscaping are discussed at the inspection."],
    ["Are steel piers only for big or expensive homes?", "No. They fit any home whose conditions call for depth and capacity. The inspection findings, not the house size, drive the recommendation."],
    ["Does the warranty transfer if I sell my home?", "Yes. Cardinal's workmanship warranty is transferable, and terms vary by service. That matters in a sale, and we document the work so it is easy to show a buyer."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Doors sticking? Brick cracking?",
  ctaSub: "A free inspection report with a mapped elevation survey tells you what has actually moved.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Steel Pier Foundation Repair", description: metadata.description!, path: "/residential/foundation-repair/steel-piers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Foundation Repair", path: "/residential/foundation-repair/" }, { label: "Steel Piers", path: "/residential/foundation-repair/steel-piers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
