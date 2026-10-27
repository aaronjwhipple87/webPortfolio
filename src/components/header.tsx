"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <Link href="/" aria-label={`${site.name}, home`} onClick={() => setOpen(false)}>
          <Image src="/img/icon.png" alt="" width={150} height={80} loading="eager" className="h-12 w-auto" />
        </Link>

        <button
          type="button"
          className="rounded-md bg-berry p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav
          id="site-nav"
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 bg-paper p-4 shadow-md md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-between md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:gap-2">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded px-3 py-1.5 font-bold transition-colors ${
                      active ? "bg-berry text-white" : "text-berry hover:bg-berry hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={site.resume}
            download
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-berry px-4 py-1.5 text-base text-white transition-colors hover:bg-berry-dark md:mt-0 whitespace-nowrap"
          >
            <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" />
            </svg>
            Download Resumé
          </a>
        </nav>
      </div>
    </header>
  );
}
