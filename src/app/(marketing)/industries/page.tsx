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
import { breadcrumbSchema, itemListSchema, faqSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { deepIndustries } from "@/content/catalog";
import {
  IconArrow,
  IconShield,
  IconLock,
  IconEye,
  IconLayers,
  IconSearch,
  IconBuilding,
  IconGradCap,
  IconHeartPulse,
  IconCreditCard,
  IconPlane,
  IconPlay,
} from "@/components/icons";

export const metadata: Metadata = pageMetadata("/industries");

const PATH = "/industries";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: PATH },
];

/**
 * THE /industries HUB (rebuilt 2026-07-11, once all six verticals became bespoke + indexed).
 *
 * WHAT THIS PAGE IS. Not a money page - the six commercial sector head terms ("healthcare software
 * development", etc.) belong to the six CHILD pages, and this hub must never target them. Like the
 * /technologies hub, it is three things: an entity asset, the primary IN-CONTEXT descriptive-anchor
 * distributor into the six children (the DesktopNav dropdown renders links only when open, so it is
 * NOT a crawl path; the footer emits the six links but with identical boilerplate labels - this hub
 * is the only place each child gets a unique, topical inbound anchor), and an answer/AEO asset for
 * the honest-expertise question. Do not measure it on head terms.
 *
 * THE BOUNDARY, three ways. /services = what we will DO. /technologies = what we build it WITH and
 * how we choose. /industries = the sector-specific machinery a vertical demands, WHO each obligation
 * binds, and the liability-bearing roles we refuse. So the hub must NOT re-pitch the eight services,
 * must NOT re-state the stack-agnostic sentence (the site already carries three near-duplicate copies
 * - homepage FAQ x2 + /services FAQ - a fourth is duplicate body text), and must NOT carry any
 * "<Sector> Software Development" H2 or head-term anchor.
 *
 * NO TIER SPLIT. Unlike /technologies (13 deep vs 8 thin, which needed an "also in our toolkit"
 * section), all six industries are deep - so six full guide cards, one grid, ItemList of all six.
 *
 * THE THESIS IS CHECKABLE, NOT ASSERTED (the /technologies move, applied to regulated verticals).
 * With zero clients in any sector, our "industry expertise" is not a case-study wall - it is that
 * each guide names which obligation binds whom, builds the machinery to meet the one that is yours,
 * and declines the most profitable dishonest thing in that sector. The six proof examples deep-link
 * each child's #when-not (verified present on all six). Do NOT quote a uniform anti-rec heading:
 * five read "When we'd tell you not to build, and when we'd turn the work down", edtech reads only
 * "When we'd tell you not to build" - so the proofs describe each DISTINCT refusal, never the heading.
 *
 * HONESTY DISCIPLINE. Edtech is the one vertical with NO vendor-side liability role to refuse (the
 * law never touches us there - FERPA binds the school); its refusal is the "FERPA-compliant vendor"
 * badge and the custom LMS a school does not need. So no copy on this page asserts that ALL six
 * refuse a lucrative role - the universal is scoped ("in most of these sectors"). No fabricated
 * logos/case studies/counts/certs/prices; no "compliant" as a property of us; "app" absent from
 * every heading.
 */

// Icons mirror the homepage IndustriesGrid, so the six verticals read consistently site-wide.
const industryIcons: Record<string, React.ReactNode> = {
  edtech: <IconGradCap className="h-6 w-6" />,
  healthcare: <IconHeartPulse className="h-6 w-6" />,
  fintech: <IconCreditCard className="h-6 w-6" />,
  "real-estate": <IconBuilding className="h-6 w-6" />,
  travel: <IconPlane className="h-6 w-6" />,
  "entertainment-media": <IconPlay className="h-6 w-6" />,
};

// Guide-card CTA anchors: individually varied, obligation/fit-framed, varied openers - never
// "Explore {Name}", never a child's head term, never implying a portfolio (we have zero sector
// clients, so anchors are knowledge/boundary-framed, never "see our healthcare work"). Each is
// faithful to that guide's live copy; the travel one stays conditional ("can change what you are").
const guideAnchors: Record<string, string> = {
  edtech: "See who FERPA and COPPA really bind, and when extending Moodle beats building",
  healthcare: "Why we stay on the outside of the business-associate line, and never store your PHI",
  fintech: "You're almost never the bank - see how the ledger proves where the money went",
  "real-estate": "How a neutral-looking filter becomes a fair-housing decision, and the two builds we refuse",
  travel: "A booking is a promise someone else keeps, and one feature can change what you are",
  "entertainment-media": "Every item needs a provable licence and a lawful way out - here are the roles we refuse",
};

