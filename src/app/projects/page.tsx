import type { Metadata } from "next";
import OurWorkPage from "@/components/site/OurWorkPage";

/* Title/meta from content/24_projects-hub. */
export const metadata: Metadata = {
  title: { absolute: "Foundation Repair Projects & Case Studies | Cardinal" },
  description:
    "Documented foundation and structural projects across Texas: tilt wall, multifamily, industrial, steel piers, and commercial repairs with conditions found, methods used, and results.",
  alternates: { canonical: "/projects/" },
  openGraph: {
    images: [{ url: "/images/project-austin-hero.webp" }],
    title: "Projects and Case Studies | Cardinal Foundation Services",
    description:
      "Documented foundation and structural projects across Texas, with conditions found, methods used, and results.",
    url: "/projects/",
  },
};

export default function OurWork() {
  return <OurWorkPage />;
}
