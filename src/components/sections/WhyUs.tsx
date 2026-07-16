import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow, IconBolt, IconClock, IconCode, IconTag } from "@/components/icons";

type Pillar = {
  icon: React.ReactNode;
  stat: string;
  title: string;
  body: string;
  link?: { label: string; href: string };
};

// Each pillar leads with a CHECKABLE stat, not an adjective (blueprint). No
// fabricated metrics - every number here is verifiable (live scores, published
// prices, real timelines, the actual stack).
const pillars: Pillar[] = [
  {
    icon: <IconClock className="h-6 w-6" />,
    stat: "2-6 weeks",
    title: "Speed without compromise",
    body: "Weeks, not months. Marketing sites ship in 2-6 weeks and web-app MVPs in 6-10 - fixed scope, weekly demos, so you always know exactly where things stand.",
  },
  {
    icon: <IconBolt className="h-6 w-6" />,
    stat: "100 Lighthouse",
    title: "Performance you can measure",
    body: "Every build ships with a top Lighthouse score and Core Web Vitals in the green, published live on this very site. You verify the numbers - you don't take our word for them.",
    link: { label: "See the live scores", href: "#performance" },
  },
  {
    icon: <IconTag className="h-6 w-6" />,
    stat: "Fixed prices, upfront",
    title: "Radical transparency",
    body: "Published fixed prices, named people, honest scope - no opaque 'get-a-quote' walls and no inflated vanity metrics. You see the price before you ever get on a call.",
    link: { label: "See our pricing", href: "/pricing" },
  },
  {
    icon: <IconCode className="h-6 w-6" />,
    stat: "The right stack",
    title: "The right stack, not one stack",
    body: "We're stack-agnostic - Next.js and React, WordPress, Laravel, Shopify and more - chosen per project and tuned for how people search now, with SEO and AI-search (AEO/GEO) readiness baked into every page.",
  },
];

export function WhyUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why teams pick us"
            title={<>The premium-agency bar, <span className="gradient-text">without the premium-agency bill</span></>}
            sub="The proof behind the promise - four things you can check for yourself, not just adjectives."
          />
        </Reveal>
        <Reveal group className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="card p-7 glow-border">
              <div className="relative z-[1] flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-2 text-brand-500">
                    {p.icon}
                  </span>
                  <span className="rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-400">
                    {p.stat}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                {p.link && (
                  <Link
                    href={p.link.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
                  >
                    {p.link.label}
                    <IconArrow className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
