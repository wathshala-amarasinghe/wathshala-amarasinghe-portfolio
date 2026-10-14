import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = projects
    .filter((project) => project.status === "published")
    .map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      changeFrequency: "yearly",
      priority: 0.8,
    }));

  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
