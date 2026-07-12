import { createClient, type SanityClient } from "next-sanity";
import { projectId, dataset, apiVersion, isSanityConfigured } from "./env";

let cached: SanityClient | null = null;

/**
 * LAZY client construction (critical for build-green). Never call createClient at
 * module top level - an empty projectId could throw at construction during
 * `next build`, before any downstream guard runs. Construct only when configured;
 * callers that get null fall back to empty content.
 *
 * useCdn:true + perspective:"published" = cached CDN reads, which is the cheaper,
 * larger free-tier bucket and matches the no-overage free plan.
 */
export function getClient(): SanityClient | null {
  if (!isSanityConfigured) return null;
  if (!cached) {
    cached = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    });
  }
  return cached;
}
