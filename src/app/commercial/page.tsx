import type { Metadata } from "next";
import CommercialPage from "@/components/site/CommercialPage";

/* Title/meta from content/15; approved template copy wins on the body
   (run-2 fork-page rule). */
export const metadata: Metadata = {
  title: { absolute: "Commercial Foundation & Concrete Services in DFW | Cardinal" },
  description:
    "Commercial foundation repair, concrete lifting, tilt wall, drainage, and structural services for DFW and Texas. Engineered assessments, self-performed crews, work phased around operations.",
  alternates: { canonical: "/commercial/" },
  openGraph: {
    title: "Commercial Foundation and Concrete Services | Cardinal Foundation Services",
    description:
      "Commercial foundation repair, concrete lifting, tilt wall, drainage, and structural services for DFW and Texas.",
    url: "/commercial/",
  },
};

export default function Commercial() {
  return <CommercialPage />;
}
