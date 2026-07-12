import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE COMPARISON THE BUYER IS ACTUALLY MAKING, and nobody publishes it: configure a hosted
// platform, extend an open one, or build from scratch. Zero cannibalization - we have no Moodle,
// Canvas or Open edX pages, and this axis competes with none of the eight money pages.
//
// The protagonist is deliberately NOT column index 1. On every technology spoke the highlighted
// column is the thing we sell; here the honest answer is usually the MIDDLE column, and the page's
// whole thesis is that "build custom" is the last resort rather than the goal. Highlighting
// "extend an open platform" is the table agreeing with the anti-recommendation instead of
// undercutting it - which is the only way this table can be honest.
//
// No numbers. No cost ranges (agency "custom LMS $50k-$200k" figures are marketing). No timelines
// that would fabricate a certainty we do not have.
const cols = ["", "Configure a hosted platform", "Extend an open platform", "Build custom"];
const rows = [
  { dim: "What it is", a: "Canvas, or a SaaS LMS, set up and configured", b: "Moodle or Open edX, plus plugins and your own LTI tools", c: "A bespoke platform, built from the data model up" },
  { dim: "Best for", a: "Selling and delivering courses on a known model", b: "A known model with one or two things it can't do", c: "When the learning model itself is the product" },
  { dim: "Who runs it", a: "The vendor. You configure, they operate", b: "You or a host. You own the stack and the upgrades", c: "You. Entirely, including everything it turns out you forgot" },
  { dim: "Interoperability", a: "Whatever the vendor certified", b: "LTI 1.3, OneRoster, SCORM - built in", c: "Whatever you build. The specs are free; the work isn't" },
  { dim: "Accessibility gate", a: "The vendor's conformance report, which you inherit", b: "The platform's, plus whatever you add on top", c: "Entirely yours to establish and to evidence" },
  { dim: "Where the cost lives", a: "Subscription, per-seat, and the things it won't do", b: "Hosting, upgrades and the plugins you maintain", c: "The build, and then maintaining a gradebook forever" },
  { dim: "Our take", a: "If your job is to sell and deliver courses, start here", b: "The right answer for most people who ask us for custom", c: "Only when an off-the-shelf LMS actively fights the product" },
];

export function EdtechCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Configure, extend, or build"
            title={<>The comparison <span className="gradient-text">nobody selling you a build will show you</span></>}
            sub="This is the decision, and it is made before a single screen is designed. We build custom platforms, which means the middle column costs us money every time it is the right answer. It usually is."
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
                          i === 2
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
                      <td className="p-4 align-top text-muted-foreground">{r.a}</td>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.b}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            The highlighted column is the one that most often wins, and it is the one that pays us
            least. When the third column genuinely is right, it is{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              custom software, scoped in a paid discovery
            </Link>
            , and we will make that case with you in writing rather than assume it. Which stack it
            lands on is a separate question, answered on{" "}
            <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
              how we choose the stack
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
