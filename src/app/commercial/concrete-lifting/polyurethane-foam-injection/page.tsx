import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-concrete-lifting-stabilization-contractors/polyurethane-foam-injection-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Commercial Polyurethane Foam Injection in DFW & Houston | Cardinal" },
  description:
    "Commercial foam injection across DFW, Houston, and Texas: high-density structural polyurethane fills voids, stabilizes subgrade soils, and lifts settled slabs with precision, without large-scale demolition. Request an assessment.",
  alternates: { canonical: "/commercial/concrete-lifting/polyurethane-foam-injection/" },
  openGraph: { images: [{ url: "/images/polyurethane-foam-injection-port-commercial.webp", width: 1200, height: 1600 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Lifting", href: "/commercial/concrete-lifting/" }, { label: "Polyurethane Foam Injection" }],
  kicker: "Concrete Lifting & Stabilization · DFW",
  h1: "Commercial Polyurethane Foam Injection",
  heroImage: { src: "/images/polyurethane-foam-injection-port-commercial.webp", alt: "Polyurethane injection equipment set on commercial concrete", width: 1200, height: 1600 },
  intro: [
    "Soil voids beneath commercial slabs can lead to settlement, cracking, and operational disruption. Cardinal Foundation Services provides engineered polyurethane foam injection across Texas, from our Fort Worth base serving Dallas-Fort Worth, Houston, and commercial markets statewide. High-density structural polyurethane fills voids, stabilizes subgrade soils, and lifts settled commercial slabs with precision control, allowing rapid stabilization without large-scale demolition, which suits active warehouses, retail facilities, and industrial properties.",
  ],
  sections: [
    {
      h2: "What is polyurethane foam injection?",
      img: { src: "/images/commercial-polyurethane-floor-injection.webp", alt: "Commercial polyurethane floor injection" },
      paras: [
        "Polyurethane injection is a slab stabilization process where expanding structural foam is injected beneath concrete to fill voids and restore elevation. The material expands, compacts loose soil, and increases load-bearing support. In DFW's expansive clay conditions, void formation and soil washout are common contributors to slab settlement, and foam injection addresses both elevation correction and subgrade reinforcement.",
      ],
    },
    {
      h2: "Our commercial foam injection services",
      bullets: [
        ["Slab void filling. ", "Fill the subgrade voids that let commercial slabs drop."],
        ["Precision slab lifting. ", "Lift settled slabs to restore proper elevation and alignment."],
        ["Subgrade soil stabilization. ", "Strengthen weak soils beneath heavy-load commercial slabs."],
        ["Dock and equipment pad stabilization. ", "Correct settlement affecting loading docks and industrial pads."],
      ],
    },
    {
      h2: "Where foam injection is used",
      img: { src: "/images/commercial-lifting-polyurethane-foam-injection-fill1.webp", alt: "polyurethane foam injection work" },
      paras: [
        "Warehouses and distribution centers, retail centers, office buildings, industrial facilities, loading docks, and parking lots. Foam injection projects often coordinate with warehouse floor leveling and commercial foundation repair when deeper settlement is identified. Serving Fort Worth, Dallas, Arlington, Irving, Grand Prairie, Plano, Garland, Mesquite, Grapevine, Mansfield, and surrounding DFW metroplex cities.",
      ],
    },
  ],
  related: [
    ["Concrete Lifting", "/commercial/concrete-lifting/"],
    ["Warehouse Floor Leveling", "/commercial/concrete-lifting/warehouse-floor-leveling/"],
    ["Commercial Mudjacking", "/commercial/concrete-lifting/mudjacking/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
  ],
  faqs: [
    ["Is polyurethane foam strong enough for commercial slabs?", "Yes. Structural-grade foam is engineered to support heavy commercial loads."],
    ["How quickly can areas reopen after injection?", "Most slabs can return to service shortly after stabilization."],
    ["Does foam injection prevent future settlement?", "When soil voids are the cause, injection significantly improves long-term stability."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Voids under your slab?",
  ctaSub: "Precision-controlled lifting with minimal operational downtime.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Polyurethane Foam Injection", description: metadata.description!, path: "/commercial/concrete-lifting/polyurethane-foam-injection/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Lifting", path: "/commercial/concrete-lifting/" }, { label: "Polyurethane Foam Injection", path: "/commercial/concrete-lifting/polyurethane-foam-injection/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
