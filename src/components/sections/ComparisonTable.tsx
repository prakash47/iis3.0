import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// A real <table> (AI answer engines lift comparison tables). Archetypes are
// described honestly - no named competitors; only Intention InfoService is named.
const rows = [
  { dim: "Pricing", offshore: "Low, but variable", premium: "$50k+, behind a quote wall", iis: "Published fixed prices" },
  { dim: "Performance proof", offshore: "No real numbers", premium: "Case studies, rarely live", iis: "Live Lighthouse + Core Web Vitals" },
  { dim: "Who you work with", offshore: "Account managers, handoffs", premium: "Senior team, US rates", iis: "A small senior team, direct" },
  { dim: "Timeline", offshore: "Variable", premium: "Months", iis: "Weeks, not months" },
  { dim: "Stack", offshore: "Often WordPress / PHP", premium: "Modern", iis: "Right stack for the job, AEO/GEO-ready" },
];

export function ComparisonTable() {
  return (
    <Section className="bg-muted/60">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title={<>The <span className="gradient-text">unoccupied middle</span></>}
            sub="Cheap shops cut corners. Premium agencies cost a fortune and hide behind quotes. We put US-quality craft, a modern stack and published prices right in between."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">Cheap offshore shops</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Premium US/EU agencies</th>
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400">
                      {siteConfig.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="p-4 align-top text-muted-foreground">{r.offshore}</td>
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
            The short version: the craft and modern stack of a premium agency, at startup-friendly published prices, shipped in weeks - with the numbers to prove it.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
