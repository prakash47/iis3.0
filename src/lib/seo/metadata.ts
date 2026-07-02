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
