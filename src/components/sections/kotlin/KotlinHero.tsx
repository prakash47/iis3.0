import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconDevice, IconGrid, IconRefresh, IconCpu, IconLayers } from "@/components/icons";

// The three chips are founder-confirmed and already published on the mobile money page: you own 100%
// of the code and IP on final payment, the Google Play Developer account is registered in your name,
// and pricing is published. "Native Android views, not a webview" is a property of Jetpack Compose
// and the native toolkit, never a claim about our record.
const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the code, IP & Play account" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconDevice className="h-4 w-4" />, label: "Native Android views, not a webview" },
];

// Currency signalled by FEATURE, never a version number - Android ships a new OS generation every
// year, so a printed Android/Kotlin point-version dates instantly. NOTHING here claims this page is
// Kotlin: this site is a static Next.js/React DOM build with no Kotlin anywhere.
const at2026 = [
  { icon: <IconGrid className="h-4 w-4" />, k: "UI", v: "Jetpack Compose + Material 3" },
  { icon: <IconRefresh className="h-4 w-4" />, k: "Concurrency", v: "Coroutines + Flow" },
  { icon: <IconCpu className="h-4 w-4" />, k: "Compiler", v: "The K2 compiler" },
  { icon: <IconLayers className="h-4 w-4" />, k: "Shared logic", v: "Kotlin Multiplatform" },
];

/**
 * Kotlin spoke hero - the last mobile spoke and the native-Android half of the SwiftUI/Kotlin pair.
 *
 * THE H1 DOES NOT CARRY THE SIGNATURE. "You don't ship to a phone, you ship to a landscape nobody
 * controls" is the thesis; it lives one scroll down in KotlinProof. The H1 tail is a CAPABILITY
 * claim that lightly echoes the fragmentation thesis with NO number, keyword-first ("Kotlin" leads,
 * "Android" disambiguates from the Java/Spring-Boot-backend Kotlin, "app development" is the mobile
 * money token). "app" IS allowed in the mobile-spoke H1, per the siblings.
 */
export function KotlinHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Kotlin Android app development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Kotlin Android app development services - native Android apps built in Kotlin and Jetpack Compose,{" "}
                <span className="gradient-text">for the whole device landscape, not just the phone on your desk.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds native Android apps in Kotlin - declarative UI in Jetpack
                Compose with Material 3, the Jetpack architecture libraries, coroutines and Flow for
                responsive, offline-tolerant data, and the backend the app talks to. Where it helps,
                Kotlin Multiplatform shares the business logic with an iOS app while each platform stays
                native. And we engineer for the part that actually breaks Android products: the device
                landscape - the many models, the OEM skins, the wide range of Android versions your
                users are actually on. Published fixed prices, milestone billing, and you own the code,
                the IP and the Google Play Developer account. For startups, SMBs and enterprises
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
                Fixed price, paid by milestone, and we submit your app to the Play Store.
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
                  Kotlin in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-700 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Android-native
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
                  Declarative Compose, structured coroutines, drawn by the platform&apos;s own toolkit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
