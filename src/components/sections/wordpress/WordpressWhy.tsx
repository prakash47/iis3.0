import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconPen, IconLayers, IconLock, IconTag, IconTrendingUp, IconBolt } from "@/components/icons";

// Fit-framed benefits + the honest "is WordPress relevant/slow/insecure in 2026?" myth-
// buster (concede-then-differentiate, attributed stats, NO fabricated CWV) + the "when NOT
// to use WordPress" cross-link engine. Market share stated as "over 40%" (W3Techs, honestly
// noting it softened from the ~43% peak - never a bare inflated 43%). Never claims WP beats
// a custom Next.js build on speed (consistency lock with NextjsCompare) - offers headless instead.
const pillars = [
  { icon: <IconPen className="h-5 w-5" />, t: "Your team edits it, not us", d: "The whole point of WordPress: a familiar admin your non-technical team uses to publish and update content daily, without a developer in the loop for every change." },
  { icon: <IconLayers className="h-5 w-5" />, t: "The biggest ecosystem there is", d: "Themes, plugins and integrations for almost anything - so you reach a capable site fast, without building every feature from scratch. The trick is choosing few, well-maintained ones, which is what we do." },
  { icon: <IconLock className="h-5 w-5" />, t: "You own it, and can leave", d: "Self-hosted WordPress is open-source and yours - your host, your database, your content. No platform rent, no ceiling, and any WordPress developer can maintain it. No lock-in." },
  { icon: <IconTag className="h-5 w-5" />, t: "Lower cost and complexity", d: "For a content or marketing site, WordPress reaches a polished, editable result faster and cheaper than a fully custom build - the right trade when bespoke performance isn't the priority." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "A huge, hireable talent pool", d: "WordPress powers a huge share of the web, so there's always someone who can maintain what we build - you're never dependent on one agency." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Fast, when it's built right", d: "WordPress can pass Core Web Vitals when it's engineered - a lean block theme, real caching, optimized images, a quality host. We do that deliberate work, and we don't publish scores for a site we haven't built yet." },
];

export function WordpressWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* The myth-buster - the three big WordPress objections, conceded honestly then
            differentiated on engineering. Attributed stats, no fabricated CWV. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is WordPress relevant, or just slow and insecure in 2026?{" "}
                <span className="gradient-text">All three have honest answers.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Relevant:</span> yes - WordPress runs
                over 40% of the web (W3Techs, down slightly from its roughly 43% peak), more than any
                other way to build a site.{" "}
                <span className="font-semibold text-foreground">Slow:</span> badly-built WordPress is
                slow - cheap hosting, a bloated theme, a pile of overlapping plugins - but that&apos;s
                build quality, not the platform.{" "}
                <span className="font-semibold text-foreground">Insecure:</span> the vast majority of
                WordPress hacks trace to outdated plugins and neglected updates, not core - in
                Patchstack&apos;s 2026 data the large majority of vulnerabilities were in plugins, not
                WordPress itself. The through-line: WordPress is as fast and as safe as it is
                well-built and maintained. Built and cared for well, it is neither slow nor insecure -
                and that difference is engineering, which is exactly what we sell.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why WordPress"
            title="Why teams build content sites on WordPress"
            sub="WordPress is the framework we reach for when a team needs to run its own content site, with a huge ecosystem and full ownership. Here's what it buys you - and, honestly, when it's the wrong tool."
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

        {/* The anti-recommendation - the cross-link engine. Owns the "Next.js is faster"
            split honestly and offers headless WordPress as the reconciliation. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use WordPress
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              WordPress is the right tool for a lot of sites and the wrong one for some. When raw
              speed is the product or the experience is genuinely bespoke, a custom{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                Next.js build
              </Link>{" "}
              is faster and more flexible - it&apos;s the path we chose for our own site - and you can
              keep the WordPress editing experience by going headless, with the WordPress admin
              feeding a Next.js front end. For a fully hosted store you never want to maintain, that&apos;s{" "}
              <Link href="/technologies/shopify" className="font-medium text-brand-500 hover:text-brand-600">
                Shopify
              </Link>
              . For a custom application WordPress can&apos;t cleanly do, that&apos;s{" "}
              <Link href="/technologies/laravel" className="font-medium text-brand-500 hover:text-brand-600">
                Laravel
              </Link>
              ,{" "}
              <Link href="/technologies/django" className="font-medium text-brand-500 hover:text-brand-600">
                Django
              </Link>{" "}
              or{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                custom software
              </Link>
              . And if you do choose WordPress, it genuinely needs ongoing updates, security and
              backups, so we pair it with{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-500 hover:text-brand-600">
                care plans
              </Link>
              . Recommending the right tool, even when it isn&apos;t WordPress, is the whole point.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
