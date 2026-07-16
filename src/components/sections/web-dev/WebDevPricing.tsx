import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow, IconCheck } from "@/components/icons";
import { webDesignDevTiers, carePlanFrom } from "@/content/pricing";

const deRisk = [
  { t: "Published fixed prices", d: "No quote wall - you see a starting price here, and a fixed price before we begin." },
  { t: "A paid discovery that credits back", d: "A short, paid discovery locks scope and price, then credits toward your build." },
  { t: "One senior team, direct", d: "You work with the people building your product, never an account manager or handoff." },
];

/**
 * Transparent pricing table. Reads from the shared pricing source so every
 * number stays byte-identical to /pricing and the Offer JSON-LD. Scoped to the
 * web + web-app tiers relevant to this service; mobile and AI link out.
 */
export function WebDevPricing() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Transparent pricing"
            title="How much does a custom website or web app cost?"
            sub="From a fast startup site to enterprise-grade web apps - published starting prices, never a quote wall. Here's where each build begins:"
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th scope="col" className="p-4 font-semibold text-foreground">Package</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">What you get</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Starts at</th>
                    <th scope="col" className="p-4 font-semibold text-foreground">Typical timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {webDesignDevTiers.map((t, i) => (
                    <tr
                      key={t.name}
                      className={i < webDesignDevTiers.length - 1 ? "border-b border-border" : ""}
                    >
                      <th scope="row" className="p-4 align-top">
                        <span className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                          {t.name}
                          {t.best && (
                            <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                              Recommended
                            </span>
                          )}
                        </span>
                        <span className="mt-1 block text-xs font-normal text-muted-foreground">{t.for}</span>
                      </th>
                      <td className="p-4 align-top">
                        <ul className="space-y-1.5 text-muted-foreground">
                          {t.includes.map((inc) => (
                            <li key={inc} className="flex items-start gap-2">
                              <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                              {inc}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-4 align-top">
                        <span className="text-xs text-muted-foreground">from </span>
                        <span className="font-display text-xl font-bold text-foreground">{t.from}</span>
                      </td>
                      <td className="p-4 align-top text-muted-foreground">{t.timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <p className="text-sm text-muted-foreground">
            Building an internal tool, SaaS platform or complex software product?{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See our custom software development
            </Link>
            .
          </p>
        </Reveal>

        {/* De-risk band */}
        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-3">
          {deRisk.map((d) => (
            <div key={d.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{d.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm text-muted-foreground">
            Prices in USD. Ongoing care plans from{" "}
            {carePlanFrom}. See full package details and add-ons on our{" "}
            <Link href="/pricing" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              transparent pricing page
            </Link>
            .
          </p>
        </Reveal>

        {/* Small-budget on-ramp - detached from the tiers, outcome-framed, routes to a
            light enquiry so sub-floor prospects still reach out instead of self-selecting out. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Smaller scope or a lighter build?</span>{" "}
              We scope honestly and start small - tell us what you have in mind and we&apos;ll shape it to your budget.
            </p>
            <Link
              href="/contact"
              className="group mt-3 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400 sm:mt-0"
            >
              Tell us your budget
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
