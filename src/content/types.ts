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
  /** Short uppercase tech list shown on the card overlay, as on the original site. */
  cardTags: string[];
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
  /** Phrase in the description that reveals an image on hover, as the original CG Solutions page did. */
  hoverReveal?: { phrase: string; image: ImageAsset };
};
