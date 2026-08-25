import type { Metadata } from "next";
import RequestPage from "@/components/site/RequestPage";
import { JsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request Your Free Inspection",
  description:
    "Schedule a free, no-obligation inspection or assessment with Cardinal Foundation Services. Engineer-led, documented findings, and a clear next step.",
  alternates: { canonical: "/request/" },
};

export default function Request() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Request an Inspection", path: "/request/" }])} />
      <RequestPage />
    </>
  );
}
