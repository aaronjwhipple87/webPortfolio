import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { site } from "@/content/site";
import { breadcrumbSchema, JsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Web and mobile projects by Aaron Whipple: Next.js and AWS apps, React, Shopify, PHP and Swift builds, with screenshots and tech stacks.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projects",
          url: `${site.url}/projects`,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${site.url}/projects/${project.slug}`,
              name: project.title,
            })),
          },
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />

      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-center font-display text-5xl font-bold uppercase">Projects</h1>
        <hr className="mx-auto my-4 mb-12 w-32 border-t-4 border-ink" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
