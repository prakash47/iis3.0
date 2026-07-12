import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "./client";

type ImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

/**
 * Build a cdn.sanity.io image URL. Returns null when Sanity is not configured, so
 * callers fall back safely (the build stays green with no client).
 */
export function urlFor(source: unknown) {
  const client = getClient();
  if (!client) return null;
  return imageUrlBuilder(client).image(source as ImageSource);
}
