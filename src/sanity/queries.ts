import { defineQuery } from "next-sanity";

/**
 * GROQ queries. Every read filters `seo.noindex == false` (OPT-IN, fail-closed): a doc
 * must explicitly carry seo.noindex:false to be listed, sitemapped or statically
 * generated, so a future import that omits the seo object cannot ship a thin doc
 * indexable. Doc-body image blocks project real asset dimensions + lqip for zero CLS.
 */

const IMAGE_BODY = `body[]{
  ...,
  _type == "image" => {
    ...,
    "dimensions": asset->metadata.dimensions,
    "lqip": asset->metadata.lqip
  }
}`;

// ---- Blog posts ----
export const POST_SLUGS = defineQuery(
  `*[_type == "post" && defined(slug.current) && defined(publishedAt) && seo.noindex == false].slug.current`,
);

export const POST_INDEX = defineQuery(`
  *[_type == "post" && defined(publishedAt) && seo.noindex == false]
    | order(publishedAt desc){
      "slug": slug.current, title, excerpt, publishedAt,
      "category": category->title
    }`);

export const POST_BY_SLUG = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    title, excerpt, publishedAt, author,
    ${IMAGE_BODY},
    "category": category->{title, "slug": slug.current},
    seo{ metaTitle, metaDescription, canonical, noindex, "ogImageUrl": ogImage.asset->url },
    _updatedAt
  }`);

export const RELATED_POSTS = defineQuery(`
  *[_type == "post" && slug.current != $slug && category->slug.current == $categorySlug
    && defined(publishedAt) && seo.noindex == false] | order(publishedAt desc)[0...3]{
      "slug": slug.current, title, excerpt }`);

// ---- Guides ----
export const GUIDE_SLUGS = defineQuery(
  `*[_type == "guide" && defined(slug.current) && seo.noindex == false].slug.current`,
);

export const GUIDE_INDEX = defineQuery(`
  *[_type == "guide" && seo.noindex == false] | order(coalesce(publishedAt, _updatedAt) desc){
    "slug": slug.current, title, excerpt, publishedAt, "category": category->title
  }`);

export const GUIDE_BY_SLUG = defineQuery(`
  *[_type == "guide" && slug.current == $slug][0]{
    title, excerpt, publishedAt, author,
    ${IMAGE_BODY},
    "category": category->{title, "slug": slug.current},
    seo{ metaTitle, metaDescription, canonical, noindex, "ogImageUrl": ogImage.asset->url },
    _updatedAt
  }`);

// ---- Glossary (single A-Z page at MVP) ----
export const GLOSSARY_ALL = defineQuery(`
  *[_type == "glossaryTerm" && seo.noindex == false] | order(lower(title) asc){
    title, "slug": slug.current, definition,
    "seeAlso": seeAlso[]{ label, href },
    "relatedTerms": relatedTerms[]->{ title, "slug": slug.current },
    _updatedAt
  }`);

// ---- Resources hub (latest across all surfaces) ----
export const RESOURCES_LATEST = defineQuery(`
  *[_type in ["post","guide"] && seo.noindex == false && defined(coalesce(publishedAt, _updatedAt))]
    | order(coalesce(publishedAt, _updatedAt) desc)[0...6]{
      _type, "slug": slug.current, title, excerpt, publishedAt,
      "category": category->title
    }`);

// ---- Sitemap (all indexable resource docs) ----
// A post must also have a real publishedAt, so an undated (never-published) post can
// never enter the sitemap while being absent from the /blog index.
export const ALL_RESOURCE_ENTRIES = defineQuery(`
  *[_type in ["post","guide","glossaryTerm"] && seo.noindex == false && defined(slug.current)
    && (_type != "post" || defined(publishedAt))]{
    _type, "slug": slug.current, _updatedAt }`);
