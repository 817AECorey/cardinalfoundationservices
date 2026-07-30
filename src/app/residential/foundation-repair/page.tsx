import type { Metadata } from "next";
import ResidentialFoundationPage from "@/components/site/ResidentialFoundationPage";

export const metadata: Metadata = {
  title: "Residential Foundation Repair for Complex & High-End Homes",
  description:
    "Engineer-led residential foundation repair for complex structural movement, large and custom homes, retaining walls, and the jobs other contractors refer out. Free inspection report, written quote in one business day, financing available. Serving DFW and Houston.",
  alternates: { canonical: "/residential/foundation-repair/" },
  openGraph: {
    title: "Residential Foundation Repair | Cardinal Foundation Services",
    description:
      "Large, structural, and full-scope residential foundation repairs, inspected by an engineer and self-performed. Serving DFW and the Houston area.",
    url: "/residential/foundation-repair",
  },
};

export default function ResidentialFoundationRepair() {
  return <ResidentialFoundationPage />;
}
