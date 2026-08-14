import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Child of the commercial foundation-repair hub. Breadcrumb + BreadcrumbList
   declare the LEGACY URL as parent, per spec. Note: /commercial/foundation-repair/
   itself never serves a page (301 to the legacy hub); this child path is fine. */

export const metadata: Metadata = {
  title: { absolute: "Commercial Steel Piers in DFW | Cardinal Foundation Services" },
  description:
    "Steel pier systems for commercial and multifamily structures in DFW: deep driven support for heavy loads, installed around active operations. Documented projects. Request an engineered assessment.",
  alternates: { canonical: "/commercial/foundation-repair/steel-piers/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Commercial Foundation Repair", href: "/services/commercial-foundation-repair/" }, { label: "Steel Piers" }],
  kicker: "Commercial Foundation Repair · DFW",
  h1: "Steel Piers for Commercial Structures",
  heroImage: { src: "/images/steel-pier-installation-multifamily-crew.webp", alt: "Cardinal crew installing piers at an occupied multifamily property", width: 1600, height: 1200 },
  intro: [
    "Commercial structures put loads on foundations that pressed pilings were never sized for. Steel piers, driven in sections to refusal on load-bearing strata, deliver the depth and capacity that hotels, multifamily buildings, retail structures, and industrial facilities require, and they install in confined, occupied, operating conditions where larger equipment cannot go.",
  ],
  sections: [
    {
      h2: "Why steel for commercial loads",
      img: { src: "/images/concrete-pier-cylinders-staged-multifamily.webp", alt: "Pier materials staged at an occupied multifamily property" },
      paras: [
        "Capacity and depth. Each pier is hydraulically driven until the strata itself refuses further advance, verified pier by pier during installation, then load-tested against the structure it will carry. In North Texas expansive clay, that puts commercial loads on ground that does not move with the weather, which is the difference between a repair and a recurring line item.",
      ],
    },
    {
      h2: "Installed around your operations",
      paras: [
        "Steel pier installation is compact work: pit excavation at each location, hydraulic driving, lift, and closure. That footprint suits occupied properties, and scopes are phased by building, wing, or schedule window so tenants and operations continue. Our crews self-perform the installation, and elevations are documented before and after for ownership records.",
      ],
    },
    {
      h2: "Documented commercial steel pier work",
      paras: [
        "Our portfolio includes steel pier installation supporting a working hotel structure and the N Stemmons steel pier project, both documented with conditions, scope, and results. Deep excavation, real loads, buildings that stayed in business while we worked under them.",
        "The deliverable on any commercial steel pier project is engineered bids: pier layout, the reasoning behind it, and documentation suitable for ownership review. Work carries a workmanship warranty, terms vary by service.",
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Multifamily Foundation Repair", "/commercial/multifamily/"],
    ["Residential Steel Piers", "/residential/foundation-repair/steel-piers/"],
    ["Pier Systems Compared", "/resources/pier-systems-explained/"],
  ],
  faqs: [
    ["How much load can a steel pier carry?", "Capacity depends on pier specification and the strata it bears on, verified during driving. Commercial layouts are designed from the structure's actual loads, not a standard spacing chart."],
    ["Can steel piers be installed inside an occupied building?", "Yes. Interior installations run through slab access pits with containment, commonly overnight or in phased sections to keep the property operating."],
    ["Steel versus helical for commercial repair?", "Steel excels in deep compression support under heavy loads; helical systems add tension capacity and shine in poor surface soils and tieback applications. Many commercial scopes use both where conditions vary."],
  ],
  ctaLabel: "Request an engineered assessment",
  ctaHeading: "Heavy structure, moving foundation?",
  ctaSub: "Deep driven support, installed around active operations.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Steel Piers", description: metadata.description!, path: "/commercial/foundation-repair/steel-piers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Commercial Foundation Repair", path: "/services/commercial-foundation-repair/" }, { label: "Steel Piers", path: "/commercial/foundation-repair/steel-piers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
