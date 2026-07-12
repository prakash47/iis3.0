import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { IconArrow, IconBolt, IconClock, IconTag } from "@/components/icons";
import { siteConfig } from "@/config/site";

const techMarquee = [
  "Next.js", "React", "TypeScript", "Node.js", "React Native", "Flutter",
  "Shopify", "WordPress", "Laravel", "Django", "Sanity", "Strapi",
  "Contentful", "Astro", "Tailwind CSS", "SwiftUI", "Kotlin", "AI / RAG",
];

const trustChips = [
  { icon: <IconBolt className="h-4 w-4" />, label: "Perfect Lighthouse, sub-second load" },
  { icon: <IconTag className="h-4 w-4" />, label: "Transparent fixed pricing" },
  { icon: <IconClock className="h-4 w-4" />, label: "Shipped in weeks" },
];

/**
 * Homepage hero. The H1 + entity capsule render immediately (no reveal /
 * opacity gate) to protect LCP - our whole pitch is real Core Web Vitals.
 * Supporting elements get a subtle, reduced-motion-safe `hero-in` load-in.
 */
export function Hero() {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-5 sm:pt-7 lg:pt-7">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Pill dot className="hero-in">
                Design, build &amp; grow
              </Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
                We build websites &amp; apps that feel{" "}
                <span className="gradient-text">this fast.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {siteConfig.entityDescription}
              </p>

              <div className="hero-in mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 [animation-delay:140ms]">
                <Button href="/contact" size="lg">
                  Start a Project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="/work" variant="ghost" size="lg">
                  See our work
                </Button>
              </div>

              <p className="hero-in mt-3 text-sm text-muted-foreground [animation-delay:200ms]">
                Fixed price. No sales call required to see it.
              </p>

              <ul className="hero-in mt-8 flex flex-wrap gap-2.5 [animation-delay:260ms]">
                {trustChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-in lg:w-[30rem] lg:justify-self-end [animation-delay:120ms]">
              <HeroVisual />
            </div>
          </div>
        </Container>

        <div className="hero-in mt-16 sm:mt-20 [animation-delay:340ms]">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            The stack we ship with
          </p>
          <Marquee items={techMarquee} />
        </div>
      </Section>
    </div>
  );
}
