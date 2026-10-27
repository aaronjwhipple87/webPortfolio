import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import type { Project } from "@/content/types";
import { breadcrumbSchema, JsonLd, personId } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function truncate(text: string, max = 155) {
  return text.length <= max ? text : `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  return pageMetadata({
    title: project.title,
    description: truncate(project.summary),
    path: `/projects/${project.slug}`,
    type: "article",
    keywords: project.tech,
  });
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const path = `/projects/${project.slug}`;
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="bg-mist">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          url: `${site.url}${path}`,
          description: project.summary,
          image: project.hero ? `${site.url}${project.hero.src}` : undefined,
          keywords: project.tech.join(", "),
          creator: { "@id": personId },
          sameAs: project.links.map((link) => link.href),
        }}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path },
        ])}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-base">
          <ol className="flex flex-wrap gap-2 text-ink/80">
            <li>
              <Link href="/" className="hover:text-berry">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/projects" className="hover:text-berry">Projects</Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="font-bold text-ink">{project.shortTitle}</li>
          </ol>
        </nav>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center gap-6">
            {project.hero && (
              <Image
                src={project.hero.src}
                alt={project.hero.alt}
                width={project.hero.width}
                height={project.hero.height}
                sizes="(min-width: 768px) 50vw, 100vw"
                preload
                className="h-auto w-full rounded-xl"
              />
            )}
            {project.links.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-berry px-6 py-2 text-white transition-colors border-2 border-berry hover:bg-mist hover:text-berry"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
            <hr className="my-4 w-24 border-t-4 border-berry" />
            <div className="space-y-4 leading-relaxed">
              {project.description.map((paragraph) => (
                <p key={paragraph}>
                  <Paragraph text={paragraph} reveal={project.hoverReveal} />
                </p>
              ))}
            </div>

            <dl className="mt-8 space-y-6 rounded-2xl bg-paper p-6">
              <div>
                <dt className="border-b-2 border-berry pb-1 font-bold">Software / Languages</dt>
                <dd>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="rounded-full bg-mist px-3 py-1 text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="border-b-2 border-berry pb-1 font-bold">Time</dt>
                {project.timeline.map((entry) => (
                  <dd key={entry} className="mt-2">
                    {entry}
                  </dd>
                ))}
              </div>
            </dl>
          </div>
        </div>

        {project.gallery.length > 0 && (
          <section aria-labelledby="gallery-heading" className="mt-16">
            <h2 id="gallery-heading" className="sr-only">
              Screenshots
            </h2>
            <ul className="grid gap-10 md:grid-cols-2">
              {project.gallery.map((item) => (
                <li key={item.src}>
                  <figure>
                    {item.title && (
                      <figcaption className="mb-4 border-b-2 border-berry pb-1 font-bold">{item.title}</figcaption>
                    )}
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-auto w-full rounded-lg shadow-md"
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink/20 pt-8">
          <Link href="/projects" className="font-bold text-berry hover:underline">
            ← All projects
          </Link>
          <Link href={`/projects/${next.slug}`} className="font-bold text-berry hover:underline">
            Next: {next.shortTitle} →
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Renders a description paragraph, turning the project's hover-reveal phrase into a hoverable image preview. */
function Paragraph({ text, reveal }: { text: string; reveal: Project["hoverReveal"] }) {
  const at = reveal ? text.indexOf(reveal.phrase) : -1;
  if (!reveal || at === -1) return text;

  return (
    <>
      {text.slice(0, at)}
      <span tabIndex={0} className="group cursor-help font-bold outline-none">
        {reveal.phrase}
        <Image
          src={reveal.image.src}
          alt={reveal.image.alt}
          width={reveal.image.width}
          height={reveal.image.height}
          className="my-2 hidden h-auto w-full group-hover:block group-focus-visible:block"
        />
      </span>
      {text.slice(at + reveal.phrase.length)}
    </>
  );
}
