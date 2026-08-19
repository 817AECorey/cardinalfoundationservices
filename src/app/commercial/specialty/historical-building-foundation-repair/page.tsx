import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Snapshot-parity page (source: /services/historical-building-foundation-repair/). */

export const metadata: Metadata = {
  title: { absolute: "Historic Building Foundation Repair in DFW | Cardinal" },
  description:
    "Foundation repair for historic homes, buildings, churches, and commercial landmarks across Fort Worth, Dallas, and North Texas, balancing engineering with preservation sensitivity.",
  alternates: { canonical: "/commercial/specialty/historical-building-foundation-repair/" },
  openGraph: { images: [{ url: "/images/historic-building-foundation-restoration-pilot-point.webp", width: 1280, height: 1706 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Commercial", href: "/commercial/" }, { label: "Specialty Services", href: "/commercial/specialty/" }, { label: "Historical Building Foundation Repair" }],
  kicker: "Specialty Structural · Fort Worth & Dallas",
  h1: "Historic Building Foundation Repair",
  heroImage: { src: "/images/historic-building-foundation-restoration-pilot-point.webp", alt: "Equipment staged at a historic Pilot Point building during foundation restoration", width: 1280, height: 1706 },
  intro: [
    "Historic buildings are not just structures: they are stories, symbols, and irreplaceable parts of the community's history. Cardinal Foundation Services specializes in foundation repair for historical homes, buildings, churches, and commercial landmarks across Fort Worth, Dallas, and the surrounding North Texas region, bringing a careful balance of engineering and preservation sensitivity to every project. Whether it is a 1920s craftsman bungalow in Fairmount, a historic storefront in downtown Fort Worth, or a Victorian-era property in Old East Dallas, the repair approach is tailored to protect the structure's integrity, appearance, and value.",
  ],
  sections: [
    {
      h2: "Why historic buildings require specialized foundation repair",
      img: { src: "/images/historic-building-foundation-repair-dfw.webp", alt: "Historic building foundation repair in DFW" },
      paras: [
        "Many historical buildings in Fort Worth and Dallas were constructed long before modern drainage systems, concrete slabs, and soil stabilization techniques. Over time, shifting clay soils, moisture intrusion, and outdated construction methods can compromise their foundations. Common issues we resolve include uneven floors and sagging beams, cracked plaster and separating walls, doors and windows that will not open properly, rotting wood beams or rusted metal supports, crumbling mortar or displaced bricks, and settling or leaning piers.",
      ],
    },
    {
      h2: "Our historic foundation repair services",
      bullets: [
        ["Pier and beam foundation repair. ", "Realigning and reinforcing crawlspace foundations common in early 20th-century homes and commercial buildings."],
        ["Shoring and structural stabilization. ", "Temporary or permanent bracing solutions to support and stabilize aging structures during foundation work."],
        ["Steel and concrete pier installation. ", "Minimally invasive piers that stabilize shifting or sinking foundations while protecting original materials."],
        ["Drainage and moisture management. ", "Custom grading, french drains, and gutter systems to divert water away from vulnerable historic foundations."],
        ["Masonry and mortar matching. ", "Repairing or replacing cracked brick, stone, or mortar with historically accurate techniques and materials."],
        ["Preservation-focused engineering solutions. ", "Custom foundation plans that meet city guidelines and landmark commission standards where applicable."],
      ],
    },
    {
      h2: "How we work on historic structures",
      paras: [
        "Preservation-minded planning that avoids damaging original materials, experience with Texas clay and how it interacts with pier and beam systems and early construction methods, collaboration with architects, preservationists, and historical consultants when needed, familiarity with local historic ordinances, and clean, discreet work sites that respect the property and its neighborhood.",
      ],
    },
  ],
  related: [
    ["Specialty Services", "/commercial/specialty/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
    ["Residential Foundation Repair", "/residential/foundation-repair/"],
  ],
  faqs: [],
  ctaLabel: "Request an assessment",
  ctaHeading: "Your historic building has stood the test of time.",
  ctaSub: "Make sure it continues to, with a preservation-conscious plan.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Historic Building Foundation Repair", description: metadata.description!, path: "/commercial/specialty/historical-building-foundation-repair/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Commercial", path: "/commercial/" }, { label: "Specialty Services", path: "/commercial/specialty/" }, { label: "Historical Building Foundation Repair", path: "/commercial/specialty/historical-building-foundation-repair/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