// The checkable proof, one per vertical, each deep-linked to that child's #when-not. Copy describes
// the DISTINCT refusal (verified against live copy), never the heading. Edtech uses the build-vs-buy
// refusal that actually lives at its #when-not (the FERPA allocation lives in EdtechProof, which has
// no stable id, so linking it to #when-not would be a dead affordance).
const proofs = [
  { slug: "edtech", lead: "The EdTech guide", says: "would rather point a training company at Moodle, Canvas or Open edX and turn the engagement down than sell it a custom LMS it doesn't need" },
  { slug: "healthcare", lead: "The healthcare guide", says: "says in writing that if a build genuinely needs us to hold your patients' data or sign a business associate agreement, we are not your vendor - rather than take the work and quietly become one" },
  { slug: "fintech", lead: "Our FinTech guide", says: "turns down crypto exchanges, wallets and core-banking ledgers outright, and flags when the real project is a money-transmitter licence for your counsel, not a screen we design" },
  { slug: "real-estate", lead: "The real-estate guide", says: "refuses to build the two products where the liability actually concentrates - the automated tenant approve-or-decline, and the valuation the market acts on" },
  { slug: "travel", lead: "The travel guide", says: "won't become your seller of travel or your package organiser of record, and won't hold the traveller's money - it builds the booking engine and flags the feature that could quietly change what you legally are" },
  { slug: "entertainment-media", lead: "Our media guide", says: "refuses to be your licensing counterparty, your royalty payer or your host of record, because that legal role doesn't transfer, and anyone who says it does is selling you something that isn't real" },
];

const heroChips = [
  { icon: <IconShield className="h-4 w-4" />, label: "We name whose obligation each one is" },
  { icon: <IconLock className="h-4 w-4" />, label: "We name the roles we won't take" },
  { icon: <IconEye className="h-4 w-4" />, label: "No borrowed logos or case studies" },
];

// The shared discipline across all six, generalised - the honest, cross-vertical version of what
// every guide does. Card 3 is scoped so it stays true for edtech (which has no lucrative role, only
// a false badge to decline).
const discipline = [
  { icon: <IconShield className="h-5 w-5" />, t: "It allocates the obligation", d: "It names which legal duty binds you and which binds a school, a bank, a broker, a carrier or a rightsholder instead - and which never reaches us at all. Getting that right forfeits the \"compliant vendor\" badge language, which is exactly why so few pages publish it." },
  { icon: <IconLayers className="h-5 w-5" />, t: "It builds the machinery, not a claim", d: "Every \"this obligation is yours\" is paired with \"and here is what we build so you can meet it\" - the access model, the ledger, the consent capture, the takedown pipeline. We never call the result compliant, secure or accessible, because those are properties of how you operate, not of software we hand over." },
  { icon: <IconLock className="h-5 w-5" />, t: "It declines the profitable dishonest sale", d: "In most of these sectors that is a role that carries the risk - the business associate, the money mover, the tenant-screening decision of record, the seller of travel, the licensing counterparty - which stays yours whatever a contract says, so we name it and leave it with you. In edtech, where the law never reaches us, it is the \"FERPA-compliant vendor\" badge and the custom platform a school does not need. Each guide names its version and turns it down." },
  { icon: <IconSearch className="h-5 w-5" />, t: "It shows no portfolio it doesn't have", d: "No invented case studies, no borrowed logos, no years-in-sector. Each guide bridges the same two real web projects as a problem shape, names precisely where that shape stops matching the sector, and fences off what we have not shipped." },
];

const hubs = [
  { t: "Services", d: "What we'll actually do across every sector: design, build, market and maintain.", href: "/services", cta: "See the eight things we do" },
  { t: "Technologies", d: "What we build each of these on, and how we choose - every guide says when not to use it.", href: "/technologies", cta: "See the stacks, and how we pick" },
  { t: "Pricing", d: "The scope sets the price, not the sector. Published starting prices for websites, software and more.", href: "/pricing", cta: "See what things start at" },
  { t: "Our work", d: "The two projects we've actually shipped, described honestly and never dressed up as sector work.", href: "/work", cta: "See the two we shipped" },
];

