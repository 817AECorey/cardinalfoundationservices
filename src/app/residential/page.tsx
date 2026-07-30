import type { Metadata } from "next";
import ResidentialPage from "@/components/site/ResidentialPage";

export const metadata: Metadata = {
  title: "Residential Foundation Repair in DFW & Houston",
  description:
    "Engineer-owned residential foundation repair for complex structural issues, large retaining walls, concrete lifting, and large custom homes across DFW and the Houston area. Free inspection report, financing available, quote in one business day.",
  alternates: { canonical: "/residential/" },
  openGraph: {
    title: "Residential Foundation Repair | Cardinal Foundation Services",
    description:
      "Engineered, self-performed residential foundation repair for complex, large, and full-scope home projects across DFW and Houston.",
    url: "/residential",
  },
};

export default function Residential() {
  return <ResidentialPage />;
}
