import type { MetadataRoute } from "next";

// The /outreach dossier is a private operator route. It carries a page-level
// noindex; this keeps compliant crawlers off it at the robots.txt layer too.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/outreach",
    },
  };
}
