import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Category hub per content/27_hub-concrete-lifting.md (verbatim intro).
   Child cards: live children only; poly, mudjacking, void-fill, and
   municipal enter as their snapshot-parity pages ship. */

export const metadata: Metadata = {
  title: { absolute: "Concrete Lifting & Stabilization in DFW | Cardinal" },
  description:
    "Concrete Lifting & Stabilization for commercial properties across Dallas-Fort Worth: slab lifting, void fill, warehouse floor leveling, polyurethane injection, mudjacking, and municipal concrete leveling. Engineered scope, self-performed crews.",
  alternates: { canonical: "/commercial/concrete-lifting/" },
  openGraph: { images: [{ url: "/images/commercial-concrete-lifting-parking-lot.webp", width: 1600, height: 1200 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Lifting" }],
  kicker: "Commercial & Industrial · Dallas-Fort Worth",
  h1: "Concrete Lifting & Stabilization",
  heroImage: { src: "/images/commercial-concrete-lifting-parking-lot.webp", alt: "Crew lifting settled concrete in a commercial parking lot", width: 1600, height: 1200 },
  intro: [
    "Commercial slab lifting, void fill, warehouse floor leveling, polyurethane injection, mudjacking, and municipal concrete leveling across Dallas-Fort Worth, scoped from an engineered assessment and executed by Cardinal's own crews around your operations. Each service below carries its own page with scope detail and documented project links.",
    "Every scope starts with the structural read: conditions, probable root cause, and documented engineered bids ownership can review. Work carries a workmanship warranty, terms vary by service.",
  ],
  sections: [],
  childCards: [
    { t: "Warehouse Floor Leveling", d: "An uneven warehouse floor is a forklift problem, a racking problem, a safety problem, and eventually a structural problem. Leveled around your operations rather than instead of them.", href: "/commercial/concrete-lifting/warehouse-floor-leveling/" },
    { t: "Polyurethane Foam Injection", d: "High-density structural foam fills voids, stabilizes subgrade soils, and lifts settled slabs with precision control.", href: "/commercial/concrete-lifting/polyurethane-foam-injection/" },
    { t: "Mudjacking", d: "Controlled slurry injection that lifts and stabilizes settled parking lots, drive lanes, and large exterior slabs.", href: "/commercial/concrete-lifting/mudjacking/" },
    { t: "Municipal Concrete Leveling", d: "Concrete lifting and leveling for municipality flatwork: parks, sidewalks, public squares, and public buildings.", href: "/commercial/concrete-lifting/municipal/" },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Projects", "/projects/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Settled commercial concrete?",
  ctaSub: "Engineered scope, self-performed crews, minimal downtime.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Concrete Lifting & Stabilization", description: metadata.description!, path: "/commercial/concrete-lifting/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Lifting", path: "/commercial/concrete-lifting/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
