import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl, isIndexable } from "@/config/site";

// Explicitly welcome AI/answer-engine crawlers - you WANT to be citable in
// AI Overviews, ChatGPT, Perplexity, Gemini and Claude answers.
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
  "Meta-ExternalAgent",
];

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
      { userAgent: "*", allow: "/", disallow: ["/api/", "/studio/", "/draft/", "/preview/"] },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: ["/studio/"] },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
