import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/jsonLd";
import { pageMetadata } from "@/lib/seo/metadata";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

export const metadata: Metadata = pageMetadata("/pricing");

interface Tier {
  name: string;
  from: string;
  best?: boolean;
  for: string;
  includes: string[];
}

const websiteTiers: Tier[] = [
  {
    name: "Launch Sprint",
    from: "$1,500",
    for: "Startups needing a fast, credible site",
    includes: ["Up to 5 pages", "Next.js + CMS", "SEO & schema baseline", "Perfect-Lighthouse performance"],
  },
  {
    name: "Growth Site",
    from: "$4,000",
    best: true,
    for: "SMBs that want a lead engine",
    includes: ["8-15 pages", "Blog / CMS", "AEO/GEO content structure", "Analytics & conversion CTAs"],
  },
  {
    name: "Commerce Sprint",
    from: "$7,000",
    for: "DTC / e-commerce brands",
    includes: ["Headless Shopify or Next.js commerce", "Payments", "Performance-tuned PDP & checkout"],
  },
];

const productTiers: Tier[] = [
  {
    name: "MVP Sprint",
    from: "$12,000",
    for: "Pre-seed / seed founders",
    includes: ["Core-feature web app / SaaS", "Auth + database", "Deployed & measured"],
  },
  {
    name: "Mobile App Build",
    from: "$15,000",
    for: "SMBs needing iOS + Android",
    includes: ["Cross-platform (React Native / Flutter)", "Store submission", "Backend & APIs"],
  },
  {
    name: "AI Add-On",
    from: "$2,000",
    for: "Any site or app",
    includes: ["AI chatbot or workflow automation", "Trained on your content", "1-3 week delivery"],
  },
];

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={
        "flex flex-col rounded-2xl border bg-surface p-6 transition-transform duration-300 hover:-translate-y-1 " +
        (tier.best ? "border-brand-500 ring-1 ring-brand-500 shadow-[0_18px_50px_-24px_var(--glow)]" : "border-border")
      }
    >
      {tier.best && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-foreground">{tier.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{tier.for}</p>
      <div className="mt-4">
        <span className="text-sm text-muted-foreground">from </span>
        <span className="font-display text-3xl font-bold text-foreground">{tier.from}</span>
      </div>
      <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
        {tier.includes.map((inc) => (
          <li key={inc} className="flex items-start gap-2">
            <span aria-hidden="true" className="font-bold text-accent-600">✓</span>
            {inc}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href="/contact" variant={tier.best ? "primary" : "outline"} className="w-full">
          Get started
        </Button>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Section>
        <Container>
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Transparent, fixed pricing
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Published &quot;starting-at&quot; prices - no opaque quote walls. We confirm a fixed
            price after a short discovery call. Prices shown in USD; we also quote in INR, GBP,
            AED and EUR.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold text-foreground">Websites</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {websiteTiers.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl font-bold text-foreground">Products &amp; AI</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {productTiers.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Every project starts with a short, paid discovery that credits toward your build -
            so scope and price are clear before we begin. Ongoing care plans available from
            $300/month.
          </p>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
