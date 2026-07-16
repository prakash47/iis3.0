import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow, IconCheck } from "@/components/icons";
import { mobileAppDevTiers, carePlanFrom } from "@/content/pricing";

const deRisk = [
  { t: "Published fixed prices", d: "No quote wall - you see a starting price here, and a fixed price before we begin." },
  { t: "Milestone-based payments", d: "Payments are tied to delivered, approved work - never 100% upfront." },
  { t: "You own 100% of the code", d: "Full code and IP ownership transfers to you on final payment. No lock-in." },
];

/**
 * Mobile pricing. Reads the shared pricing source (Starter App -> Mobile App
 * Build) so numbers stay byte-identical to /pricing and the Offer schema. The
 * single high tier is anchored high in the heading; a small-budget on-ramp
 * catches sub-floor and MVP prospects.
 */
export function MobilePricing() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Transparent pricing"
            title="How much does a mobile app cost?"
            sub="From a simple single-purpose app to a full iOS and Android product - published starting prices, never a quote wall. Here's where each build begins:"
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
                  {mobileAppDevTiers.map((t, i) => (
                    <tr key={t.name} className={i < mobileAppDevTiers.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 align-top">
                        <span className="font-display text-base font-semibold text-foreground">{t.name}</span>
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

        {/* small-budget / MVP on-ramp */}
        <Reveal className="mt-4">
          <div className="rounded-2xl border border-border bg-muted/50 p-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Somewhere in between, or just an MVP?</span>{" "}
              Tell us what you have in mind and your budget - we&apos;ll scope an honest fixed price for the app you actually need.
            </p>
            <Link
              href="/contact"
              className="group mt-3 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400 sm:mt-0"
            >
              Get a fixed-price estimate
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

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
            Need AI features in your app?{" "}
            <Link href="/services/ai-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See how we scope AI development
            </Link>
            . Ongoing care plans from {carePlanFrom}. Prices in USD. See full details on our{" "}
            <Link href="/pricing" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              transparent pricing page
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
