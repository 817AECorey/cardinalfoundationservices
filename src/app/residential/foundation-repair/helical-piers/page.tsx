import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/foundation-repair-fort-worth/helical-piers/). */

export const metadata: Metadata = {
  title: { absolute: "Helical Piers for Home Foundation Repair in DFW | Cardinal" },
  description:
    "Helical pier installation for DFW homes: screw-in steel piers with capacity verified by installation torque, resistant to heave in moisture-rich clay. Free inspection report with a mapped elevation survey.",
  alternates: { canonical: "/residential/foundation-repair/helical-piers/" },
  openGraph: { images: [{ url: "/images/helical-pier-installation-north-texas.webp", width: 1200, height: 900 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Foundation Repair", href: "/residential/foundation-repair/" }, { label: "Helical Piers" }],
  kicker: "Residential Foundation Repair · DFW",
  h1: "Helical Piers for Home Foundation Repair",
  heroImage: { src: "/images/helical-pier-installation-north-texas.webp", alt: "Helical pier being driven with installation equipment at a home", width: 1200, height: 900 },
  intro: [
    "Helical piers are steel shafts with helix plates that are mechanically screwed into the soil to a torque specification, locking the structure above into stable bearing. That anchored connection is what makes them resistant to heave, the upward pressure that moisture-rich clay soils exert during wet seasons, which purely pressed systems cannot resist. Cardinal installs helical piers for homes across Dallas-Fort Worth and the Houston area as one of five pier systems, selected when the inspection findings call for them.",
  ],
  sections: [
    {
      h2: "How helical piers work",
      paras: [
        "Each pier is advanced into the soil like a large threaded anchor, with capacity verified by installation torque as it goes. Because the pier is anchored rather than resting on resistance alone, it resists both settlement and upward soil movement during moisture-rich seasons. Installation is precise, low-vibration, and suited to limited-access sites.",
      ],
    },
    {
      h2: "Where helical piers fit at homes",
      bullets: [
        ["Heave-prone conditions. ", "Anchored resistance to upward soil movement in heavy, moisture-rich clay."],
        ["Lighter structures. ", "Additions, porches, and homes where torque-verified capacity fits the load."],
        ["Limited-access and sloped lots. ", "Compact installation equipment reaches where larger rigs cannot."],
        ["Tension applications. ", "The same helical family provides tieback anchors for retaining walls."],
      ],
      parasAfter: [
        "Every recommendation follows the free inspection report with mapped elevation readings. When work is recommended: written quote within one business day, financing available, transferable workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Foundation Repair", "/residential/foundation-repair/"],
    ["Steel Piers", "/residential/foundation-repair/steel-piers/"],
    ["Drilled Piers", "/residential/foundation-repair/drilled-piers/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
  ],
  faqs: [
    ["What makes helical piers different from other piers?", "They are screwed into the soil rather than pressed or poured, with capacity verified by installation torque, and they resist upward heave as well as settlement."],
    ["Are helical piers right for my home?", "The inspection findings decide: soil behavior, structure weight, and access all factor in, and sometimes the honest answer is that no pier is needed."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Soil pushing up as well as sinking?",
  ctaSub: "Anchored, torque-verified support. The inspection decides the system.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Helical Piers for Home Foundation Repair", description: metadata.description!, path: "/residential/foundation-repair/helical-piers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Foundation Repair", path: "/residential/foundation-repair/" }, { label: "Helical Piers", path: "/residential/foundation-repair/helical-piers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
