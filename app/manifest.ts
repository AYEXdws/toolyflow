import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/tr",
    display: "standalone",
    background_color: "#0A0A0F",
    theme_color: "#0A0A0F",
    icons: [
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/images/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
