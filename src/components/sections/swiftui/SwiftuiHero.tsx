import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconDevice, IconRefresh, IconDatabase, IconCpu, IconBolt } from "@/components/icons";

// The three chips are founder-confirmed and already published on the mobile money page: you own 100%
// of the code and IP on final payment, the Apple Developer account is registered in your name, and
// pricing is published. "Native Apple views, not a webview" is a property of SwiftUI itself, never a
// claim about our record.
const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the code, IP & Apple account" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconDevice className="h-4 w-4" />, label: "Native Apple views, not a webview" },
];

// Currency signalled by FEATURE, never a version number - WWDC ships a new OS generation every year,
// so printing an iOS/Xcode point-version dates instantly. NOTHING here claims this page is SwiftUI:
// this site is a static Next.js/React DOM build with no Swift anywhere. Liquid Glass is named as
// Apple's current design material, not "this year's".
const at2026 = [
  { icon: <IconRefresh className="h-4 w-4" />, k: "State model", v: "Observation + @Observable" },
  { icon: <IconDatabase className="h-4 w-4" />, k: "Data", v: "SwiftData persistence" },
  { icon: <IconCpu className="h-4 w-4" />, k: "Concurrency", v: "Swift 6, data-race safe" },
  { icon: <IconBolt className="h-4 w-4" />, k: "Design", v: "Liquid Glass, first-party" },
];

/**
 * SwiftUI spoke hero - the third mobile spoke and the first native-Apple one.
 *
 * THE H1 DOES NOT CARRY THE SIGNATURE. "On Apple's platform you are a guest, not the host" is the
 * thesis, but as a hero slogan it reads as a confession; it lives one scroll down in SwiftuiProof.
 * The H1 tail is a CAPABILITY claim ("in Apple's own UI toolkit") and deliberately NOT "built the way
 * Apple builds its own" (borrows Apple's endorsement) or "the same Swift code everywhere" (the
 * one-codebase-effortless overclaim) - both flagged and rejected. It claims native REACH, not
 * shared-code reuse, and the entity paragraph carries the per-platform-adaptation caveat.
 */
export function SwiftuiHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>SwiftUI app development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                SwiftUI app development services - native across iPhone, iPad and the rest of the Apple platforms,{" "}
                <span className="gradient-text">in Apple&apos;s own UI toolkit.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds native apps for Apple&apos;s platforms with SwiftUI - one
                declarative Swift codebase that can reach iPhone, iPad, Mac, Apple Watch, Apple TV and
                Vision, adapted per platform rather than pretending one layout fits them all. We wire
                the frameworks a real app needs - SwiftData, the Observation framework and Apple&apos;s
                own SDKs for payments, maps, health, notifications and more - and we engineer for the
                part that decides whether a native app survives: keeping it current as Apple&apos;s
                platform moves under it. Published fixed prices, milestone billing, and you own the
                code, the IP and the Apple Developer account. For startups, SMBs and enterprises
                worldwide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Get a fixed quote
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how we work
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Fixed price, paid by milestone, and we submit your app to the App Store.
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
                  SwiftUI in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Apple-native
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {at2026.map((g) => (
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
                  Declarative views, state-driven, drawn by Apple&apos;s own toolkit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
