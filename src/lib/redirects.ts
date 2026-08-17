/* Legacy URL dispositions, served single-hop by src/proxy.ts.
   SOURCE OF TRUTH: cardinal_url_disposition_manifest.csv (87 rows) — NOT
   YET PROVIDED. The rows below are derived from the snapshot bundle's
   SOURCE/DEST headers (~75 rows) plus inferred category parents, marked
   below. When the CSV lands: reconcile every row here against it verbatim
   and populate GONE_410 (currently empty because no 410 rows are known).
   Keys are stored WITHOUT trailing slash; the proxy normalizes lookups. */

export const REDIRECTS_301: Record<string, string> = {
  // ---- Alias redirect gap (launch blocker fix, external audit + probe):
  // short legacy URLs alive on the old site but absent from the sitemap-
  // derived manifest. Each points DIRECTLY at its final destination.
  "/steel-piers": "/residential/foundation-repair/steel-piers/",
  "/helical-piers": "/residential/foundation-repair/helical-piers/",
  "/concrete-pressed-piers": "/residential/foundation-repair/concrete-pressed-piers/",
  "/mudjacking": "/residential/concrete-leveling/mudjacking/",
  "/polyurethane-foam-injection": "/residential/concrete-leveling/polyurethane-foam-injection/",
  "/foundation-repair-fort-worth": "/residential/foundation-repair/",
  "/commercial-foundation-repair": "/services/commercial-foundation-repair/",
  "/foundation-repair-houston": "/locations/houston/",
  "/drainage": "/residential/drainage/",
  "/hybrid-piers": "/residential/foundation-repair/hybrid-piers/",
  "/pier-and-beam": "/residential/foundation-repair/pier-and-beam/",
  "/slab-repair": "/residential/foundation-repair/slab-repair/",
  "/foundation-repair": "/residential/foundation-repair/",
  "/concrete-leveling": "/commercial/concrete-lifting/municipal/",
  "/tilt-wall": "/commercial/tilt-wall/",
  "/post-tension": "/commercial/foundation-repair/post-tension-repair/",
  "/underpinning": "/commercial/foundation-repair/underpinning/",
  "/warehouse-floor-leveling": "/commercial/concrete-lifting/warehouse-floor-leveling/",
  "/commercial-concrete": "/commercial/concrete-construction/slab-repair/",
  // discovery net (probe of the live old site): /retaining-wall/ 301s to
  // the retaining-wall-design legacy URL; resolved to its final page
  "/retaining-wall": "/residential/retaining-walls/",
  // KC page retired (wave 3): out-of-market ranking page removed
  "/kansas-city-foundation-repair": "/",
  // top-level / company
  "/services": "/",
  "/about-us": "/about/",
  "/contact-us": "/contact/",
  "/our-work": "/projects/",
  "/our-work-portfolio": "/projects/",
  "/category/project-portfolio": "/projects/",
  "/category/project-portfolio/commercial": "/projects/",
  "/category/project-portfolio/multi-family": "/projects/",
  // INTERIM: manifest DEST is /field-notes/, which has no content yet
  "/author/cardinal": "/",

  // commercial foundation repair (legacy hub preserved; clean path 301s)
  "/commercial/foundation-repair": "/services/commercial-foundation-repair/",
  "/services/commercial-foundation-repair-contractors": "/services/commercial-foundation-repair/", // inferred parent
  "/services/commercial-foundation-repair-contractors/underpinning-contractors": "/commercial/foundation-repair/underpinning/",
  "/services/commercial-foundation-repair-contractors/drilled-pier-contractors": "/commercial/foundation-repair/drilled-piers/",
  "/services/commercial-foundation-repair-contractors/helical-piers-tieback-contractors": "/commercial/foundation-repair/helical-piers-tiebacks/",
  "/services/commercial-foundation-repair-contractors/hybrid-pier-system-contractors": "/commercial/foundation-repair/hybrid-piers/",
  "/services/commercial-foundation-repair-contractors/post-tension-repair-contractors": "/commercial/foundation-repair/post-tension-repair/",

  // commercial concrete lifting
  "/services/commercial-concrete-lifting-stabilization-contractors": "/commercial/concrete-lifting/", // inferred parent
  "/services/commercial-concrete-lifting-stabilization-contractors/warehouse-floor-leveling-contractors": "/commercial/concrete-lifting/warehouse-floor-leveling/",
  "/services/commercial-concrete-lifting-stabilization-contractors/polyurethane-foam-injection-contractors": "/commercial/concrete-lifting/polyurethane-foam-injection/",
  "/services/commercial-concrete-lifting-stabilization-contractors/commercial-mudjacking-contractors": "/commercial/concrete-lifting/mudjacking/",
  "/services/concrete-leveling-for-cities-and-municipalities": "/commercial/concrete-lifting/municipal/",

  // commercial concrete construction
  "/services/commercial-concrete-installation-repair-contractors": "/commercial/concrete-construction/", // inferred parent
  "/services/commercial-concrete-installation-repair-contractors/commercial-slab-pouring-contractors": "/commercial/concrete-construction/slab-pouring/",
  "/services/commercial-concrete-installation-repair-contractors/expansion-joint-mastic-repair-contractors": "/commercial/concrete-construction/expansion-joint-mastic-repair/",
  "/services/commercial-concrete-installation-repair-contractors/concrete-crack-structural-repair-contractors": "/commercial/concrete-construction/structural-crack-repair/",
  "/services/commercial-concrete-slab-repair": "/commercial/concrete-construction/slab-repair/",
  "/services/commercial-concrete-slab-repair-fort-worth": "/commercial/concrete-construction/slab-repair/",

  // commercial drainage / retaining walls / structural
  "/services/commercial-drainage-stormwater-contractors": "/commercial/drainage/", // inferred parent
  "/services/commercial-drainage-stormwater-contractors/foundation-perimeter-drainage-contractors": "/commercial/drainage/perimeter-drainage/",
  "/services/commercial-drainage-stormwater-contractors/commercial-french-drain-system-contractors": "/commercial/drainage/french-drains/",
  "/services/commercial-retaining-wall-contractors": "/commercial/retaining-walls/", // inferred parent
  "/services/commercial-retaining-wall-contractors/structural-retaining-wall-repair-contractors": "/commercial/retaining-walls/structural-repair/",
  "/services/commercial-retaining-wall-contractors/retaining-wall-tieback-anchor-contractors": "/commercial/retaining-walls/tieback-anchors/",
  "/services/commercial-structural-repair": "/commercial/structural-repair/",

  // commercial specialty
  "/services/parking-garage-concrete-structural-repair": "/commercial/specialty/parking-garage-repair/",
  "/services/lube-pit-foundation-repair-dfw": "/commercial/specialty/lube-pit-foundation-repair/",
  "/services/metal-deck-slab-repair-fort-worth": "/commercial/specialty/metal-deck-slab-repair/",
  "/services/balcony-repair-fort-worth": "/commercial/specialty/balcony-repair/",
  "/services/lightweight-concrete-repair-fort-worth": "/commercial/specialty/lightweight-concrete-repair/",
  "/services/historical-building-foundation-repair": "/commercial/specialty/historical-building-foundation-repair/",
  "/services/commercial-waterproofing-contractors": "/commercial/specialty/waterproofing/",
  "/services/waters-of-the-us-contractors": "/commercial/specialty/waters-of-the-us/",

  // tilt wall / multifamily
  "/services/tilt-wall-construction-contractors": "/commercial/tilt-wall/",
  "/multifamily-foundation-repair-dfw": "/commercial/multifamily/",

  // residential foundation repair
  "/services/foundation-repair-fort-worth": "/residential/foundation-repair/", // manifest: parent joins its content cluster
  "/services/foundation-repair-fort-worth/steel-piers": "/residential/foundation-repair/steel-piers/",
  "/services/foundation-repair-fort-worth/drilled-piers": "/residential/foundation-repair/drilled-piers/",
  "/services/foundation-repair-fort-worth/concrete-pressed-piers": "/residential/foundation-repair/concrete-pressed-piers/",
  "/services/foundation-repair-fort-worth/helical-piers": "/residential/foundation-repair/helical-piers/",
  "/services/foundation-repair-fort-worth/hybrid-piers": "/residential/foundation-repair/hybrid-piers/",
  "/services/foundation-repair-fort-worth/remedial-piers": "/residential/foundation-repair/",
  "/services/foundation-repair-fort-worth/slab-repair-fort-worth": "/residential/foundation-repair/slab-repair/",
  "/services/foundation-repair-fort-worth/pier-and-beam-foundation-repair": "/residential/foundation-repair/pier-and-beam/",
  "/services/foundation-repair-fort-worth/retaining-wall-design-fort-worth": "/residential/retaining-walls/",
  "/services/foundation-repair-fort-worth/retaining-wall-repair-fort-worth": "/residential/retaining-walls/",
  "/drilled-piers": "/residential/foundation-repair/drilled-piers/",
  "/post-tension-slab-repair": "/residential/foundation-repair/post-tension-slab-repair/",

  // residential concrete leveling
  "/services/concrete-leveling-fort-worth": "/residential/concrete-leveling/",
  "/services/mudjacking": "/residential/concrete-leveling/mudjacking/",
  "/services/mudjacking-fort-worth": "/residential/concrete-leveling/mudjacking/",
  "/services/polyurethane-foam-injection": "/residential/concrete-leveling/polyurethane-foam-injection/",
  "/services/polyurethane-foam-injection-contractors-fort-worth": "/residential/concrete-leveling/polyurethane-foam-injection/",
  "/concrete-crack-repair": "/residential/concrete-leveling/concrete-crack-repair/",

  // residential drainage
  "/services/drainage-repair-fort-worth": "/residential/drainage/",
  "/services/drainage": "/residential/drainage/",
  "/services/french-drain-installation-repair-fort-worth": "/residential/drainage/french-drains/",
  "/french-drains": "/residential/drainage/french-drains/",
  "/area-drains": "/residential/drainage/area-drains/",

  // new construction
  "/grading": "/new-construction/earthwork-grading/",
  "/concrete-slab-contractors-fort-worth": "/new-construction/concrete-flatwork/",
  "/concrete-slabe-contractors-fort-worth": "/new-construction/concrete-flatwork/",
  "/stamped-concrete-contractor-fort-worth": "/new-construction/concrete-flatwork/",

  // locations
  "/services/foundation-repair-houston": "/locations/houston/",
  "/foundation-repair-in-dallas-tx": "/locations/dallas/",
  "/services/balcony-repair-possum-kingdom-lake": "/locations/possum-kingdom-lake/",
  "/services/concrete-leveling-possum-kingdom-lake": "/locations/possum-kingdom-lake/",
  "/services/structural-foundation-repair-in-possum-kingdom-lake": "/locations/possum-kingdom-lake/",

  // resources
  "/foundation-pier-types-explained-cornerstone": "/resources/pier-systems-explained/",

  // project case studies
  "/baytown-multi-family": "/projects/baytown-multi-family/",
  "/commercial-foundation-stabilization-creekside-erosion-repair": "/projects/commercial-foundation-stabilization-creekside-erosion-repair/",
  "/diplomat-drive-polyurethane-injection-industrial-foundation-lift-void-fill": "/projects/diplomat-drive-polyurethane-injection-industrial-foundation-lift-void-fill/",
  "/lewisville-tx-multi-family-pier-stabilization-foundation-lifting-and-drainage-repair": "/projects/lewisville-tx-multi-family-pier-stabilization-foundation-lifting-and-drainage-repair/",
  "/multi-family-foundation-repair-in-austin-tx": "/projects/multi-family-foundation-repair-in-austin-tx/",
  "/multi-family-foundation-repair-in-carrolton-tx": "/projects/multifamily-foundation-repair-carrollton-tx/",
  "/restaurant-foundation-repair-foam-injection": "/projects/restaurant-foundation-repair-foam-injection/",
  "/steel-piers-n-stemmons": "/projects/steel-piers-n-stemmons/",
  "/tilt-wall-foundation-drainage-restoration": "/projects/tilt-wall-foundation-drainage-restoration/",
};

/* Rows the manifest marks 410 Gone. */
export const GONE_410: string[] = ["/services-2", "/elementor-6458", "/iv"];
