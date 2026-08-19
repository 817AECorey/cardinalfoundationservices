import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Merge destination x3 (stamped, slab contractors, typo page); content/21. */

export const metadata: Metadata = {
  title: { absolute: "Concrete Flatwork, Slabs & Stamped Concrete in DFW | Cardinal" },
  description:
    "Concrete flatwork for DFW: new slabs, driveways, patios, walkways, and stamped decorative concrete, poured by the contractor that understands the soil underneath. Request a quote.",
  alternates: { canonical: "/new-construction/concrete-flatwork/" },
  openGraph: { images: [{ url: "/images/concrete-flatwork-forms-stamped.webp", width: 1600, height: 1200 }], },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "New Construction", href: "/new-construction/" }, { label: "Concrete Flatwork" }],
  kicker: "New Construction · DFW",
  h1: "Concrete Flatwork, Slabs, and Stamped Concrete",
  heroImage: { src: "/images/concrete-flatwork-forms-stamped.webp", alt: "Formed slab and flatwork prepared for concrete", width: 1600, height: 1200 },
  intro: [
    "Concrete lasts as long as the ground it sits on, which is why a foundation company pours good flatwork: we prepare the soil like the slab's life depends on it, because it does. Cardinal pours concrete slabs, driveways, patios, walkways, and stamped decorative concrete across DFW for homeowners, builders, and light commercial projects.",
  ],
  sections: [
    {
      h2: "Concrete slabs",
      img: { src: "/images/grade-beam-forms-new-foundation.webp", alt: "Formed grade beams ready for a new foundation pour" },
      paras: [
        "New slabs for garages, shops, additions, and outbuildings, poured over properly prepared and compacted base with reinforcement matched to use. Site soil in North Texas is expansive clay, and slab longevity is decided in the prep: grading, moisture conditioning, base, and drainage away from the pour.",
      ],
    },
    {
      h2: "Driveways, patios, and walkways",
      img: { src: "/images/nc-flatwork-driveways.webp", alt: "Driveway and flatwork concrete repair" },
      paras: [
        "Replacement and new construction, from single-approach driveways to full outdoor living flatwork. If your existing concrete has settled rather than failed, concrete lifting is often the smarter spend, and we will tell you which side of that line your project sits on, since we do both.",
      ],
    },
    {
      h2: "Stamped and decorative concrete",
      img: { src: "/images/nc-flatwork-stamped.webp", alt: "Stamped and decorative concrete patio" },
      paras: [
        "Stamped finishes for patios, walkways, and pool surrounds: pattern and color options that dress up the surface without compromising the pour underneath. Decorative concrete follows the same rule as structural concrete here, prep first, pretty second.",
      ],
    },
    {
      h2: "Who this serves",
      img: { src: "/images/new-construction-flatwork-fill1.webp", alt: "Who this serves" },
      paras: [
        "Homeowners upgrading or replacing exterior concrete, builders who need a flatwork sub that shows up with engineering literacy, and commercial projects routed through our commercial slab pouring service. Written quotes for residential projects, engineered bids for builder and commercial work; workmanship warranty applies, terms vary by service.",
      ],
    },
  ],
  related: [
    ["New Construction", "/new-construction/"],
    ["Earthwork & Grading", "/new-construction/earthwork-grading/"],
    ["Concrete Leveling (repair side)", "/residential/concrete-leveling/"],
  ],
  faqs: [
    ["Why does new concrete in DFW crack so often?", "Usually the ground, not the concrete: poorly prepared expansive clay moves and takes the slab with it. Control joints manage normal shrinkage; soil prep manages the rest."],
    ["Do you tear out and replace settled driveways?", "When replacement is right, yes. When the slab is sound and only settled, lifting it costs a fraction of replacement, and we quote honestly between our own two services."],
    ["Can stamped concrete be repaired or must it be replaced?", "Depends on the damage. Surface issues and settled sections often have options short of replacement; the evaluation covers them."],
  ],
  ctaLabel: "Request a quote",
  ctaHeading: "Pouring something new?",
  ctaSub: "Prep first. The slab's life depends on it.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Concrete Flatwork, Slabs, and Stamped Concrete", description: metadata.description!, path: "/new-construction/concrete-flatwork/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "New Construction", path: "/new-construction/" }, { label: "Concrete Flatwork", path: "/new-construction/concrete-flatwork/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
