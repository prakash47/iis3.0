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
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import {
  IconArrow,
  IconCode,
  IconBolt,
  IconLayers,
  IconClock,
  IconChat,
  IconShield,
  IconMail,
} from "@/components/icons";

export const metadata: Metadata = pageMetadata("/careers");

const PATH = "/careers";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Careers", path: PATH },
];

/**
 * THE /careers PAGE - a small, honest recruiting page.
 *
 * THE RULE, same as the rest of the site, is ZERO FABRICATION. A careers page is a magnet for
 * invented perks, so this one carries none: no benefits, salary bands, equity, insurance, office
 * or amenities, no "unlimited PTO", no team-size or headcount number, no glassdoor-style ratings
 * or awards, and no fabricated list of open roles. The honest candidate value proposition is built
 * from REAL signals only - end-to-end ownership, a flat senior team, stack-agnostic variety, real
 * timezone overlap, closeness to shipping and to clients, and an honesty-first standard.
 *
 * HARD LOCKS (mirror the just-shipped /about voice):
 *  - PURGED banned framings from the old page: "founder-led", "studio" (as self-description),
 *    "startups and SMBs", Next.js/React-as-identity. The small, senior team is a MECHANISM ("you
 *    work directly with the senior people who do the work"), never the "founder-led" label.
 *  - There are NO formal openings. That is stated honestly and still-invitingly - a conversation,
 *    not a "we are not hiring" wall. The apply mechanism is a mailto to the company email with a
 *    portfolio/GitHub link and a short note.
 *  - No named team members, bios, photos or Person schema. The client CTA routes to /contact with
 *    NO "startup or SMB" ceiling.
 *  - Schema: breadcrumb + WebPage(careers -> Org @id) only, mirroring /about. Organization/WebSite
 *    are sitewide (layout). NEVER JobPosting (no real, dated posting exists to describe), and NEVER
 *    Person/Review/Rating.
 */

const heroChips = [
  { icon: <IconCode className="h-4 w-4" />, label: "Own your work, first commit to production" },
  { icon: <IconLayers className="h-4 w-4" />, label: "Many stacks, the right tool per job" },
  { icon: <IconClock className="h-4 w-4" />, label: "Remote-friendly, India and Western-hours overlap" },
];

// The honest candidate value proposition. Every item is a REAL property of how a small, senior,
// stack-agnostic team actually works - not an invented perk. These are the things a big agency
// structurally cannot offer, which is exactly why they belong here.
const offers = [
  {
    icon: <IconCode className="h-5 w-5" />,
    t: "Real ownership, end to end",
    d: "You own your work from the first commit to production - not a slice of a ticket inside someone else's architecture, but the whole thing, designed, built and shipped by you, with your name on the decisions.",
  },
  {
    icon: <IconBolt className="h-5 w-5" />,
    t: "A flat team, direct access",
    d: "No account-manager layer and no junior-bench relay. Decisions happen in one conversation with the people who can actually make them, so you spend your time building instead of waiting on a chain of approvals.",
  },
  {
    icon: <IconLayers className="h-5 w-5" />,
    t: "Stack-agnostic variety",
    d: "You work across many technologies on the right tool for each job, not one house stack for everything. For a strong engineer that is a genuine draw: real range, real reasons behind each choice, and guides on our own site that argue when not to use a tool.",
  },
  {
    icon: <IconClock className="h-5 w-5" />,
    t: "Remote-friendly, with real overlap",
    d: "We work remotely, with deliberate overlap across India and Western hours. That means live collaboration and quick answers during the day, not a queue you check in the morning.",
  },
  {
    icon: <IconChat className="h-5 w-5" />,
    t: "Your work ships, and you talk to clients",
    d: "We are small enough that what you build goes live, and you hear directly from the people who use it. You stay close to the client and close to the outcome, not three handoffs away from either.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    t: "Honesty-first, as a working standard",
    d: "We do not inflate, fabricate or ship thin work. The public site holds itself to that standard - real prices, no invented logos or reviews - and the team is held to the same one. If it cannot be done well and honestly, we would rather not ship it.",
  },
];

// The apply mechanism: a short note + a portfolio/GitHub link, straight to the company inbox. The
// subject just makes it easy to spot; nothing here collects data or routes through a funnel.
const applyHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
  "Portfolio and a note for Intention InfoService",
)}`;

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "Careers at Intention InfoService",
          dateModified: new Date().toISOString(),
        })}
      />

      {/* Hero */}
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Careers at Intention InfoService</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                A small, senior team where your work actually{" "}
                <span className="gradient-text">ships.</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Intention InfoService is a full-service, stack-agnostic digital product and growth
                company, working with clients from startups to enterprises worldwide. We keep the
                team small and senior on purpose: the person who designs and builds the work is the
                person the client talks to, and that is the job we are describing here.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We are not going to sell you invented perks or a wall of benefits. What we can offer
                a strong engineer or designer is more specific, and rarer: real ownership, real range,
                and a short line between your work and the people it is for.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href={applyHref} size="lg">
                  Send your work
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="/about" variant="ghost" size="lg">
                  See how we work
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

      {/* What we honestly offer */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why build here"
              title="What a small, senior team can genuinely offer"
              sub="No inflated perks, no invented benefits. This is the honest version of what working with Intention InfoService is like, and why the things a big agency cannot structurally give you are exactly the things we can."
            />
          </Reveal>

          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((o) => (
              <div key={o.t} className="card flex flex-col p-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500"
                >
                  {o.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{o.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{o.d}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              This is the same team and the same standard described on our{" "}
              <Link href="/about" className="font-medium text-brand-500 hover:text-brand-600">
                about page
              </Link>
              . You can see the{" "}
              <Link href="/services" className="font-medium text-brand-500 hover:text-brand-600">
                full range of work we take on
              </Link>{" "}
              and the{" "}
              <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
                technologies we build with
              </Link>
              , each with an honest note on when not to reach for it.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* No formal openings - honest and still inviting */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Open roles"
              title="No formal openings right now, and we will not pretend otherwise"
              sub="We are not going to post invented roles to look like we are hiring. When there is a real, specific opening, it will say exactly what it is. Until then, here is the honest state of things."
            />
          </Reveal>

          <Reveal className="mt-8">
            <div className="card p-6 sm:p-8">
              <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  There is no listed vacancy today. But a small team&apos;s next hire almost always
                  starts as a conversation with someone whose work was too good to pass up, so if
                  you are a strong engineer or designer, we always want to meet you.
                </p>
                <p>
                  Send a short note about the work you want to do and a link to your portfolio or
                  GitHub to{" "}
                  <a
                    href={applyHref}
                    className="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
                  >
                    {siteConfig.contact.email}
                  </a>
                  . We read it ourselves - it goes to the people who do the work, not a recruiting
                  funnel - and if there is a fit, whether now or when the next project lands, you
                  will hear from us.
                </p>
              </div>
              <div className="mt-6">
                <Button href={applyHref} variant="outline">
                  <IconMail className="h-5 w-5" />
                  Send your portfolio and a note
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Here to hire us, not to be hired?"
        subtitle="If you have a product to design, build or grow, that is what we do. Tell us what you're building and you'll get an honest, fixed price from the senior people who would do the work."
        primary={{ label: "Start a project", href: "/contact" }}
      />
    </>
  );
}
