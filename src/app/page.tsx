import type { Metadata } from "next";
import DirectionD from "@/components/site/DirectionD";
import { JsonLd, localBusinessJsonLd } from "@/lib/schema";

/* Homepage self-canonical; title/description inherit from the root layout
   (content/14). LocalBusiness JSON-LD carries the entity, never review markup. */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <DirectionD />
    </>
  );
}
