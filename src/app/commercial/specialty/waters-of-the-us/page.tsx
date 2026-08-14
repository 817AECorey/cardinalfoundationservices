import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/waters-of-the-us-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Waters of the US (WOTUS) Contractors in Texas | Cardinal" },
  description:
    "WOTUS contractors in Texas: Section 404/401 permitting, Clean Water Act compliance, stormwater and spill prevention, and infrastructure construction near wetlands, streams, and flood zones.",
  alternates: { canonical: "/commercial/specialty/waters-of-the-us/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services", href: "/commercial/specialty/" }, { label: "Waters of the US" }],
  kicker: "Specialty Structural · Texas",
  h1: "Waters of the United States (WOTUS) Contractors",
  intro: [
    "Cardinal Foundation Services manages, permits, and constructs infrastructure projects that intersect with or border Waters of the United States (WOTUS). Serving Fort Worth, Dallas, Houston, Austin, San Antonio, Waco-Temple-Bryan, and Tyler-Longview-Lufkin-Nacogdoches, we provide turnkey environmental and engineering services for compliance with the Clean Water Act, U.S. Army Corps of Engineers regulations, and state water standards. Whether you are building near wetlands, streams, rivers, or flood zones, we handle WOTUS permitting, engineering assessments, stormwater management, spill prevention, and long-term compliance support across urban and rural Texas.",
  ],
  sections: [
    {
      h2: "Our WOTUS-related services in Texas",
      bullets: [
        ["WOTUS permitting. ", "Streamlined Section 404 and 401 permitting to meet U.S. Army Corps and EPA requirements from planning through execution."],
        ["Clean Water Act compliance. ", "Interpretation of federal and state guidelines to keep construction, remediation, or development projects compliant."],
        ["Infrastructure projects near WOTUS. ", "Engineering and construction of projects that cross, border, or affect WOTUS-designated water bodies, including culverts, bridges, roads, levees, and detention basins."],
        ["Spill prevention and stormwater management. ", "SPCC Plans and SWPPP strategies that minimize environmental risk and satisfy EPA and TCEQ standards."],
        ["Environmental engineering and compliance support. ", "Jurisdictional determinations, hydrological studies, and mitigation planning for environmentally sensitive locations."],
      ],
    },
    {
      h2: "Who we work with",
      paras: [
        "Developers, municipalities, energy companies, engineers, landowners, and contractors involved in land development near wetlands or streams, industrial or commercial projects near WOTUS boundaries, oil and gas sites, energy infrastructure, and utility lines, roads, bridges, and flood control systems, and detention and retention ponds near regulated waterways. From permitting to final inspection, the scope is managed to help avoid fines, delays, or environmental violations.",
      ],
    },
  ],
  related: [
    ["Specialty Services", "/commercial/specialty/"],
    ["Commercial Drainage", "/commercial/drainage/"],
    ["New Construction", "/new-construction/"],
  ],
  faqs: [
    ["What is considered a WOTUS in Texas?", "Depending on current federal rules and site-specific conditions, WOTUS can include streams, wetlands, rivers, lakes, and certain tributaries that fall under Clean Water Act jurisdiction. Whether a specific water body is jurisdictional is determined case by case."],
    ["Do I need a permit to build near a stream or wetland?", "It depends on whether the water body is jurisdictional under current federal rules. Construction that impacts a jurisdictional WOTUS typically requires Section 404/401 permits from the U.S. Army Corps of Engineers and state-level water quality certifications; a jurisdictional determination establishes what applies to your site."],
  ],
  ctaLabel: "Request an assessment",
  ctaHeading: "Project touching regulated water?",
  ctaSub: "Permitting, compliance, and construction under one scope.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Waters of the United States (WOTUS) Contracting", description: metadata.description!, path: "/commercial/specialty/waters-of-the-us/", areaServed: ["Texas"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }, { label: "Waters of the US", path: "/commercial/specialty/waters-of-the-us/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
