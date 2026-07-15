import { siteConfig, absoluteUrl } from "@/config/site";
import { loadQuery } from "@/sanity/fetch";
import { POST_INDEX, GUIDE_INDEX } from "@/sanity/queries";
import type { ResourceListItem } from "@/sanity/types";

export const dynamic = "force-static";
export const revalidate = 3600;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * RSS 2.0 feed of the Resources content (blog posts + guides), for crawl-scheduling and
 * AI/reader aggregators. Sourced from the guarded Sanity queries (noindex-filtered), so it
 * is [] and valid-but-empty when Sanity is unreachable, and lights up on deploy.
 */
export async function GET() {
  const [posts, guides] = await Promise.all([
    loadQuery<ResourceListItem[]>({ query: POST_INDEX, tags: ["post"], fallback: [] }),
    loadQuery<ResourceListItem[]>({ query: GUIDE_INDEX, tags: ["guide"], fallback: [] }),
  ]);

  const items = [
    ...posts.map((p) => ({ ...p, base: "/blog" })),
    ...guides.map((g) => ({ ...g, base: "/guides" })),
  ].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));

  const feedUrl = absoluteUrl("/feed.xml");
  const entries = items
    .map((it) => {
      const url = absoluteUrl(`${it.base}/${it.slug}`);
      const date = it.publishedAt ? new Date(it.publishedAt).toUTCString() : "";
      return `    <item>
      <title>${esc(it.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>${date ? `\n      <pubDate>${date}</pubDate>` : ""}
      ${it.excerpt ? `<description>${esc(it.excerpt)}</description>` : ""}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(siteConfig.name)} - Resources</title>
    <link>${absoluteUrl("/resources")}</link>
    <description>Guides, articles and notes on web, app and software development, SEO and AI search.</description>
    <language>en</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
