import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { IconArrow } from "@/components/icons";
import { breadcrumbSchema, webPageSchema, itemListSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { caseStudies } from "@/content/case-studies";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
];

export const metadata: Metadata = pageMetadata("/work");

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={webPageSchema({ path: "/work", name: "Work: Web & App Case Studies" })} />
      {caseStudies.length > 0 && (
        <JsonLd
          data={itemListSchema(
            caseStudies.map((cs) => ({ name: cs.title, path: `/work/${cs.slug}` })),
          )}
        />
      )}
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Instead of a wall of logos, we go deep on the work itself - the stack, the
            timeline and the real results behind each build. Some of our work is under
            NDA, so client names are withheld; the details and references are available on a call.
          </p>

          {caseStudies.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/work/${cs.slug}`}
                  className="group block rounded-2xl border border-border p-6 transition-colors hover:border-brand-400"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-muted-foreground">{cs.type} · {cs.sector}</span>
                    {cs.confidential && (
                      <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Confidential
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 font-display text-xl font-semibold text-foreground">{cs.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{cs.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-lg font-bold text-brand-700 dark:text-brand-400">{m.value}</div>
                        <div className="text-xs text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-400">
                    Read the case study
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="glow-border card relative mt-10 p-8 sm:p-10">
              <h2 className="relative z-[1] font-display text-xl font-semibold text-foreground">
                Featured case studies are on the way.
              </h2>
              <p className="relative z-[1] mt-2 max-w-2xl text-muted-foreground">
                We&apos;re publishing in-depth case studies - each with the real stack, timeline
                and measurable results (load time, conversions, traffic). In the meantime,
                we&apos;re happy to share relevant work and references on a quick call.
              </p>
              <div className="relative z-[1] mt-6">
                <Button href="/contact">Request our portfolio</Button>
              </div>
            </div>
          )}
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
