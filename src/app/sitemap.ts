import { MetadataRoute } from "next";
import { getMdxFiles } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = ["", "/about", "/work", "/services", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const workRoutes = getMdxFiles("work").map((file) => ({
    url: `${baseUrl}/work/${file.replace(/\.mdx$/, "")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getMdxFiles("blog").map((file) => ({
    url: `${baseUrl}/blog/${file.replace(/\.mdx$/, "")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
