import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE COMPARE AXIS = Jetpack Compose vs the XML View system, the intra-Android modern-declarative-vs-
// legacy-imperative UI decision. Deliberate and non-cannibalizing:
//  - RnCompare owns the cross-platform TOOL lens (React Native | Flutter | Native), and it already
//    links here; re-running it would re-fight the cross-platform decision and demote Kotlin.
//  - MobileDecision owns the native-vs-cross-platform-vs-PWA STRATEGY lens.
//  - "Jetpack Compose vs XML" is a real, high-value 2026 query cluster no other page on the site owns,
//    and it is the exact intra-Android parallel of the SwiftUI page's SwiftUI-vs-UIKit table.
//
// FRAMING: Compose-first for new work, XML where a legacy codebase or a specific view still needs it,
// and they interoperate. The View system is in maintenance mode, NOT dead - we don't treat it as dead.
// Protagonist (Jetpack Compose) at column index 1 (brand-highlighted header + body cell), neutral
// framework headers, qualitative, NO numbers (K2 build-speed % / Compose-Multiplatform overhead barred).
const cols = ["", "Jetpack Compose", "XML View system"];
const rows = [
  { dim: "Programming model", sw: "Declarative and state-driven - you declare what a screen looks like for a given state and the framework recomposes when it changes", ui: "Imperative - you inflate a static layout tree and mutate widgets by reference, wiring each state change by hand" },
  { dim: "Maturity & edge cases", sw: "The modern default, now mature for the vast majority of screens; a few deep or specialised cases may still wrap a View", ui: "A decade-plus mature, with the edge cases documented and a vast rendering track record behind it" },
  { dim: "When each wins", sw: "New apps, fast iteration, dynamic and state-heavy UI, design-system consistency, and shared UI via Compose Multiplatform", ui: "Large existing View codebases, already-stable screens, or a required third-party component that ships only as a View" },
  { dim: "Interop", sw: "Hosts Views through AndroidView when a legacy component is needed", ui: "Hosts Compose through ComposeView - they interoperate both directions, so migration is incremental, never a forced rewrite" },
  { dim: "Talent", sw: "Where new Android hiring, Google's samples and the new Jetpack libraries are focused", ui: "Broad, still-essential expertise for maintaining the enormous installed base of existing apps; real teams carry both" },
  { dim: "Our take", sw: "Compose-first for anything new, and adopt it incrementally inside an existing app", ui: "Kept where an app already lives there or a specific component demands it - in maintenance mode, but not dead" },
];

export function KotlinCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Jetpack Compose vs XML"
            title={<>The honest 2026 <span className="gradient-text">Jetpack Compose vs XML comparison</span></>}
            sub="Both are Android's own, and this is fair rather than a pitch - we build with both and mix them per project. It compares the two Android UI approaches, not native against cross-platform; that bigger question belongs on our mobile service page. The short version: Compose-first for new work, XML where a legacy app or a specific view still calls for it."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {cols.map((c, i) => (
                      <th
                        key={c || "dim"}
                        scope="col"
                        className={
                          i === 1
                            ? "bg-brand-500/10 p-4 font-bold text-brand-700 dark:text-brand-400"
                            : "p-4 font-semibold text-foreground"
                        }
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.sw}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.ui}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            The one thing this table can&apos;t decide for you: whether to go native at all. A native
            Android app also carries the device-landscape cost - many models, OEM skins and Android
            versions to hold up across - which is real work regardless of which UI approach drew the
            screen. Whether you should go native, or reach both stores from one cross-platform codebase,
            is answered on{" "}
            <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              our mobile app development service, which weighs native against cross-platform for you
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
