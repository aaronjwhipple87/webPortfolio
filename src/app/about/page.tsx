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

      <section className="bg-mist pt-12 pb-16 lg:pb-32">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-5xl font-bold uppercase sm:text-6xl">About</h1>
          <hr className="mx-auto mt-2 w-[45%] border-berry" />
          <p className="mt-6 leading-relaxed">
            {about.intro}
            <br />
            If you&apos;d like to work or collaborate with me,{" "}
            <Link href="/contact" className="text-berry hover:underline">
              contact me.
            </Link>
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl px-4">
          {/* On wide screens the portrait's finger points at the fun facts, as on the original (finger at 86% x, 46% y). */}
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            width={600}
            height={800}
            sizes="28rem"
            preload
            className="absolute -top-9 left-0 z-10 hidden w-[28rem] lg:block"
          />
          <div className="appear lg:pl-[24.5rem]">
            <h2 className="text-center text-3xl text-berry sm:text-4xl lg:text-left">Random Fun Facts About Me</h2>
            <hr className="mx-auto mt-2 mb-4 w-full max-w-md border-ink lg:mx-0" />
            <ul className="space-y-2 text-center text-lg capitalize lg:text-left">
              {about.funFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading id="process-heading">Project Process</SectionHeading>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.process.map((step, index) => (
              <li key={step.title} className="text-center">
                <h3 className="flex items-end justify-center gap-2 text-xl font-semibold capitalize">
                  <span aria-hidden className="font-script text-5xl leading-none text-berry">
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
                <hr className="mx-auto mt-2 mb-3 w-[85%] border-pink" />
                <p className="text-base leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
