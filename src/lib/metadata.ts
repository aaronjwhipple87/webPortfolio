import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Builds per-page metadata. Next.js replaces (rather than merges) nested objects such as
 * `openGraph` and `twitter`, so the shared fields are repeated here for every page.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_US",
      title: `${title} | ${site.name}`,
      description,
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
  };
}
