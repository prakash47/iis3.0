import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { caseStudies } from "@/content/case-studies";
import { technologies, getService } from "@/content/catalog";

/** Link a stack chip to its /technologies/<slug> spoke when one exists (e.g. "Sanity CMS" -> sanity). */
function techSlugFor(tag: string): string | undefined {
  const n = tag.toLowerCase();
  return technologies.find((t) => n === t.name.toLowerCase() || n.startsWith(t.name.toLowerCase() + " "))?.slug;
}

// Only the known case-study slugs render; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return metadataFrom({
    path: `/work/${cs.slug}`,
    title: cs.seoTitle ?? `${cs.title} - Case Study`,
    description: cs.seoDescription ?? cs.summary,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: cs.title, path: `/work/${cs.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: `/work/${cs.slug}`,
          name: `${cs.title} - Case Study`,
        })}
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-5xl">
            <Breadcrumbs items={crumbs} />

            {/* hero */}
            <h1 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {cs.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{cs.summary}</p>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-3xl font-extrabold text-brand-600">{m.value}</div>
                  <div className="text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>

            {/* two-column: narrative + sticky sidebar */}
            <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
              {/* narrative */}
              <div className="space-y-10">
                <section>
                  <h2 className="font-display text-xl font-semibold text-foreground">The challenge</h2>
                  {cs.challenge.map((p, i) => (
                    <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </section>

                <section>
                  <h2 className="font-display text-xl font-semibold text-foreground">What we built</h2>
                  <ul className="mt-3 space-y-2.5">
                    {cs.approach.map((a, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500"
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {cs.whyItWorked && cs.whyItWorked.length > 0 && (
                  <section>
                    <h2 className="font-display text-xl font-semibold text-foreground">Why it worked</h2>
                    {cs.whyItWorked.map((p, i) => (
                      <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </section>
                )}

                <section>
                  <h2 className="font-display text-xl font-semibold text-foreground">The outcome</h2>
                  {cs.outcome.map((p, i) => (
                    <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </section>

                {cs.confidential && (
                  <p className="text-sm italic text-muted-foreground">
                    Client name withheld at the client&apos;s request. We&apos;re happy to walk
                    through the details, or arrange a reference, on a call.
                  </p>
                )}
              </div>

              {/* sticky sidebar */}
              <aside className="h-fit space-y-6 lg:sticky lg:top-24">
                <div className="card p-6">
                  <h2 className="font-display text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    At a glance
                  </h2>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground">Sector</dt>
                      <dd className="mt-0.5 text-sm text-foreground">{cs.sector}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground">Project</dt>
                      <dd className="mt-0.5 text-sm text-foreground">{cs.type}</dd>
                    </div>
                    {cs.serviceSlug && getService(cs.serviceSlug) && (
                      <div>
                        <dt className="text-xs font-medium text-muted-foreground">Service</dt>
                        <dd className="mt-0.5 text-sm">
                          <Link
                            href={`/services/${cs.serviceSlug}`}
                            className="text-brand-500 hover:text-brand-600"
                          >
                            {getService(cs.serviceSlug)!.name}
                          </Link>
                        </dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-xs font-medium text-muted-foreground">Stack</dt>
                      <dd className="mt-1.5 flex flex-wrap gap-1.5">
                        {cs.stack.map((t) => {
                          const slug = techSlugFor(t);
                          const cls =
                            "rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs font-medium";
                          return slug ? (
                            <Link
                              key={t}
                              href={`/technologies/${slug}`}
                              className={`${cls} text-muted-foreground transition-colors hover:border-brand-400 hover:text-brand-600`}
                            >
                              {t}
                            </Link>
                          ) : (
                            <span key={t} className={`${cls} text-muted-foreground`}>
                              {t}
                            </span>
                          );
                        })}
                      </dd>
                    </div>
                    {cs.confidential && (
                      <div>
                        <dt className="text-xs font-medium text-muted-foreground">Client</dt>
                        <dd className="mt-0.5 text-sm text-foreground">Confidential (under NDA)</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="card hidden p-6 lg:block">
                  <h2 className="font-display text-base font-semibold text-foreground">
                    Have a similar project?
                  </h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Talk to the people who&apos;ll build it - fixed pricing and a clear timeline.
                  </p>
                  <Button href="/contact" className="mt-4 w-full justify-center">
                    Start a project
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
