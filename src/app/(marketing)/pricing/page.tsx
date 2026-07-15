import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import {
  webDesignDevTiers,
  mobileAppDevTiers,
  customSoftwareTiers,
  digitalMarketingTiers,
  performanceMarketingTiers,
  uiUxDesignTiers,
  websiteMaintenanceTiers,
  websiteAuditTier,
  type PricingTier,
} from "@/content/pricing";
import {
  IconArrow,
  IconTag,
  IconLock,
  IconRefresh,
  IconShield,
  IconCheck,
  IconSearch,
  IconSpark,
  IconGauge,
} from "@/components/icons";

export const metadata: Metadata = pageMetadata("/pricing");

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

// The complete pricing hub renders from the SERVICE-SCOPED selectors in pricing.ts, never the
// `productTiers` array (which mixes the web-app MVP Sprint with the two mobile tiers). Prices are
// printed byte-for-byte from the source of truth - the money pages own the Service/Offer schema,
// so this hub carries NO Offer node, only visible cards + FAQ answer text.
const websiteBuildTiers = webDesignDevTiers.filter((t) => t.fromValue < 12000);
const webAppTier = webDesignDevTiers.filter((t) => t.fromValue >= 12000); // MVP Sprint
const appTiers = [...webAppTier, ...mobileAppDevTiers]; // MVP Sprint, Starter App, Mobile App Build

const jumpLinks = [
  { id: "websites", label: "Websites" },
  { id: "apps", label: "Apps" },
  { id: "care-plans", label: "Care plans" },
  { id: "design", label: "Design & branding" },
  { id: "marketing", label: "Marketing" },
  { id: "software-ai", label: "Custom software & AI" },
  { id: "faq", label: "FAQ" },
];

const heroChips = [
  { icon: <IconTag className="h-4 w-4" />, label: "Every price published, in USD" },
  { icon: <IconRefresh className="h-4 w-4" />, label: "Paid discovery credits back" },
  { icon: <IconLock className="h-4 w-4" />, label: "You own the code, design & IP" },
  { icon: <IconShield className="h-4 w-4" />, label: "Month-to-month care, no lock-in" },
];

const howItWorks = [
  {
    icon: <IconTag className="h-5 w-5" />,
    t: "Fixed-price packages",
    d: "Websites, apps and care plans have published starting tiers. Match a floor to your scope and start - no call needed to see the number.",
  },
  {
    icon: <IconSearch className="h-5 w-5" />,
    t: "Start with a paid audit or discovery",
    d: "For bespoke work - custom software, marketing, design - a small fixed-price first step produces a written scope and a firm quote, and credits back toward the build.",
  },
  {
    icon: <IconSpark className="h-5 w-5" />,
    t: "Requirement-based",
    d: "AI development is scoped to what you need and quoted per project, in stages, so you fund it in steps once a pilot has proven it out.",
  },
];

const deRisk = [
  {
    icon: <IconLock className="h-5 w-5" />,
    t: "You own everything",
    d: "On final payment, 100% of the code, design files, IP and data are yours. We'll sign an NDA on request.",
  },
  {
    icon: <IconCheck className="h-5 w-5" />,
    t: "You pay in milestones",
    d: "Work is billed against milestones as it's delivered, not all up front, so payment tracks progress you can see.",
  },
  {
    icon: <IconRefresh className="h-5 w-5" />,
    t: "Discovery and audits credit back",
    d: "The fixed price of a discovery or audit is credited toward the build or your first month, so the step that gives you a real number isn't money lost.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    t: "Care plans are month-to-month",
    d: "No lock-in and no long contract. Stay because the work is good, not because you're trapped.",
  },
  {
    icon: <IconTag className="h-5 w-5" />,
    t: "No markup on what you pay others",
    d: "For paid media, SaaS and hosting you pay the platforms and vendors directly, at their price. We never take a cut of your ad spend.",
  },
  {
    icon: <IconGauge className="h-5 w-5" />,
    t: "No guarantee theatre",
    d: "We won't promise a ranking or a ROAS no honest company can control. We stand behind the scope, the agreed timeline and the standard of the work.",
  },
];

