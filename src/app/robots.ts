import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  // Only the production deployment should be indexed; previews stay out of search.
  const isProduction = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";

  return {
    rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
