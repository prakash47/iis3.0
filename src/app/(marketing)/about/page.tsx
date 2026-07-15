import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { services, technologies } from "@/content/catalog";
import {
  IconArrow,
  IconBuilding,
  IconTag,
  IconPin,
  IconLock,
  IconGauge,
  IconLayers,
  IconCheck,
  IconClock,
  IconShield,
  IconSearch,
} from "@/components/icons";

export const metadata: Metadata = pageMetadata("/about");

const PATH = "/about";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: PATH },
];

/**
 * THE /about PAGE - a trust-first, entity-verification page.
 *
 * THE BINDING CONSTRAINT is TRUST (a deliberately thin portfolio), and the RULE is ZERO FABRICATION.
 * The signature move: instead of the fabricated-accumulation About page every competitor ships (logo
 * walls, inflated counts, invented reviews), this one is VERIFIABLE - it publishes what is real, names
 * what we refuse to fake, and hands the reader the tools to check us. The refusal to decorate IS the
 * trust signal.
 *
 * HARD LOCKS (all confirmed by two red-teams):
 *  - The entity capsule renders {siteConfig.entityDescription} VERBATIM (byte-identical to the homepage
 *    hero + the Organization schema description) - never retyped as a literal.
 *  - PURGED banned framings from the old page: "founder-led", "studio" (as self-description), "startups
 *    and SMBs", Next.js/React-as-identity, "Founder in every project", "measurable outcomes/conversions/
 *    growth" as a delivered result. The team is a MECHANISM ("you work with the senior people who do the
 *    work"), never the "founder-led" label; no names/bios/photos/Person schema (a clean later addition).
 *  - The two /work case studies are REAL, anonymized under NDA: referenced honestly (client names are
 *    withheld, never surfaced). Real confirmed figures only (~+120% organic, 4 weeks, 2 weeks, 10 cats).
 *  - Counts derive from services.length / technologies.length (the catalog "6 core offerings" comment is
 *    stale). The only numbers on the page are honest, checkable facts (2016, 401208, the counts, the $300
 *    published floor). No pinned performance score (method only). No currencies the site does not quote.
 *  - Schema: breadcrumb + WebPage(about -> Org @id) + FAQPage only. Organization/WebSite are sitewide
 *    (layout). NEVER Person/Review/Rating/AggregateRating. FAQ answers carry no links (schema leak) and
 *    do not collide with the homepage FAQ question strings.
 */

