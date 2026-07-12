import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// Scoped to the app-build decision a buyer actually weighs. Archetypes described
// honestly - no named competitors; only Intention InfoService is named.
const rows = [
  { dim: "All-in cost", builder: "Cheap monthly, you outgrow it", freelancer: "Low, but variable", premium: "Very high, behind a quote", iis: "Published fixed prices" },
  { dim: "Native + cross-platform", builder: "Templated, limited", freelancer: "Whatever they know", premium: "Both", iis: "Both - the right one for your product" },
  { dim: "Native-vs-cross-platform advice", builder: "None", freelancer: "Rarely", premium: "Sometimes", iis: "In writing, in discovery" },
  { dim: "App Store & Play submission", builder: "Your problem", freelancer: "Sometimes", premium: "Yes", iis: "We handle it for you" },
  { dim: "Who builds & supports it", builder: "You do", freelancer: "One person, key-person risk", premium: "Account managers + teams", iis: "A small senior team, direct" },
  { dim: "Typical timeline", builder: "Your spare hours", freelancer: "Variable", premium: "Months", iis: "Weeks" },
  { dim: "You own the code & IP", builder: "Locked to the platform", freelancer: "Usually", premium: "Yes", iis: "Yes - 100% on final payment" },
];

export function MobileCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title={<>An agency build vs the <span className="gradient-text">alternatives</span></>}
            sub="No-code builders are cheap but you outgrow them. Freelancers are a gamble on one person. Premium agencies cost a fortune and hide the price. Here's where a fixed-price, senior-team app build sits."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">No-code app builder</th>
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
                      <td className="p-4 align-top text-muted-foreground">{r.builder}</td>
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
            The short version: a real iOS and Android app, the native-or-cross-platform call made
            honestly, the price published up front, and the code yours to keep.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
