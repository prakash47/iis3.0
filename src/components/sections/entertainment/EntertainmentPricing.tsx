import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { customSoftwareTiers } from "@/content/pricing";

// AN INDUSTRY PAGE MUST NOT RENDER A PRICE TABLE. The webDesignDevTiers includes-bullets carry trap
// strings ("Perfect-Lighthouse performance", "Next.js + CMS", "Headless Shopify or Next.js commerce"),
// and a media build is custom-software-shaped, entering through the Discovery Sprint from
// customSoftwareTiers[0].
//
// THE MAINTENANCE SEAM, RESOLVED HERE (the FIFTH carve after healthcare PHI, fintech financial-data,
// real-estate PII + MLS-licence, and travel passport + booking-funds + GDS). carePlanFrom is
// deliberately NOT imported: pointing a standard care plan - whose Essential tier includes "scheduled
// offsite backups" and "security monitoring" - at a system holding rights-licensed content under a
// redistribution-limited licence, user uploads and the moderation records behind them (where an
// offsite backup could mean possessing user-uploaded illegal content and touching 18 USC 2258A
// duties), or viewing data the VPPA reaches, would put us inside obligations that belong to the client,
// the licensor or the processor. MaintenanceScope carries a matching fifth carve so the pages agree.
// "front-end code" = codebase/build artefacts, not standing access to a deployed system.
export function EntertainmentPricing() {
  const discovery = customSoftwareTiers[0];

  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="A media build is scoped, not quoted from a page"
            sub="No quote wall, and no invented range either. Every agency page in this sector prints a custom-platform price band. None of them can know whether your product needs multi-DRM streaming, a moderation and safe-harbor stack, a paywall, a ticket engine, or just the rights-and-consent machinery around a platform you already run - which is what decides the cost and the risk - and neither can we until we have mapped it."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{discovery.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {discovery.for}. It ends in a written scope, a map of where the rights, the uploads
                  and the viewing data flow and which pieces to buy rather than build, and a fixed price
                  for the build - credited toward that build. If discovery concludes a packaged platform
                  already does most of the job, you keep the scope and the recommendation, and the larger
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
              Where the rest of a media budget goes - and where our care plans stop
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The platform or the machinery is one line. The site that markets the brand is a different
              job with its own published starting prices, on{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                our web design and development service
              </Link>
              . A native mobile experience is a separate build again, on{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                mobile app development, on honest terms
              </Link>{" "}
              - and we have shipped no mobile app for anyone yet. Subscriptions, ticket payments and any
              money movement ride a licensed processor, the same regulated-rails posture as{" "}
              <Link href="/industries/fintech" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                the way we build for fintech
              </Link>
              . The platform itself is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                the paid discovery that prices a media build
              </Link>
              .{" "}
              <span className="font-semibold text-foreground">One boundary matters more here than the price does:</span>{" "}
              our published{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                care plans
              </Link>{" "}
              - the monitoring, the standing access and above all the scheduled offsite backups - are
              built for ordinary websites, and we do not point them at a system that stores rights-licensed
              content under a redistribution-limited licence, that holds user uploads and the moderation
              records behind them, or that carries the viewing data the VPPA reaches. Taking a routine
              backup of any of those would put a copy of licensed content, user-uploaded material or
              viewing records on a system we run - exactly what puts us inside obligations that belong to
              you, your licensor or your processor. So on a media build we care for the parts that carry
              none of it - the marketing site, the front-end code, the pipeline and the dependencies -
              while backups, access and monitoring of anything holding licensed content, user uploads or
              viewing data stay inside your own environment, run by you.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/contact">
            Start with a discovery
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Not sure which pieces to build and which to buy? That is the first thing discovery answers,
            and the answer that most often saves you the most money.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
