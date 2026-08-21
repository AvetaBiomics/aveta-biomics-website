import type { MetadataRoute } from "next";
import { roles } from "./careers/roles";
import { siteUrl } from "./lib/seo";

/**
 * Static routes, most important first. Role pages are appended from the same
 * data the pages render from, so a new posting reaches the sitemap without a
 * second edit here.
 */
const pages: Array<[path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]]> = [
  ["/", 1.0, "monthly"],
  ["/science", 0.9, "monthly"],
  ["/pipeline", 0.9, "monthly"],
  ["/about", 0.8, "monthly"],
  ["/publications", 0.8, "monthly"],
  ["/newsroom", 0.8, "weekly"],
  ["/careers", 0.7, "weekly"],
  ["/mission", 0.6, "yearly"],
  ["/join-us", 0.6, "monthly"],
  ["/expanded-access", 0.6, "yearly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...pages.map(([path, priority, changeFrequency]) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...roles.map((role) => ({
      url: `${siteUrl}/careers/${role.slug}`,
      lastModified: new Date(role.postedOn),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
