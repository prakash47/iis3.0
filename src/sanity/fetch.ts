import { getClient } from "./client";

/**
 * The linchpin of build-green. Every Sanity read goes through this. It returns the
 * caller-supplied fallback when Sanity is not configured (no env) OR when the fetch
 * throws (no network in the sandbox), so nothing ever throws at build. The
 * `next: { revalidate, tags }` opts the read into the Next 16 Data Cache (caching is
 * opt-in in Next 16) and attaches the tags the webhook route invalidates.
 */
export async function loadQuery<T>(opts: {
  query: string;
  params?: Record<string, unknown>;
  tags: string[];
  revalidate?: number;
  fallback: T;
}): Promise<T> {
  const client = getClient();
  if (!client) return opts.fallback;
  // In dev, always fetch fresh (revalidate: 0) so imported/edited content shows
  // immediately - the ISR cache + webhook are a production concern. In production,
  // cache with tags so the Sanity webhook can invalidate on publish.
  const isProd = process.env.NODE_ENV === "production";
  try {
    return await client.fetch<T>(opts.query, opts.params ?? {}, {
      next: isProd ? { revalidate: opts.revalidate ?? 3600, tags: opts.tags } : { revalidate: 0 },
    });
  } catch (err) {
    console.warn("[sanity] read failed, using fallback:", err);
    return opts.fallback;
  }
}
