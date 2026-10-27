import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { otherSkills, primarySkills, site } from "@/content/site";
import { featuredProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      {/*
        As on the original, the name sits on the monitor screen in the photo. The hero is never wider than
        the photo's aspect ratio, so the photo is always scaled by height and the screen's position can be
        expressed in container-height units (cqh): the screen is about 71cqh wide, 40cqh tall, 26cqh from the top.
      */}
      <section className="relative h-[max(28rem,60svh)] overflow-hidden [container-type:size] md:aspect-[1819/1129] md:h-auto">
        <Image
          src="/img/hero/hero3.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(124,99,99,0.2)] to-black/20" />
        <div className="absolute top-[28cqh] left-[calc(50%+1cqh)] flex h-[36cqh] w-[64cqh] -translate-x-1/2 flex-col items-center justify-center text-center">
          <h1 className="font-display text-[6.4cqh] leading-tight font-bold whitespace-nowrap text-berry">{site.name}</h1>
          <hr className="my-[1.5cqh] w-[45%] border-berry" />
          <p className="text-[max(0.9rem,2.6cqh)] text-ink">{site.tagline}</p>
          <Link
            href="/contact"
            className="mt-[3cqh] inline-block rounded-full border-2 border-berry bg-berry px-[6cqh] py-[0.8cqh] text-[max(0.9rem,2.4cqh)] font-bold text-white transition-colors hover:bg-mist hover:text-berry"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="overflow-hidden bg-mist py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading id="skills-heading">Welcome to my Portfolio</SectionHeading>

          <h3 className="border-b-2 border-ink pb-1 text-right text-ink">My Skills</h3>
          <ul className="my-10 space-y-8">
            {primarySkills.map((skill, index) => (
              <li
                key={skill.name}
                className={`grid grid-cols-[5rem_1fr] items-center gap-6 sm:grid-cols-[8rem_1fr] ${
                  index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                }`}
              >
                <div className="flex flex-col items-center gap-1">
                  <Image src={skill.logo} alt="" width={96} height={96} className="h-16 w-auto object-contain sm:h-20" />
                  <span
                    className={`text-base font-bold text-paper sm:text-xl ${"logoHasName" in skill ? "sr-only" : ""}`}
                  >
                    {skill.name}
                  </span>
                </div>
                <div
                  role="meter"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.level}
                  className="h-7 overflow-hidden rounded bg-paper"
                >
                  <div className="bar-striped h-full bg-berry" style={{ width: `${skill.level}%` }} />
                </div>
              </li>
            ))}
          </ul>

          <h3 className="border-b-2 border-ink pb-1 text-ink">Other Skills</h3>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {otherSkills.map((skill) => (
              <li key={skill.name} title={skill.name}>
                <Image src={skill.logo} alt={skill.name} width={Math.round(112 * skill.ratio)} height={112} className="h-14 w-auto" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading id="projects-heading">Projects</SectionHeading>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <p className="text-ink">These are just a few projects I&apos;ve done recently.</p>
            <Link
              href="/projects"
              className="mt-4 inline-block rounded-full bg-berry px-6 py-2 text-white transition-colors border-2 border-berry hover:bg-mist hover:text-berry"
            >
              See More Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
