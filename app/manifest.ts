import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/tr",
    display: "standalone",
    background_color: "#0B1120",
    theme_color: "#0B1120",
    icons: [
      {
        src: "/images/toolyflow-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/toolyflow-logo.png",
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
