import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow, IconCheck } from "@/components/icons";

// The signature section. It is a BUDGET/STRATEGY decision, not a technical one.
// The quality of this reasoning is itself a proof substitute for a thin
// portfolio, and it routes framework intent to the /technologies/* spokes.
// Cost/speed are PLAIN-LANGUAGE guidance (no invented percentages).
const rows = [
  { dim: "Best for", cross: "Most apps - one codebase for iOS + Android", native: "Performance-heavy or hardware-deep apps", pwa: "Install-free reach, content and light tools" },
  { dim: "Relative cost", cross: "Lower - one codebase, not two", native: "Highest - two separate builds", pwa: "Lowest - no app store, one web build" },
  { dim: "Speed to ship", cross: "Fast", native: "Slower - two platforms to build", pwa: "Fastest" },
  { dim: "Main trade-off", cross: "A thin native layer for the rare edge feature", native: "Two codebases to build and maintain", pwa: "No app-store presence; limited device APIs" },
  { dim: "When we recommend it", cross: "The smart default for most teams", native: "When the product truly demands it", pwa: "When install-free is genuinely the right call" },
];

const spokes = [
  { label: "React Native", href: "/technologies/react-native" },
  { label: "Flutter", href: "/technologies/flutter" },
  { label: "SwiftUI (native iOS)", href: "/technologies/swiftui" },
  { label: "Kotlin (native Android)", href: "/technologies/kotlin" },
];

export function MobileDecision() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="The decision"
            title={<>Native, cross-platform, or <span className="gradient-text">a PWA?</span></>}
            sub="It's a budget and strategy call before it's a technical one. Cross-platform is the smart default - one codebase for both stores. Native is worth it when the product truly demands it. And sometimes a PWA is the honest answer. Here's how we'd guide you."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400">
                      Cross-platform
                      <span className="block text-xs font-normal text-muted-foreground">React Native / Flutter</span>
                    </th>
                    <th scope="col" className="p-4 font-semibold text-foreground">
                      Native
                      <span className="block text-xs font-normal text-muted-foreground">SwiftUI / Kotlin</span>
                    </th>
                    <th scope="col" className="p-4 font-semibold text-foreground">
                      PWA
                      <span className="block text-xs font-normal text-muted-foreground">Install-free web app</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">
                        <span className="flex items-start gap-2">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {r.cross}
                        </span>
                      </td>
                      <td className="p-4 align-top text-muted-foreground">{r.native}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.pwa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* honest anti-sell + spoke routing */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you NOT to build native
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              If your app is mostly content, forms or standard flows, going fully native is usually
              just the expensive way to get there - and a PWA might do the job for a fraction of the
              cost. We make that call with you in discovery, in writing, before you spend on a build
              you don&apos;t need.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-medium text-foreground">Go deeper:</span>
              {spokes.map((s) => (
                <Link key={s.href} href={s.href} className="group inline-flex items-center gap-1 font-medium text-brand-500 hover:text-brand-600">
                  {s.label}
                  <IconArrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
