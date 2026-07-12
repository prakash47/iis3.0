import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";
import { siteConfig } from "@/config/site";

// The two failure modes buyers already distrust in this category: opaque premium
// agencies that hide what's included, and cheap offshore shops that vanish when
// something breaks. Archetypes are generic and honest; only IIS is named.
const rows = [
  { dim: "What's included", premium: "Behind a sales call", offshore: "Vague - 'we'll keep an eye on it'", iis: "Published and itemized, in the open" },
  { dim: "Pricing", premium: "High, quote-only", offshore: "Cheap, but unclear", iis: "Published care plans, month-to-month" },
  { dim: "Updates", premium: "Yes", offshore: "Automated and forgotten", iis: "Tested in staging, on a fixed schedule" },
  { dim: "You own site & accounts", premium: "Usually", offshore: "Often held hostage", iis: "Always - full access stays yours" },
  { dim: "Who you reach", premium: "An account manager", offshore: "A ticket queue, if that", iis: "The senior person doing the work" },
  { dim: "Any stack", premium: "Sometimes", offshore: "Usually WordPress only", iis: "WordPress, Shopify, Next.js or custom" },
  { dim: "A site they didn't build", premium: "Rarely", offshore: "Risky", iis: "Yes - after a health audit" },
];

export function MaintenanceCompare() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title={<>Care done in the <span className="gradient-text">open</span></>}
            sub="Premium agencies hide what's included behind a sales call. Cheap offshore shops go quiet the moment something breaks. Here's where transparent, senior-run care sits between them."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-4" />
                    <th scope="col" className="p-4 font-semibold text-foreground">Opaque premium agency</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Cheap offshore shop</th>
                    <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400">
                      {siteConfig.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="p-4 align-top text-muted-foreground">{r.premium}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.offshore}</td>
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
            The short version: you can see exactly what you pay for, you own everything, you reach a
            real senior person, and you can leave whenever you like. Care worth staying for.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
