import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBolt, IconLayout, IconSearch, IconPen, IconCode, IconLock } from "@/components/icons";

// THE SIGNATURE (unspent): the JavaScript-DIET thesis. No sibling owns "payload-as-a-default".
// Next.js/React own "inspect-this-page" + the CWV self-demo; WordPress owns "we didn't build our
// site on it / recommend-by-fit". None argues that a content site's correct JavaScript budget is
// near zero and that ONE framework makes that the STARTING STATE. Framed as method/philosophy (no
// KB figure, no CWV score), it connects to our performance brand WITHOUT claiming our site is
// Astro. GUARDS (red-team): softened off "the one mainstream framework" (Qwik/Fresh/Eleventy also
// default to near-zero JS) - claim it via the MECHANISM (opt into interactivity one island at a
// time), not exclusivity. "React frameworks included" is load-bearing: it lets us criticize the
// over-shipping pattern our OWN Next.js site is part of, which the Proof section then concedes.
const pillars = [
  { icon: <IconBolt className="h-5 w-5" />, t: "Zero JavaScript by default", d: "A page's default output is HTML and CSS with no client-side framework runtime attached. JavaScript ships only for the components you choose to make interactive, so a content page with nothing interactive can ship no framework code at all." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Islands, hydrated on purpose", d: "Interactivity lives in isolated islands that hydrate independently, each with an explicit client directive - on load, when idle, when scrolled into view, or at a breakpoint. Every byte of JavaScript maps to a named, reviewable decision." },
  { icon: <IconSearch className="h-5 w-5" />, t: "Real HTML for search and readers", d: "Because the default build is pre-rendered static HTML, a crawler sees the finished content with no client render step, and semantic markup is the baseline rather than a retrofit - a strong SEO foundation, and a good starting point for accessibility, both claimed as method." },
  { icon: <IconPen className="h-5 w-5" />, t: "Content modelled and typed", d: "The Content Layer gives content a typed interface whatever the source - Markdown, MDX, a headless CMS or a database - so a missing field or wrong type is a build error, not a production surprise. The data contract is explicit before layout begins." },
  { icon: <IconCode className="h-5 w-5" />, t: "Bring the React you already have", d: "Astro is UI-framework-agnostic, so an island can be a React, Vue, Svelte or Solid component. If you already own a React widget - a calculator, a configurator - it mounts inside an otherwise static Astro page instead of being rebuilt." },
  { icon: <IconLock className="h-5 w-5" />, t: "Open, and yours to move", d: "Astro is MIT-licensed, open-source and platform-agnostic - it deploys to any host, and that stayed true after the Astro team joined Cloudflare in early 2026, because staying open to every platform was a stated condition of the deal. You are not tied to one vendor's cloud." },
];

export function AstroWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* THE SIGNATURE - the JavaScript-diet thesis. Mechanism-framed, no numbers. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Most content sites ship far too much JavaScript.{" "}
                <span className="gradient-text">Astro makes shipping almost none the default.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                A content page&apos;s real product is its HTML - for a reader, and for a search crawler.
                Most sites bury that under a client-side JavaScript bundle they never needed, and React
                frameworks are among the worst offenders, because their default is to ship the framework
                and then have you claw the weight back with code-splitting and bundle budgets. Astro
                inverts the default: a page starts as static HTML with no framework runtime, and you opt
                into JavaScript one interactive island at a time, each a deliberate, reviewable decision.
                Shipping almost no JavaScript is not a discipline you fight your own tools for here - it
                is where the page begins. That is a design philosophy, not a benchmark we are asking you
                to take on faith, and it is the reason a content site belongs on Astro.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Astro"
            title="What Astro gives a content site"
            sub="Astro is built for one job - content that has to be fast and findable - and it is very good at it. Here is what that buys you, and, honestly, when it is the wrong tool."
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

        {/* The anti-recommendation - the cross-link engine. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When Astro is the wrong choice
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Astro earns its place on content sites. It is the wrong starting point - and we will say
              so - when the project needs to behave like an application: authenticated areas, heavy
              client state, dashboards, data-driven views that change constantly. Past a handful of
              interactive pieces sharing state, you are fighting the framework, and that work belongs on{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                Next.js, the React framework for sites that behave like apps
              </Link>
              . When the whole point is a non-developer editing content every day, that is often{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                WordPress
              </Link>
              , and when you are selling products it is{" "}
              <Link href="/technologies/shopify" className="font-medium text-brand-500 hover:text-brand-600">
                Shopify or WooCommerce
              </Link>
              . Not sure which side of the line you are on?{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                We will make that call with you
              </Link>{" "}
              before we quote anything.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
