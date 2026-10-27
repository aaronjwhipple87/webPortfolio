import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f9fa",
    theme_color: "#922260",
    icons: [{ src: "/icon.png", sizes: "261x139", type: "image/png" }],
  };
}
