import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page, consolidates two sources:
   /services/commercial-concrete-slab-repair/ and
   /services/commercial-concrete-slab-repair-fort-worth/. */

export const metadata: Metadata = {
  title: { absolute: "Commercial Concrete Slab Repair & Leveling in DFW | Cardinal" },
  description:
    "Commercial concrete slab repair and leveling across DFW: slab lifting, void fill, subgrade stabilization, warehouse and shop floors, and heavy-equipment slab support. Engineered for commercial and industrial environments.",
  alternates: { canonical: "/commercial/concrete-construction/slab-repair/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Construction", href: "/commercial/concrete-construction/" }, { label: "Slab Repair" }],
  kicker: "Concrete Construction · DFW",
  h1: "Commercial Concrete Slab Repair and Leveling",
  intro: [
    "Cardinal Foundation Services provides commercial concrete slab repair and leveling for properties across the Dallas-Fort Worth metroplex, including Dallas, Fort Worth, Arlington, Irving, Grand Prairie, Coppell, Carrollton, and Plano. Uneven or settling concrete slabs can create safety hazards, damage equipment, and disrupt operations. Our solutions are engineered specifically for commercial and industrial environments, not residential concrete.",
  ],
  sections: [
    {
      h2: "Types of commercial slab repair and leveling we offer",
      bullets: [
        "Commercial concrete leveling and slab lifting",
        "Void fill beneath slabs and subgrade stabilization",
        "Warehouse floor leveling and shop floor leveling",
        "Industrial slab repair and parking garage slab repair",
        "Heavy equipment slab support and structural slab stabilization",
        "Scopes for general contractors, property managers, industrial facilities, and commercial properties",
      ],
    },
    {
      h2: "Why choose Cardinal for slab repair",
      bullets: [
        ["Commercial and industrial focus. ", "This service line is built for commercial slabs, forklifts, machinery, racking systems, and vehicle traffic, not residential driveways."],
        ["Built for heavy loads. ", "Repair solutions designed to support the loads your floor actually carries."],
        ["Engineered repair methods. ", "Recommendations based on slab conditions, soil behavior, and load requirements."],
        ["Local DFW experience. ", "North Texas soils and the conditions that cause slab movement across Dallas-Fort Worth."],
      ],
      parasAfter: [
        "Cardinal provides commercial concrete slab repair and leveling for retail centers, restaurants, hotels, parking garages, and multifamily properties across DFW. Repairs improve safety, restore level surfaces, and reduce liability.",
      ],
    },
  ],
  related: [
    ["Concrete Construction", "/commercial/concrete-construction/"],
    ["Warehouse Floor Leveling", "/commercial/concrete-lifting/warehouse-floor-leveling/"],
    ["Polyurethane Foam Injection", "/commercial/concrete-lifting/polyurethane-foam-injection/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
  ],
  faqs: [],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Slab creating hazards or downtime?",
  ctaSub: "Engineered for commercial and industrial environments.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Concrete Slab Repair and Leveling", description: metadata.description!, path: "/commercial/concrete-construction/slab-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Construction", path: "/commercial/concrete-construction/" }, { label: "Slab Repair", path: "/commercial/concrete-construction/slab-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
