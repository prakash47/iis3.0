import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayout, IconPen, IconFileText, IconBolt, IconDatabase, IconRefresh, IconArrow } from "@/components/icons";

// The content-site lane the live Next.js page routes here (NextjsCompare: Astro = "Mostly-static
// content & marketing", "We'll pick it for content-only sites"; NextjsFaq: "we recommend Astro when
// a site is content-only and Next.js when it needs to behave like an app"). This page OWNS content
// sites and routes APP intent BACK to Next.js, editor-managed content to WordPress, stores to
// Shopify/Woo. Never contradict the locked cells; never position Astro for apps/dashboards.
const uses = [
  { icon: <IconLayout className="h-5 w-5" />, t: "Marketing & brochure sites", d: "Fast, content-driven marketing sites that ship almost no JavaScript and load quickly for real visitors - the site your campaigns point at, built to be read and to rank, not to run an app in the browser." },
  { icon: <IconPen className="h-5 w-5" />, t: "Blogs & content sites", d: "Content collections with typed frontmatter and MDX, so writers work in Markdown and the build checks the shape of every post - a publishing setup that stays fast as the archive grows." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Documentation sites", d: "Technical docs and knowledge bases, including on Starlight, Astro's documentation-site toolkit - search, versioned content and navigation that stays quick across hundreds of pages." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Landing pages", d: "Campaign and product landing pages that need to be fast and to convert - static by default, with a single interactive island (a form, a calculator) dropped in only where it earns its place." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Headless CMS front ends", d: "Astro as the presentation layer over a headless source - Sanity, Strapi, Contentful, or WordPress used headless - pulled in through the Content Layer and rendered as fast static or hybrid output." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations to Astro", d: "Moving a slow content or marketing site off an older setup - Gatsby, Jekyll, Hugo, or a heavy WordPress theme - onto Astro, with your content modelled and your URLs mapped so the SEO survives the move." },
];

const routes = [
  {
    label: "A site that has to behave like an application",
    href: "/technologies/nextjs",
    anchor: "Next.js for sites that must behave like an app",
    tail: "is the right call - authenticated areas, dashboards, heavy client state, data-driven views that change constantly. Astro shines for content with light interactivity; the moment interactivity becomes the product, that is Next.js, and it is why our own site runs on it.",
  },
  {
    label: "Content a non-developer edits every day",
    href: "/technologies/wordpress",
    anchor: "WordPress, when the job is editing not code",
    tail: "is often the honest choice - a familiar admin your marketing team runs without a developer. Astro can read a headless CMS, but if day-to-day editing is the whole point, we will say so.",
  },
  {
    label: "An online store or shopping cart",
    href: "/technologies/shopify",
    anchor: "Shopify or WooCommerce for a real store",
    tail: "is where commerce belongs - a catalog, cart and checkout built to sell. A content site can link out to a store, but we do not build the store itself in raw Astro.",
  },
];

export function AstroScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Astro"
            title="Content-driven sites, built to be fast and found"
            sub="Astro's sweet spot is the content site - marketing, blogs, docs, landing pages - where the job is to load fast, read cleanly and rank, with interactivity added only where it earns its place. A typical Astro engagement is one of these:"
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

        {/* Boundary callout - route app / editor / store intent to the right sibling. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                When it is not really a content site
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Astro is for content that must be fast. When your project is really one of these, we
                will point you to the right place rather than force it onto the wrong tool:
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
