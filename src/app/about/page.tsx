import type { Metadata } from "next";
import AboutPage from "@/components/site/AboutPage";
import { JsonLd, localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Title/meta from content/25_about (E-E-A-T anchor). */
export const metadata: Metadata = {
  title: { absolute: "About Cardinal | Engineer-Owned Foundation Repair, Fort Worth TX" },
  description:
    "Cardinal Foundation Services is an engineer-owned foundation repair and commercial concrete contractor in Fort Worth, TX, serving DFW and Texas with 35+ years of combined team experience.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Cardinal Foundation Services",
    description:
      "Engineer-owned foundation repair and commercial concrete contractor in Fort Worth, TX, serving DFW and Texas.",
    url: "/about/",
  },
};

export default function About() {
  return (
    <>
      <JsonLd data={[localBusinessJsonLd(), breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "About", path: "/about/" }])]} />
      <AboutPage />
    </>
  );
}
