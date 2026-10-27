export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  /** URL of the page on the old static site, redirected to the new route. */
  legacyPath: string;
  title: string;
  shortTitle: string;
  featured: boolean;
  summary: string;
  description: string[];
  tech: string[];
  timeline: string[];
  links: { href: string; label: string }[];
  hero: ImageAsset | null;
  card: {
    image: string;
    fit: "cover" | "contain";
    backdrop?: string;
    color?: string;
  };
  gallery: (ImageAsset & { title: string | null })[];
};
