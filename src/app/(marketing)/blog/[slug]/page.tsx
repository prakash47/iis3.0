import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, articleSchema } from "@/lib/seo/jsonLd";
import { metadataFromSanity } from "@/lib/seo/metadata";
import { loadQuery } from "@/sanity/fetch";
import { POST_SLUGS, POST_BY_SLUG, RELATED_POSTS } from "@/sanity/queries";
import type { ResourceDoc, ResourceListItem } from "@/sanity/types";
import { ArticleLayout } from "@/components/resources/ArticleLayout";

export const revalidate = 3600;
export const dynamicParams = true;

/** Returns [] when Sanity is unreachable (sandbox / no project), so zero paths are
 *  prebuilt and the build stays green; dynamicParams renders them on first request
 *  once content exists. */
export async function generateStaticParams() {
  const slugs = await loadQuery<string[]>({ query: POST_SLUGS, tags: ["post"], fallback: [] });
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadQuery<ResourceDoc | null>({
    query: POST_BY_SLUG,
    params: { slug },
    tags: [`post:${slug}`, "post"],
    fallback: null,
  });
  if (!post) return {};
  return metadataFromSanity({
    path: `/blog/${slug}`,
    title: post.title,
    description: post.excerpt,
    seo: post.seo,
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await loadQuery<ResourceDoc | null>({
    query: POST_BY_SLUG,
    params: { slug },
    tags: [`post:${slug}`, "post"],
    fallback: null,
  });
  // An unpublished (undated) post never renders: POST_SLUGS already requires publishedAt,
  // but dynamicParams=true would otherwise let a direct hit to an undated post 200.
  if (!post || !post.publishedAt) notFound();

  const related = post.category?.slug
    ? await loadQuery<ResourceListItem[]>({
        query: RELATED_POSTS,
        params: { slug, categorySlug: post.category.slug },
        tags: ["post"],
        fallback: [],
      })
    : [];

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={articleSchema({
          type: "BlogPosting",
          path: `/blog/${slug}`,
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post._updatedAt,
          imageUrl: post.seo?.ogImageUrl,
        })}
      />
      <ArticleLayout doc={post} crumbs={crumbs} related={related} base="/blog" />
    </>
  );
}