const heroChips = [
  { icon: <IconBuilding className="h-4 w-4" />, label: "Registered Pvt Ltd, incorporated 2016" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed prices, no quote wall" },
  { icon: <IconPin className="h-4 w-4" />, label: "Based in Maharashtra, India - serving worldwide" },
];

// Real + CHECKABLE. Each item carries its own way to verify. The two real case studies are NOT here
// (they live on /work, anonymized under NDA) - referenced in the routing line below the grid.
const realSignals = [
  { icon: <IconBuilding className="h-5 w-5" />, t: "We are a registered company", d: "Intention InfoService Private Limited, a private limited company incorporated in 2016. A legal entity on the public register, not a freelancer or a trading name." },
  { icon: <IconPin className="h-5 w-5" />, t: "A real address and phone", d: "Juchandra, Naigaon East, Maharashtra 401208, India - a registered place of business, serving clients across India, the US, UK, UAE and Europe." },
  { icon: <IconTag className="h-5 w-5" />, t: "Published fixed prices", d: "Real starting figures are on the pricing and service pages. You can see roughly what a build costs before you send a single message - no quote wall." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Our own site is the demo", d: "We sell fast, accessible sites, so ours has to be one. Do not take our word for it - run this page through PageSpeed Insights yourself. The method is the promise, not a number we typed." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Stack-agnostic, proven by argument", d: "We recommend by fit, not by what we like selling, and every one of our technology guides names when not to use that technology. A shop with one house stack could not write that honestly." },
  { icon: <IconLock className="h-5 w-5" />, t: "You own the code and the IP", d: "What we build for you is yours - the repository, the assets and the rights. No lock-in, no hostage handoff, no dependency on us to move on." },
];

const refusals = [
  "No client logo wall, and no trusted-by strip. A grid of logos tells you who paid us, not how the work went.",
  "No star ratings or reviews. We do not have a Clutch or GoodFirms profile yet, so we will not manufacture the look of one.",
  "No project or client counts. A big number with a plus sign after it is the easiest thing to type and the hardest to verify.",
  "No inflated or invented metrics. Our two case studies are real work, anonymized at the client's request; the only figures on them are the ones the client confirmed.",
  "No invented team. No stock-photo headshots, no fabricated bios, no borrowed credentials.",
  "No certifications, badges, partner tiers or awards we do not hold. If a badge is not real and current, it is not on the page.",
];

const principles = [
  { icon: <IconLayers className="h-5 w-5" />, t: "Recommend by fit, not by habit", d: "We choose your stack from many technologies based on what your product needs, not what we prefer to sell. Every technology guide on our site names when not to use that tech." },
  { icon: <IconTag className="h-5 w-5" />, t: "Prices you can read before you call", d: "Our starting prices are published, with no quote wall. We confirm a fixed number after a short discovery, and it does not drift once we begin." },
  { icon: <IconLock className="h-5 w-5" />, t: "You own the code and the IP", d: "What we build for you is yours - the repository, the assets and the rights. No lock-in, no hostage code, no dependency on us to move on." },
  { icon: <IconShield className="h-5 w-5" />, t: "Senior people, direct", d: "You work with the senior people who actually design and build your product. Fewer layers, faster decisions, and nothing important lost in a handoff to someone who was never in the room." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Honesty as strategy", d: "Real prices, real timelines, and no fabricated numbers, logos or reviews. If we cannot prove it, it does not go on the page. We would rather show you less and have all of it be true." },
  { icon: <IconClock className="h-5 w-5" />, t: "Ship in weeks, not months", d: "A small, senior team and a modern workflow let us move quickly without cutting corners. We hold the work to standards you can verify yourself, like PageSpeed and accessibility - a method we stand behind, not an outcome we promise." },
];

const facts = [
  { k: "Legal entity", v: siteConfig.legalName },
  { k: "Type", v: "Registered private limited company" },
  { k: "Incorporated", v: String(siteConfig.foundingYear) },
  { k: "Headquarters", v: "Juchandra, Naigaon East, Maharashtra 401208, India" },
  { k: "Markets served", v: "India, the US, UK, UAE and Europe" },
  { k: "Services", v: `${services.length}, full-service - design, build, market and maintain` },
  { k: "Technology approach", v: `Stack-agnostic across ${technologies.length} in-depth guides` },
  { k: "Pricing", v: "Published fixed prices, from $300, no quote wall" },
  { k: "Ownership", v: "You own the code, IP and data" },
];

// De-cannibalized: the homepage FAQPage already owns "What does Intention InfoService do?", the
// "bigger agency" objection and the India/timezones question, so those strings are avoided here. This
// page owns the ENTITY/LEGITIMACY facet. Answer-first, self-contained, NO links in answers (schema leak),
// mirrored 1:1 into FAQPage JSON-LD. No fabrication, no currencies we do not quote, no counts, no names.
const faqs = [
  {
    question: "Is Intention InfoService a real, legitimate company?",
    answer:
      "Yes. Intention InfoService Private Limited is a registered private limited company in India, incorporated in 2016, with a real business address in Juchandra, Naigaon East, Maharashtra 401208. Its legitimacy rests on things you can verify - the company registration, a real address and phone, and published fixed prices - not on borrowed logos or invented reviews.",
  },
  {
    question: "When was Intention InfoService founded?",
    answer:
      "Intention InfoService was incorporated in 2016 as a registered private limited company, so it has operated as a formally registered business for more than nine years. Today it is a full-service digital product and growth company, built around transparent, published fixed prices and delivery led by the senior people who do the work rather than account managers.",
  },
  {
    question: "Where is Intention InfoService based?",
    answer:
      "Intention InfoService is headquartered in Juchandra, Naigaon East, Maharashtra 401208, India. From there it works with clients across India, the US, the UK, the UAE and Europe. Collaboration is mostly remote, with deliberate timezone overlap, regular demos, and direct access to the people building your product.",
  },
  {
    question: "How big is the team, and who will I work with?",
    answer:
      "Intention InfoService is a small, senior team by design. You work directly with the people who actually design and build your product, not an account manager relaying messages. Keeping the team small and senior is deliberate: faster decisions, fewer handoffs, and one group accountable for the work from first call to launch and beyond.",
  },
  {
    question: "Do you work with startups, enterprises, or both?",
    answer:
      "Both, and everything in between. Intention InfoService builds for early-stage startups, growing businesses and established enterprises worldwide. The scope scales to your project, but what stays constant at every size is the senior attention, the transparent published pricing, and the fact that you own the code, IP and data outright.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. Intention InfoService is based in India and works with clients across the US, the UK, the UAE, Europe and India. Projects run mostly remote, with overlapping working hours, regular demos and direct contact with the people doing the work. Published starting prices are shown in USD on the pricing page.",
  },
  {
    question: "Is a small team a risk for a larger project?",
    answer:
      "It is a fair question, and the honest answer is that our size is a choice, not a ceiling. The scope scales to the work, and you get senior people on it directly instead of a junior bench behind an account manager. We would rather be a small team you can verify - a real company since 2016, published prices, code you own, our own fast site you can test - than a large one you have to take on faith.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={webPageSchema({ path: PATH, name: "About Intention InfoService", dateModified: new Date().toISOString() })} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Since 2016</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                A full-service digital product and growth company,{" "}
                <span className="gradient-text">built to be checked.</span>
              </h1>

              {/* BYTE-LOCKED entity capsule - rendered from the constant, byte-identical to the homepage
                  hero and the Organization schema description. Do not retype. */}
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {siteConfig.entityDescription}
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A registered company since 2016, now built around published prices, senior people, and
                proof you can verify before you ever talk to us. This page is not a highlight reel. It is
                a set of things you can check.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Start a project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="/pricing" variant="ghost" size="lg">
                  See our published prices
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

      {/* What we do + where we sit */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do, and where we sit"
              title="Full-service and stack-agnostic, in the unoccupied middle"
              sub="We design, build and grow websites, web apps, mobile apps, custom software and AI solutions, and we run the marketing that gets them found. There is a gap in this market between agencies with US and EU quality hidden behind a quote wall, and cheap delivery that ships fast. That middle - senior-level design and engineering, at prices you can read before you call, delivered in weeks - is where we live."
            />
          </Reveal>

          <Reveal className="mt-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="card p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Eight services, one senior team
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  From the first wireframe to the traffic that arrives after launch: web design and
                  development, mobile apps, custom software, UI/UX and branding, organic and paid
                  marketing, website maintenance, and AI development. You can see the full range on our{" "}
                  <Link href="/services" className="font-medium text-brand-500 hover:text-brand-600">
                    services pages
                  </Link>
                  .
                </p>
              </div>
              <div className="card p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  The right tool for the job, not one house stack
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We are stack-agnostic on purpose, across {technologies.length} technologies - WordPress,
                  Shopify, Laravel, Django, Next.js, React, Node, Python, headless CMS, React Native,
                  Flutter and more. Next.js and React are genuine strengths of ours, not our identity.{" "}
                  <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
                    Each guide names when not to use that stack
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* THE SPINE - what is real / what we refuse to fake */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Honesty as the strategy"
              title={<>What is real. <span className="gradient-text">What we will not fake.</span></>}
              sub="Most About pages accumulate: a wall of logos, a &quot;trusted by&quot; strip, a count of projects, a handful of five-star reviews. A lot of it is decoration, and some of it is invented. We took the opposite approach. Everything below is either something you can verify yourself right now, or something we are openly choosing not to claim because we have not earned it. If a claim cannot survive you checking it, it does not belong on a trust page."
            />
          </Reveal>

          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {realSignals.map((s) => (
              <div key={s.t} className="card flex flex-col p-5">
                <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                  {s.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </Reveal>

          {/* The two real case studies - referenced honestly (real, anonymized under NDA). */}
          <Reveal className="mt-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">A few real projects, not a wall of logos.</span>{" "}
                We would rather go deep on real production work than flash a logo grid. One honest note,
                because this is a page about honesty: the case studies on our work page are real work,
                anonymized at each client&apos;s request - the client names are withheld under NDA, and the
                only figures we publish are the ones the client confirmed. You can{" "}
                <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                  see the projects we go deep on
                </Link>
                , and ask us to walk you through relevant work on a call.
              </p>
            </div>
          </Reveal>

          {/* The refusal block */}
          <Reveal className="mt-6">
            <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
              <div className="relative z-[1]">
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  What you will not find on this page, on purpose
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  None of this is modesty. It is the same standard we would want from anyone we were about
                  to pay. If it cannot be checked, we do not claim it.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {refusals.map((r) => (
                    <li key={r} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
                      <IconSearch aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* The team - mechanism, unnamed */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="A small, senior team"
              title="You work with the people who build it"
              sub="We are deliberately small - a choice, not a limitation."
            />
          </Reveal>
          <Reveal className="mt-8">
            <div className="card p-6 sm:p-8">
              <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Being small and senior is the mechanism behind everything above: you work directly with
                  the senior people who do the work - the ones designing and writing the code - not an
                  account manager relaying messages to a junior bench you never meet. Decisions happen in
                  one conversation. Nothing important gets lost in a handoff, because there is no chain to
                  lose it in.
                </p>
                <p>
                  We are not posting bios and headshots we have not written yet, because we would rather
                  show you nothing than show you filler. When we introduce the team by name, it will be
                  real people with real, checkable histories - the same standard as everything else here.
                  Until then, the honest version of &quot;meet the team&quot; is a conversation with the
                  people who would actually build your project.
                </p>
              </div>
              <div className="mt-6">
                <Button href="/contact" variant="outline">
                  Talk to the people who would build it
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Principles */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Principles you can hold us to"
              sub="Not adjectives - behaviours you can check. Accountability here means verifiable method, never a claimed result."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.t} className="card flex flex-col p-5">
                <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                  {p.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* The facts, on the record */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="On the record"
              title="The facts, checkable"
              sub="No logo wall, no invented review count, no inflated project total. Here is what is real about Intention InfoService, and every item is something you can check for yourself."
            />
          </Reveal>
          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <dl className="divide-y divide-border">
                {facts.map((f) => (
                  <div key={f.k} className="grid gap-1 p-5 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-semibold text-foreground">{f.k}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground sm:col-span-2">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              See the{" "}
              <Link href="/pricing" className="font-medium text-brand-500 hover:text-brand-600">
                published prices
              </Link>
              , how we{" "}
              <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
                choose a stack
              </Link>
              , the{" "}
              <Link href="/services" className="font-medium text-brand-500 hover:text-brand-600">
                full range of services
              </Link>
              , and{" "}
              <Link href="/contact" className="font-medium text-brand-500 hover:text-brand-600">
                how to reach us
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Questions about Intention InfoService" title="About us, answered" />
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
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Ready to start, or want to check us first?"
        subtitle="Tell us what you're building and you'll get an honest, fixed price from the senior people who'll do the work. Prefer to look before you talk? You can see our starting prices before you ever contact us, and the real projects we go deep on."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See our work", href: "/work" }}
      />
    </>
  );
}
