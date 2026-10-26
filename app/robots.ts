import type { MetadataRoute } from "next";

// Speculative demo: keep compliant crawlers off the whole site. /outreach also
// carries a page-level noindex.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
