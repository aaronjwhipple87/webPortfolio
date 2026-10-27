import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  const { card } = project;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block aspect-square overflow-hidden rounded-2xl bg-ink shadow-md ring-berry transition hover:shadow-xl focus-visible:ring-4"
      style={card.color ? { backgroundColor: card.color } : undefined}
    >
      {card.backdrop && (
        <Image src={card.backdrop} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      )}
      <Image
        src={card.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={card.fit === "cover" ? "object-cover" : "object-contain p-6"}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/85 p-6 text-center text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <h3 className="text-xl font-bold">{project.shortTitle}</h3>
        <p className="text-sm leading-relaxed uppercase">{project.tech.slice(0, 8).join(" · ")}</p>
        <span className="rounded-full border border-paper px-4 py-1 text-sm">See Details</span>
      </div>
      {/* Always-visible title for touch devices, where hover isn't available. */}
      <span className="absolute inset-x-0 bottom-0 bg-ink/80 px-3 py-2 text-center text-base text-paper group-hover:opacity-0 [@media(hover:hover)]:hidden">
        {project.shortTitle}
      </span>
    </Link>
  );
}
