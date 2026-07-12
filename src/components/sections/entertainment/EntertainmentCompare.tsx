import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE DECISION THE BUYER IS ACTUALLY MAKING, and nobody in this category publishes it: configure an
// off-the-shelf platform, buy the packaged core and have us build only the rights/shelter/consent
// machinery, or build the whole stack custom. Zero cannibalization - no rival product is a column
// HEADER (a named streaming/CMS/ticketing SaaS in an indexed <th> would imply a shipped integration
// or partnership), and this axis competes with none of the money pages or the five sibling industry
// pages.
//
// The protagonist is deliberately NOT the revenue-max column. Ordered least -> [middle=highlighted]
// -> maximal, exactly like the five siblings (highlight index 2 = the MIDDLE real option). The
// highlighted middle - buy the package, pay us only for the machinery - is the option we are paid
// least for relative to building the whole platform, so the table agrees with the anti-recommendation.
// Mirrors Health/Fintech/RealEstate/TravelCompare (index 2). NO NUMBERS. No brand/vendor in a <th>.
const cols = ["", "Configure an off-the-shelf media, CMS or ticketing platform", "A packaged core, and we build only the rights, shelter and consent machinery", "Everything built custom, end to end"];
const rows = [
  { dim: "Best when", a: "A packaged product already meets your needs across the stack and you just set it up", b: "A package does the commodity job well, and what you actually need built is the rights, shelter and consent machinery no package ships", c: "No packaged product can meet your requirements anywhere, and you have the budget to own all of it" },
  { dim: "Who builds the player, CMS or ticket engine", a: "The platform vendor", b: "The platform vendor - we do not rebuild it", c: "We do, end to end" },
  { dim: "Who builds the rights, shelter and consent machinery", a: "You bolt on whatever the platform allows", b: "We do - this is the irreplaceable part", c: "We do" },
  { dim: "What you spend with us", a: "Least - configuration, if anything", b: "The machinery only, not the whole platform", c: "Most" },
  { dim: "Time to a working launch", a: "Shortest", b: "Short - a package plus the machinery around it", c: "Longest" },
  { dim: "Licensee, host of record, royalty payer", a: "Yours", b: "Yours", c: "Yours" },
  { dim: "Lock-in and portability", a: "The platform's - you live inside it", b: "The platform's, plus fully portable custom machinery around it", c: "None - you own the whole stack" },
  { dim: "Our take", a: "If a package does most of it, start here and keep your money", b: "The right answer for most people who ask us for a media build", c: "Right when the platform itself is your differentiator - rarely the whole thing" },
];

export function EntertainmentCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Configure it, build the machinery, or build it all"
            title={<>A media build has three honest shapes. <span className="gradient-text">Most vendors sell you the biggest one.</span></>}
            sub="This is the decision, and it is made before a single screen is designed. We build the middle column, which means we are paid the least every time the honest answer is to buy the packaged platform and pay us only for the rights-and-shelter machinery no package ships. That is usually the answer."
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
            The highlighted column is the one that most often wins, and it is the one where our
            footprint and our fee are smallest relative to building the whole platform. The commodity
            parts - the player, the CMS, the ticket engine - are usually better bought than rebuilt;
            the rights, shelter and consent machinery is the part worth building, and it is{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              scoped as custom software
            </Link>
            . Which stack any of it lands on is a separate question, answered on{" "}
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
