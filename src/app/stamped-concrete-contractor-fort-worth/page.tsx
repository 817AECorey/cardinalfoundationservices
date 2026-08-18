import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Top-level legacy ranking URL by spec (like /services/commercial-foundation-repair/):
   the exact path ranks; never nest or rename it. Residential category. */

export const metadata: Metadata = {
  title: { absolute: "Fort Worth Stamped Concrete Service | Patios, Driveways, Sidewalks" },
  description:
    "Stamped concrete contractors in Fort Worth with Cardinal Foundation Services. Patios, driveways, and pool decks, custom, durable designs.",
  alternates: { canonical: "/stamped-concrete-contractor-fort-worth/" },
  openGraph: { images: [{ url: "/images/stamped-concrete-patios-fort-worth.webp" }] },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Residential", href: "/residential/" }, { label: "Stamped Concrete" }],
  kicker: "Stamped Concrete · Fort Worth",
  h1: "Transform Your Space",
  heroImage: { src: "/images/stamped-concrete-patios-fort-worth.webp", alt: "Stamped concrete patio with a decorative pattern", width: 1000, height: 1000 },
  intro: [
    "Elevate your property's aesthetic with Cardinal Foundation Services, your trusted stamped concrete contractor in Fort Worth. We specialize in creating high-quality, decorative stamped concrete surfaces that blend beauty with functionality, perfect for patios, driveways, pool decks, and more.",
  ],
  sections: [
    {
      h2: "Premier Stamped Concrete Contractor in Fort Worth, Texas",
      img: { src: "/images/stamped-concrete-finished.webp", alt: "Stamping mat being applied to fresh concrete during a stamped concrete installation" },
      paras: [
        "Stamped concrete offers a durable and versatile alternative to traditional paving methods, allowing for a range of textures and patterns that mimic more expensive materials like stone, brick, or wood. At Cardinal Foundation Services, we provide custom solutions that cater to your unique style and property requirements.",
      ],
      steps: [
        ["Experienced Craftsmanship", "Our team of experts has years of experience designing and installing stamped concrete, ensuring attention to detail and high-quality finishes."],
        ["Custom Design Options", "We offer a wide range of textures, patterns, and color combinations to perfectly match your design aspirations and existing architecture."],
        ["Durable & Low Maintenance", "Not only does stamped concrete look great, but it's also designed to last and requires minimal upkeep, making it a cost-effective option."],
      ],
    },
    {
      h2: "Stamped Concrete Patios",
      paras: ["Create a stunning outdoor living area with our diverse patterns and color options."],
      img: { src: "/images/stamped-concrete-patios-fort-worth.webp", alt: "Stamped concrete patio with a decorative pattern at a Fort Worth home" },
    },
    {
      h2: "Stamped Concrete Driveways",
      paras: ["Enhance curb appeal with a durable, low-maintenance driveway that stands out."],
      img: { src: "/images/stamped-concrete-driveways-in-fort-wrth-texas-2.webp", alt: "Stamped concrete driveway with a stone-look finish" },
    },
    {
      h2: "Stamped Concrete Pool Decks",
      paras: ["Ensure a non-slip, attractive surface around your pool that withstands the elements."],
      img: { src: "/images/stamped-concrete-pool-deck-fort-worth.webp", alt: "Stamped concrete pool deck surrounding a backyard pool" },
    },
    {
      h2: "Stamped Concrete Sidewalks",
      paras: ["Add character and style to your walkways with designs that complement your landscape."],
      img: { src: "/images/stamped-concrete-sidewalk-fort-worth.webp", alt: "Stamped concrete sidewalk with a patterned surface" },
      parasAfter: [
        "Ready to upgrade your property with beautiful, durable stamped concrete in Fort Worth? Contact Cardinal Foundation Services today to discuss your project.",
      ],
    },
  ],
  related: [
    ["Concrete Leveling", "/residential/concrete-leveling/"],
    ["Concrete Flatwork", "/new-construction/concrete-flatwork/"],
    ["Request an Inspection", "/request/"],
  ],
  faqs: [
    ["What makes stamped concrete a good choice for patios and driveways?", "Stamped concrete is highly durable, cost-effective, and customizable, making it an ideal choice for creating attractive, functional outdoor spaces."],
    ["How long does it take to install stamped concrete?", "Installation times vary based on the project size and complexity, but we typically complete most projects within a few days."],
    ["How do I maintain my stamped concrete surface?", "Maintenance is straightforward. Regular cleaning and periodic resealing will keep your stamped concrete looking new for years."],
  ],
  ctaLabel: "Request a Free Inspection",
};

export default function StampedConcrete() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Stamped Concrete", serviceType: "Decorative Concrete", description: metadata.description!, path: "/stamped-concrete-contractor-fort-worth/" }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Residential", path: "/residential/" }, { label: "Stamped Concrete", path: "/stamped-concrete-contractor-fort-worth/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
