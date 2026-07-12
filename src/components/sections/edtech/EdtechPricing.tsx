import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { customSoftwareTiers, carePlanFrom } from "@/content/pricing";

// AN INDUSTRY PAGE MUST NOT RENDER A PRICE TABLE. Three reasons, all binding:
//  1. THE BULLET TRAP. webDesignDevTiers includes-bullets carry "Perfect-Lighthouse performance",
//     "Next.js + CMS" and "Headless Shopify or Next.js commerce". The last is actively absurd on
//     an education page, and the first is a fabricated Core Web Vitals claim about a build that
//     does not exist.
//  2. An industry page funnels UP to the money pages. It must not duplicate their pricing or
//     compete for their head terms.
//  3. A learning platform is custom-software-shaped, which honestly enters through a Discovery
//     Sprint with NO fixed tier. A fixed table would fabricate a certainty we do not have - and
//     the "custom LMS costs $50k-$200k" ranges the agencies publish are marketing figures.
//
// The standing rule is: suppress fabrications, never inconvenient truths. So we suppress the
// tiers and we publish the one number that is real - the Discovery Sprint, read from the single
// source of truth so it stays byte-identical with /pricing and the custom-software money page.
export function EdtechPricing() {
  const discovery = customSoftwareTiers[0];

  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="An education platform is scoped, not quoted from a page"
            sub="No quote wall, and no invented range either. Every agency page in this sector publishes a custom-LMS price band. None of them can know what your term rollover, your rostering feed or your accessibility gate will cost, and neither can we until we have looked."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{discovery.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {discovery.for}. It ends in a written scope, an integration and risk audit, and a
                  fixed price for the build - and it is credited toward that build. If discovery
                  concludes you should extend an existing platform rather than build one, you keep
                  the scope and the recommendation, and the larger engagement never happens.
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-xs text-muted-foreground">from </span>
                <span className="font-display text-4xl font-bold text-foreground">{discovery.from}</span>
                <p className="mt-1 text-xs text-muted-foreground">{discovery.timeline}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Where the rest of an education budget actually goes
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The platform is one line. The site that markets the programme is a different job with
              its own published starting prices, on{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                our web design and development service
              </Link>
              . A learner experience on phones is a separate build again, priced on{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                building a mobile learning app
              </Link>{" "}
              - and we have shipped no mobile apps for anyone yet, which that page says plainly. The
              platform itself is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                custom software, scoped in a paid discovery
              </Link>
              . After launch, a system that carries student records is never finished, so ongoing
              care runs on published monthly plans from {carePlanFrom} rather than a mystery
              retainer. Our website and app starting prices are all published on{" "}
              <Link href="/pricing" className="font-medium text-brand-500 hover:text-brand-600">
                one pricing page
              </Link>
              , and every number on this site reads from a single source, so it is the same figure
              wherever you find it. The Discovery Sprint above is quoted from that same source.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/contact">
            Start with a discovery
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Not sure you should build at all? That&apos;s the first thing discovery answers, and it
            is the answer we&apos;re happiest to give.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
