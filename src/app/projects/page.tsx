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
    <section className="overflow-hidden bg-mist py-16">
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
        <hr className="mx-auto mt-2 mb-12 w-[45%] border-berry" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* As on the original site, each row of three slides in from alternating sides. */}
          {projects.map((project, index) => (
            <li key={project.slug} className={Math.floor(index / 3) % 2 === 0 ? "slide-in-right" : "slide-in-left"}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
