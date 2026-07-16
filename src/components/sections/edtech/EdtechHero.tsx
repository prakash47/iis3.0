import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconLock, IconLayers, IconEye, IconRefresh, IconShield } from "@/components/icons";

// THE WORD "APP" IS DELIBERATELY ABSENT from every headline surface on this page. We have
// shipped zero mobile apps of any kind, and "eLearning app development" in an H1 or a meta
// description implies a mobile portfolio. "Learning platform" everywhere instead.
//
// The chips are process/offer facts, not outcomes. "We'll tell you when not to build" is the
// page's thesis and is checkable one scroll down.
const trustChips = [
  { icon: <IconLayers className="h-4 w-4" />, label: "Open standards: LTI 1.3, OneRoster, SCORM" },
  { icon: <IconCheck className="h-4 w-4" />, label: "We'll tell you when not to build" },
  { icon: <IconLock className="h-4 w-4" />, label: "You own the code and the data" },
];

// Not a "tech in 2026" card - an industry page has no version. This is what education buyers
// actually gate a purchase on, which is a far more useful at-a-glance and is entirely factual.
// WCAG 2.1 AA is the legally load-bearing target: the 2024 ADA Title II web rule adopts
// "WCAG Version 2.1, Level AA" for state and local government, which expressly includes public
// schools, community colleges and public universities. Do NOT write 2.2 here.
const gates = [
  { icon: <IconEye className="h-4 w-4" />, k: "Accessibility", v: "WCAG 2.1 AA, and a VPAT they'll ask for" },
  { icon: <IconShield className="h-4 w-4" />, k: "Student privacy", v: "FERPA, COPPA, state law, GDPR" },
  { icon: <IconRefresh className="h-4 w-4" />, k: "Interoperability", v: "LTI 1.3 and OneRoster rostering" },
  { icon: <IconLock className="h-4 w-4" />, k: "Security review", v: "HECVAT, answered honestly" },
];

/**
 * The FIRST bespoke industry page. It sets the pattern for the other five verticals.
 *
 * The H1 carries the money keyword ("custom LMS ... development") because the slug does not -
 * `/industries/edtech` is a sector namespace, and the commercial term is a product term. The
 * gradient span carries the thesis, which is also the anti-recommendation: most people asking
 * for a custom LMS should not build one.
 */
export function EdtechHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>EdTech &amp; LMS</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Custom LMS and eLearning development -{" "}
                <span className="gradient-text">and an honest answer about whether you should build one at all.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds learning platforms, student portals and assessment
                tools, integrated the way education actually works: LTI 1.3 into the LMS you already
                run, OneRoster into the student information system, SCORM or xAPI for the content.
                We treat accessibility and student-data privacy as the procurement gates they are,
                not as features to bolt on before launch. And because most briefs that arrive
                labelled &quot;custom LMS&quot; are better served by extending Moodle, Canvas or Open
                edX, that is usually the first thing we will tell you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Discuss your project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#when-not" variant="ghost" size="lg">
                  When not to build
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                A paid discovery first, a fixed price before any build, and the code is yours.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {trustChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="card glow-border relative w-full max-w-sm overflow-hidden p-6">
                <p className="relative z-[1] flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  What education buyers gate on
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Pass or fail
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {gates.map((g) => (
                    <li key={g.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {g.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{g.k}</span>
                        <span className="block font-display text-sm font-semibold text-foreground">{g.v}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  These are gates, not features. Gates fail late and fail loudly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
