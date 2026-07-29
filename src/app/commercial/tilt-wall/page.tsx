import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "Tilt Wall Repair, Stabilization & Construction in Texas | Cardinal" },
  description:
    "Tilt wall panel repair, stabilization, and construction for warehouses and commercial buildings across DFW and Texas. Engineered scope, self-performed crews. Request an assessment.",
  alternates: { canonical: "/commercial/tilt-wall/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Tilt Wall" }],
  kicker: "Commercial & Industrial · Texas",
  h1: "Tilt Wall Repair and Stabilization in Texas",
  intro: [
    "Tilt wall panels carry enormous loads on relatively narrow footings, which makes them sensitive to the foundation and soil conditions beneath them. When panels rotate, separate at joints, or crack, the cause usually lives below grade: settlement, erosion, or drainage failure at the panel line. Cardinal provides tilt wall repair, stabilization, and construction support for warehouses, distribution centers, and commercial buildings across Dallas-Fort Worth and, for larger projects, across Texas.",
  ],
  sections: [
    {
      h2: "What we repair and stabilize",
      bullets: [
        "Panel settlement and rotation corrected with engineered pier support at the panel line",
        "Joint separation and racking traced to foundation movement",
        "Erosion and drainage failures undermining panel footings, including creekside and slope conditions",
        "Slab and footing repair where panels meet the floor system",
        "Stabilization for panels affected by adjacent excavation or water intrusion",
      ],
      parasAfter: [
        "The repair method follows the diagnosis. Steel piers, drilled piers, and helical systems each have a place at a tilt wall depending on load and soil; underpinning and drainage restoration frequently work together, because stabilizing a panel without correcting the water that moved it is a temporary fix.",
      ],
    },
    {
      h2: "Documented tilt wall work",
      paras: [
        "Our portfolio includes a tilt wall foundation and drainage restoration project you can review in detail: conditions found, the engineered repair, and the drainage correction that protects the result. That documentation standard applies to every commercial project we take.",
      ],
    },
    {
      h2: "Construction support",
      paras: [
        "For new tilt wall projects, Cardinal supports builders and GCs with foundations, pier drilling, earthwork, and concrete flatwork. One engineered scope, one self-performed crew, from pad to panels.",
      ],
    },
    {
      h2: "Why Cardinal on tilt wall",
      paras: [
        "The structural read comes first. A licensed Professional Engineer co-owns the company and engineering oversight runs through scoping and sign-off, which matters on wall systems where a wrong diagnosis is expensive. Our crews self-perform the repair, and work around active operations is planned into the scope. Work is backed by a workmanship warranty, and terms vary by service.",
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Warehouse Floor Leveling", "/commercial/concrete-lifting/warehouse-floor-leveling/"],
    ["Projects", "/projects/"],
  ],
  faqs: [
    ["What causes tilt wall panels to move?", "Most commonly, settlement or erosion at the panel footing driven by soil moisture change and drainage problems. North Texas expansive clay swells and shrinks with moisture, and concentrated roof runoff or poor grading at a panel line accelerates movement."],
    ["Can a tilt wall building stay operational during repair?", "In most cases, yes. Exterior pier installation and drainage work can typically proceed with limited interior disruption, and phasing is set in the scope."],
    ["Is tilt wall repair a foundation repair or a wall repair?", "Usually both. The visible symptom is in the panel, and the fix is under it. That is why an assessment of the foundation and drainage comes before any repair recommendation."],
    ["Does Cardinal handle tilt wall projects outside DFW?", "Yes. Larger commercial and specialty structural projects, including tilt wall, are taken across Texas when scope justifies it."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Tilt wall panels moving?",
  ctaSub: "The structural read comes first. Engineered scope, self-performed crews.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Tilt Wall Repair and Stabilization", description: metadata.description!, path: "/commercial/tilt-wall/", areaServed: ["Dallas-Fort Worth", "Texas"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Tilt Wall", path: "/commercial/tilt-wall/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
