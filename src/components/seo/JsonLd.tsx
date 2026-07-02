import type { Thing, WithContext } from "schema-dts";

/**
 * Injects JSON-LD structured data using Next.js's officially recommended,
 * XSS-safe pattern (escape `<` so no script can break out of the tag).
 * Server component - renders inline, zero client JS.
 */
export function JsonLd<T extends Thing>({ data }: { data: WithContext<T> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
