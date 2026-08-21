import type { Metadata } from "next";
import ContactPage from "@/components/site/ContactPage";
import { JsonLd, localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Title/meta from content/26_contact. */
export const metadata: Metadata = {
  title: { absolute: "Contact Cardinal Foundation Services | Fort Worth, TX" },
  description:
    "Contact Cardinal Foundation Services: (972) 656-8251 or info@cardinalfoundationservices.com. Free residential foundation inspections across DFW and the Houston area.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    images: [{ url: "/images/og-default.png" }],
    title: "Contact Cardinal Foundation Services",
    description:
      "Free residential foundation inspections across DFW and the Houston area. Commercial inquiries route to an engineered assessment.",
    url: "/contact/",
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={[localBusinessJsonLd(), breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Contact", path: "/contact/" }])]} />
      <ContactPage />
    </>
  );
}
