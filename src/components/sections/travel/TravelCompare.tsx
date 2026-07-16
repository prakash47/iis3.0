import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE DECISION THE BUYER IS ACTUALLY MAKING, and nobody in this category publishes it: configure an
// off-the-shelf engine, build a custom engine and portal on your brand with suppliers integrated and
// funds on a licensed processor, or build the whole stack and become the seller or organiser of
// record. Zero cannibalization - no rival product is a column HEADER (Amadeus/Sabre/Booking.com in
// an indexed <th> would imply a shipped integration or partnership), and this axis competes with
// none of the money pages or the four sibling industry pages.
//
// The protagonist is deliberately NOT the revenue-max column. The honest answer is the MIDDLE column
// - the front-end-and-integrations build - and the page's thesis is that "become the seller or
// organiser of record" is the regulated business we refuse. Highlighting the middle makes the table
// agree with the anti-recommendation. Mirrors HealthCompare/FintechCompare/RealEstateCompare (index 2).
//
// NO NUMBERS. Marque names (a GDS, an Online Travel Agency) appear only in body cells, never a <th>.
const cols = ["", "Configure an off-the-shelf booking engine or channel connection", "Custom booking engine and traveller portal on your brand, suppliers integrated, funds on a licensed processor", "Build the whole stack and become the seller or organiser of record"];
const rows = [
  { dim: "What it is", a: "A hosted engine or a channel connection, set up and configured", b: "A bespoke engine, search, portal and supplier integrations on your brand", c: "All of that plus becoming the accredited seller or package organiser yourself" },
  { dim: "Best for", a: "A standard agency or property site on a known model", b: "A product whose engine, search, integrations and portal are the differentiator", c: "A business whose core product is being the seller of record - rarely the right call" },
  { dim: "Who is the seller / organiser of record", a: "The platform", b: "You, as today - a reseller on your suppliers' inventory, not the organiser", c: "You, taking on the accreditation, the bond and the whole-trip liability" },
  { dim: "Where the traveller's money sits", a: "With the platform's processor", b: "With a licensed processor you rent; we hold none of it", c: "With whatever you stand up, under a trust-account duty" },
  { dim: "Who carries the insolvency / bonding duty", a: "The platform", b: "The suppliers and, if you bundle, a question for your counsel we surface early", c: "You, at the highest bar - the Thomas Cook exposure in one place" },
  { dim: "Interoperability", a: "Whatever the platform built in", b: "NDC and OpenTravel, with GDS and property systems under your agreements", c: "Whatever you build to, plus everything the regulated roles require" },
  { dim: "Our take", a: "If a hosted engine does most of it, start here and keep your money", b: "The right answer for most people who ask us for a travel build", c: "The seller-of-record business we don't build; when it's right, that's an accreditation and counsel" },
];

export function TravelCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Configure it, build the engine, or become the seller"
            title={<>The travel build has three honest shapes. <span className="gradient-text">Most agencies sell you the biggest one.</span></>}
            sub="This is the decision, and it is made before a single screen is designed. We build the middle column, which means it costs us the largest engagement every time the honest answer is to stay off the seller-of-record role. It usually is."
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
            the smaller build. The third column is the seller-or-organiser-of-record business we
            don&apos;t build - and when a product genuinely needs it, that is an accreditation, a bond
            and counsel, with the software around it{" "}
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
