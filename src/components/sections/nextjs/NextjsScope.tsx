import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconMegaphone, IconTag, IconLayout, IconShield, IconSpark, IconRefresh, IconCheck } from "@/components/icons";

// What we build WITH Next.js - the use-case grid. This is the keyword lane
// (Next.js website, ecommerce, SaaS, migration) and funnels up to the money page.
const uses = [
  { icon: <IconMegaphone className="h-5 w-5" />, t: "Marketing & content sites", d: "Fast, SEO-clean sites with a headless CMS your team can actually edit." },
  { icon: <IconTag className="h-5 w-5" />, t: "Ecommerce & headless storefronts", d: "App Router storefronts on Shopify, WooCommerce or headless commerce, tuned for Core Web Vitals." },
  { icon: <IconLayout className="h-5 w-5" />, t: "SaaS dashboards & web apps", d: "Authenticated, data-driven products with server actions, APIs and role-based access." },
  { icon: <IconShield className="h-5 w-5" />, t: "Customer & partner portals", d: "Secure, role-aware portals over your own data and systems." },
  { icon: <IconSpark className="h-5 w-5" />, t: "AI-enabled apps", d: "Streaming AI features and assistants built into the product, grounded in your content." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations & replatforms", d: "WordPress, Create React App or legacy Next.js moved to a modern App Router build - URLs and SEO preserved." },
];

export function NextjsScope() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Next.js"
            title="From a marketing site to a full SaaS"
            sub="Next.js covers the whole range under one framework. A typical Next.js engagement is one of these:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((u) => (
            <div key={u.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {u.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Funnel UP to the money page (broad anchor) + lateral cross-links */}
        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Next.js is one of the stacks behind our{" "}
            <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
              web design and development services
            </Link>
            . Building an app or SaaS product? The systems side lives in{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              custom software development
            </Link>
            . And since Next.js is a React framework, see our{" "}
            <Link href="/technologies/react" className="font-medium text-brand-500 hover:text-brand-600">
              React development
            </Link>{" "}
            too.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
