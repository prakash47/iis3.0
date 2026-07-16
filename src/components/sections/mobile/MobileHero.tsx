import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconDevice, IconTag, IconCheck, IconCode, IconClock, IconPin } from "@/components/icons";

const trustChips = [
  { icon: <IconDevice className="h-4 w-4" />, label: "Native + cross-platform" },
  { icon: <IconTag className="h-4 w-4" />, label: "Transparent fixed pricing" },
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the code" },
];

const glance = [
  { icon: <IconCode className="h-4 w-4" />, k: "Stacks", v: "React Native, Flutter, SwiftUI, Kotlin" },
  { icon: <IconTag className="h-4 w-4" />, k: "Pricing", v: "Fixed & published" },
  { icon: <IconClock className="h-4 w-4" />, k: "Timeline", v: "Weeks, typical" },
  { icon: <IconPin className="h-4 w-4" />, k: "Serves", v: "US, UK, UAE, EU & India" },
];

/**
 * Mobile money-page hero. The H1 answers the buyer's real stuck question
 * (native or cross-platform) and the answer-first capsule is the AI-extraction
 * target. NOTE: no Lighthouse / Core Web Vitals claim anywhere - a website's
 * performance score says nothing about a native app, so it never appears here.
 */
export function MobileHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Mobile app development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                iOS and Android app development, native or cross-platform - the right call made{" "}
                <span className="gradient-text">before you commit.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService is a full-service mobile app development company. We build
                iOS and Android apps - cross-platform with React Native or Flutter when speed and
                budget matter, fully native with SwiftUI or Kotlin when the product demands it,
                and PWAs when install-free is the right call - for startups, SMBs and enterprises
                across the US, UK, UAE, Europe and India. Transparent published fixed prices, most
                apps ship in weeks, and you own the code.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Get a fixed-price estimate
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how it works
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                A straight native-or-cross-platform recommendation. No quote wall.
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
                <p className="relative z-[1] text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  At a glance
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {glance.map((g) => (
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
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
