import type { Metadata } from "next";
import NewConstructionPage from "@/components/site/NewConstructionPage";

export const metadata: Metadata = {
  title: "New Construction Concrete & Tilt-Wall in DFW & Houston",
  description:
    "Engineer-owned new construction concrete, tilt-wall, builder work, and earthwork for builders and developers across DFW and the Houston area. Engineering and concrete under one roof. Send plans for engineered bids.",
  alternates: { canonical: "/new-construction/" },
  openGraph: {
    title: "New Construction Concrete & Tilt-Wall | Cardinal Foundation Services",
    description:
      "Engineered, self-performed commercial concrete, tilt-wall, builder work, and earthwork for new builds across DFW and Houston.",
    url: "/new-construction",
  },
};

export default function NewConstruction() {
  return <NewConstructionPage />;
}