const faqs = [
  {
    question: "What do your website and app packages cost?",
    answer:
      "Intention InfoService publishes fixed starting prices: a Starter site from $300, a Launch Sprint from $1,500, a Growth Site from $4,000 (our recommended pick), and a Commerce Sprint for e-commerce from $7,000. A pre-seed or seed web-app MVP starts from $12,000, a simple mobile app from $500, and a full iOS-plus-Android build from $15,000. Each is a published starting floor; you agree a fixed price after a short paid discovery, before any build begins.",
  },
  {
    question: "Do you publish fixed prices, or is there a 'contact us for a quote' wall?",
    answer:
      "We publish real starting prices instead of hiding behind a quote form. Productized work has published floors - websites from $300, mobile apps from $500, care plans from $100 a month. Bespoke work (custom software, marketing, AI) starts with a low, fixed-price discovery or audit that ends in a written scope and a fixed quote you approve before any build. Either way you see a number before you commit - there is no blind quote wall.",
  },
  {
    question: "Why isn't every service sold at a fixed package price?",
    answer:
      "Some work is productized and some is genuinely bespoke. Websites, mobile apps and care plans have published tiers because the scope repeats. Custom software, marketing and AI are scoped to your exact requirement, so instead of guessing a number we publish a fixed-price entry - a Discovery Sprint from $1,000 for custom software, or an audit from $100 to $200 for marketing - that produces a written scope and a fixed quote, credited toward the work.",
  },
  {
    question: "Which of your services have a low-cost entry point?",
    answer:
      "Several, on purpose. You can start with a UX/UI Audit, a Paid Media Audit, or a Website Health Audit from $100 each; a Design Sprint or Marketing Audit from $200; a Brand Sprint or Starter website from $300 to $500; or a Starter App from $500. Most of the audits are credited toward the larger project, so a small first step is not money wasted.",
  },
  {
    question: "Are there hidden fees, and do you mark up ad spend or software costs?",
    answer:
      "No hidden fees. The published starting price is the honest floor, and any bespoke build is a fixed quote agreed before work starts. For paid media you pay Google, Meta and the other platforms directly, and we never mark up your ad spend - our fee is a flat monthly management fee, not a percentage. For any third-party software, SaaS or hosting, you pay those vendors directly too, at their price.",
  },
  {
    question: "What currency are your prices in?",
    answer:
      "All prices are in US dollars (USD). Intention InfoService works with clients across the US, UK, UAE, Europe and India, and every published price and quote is in USD - the number you see is the number you pay. We do not quote in multiple currencies.",
  },
  {
    question: "How do payments work, and do the audit fees count toward the project?",
    answer:
      "Payments are milestone-based, not all up front. Bespoke projects begin with the small fixed-price discovery or audit; on that work the fee is credited toward your build or first month, so you are not paying twice. The build is then billed across milestones tied to demos you can see, and care plans and paid-media management are month-to-month with no lock-in. You own 100% of the code, IP and data on final payment.",
  },
];

/** Full tier card (websites, apps, care plans). `monthly` appends "/mo"; `maxIncludes` trims the
 *  summary so the hub never re-prints a money page's full table. "Recommended" shows only when the
 *  source tier is flagged `best` (Growth Site, Growth care plan) - never manufactured elsewhere. */
function TierCard({
  tier,
  monthly = false,
  maxIncludes = 3,
}: {
  tier: PricingTier;
  monthly?: boolean;
  maxIncludes?: number;
}) {
  return (
    <div
      className={`card relative flex flex-col p-6 ${tier.best ? "glow-border ring-1 ring-brand-400/40" : ""}`}
    >
      {tier.best && (
        <span className="absolute -top-3 left-6 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          Recommended
        </span>
      )}
      <h3 className="font-display text-lg font-bold text-foreground">{tier.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tier.for}</p>
      <div className="mt-5">
        <span className="text-sm text-muted-foreground">from </span>
        <span className="font-display text-4xl font-bold text-foreground">{tier.from}</span>
        {monthly && <span className="text-sm text-muted-foreground">/mo</span>}
      </div>
      {tier.timeline && <p className="mt-1 text-xs text-muted-foreground">{tier.timeline}</p>}
      <ul className="mt-5 flex-1 space-y-2.5">
        {tier.includes.slice(0, maxIncludes).map((inc) => (
          <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
            <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
            {inc}
          </li>
        ))}
      </ul>
      <Button href="/contact" variant={tier.best ? "primary" : "outline"} className="mt-6">
        Start a project
      </Button>
    </div>
  );
}

