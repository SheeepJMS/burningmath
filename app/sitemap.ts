import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/siteConfig";

/** 所有主要页面的 path，与 app 路由一致 */
const paths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/coach", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/results", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/platform", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/programs", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${siteBaseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
