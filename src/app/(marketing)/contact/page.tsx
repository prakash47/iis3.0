import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, contactPageSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import {
  IconArrow,
  IconMail,
  IconPhone,
  IconWhatsApp,
  IconChat,
  IconClock,
  IconTag,
  IconShield,
  IconLock,
  IconPin,
} from "@/components/icons";

export const metadata: Metadata = pageMetadata("/contact");

const PATH = "/contact";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: PATH },
];

/**
 * THE /contact PAGE - the primary conversion destination (every CTA across the site routes here).
 * Server component; the form is an isolated "use client" island (ContactForm) that POSTs to the
 * /api/contact SMTP route (Google Workspace Gmail). Redesigned 2026-07-15 for conversion + polish.
 *
 * HARD LOCKS: senior-people MECHANISM (never "talk to the founder"); zero fabricated proof near the
 * form (no testimonials/logos/"trusted by"/ratings/counts/fake urgency); the only reply commitment
 * is the honest "one business day"; all NAP reads from siteConfig, byte-identical to the Organization
 * schema; schema is breadcrumb + ContactPage(about -> Org @id) - NO faqSchema (the FAQ is plain
 * <details>), NO duplicated contactPoint/PostalAddress, NEVER Person/Review/Rating; the booking
 * channel renders only if a real bookingUrl exists.
 */

// Scannable, convincing trust points shown beside the form (a checklist, not decoration).
const trust = [
  { icon: <IconTag className="h-4 w-4" />, t: "Published fixed prices", d: "See what a build costs before you send this - no quote wall." },
  { icon: <IconShield className="h-4 w-4" />, t: "Senior people, not a sales rep", d: "You talk to the people who would actually do the work." },
  { icon: <IconLock className="h-4 w-4" />, t: "You own the code, IP and data", d: "No lock-in, no hostage handoff - it is yours." },
  { icon: <IconClock className="h-4 w-4" />, t: "A reply within one business day", d: "A real person reads every message. No sales funnel." },
];

const afterSend = [
  { icon: <IconMail className="h-5 w-5" />, t: "A real person reads it", d: "Your message goes to the senior people who would do the work, not a sales queue and not an auto-reply that never follows up." },
  { icon: <IconClock className="h-5 w-5" />, t: "We reply within one business day", d: "Usually with a couple of clarifying questions and, where we can, an honest ballpark against our published prices." },
  { icon: <IconTag className="h-5 w-5" />, t: "You get a fixed-price scope", d: "If it is a fit, a clear scope and a fixed price that does not drift once we begin. If it is not, we will say so and point you somewhere better." },
];

