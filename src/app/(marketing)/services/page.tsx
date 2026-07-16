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
import { services } from "@/content/catalog";
import {
  IconArrow,
  IconCode,
  IconDevice,
  IconLayers,
  IconMegaphone,
  IconTrendingUp,
  IconPen,
  IconShield,
  IconSpark,
  IconCpu,
  IconTag,
  IconLock,
  IconBolt,
  IconGauge,
  IconBuilding,
} from "@/components/icons";

export const metadata: Metadata = pageMetadata("/services");

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

// Icons + descriptive (SEO) anchors per service, mirrored from the homepage bento
// so the hub reads with the same keyword-rich internal links, never a generic
// "Learn more".
const serviceIcons: Record<string, React.ReactNode> = {
  "web-design-development": <IconCode className="h-6 w-6" />,
  "mobile-app-development": <IconDevice className="h-6 w-6" />,
  "custom-software-development": <IconLayers className="h-6 w-6" />,
  "digital-marketing": <IconMegaphone className="h-6 w-6" />,
  "performance-marketing": <IconTrendingUp className="h-6 w-6" />,
  "ui-ux-design-services": <IconPen className="h-6 w-6" />,
  "website-maintenance-services": <IconShield className="h-6 w-6" />,
  "ai-development": <IconSpark className="h-6 w-6" />,
};

const serviceCtas: Record<string, string> = {
  "web-design-development": "Explore web development",
  "mobile-app-development": "Explore app development",
  "custom-software-development": "Explore custom software",
  "digital-marketing": "Explore digital marketing",
  "performance-marketing": "Explore performance marketing",
  "ui-ux-design-services": "Explore UI/UX design",
  "website-maintenance-services": "Explore care plans",
  "ai-development": "Explore AI development",
};

const heroChips = [
  { icon: <IconCpu className="h-4 w-4" />, label: "The right stack, not one stack" },
  { icon: <IconTag className="h-4 w-4" />, label: "Transparent, published pricing" },
  { icon: <IconLock className="h-4 w-4" />, label: "You own the code, IP & data" },
];

const pillars = [
  { icon: <IconLayers className="h-5 w-5" />, t: "Full-service, under one roof", d: "Design, build, market and maintain from one senior team - no stitching together five different vendors and hoping they talk to each other." },
  { icon: <IconCpu className="h-5 w-5" />, t: "The right stack, not one stack", d: "We're stack-agnostic - WordPress to Next.js, Laravel to React Native. We pick the right tool for your project, not the one tool we happen to sell." },
  { icon: <IconTag className="h-5 w-5" />, t: "Transparent, published pricing", d: "Clear scope and published starting prices, with a fixed quote before any build. No quote walls, no open-ended hourly surprises." },
  { icon: <IconLock className="h-5 w-5" />, t: "You own everything", d: "The code, the IP and your data are yours, with no lock-in. We build on mainstream, open tools so any team can take it forward." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Senior people, direct", d: "A small, senior team since 2016. You talk to the people who actually do the work - no account-manager telephone game." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Proof you can verify", d: "Real performance you can measure, an honest process, and no fabricated logos, stats or reviews. We'd rather show you than tell you." },
];

const hubs = [
  { t: "Industries", d: "How we build for EdTech, healthcare, fintech, real estate, travel and media.", href: "/industries", cta: "Browse industries" },
  // The /technologies hub owns "what we build it with, how we choose it, and when we'd tell you
  // not to". This card is the hand-off /services promises in its own FAQ, so the CTA names that
  // job rather than just pointing at a list.
  { t: "Technologies", d: "The stacks we build with, and how we choose one - every in-depth guide says when not to use it.", href: "/technologies", cta: "See how we choose your stack" },
  { t: "Pricing", d: "Published starting prices for websites, apps and more - no quote walls.", href: "/pricing", cta: "See pricing" },
];

const faqs = [
  {
    question: "What services does Intention InfoService offer?",
    answer:
      "We're a full-service web, app and software company. We offer web design and development, mobile app development, custom software development, UI/UX design and branding, organic digital marketing, performance (paid) marketing, website maintenance, and applied AI development - so we can design, build, market and maintain your product under one roof.",
  },
  {
    question: "Do you work with startups, or enterprises too?",
    answer:
      "Both, and everyone in between. We build for early-stage startups, growing SMBs and established enterprises worldwide. The scope scales to the project, but the senior attention, the transparent pricing and the code you own stay the same at every size.",
  },
  {
    question: "What technology stacks do you build with?",
    answer:
      "We're stack-agnostic and choose the right tool for the job - WordPress, Shopify, Laravel, Django, Java, Node, Next.js, React, React Native, Flutter and more. The stack serves your project, not the other way around, and specific-stack questions route to our technologies pages.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Most services have transparent, published starting prices, so you can see the number before you talk to us. Bespoke work like custom software and AI development is scoped to your requirement and quoted up front, with a fixed price agreed before any build begins - never a quote wall.",
  },
  {
    question: "Can one team really handle design, build and marketing?",
    answer:
      "Yes - that's the whole point of being full-service. The same senior team can design it, build it, and run the marketing, so nothing gets lost handing off between vendors and the SEO and performance foundations are right from day one instead of retrofitted later.",
  },
  {
    question: "Where is Intention InfoService based, and do you work worldwide?",
    answer:
      "We're a registered company, incorporated in 2016 and headquartered in Maharashtra, India, and we work with clients across the US, UK, UAE, Europe and India. Collaboration is mostly remote, with clear timezone overlap and communication practices so distance is never a problem.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={webPageSchema({ path: "/services", name: "Web, App, Software & AI Services" })} />
      <JsonLd
        data={itemListSchema(
          services.map((s) => ({ name: s.name, path: `/services/${s.slug}` })),
        )}
      />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero / intro */}
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 max-w-3xl">
              <Pill dot>Design, build, market &amp; maintain</Pill>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Full-service web, app and{" "}
                <span className="gradient-text">software development.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Intention InfoService designs, builds, markets and maintains digital products on the
                right stack for the job - for startups, growing SMBs and enterprises across the US,
                UK, UAE, Europe and India, at transparent, published fixed prices. Eight focused
                services, one senior team, and code and data you fully own.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Start a project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="/pricing" variant="ghost" size="lg">
                  See pricing
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

      {/* Service grid */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Eight services, one senior team"
              sub="Each is a focused, dedicated practice - click through for the scope, process and pricing behind it."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                aria-label={service.name}
                className="card group relative flex flex-col p-7 glow-border"
              >
                <div className="relative z-[1] flex flex-1 flex-col">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand-500 transition-colors duration-300 group-hover:border-brand-400/50 group-hover:text-brand-600">
                    {serviceIcons[service.slug]}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.tagline}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-400">
                    {serviceCtas[service.slug]}
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Why teams choose us */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why teams choose us"
              title="A full-service partner, not a one-trick vendor"
              sub="The same principles run through all eight services - here's what you get whichever one you start with."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
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

      {/* Explore more (hub-and-spoke cross-links) */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Explore more"
              title="See how it all fits together"
            />
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
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-400">
                  {h.cta}
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Our services, answered" />
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
        title="Not sure which service you need?"
        subtitle="Tell us what you're trying to build or grow, and we'll point you to the right service - and an honest fixed price. No sales call required."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
