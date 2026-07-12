import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

const scope = [
  { t: "Custom marketing & corporate sites", d: "Designed and built for your brand and conversions, never a bought template." },
  { t: "Web apps & SaaS products", d: "Authentication, dashboards, databases and APIs - the core of your product, shipped and measured." },
  { t: "Headless & traditional CMS", d: "Sanity, Strapi, Contentful or WordPress, so your team edits content without breaking the design." },
  { t: "E-commerce", d: "Shopify, WooCommerce or custom commerce, with a performance-tuned product page and checkout." },
  { t: "Replatforming & migrations", d: "Move off a slow template or legacy CMS to a faster stack, preserving your SEO with proper redirects." },
  { t: "Perfect-Lighthouse performance", d: "A top Lighthouse score and green Core Web Vitals as the baseline, not a paid add-on." },
  { t: "SEO, schema & AI-search readiness", d: "Clean information architecture, structured data and AEO/GEO built in from day one." },
  { t: "Accessibility considered on every screen", d: "WCAG-minded markup and contrast so more people can actually use what we build." },
  { t: "Analytics & a clean handover", d: "Conversion tracking wired up, plus code and content you fully own at the end." },
];

const relatedServices = [
  { label: "mobile app development", href: "/services/mobile-app-development" },
  { label: "UI/UX design & branding", href: "/services/ui-ux-design-services" },
  { label: "AI development", href: "/services/ai-development" },
  { label: "digital marketing", href: "/services/digital-marketing" },
  { label: "website care plans", href: "/services/website-maintenance-services" },
];

export function WebDevScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Scope"
            title="What's included in a custom web development project?"
            sub="Everything it takes to design, build, launch and measure a fast website or web app. A typical build covers:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2">
          {scope.map((s) => (
            <div key={s.t} className="card flex items-start gap-3 p-5">
              <span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Honest scope-setting - where we are not the right fit */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Where we&apos;re not the right fit
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              We deliberately take on a limited number of projects at a time, so each gets senior
              attention. If you need a rushed 50-page content dump by next week, or a logo-only
              rebrand with no build, we&apos;ll tell you honestly and point you somewhere better.
              We&apos;re at our best on custom web and web-app builds - from a startup&apos;s first
              site to an established team&apos;s replatform - where performance and a clear fixed
              price matter.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm text-muted-foreground">
            Pairs well with{" "}
            {relatedServices.map((r, i) => (
              <span key={r.href}>
                <Link href={r.href} className="font-medium text-brand-500 hover:text-brand-600">
                  {r.label}
                </Link>
                {i < relatedServices.length - 2 ? ", " : i === relatedServices.length - 2 ? " and " : "."}
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
