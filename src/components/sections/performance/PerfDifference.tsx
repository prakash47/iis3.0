import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// The signature section. The paid-media industry has documented trust failures;
// naming each one and stating our opposite practice is the whole differentiation
// engine - and it needs zero fabricated numbers. Every "us" claim is a structural
// choice we make, verifiable on day one, not a result we assert.
const rows = [
  { dim: "Your ad spend", them: "Marked up 15-50%, or buried in a blended fee", us: "Zero markup - you pay Google and Meta directly" },
  { dim: "Your ad accounts", them: "Built in the agency's account - you're locked out if you leave", us: "Built in your accounts - you own everything, always" },
  { dim: "The fee", them: "10-20% of your ad spend - so they profit when you overspend", us: "One flat monthly fee - so we're paid to spend well, not more" },
  { dim: "Reporting", them: "Impressions, clicks and CTR - the numbers that always look good", us: "Revenue, leads and cost-per-result - what your CFO cares about" },
  { dim: "Contracts", them: "6-12 month lock-ins with termination fees", us: "Month-to-month - we earn it every month" },
  { dim: "Who runs it", them: "A junior behind an account manager", us: "A senior person, direct - the one who plans your spend" },
  { dim: "Guarantees", them: "Guaranteed ROAS (a red flag)", us: "No guarantees - honest benchmarks and a real plan" },
];

export function PerfDifference() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="The honest difference"
            title={<>Paid media has an honesty problem. <span className="gradient-text">Here&apos;s how we&apos;re different.</span></>}
            sub="Most of what buyers hate about agencies is structural - markups, locked accounts, vanity reports, a fee that grows when you overspend. We simply refuse to play those games. That refusal is the whole pitch."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">How most agencies do it</th>
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-700 dark:text-brand-400">
                      How we do it
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="p-4 align-top text-muted-foreground">{r.them}</td>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">
                        <span className="flex items-start gap-2">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {r.us}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The short version: you own the accounts, you pay the platforms directly, we take a flat
            fee and report revenue - and you can leave any month. That&apos;s the whole model.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
