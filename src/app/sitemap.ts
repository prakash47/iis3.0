import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { services, industries, technologies } from "@/content/catalog";
import { caseStudies } from "@/content/case-studies";
import {
  staticPages,
  servicePageSeo,
  industryPageSeo,
  technologyPageSeo,
  type PageSeo,
} from "@/config/seo";
import { loadQuery } from "@/sanity/fetch";
import { ALL_RESOURCE_ENTRIES } from "@/sanity/queries";
import type { SitemapEntry } from "@/sanity/types";

/**
 * Sitemap from the central SEO registry (config/seo.ts) + guarded Sanity resource
 * docs. `noindex` static pages are excluded; the Sanity query filters
 * seo.noindex != true so thin docs never enter. When Sanity is not configured /
 * unreachable, the doc merge is [] and the sitemap is exactly today's static one -
 * the build stays green. Glossary terms are NOT per-doc URLs at MVP (the glossary
 * is a single A-Z page), so only posts + guides get individual entries.
 */
const RESOURCE_BASE: Record<string, string> = { post: "/blog", guide: "/guides" };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const pages: PageSeo[] = [
    ...staticPages,
    ...services.map((s) => servicePageSeo(s.slug)!),
    ...industries.map((i) => industryPageSeo(i.slug)!),
    ...technologies.map((t) => technologyPageSeo(t.slug)!),
  ];

  const staticEntries = pages
    .filter((p) => !p.noindex)
    .map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: now,
      changeFrequency: p.changeFrequency ?? "monthly",
      priority: p.priority ?? 0.5,
    }));

  const docs = await loadQuery<SitemapEntry[]>({
    query: ALL_RESOURCE_ENTRIES,
    tags: ["post", "guide", "glossaryTerm"],
    fallback: [],
  });
  const resourceEntries = docs
    .filter((d) => RESOURCE_BASE[d._type] && d.slug)
    .map((d) => ({
      url: absoluteUrl(`${RESOURCE_BASE[d._type]}/${d.slug}`),
      lastModified: d._updatedAt ? new Date(d._updatedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const caseStudyEntries = caseStudies.map((cs) => ({
    url: absoluteUrl(`/work/${cs.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...caseStudyEntries, ...resourceEntries];
}
