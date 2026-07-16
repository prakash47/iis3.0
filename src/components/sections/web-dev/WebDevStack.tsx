import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow } from "@/components/icons";

// The "stacks we build with" showcase - the hub-and-spoke equity engine. Every
// card links to its real /technologies/* spoke with a descriptive anchor, which
// (a) proves the stack-agnostic positioning visually, and (b) lets the SITE rank
// across every framework term without THIS page trying to. Mobile stacks are
// intentionally excluded (they route to /services/mobile-app-development).
interface Tech {
  name: string;
  slug: string | null;
  outcome: string;
}

const stackGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Front-end & frameworks",
    items: [
      { name: "Next.js", slug: "nextjs", outcome: "Server-rendered, SEO-ready sites that load fast." },
      { name: "React", slug: "react", outcome: "Interactive, component-driven interfaces." },
      { name: "Astro", slug: "astro", outcome: "Ultra-light content and marketing sites." },
    ],
  },
  {
    title: "Back-end & web apps",
    items: [
      { name: "Node.js", slug: "nodejs", outcome: "Scalable JavaScript APIs and real-time features." },
      { name: "Laravel", slug: "laravel", outcome: "Robust PHP applications, built to last." },
      { name: "Django", slug: "django", outcome: "Python web apps with security built in." },
      { name: "Java & Spring Boot", slug: "java-spring-boot", outcome: "Enterprise-grade backends at scale." },
    ],
  },
  {
    title: "CMS & content",
    items: [
      { name: "WordPress", slug: "wordpress", outcome: "A familiar CMS your team can run day to day." },
      { name: "Drupal", slug: "drupal", outcome: "Enterprise content management." },
      { name: "Sanity", slug: "sanity", outcome: "Real-time headless content." },
      { name: "Strapi", slug: "strapi", outcome: "Open-source headless CMS." },
      { name: "Contentful", slug: "contentful", outcome: "Composable headless content at scale." },
    ],
  },
  {
    title: "E-commerce",
    items: [
      { name: "Shopify", slug: "shopify", outcome: "Headless or custom storefronts that convert." },
      // Split from the old combined "WooCommerce & custom commerce" card once WooCommerce got
      // its own bespoke spoke. The auto-anchor is "Explore {name} development", so this yields
      // "Explore WooCommerce development" - distinct from every inbound anchor already pointing
      // at /technologies/woocommerce. Custom commerce stays unlinked (it is a service, not a tech).
      { name: "WooCommerce", slug: "woocommerce", outcome: "An online store you own, host and grow, on WordPress." },
      { name: "Custom commerce", slug: null, outcome: "A fully bespoke checkout on your own back end." },
    ],
  },
];

export function WebDevStack() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title={<>One stack doesn&apos;t fit <span className="gradient-text">every project</span></>}
            sub="We're stack-agnostic and pick the right tool for the job - a fast marketing site, a content platform, an ecommerce store and a data-heavy web app each call for different technology. Here's what we build with, and where to go deeper on each."
          />
        </Reveal>

        <div className="mt-10 space-y-10">
          {stackGroups.map((group) => (
            <Reveal key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((t) => (
                  <div key={t.name} className="card flex flex-col p-5">
                    <h4 className="font-display text-base font-semibold text-foreground">{t.name}</h4>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{t.outcome}</p>
                    {t.slug && (
                      <Link
                        href={`/technologies/${t.slug}`}
                        className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
                      >
                        Explore {t.name} development
                        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Not sure which stack fits? That&apos;s what discovery is for - we recommend the right
            tool for your project, timeline and budget, then you approve it before we build.
          </p>
          <Link
            href="/technologies"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
          >
            See all technologies we build with
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
