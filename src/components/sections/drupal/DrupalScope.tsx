import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconLayout, IconShield, IconServer, IconRefresh, IconGauge, IconArrow } from "@/components/icons";

// What we build WITH Drupal - implementation + complex editorial governance + decoupled + migration +
// care, all offer-framed ("we model", "we configure"), never a shipped-Drupal record. Drupal is a
// TRADITIONAL full-stack CMS (renders its own site) that can also run decoupled. Boundary callout routes:
// decoupled FRONT-END build OUT to Next.js/Astro (front-end-qualified anchors), SIMPLE/editor-first to
// WordPress (on FIT, never on plugin count), API-first headless content-ops to Sanity/Contentful/Strapi
// by fit, a store to Woo/Shopify, and ongoing care to website-maintenance-services. The one qualitative
// gov/higher-ed platform clause is spent HERE (intro), once - never as our clients.
const uses = [
  { icon: <IconType className="h-5 w-5" />, t: "Content modelling and architecture", d: "The foundation, and where a serious Drupal build starts: content types, fields and validations, taxonomy and entity references modelled as a real system - the deep, interrelated structure Drupal treats as core, shaped around how your content actually connects." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Drupal 11 and Drupal CMS builds", d: "A full Drupal 11 site stood up as a governed platform, or a Drupal CMS build using Recipes and in-browser page building for teams that want to move faster - configured, themed and deployed with configuration managed as code, not clicked together." },
  { icon: <IconShield className="h-5 w-5" />, t: "Editorial governance at depth", d: "The complex-publishing machinery Drupal ships natively: editorial workflows and content moderation, fine-grained roles and context-aware access, staged content changes for review, and real multilingual - wired to how your teams actually approve and translate." },
  { icon: <IconServer className="h-5 w-5" />, t: "Decoupled and headless Drupal", d: "When you want an application-grade front end, Drupal runs as the content and governance backend over JSON:API and GraphQL, and the site is built separately - the structured content stays in Drupal while the front end is free to be whatever the product needs." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Drupal 7 to Drupal 11 migration", d: "Drupal 7 reached end of life in January 2025, so moving off it is the honest priority. We use the core Migrate API to remap content, taxonomy and structure into a freshly modelled Drupal 11 site, treating the move as a chance to fix the model, with URLs mapped before cutover." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Support, security and care", d: "Drupal is self-hosted, so it needs ongoing security updates, dependency upkeep and backups. We keep a build current on a published care plan - or hand you a documented site any competent Drupal team can maintain, because it is standard Drupal." },
];

const routes = [
  {
    label: "You want an application-grade decoupled front end",
    href: "/technologies/nextjs",
    anchor: "a Next.js front end that reads Drupal",
    tail: "is where that build happens when Drupal runs headless - Drupal governs and stores the structured content over JSON:API or GraphQL, and the site itself is a separate front end. For a fast, mostly-static content site, an Astro front end is the leaner pairing.",
  },
  {
    label: "Your content is a handful of simple pages a team edits",
    href: "/technologies/wordpress",
    anchor: "WordPress, the simpler page-based CMS",
    tail: "is often the right, cheaper call - a familiar admin your team already knows. Drupal earns its keep when the content model itself is genuinely complex; for straightforward, editor-first content it is more platform than the job needs.",
  },
  {
    label: "You want a pure API-first headless content backend",
    href: "/technologies/sanity",
    anchor: "a leaner headless CMS such as Sanity",
    tail: "fits when there is no traditional site to render at all - Sanity for developer-first structured content, Contentful for enterprise governance and scale, Strapi for a self-hosted headless backend. Drupal can run decoupled, but if the whole point is API-first content ops, one of those is the more honest start.",
  },
  {
    label: "You are selling online and need a store",
    href: "/technologies/woocommerce",
    anchor: "WooCommerce or Shopify",
    tail: "is where commerce belongs - Drupal Commerce is niche and not where Drupal is strongest. A store routes to a purpose-built commerce platform.",
  },
];

export function DrupalScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Drupal"
            title="Drupal development services for complex, structured content"
            sub="Drupal is a traditional, open-source CMS built for content that is genuinely structured - the kind of platform widely used across government and higher education. We model the content, configure the governance, and build it as a traditional or decoupled site. A typical Drupal engagement is one of these:"
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

        {/* Boundary callout - Drupal is the structured traditional CMS; route the decoupled front end to
            Next.js/Astro, simple content to WordPress, API-first headless to the headless siblings, and a
            store to Woo/Shopify. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Where Drupal fits - and when something else is the honest call
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Drupal owns one thing on this page: genuinely complex, structured content with real
                editorial governance. When the job is a different shape, here is where it goes:
              </p>

              <ul className="mt-6 grid gap-3">
                {routes.map((r) => (
                  <li key={r.href} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                        <IconArrow className="h-4 w-4 text-brand-500" />
                        {r.label}
                      </span>
                      {" - "}
                      <Link href={r.href} className="font-medium text-brand-500 hover:text-brand-600">
                        {r.anchor}
                      </Link>{" "}
                      {r.tail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
