import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, articleSchema } from "@/lib/seo/jsonLd";
import { metadataFromSanity } from "@/lib/seo/metadata";
import { loadQuery } from "@/sanity/fetch";
import { GUIDE_SLUGS, GUIDE_BY_SLUG } from "@/sanity/queries";
import type { ResourceDoc } from "@/sanity/types";
import { ArticleLayout } from "@/components/resources/ArticleLayout";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await loadQuery<string[]>({ query: GUIDE_SLUGS, tags: ["guide"], fallback: [] });
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = await loadQuery<ResourceDoc | null>({
    query: GUIDE_BY_SLUG,
    params: { slug },
    tags: [`guide:${slug}`, "guide"],
    fallback: null,
  });
  if (!guide) return {};
  return metadataFromSanity({
    path: `/guides/${slug}`,
    title: guide.title,
    description: guide.excerpt,
    seo: guide.seo,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = await loadQuery<ResourceDoc | null>({
    query: GUIDE_BY_SLUG,
    params: { slug },
    tags: [`guide:${slug}`, "guide"],
    fallback: null,
  });
  if (!guide) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path: `/guides/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={articleSchema({
          type: "Article",
          path: `/guides/${slug}`,
          headline: guide.title,
          description: guide.excerpt,
          datePublished: guide.publishedAt,
          dateModified: guide._updatedAt,
          imageUrl: guide.seo?.ogImageUrl,
        })}
      />
      <ArticleLayout doc={guide} crumbs={crumbs} related={[]} base="/guides" />
    </>
  );
}
