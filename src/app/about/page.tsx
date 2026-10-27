import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/content/site";
import { breadcrumbSchema, JsonLd, personId } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Aaron Whipple: software engineer specializing in React, Next.js and AWS, CrossFit L2 trainer, and former business owner.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: { "@id": personId },
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <section className="bg-mist py-16">
        <div className="mx-auto grid max-w-5xl items-start gap-10 px-4 md:grid-cols-[1fr_18rem]">
          <div>
            <h1 className="font-display text-5xl font-bold uppercase">About</h1>
            <hr className="my-4 w-32 border-t-4 border-ink" />
            <p className="leading-relaxed">
              {about.intro} If you&apos;d like to work or collaborate with me,{" "}
              <Link href="/contact" className="font-bold text-berry underline-offset-4 hover:underline">
                contact me
              </Link>
              .
            </p>

            <h2 className="mt-10 text-2xl font-bold text-berry">Random Fun Facts About Me</h2>
            <ul className="mt-4 space-y-3">
              {about.funFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span aria-hidden className="text-2xl leading-none text-berry">
                    ✱
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            width={600}
            height={800}
            sizes="(min-width: 768px) 18rem, 80vw"
            preload
            className="mx-auto w-64 md:w-full"
          />
        </div>
      </section>

      <section aria-labelledby="process-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading id="process-heading">Project Process</SectionHeading>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.process.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-berry font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
