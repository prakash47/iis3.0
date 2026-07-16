import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE COMPARE-TABLE PROBLEM on this spoke is different from every prior one.
//
// The MOBILE MONEY PAGE already owns an axis: MobileDecision runs cross-platform vs native vs PWA.
// Re-running it here would duplicate our own signature section AND demote React Native to half of
// one shared "cross-platform" column ON ITS OWN PAGE. Rejected.
//
// An intra-RN table (Expo vs bare vs native modules) was also considered and rejected: the
// managed-vs-bare binary is being erased by continuous native generation, it does not serve the
// highest-value query in this space, and it has no protagonist to highlight. That content is
// genuinely good, so it lives in Capabilities and the default-architecture panel instead.
//
// So: React Native vs Flutter vs Native, on DISCRIMINATING dimensions - a TOOL lens, orthogonal to
// MobileDecision's STRATEGY lens (which owns cost, speed and PWA). This mirrors ReactCompare
// (React vs Angular vs Vue): three named technologies, protagonist at column index 1, qualitative.
//
// CONSISTENCY LOCK: the three "Best for" cells are lifted from what MobileFaq and MobileDecision
// ALREADY publish, so this table adds almost no new lock for the future Flutter, SwiftUI and
// Kotlin spokes to honour - it only restates locks that already exist, which is the safest
// possible pre-lock. NO cost or speed rows (MobileDecision owns those, in plain language, with no
// percentages). NO "Maintained by" row - Meta vs the React Foundation would contradict our own
// myth-buster and would date instantly. NO numbers anywhere.
//
// "Shares code with your web app" must never be a bare "Yes" - ReactFaq publishes "much logic",
// not the whole UI, and "write once, run everywhere" is precisely the overclaim this page refuses.
const cols = ["", "React Native", "Flutter", "Native (SwiftUI / Kotlin)"];
const rows = [
  { dim: "Language", rn: "JavaScript and TypeScript", flutter: "Dart", native: "Swift on iOS, Kotlin on Android" },
  { dim: "How it renders", rn: "Real native platform components, driven from JavaScript", flutter: "Its own engine draws every pixel", native: "The platform's own UI toolkits, directly" },
  { dim: "Best for", rn: "Teams already in the JavaScript and React ecosystem", flutter: "Highly custom, animation-rich interfaces", native: "Deep performance, hardware access or platform-specific features" },
  { dim: "Shares code with your web app", rn: "High - the same React model and most of the logic; the UI stays platform-specific", flutter: "Limited - Flutter on the web is a separate target", native: "None - two codebases, neither shared with the web" },
  { dim: "Talent pool", rn: "Very large - any React or JavaScript developer can read it", flutter: "Growing, but Dart-specific", native: "Two separate specialist pools to hire and keep" },
  { dim: "Our take", rn: "Our default when your team or product already lives in React", flutter: "A strong pick when the interface is the whole product", native: "Worth the extra cost only when the product genuinely demands it" },
];

export function RnCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="React Native vs Flutter vs native"
            title={<>The honest 2026 <span className="gradient-text">cross-platform comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. We build all three, and we pick per project. This table compares the tools; whether you want an app at all, and whether it should be cross-platform, native or a web app, is the bigger question and it belongs on our mobile service page."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.rn}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.flutter}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.native}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Still deciding whether it should be an app at all?{" "}
            <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Our mobile app development service
            </Link>{" "}
            weighs cross-platform against fully native and against an install-free web app, and we put
            that call in writing. Or go deeper on{" "}
            <Link href="/technologies/flutter" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              weighing the Flutter alternative
            </Link>
            , or on going fully native with{" "}
            <Link href="/technologies/swiftui" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              SwiftUI
            </Link>{" "}
            or{" "}
            <Link href="/technologies/kotlin" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Kotlin
            </Link>
            . We recommend the fit, not the tool we feel like selling.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
