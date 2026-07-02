import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { services, leadIndustries } from "@/content/catalog";
import {
  IconCode,
  IconDevice,
  IconMegaphone,
  IconPen,
  IconShield,
  IconSpark,
} from "@/components/icons";

export const metadata: Metadata = pageMetadata("/");

const trustSignals = [
  "Incorporated 2016",
  "Founder-led delivery",
  "Next.js / React specialists",
  "Transparent fixed pricing",
];

const techMarquee = [
  "Next.js", "React", "TypeScript", "Node.js", "React Native", "Flutter",
  "Shopify", "WordPress", "Laravel", "Django", "Sanity", "Strapi",
  "Contentful", "Astro", "Tailwind CSS", "SwiftUI", "Kotlin", "AI / RAG",
];

const serviceIcons: Record<string, React.ReactNode> = {
  "web-design-development": <IconCode className="h-6 w-6" />,
  "mobile-app-development": <IconDevice className="h-6 w-6" />,
  "digital-marketing": <IconMegaphone className="h-6 w-6" />,
  "ui-ux-branding": <IconPen className="h-6 w-6" />,
  "website-maintenance": <IconShield className="h-6 w-6" />,
  "ai-solutions": <IconSpark className="h-6 w-6" />,
};

const pillars = [
  {
    title: "Speed without compromise",
    body: "Weeks, not months. An AI-augmented, founder-led workflow means startup-grade timelines with agency-grade craft.",
  },
  {
    title: "Performance you can measure",
    body: "Every build ships with real Core Web Vitals and Lighthouse scores. We publish our numbers - you don't take our word for it.",
  },
  {
    title: "Radical transparency",
    body: "Named prices, named people, honest scope. No opaque 'get-a-quote' walls, no inflated vanity metrics.",
  },
  {
    title: "Modern, future-ready stack",
    body: "Built on today's stack and optimized for how people search now - classic SEO plus AI-search (AEO/GEO) readiness.",
  },
];

const process = [
  { step: "01", title: "Discovery", body: "A short paid discovery to lock scope, goals and a fixed price." },
  { step: "02", title: "Design", body: "Conversion-focused UI/UX with your brand, reviewed together." },
  { step: "03", title: "Build", body: "Fast, accessible, SEO-ready engineering on a modern stack." },
  { step: "04", title: "Launch", body: "Performance-tuned, schema-complete, measured against real metrics." },
  { step: "05", title: "Care", body: "Optional care plans for hosting, security, and ongoing growth." },
];

const faqs = [
  {
    question: "What does Intention InfoService do?",
    answer:
      "We are a founder-led web and app development studio, incorporated in 2016. We build custom websites, web apps and SaaS, e-commerce stores, and mobile apps for startups and SMBs, plus UI/UX, digital marketing and AI solutions.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "We publish transparent, fixed 'starting-at' prices instead of hiding behind a quote form. A startup launch site typically starts in the low four figures (USD), with larger web apps and e-commerce builds priced by scope. You always see a fixed price before we start.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most marketing sites ship in 2-6 weeks and web-app MVPs in 6-10 weeks, using fixed sprints with weekly demos so you always know where things stand.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We serve startups and SMBs globally - India, the US, UK, UAE and Europe - with overlapping working hours and delivery in your currency and timezone.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We specialize in Next.js, React and headless CMS for the web; React Native and Flutter for mobile; and Node.js, Laravel and Django on the backend - chosen per project for performance and maintainability.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pb-14 pt-16 sm:pt-24">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-muted-foreground">
                    <span aria-hidden="true" className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                    </span>
                    Founder-led studio · since 2016
                  </span>
                  <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
                    We build websites &amp; apps that feel{" "}
                    <span className="gradient-text">this fast.</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    US-quality Next.js &amp; React engineering at startup-friendly, transparent
                    fixed prices - designed, built and shipped in weeks by a real team
                    that&apos;s been doing this since 2016.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button href="/contact" size="lg">
                      Start a Project
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Button>
                    <Button href="/work" variant="outline" size="lg">
                      See Our Work
                    </Button>
                  </div>
                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {trustSignals.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[image:linear-gradient(135deg,var(--grad-from),var(--grad-to))]" />
                        {s}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal className="lg:justify-self-end">
                <HeroVisual />
              </Reveal>
            </div>
          </Container>

          {/* Tech marquee */}
          <div className="mt-16 sm:mt-20">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              The stack we ship with
            </p>
            <Marquee items={techMarquee} />
          </div>
        </Section>
      </div>

      {/* ── Services (bento) ─────────────────────────────────────────────── */}
      <Section className="bg-muted/60">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={<>Everything you need to <span className="gradient-text">launch &amp; grow</span></>}
              sub="End-to-end digital delivery - from a fast marketing site to a full product and the marketing engine behind it."
            />
          </Reveal>
          <Reveal group className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`card group relative p-7 ${i === 0 ? "glow-border" : ""}`}
              >
                <div className="relative z-[1]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand-500 transition-colors group-hover:border-brand-400/50">
                    {serviceIcons[service.slug]}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                    Explore
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* ── Why us ───────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why teams pick us"
              title={<>The premium-agency bar, <span className="gradient-text">without the premium-agency bill</span></>}
            />
          </Reveal>
          <Reveal group className="mt-12 grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div key={p.title} className={`card p-7 ${i === 0 ? "glow-border" : ""}`}>
                <div className="relative z-[1]">
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* ── Process (statement band) ─────────────────────────────────────── */}
      <section className="aurora bg-band py-20 sm:py-24">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Container className="relative z-[1]">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300">
              How we work
            </span>
            <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
              A fixed-scope process with <span className="gradient-text">zero surprises</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Weekly demos, clear milestones, and a fixed price agreed before we start.
            </p>
          </Reveal>
          <Reveal group className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <div className="font-display text-3xl font-extrabold text-transparent [background:linear-gradient(135deg,var(--grad-from),var(--grad-to))] [background-clip:text] [-webkit-background-clip:text]">
                  {p.step}
                </div>
                <div aria-hidden="true" className="mt-4 h-px w-full bg-gradient-to-r from-white/25 to-transparent" />
                <div className="mt-4 font-semibold text-white">{p.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <SectionHeading
                eyebrow="Industries"
                title="Built for your vertical"
                sub="Deep, focused expertise where modern engineering moves the needle."
              />
            </Reveal>
            <Link href="/industries" className="text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600">
              All industries →
            </Link>
          </div>
          <Reveal group className="mt-9 flex flex-wrap gap-3">
            {leadIndustries.map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/60"
              >
                {i.name}
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* ── Work teaser ──────────────────────────────────────────────────── */}
      <Section className="bg-muted/60">
        <Container>
          <Reveal>
            <div className="glow-border card relative overflow-hidden p-9 sm:p-14">
              <div aria-hidden="true" className="bg-dots absolute inset-0" />
              <div className="relative z-[1] max-w-2xl">
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  We let our builds <span className="gradient-text">do the talking.</span>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Instead of a wall of logos, we go deep on a few real projects - with the
                  stack, the timeline, and the measurable results. Starting with the site
                  you&apos;re on right now.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/work">See our work</Button>
                  <Button href="/pricing" variant="outline">View pricing</Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
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

      <CtaBand secondary={{ label: "See pricing", href: "/pricing" }} />
    </>
  );
}
