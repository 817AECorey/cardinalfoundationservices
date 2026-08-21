/* JSON-LD builders for content pages: Service + BreadcrumbList only.
   HARD RULE: no AggregateRating or review markup anywhere on the site. */
import { FOOTPRINT, treeForPath } from "./footprint";

const BASE = "https://cardinalfoundationservices.com";

const PROVIDER = {
  "@type": "GeneralContractor",
  name: "Cardinal Foundation Services",
  legalName: "Cardinal Foundation Services, LLC",
  telephone: "+1-972-656-8251",
  email: "info@cardinalfoundationservices.com",
  url: BASE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "803 Forest Ridge Dr, Suite #205",
    addressLocality: "Bedford",
    addressRegion: "TX",
    postalCode: "76022",
    addressCountry: "US",
  },
};

/* LocalBusiness entity schema. NO AggregateRating/review markup, per spec. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    ...PROVIDER,
    /* geo is city-level for Bedford pending an exact pin for the suite */
    geo: { "@type": "GeoCoordinates", latitude: 32.844, longitude: -97.143 },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    logo: BASE + "/cardinal-logo.png",
    areaServed: [
      { "@type": "Place", name: "Dallas-Fort Worth" },
      { "@type": "Place", name: "Houston" },
      { "@type": "Place", name: "Texas" },
    ],
    sameAs: [
      "https://www.instagram.com/cardinalfoundationservices/",
      "https://www.facebook.com/CardinalFoundationServices/",
      "https://www.youtube.com/@CardinalFoundationServices",
      "https://www.tiktok.com/@cardinalfoundationservic",
      "https://www.linkedin.com/company/cardinal-foundation-services/",
    ],
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string; serviceType?: string; areaServed?: string[]; phone?: string }) {
  /* areaServed derives from the per-tree footprint (same data as the
     visible "Where we perform this work" component) unless a page passes
     an explicit override (location pages, statewide specialties). */
  const tree = treeForPath(opts.path);
  const areas = opts.areaServed ?? (tree ? FOOTPRINT[tree].areaServed : ["Dallas-Fort Worth", "Texas"]);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType ?? opts.name,
    description: opts.description,
    url: BASE + opts.path,
    provider: opts.phone ? { ...PROVIDER, telephone: opts.phone } : PROVIDER,
    areaServed: areas.map((a) => ({ "@type": "Place", name: a })),
  };
}

export function breadcrumbJsonLd(crumbs: { label: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.path ? { item: BASE + c.path } : {}),
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
