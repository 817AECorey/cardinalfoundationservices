import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-retaining-wall-contractors/retaining-wall-tieback-anchor-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Retaining Wall Tieback Anchor Contractors in DFW & Houston | Cardinal" },
  description:
    "Commercial retaining wall tieback anchors across DFW, Houston, and Texas: deep anchoring systems that resist lateral earth pressure and restore wall alignment without full reconstruction.",
  alternates: { canonical: "/commercial/retaining-walls/tieback-anchors/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Retaining Walls", href: "/commercial/retaining-walls/" }, { label: "Tieback Anchors" }],
  kicker: "Commercial Retaining Walls · DFW",
  h1: "Retaining Wall Tieback Anchor Systems",
  intro: [
    "When commercial retaining walls begin to lean, bow, or shift due to lateral soil pressure, tieback anchor systems provide engineered stabilization. Cardinal Foundation Services installs commercial retaining wall tieback anchors across Texas, from our Fort Worth base serving Dallas-Fort Worth, Houston, and commercial markets statewide. Tiebacks are deep anchoring systems designed to resist horizontal earth pressure and restore wall alignment without full reconstruction, commonly used in large commercial developments where retaining wall movement threatens structural integrity or adjacent infrastructure.",
  ],
  sections: [
    {
      h2: "What are retaining wall tieback anchors?",
      img: { src: "/images/retaining-wall-tieback-anchor.webp", alt: "Retaining wall tieback anchor hardware" },
      paras: [
        "Retaining wall tiebacks, often helical anchor systems, are installed behind a retaining wall and embedded into stable soil layers. The anchor applies lateral resistance, counteracting the hydrostatic pressure and soil load that cause wall displacement. In DFW's expansive clay soils, tiebacks are frequently used to stabilize walls affected by moisture cycles and poor drainage.",
      ],
    },
    {
      h2: "Our commercial tieback services",
      bullets: [
        ["Helical tieback installation. ", "Torque-installed anchors designed to stabilize leaning or bowing retaining walls."],
        ["Lateral pressure correction. ", "Reduce outward wall movement caused by soil expansion or hydrostatic buildup."],
        ["Wall reinforcement and retrofit. ", "Integrate anchors into existing structural wall systems."],
        ["Drainage integration. ", "Often paired with commercial drainage systems to relieve hydrostatic pressure."],
      ],
    },
    {
      h2: "Where retaining wall tiebacks are used",
      img: { src: "/images/commercial-retaining-walls-tieback-anchors-fill1.webp", alt: "Retaining wall tieback anchor installation" },
      paras: [
        "Commercial office parks, retail centers and shopping plazas, industrial facilities, multi-tenant developments, and municipal projects, with engineered anchor installation and minimal reconstruction required.",
      ],
    },
  ],
  related: [
    ["Commercial Retaining Walls", "/commercial/retaining-walls/"],
    ["Structural Wall Repair", "/commercial/retaining-walls/structural-repair/"],
    ["Helical Piers & Tiebacks", "/commercial/foundation-repair/helical-piers-tiebacks/"],
  ],
  faqs: [
    ["Can tiebacks correct a leaning commercial retaining wall?", "Yes. Helical tieback anchors are commonly used to correct lateral wall displacement and restore alignment without full reconstruction."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Wall leaning, bowing, or shifting?",
  ctaSub: "Engineered anchoring without full reconstruction.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Retaining Wall Tieback Anchor Systems", description: metadata.description!, path: "/commercial/retaining-walls/tieback-anchors/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Retaining Walls", path: "/commercial/retaining-walls/" }, { label: "Tieback Anchors", path: "/commercial/retaining-walls/tieback-anchors/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
