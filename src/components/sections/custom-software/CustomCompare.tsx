import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// Scoped to the build-vs-buy decision a systems buyer weighs. Archetypes are
// honest; only Intention InfoService is named.
const rows = [
  { dim: "Fits your exact process", offtheshelf: "You bend to fit the tool", freelancer: "Depends on the person", premium: "Fully custom", iis: "Fully custom to your process" },
  { dim: "Integrations & data", offtheshelf: "Limited, per their roadmap", freelancer: "Sometimes", premium: "Yes", iis: "Core - your CRM, ERP, payments, data" },
  { dim: "You own the code, IP & data", offtheshelf: "No - you rent it", freelancer: "Usually", premium: "Yes", iis: "Yes - 100% on final payment" },
  { dim: "Vendor lock-in", offtheshelf: "High - proprietary platform", freelancer: "Key-person risk", premium: "Sometimes their stack", iis: "None - mainstream open stacks" },
  { dim: "Pricing", offtheshelf: "Per-seat, forever", freelancer: "Variable", premium: "High, behind a quote", iis: "Scoped in discovery, then fixed" },
  { dim: "Who builds & supports it", offtheshelf: "A vendor's queue", freelancer: "One person", premium: "Account managers + teams", iis: "A small senior team, direct" },
];

export function CustomCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title={<>Build custom vs the <span className="gradient-text">alternatives</span></>}
            sub="Off-the-shelf tools make you bend to fit them. Freelancers are a gamble on one person. Premium agencies cost a fortune and hide the price. Here's where a scoped, fixed-price custom build sits."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">Off-the-shelf / no-code</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Freelancer / offshore</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Premium agency</th>
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400">
                      {siteConfig.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="p-4 align-top text-muted-foreground">{r.offtheshelf}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.freelancer}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.premium}</td>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">
                        <span className="flex items-start gap-2">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          {r.iis}
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
            The short version: a system built to your exact process, integrated with your tools,
            scoped to a fixed price - and yours to own, with no lock-in.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
