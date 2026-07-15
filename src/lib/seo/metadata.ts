import type { Metadata } from "next";
import { absoluteUrl } from "@/config/site";
import { seoConfig, getStaticPageSeo, type PageSeo } from "@/config/seo";

/**
 * Build Next.js Metadata from a central PageSeo entry (config/seo.ts).
 * Applies canonical, OpenGraph, Twitter and robots consistently, so every
 * page is described the same way from one place.
 */

/** Clip a description to a complete-word boundary under `max` chars (SERP-safe). */
function clipDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.\-]+$/, "");
}

/** OG/Twitter image in object form so width/height/alt are emitted (faster, more reliable unfurls). */
function ogImages(url: string, alt: string) {
  return [{ url, width: 1200, height: 630, alt }];
}

export function metadataFrom(seo: PageSeo): Metadata {
  const canonical = absoluteUrl(seo.path);
  const images = ogImages(absoluteUrl(seo.ogImage ?? seoConfig.defaultOgImage), seo.title);

  return {
    title: seo.titleAbsolute ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
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
    // noindex is `follow` so a not-yet-substantial page still passes internal link equity onward.
    ...(seo.noindex ? { robots: { index: false, follow: true } } : {}),
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
 *
 * When `seo.metaTitle` is set it is emitted ABSOLUTE (no "%s - Brand" template),
 * so a compact metaTitle is not blown past ~60 chars by the appended brand. The
 * description fallback is clipped to a word boundary under ~155 so an auto-derived
 * excerpt never ships as a mid-sentence fragment.
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
  const rawTitle = input.seo?.metaTitle;
  const title = rawTitle ? { absolute: rawTitle } : input.title;
  const ogTitle = rawTitle || input.title;
  const description = clipDescription(
    input.seo?.metaDescription || input.description || seoConfig.defaultDescription
  );
  const canonical = input.seo?.canonical || absoluteUrl(input.path);
  const images = ogImages(input.seo?.ogImageUrl ?? absoluteUrl(seoConfig.defaultOgImage), ogTitle);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      title: ogTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      site: seoConfig.twitterHandle,
      creator: seoConfig.twitterHandle,
      title: ogTitle,
      description,
      images,
    },
    ...(input.seo?.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
