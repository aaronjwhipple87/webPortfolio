import { site } from "@/content/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = site.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: site.name,
    footer: "Full-stack developer · React · Next.js · AWS · GraphQL",
  });
}
