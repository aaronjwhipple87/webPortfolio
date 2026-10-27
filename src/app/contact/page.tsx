import type { Metadata } from "next";
import { site } from "@/content/site";
import { breadcrumbSchema, JsonLd, personId } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Aaron Whipple about web development work, freelance projects or collaboration.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-mist py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${site.url}/contact`,
          about: { "@id": personId },
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1fr_1.5fr]">
        <div>
          <h1 className="font-display text-5xl font-bold uppercase">Contact</h1>
          <hr className="my-4 w-32 border-t-4 border-ink" />
          <p className="leading-relaxed">
            Have a project in mind or want to collaborate? Send me a message and I&apos;ll get back to you.
          </p>
          <dl className="mt-8 space-y-4">
            <div>
              <dt className="font-bold">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-berry hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold">Phone</dt>
              <dd>
                <a href={site.phone.href} className="text-berry hover:underline">
                  {site.phone.display}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
