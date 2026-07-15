import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl, isIndexable } from "@/config/site";

// Explicitly welcome AI/answer-engine crawlers - you WANT to be citable in
// AI Overviews, ChatGPT, Perplexity, Gemini, Claude and Copilot answers. Includes
// the retrieval/search bots (must-allow to be cited), the on-demand user-fetch bots,
// and the training bots (net-positive for a firm whose content is its marketing).
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "DuckAssistBot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "CCBot",
];

// Prefix-matched paths kept out of every crawler group. "/studio" (no trailing
// slash) matches both the bare /studio route and its subpaths.
const DISALLOW = ["/api/", "/studio", "/draft/", "/preview/"];

export default function robots(): MetadataRoute.Robots {
  // Non-production deployments (*.vercel.app, staging.intentioninfoservice.com)
  // are locked out of every crawler - they must never be indexed alongside the
  // separate live site. Paired with the site-wide noindex robots meta (layout.tsx)
  // and the environment-aware canonicals (site.ts).
  if (!isIndexable) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      sitemap: absoluteUrl("/sitemap.xml"),
      host: siteConfig.url,
    };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: DISALLOW },
      // Bytespider (ByteDance) has poor robots compliance and offers no citation
      // surface for a B2B site - the one bot worth blocking outright.
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
