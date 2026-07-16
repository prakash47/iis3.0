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
// commerce"), and a real-estate build is custom-software-shaped, entering through the Discovery
// Sprint from customSoftwareTiers[0].
//
// THE MAINTENANCE SEAM, RESOLVED HERE (the third carve after healthcare's PHI and fintech's financial
// data). carePlanFrom is deliberately NOT imported: pointing a standard care plan - whose Essential
// tier includes "scheduled offsite backups" and "security monitoring" - at a system holding tenant/
// applicant PII, sitting in a rent/escrow money path, or carrying MLS listing data under a
// redistribution-limited licence, would put us inside obligations that belong to you, your broker or
// your MLS (a routine backup can quietly breach an MLS licence). The note below fences the care plans
// to non-sensitive surfaces. MaintenanceScope carries a matching real-estate carve so the pages agree.
// "front-end code" means the codebase and build artefacts, not standing access to a deployed system.
export function RealEstatePricing() {
  const discovery = customSoftwareTiers[0];

  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="A real-estate build is scoped, not quoted from a page"
            sub="No quote wall, and no invented range either. Every agency page in this sector prints a custom-real-estate price band. None of them can know whether your product needs MLS access, a rent path, a screening surface, or fair-housing testing across a search and a ranking - which is what decides the cost and the risk - and neither can we until we have mapped it."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{discovery.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {discovery.for}. It ends in a written scope, a map of where applicant data and money
                  flow and which features touch fair-housing risk, and a fixed price for the build -
                  credited toward that build. If discovery concludes an off-the-shelf IDX portal
                  already does the job, you keep the scope and the recommendation, and the larger
                  engagement never happens.
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
              Where the rest of a real-estate budget goes - and where our care plans stop
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The portal or the CRM is one line. The site that markets the brokerage is a different
              job with its own published starting prices, on{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                our web design and development service
              </Link>
              . A native property experience on phones is a separate build again, on{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                mobile app development, on honest terms
              </Link>{" "}
              - and we have shipped no mobile apps for anyone yet. The system itself is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                the paid discovery that prices a property build
              </Link>
              .{" "}
              <span className="font-semibold text-foreground">One boundary matters more here than the price does:</span>{" "}
              our published{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                care plans
              </Link>{" "}
              - the monitoring, the standing access and above all the scheduled offsite backups - are
              built for ordinary websites, and we do not point them at a system that stores tenant or
              applicant personal information, that sits in the path rent, earnest money or closing
              funds move along, or that holds MLS listing data under a licence with display and
              redistribution limits. Holding a copy of, or a standing key to, a system like that is
              exactly what would put us inside obligations that belong to you, your broker or your
              MLS. So on a real-estate build we care for the parts that carry none of it - the
              marketing site, the front-end code, the pipeline and the dependencies - while backups,
              access and monitoring of anything holding applicant data, moving funds, or storing
              licensed MLS data stay inside your own environment, run by you or by the broker,
              processor, host or MLS under the agreements we don&apos;t sign.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/contact">
            Start with a discovery
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Not sure you should build the decisioning at all? That&apos;s the first thing discovery
            answers, and it is the answer we&apos;re happiest to give.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
