import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JG Creative Studio",
    short_name: "JG Studio",
    description:
      "Premium websites, custom AI business systems, and growth technology built for modern businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#030713",
    theme_color: "#030713",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
