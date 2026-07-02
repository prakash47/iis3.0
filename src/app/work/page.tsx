import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
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
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Instead of a wall of logos, we go deep on a few real projects - with the stack,
            the timeline, and the measurable results.
          </p>

          {caseStudies.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <article key={cs.slug} className="rounded-2xl border border-border p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">{cs.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{cs.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-lg font-bold text-brand-600">{m.value}</div>
                        <div className="text-xs text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </article>
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
