import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

const sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

/** Octagon card with the original site's hover overlay: title drops in, tech list, "See Details". */
export function ProjectCard({ project }: { project: Project }) {
  const { card } = project;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group octagon relative mx-auto block aspect-[10/13] w-full max-w-sm bg-ink outline-none"
      style={card.color ? { backgroundColor: card.color } : undefined}
    >
      {card.backdrop && <Image src={card.backdrop} alt="" fill sizes={sizes} className="object-cover" />}
      <Image
        src={card.image}
        alt=""
        fill
        sizes={sizes}
        className={card.fit === "cover" ? "object-cover" : "object-contain"}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden bg-white/70 p-8 text-center font-bold text-ink opacity-0 transition-opacity delay-500 duration-100 ease-out group-hover:opacity-100 group-hover:delay-0 group-focus-visible:opacity-100 group-focus-visible:delay-0">
        <h3 className="-translate-y-52 text-xl text-berry uppercase underline underline-offset-4 transition-transform delay-300 duration-100 ease-in-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
          {project.shortTitle}
        </h3>
        <ul className="space-y-1 text-lg leading-snug uppercase">
          {project.cardTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <span className="-translate-y-52 rounded-2xl bg-berry px-4 py-1.5 text-lg text-paper uppercase transition-transform delay-100 duration-200 ease-in-out group-hover:translate-y-0 group-focus-visible:translate-y-0">
          See Details
        </span>
      </div>

      {/* Touch screens can't hover, so show the project name there instead. */}
      <span className="absolute inset-x-0 bottom-[12%] mx-auto w-fit rounded-full bg-ink/80 px-4 py-1 text-base text-paper [@media(hover:hover)]:hidden">
        {project.shortTitle}
      </span>
    </Link>
  );
}
