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
    addressLocality: "Fort Worth",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

/* LocalBusiness entity schema. NO AggregateRating/review markup, per spec.
   TODO(BLOCKED): populate sameAs with the client's Facebook, Instagram,
   LinkedIn, and YouTube profile URLs when provided. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    ...PROVIDER,
    areaServed: [
      { "@type": "Place", name: "Dallas-Fort Worth" },
      { "@type": "Place", name: "Houston" },
      { "@type": "Place", name: "Texas" },
    ],
    sameAs: [] as string[], // TODO(BLOCKED): Facebook, Instagram, LinkedIn, YouTube URLs
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string; serviceType?: string; areaServed?: string[] }) {
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
    provider: PROVIDER,
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
