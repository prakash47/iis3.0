import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE COMPARE AXIS = SwiftUI vs UIKit, the intra-Apple modern-declarative-vs-mature-imperative
// decision. This is deliberate and non-cannibalizing:
//  - RnCompare owns the cross-platform TOOL lens (React Native | Flutter | Native), and it already
//    links here - re-running it would re-fight the cross-platform decision on SwiftUI's own turf and
//    demote SwiftUI to a shared column.
//  - MobileDecision owns the native-vs-cross-platform-vs-PWA STRATEGY lens.
//  - "SwiftUI vs UIKit" is a real, high-value 2026 query cluster that no other page on the site owns,
//    and it is byte-consistent with service-details' "Native iOS (SwiftUI/UIKit)".
//
// FRAMING: SwiftUI-first, UIKit where the product still needs it. UIKit is NOT dead and we don't treat
// it as dead. Protagonist (SwiftUI) at column index 1 (brand-highlighted header + body cell), neutral
// framework headers, qualitative, NO numbers (the "~78% of new projects" survey figure is barred).
const cols = ["", "SwiftUI", "UIKit"];
const rows = [
  { dim: "Programming model", sw: "Declarative and state-driven - you declare what a screen looks like for a given state and the framework diffs and re-renders", ui: "Imperative - an explicit view-controller lifecycle and manual view updates you manage by hand" },
  { dim: "Maturity & edge cases", sw: "Covers the mainstream and closes gaps each release; a few exotic behaviours still reach into UIKit", ui: "The deeper back-catalog - precise custom transitions, heavily customised collection layouts, and some SDK surfaces still live only here" },
  { dim: "Best for", sw: "New screens, multi-platform reach across Apple devices, and development velocity", ui: "Pixel-precise custom transitions, deeply bespoke layouts, UIKit-only SDKs, or a large team's existing UIKit depth" },
  { dim: "Interop", sw: "Brings UIKit in through UIViewRepresentable and UIViewControllerRepresentable when a control still needs it", ui: "Hosts SwiftUI through UIHostingController - mixing the two is the normal migration path, not a smell" },
  { dim: "Talent", sw: "Where new iOS learning and hiring is heading", ui: "Still load-bearing - most large shipping codebases are UIKit or hybrid, so the skill stays essential" },
  { dim: "Our take", sw: "Default to SwiftUI for new work, and adopt it incrementally inside an existing app", ui: "Reach for UIKit exactly where the product genuinely needs it, and bridge the two rather than rewrite" },
];

export function SwiftuiCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="SwiftUI vs UIKit"
            title={<>The honest 2026 <span className="gradient-text">SwiftUI vs UIKit comparison</span></>}
            sub="Both are Apple's, and this is fair rather than a pitch - we build with both and mix them per project. It compares the two Apple UI frameworks, not native against cross-platform; that bigger question belongs on our mobile service page. The short version: SwiftUI-first for new work, UIKit where the product still calls for it."
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
            The one row incumbents skip: a native app also carries the platform-treadmill cost - new
            SDKs and revised guidelines you have to keep up with - which is real work regardless of
            which framework drew the screen. Whether you should go native at all, or reach both stores
            from one cross-platform codebase, is a separate question answered on{" "}
            <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
              our mobile app development service, which weighs native against cross-platform for you
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
