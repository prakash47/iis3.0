import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { customSoftwareTiers } from "@/content/pricing";

// AN INDUSTRY PAGE MUST NOT RENDER A PRICE TABLE. The webDesignDevTiers includes-bullets carry the
// trap strings ("Perfect-Lighthouse performance", "Next.js + CMS", "Headless Shopify or Next.js
// commerce"), and a fintech build is custom-software-shaped, entering through the Discovery Sprint.
//
// THE MAINTENANCE SEAM, RESOLVED HERE (the GLBA/PCI parallel to the healthcare PHI carve). carePlanFrom
// is deliberately NOT imported: pointing a standard care plan - whose Essential tier includes
// "scheduled offsite backups" and "security monitoring" - at a system carrying account data,
// cardholder data or funds movement would pull us inside the GLBA Safeguards obligations and widen
// the PCI cardholder-data environment we work to stay out of. The maintenance note below fences the
// care plans to non-financial surfaces only. (MaintenanceScope carries a matching financial-data
// carve so the two pages agree.) Note "front-end layer" means the front-end CODE and build
// artefacts, not standing access to a deployed environment that renders or logs account data.
export function FintechPricing() {
  const discovery = customSoftwareTiers[0];

  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="A fintech build is scoped, not quoted from a page"
            sub="No quote wall, and no invented range either. Every agency page in this sector prints a custom-fintech price band. None of them can know whether funds or account data will flow through what we build, or whether a licence sits in the path - which is what decides the cost and the risk - and neither can we until we have mapped it."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{discovery.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {discovery.for}. It ends in a written scope, a money-flow map that shows where funds
                  and account data live and who is the regulated entity, and a fixed price for the
                  build - credited toward that build. If discovery concludes a processor and a sponsor
                  bank already do the regulated part, you keep the scope and the recommendation, and
                  the larger engagement never happens.
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
              Where the rest of a fintech budget goes - and where our care plans stop
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The ledger or the dashboard is one line. The site that markets the product is a
              different job with its own published starting prices, on{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                our web design and development service
              </Link>
              . A native finance experience on phones is a separate build again, on{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                mobile app development, on honest terms
              </Link>{" "}
              - and we have shipped no mobile apps for anyone yet, which that page says plainly. The
              system itself is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                where a fintech build gets scoped and priced
              </Link>
              .{" "}
              <span className="font-semibold text-foreground">One boundary matters more here than on any other page:</span>{" "}
              our published{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                care plans
              </Link>{" "}
              - the monitoring, the standing access and above all the scheduled offsite backups - are
              built for ordinary websites, and we do not point them at a system that stores financial
              account data or cardholder data, or that sits in the path money moves along. Holding a
              copy of, or a key to, a system like that is exactly what would pull us inside the federal
              safeguards obligations and can widen the cardholder-data environment we work to stay out
              of. So on a fintech build we care for the parts that carry none of it - the marketing
              site, the front-end code, the pipeline and the dependencies - while backups, access and
              monitoring of anything that holds account data or moves funds stay inside your own
              environment, run by you or by the bank, processor or host under the agreements we
              don&apos;t sign.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/contact">
            Start with a discovery
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Not sure you should build regulated infrastructure at all? That&apos;s the first thing
            discovery answers, and it is the answer we&apos;re happiest to give.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
