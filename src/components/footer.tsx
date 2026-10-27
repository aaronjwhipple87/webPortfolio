import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { SocialIcon } from "@/components/social-icon";

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center">
        <Image src="/img/icon-white.png" alt="" width={251} height={140} className="h-16 w-auto" />

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {nav.map((item, index) => (
              <li key={item.href} className="flex items-center gap-3">
                {index > 0 && <span aria-hidden>|</span>}
                <Link href={item.href} className="hover:text-mist">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid w-full gap-6 sm:grid-cols-2">
          <address className="not-italic">
            <p className="font-bold">Contact</p>
            <a href={`mailto:${site.email}`} className="block hover:text-mist">
              {site.email}
            </a>
            <a href={site.phone.href} className="block hover:text-mist">
              {site.phone.display}
            </a>
          </address>
          <ul className="flex items-center justify-center gap-4">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={social.label}
                  className="block transition-colors hover:text-mist"
                >
                  <SocialIcon name={social.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-mist">
          © <CurrentYear /> Aaron J. Whipple
        </p>
      </div>
    </footer>
  );
}
