import type { MetadataRoute } from "next";

const siteUrl = "https://agusmathewdev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now },
    { url: `${siteUrl}/about`, lastModified: now },
    { url: `${siteUrl}/play/runner`, lastModified: now },
    { url: `${siteUrl}/play/memory`, lastModified: now },
    { url: `${siteUrl}/play/math`, lastModified: now },
  ];
}
