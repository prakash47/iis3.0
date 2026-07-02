import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { services, industries, technologies } from "@/content/catalog";
import {
  staticPages,
  servicePageSeo,
  industryPageSeo,
  technologyPageSeo,
  type PageSeo,
} from "@/config/seo";

/**
 * Sitemap is generated from the SAME central SEO registry (config/seo.ts) that
 * drives page metadata, so pages are defined once. `noindex` pages are excluded.
 * Individual /blog/* posts are added later from Sanity.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: PageSeo[] = [
    ...staticPages,
    ...services.map((s) => servicePageSeo(s.slug)!),
    ...industries.map((i) => industryPageSeo(i.slug)!),
    ...technologies.map((t) => technologyPageSeo(t.slug)!),
  ];

  return pages
    .filter((p) => !p.noindex)
    .map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: now,
      changeFrequency: p.changeFrequency ?? "monthly",
      priority: p.priority ?? 0.5,
    }));
}
