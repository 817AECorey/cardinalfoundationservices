import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "French Drain Installation & Repair in DFW | Cardinal" },
  description:
    "French drain installation and repair for DFW homes. Intercept subsurface water before it reaches your foundation. Designed and installed by the crews who fix the foundations.",
  alternates: { canonical: "/residential/drainage/french-drains/" },
  openGraph: { images: [{ url: "/images/french-drain-installation-channel.webp", width: 1280, height: 1706 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Drainage", href: "/residential/drainage/" }, { label: "French Drains" }],
  kicker: "Residential Drainage · DFW",
  h1: "French Drain Installation and Repair",
  heroImage: { src: "/images/french-drain-installation-channel.webp", alt: "French drain channel installed along a property line", width: 1280, height: 1706 },
  intro: [
    "A french drain is an underground interception system: a gravel-bedded, perforated pipe that collects water moving through the soil and carries it away before it reaches your foundation. Across Dallas-Fort Worth and the Houston area, where soil moisture swings are the root cause of most foundation movement, a well-designed french drain is foundation protection as much as it is yard drainage.",
  ],
  sections: [
    {
      h2: "How a french drain works",
      img: { src: "/images/french-drain-gravel-installation.webp", alt: "French drain gravel installation" },
      paras: [
        "Water follows the path of least resistance. A french drain creates that path on purpose: a trench cut across the water's route, filter fabric and gravel to admit water while keeping soil out, and perforated pipe pitched to carry the collected water to a safe discharge point away from the home. Done correctly, the system works silently for years. Done poorly, with wrong pitch, missing fabric, or no real discharge plan, it clogs or simply relocates the problem, which is why design matters as much as digging.",
      ],
    },
    {
      h2: "Installed by foundation people",
      img: { src: "/images/residential-drainage-french-drains-fill1.webp", alt: "Installed by foundation people" },
      paras: [
        "Cardinal installs french drains as part of complete drainage design because we see what bad drainage does to foundations every week. That perspective changes the design: where the water is coming from, what it is doing to the soil supporting your home, whether the drain alone solves it, and whether grading, area drains, or a root barrier belongs in the same scope. If your foundation already shows symptoms, the evaluation includes what the water has done, not just where it goes.",
        "We also repair existing french drains: clogged systems, crushed or root-invaded pipe, failed discharge, and drains that were never pitched to work.",
        "Residential drainage work carries a transferable workmanship warranty, terms vary by service, with financing available.",
      ],
    },
  ],
  related: [
    ["Drainage", "/residential/drainage/"],
    ["Foundation Repair", "/residential/foundation-repair/"],
  ],
  faqs: [
    ["Where should a french drain discharge?", "To daylight at a lower elevation, a storm drainage path, or another approved outlet that carries water genuinely away from the home. A drain without a real discharge plan is a buried gutter."],
    ["How deep is a residential french drain?", "Deep enough to intercept the water it is designed for, commonly a couple of feet for surface-fed problems and deeper where subsurface flow at the foundation is the target. The design sets the depth."],
    ["Do french drains need maintenance?", "Well-built systems need little, and inspection ports and correct fabric wrapping keep it that way. Older or poorly built drains commonly fail from soil intrusion and roots, which is repairable."],
    ["Will a french drain stop my foundation movement?", "If moisture imbalance is the driver and it is caught early, drainage correction can be exactly the right scope. The inspection findings answer it for your home honestly."],
  ],
  ctaLabel: "Schedule a free drainage evaluation",
  ctaHeading: "Water moving toward your foundation?",
  ctaSub: "Designed and installed by the crews who fix the foundations.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "French Drain Installation and Repair", description: metadata.description!, path: "/residential/drainage/french-drains/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Drainage", path: "/residential/drainage/" }, { label: "French Drains", path: "/residential/drainage/french-drains/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
