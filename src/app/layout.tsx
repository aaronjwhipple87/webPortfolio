import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
import { JsonLd, personSchema, websiteSchema } from "@/lib/json-ld";
import "./globals.css";

const monda = localFont({
  src: [
    { path: "../fonts/Monda-Regular.ttf", weight: "400" },
    { path: "../fonts/Monda-Bold.ttf", weight: "700" },
  ],
  variable: "--font-monda",
  display: "swap",
});

const julius = localFont({
  src: "../fonts/JuliusSansOne-Regular.ttf",
  variable: "--font-julius",
  display: "swap",
});

const kaushan = localFont({
  src: "../fonts/KaushanScript-Regular.woff2",
  variable: "--font-kaushan",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Aaron Whipple",
    "full-stack developer",
    "software engineer",
    "Next.js developer",
    "React developer",
    "AWS",
    "GraphQL",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#922260",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monda.variable} ${julius.variable} ${kaushan.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans text-lg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-berry focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
