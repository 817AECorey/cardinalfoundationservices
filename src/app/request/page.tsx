import type { Metadata } from "next";
import RequestPage from "@/components/site/RequestPage";
import { JsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request Your Free Inspection",
  description:
    "Request a free, engineer-led foundation inspection from Cardinal Foundation Services. Residential inspections include a mapped elevation survey and a quote within one business day.",
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
