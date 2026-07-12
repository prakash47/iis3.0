import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";
import { seoConfig, getStaticPageSeo, type PageSeo } from "@/config/seo";

/**
 * Build Next.js Metadata from a central PageSeo entry (config/seo.ts).
 * Applies canonical, OpenGraph, Twitter and robots consistently, so every
 * page is described the same way from one place.
 */
export function metadataFrom(seo: PageSeo): Metadata {
  const canonical = absoluteUrl(seo.path);
  const images = [absoluteUrl(seo.ogImage ?? seoConfig.defaultOgImage)];

  return {
    title: seo.titleAbsolute ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: seoConfig.siteName,
      title: seo.title,
      description: seo.description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title: seo.title,
      description: seo.description,
      images,
    },
    ...(seo.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

/** Static-page metadata: looks the route up in the central registry by path. */
export function pageMetadata(path: string): Metadata {
  const seo = getStaticPageSeo(path);
  return seo ? metadataFrom(seo) : {};
}

/**
 * Per-document metadata for Resources docs, sourced from the SANITY `seo` object
 * (not config/seo.ts), falling back to the doc's own title/excerpt. Honors
 * seo.noindex so a not-yet-substantial doc stays out of the index.
 */
export function metadataFromSanity(input: {
  path: string;
  title: string;
  description?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonical?: string;
    noindex?: boolean;
    ogImageUrl?: string;
  };
}): Metadata {
  const title = input.seo?.metaTitle || input.title;
  const description =
    input.seo?.metaDescription || input.description || seoConfig.defaultDescription;
  const canonical = input.seo?.canonical || absoluteUrl(input.path);
  const images = [input.seo?.ogImageUrl ?? absoluteUrl(seoConfig.defaultOgImage)];

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: seoConfig.siteName,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title,
      description,
      images,
    },
    ...(input.seo?.noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
