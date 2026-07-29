import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/commercial-foundation-repair-contractors/drilled-pier-contractors/). */

export const metadata: Metadata = {
  title: { absolute: "Commercial Drilled Pier Contractors in DFW | Cardinal Foundation Services" },
  description:
    "Engineered drilled pier installation in DFW: deep foundation shafts for warehouses, offices, industrial, and municipal structures, for new construction and retrofit stabilization. Request an assessment.",
  alternates: { canonical: "/commercial/foundation-repair/drilled-piers/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Commercial Foundation Repair", href: "/services/commercial-foundation-repair/" }, { label: "Drilled Piers" }],
  kicker: "Commercial Foundation Repair · DFW",
  h1: "Drilled Piers for Commercial Buildings",
  intro: [
    "When commercial structures are built on unstable or expansive soils, shallow foundations can settle and create long-term structural risk. Cardinal Foundation Services provides engineered drilled pier installation across DFW, serving Fort Worth, Dallas, and surrounding metroplex cities. Drilled piers, also called drilled shafts or caissons, are a proven deep foundation solution for warehouses, office buildings, industrial facilities, municipal structures, and large commercial developments. In North Texas they are commonly selected when heavy loads require deep, consistent bearing capacity below active clay layers, with installation methods, reinforcement placement, and load-transfer planning coordinated for long-term performance and code compliance.",
  ],
  sections: [
    {
      h2: "What are drilled piers?",
      paras: [
        "Drilled piers are deep foundation elements created by drilling a shaft to design depth and filling it with reinforced concrete. The pier transfers structural load to competent soil or bearing strata deeper below grade, helping reduce differential settlement and structural movement. They are widely used in commercial construction and stabilization where surface soils cannot reliably support long-term load demands.",
      ],
    },
    {
      h2: "Our commercial drilled pier services",
      bullets: [
        ["New construction deep foundations. ", "Drilled pier systems designed for commercial buildings requiring engineered deep support."],
        ["Retrofit drilled piers for settlement. ", "Install drilled piers beneath existing foundations experiencing movement, in coordination with commercial foundation repair."],
        ["Column and grade beam load support. ", "Deep load transfer beneath high-load columns and structural bearing points."],
        ["Large-footprint stabilization. ", "Stabilization strategies for expansive commercial footprints with variable soil conditions."],
      ],
    },
    {
      h2: "Where drilled piers are used",
      paras: [
        "Warehouses and distribution centers, office buildings and corporate campuses, retail developments, industrial and manufacturing facilities, municipal and government buildings, and parking structures and elevated slabs. Where lateral pressure or wall movement is involved, projects may also integrate helical tieback systems or coordinate with our commercial retaining wall work. Serving Fort Worth, Dallas, Arlington, Irving, Grand Prairie, Plano, Garland, Mesquite, Grapevine, Mansfield, and surrounding DFW metroplex cities.",
      ],
    },
  ],
  related: [
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Helical Piers & Tiebacks", "/commercial/foundation-repair/helical-piers-tiebacks/"],
    ["Commercial Retaining Walls", "/commercial/retaining-walls/"],
    ["Residential Drilled Piers", "/residential/foundation-repair/drilled-piers/"],
  ],
  faqs: [
    ["When are drilled piers preferred over helical piers?", "Drilled piers are often selected for higher load requirements or when larger diameter shafts are needed."],
    ["Can drilled piers be installed for existing buildings?", "Yes. Retrofit drilled piers can stabilize foundations experiencing settlement."],
    ["Do drilled piers require engineering design?", "Commercial drilled pier systems are typically engineered to meet load and code requirements."],
  ],
  ctaLabel: "Request a commercial assessment",
  ctaHeading: "Heavy loads on unstable soil?",
  ctaSub: "Schedule a DFW site evaluation to protect your building and maintain operational stability.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Commercial Drilled Piers", description: metadata.description!, path: "/commercial/foundation-repair/drilled-piers/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Commercial Foundation Repair", path: "/services/commercial-foundation-repair/" }, { label: "Drilled Piers", path: "/commercial/foundation-repair/drilled-piers/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
