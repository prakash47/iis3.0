import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE COMPARE-TABLE PROBLEM, solved by the Shopify -> WooCommerce precedent.
//
// The React Native page already runs "React Native | Flutter | Native (SwiftUI / Kotlin)" and it
// PRE-LOCKED Flutter's cells. Mirroring it here would ship two near-duplicate tables on our own
// site AND make Flutter the runner-up on the page meant to sell it. Precedent: the Shopify page's
// table included WooCommerce; when the WooCommerce page came later it did NOT mirror it - it
// compared inside the self-hosted family (Magento, PrestaShop) and left Shopify to the caption.
//
// So: compare inside the "other cross-platform toolkits we have no page and no roadmap for".
// .NET MAUI and Ionic/Capacitor are the Magento and PrestaShop of this page. Nothing is pre-locked
// for the future swiftui, kotlin or an undecided Kotlin Multiplatform lane, and React Native and
// native are handled in the caption where they belong.
//
// Rejected: "Flutter | Native | Hybrid webview" (re-runs a fully-characterised native column that
// RnCompare owns, deepening the pre-lock on the thin swiftui/kotlin pages), and any column that
// names React Native inside a cell (drags Flutter-vs-RN back onto Flutter's own page).
//
// BYTE-LOCKED: every Flutter cell that also exists in RnCompare is copied verbatim from it, so our
// two mobile spokes can never describe Flutter differently. "How it's compiled" is a new dimension
// and a legitimate, first-party-verifiable Flutter differentiator - RnCompare has no compile row,
// and RnCapabilities' Hermes-bytecode card stays true because React Native is not a column here.
// The "Look across platforms" cell is deliberately qualified rather than a boast, because the
// signature two sections up says owning every pixel means owning every mistake.
const cols = ["", "Flutter", ".NET MAUI", "Ionic / Capacitor"];
const rows = [
  { dim: "Language", fl: "Dart", maui: "C# and .NET", ionic: "JavaScript or TypeScript, HTML and CSS" },
  { dim: "How it renders", fl: "Its own engine draws every pixel", maui: "The platform's own native controls, from .NET", ionic: "A webview - your web UI inside a native shell" },
  { dim: "How it's compiled", fl: "Dart, ahead-of-time compiled to native machine code", maui: "Compiled to native through .NET", ionic: "Not compiled to native - it runs in the system webview" },
  { dim: "Best for", fl: "Highly custom, animation-rich interfaces", maui: "Teams already invested in C# and .NET", ionic: "Content and simple apps a web team can ship fast" },
  { dim: "Look across platforms", fl: "Identical on both by default; matching each platform is your work", maui: "Adapts to each platform's own look", ionic: "A web look, approximated on each platform" },
  { dim: "Our take", fl: "A strong pick when the interface is the whole product", maui: "The pragmatic route for a committed .NET shop", ionic: "Fine for simple content apps, not a flagship" },
];

export function FlutterCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Flutter vs .NET MAUI vs Ionic"
            title={<>The honest 2026 <span className="gradient-text">cross-platform toolkit comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. These three take genuinely different bets on how an app gets drawn: Flutter renders everything itself, MAUI drives the platform's own controls from C#, and Ionic puts your web UI in a native shell. The bet is the decision."
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
                            ? "bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400"
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.fl}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.maui}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.ionic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* The caption carries React Native and native, whose comparison the react-native page owns.
            It also names Kotlin Multiplatform, because service-details.ts lists it as a
            cross-platform option and no page may stage a two-horse race. Anchors are worded
            differently from the inbound "weighing the Flutter alternative", used twice. */}
        <Reveal className="mt-6">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            In practice most Flutter decisions come down to Flutter or React Native, or Flutter versus
            going fully native - the two we build most. Weigh it against{" "}
            <Link href="/technologies/react-native" className="font-medium text-brand-500 hover:text-brand-600">
              React Native, the JavaScript route to the same two stores
            </Link>
            , or against{" "}
            <Link href="/technologies/swiftui" className="font-medium text-brand-500 hover:text-brand-600">
              going fully native on iOS with SwiftUI
            </Link>{" "}
            and{" "}
            <Link href="/technologies/kotlin" className="font-medium text-brand-500 hover:text-brand-600">
              native Android in Kotlin
            </Link>
            . Kotlin Multiplatform is a different cross-platform model again, and .NET MAUI is
            Microsoft&apos;s successor to Xamarin. Whether you want an app at all - and whether it
            should be cross-platform, fully native or an install-free web app - is the bigger question,
            and it lives on{" "}
            <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
              our mobile app development service, where we make that call with you in writing
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
