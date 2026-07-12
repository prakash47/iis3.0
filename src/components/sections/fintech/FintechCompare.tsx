import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE DECISION THE BUYER IS ACTUALLY MAKING, and nobody in this category publishes it: use a
// provider's own off-the-shelf tools, integrate onto a processor plus a BaaS or sponsor bank, or
// build the regulated infrastructure yourself. Zero cannibalization - no rival product is a column
// HEADER (naming Stripe/Plaid in an indexed <th> would imply an integration or partnership we have
// never shipped and collide with the partner-trap rule), and this axis competes with none of the
// eight money pages or the two sibling industry pages.
//
// The protagonist is deliberately NOT the column we sell. On every technology spoke the highlighted
// column is our product; here the honest answer is usually the MIDDLE column - integrate onto a
// processor plus a BaaS or sponsor bank - and the page's whole thesis is that "build the regulated
// infrastructure yourself" is the last resort and the Synapse trap. Highlighting the middle column
// is the table agreeing with the anti-recommendation. Mirrors HealthCompare/EdtechCompare (index 2).
//
// NO NUMBERS. No cost ranges, no timelines that would fabricate a certainty we do not have. Marque
// names (Stripe/Plaid/sponsor bank) appear only in body cells, where founder decision #1 sanctions
// them as the ecosystem we build atop.
const cols = ["", "Use a provider's own tools", "Integrate on a processor + BaaS / sponsor bank", "Build the regulated infrastructure yourself"];
const rows = [
  { dim: "What it is", a: "The dashboards and no-code tools a processor or BaaS provider ships, configured", b: "A custom interface, ledger and reconciliation on top of a processor and a sponsor bank", c: "Becoming the money mover: your own licence, custody and core ledger of record" },
  { dim: "Best for", a: "Standard payments or payouts on a known model, little custom logic", b: "A product with its own ledger, dashboards or flows the off-the-shelf tools fight", c: "When the regulated money movement itself is the product and no provider will carry it" },
  { dim: "Where the money lives", a: "With the provider, entirely", b: "With the bank or processor; your ledger is a reconciled claim on it", c: "With you - which is the licence, the custody and the liability you just took on" },
  { dim: "Who is the regulated entity", a: "The provider", b: "The sponsor bank or the licensed transmitter you rent", c: "You, once you hold the licence - a project before it is software" },
  { dim: "Interoperability", a: "Whatever the provider built in", b: "Card networks, ACH, ISO 20022, open banking - the published rails", c: "Whatever you build to, plus the rails a regulated entity must connect to" },
  { dim: "Security & audit", a: "The provider's, which you inherit", b: "Yours on your surfaces, theirs on the funds and card data", c: "Entirely yours to establish and to evidence, at the highest bar" },
  { dim: "Our take", a: "If the built-in tools do most of it, start here and keep your money", b: "The right answer for most people who ask us for a fintech build", c: "Rarely right, and a licensing question for your counsel before a build for us" },
];

export function FintechCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Buy, integrate, or build"
            title={<>The comparison <span className="gradient-text">nobody selling you a build will show you</span></>}
            sub="This is the decision, and it is made before a single screen is designed. We build the middle column, which means it costs us the largest engagement every time the honest answer is to integrate rather than to become the bank. It usually is."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
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
            The highlighted column is the one that most often wins, and it is the one that costs us
            the smaller build. When the third column genuinely is right, the first project is a
            licensing and sponsor-bank question for your counsel - and the software that follows is{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              where a fintech build gets scoped and priced
            </Link>
            . Which stack it lands on is a separate question, answered on{" "}
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
