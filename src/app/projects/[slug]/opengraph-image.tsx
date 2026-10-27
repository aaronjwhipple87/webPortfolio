import { site } from "@/content/site";
import { ogSize, renderOgImage } from "@/lib/og";
import { getProject, projects } from "@/lib/projects";

export const alt = "Project by Aaron Whipple";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);

  return renderOgImage({
    eyebrow: `Project · ${site.name}`,
    title: project?.title ?? "Projects",
    footer: project ? project.tech.slice(0, 6).join(" · ") : site.tagline,
  });
}
