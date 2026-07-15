import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { CtaBand } from "@/components/sections/CtaBand";
import { PortableTextBody, extractToc } from "@/sanity/PortableTextBody";
import { formatDate, readingTime } from "@/lib/format";
import type { ResourceDoc, ResourceListItem } from "@/sanity/types";

/** Shared reading template for a blog post or a guide. Author is the company
 *  (byline hardcoded - no fabricated named human). Published/Updated come from the
 *  real Sanity dates. The TOC uses the SAME slugify as the body heading serializer. */
export function ArticleLayout({
  doc,
  crumbs,
  related,
  base,
}: {
  doc: ResourceDoc;
  crumbs: { name: string; path: string }[];
  related: ResourceListItem[];
  base: string;
}) {
  const toc = extractToc(doc.body);
  const mins = readingTime(doc.body);
  const published = doc.publishedAt;
  const updated = doc._updatedAt;

  return (
    <>
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              {doc.category?.title && <Pill dot>{doc.category.title}</Pill>}
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                {doc.title}
              </h1>
              {doc.excerpt && (
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{doc.excerpt}</p>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span>By the Intention InfoService team</span>
                {published && <span>Published {formatDate(published)}</span>}
                {updated && formatDate(updated) !== formatDate(published ?? "") && (
                  <span>Updated {formatDate(updated)}</span>
                )}
                <span>{mins} min read</span>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
            <article className="min-w-0 max-w-2xl">
              <PortableTextBody value={doc.body} />
            </article>
            {toc.length > 2 && (
              <aside className="mt-10 hidden lg:mt-0 lg:block">
                <div className="sticky top-24">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    On this page
                  </p>
                  <ul className="mt-3 space-y-2 border-l border-border">
                    {toc.map((h) => (
                      <li key={h.id} className={h.level === 3 ? "pl-6" : "pl-3"}>
                        <a
                          href={`#${h.id}`}
                          className="block text-sm text-muted-foreground transition-colors hover:text-brand-500"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-border pt-10">
              <h2 className="font-display text-xl font-bold text-foreground">Related reading</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} href={`${base}/${r.slug}`} className="card group p-5">
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-brand-500">
                      {r.title}
                    </h3>
                    {r.excerpt && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.excerpt}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
