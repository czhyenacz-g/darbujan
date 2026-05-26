import type { MetadataRoute } from "next";
import { publishedChapters } from "@/lib/learning/tsxVsLampChapters";

export default function sitemap(): MetadataRoute.Sitemap {
  const chapterUrls: MetadataRoute.Sitemap = publishedChapters.map((ch) => ({
    url: `https://darbujan.com/learning/tsx-vs-lamp/${ch.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: "https://darbujan.com",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://darbujan.com/learning",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://darbujan.com/learning/tsx-vs-lamp",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...chapterUrls,
  ];
}