const { contact } = siteConfig;
const whatsappHref = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`;
const addressLine = `${contact.address.streetAddress}, ${contact.address.addressLocality}, ${contact.address.addressRegion} ${contact.address.postalCode}, India`;

// All read from siteConfig, byte-identical to the Organization schema NAP. Phone shows the human
// display format but links the machine format used by the schema `telephone`.
const channels = [
  { icon: <IconMail className="h-5 w-5" />, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: <IconPhone className="h-5 w-5" />, label: "Phone", value: contact.phoneDisplay, href: `tel:${contact.phone}` },
  { icon: <IconWhatsApp className="h-5 w-5" />, label: "WhatsApp", value: "Message us on WhatsApp", href: whatsappHref },
  { icon: <IconPin className="h-5 w-5" />, label: "Based in", value: addressLine, href: null as string | null },
  ...(contact.bookingUrl
    ? [{ icon: <IconChat className="h-5 w-5" />, label: "Book a call", value: "Pick a time that suits you", href: contact.bookingUrl }]
    : []),
];

const faqs = [
  {
    q: "How soon will you reply?",
    a: "We reply within one business day. A real person reads every message - the senior people who would do the work, not an auto-responder that never follows up - so the reply comes from someone who can actually talk about your project.",
  },
  {
    q: "Do I need to know my budget to contact you?",
    a: "No. \"Not sure yet\" is a real option on the form and it costs you nothing to pick it. Because our prices are published, you can also get a sense of the range yourself before you write. A rough budget helps us scope faster, but it is never a gate to getting in touch.",
  },
  {
    q: "Can I see your prices before I contact you?",
    a: "Yes, and we would rather you did. Our fixed prices are published on the pricing and service pages, so you can see roughly what a build costs before you send a single message. There is no quote wall and no \"contact us for pricing\" - the number is out in the open first.",
  },
  {
    q: "What happens after I send the form?",
    a: "It goes straight to the senior people who would do the work, not a sales queue. You will hear back within one business day, usually with a few questions, then a short call or thread to pin down scope. If it is a fit, that becomes a fixed-price proposal that does not drift once we start.",
  },
  {
    q: "Do I have to get on a sales call?",
    a: "No. You can get a straight answer and a fixed price without sitting through a pitch. If a quick call is the fastest way to scope something, we will suggest one, but it is never a hurdle you have to clear just to hear back from us.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={contactPageSchema({
          path: PATH,
          name: "Contact Intention InfoService",
        })}
      />

      {/* Hero + form (the conversion event, above the fold) */}
      <div className="aurora">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Section className="relative z-[1] pt-6 sm:pt-8">
          <Container>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-14">
              {/* Left rail: value prop + trust checklist */}
              <div className="lg:pt-4">
                <Pill dot>Contact Intention InfoService</Pill>
                <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                  Start a project,{" "}
                  <span className="gradient-text">with the people who build it.</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Tell us what you&apos;re building and you&apos;ll get a clear, fixed-price scope from
                  the senior people who would do the work - not a sales rep, and no quote wall to get a
                  number.
                </p>

                <ul className="mt-8 space-y-3.5">
                  {trust.map((t) => (
                    <li key={t.t} className="flex items-start gap-3.5">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 text-brand-500">
                        {t.icon}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">{t.t}</span>
                        <span className="block text-sm leading-relaxed text-muted-foreground">{t.d}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Prefer another channel? Email, phone and WhatsApp all reach the same people.
                </div>
              </div>

              {/* Right: the form (the focal point) */}
              <div className="glow-border relative rounded-3xl border border-border bg-surface shadow-xl shadow-black/5 dark:shadow-black/30">
                <div aria-hidden="true" className="h-1.5 rounded-t-3xl bg-[linear-gradient(90deg,var(--grad-from),var(--grad-to))]" />
                <div className="relative z-[1] p-6 sm:p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      {/* What happens after you send */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="After you send"
              title="What happens after you send this"
              sub="No black box, no sales funnel. Here is exactly what follows, so hitting send is a low-risk move."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-3">
            {afterSend.map((s, i) => (
              <div key={s.t} className="card relative flex flex-col p-5">
                <span aria-hidden="true" className="absolute right-5 top-5 font-display text-4xl font-extrabold text-border/70">
                  {i + 1}
                </span>
                <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                  {s.icon}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Multi-channel */}
      <Section className="bg-muted/50">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="More ways to reach us"
              title="Prefer to talk first?"
              sub="The form is the fastest way to get a scoped answer, but these all reach the same people. Use whichever suits you."
            />
          </Reveal>
          <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((c) => {
              const inner = (
                <>
                  <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500 transition-colors group-hover:border-brand-400/50 group-hover:text-brand-600">
                    {c.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 text-sm font-medium text-foreground">{c.value}</div>
                  </div>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="card group flex items-start gap-4 p-5 hover:border-brand-400/50">
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="card flex items-start gap-4 p-5">
                  {inner}
                </div>
              );
            })}
            <div className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                <IconClock className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Hours</div>
                <div className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  We overlap with US, UK, UAE, EU and India working hours.
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Contact FAQ - plain details, no FAQPage schema (keeps the earning FAQPage nodes concentrated) */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Before you send" title="Questions people ask before they get in touch" />
          </Reveal>
          <Reveal className="mt-9">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          {/* Soft, outward-routing close (never a CtaBand primary back to /contact) */}
          <Reveal className="mt-10">
            <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
              <div className="relative z-[1] flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">Prefer to look before you talk?</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    See exactly what things cost, or the real projects we go deep on.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href="/pricing">
                    See published prices
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                  <Button href="/work" variant="outline">
                    See our work
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
