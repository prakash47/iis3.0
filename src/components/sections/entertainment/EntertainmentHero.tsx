import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconShield, IconLayers, IconPen, IconLock, IconCreditCard } from "@/components/icons";

// THE WORD "APP" IS DELIBERATELY ABSENT from every headline surface, exactly as on the five sibling
// pages. Zero mobile apps shipped; "streaming app development" in an H1 or meta implies a mobile
// portfolio. "Platforms", "streaming", "publishing", "community", "ticketing" everywhere; app intent
// routes to /services/mobile-app-development.
//
// THE WORD "COMPLIANT" NEVER APPEARS as a property of us or of software. The chips are architecture
// and boundary facts. "We build the machinery, not the liability" is the fenced-role posture, stated
// as a claim about US (always true).
const trustChips = [
  { icon: <IconLayers className="h-4 w-4" />, label: "We build the machinery, not the liability" },
  { icon: <IconShield className="h-4 w-4" />, label: "Rights and safe-harbor logic, in the software" },
  { icon: <IconCheck className="h-4 w-4" />, label: "Senior-direct, incorporated 2016" },
];

// Not a "tech in 2026" card - an industry page has no version. Where healthcare's card stated who
// each obligation binds, fintech's where the money lives, real-estate's where the risk sits, and
// travel's who keeps the promise, this one states WHO MADE IT AND WHO STAYS ON THE HOOK, because that
// is the page's thesis: you did not author what your platform carries, so the rights and the roles
// stay yours by design.
const facts = [
  { icon: <IconPen className="h-4 w-4" />, k: "Who made it", v: "A rightsholder or a user, not you" },
  { icon: <IconLock className="h-4 w-4" />, k: "Every item needs", v: "A provable licence, and a way out" },
  { icon: <IconShield className="h-4 w-4" />, k: "Licensee & host of record", v: "You - we build the machinery" },
  { icon: <IconCreditCard className="h-4 w-4" />, k: "Payments", v: "On a licensed processor, not us" },
];

/**
 * The SIXTH and LAST bespoke industry page.
 *
 * The gradient span carries the thesis no other page has: in media you did not make what your
 * platform carries, so every item needs a provable licence to be there and a lawful way to leave.
 * The failure lives in serving something you had no right to serve, or hosting what a user uploaded
 * without the machinery that keeps your legal shelter alive - not in data (healthcare), a number
 * (fintech), a discriminatory output (real-estate), or a deferred promise (travel).
 */
export function EntertainmentHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Entertainment &amp; Media</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Entertainment and media software development -{" "}
                <span className="gradient-text">streaming, publishing, community and ticketing platforms, built so every item&apos;s licence is provable and the content you didn&apos;t make stays lawful to carry.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds the software behind media products - streaming and
                video-on-demand platforms, digital publishing and news sites with paywalls, creator
                and community platforms with the moderation and takedown machinery built in, and
                event-ticketing and venue front ends. In media the thing your product serves was made
                by someone else - a rightsholder who licensed it to you on terms, or a user who
                uploaded it on none - so we build so every item&apos;s licence is provable and the
                content you didn&apos;t make stays lawful to carry. What we will not do is become your
                licensing counterparty, your royalty payer, or your host of record; those roles, and
                the liability they carry, stay yours by design.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Discuss your project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#when-not" variant="ghost" size="lg">
                  When we&apos;d say no
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
                  What your platform carries
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Stays yours
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {facts.map((f) => (
                    <li key={f.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {f.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{f.k}</span>
                        <span className="block font-display text-sm font-semibold text-foreground">{f.v}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  You didn&apos;t make it. The software is why you may carry it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
