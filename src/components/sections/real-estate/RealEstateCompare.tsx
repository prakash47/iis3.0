import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE DECISION THE BUYER IS ACTUALLY MAKING, and nobody in this category publishes it: use an
// off-the-shelf IDX portal, build a custom front end on your MLS feed with a validated provider for
// the decisioning, or build the whole stack including the screening and valuation of record. Zero
// cannibalization - no rival product is a column HEADER (a specific MLS, Zillow or CoStar in an
// indexed <th> would imply an integration or partnership we have never shipped), and this axis
// competes with none of the eight money pages or the three sibling industry pages.
//
// The protagonist is deliberately NOT the revenue-max column. On every technology spoke the
// highlighted column is our product; here the honest answer is the MIDDLE column - integrate with a
// validated provider for the decisioning - and the page's thesis is that "build the screening and
// valuation of record yourself" is the SafeRent/Zillow business we refuse. Highlighting the middle
// makes the table agree with the anti-recommendation. Mirrors HealthCompare/FintechCompare (index 2).
//
// NO NUMBERS. Marque names (a specific MLS, Zillow) appear only in body cells, never a <th>.
const cols = ["", "Use an off-the-shelf IDX portal", "Custom front end on your MLS feed + a validated provider for the decisioning", "Build the whole stack, screening and valuation of record included"];
const rows = [
  { dim: "What it is", a: "A hosted listing portal or agent-site builder, configured", b: "A bespoke portal, search and CRM on your MLS feed, with screening and valuation from a validated provider", c: "Everything above plus your own automated screening score and valuation model" },
  { dim: "Best for", a: "A standard agent or brokerage site on a known model", b: "A product whose portal, search, CRM and lead flow are the differentiator", c: "A company whose core product is the decisioning itself - rarely the right call" },
  { dim: "Where the decisioning lives", a: "Whatever the platform bundles", b: "With a validated third-party provider, and a human on the consequential call", c: "In a model you build, own and must defend" },
  { dim: "Who carries the fair-housing & model risk", a: "Shared with the platform", b: "The provider validates the model; you own the housing decision; we design the surfaces against disparate impact", c: "You, at the highest bar - the SafeRent and Zillow exposure in one place" },
  { dim: "Where the funds sit", a: "With the platform's processor", b: "With a licensed processor or broker trust account you rent", c: "With whatever you stand up - a licensing question before a build" },
  { dim: "Interoperability", a: "Whatever the platform built in", b: "RESO Web API, Data Dictionary, IDX and VOW - the published standards", c: "Whatever you build to, plus everything the regulated roles require" },
  { dim: "Our take", a: "If a portal already does most of it, start here and keep your money", b: "The right answer for most people who ask us for a real-estate build", c: "The two products we refuse to build, and where the liability is made" },
];

export function RealEstateCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Buy the portal, integrate the decisioning, or become it"
            title={<>The real-estate build decision <span className="gradient-text">nobody quotes you honestly</span></>}
            sub="This is the decision, and it is made before a single screen is designed. We build the middle column, which means it costs us the largest engagement every time the honest answer is to integrate a validated provider rather than become the screening engine. It usually is."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left text-sm">
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
            The highlighted column is the one that most often wins, and it is the one that costs us
            the smaller build. The third column is the automated screening and valuation of record we
            refuse to build - and when a product genuinely needs it, that is a validated provider and
            a fair-housing expert, with the software around it{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              scoped as custom software
            </Link>
            . Which stack it lands on is a separate question, answered on{" "}
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
