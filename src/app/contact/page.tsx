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

      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold uppercase sm:text-6xl">Contact Me</h1>
          <hr className="mx-auto mt-2 w-[45%] border-berry" />
          <p className="mt-4 text-2xl capitalize">I&apos;d love to get the opportunity to work with you!</p>
          <p className="mt-2">
            <a href={`mailto:${site.email}`} className="text-berry hover:underline">
              {site.email}
            </a>
            <span aria-hidden className="mx-3">
              |
            </span>
            <a href={site.phone.href} className="text-berry hover:underline">
              {site.phone.display}
            </a>
          </p>
        </div>

        <div className="appear mt-10 grid gap-8 lg:grid-cols-[5fr_7fr]">
          <ContactForm />
          <iframe
            title="Map of the Salt Lake City area"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d145759.34371449126!2d-111.9199561466403!3d40.670761982353795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1606409683800!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[440px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
