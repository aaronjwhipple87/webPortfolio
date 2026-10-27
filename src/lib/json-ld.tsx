import { site } from "@/content/site";

/** Renders schema.org structured data, escaping `<` so the payload can't close the script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const personId = `${site.url}/#person`;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.jobTitle,
  image: `${site.url}/img/blue-suit3.png`,
  sameAs: site.socials.map((social) => social.href),
  knowsAbout: ["React", "Next.js", "AWS", "GraphQL", "DynamoDB", "TypeScript"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": personId },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
