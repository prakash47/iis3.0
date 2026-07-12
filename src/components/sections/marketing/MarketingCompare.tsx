import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// Scoped to the organic-growth decision a buyer weighs. Archetypes are honest;
// only Intention InfoService is named. "Cheap SEO" here = the guaranteed-ranking
// vendor tier - named honestly as the red-flag archetype, not a real competitor.
const rows = [
  { dim: "Technical foundations", diy: "Guesswork", freelancer: "Varies by person", agency: "Recommends, can't change the site", iis: "We build AND fix the site" },
  { dim: "AI-search (AEO/GEO)", diy: "None", freelancer: "Rarely", agency: "Sometimes", iis: "Core - schema, llms.txt, answer-first" },
  { dim: "Reporting", diy: "n/a", freelancer: "Spotty", agency: "Often vanity metrics", iis: "Live, monthly, no vanity metrics" },
  { dim: "Ranking guarantees", diy: "n/a", freelancer: "Sometimes (red flag)", agency: "Sometimes (red flag)", iis: "Never - quality & transparency instead" },
  { dim: "Contract", diy: "n/a", freelancer: "Ad hoc", agency: "Often annual lock-in", iis: "Month-to-month" },
  { dim: "Who does the work", diy: "You", freelancer: "One person", agency: "Account managers + juniors", iis: "A small senior team, direct" },
];

export function MarketingCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title={<>An honest organic partner vs the <span className="gradient-text">alternatives</span></>}
            sub="Doing it yourself is a time sink. Freelancers are a gamble on one person. Many agencies bury vanity metrics and lock you into a year. Here's where a transparent, build-and-market team sits."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">DIY</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Freelancer</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Marketing-only agency</th>
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400">
                      {siteConfig.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="p-4 align-top text-muted-foreground">{r.diy}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.freelancer}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.agency}</td>
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
            The short version: organic growth built on foundations we control, optimized for search
            AND AI, reported honestly - and never a ranking we promise but can&apos;t deliver.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
