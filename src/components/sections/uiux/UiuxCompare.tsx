import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// Scoped to the choice a design buyer actually weighs. Archetypes are generic and
// honest; only Intention InfoService is named. The "verify" row is the whole wedge.
const rows = [
  { dim: "Proof you can verify", freelancer: "A curated gallery", premium: "Big-brand case studies", template: "None", iis: "The live site you're on + a low-cost audit" },
  { dim: "Pricing", freelancer: "Variable, hourly", premium: "High, behind a quote", template: "Cheap, generic", iis: "Published fixed prices, audit-first" },
  { dim: "You own the files & IP", freelancer: "Usually", premium: "Sometimes", template: "The platform owns it", iis: "Yes - files, tokens & IP" },
  { dim: "Design system & handoff", freelancer: "Rarely", premium: "Yes, at a price", template: "No", iis: "Tokens + dev-ready handoff" },
  { dim: "Who you work with", freelancer: "One person, key-person risk", premium: "Managers + juniors", template: "No one", iis: "Senior designers, direct" },
  { dim: "Design + build together", freelancer: "No", premium: "Sometimes", template: "No", iis: "Design only, or design + build" },
];

export function UiuxCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title={<>Design quality without the <span className="gradient-text">agency games</span></>}
            sub="A freelancer is a gamble on one person. A premium agency hides the price and hands you to juniors. A template gives you what everyone else has. Here's where a small, senior, fixed-price design practice sits."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">Freelancer / marketplace</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Premium design agency</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Template / DIY tool</th>
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-700 dark:text-brand-400">
                      {siteConfig.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="p-4 align-top text-muted-foreground">{r.freelancer}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.premium}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.template}</td>
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
            The short version: design you can inspect before you buy, at a published fixed price,
            with the files and IP yours to keep - and senior people on it start to finish.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
