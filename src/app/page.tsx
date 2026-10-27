import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { otherSkills, primarySkills, site } from "@/content/site";
import { featuredProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden lg:min-h-[90vh]">
        <Image
          src="/img/hero/hero3.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(124,99,99,0.2)] to-black/20" />
        <div className="relative px-4 text-center">
          <h1 className="font-display text-5xl font-bold text-berry sm:text-7xl">{site.name}</h1>
          <hr className="mx-auto my-4 w-40 border-t-4 border-berry" />
          <p className="text-xl text-ink sm:text-2xl">{site.tagline}</p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-berry px-6 py-2 text-white transition-colors hover:bg-berry-dark"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="bg-mist py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading id="skills-heading">Welcome to my Portfolio</SectionHeading>

          <h3 className="border-b-2 border-ink pb-1 text-right text-ink">My Skills</h3>
          <ul className="my-10 space-y-8">
            {primarySkills.map((skill) => (
              <li key={skill.name} className="grid grid-cols-[5rem_1fr] items-center gap-6 sm:grid-cols-[7rem_1fr]">
                <div className="flex flex-col items-center gap-1">
                  <Image src={skill.logo} alt="" width={96} height={96} className="h-14 w-auto object-contain sm:h-16" />
                  <span className="text-base font-bold text-paper">{skill.name}</span>
                </div>
                <div
                  role="meter"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.level}
                  className="h-5 overflow-hidden rounded-full bg-paper"
                >
                  <div className="h-full rounded-full bg-berry" style={{ width: `${skill.level}%` }} />
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
              className="mt-4 inline-block rounded-full bg-berry px-6 py-2 text-white transition-colors hover:bg-berry-dark"
            >
              See More Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