// Six HUB questions, at industry-hub altitude (the posture of doing vertical work honestly, across
// sectors, without a portfolio). Deliberately NOT re-answering any single vertical's head-term
// question, the three stack-agnostic near-dups, or the /technologies hub FAQ ("staff augmentation"
// stays there). Plain strings - the same array feeds FAQPage JSON-LD, so no links, prices or counts.
// Method-not-outcome throughout. Q1/Q4 scope the "refuse a role" claim so it stays true for edtech.
const faqs = [
  {
    question: "You list these industries but say you have no clients in them - so what does 'industry expertise' mean here?",
    answer:
      "It means something narrower and more checkable than a case-study wall. It is knowing exactly which legal obligation binds you and which binds someone else, building the software machinery so you can meet the one that is yours, and declining the most profitable thing we could dishonestly sell in each sector - the liability-bearing role, or a compliance badge no software can wear. All of that is something a firm faking domain knowledge would never put in writing, because each part forfeits a badge or a sale, which is precisely why it is worth more to you than a logo. Each guide does it in the open, and you can check it on the page.",
  },
  {
    question: "Why won't you show logos or case studies from these sectors, like other agencies do?",
    answer:
      "Because we have none, and we will not fabricate or borrow them. A logo is the easiest thing to assemble and the hardest thing for you to verify, and it says nothing about whether a team understands a sector's obligations or just learned its vocabulary. We would rather show you the two projects we have actually shipped, tell you exactly where their shape stops matching your sector, and let the depth of each guide stand where a portfolio we do not have would otherwise go.",
  },
  {
    question: "Do I have to be in one of these sectors to work with you, and what if mine isn't here?",
    answer:
      "These are the sectors we have written up in depth because they are the ones where getting the allocation wrong is most expensive, not the limit of what we build. The method is the same wherever you are: name whose obligation each duty is, build the machinery to meet yours, and decline the role or the badge that carries the risk. Tell us your sector and we will apply it, and if yours has a regulatory shape we genuinely should not be touching, we will say so on the first call rather than learn it on your budget.",
  },
  {
    question: "What does 'refuse the liability-bearing role' mean - aren't you just offloading risk onto me?",
    answer:
      "No. In most of these sectors there is a role - the business associate that holds the data, the money mover, the tenant-screening decision of record, the seller of travel, the licensing counterparty - that carries the legal liability, and it is usually the stickiest thing a vendor can grow into. The point is that the liability stays with you whatever a contract says; a vendor who offers to absorb it is selling a comfort that is not real. We build the machinery around that role and leave the role where the law already puts it, which keeps your risk from expanding onto a party you cannot audit.",
  },
  {
    question: "Why does every industry guide tell me when NOT to build, or to buy something off the shelf?",
    answer:
      "Because the most expensive thing we could sell you is a custom build you did not need. Every guide carries a section that names when a configured platform beats a bespoke one, and turns the work down when that is the honest answer. In a sector where we cannot point to a portfolio, talking you out of the wrong build is the only credential worth anything before the first right one ships.",
  },
  {
    question: "How does a project in a regulated sector actually start, and how do you price it?",
    answer:
      "It starts with a paid discovery - never a number invented before anyone has mapped where your data, your money and your obligations actually flow - which ends in a written scope and a fixed price, credited toward the build. There is no price table on an industry page on purpose: the sector does not set the price, the scope does, and published starting prices live on the pricing page. An NDA is available before you tell us anything, and if discovery finds the honest answer is a configured platform or a role we will not take, we say so before you spend.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* ItemList = all six indexed guides. Bare catalog.name (NOT a "development" suffix - that is a
          /technologies device, and it would emit the sector-development phrasing this hub must avoid). */}
      <JsonLd
        data={itemListSchema(
          deepIndustries.map((i) => ({ name: i.name, path: `/industries/${i.slug}` })),
        )}
      />
      <JsonLd data={webPageSchema({ path: PATH, name: "Software Development for Regulated Industries", dateModified: new Date().toISOString() })} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Sector expertise, in the open</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Software for regulated industries -{" "}
                <span className="gradient-text">and the domain expertise we won&apos;t fake.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Intention InfoService has real, published web builds - including a professional-training
                platform and a financial-services site - but not a client portfolio in every regulated
                sector below, and we will not fake the ones we lack. What a regulated vertical actually
                demands is not a logo wall anyway - it is knowing exactly which legal obligation binds
                you and which never touches us, building the machinery so you can meet the one that is
                yours, and declining the role or the badge that carries the liability. Each guide below does that for its sector in the open, including the parts
                that cost us the sale. What we&apos;ll actually do for you lives on the{" "}
                <Link href="/services" className="font-medium text-brand-500 hover:text-brand-600">services pages</Link>;
                what we build it with, and how we choose, lives on the{" "}
                <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">technologies pages</Link>.
                This page is who each obligation belongs to, and the roles we won&apos;t take.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Start a project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="/services" variant="ghost" size="lg">
                  See everything we do
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

      {/* THE THESIS. Checkable, deep-linked to each vertical's #when-not. */}
      <Section>
        <Container>
          <Reveal>
            <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
              <div className="relative z-[1]">
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Sector expertise is the easiest thing in this business to fake.{" "}
                  <span className="gradient-text">Here&apos;s how to tell ours is real.</span>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  We have real builds you can see on our work page, but not a client in every sector
                  below - no healthcare logos, no &quot;trusted by&quot;, no years-in-fintech to quote -
                  and we won&apos;t fake the ones we lack. A wall of marques is
                  the cheapest thing an agency can assemble and the hardest thing you can verify, so it
                  proves almost nothing about the one thing that matters here: whether a team
                  understands the sector, or just redecorated a generic pitch with its vocabulary. The
                  checkable tell is the opposite of a logo. Each guide below does things a firm faking
                  domain expertise would never publish, because every one costs the writer a sale. It
                  names which legal obligation binds you and which never touches us - which forfeits the
                  &quot;compliant vendor&quot; badge language competitors lean on. It builds the
                  machinery so you can meet the obligation that is genuinely yours, instead of asserting
                  an outcome no software can own. And it names the most profitable thing it could
                  dishonestly sell in that sector - the role that carries the liability, or a compliance
                  badge no software can wear - and turns it down. Below is one line from each guide you
                  can check for yourself.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {proofs.map((p) => (
                    <li key={p.slug} className="rounded-2xl border border-border bg-surface p-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        <Link
                          href={`/industries/${p.slug}#when-not`}
                          className="font-semibold text-brand-500 hover:text-brand-600"
                        >
                          {p.lead}
                        </Link>{" "}
                        {p.says}.
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  A firm that only rented the logos could not write any of this, because every line of
                  it hands back a sale we could have closed. We can, because in a sector where we have
                  no portfolio to wave, telling you exactly where our responsibility ends is the only
                  proof worth anything - and it is the proof a logo wall is built to avoid.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* The six guide cards - one grid, equal weight, no tier split (all six are deep). */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The guides"
              title="Each sector, written up in depth"
              sub="Each guide names the obligations that shape the build, the machinery we'd build so you can meet them, and the point at which we'd tell you to configure something off the shelf instead."
            />
          </Reveal>

          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deepIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                aria-label={guideAnchors[ind.slug]}
                className="card group relative flex flex-col p-7 glow-border"
              >
                <div className="relative z-[1] flex flex-1 flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand-500 transition-colors duration-300 group-hover:border-brand-400/50 group-hover:text-brand-600">
                    {industryIcons[ind.slug]}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{ind.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.tagline}</p>
                  <span className="mt-6 inline-flex items-start gap-1.5 text-sm font-semibold text-brand-500">
                    {guideAnchors[ind.slug]}
                    <IconArrow className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* The shared discipline + the no-logo-wall posture line */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The shared discipline"
              title="What every one of these guides does"
              sub="These sectors could not look more different, and the method underneath them is identical. It is the method, not a portfolio, that carries the expertise."
            />
          </Reveal>

          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {discipline.map((m) => (
              <div key={m.t} className="card flex flex-col p-5">
                <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                  {m.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{m.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </Reveal>

          {/* THE POSTURE LINE. Analog of the /technologies "no badge row" line. Claim-free: it makes
              no checkable claim about any specific programme, and defers every specific to the child. */}
          <Reveal className="mt-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-foreground">
                You won&apos;t find a client logo wall on this page
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                That is deliberate. We have no clients in these sectors, and we will not rent the logos,
                borrow a case study, or claim experience we do not have - the row of marques an
                &quot;industries we serve&quot; page usually leads with is the cheapest thing in this
                business to assemble and the hardest thing for you to verify. Where a real credential
                does exist in a sector - a certification, a partner programme, an accreditation - the
                guide for that sector names it precisely, says plainly that we do not hold it, and
                corrects the category errors competitors commit by implying they do. What we offer
                instead of a logo wall is on every guide: the obligation named correctly, the machinery
                to meet it, the liability role refused, code and data you own outright, and a paid
                discovery before any price.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Explore more */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Explore more" title="See how it all fits together" />
          </Reveal>
          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((h) => (
              <Link key={h.href} href={h.href} className="card group flex flex-col p-6">
                <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                  <IconBuilding className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground group-hover:text-brand-500">
                  {h.t}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                  {h.cta}
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Building for a regulated sector, answered" />
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
        title="Building something a regulated sector will judge?"
        subtitle="Tell us what you're building. We'll name whose obligation is whose, build the machinery you need to meet yours, and tell you the roles to keep with your counsel rather than hand to a vendor - including when the honest answer is to configure something off the shelf."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See what things start at", href: "/pricing" }}
      />
    </>
  );
}
