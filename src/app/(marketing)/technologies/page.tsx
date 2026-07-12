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
import { deepTechnologies } from "@/content/catalog";
import {
  IconArrow,
  IconLayout,
  IconServer,
  IconPen,
  IconTag,
  IconDevice,
  IconCheck,
  IconLock,
  IconSearch,
  IconCpu,
  IconBuilding,
  IconShield,
} from "@/components/icons";

export const metadata: Metadata = pageMetadata("/technologies");

const PATH = "/technologies";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: PATH },
];

/**
 * THE /technologies HUB.
 *
 * WHAT THIS PAGE IS. Not a money page - there is no commercial head term that honestly belongs
 * here. Single-framework commercial intent ("next.js development company") is owned by the 21
 * spokes; "hire {tech} developers" is staff-augmentation intent for a service we do not sell.
 * So this hub is three things: an entity asset, the internal-link distributor into the 21 spokes,
 * and an answer asset for the stack-selection question cluster. Do not measure it on head terms.
 *
 * THE BOUNDARY. /services already publishes the full stack-agnostic sentence and explicitly hands
 * stack curiosity here ("specific-stack questions route to our technologies pages"). So this page
 * must NOT re-pitch the services or re-state that sentence - the site already carries three
 * near-duplicate versions of it (homepage FAQ x2, /services FAQ). This hub owns what /services
 * defers: what we build with, HOW we choose it, and when we'd tell you not to.
 *
 * THE TIER SPLIT WAS THE HONESTY ACT - AND IT IS NOW COMPLETE. The old hub rendered all 21 as
 * identical equal-weight cards, presenting paragraph-deep stubs as equals of the Next.js guide (the
 * manufactured-breadth pattern the strategy forbids). The fix was a tier split: in-depth guides vs
 * "also in our toolkit" stubs. As of 2026-07-12 all 21 technologies are in-depth guides, so the
 * toolkit tier is retired and templateTechnologies is empty. STANDING RULE if a new deep:false tech
 * is ever added: label it by WHAT IT IS, never "coming soon" / "write-up in progress" / "not written
 * yet" - backlog language asserts an unfinished site and hands a competitor a caption; noindex it
 * (techSeoOverrides) but keep it linked and crawlable so the directive is discovered.
 *
 * THE THESIS IS VERIFIED, NOT ASSERTED. All 21 bespoke pages genuinely carry a block that names
 * when the technology is the wrong choice and links the reader somewhere else. Verified per page.
 * The `#when-not` fragments below only work because that block carries id="when-not" on all
 * 21 - do not remove those ids without removing these links, or the page's one checkable promise
 * becomes a dead affordance.
 *
 * SCOPE DISCIPLINE. The thesis says "our in-depth guides"; that is now true of every technology.
 * Still: no visible counts ("21 technologies"), no prices, no version numbers, no stats. And no
 * per-technology delivery claim: we have two real projects, both web, and zero mobile apps.
 */

const CATEGORIES = [
  { key: "frontend", label: "Front-end", icon: <IconLayout className="h-5 w-5" />, blurb: "What the user actually touches." },
  { key: "backend", label: "Back-end", icon: <IconServer className="h-5 w-5" />, blurb: "The server, the data, the logic." },
  { key: "cms", label: "CMS & content", icon: <IconPen className="h-5 w-5" />, blurb: "Where your team edits the words." },
  { key: "ecommerce", label: "E-commerce", icon: <IconTag className="h-5 w-5" />, blurb: "Catalog, cart, checkout, orders." },
  { key: "mobile", label: "Mobile", icon: <IconDevice className="h-5 w-5" />, blurb: "iOS and Android, in your pocket." },
] as const;

