import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-5xl font-bold">404</h1>
      <p className="mt-4">That page doesn&apos;t exist, or it moved when this site was rebuilt.</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/" className="rounded-full bg-berry px-6 py-2 text-white border-2 border-berry hover:bg-mist hover:text-berry">
          Home
        </Link>
        <Link href="/projects" className="rounded-full bg-berry px-6 py-2 text-white border-2 border-berry hover:bg-mist hover:text-berry">
          Projects
        </Link>
      </div>
    </section>
  );
}
