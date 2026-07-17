import Link from "next/link";
import { IconArrow } from "@/components/icons";
import { formatDate } from "@/lib/format";
import type { ResourceListItem } from "@/sanity/types";

/** A blog post / guide card for the listing pages + the resources hub.
 *  headingLevel: the listing pages (/blog, /guides) have no h2 between the h1 and
 *  the cards, so their cards ARE the h2s (a skipped level fails the heading-order
 *  audit); the resources hub nests cards under a SectionHeading h2, so h3 is right. */
export function ResourceCard({
  item,
  base,
  headingLevel: Heading = "h3",
}: {
  item: ResourceListItem;
  base: string;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <Link href={`${base}/${item.slug}`} className="card group relative flex flex-col p-6 glow-border">
      <div className="relative z-[1] flex flex-1 flex-col">
        {item.category && (
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
            {item.category}
          </span>
        )}
        <Heading className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-brand-500">
          {item.title}
        </Heading>
        {item.excerpt && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
        )}
        <div className="mt-5 flex items-center justify-between">
          {item.publishedAt && (
            <span className="text-xs text-muted-foreground">{formatDate(item.publishedAt)}</span>
          )}
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-400">
            Read
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Honest, selection-framed empty state (never "coming soon" / backlog-confession). */
export function ResourcesEmptyState({ line, cta }: { line: string; cta?: { label: string; href: string } }) {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-surface p-8 sm:p-10">
      <p className="max-w-2xl text-muted-foreground">{line}</p>
      {cta && (
        <div className="mt-6">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-600 dark:text-brand-400"
          >
            {cta.label}
            <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