/** Compact "entry door" card for bespoke services (custom software, design, marketing). Shows the
 *  fixed first-step price + "credited back" ONLY when the source tier actually credits (driven off
 *  the data, not a group label - Design Sprint and Brand Sprint do not credit). No includes list -
 *  the door's `for` line summarizes; the full scope stays on the money page. */
function DoorCard({ tier }: { tier: PricingTier }) {
  const credited = tier.includes.some((inc) => inc.toLowerCase().includes("credited"));
  return (
    <div className="card flex flex-col p-6">
      <h3 className="font-display text-base font-bold text-foreground">{tier.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{tier.for}</p>
      <div className="mt-4">
        <span className="text-sm text-muted-foreground">from </span>
        <span className="font-display text-2xl font-bold text-foreground">{tier.from}</span>
      </div>
      {tier.timeline && <p className="mt-1 text-xs text-muted-foreground">{tier.timeline}</p>}
      {credited && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <IconCheck className="h-3.5 w-3.5 shrink-0" />
          Credited toward the work
        </p>
      )}
    </div>
  );
}

/** Descriptive out-link to a service money page (never "Learn more" / "Get started"). */
function ExploreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
    >
      {children}
      <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: "/pricing",
          name: "Website, App & Software Pricing",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Transparent pricing</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Real prices, <span className="gradient-text">published up front.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Intention InfoService is a digital product and growth company, and this is every
                published price we have, in one place. Most agencies make you book a call to hear a
                number. We do the opposite: the prices below are real starting floors in USD, and you
                can act on them today. Where the work is genuinely bespoke - custom software,
                marketing, AI and most design - we still show a real number: the fixed price of a
                paid discovery or audit that ends in a written scope and a firm quote, credited back
                toward the work. So you never have to commit to hear what something costs.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Start a project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {heroChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      </div>

      {/* Sticky jump nav - server-rendered anchors, zero JS, horizontally scrollable on mobile */}
      <nav
        aria-label="Jump to a pricing section"
        className="sticky top-16 z-30 border-y border-border bg-surface/90 backdrop-blur"
      >
        <Container>
          <ul className="flex gap-2 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none]">
            {jumpLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-brand-400/50 hover:text-brand-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* How pricing works - orientation strip, sets the model before any number */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How pricing works here"
              title="Why some prices are tiers and some start with a paid step"
              sub="Two kinds of work need two kinds of pricing, and being honest about which is which is the whole point. Nothing here is open-ended hourly, and nothing hides its entry price."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-3">
            {howItWorks.map((h) => (
              <div key={h.t} className="card flex flex-col p-6">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500"
                >
                  {h.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{h.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Websites */}
      <Section id="websites" className="scroll-mt-28 bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Websites"
              title="Websites, priced by scope"
              sub="Fixed starting tiers, so you can match a floor to your scope before you talk to anyone. Each number is a starting floor - we confirm the fixed price once we have seen your scope."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {websiteBuildTiers.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </Reveal>
          <Reveal className="mt-6">
            <ExploreLink href="/services/web-design-development">
              Explore web design &amp; development
            </ExploreLink>
          </Reveal>
        </Container>
      </Section>

      {/* Web & mobile apps */}
      <Section id="apps" className="scroll-mt-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Web & mobile apps"
              title="Apps, from a simple build to a full product"
              sub="Product builds carry a higher, honest starting floor because they are real engineering, not templates. A web-app or SaaS MVP starts at one floor; a simple single-purpose mobile app and a full iOS-plus-Android build with a backend each have their own."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {appTiers.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </Reveal>
          <Reveal className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <ExploreLink href="/services/web-design-development">
              Explore web app &amp; MVP development
            </ExploreLink>
            <ExploreLink href="/services/mobile-app-development">
              Explore mobile app development
            </ExploreLink>
          </Reveal>
        </Container>
      </Section>

      {/* Care plans */}
      <Section id="care-plans" className="scroll-mt-28 bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Ongoing care"
              title="Care plans, published and month-to-month"
              sub="Maintenance is the one thing we price as a published monthly table, because it is a productized, recurring service. Three ascending plans run month-to-month with no lock-in."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-5 lg:grid-cols-3">
            {websiteMaintenanceTiers.map((t) => (
              <TierCard key={t.name} tier={t} monthly maxIncludes={4} />
            ))}
          </Reveal>

          {/* One-time health audit for sites we did not build */}
          <Reveal className="mt-6">
            <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="font-display text-base font-bold text-foreground">
                  Didn&apos;t build it with us? Start with a {websiteAuditTier.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {websiteAuditTier.for}. We audit first, then you can roll onto a plan if you want
                  ongoing care.
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <span className="text-sm text-muted-foreground">from </span>
                <span className="font-display text-3xl font-bold text-foreground">
                  {websiteAuditTier.from}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">{websiteAuditTier.timeline}</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <ExploreLink href="/services/website-maintenance-services">
              Explore website maintenance plans
            </ExploreLink>
          </Reveal>
        </Container>
      </Section>

      {/* Design & branding */}
      <Section id="design" className="scroll-mt-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Design & branding"
              title="Design, priced as low entry doors"
              sub="Design and branding are scoped to your product, not sold by the tier, so we open with low, fixed-price entry doors instead of a big quote. The full engagement is then scoped into a fixed quote. Every door hands you editable files you keep."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {uiUxDesignTiers.map((t) => (
              <DoorCard key={t.name} tier={t} />
            ))}
          </Reveal>
          <Reveal className="mt-6">
            <ExploreLink href="/services/ui-ux-design-services">
              Explore UI/UX design &amp; branding
            </ExploreLink>
          </Reveal>
        </Container>
      </Section>

      {/* Marketing */}
      <Section id="marketing" className="scroll-mt-28 bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Marketing"
              title="Marketing starts with an audit, not a retainer"
              sub="Marketing is an ongoing retainer, so it starts with a fixed-price audit rather than a number pulled from the air. Each audit ends in a prioritized plan you keep, and credits toward your first month."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
            {[...digitalMarketingTiers, ...performanceMarketingTiers].map((t) => (
              <DoorCard key={t.name} tier={t} />
            ))}
          </Reveal>
          <Reveal className="mt-6">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              For paid media the monthly fee is flat management, never a cut of ad spend - and you
              always pay the ad platforms directly, with no markup from us.
            </p>
          </Reveal>
          <Reveal className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            <ExploreLink href="/services/digital-marketing">
              Explore organic digital marketing
            </ExploreLink>
            <ExploreLink href="/services/performance-marketing">
              Explore performance marketing
            </ExploreLink>
          </Reveal>
        </Container>
      </Section>

      {/* Custom software & AI */}
      <Section id="software-ai" className="scroll-mt-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Custom software & AI"
              title="Bespoke work, scoped not guessed"
              sub="Bespoke software cannot honestly be sold as a fixed package sight unseen, and AI is requirement-based - so we do not pretend otherwise. Both open with a real number for the first step."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2">
            {customSoftwareTiers.map((t) => (
              <DoorCard key={t.name} tier={t} />
            ))}
            {/* AI is number-free by design - no fixed price, no Offer node */}
            <div className="card flex flex-col p-6">
              <h3 className="font-display text-base font-bold text-foreground">AI development</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                Requirement-based, so there is no fixed price or package here - and a made-up one
                would not be honest. We scope it in stages (diagnose, pilot, build) and quote per
                project with milestone billing, so you commit in steps.
              </p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">Quoted per project</p>
            </div>
          </Reveal>
          <Reveal className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <ExploreLink href="/services/custom-software-development">
              Explore custom software development
            </ExploreLink>
            <ExploreLink href="/services/ai-development">Explore AI development</ExploreLink>
          </Reveal>
        </Container>
      </Section>

      {/* De-risk band */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we keep it low-risk"
              title="The things that are actually ours to stand behind"
              sub="Every one of these is a commitment we control - not a guaranteed outcome we don't."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deRisk.map((d) => (
              <div key={d.t} className="card flex flex-col p-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500"
                >
                  {d.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{d.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
              </div>
            ))}
          </Reveal>

          {/* Small-budget on-ramp */}
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-border bg-surface p-5 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Working with a tighter budget than the floors above?
                </span>{" "}
                Tell us the budget you have and what you are trying to do - we will be straight about
                what is realistic within it, and where a lighter first build makes sense.
              </p>
              <Link
                href="/contact"
                className="group mt-3 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600 sm:mt-0"
              >
                Tell us your budget
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="scroll-mt-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Pricing questions, answered straight" />
          </Reveal>
          <Reveal className="mt-9">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                    {f.question}
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {f.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="See a fixed price for what you're building"
        subtitle="Tell us what you're building and the budget you have, and we'll point you to the right starting price - no quote wall, no sales pitch."
        primary={{ label: "Start a project", href: "/contact" }}
      />
    </>
  );
}
