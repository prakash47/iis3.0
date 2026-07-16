import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconDevice, IconLayers, IconCpu, IconRocket } from "@/components/icons";

// The three chips are all founder-confirmed and already published on the mobile money page
// (MobileProof): you own 100% of the code and IP on final payment, the store accounts are
// registered in your name, and pricing is published. "Real native views, not a webview" is a
// property of React Native itself, not a claim about our record.
const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the code, IP & store accounts" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconDevice className="h-4 w-4" />, label: "Real native views, not a webview" },
];

// Currency is signalled by FEATURE, never a version number. "New Architecture" is the single
// clearest "this is modern React Native" tell. NOTHING here claims this page is React Native -
// this site is a static Next.js/React DOM build and contains no React Native at all.
// Hermes: bytecode precompilation for cold start. Do NOT claim ahead-of-time native compilation
// - Static Hermes is a research compiler and Hermes V1 is experimental opt-in, not shipped.
const at2026 = [
  { icon: <IconLayers className="h-4 w-4" />, k: "Build model", v: "Expo + React Native" },
  { icon: <IconDevice className="h-4 w-4" />, k: "Renderer", v: "Fabric - real native views" },
  { icon: <IconCpu className="h-4 w-4" />, k: "Engine", v: "Hermes, precompiled bytecode" },
  { icon: <IconRocket className="h-4 w-4" />, k: "Ships to", v: "App Store + Google Play" },
];

/**
 * React Native spoke hero - our 12th tech spoke and the FIRST MOBILE one.
 *
 * THE H1 DELIBERATELY DOES NOT CARRY THE PAGE'S THESIS. "The React part is the easy part" is the
 * signature move, but as a hero slogan a skimming buyer reads it as "these are React web people
 * dabbling in mobile", and it buries the commercial keyword the mobile SERP demands. The thesis
 * lives one scroll down in RnProof, where it has room to prove itself.
 *
 * "delivered by" not "built by" - the past participle sitting next to "app" is skimmable as
 * "apps we have built", and we have shipped zero apps.
 */
export function RnHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>React Native app development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                React Native app development services - one codebase for iOS and Android,{" "}
                <span className="gradient-text">delivered by a team that knows where React ends and native begins.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds cross-platform mobile apps with React Native: real
                native views on the New Architecture, Expo where it earns its place, and hand-written
                native modules where it doesn&apos;t. We engineer the parts that are not React - the
                native build and release pipeline, store submission, offline sync, push, deep links,
                permissions and version upgrades - because those are the parts that decide whether an
                app survives its second year. Published fixed prices, milestone billing, and you own
                the code, the IP and the store accounts. For startups, SMBs and enterprises worldwide.
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
                Fixed price, paid by milestone, and we submit your app to both stores.
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
                  React Native in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    New Architecture
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
                  Fabric, TurboModules, JSI, bridgeless - the rebuilt React Native.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
