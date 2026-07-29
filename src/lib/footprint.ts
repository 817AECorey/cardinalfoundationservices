/* Geographic footprint policy, per tree. SINGLE SOURCE: the visible
   "Where we perform this work" component and every Service schema's
   areaServed are both generated from this data, so text and markup
   always match.
     residential      -> DFW Metroplex + Houston area
     commercial       -> DFW + Texas (larger/specialty statewide)
     new construction -> DFW area
   Organization-level LocalBusiness markup keeps the full footprint. */

export type TreeKey = "residential" | "commercial" | "newcon";

export const FOOTPRINT: Record<TreeKey, { areaServed: string[] }> = {
  residential: { areaServed: ["Dallas-Fort Worth Metroplex", "Houston area"] },
  commercial: { areaServed: ["Dallas-Fort Worth", "Texas"] },
  newcon: { areaServed: ["Dallas-Fort Worth area"] },
};

export function treeForPath(path: string): TreeKey | null {
  if (path.startsWith("/residential/")) return "residential";
  if (path.startsWith("/commercial/") || path.startsWith("/services/commercial-foundation-repair")) return "commercial";
  if (path.startsWith("/new-construction/")) return "newcon";
  return null;
}