// Individually varied, fit-framed anchors. Deliberately NOT the stamped "Explore {Name}
// development" pattern used by WebDevStack, CustomStack and MobileStack, and not the bare labels
// used by MobileDecision, the mega-menu and the footer. Each says what the guide will tell you.
// Node.js and Laravel are worded as fit ("where it fits") rather than delivery ("what we build"),
// because a delivery phrasing invites a portfolio inference we cannot support.
const guideAnchors: Record<string, string> = {
  nextjs: "See where Next.js is the right call, and where it isn't",
  react: "When a React front end fits your product",
  angular: "Where Angular earns its weight in enterprise apps",
  astro: "When Astro is the right call for a content site - and when it isn't",
  nodejs: "Where a Node.js backend fits",
  python: "Where Python fits - APIs, data and AI work",
  laravel: "When Laravel is the pragmatic backend choice",
  php: "When raw or legacy PHP is the right call - and when it isn't",
  django: "Where Django's batteries-included model wins",
  "java-spring-boot": "When enterprise scale calls for Java and Spring Boot",
  wordpress: "When WordPress is the honest choice for your site",
  strapi: "When owning the CMS software itself is worth self-hosting Strapi",
  sanity: "When Sanity's structured content is the right backend - and when it isn't",
  contentful: "When Contentful's enterprise governance is worth it - and when it's overkill",
  drupal: "When Drupal's native structure is worth it - and when it's overkill",
  shopify: "Where Shopify fits your store, and its limits",
  woocommerce: "When to own your store outright with WooCommerce",
  "react-native": "When React Native ships iOS and Android together",
  flutter: "Where Flutter's single codebase pays off",
  swiftui: "When fully native iOS with SwiftUI is worth it",
  kotlin: "When fully native Android with Kotlin is worth it",
};

const heroChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "Stack chosen in discovery, in writing" },
  { icon: <IconLock className="h-4 w-4" />, label: "You own the code and the data" },
  { icon: <IconSearch className="h-4 w-4" />, label: "Every guide says when not to use it" },
];

// Four checkable examples, each linking straight to that guide's anti-recommendation block.
// Every one of these routes the reader toward a DIFFERENT technology - which is what makes the
// claim a costly signal rather than a slogan. Verified against the live copy on each page.
const proofs = [
  { tech: "React", slug: "react", says: "sends anything that has to rank in Google away to Next.js, because a plain React app ships a near-empty HTML shell" },
  { tech: "Shopify", slug: "shopify", says: "sends content-led stores to WooCommerce, and tells you when you don't need Shopify Plus" },
  { tech: "WooCommerce", slug: "woocommerce", says: "sends serious, product-first stores straight back to Shopify, and names the maintenance bill you'd be taking on" },
  { tech: "Flutter", slug: "flutter", says: "steers you off Flutter entirely for a website that has to be found on Google - on a site whose whole brand is search" },
];

const method = [
  { icon: <IconSearch className="h-5 w-5" />, t: "What are you actually building?", d: "A content site, a store, a dashboard, an app and a platform are five different problems. The shape of the thing decides the shortlist long before anyone's preference does." },
  { icon: <IconBuilding className="h-5 w-5" />, t: "Who has to live with it?", d: "Who edits the content, who runs the deploys, who you'll hire next year. A stack your team cannot staff is the wrong stack, however elegant it is." },
  { icon: <IconCpu className="h-5 w-5" />, t: "What does it have to do that's hard?", d: "Search visibility, offline, real-time, heavy data, strict compliance, deep native hardware. One genuinely hard requirement usually eliminates most of the shortlist by itself." },
  { icon: <IconShield className="h-5 w-5" />, t: "What happens when we're gone?", d: "We build on mainstream, open tools any competent team can pick up, and you own the code and the data. No stack goes in that only we can maintain." },
];

const hubs = [
  { t: "Services", d: "What we'll actually do - design, build, market and maintain, across eight focused practices.", href: "/services", cta: "See what we'll build" },
  { t: "Pricing", d: "Published starting prices for websites, apps and more. The stack doesn't set the price, the scope does.", href: "/pricing", cta: "See published pricing" },
  { t: "Industries", d: "How we build for EdTech, healthcare, fintech, real estate, travel and media.", href: "/industries", cta: "Browse industries" },
  { t: "Our work", d: "The projects we've actually shipped, described honestly and never dressed up as something else.", href: "/work", cta: "See our work" },
];

