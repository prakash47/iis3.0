import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow } from "@/components/icons";
import { caseStudies } from "@/content/case-studies";

/**
 * Selected work - depth over breadth (the Ramotion model). Leads each card with
 * a real, quantified metric. Data is REAL, anonymized work (client names withheld
 * under NDA; see content/case-studies.ts). Each card links to its case-study
 * detail page. Server-rendered.
 */
export function CaseStudies() {
  const featured = caseStudies.slice(0, 2);
  if (featured.length === 0) return null;

  return (
    <Section>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title={<>We go deep on a <span className="gradient-text">few real builds.</span></>}
              sub="No wall of logos - just a handful of projects with the stack, the timeline, and the numbers behind them."
            />
          </Reveal>
          <Link href="/work" className="text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400">
            All work →
          </Link>
        </div>

        <Reveal group className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((cs) => {
            const hero = cs.metrics[0];
            return (
              <article key={cs.slug} className="card group relative flex flex-col overflow-hidden">
                {/* metric visual */}
                <div className="relative flex aspect-[16/9] flex-col justify-between overflow-hidden p-5 text-white [background:linear-gradient(135deg,#00a0e3,#6d5df1)]">
                  <div aria-hidden="true" className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.45),transparent_45%)]" />
                  <div className="relative z-[1] flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">{cs.type}</span>
                    {cs.confidential && (
                      <span className="rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90">
                        Confidential
                      </span>
                    )}
                  </div>
                  {hero && (
                    <div className="relative z-[1]">
                      <div className="font-display text-3xl font-extrabold sm:text-4xl">{hero.value}</div>
                      <div className="text-sm font-medium text-white/80">{hero.label}</div>
                    </div>
                  )}
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="text-xs font-medium text-muted-foreground">{cs.sector}</div>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground">{cs.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{cs.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cs.stack.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work/${cs.slug}`}
                    aria-label={`Read the case study: ${cs.title}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
                  >
                    Read the case study
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </Reveal>
      </Container>
    </Section>
  );
}
