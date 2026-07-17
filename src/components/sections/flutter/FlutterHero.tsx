import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconPalette, IconLayers, IconCpu, IconRocket } from "@/components/icons";

// Two chips are founder-confirmed commitments already published on the mobile money page
// (MobileProof). The third is a FACT ABOUT FLUTTER, not a claim about our record - and it is
// byte-consistent with RnCompare's locked cell "Its own engine draws every pixel".
const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the code, IP & store accounts" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconPalette className="h-4 w-4" />, label: "Every pixel drawn, not borrowed" },
];

// Currency is signalled by FEATURE, never a version number. "Impeller" is Flutter's equivalent of
// React Native's "New Architecture" badge - the clearest "this is modern Flutter" tell.
// Dart AOT-compiling to native machine code is a REAL differentiator that React Native does not
// have (the RN page deliberately claims only that Hermes precompiles JavaScript to bytecode, and
// never an ahead-of-time-to-native claim). Flutter earns it honestly, so we say it.
// NOTHING here claims this page is Flutter: our stack is TypeScript and React rendering to the DOM.
const at2026 = [
  { icon: <IconLayers className="h-4 w-4" />, k: "Build model", v: "One Dart codebase, two stores" },
  { icon: <IconPalette className="h-4 w-4" />, k: "Renderer", v: "Impeller draws every pixel" },
  { icon: <IconCpu className="h-4 w-4" />, k: "Compiled", v: "Dart, ahead-of-time to native code" },
  { icon: <IconRocket className="h-4 w-4" />, k: "Ships to", v: "App Store + Google Play" },
];

/**
 * Flutter spoke hero - our 13th tech spoke and the SECOND MOBILE one.
 *
 * THE H1 DELIBERATELY DOES NOT CARRY THE PAGE'S THESIS. "Every pixel is ours to get right - and
 * ours to get wrong" is the signature, but a skimming buyer who reads only the H1 would take
 * "ours to get wrong" as a confession. It lives in FlutterProof, after the 12-card depth grid has
 * earned it. The H1 front-loads the commercial keyword instead - exactly as the React Native page
 * kept "The React part is the easy part" out of its own H1.
 *
 * The H1 wording is byte-consistent with RnCompare's locked Flutter cells: "Dart" and
 * "Its own engine draws every pixel".
 */
export function FlutterHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Flutter app development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Flutter app development services - iOS and Android from one Dart codebase{" "}
                <span className="gradient-text">that draws every pixel itself.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds cross-platform mobile apps with Flutter, for the
                products where the interface is the whole point. Flutter borrows nothing from the
                platform&apos;s widget set - its own engine draws the screen - which is why a custom,
                animation-rich design lands identically on both stores. That freedom is also a
                responsibility, and we engineer the parts it hands you: platform fidelity,
                accessibility semantics, motion, download size, native interop and the release
                pipeline. Published fixed prices, milestone billing, and you own the code, the IP and
                the store accounts. For startups, SMBs and enterprises worldwide.
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
                  Flutter in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-700 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Impeller
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
                  Impeller, Dart AOT, Material and Cupertino - the whole UI, drawn.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
