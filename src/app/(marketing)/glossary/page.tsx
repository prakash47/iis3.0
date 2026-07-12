import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema, definedTermSetSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { loadQuery } from "@/sanity/fetch";
import { GLOSSARY_ALL } from "@/sanity/queries";
import type { GlossaryTerm } from "@/sanity/types";
import { ResourcesEmptyState } from "@/components/resources/ResourceCard";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Glossary", path: "/glossary" },
];

export const metadata: Metadata = pageMetadata("/glossary");
export const revalidate = 3600;

function groupByLetter(terms: GlossaryTerm[]): [string, GlossaryTerm[]][] {
  const groups = new Map<string, GlossaryTerm[]>();
  for (const t of terms) {
    const first = (t.title?.[0] ?? "#").toUpperCase();
    const key = /[A-Z]/.test(first) ? first : "#";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(t);
  }
  return [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

export default async function GlossaryPage() {
  const terms = await loadQuery<GlossaryTerm[]>({
    query: GLOSSARY_ALL,
    tags: ["glossaryTerm"],
    fallback: [],
  });
  const grouped = groupByLetter(terms);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: "/glossary",
          name: "Glossary",
          dateModified: new Date().toISOString(),
        })}
      />
      {terms.length > 0 && (
        <JsonLd
          data={definedTermSetSchema({
            path: "/glossary",
            name: "Web development and digital marketing glossary",
            description:
              "Plain-English definitions of web development, performance and AI-search terms.",
            terms: terms.map((t) => ({
              name: t.title,
              description: t.definition ?? "",
              slug: t.slug,
            })),
          })}
        />
      )}

      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Glossary</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Plain-English definitions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The terms you will hear on a project - from headless CMS and Core Web Vitals to
                hydration and structured data - defined in one clear sentence, then pointed to where
                each one actually matters.
              </p>
            </div>
          </Container>
        </Section>
      </div>

      <Section>
        <Container>
          {terms.length > 0 ? (
            <div className="space-y-14">
              {grouped.map(([letter, items]) => (
                <div key={letter}>
                  <h2 className="font-display text-2xl font-bold text-brand-500">{letter}</h2>
                  <dl className="mt-6 divide-y divide-border border-y border-border">
                    {items.map((t) => (
                      <div key={t.slug} id={t.slug} className="scroll-mt-24 py-6">
                        <dt className="font-display text-lg font-semibold text-foreground">
                          {t.title}
                        </dt>
                        {t.definition && (
                          <dd className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                            {t.definition}
                          </dd>
                        )}
                        {t.seeAlso && t.seeAlso.length > 0 && (
                          <dd className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                              See also
                            </span>
                            {t.seeAlso.map(
                              (link) =>
                                link.href && (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-medium text-brand-500 hover:text-brand-600"
                                  >
                                    {link.label ?? link.href}
                                  </Link>
                                ),
                            )}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          ) : (
            <ResourcesEmptyState
              line="We define the terms that come up most in real projects, each in one clear sentence with a link to where it matters. Not sure what a word on your quote or brief means? Ask us and we'll explain it in plain English."
              cta={{ label: "Ask about a term", href: "/contact" }}
            />
          )}
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
