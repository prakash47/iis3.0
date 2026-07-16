import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// Scoped to the web-build decision a buyer actually weighs. Archetypes are
// described honestly - no named competitors; only Intention InfoService is named.
// Comparison tables are the highest-ROI format for AI-answer citation.
const rows = [
  { dim: "All-in cost", builder: "Cheap monthly, costly to outgrow", freelancer: "Low, but variable", premium: "$50k+, behind a quote", iis: "Published fixed prices" },
  { dim: "Custom to your brand", builder: "Templates, limited", freelancer: "Varies by person", premium: "Fully custom", iis: "Fully custom, conversion-focused" },
  { dim: "Technology choice", builder: "One locked platform", freelancer: "Whatever they know", premium: "Their house stack", iis: "Right stack for the job - WordPress to Next.js" },
  { dim: "Performance proof", builder: "Often slow and bloated", freelancer: "Rarely measured", premium: "Case studies, rarely live", iis: "Live Lighthouse + Core Web Vitals" },
  { dim: "Who builds & supports it", builder: "You do", freelancer: "One person, key-person risk", premium: "Senior team, US rates", iis: "A small senior team, direct" },
  { dim: "Typical timeline", builder: "Your spare hours", freelancer: "Variable", premium: "Months", iis: "2-6 weeks" },
  { dim: "You own the code", builder: "Locked to the platform", freelancer: "Usually", premium: "Yes", iis: "Yes - code and content" },
];

export function WebDevCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title={<>A custom build vs the <span className="gradient-text">alternatives</span></>}
            sub="Site builders are cheap but you outgrow them. Freelancers are a gamble on one person. Premium agencies cost a fortune and hide the price. Here's where a custom fixed-price build sits."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">Website builder</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Freelancer / offshore</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Premium agency</th>
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-700 dark:text-brand-400">
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
            The short version: a fully custom, high-performance build with the price published up
            front and the numbers to prove it - shipped in weeks, and yours to keep.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
