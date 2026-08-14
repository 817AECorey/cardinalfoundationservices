import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/site/ServicePage";
import { JsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/schema";

/* Redirect destination, flagship citation asset. TABLE-FIRST format:
   answer-first intro, comparison table high on page, exact-match
   "Steel Piers vs. Concrete Piers" section. */

export const metadata: Metadata = {
  title: { absolute: "Pier Systems Compared: Steel, Concrete & Helical | Cardinal" },
  description:
    "Steel piers vs concrete piers vs helical vs drilled: how each foundation pier system works, how deep each goes, what each costs relative to the others, and which situations fit each. A plain comparison from a Texas foundation contractor.",
  alternates: { canonical: "/resources/pier-systems-explained/" },
};

const data: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Resources" }, { label: "Pier Systems Compared" }],
  kicker: "Plain comparison",
  h1: "Foundation Pier Systems Compared",
  intro: [
    "A foundation pier is a support installed beneath a structure to carry its weight down to soil that does not move. The main systems used in Texas are pressed concrete pilings, steel piers, drilled piers, helical piers, and hybrid combinations. They differ in how they are installed, how deep they reach, what they cost relative to each other, and which structures and soils they fit. This guide compares them plainly. No system is best for every building; the soil, the load, and the access decide.",
  ],
  sections: [
    {
      h2: "Comparison at a glance",
      table: {
        head: ["System", "How it is installed", "Typical depth reach", "Relative cost", "Strongest fit"],
        rows: [
          ["Pressed concrete pilings", "Precast concrete sections hydraulically pressed into soil using the structure's weight", "Moderate; commonly limited by soil resistance within the active zone or just below", "$", "Lighter homes, shallower active soils, budget-aware repairs"],
          ["Steel piers", "Steel pipe sections hydraulically driven to refusal on load-bearing strata", "Deepest of the common systems", "$$$", "Heavier structures, deep active clay, longest-reach support"],
          ["Drilled piers", "Shaft drilled to design depth, steel reinforcement set, concrete poured in place", "Engineered to design depth", "$$", "Designed supports, additions, decks and stairs, new construction"],
          ["Helical piers", "Steel shafts with helix plates mechanically screwed into soil to torque specification", "Engineered; excellent in poor surface soils", "$$", "Lighter structures, tieback applications, limited-access sites, new builds"],
          ["Hybrid piers", "Combination systems, commonly concrete with steel components", "Between pressed and steel", "$$", "Balance of depth, capacity, and cost control where full steel is not required"],
        ],
        note: "Relative cost symbols compare systems to each other, not to a price. Actual numbers depend on pier count, depth, and access; the cost guide explains the variables.",
      },
    },
    {
      h2: "Steel Piers vs. Concrete Piers",
      paras: [
        "The most common comparison homeowners ask about, and the honest version is short: steel piers go deeper and carry more; pressed concrete pilings cost less and are often sufficient.",
        "Pressed concrete pilings are pushed into the ground until soil resistance stops them, which in much of North Texas can mean stopping within or near the active clay zone. For lighter homes on lots where that resistance point is decent bearing soil, they perform well at the lowest installed cost, which is why they are the region's most common repair pier.",
        "Steel piers are driven until they reach strata that genuinely refuses further driving, routinely far deeper than pressed pilings reach. That depth puts the support below the soil that swells and shrinks with the weather, which is the whole problem in expansive clay country. Steel costs more per pier, and it buys depth, capacity, and indifference to the moisture cycle.",
        "Neither is universally right. A light single-story home on shallow active soil rarely needs steel's depth. A heavy two-story on deep active clay is a poor place to economize. And no pier should be selected from an article: elevation data and soil behavior at your structure make the call, which is what an inspection is for.",
      ],
    },
    {
      h2: "The other systems, briefly",
      bullets: [
        ["Drilled piers ", "are built in the ground rather than pushed into it: reinforced concrete formed at a designed depth and diameter. They shine where a specific engineered support is called for, and for structures like additions, porches, decks, and stairs. They are also a backbone of Texas new construction."],
        ["Helical piers ", "screw into the soil like giant threaded anchors, with capacity verified by installation torque. They excel where surface soils are poor, where access is tight, and in tension applications like retaining wall tiebacks, which pure compression piers cannot do."],
        ["Hybrid systems ", "combine materials, most commonly concrete pilings with steel components, to buy some of steel's depth at less than steel's cost. They are a legitimate middle path when conditions fit."],
      ],
    },
    {
      h2: "Questions this comparison cannot answer",
      paras: [
        "Which system your building needs. That depends on measured elevations, soil behavior at your site, structure weight, and access, and it is exactly what a foundation check determines. Sometimes the finding is that no pier system is needed at all, and drainage correction or monitoring is the honest scope. Cardinal installs every system above, residential and commercial, so the recommendation follows the findings rather than the inventory.",
      ],
    },
  ],
  related: [
    ["Steel Piers (Residential)", "/residential/foundation-repair/steel-piers/"],
    ["Drilled Piers (Residential)", "/residential/foundation-repair/drilled-piers/"],
    ["Post-Tension Slab Repair", "/residential/foundation-repair/post-tension-slab-repair/"],
    ["Residential Foundation Repair", "/residential/foundation-repair/"],
    ["Commercial Foundation Repair", "/services/commercial-foundation-repair/"],
  ],
  faqs: [
    ["Which foundation pier system lasts the longest?", "Any of them, installed correctly in the right conditions: longevity comes from bearing on stable strata more than from the material. Steel's depth advantage matters most where the active soil zone is deep."],
    ["Are steel piers worth the extra cost?", "When the structure's weight or the soil's depth calls for them, yes, decisively. When a lighter system reaches adequate bearing, the extra cost buys margin you may not need. The inspection data answers it per home."],
    ["What are pressed concrete pilings?", "Precast concrete cylinders pressed into the soil in sequence using the structure's own weight as the reaction force, the most common and most economical repair pier in North Texas."],
    ["Can different pier types be mixed on one foundation?", "Yes, and engineered scopes sometimes do exactly that, matching the system to conditions that vary across a single structure."],
    ["Do commercial buildings use the same pier systems?", "The same families at larger capacities, with underpinning, tiebacks, and design-built drilled shafts added. See the commercial foundation repair pages for that side."],
  ],
  ctaLabel: "Schedule a free foundation check",
  ctaHeading: "Not sure what your foundation needs?",
  ctaSub: "The inspection data makes the call, not the article.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        serviceJsonLd({ name: "Foundation Pier Systems Compared", serviceType: "Foundation Repair", description: metadata.description!, path: "/resources/pier-systems-explained/", areaServed: ["Texas"] }),
        breadcrumbJsonLd([{ label: "Home", path: "/" }, { label: "Resources" }, { label: "Pier Systems Compared", path: "/resources/pier-systems-explained/" }]),
      ]} />
      <ServicePage data={data} />
    </>
  );
}
