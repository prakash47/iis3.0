import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE DECISION THE BUYER IS ACTUALLY MAKING, and nobody in this category publishes it: configure
// the portal your record system already ships, add an app or integrate onto it, or build a bespoke
// front end. Zero cannibalization - we have no Epic/Oracle Health/athenahealth page, and no product
// is named in a column header (naming a specific EHR in an indexed header would imply an integration
// or partnership we have never shipped). This axis competes with none of the eight money pages.
//
// The protagonist is deliberately NOT the column we sell. On every technology spoke the highlighted
// column is our product; here the honest answer is usually the MIDDLE column - add an app or
// integrate through SMART on FHIR onto the system you already run - and the page's whole thesis is
// that "build a bespoke front end" is the last resort. Highlighting the middle column is the table
// agreeing with the anti-recommendation instead of undercutting it, which is the only way it can be
// honest. This mirrors the edtech Compare (highlight index 2), the reusable industry pattern.
//
// NO NUMBERS. No cost ranges, no timelines that would fabricate a certainty we do not have.
const cols = ["", "Use your record system's own portal", "Add an app or integrate", "Build a bespoke front end"];
const rows = [
  { dim: "What it is", a: "The patient portal your EHR already ships, configured", b: "A SMART on FHIR app or integration on top of the system of record", c: "A custom front end built from the workflow up, on your own stack" },
  { dim: "Best for", a: "Standard scheduling, messaging, results and bill-pay", b: "A specific gap the built-in portal can't close, on the data it already holds", c: "When the experience itself is the product and the record system fights it" },
  { dim: "Where the PHI lives", a: "In the EHR. You never took on a new store", b: "In the EHR. The app reads and writes it, holds none at rest", c: "In your HIPAA-eligible infrastructure, reached at request time" },
  { dim: "Who becomes a business associate", a: "The EHR vendor, under the agreement you already signed", b: "The EHR vendor still holds the data; scope the app so no one new does", c: "Whoever ends up holding or hosting the data - a line to draw deliberately" },
  { dim: "Interoperability", a: "Whatever the vendor built in", b: "FHIR, US Core, SMART on FHIR - the published standards", c: "Whatever you build to. The specs are free; the work is not" },
  { dim: "Accessibility gate", a: "The vendor's conformance report, which you inherit", b: "The vendor's, plus whatever your app layer adds on top", c: "Entirely yours to establish and to evidence under Section 1557" },
  { dim: "Our take", a: "If the built-in portal does most of it, start here and keep your money", b: "The right answer for most people who ask us for a custom portal", c: "Only when the built-in portal and an app on top both genuinely fall short" },
];

export function HealthCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Configure, integrate, or build"
            title={<>The comparison <span className="gradient-text">nobody selling you a build will show you</span></>}
            sub="This is the decision, and it is made before a single screen is designed. We build custom front ends, which means the middle column costs us money every time it is the right answer. It usually is."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {cols.map((c, i) => (
                      <th
                        key={c || "dim"}
                        scope="col"
                        className={
                          i === 2
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
            <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              a paid discovery before any build quote
            </Link>
            , and we will make that case with you in writing rather than assume it. Which stack it
            lands on is a separate question, answered on{" "}
            <Link href="/technologies" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              how we choose the stack
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
