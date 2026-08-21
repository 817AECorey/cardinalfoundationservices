import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Category hub per content/27_hub-drainage.md (verbatim intro). Child pages
   (perimeter-drainage, french-drains) ship in the snapshot-parity pass. */

export const metadata: Metadata = {
  title: { absolute: "Commercial Drainage in DFW & Houston | Cardinal Foundation Services" },
  description:
    "Commercial Drainage for commercial properties across DFW, Houston, and Texas: perimeter drainage systems and commercial french drains that protect structures at the root cause. Engineered scope, self-performed crews.",
  alternates: { canonical: "/commercial/drainage/" },
  openGraph: { images: [{ url: "/images/commercial-drainage-gravel-french-drain.webp", width: 1200, height: 1600 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Drainage" }],
  kicker: "Commercial & Industrial · Dallas-Fort Worth",
  h1: "Commercial Drainage",
  heroImage: { src: "/images/commercial-drainage-gravel-french-drain.webp", alt: "Gravel french drain line installed along a commercial building", width: 1200, height: 1600 },
  intro: [
    "Commercial perimeter drainage systems and commercial french drains that protect structures at the root cause across Dallas-Fort Worth, scoped from an engineered assessment and executed by Cardinal's own crews around your operations. Each service below carries its own page with scope detail and documented project links.",
    "Every scope starts with the structural read: conditions, probable root cause, and documented engineered bids ownership can review. Work carries a workmanship warranty, terms vary by service.",
  ],
  sections: [],
  childCards: [
    { t: "Perimeter Drainage", d: "Engineered subsurface systems that intercept groundwater at foundation edges and slab perimeters.", href: "/commercial/drainage/perimeter-drainage/" },
    { t: "Commercial French Drains", d: "Subsurface interception sized for commercial water volumes, protecting foundations, slabs, and retaining walls.", href: "/commercial/drainage/french-drains/" },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Commercial Retaining Walls", "/commercial/retaining-walls/"],
    ["Projects", "/projects/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Drainage", description: metadata.description!, path: "/commercial/drainage/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Drainage", path: "/commercial/drainage/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
