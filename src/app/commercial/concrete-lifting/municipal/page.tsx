import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/concrete-leveling-for-cities-and-municipalities/). */

export const metadata: Metadata = {
  title: { absolute: "Concrete Leveling for Cities & Municipalities in DFW | Cardinal" },
  description:
    "Concrete lifting and leveling for municipal flatwork: parks, sidewalks, public squares, and public buildings across DFW. Engineer-owned, large-scale efficiency, budget-conscious. Request an assessment.",
  alternates: { canonical: "/commercial/concrete-lifting/municipal/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Concrete Lifting", href: "/commercial/concrete-lifting/" }, { label: "Municipal" }],
  kicker: "Municipal & Institutional · DFW",
  h1: "Concrete Leveling for Cities and Municipalities",
  intro: [
    "Cardinal Foundation Services is an engineer-owned contractor specializing in concrete lifting and leveling services for municipality flatwork. Our experience with large-scale concrete projects supports durable, safe, and accessible public spaces.",
  ],
  sections: [
    {
      h2: "Concrete leveling services for municipalities",
      bullets: [
        ["Polyurethane foam injection. ", "High-density foam injected under the concrete slab: quick, low-disturbance, and long-lasting, suited to parks, sidewalks, and public buildings."],
        ["Mudjacking. ", "A concrete and soil slurry that elevates sunken slabs back toward their original position, suited to large municipal areas from public squares to roadways, combining efficiency with cost control."],
      ],
    },
    {
      h2: "Why municipalities work with Cardinal",
      bullets: [
        ["Engineer-owned. ", "A licensed Professional Engineer co-owns the company, and engineering literacy shows up in every municipal scope."],
        ["Public safety focus. ", "Safe, accessible public spaces for the community, with trip hazards and ADA concerns corrected."],
        ["Large-scale efficiency. ", "Equipped for extensive projects, with scheduling built for public-facing spaces."],
        ["Budget-conscious scopes. ", "Documented engineered bids that respect municipal budgets without compromising safety."],
      ],
    },
  ],
  related: [
    ["Concrete Lifting", "/commercial/concrete-lifting/"],
    ["Polyurethane Foam Injection", "/commercial/concrete-lifting/polyurethane-foam-injection/"],
    ["Mudjacking", "/commercial/concrete-lifting/mudjacking/"],
  ],
  faqs: [],
  ctaLabel: "Request an assessment",
  ctaHeading: "Municipal flatwork that needs attention?",
  ctaSub: "Engineer-owned, built for large-scale public work.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Municipal Concrete Leveling", description: metadata.description!, path: "/commercial/concrete-lifting/municipal/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Concrete Lifting", path: "/commercial/concrete-lifting/" }, { label: "Municipal", path: "/commercial/concrete-lifting/municipal/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
