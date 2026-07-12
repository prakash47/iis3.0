/** Minimal shapes for the Resources documents read from Sanity. `body` stays
 *  `unknown` (cast inside the Portable Text renderer) so no @portabletext type
 *  import is needed at the data layer. */

export interface ResourceSeo {
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
  noindex?: boolean;
  ogImageUrl?: string;
}

export interface ResourceListItem {
  _type?: string;
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  category?: string;
}

/** Shared shape for a blog post or a guide. */
export interface ResourceDoc {
  title: string;
  excerpt?: string;
  publishedAt?: string;
  author?: string;
  body?: unknown;
  category?: { title?: string; slug?: string };
  seo?: ResourceSeo;
  _updatedAt?: string;
}

export interface GlossaryTerm {
  title: string;
  slug: string;
  definition?: string;
  body?: unknown;
  seeAlso?: { label?: string; href?: string }[];
  relatedTerms?: { title?: string; slug?: string }[];
  seo?: ResourceSeo;
  _updatedAt?: string;
}

export interface SitemapEntry {
  _type: string;
  slug: string;
  _updatedAt: string;
}
