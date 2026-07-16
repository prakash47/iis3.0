import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { customSoftwareTiers } from "@/content/pricing";

// AN INDUSTRY PAGE MUST NOT RENDER A PRICE TABLE. Three reasons, all binding:
//  1. THE BULLET TRAP. webDesignDevTiers includes-bullets carry "Perfect-Lighthouse performance",
//     "Next.js + CMS" and "Headless Shopify or Next.js commerce" - fabricated or absurd here.
//  2. An industry page funnels UP to the money pages. It must not duplicate their pricing.
//  3. A health build is custom-software-shaped, entering through a Discovery Sprint with no fixed
//     tier - and the "custom healthcare software costs $X" bands the agencies publish are marketing.
//
// THE MAINTENANCE SEAM, RESOLVED HERE. The edtech page's equivalent section (EdtechPricing) attaches
// carePlanFrom ("$100/month") to "a system that carries student records". Ported naively to health,
// that would point the standard care plan - whose Essential tier literally includes "scheduled
// offsite backups + restore" and "security monitoring" - at a PHI-bearing system, which would make
// Intention InfoService a business associate creating/maintaining/transmitting PHI and DETONATE the
// PHI-free thesis. So carePlanFrom is deliberately NOT imported here, and the maintenance line below
// fences the care plans to the non-PHI surfaces only. (The website-maintenance-services page carries
// a matching PHI carve-out so the two pages agree.) The standing rule: suppress fabrications, never
// inconvenient truths - here the inconvenient truth (care changes shape on a PHI system) is stated.
export function HealthPricing() {
  const discovery = customSoftwareTiers[0];

  return (
    <Section id="pricing">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="A health build is scoped, not quoted from a page"
            sub="No quote wall, and no invented range either. Every agency page in this sector publishes a custom-healthcare-software price band. None of them can know whether your patient data will leave the record system at all, which is the question that decides the cost - and neither can we until we have mapped it."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1] flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">{discovery.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {discovery.for}. It ends in a written scope, a data-flow map that shows where
                  patient data lives and who becomes a business associate, and a fixed price for the
                  build - credited toward that build. If discovery concludes your record system
                  already does this, you keep the scope and the recommendation, and the larger
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
              Where the rest of a healthcare budget goes - and where our care plans stop
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The portal or integration is one line. The site that markets the practice is a
              different job with its own published starting prices, on{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                our web design and development service
              </Link>
              . A native patient experience on phones is a separate build again, on{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                mobile app development, on honest terms
              </Link>{" "}
              - and we have shipped no mobile apps for anyone yet, which that page says plainly. The
              system itself is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                a paid discovery before any build quote
              </Link>
              .{" "}
              <span className="font-semibold text-foreground">One boundary matters more here than on any other page:</span>{" "}
              our published{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                care plans
              </Link>{" "}
              - the monitoring, the standing access and above all the scheduled offsite backups - are
              built for ordinary websites, and we do not point them at a system that holds patient
              data. Holding a copy of, or a key to, a database of patient records is exactly what
              would make us a business associate under HIPAA and liable under HITECH, which is the
              boundary this whole page exists to stay outside. So on a health build we care for the
              parts that hold no PHI - the marketing site, the front-end layer, the pipeline and the
              dependencies - while backups, access and monitoring of anything holding patient data
              stay inside your HIPAA-eligible infrastructure, run by you or by a host that will sign
              the agreement we won&apos;t.
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