// Six HUB questions. Deliberately not re-answering "what stacks do you build with?" (owned by the
// /services FAQ) or any per-technology question (owned by the 21 spoke FAQs). Plain strings - the
// same array feeds FAQPage JSON-LD, so links would leak into the schema. No prices, no versions.
const faqs = [
  {
    question: "How do you choose which technology to build on?",
    answer:
      "In discovery, before anything is designed, and we put the recommendation in writing. We start from what you're building, who has to live with it after launch, and the one or two requirements that are genuinely hard - search visibility, offline, real-time, compliance, deep native hardware. That usually eliminates most of the shortlist on its own. Then we recommend a stack, explain what it costs you as well as what it buys you, and you approve it before a line of code is written.",
  },
  {
    question: "You say you're stack-agnostic. How would I actually check that?",
    answer:
      "Read the guides. Every in-depth technology guide on this site has a section that names when that technology is the wrong choice and sends you to a different one. Our React guide routes search-critical work away to Next.js. Our Shopify guide sends content-led stores to WooCommerce, and our WooCommerce guide sends product-first stores back to Shopify. Our Flutter guide tells you not to build a search-critical website in Flutter at all. An agency with one house stack cannot afford to write any of that, which is the point.",
  },
  {
    question: "Do you do staff augmentation, or hire out developers by the month?",
    answer:
      "No. We don't rent out developer seats, and we don't sell dedicated-team retainers. We take on scoped projects at a fixed price agreed before the build, delivered by the senior people who actually do the work, with the code and the IP transferring to you. If what you need is bodies to add to your own team, we're honestly not the right firm, and we'll tell you that on the first call rather than take the engagement.",
  },
  {
    question: "Can you take over a codebase somebody else built?",
    answer:
      "Often, and the first step is always an audit rather than a quote. We look at what the application actually does, the state of the dependencies, whether it can still be upgraded, and how much of the original intent survives in the code. Sometimes the honest answer is that a rescue is cheaper than a rewrite, and sometimes it is the opposite, and we would rather tell you which before you commit. We work in mainstream, open technologies precisely so that inheriting someone else's work is possible.",
  },
  {
    question: "What if the technology I use isn't listed on this page?",
    answer:
      "Tell us anyway. This page lists the technologies we work with regularly, not the limit of what we'll look at. If your stack is close to something here - another PHP framework, another headless CMS, another JavaScript runtime - the principles usually carry across and we'll say honestly how much of it is familiar ground. And if it genuinely isn't something we should be touching, we'll tell you that instead of learning it on your budget.",
  },
  {
    question: "Does the technology change the price?",
    answer:
      "Almost never. The scope sets the price - how many pages or screens, how much custom logic, how many integrations, how much design. A brochure site costs about the same whether it lands on WordPress or a custom build, because the work is the same size. Our starting prices are published on the pricing page and on each service page, and you get a fixed quote before any build begins, whatever stack we land on.",
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {/* ItemList = all 21 in-depth guides (every technology is now indexed and bespoke; there are no
          noindexed stubs left to exclude). */}
      <JsonLd
        data={itemListSchema(
          deepTechnologies.map((t) => ({ name: `${t.name} development`, path: `/technologies/${t.slug}` })),
        )}
      />
      <JsonLd data={webPageSchema({ path: PATH, name: "Technologies & Tech Stacks We Build With", dateModified: new Date().toISOString() })} />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>The right tool for the job</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Technologies we build with -{" "}
                <span className="gradient-text">and when we&apos;d steer you elsewhere.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Intention InfoService is not a one-stack shop. We build front-ends, back-ends,
                content platforms, stores and mobile apps on whichever technology genuinely fits the
                problem, and we decide that with you in discovery rather than before we&apos;ve met.
                This page is what we build with and how we choose it. What we&apos;ll actually do for
                you lives on the services pages.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Start a project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="/services" variant="ghost" size="lg">
                  See what we&apos;ll build
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

      {/* THE THESIS. Scoped to the guides, linked straight to the block that proves it. */}
      <Section>
        <Container>
          <Reveal>
            <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
              <div className="relative z-[1]">
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Stack-agnostic is easy to claim.{" "}
                  <span className="gradient-text">Here&apos;s how to check ours.</span>
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  Every agency says it picks the right tool for the job. It costs nothing to say, and
                  almost nobody publishes anything that could contradict it. So here is ours in a form
                  you can audit in about a minute. Each of our in-depth guides below has a section
                  that names when that technology is the wrong choice - and sends you to a different
                  one. Not a hedge at the bottom of the page. A named alternative, linked, on the page
                  that is supposed to be selling the thing.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {proofs.map((p) => (
                    <li key={p.slug} className="rounded-2xl border border-border bg-surface p-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        <Link
                          href={`/technologies/${p.slug}#when-not`}
                          className="font-semibold text-brand-500 hover:text-brand-600"
                        >
                          Our {p.tech} guide
                        </Link>{" "}
                        {p.says}.
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  A firm with one house stack cannot afford to write any of that. We can, because the
                  recommendation is the product - and the fastest way to lose your trust would be to
                  sell you the only thing we knew how to build.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* The 21 in-depth guides, grouped by what you're building */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="In-depth guides"
              title="Pick the technology by what you're building"
              sub="We publish a full guide for the stacks we're asked about most - what each one is genuinely good at, how we build with it, what it costs, and the point at which we'd tell you to use something else."
            />
          </Reveal>

          <div className="mt-12 space-y-12">
            {CATEGORIES.map((cat) => {
              const items = deepTechnologies.filter((t) => t.category === cat.key);
              if (!items.length) return null;
              return (
                <Reveal key={cat.key}>
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-brand-500">
                      {cat.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{cat.label}</h3>
                      <p className="text-sm text-muted-foreground">{cat.blurb}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/technologies/${t.slug}`}
                        aria-label={`${t.name} development`}
                        className="card group flex flex-col p-5"
                      >
                        <h4 className="font-display text-base font-semibold text-foreground group-hover:text-brand-500">
                          {t.name}
                        </h4>
                        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {t.tagline}
                        </p>
                        <span className="mt-5 inline-flex items-start gap-1.5 text-sm font-semibold text-brand-500">
                          {guideAnchors[t.slug]}
                          <IconArrow className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* The old "Also in our toolkit" tier (thin, noindexed template stubs) is GONE: with drupal
              bespoke, all 21 technologies are in-depth guides and templateTechnologies is empty, so there
              is nothing to render here. Re-add a toolkit tier only if a new deep:false technology appears. */}
        </Container>
      </Section>

      {/* How we choose, and the no-badges posture */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we choose"
              title="Four questions, asked before anyone writes code"
              sub="The stack is a consequence of the answers, not a preference we arrive with. We do this in discovery, we put it in writing, and you approve it before the build."
            />
          </Reveal>

          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((m) => (
              <div key={m.t} className="card flex flex-col p-5">
                <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                  {m.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{m.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </Reveal>

          {/* Mobile: DEFER the call, never adjudicate it here. Cross-platform vs native vs a web
              app is the mobile service page's signature decision, and RnCompare / FlutterCompare
              deliberately refuse to stage a two-horse race. Kotlin Multiplatform is named on the
              custom-software service detail, so nothing here may imply only two options exist. */}
          <Reveal className="mt-6">
            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Two calls we don&apos;t make on this page.</span>{" "}
                Whether you should build an app at all - and whether it should be cross-platform,
                fully native, or an install-free web app - is a budget and strategy decision before it
                is a technical one, and it belongs on{" "}
                <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                  our mobile app development service, where we make that call with you in writing
                </Link>
                . And which of these stacks your project needs is not something a page can decide for
                you. That is what discovery is for.
              </p>
            </div>
          </Reveal>

          {/* THE POSTURE LINE. Deliberately NOT a consolidated disclaim. Roughly twenty distinct
              partner and certification programmes touch these technologies, and they are all
              different: some are live and applied-to, some do not exist at all, some were renamed,
              and some use a word their owner refuses ("partner"). A single sweeping "we hold no
              partner badges or certifications" would commit a category error across all of them at
              once, is refutable (Google and Meta both issue individual course certificates), and
              would contradict our own Laravel page, which acknowledges the Laravel Partner
              programme exists. So the hub takes a posture and defers every specific to the spoke
              that already handles it under the four-branch rule. */}
          <Reveal className="mt-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-foreground">
                You won&apos;t find a badge row on this page
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                That&apos;s deliberate. Most of the badges agencies display are directories you can
                apply to, or labels that mean rather less than they look like they mean - and on at
                least one of them, the technology&apos;s own site says plainly that being listed
                doesn&apos;t make a firm a partner. So where a specific programme is worth addressing,
                the guide for that technology says plainly whether we&apos;re in it, and what the
                programme actually is. We&apos;d rather be the firm you can verify than the firm with
                the most logos. What we do commit to is on every guide: published fixed prices, a
                stack recommended in writing before the build, mainstream open tools any competent
                team can pick up, and the code and data yours to keep.
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
            <SectionHeading eyebrow="FAQ" title="Choosing a stack, answered" />
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
        title="Not sure which stack you need?"
        subtitle="Tell us what you're building. We'll recommend the technology in writing during discovery - including the times the honest answer is a stack you didn't come here for, or no app at all."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See published pricing", href: "/pricing" }}
      />
    </>
  );
}
