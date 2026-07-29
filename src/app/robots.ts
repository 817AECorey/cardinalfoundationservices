import type { MetadataRoute } from "next";

/* Allow the named crawlers per the handoff (spec section 6 list):
   Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot,
   CCBot. General agents are allowed as well; /thank-you/ is noindexed
   at the page level and disallowed here. */

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/thank-you/"];
  return {
    rules: [
      { userAgent: "Googlebot", allow: "/", disallow },
      { userAgent: "Bingbot", allow: "/", disallow },
      { userAgent: "OAI-SearchBot", allow: "/", disallow },
      { userAgent: "Claude-SearchBot", allow: "/", disallow },
      { userAgent: "PerplexityBot", allow: "/", disallow },
      { userAgent: "CCBot", allow: "/", disallow },
      { userAgent: "*", allow: "/", disallow },
    ],
    sitemap: "https://cardinalfoundationservices.com/sitemap.xml",
  };
}
