import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
    {
      url: "https://darbujan.com/learning/tsx-vs-lamp/00-priprava-prostredi",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://darbujan.com/learning/tsx-vs-lamp/01-co-je-tsx",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
