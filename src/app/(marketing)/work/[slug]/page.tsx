import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { caseStudies } from "@/content/case-studies";

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
    title: `${cs.title} - Case Study`,
    description: cs.summary,
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
  const dateModified = new Date().toISOString();

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: `/work/${cs.slug}`,
          name: `${cs.title} - Case Study`,
          dateModified,
        })}
      />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted-foreground">
            <span>{cs.type}</span>
            <span aria-hidden="true">·</span>
            <span>{cs.sector}</span>
            {cs.confidential && (
              <>
                <span aria-hidden="true">·</span>
                <span>Client confidential</span>
              </>
            )}
          </div>

          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {cs.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{cs.summary}</p>

          {/* real, measured metrics */}
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-3xl font-extrabold text-brand-600">{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          {/* stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {cs.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {/* body */}
          <div className="mt-12 max-w-2xl space-y-10">
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
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
