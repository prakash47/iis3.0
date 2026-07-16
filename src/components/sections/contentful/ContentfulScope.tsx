import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconLayers, IconLayout, IconServer, IconShield, IconRefresh, IconArrow } from "@/components/icons";

// What we build WITH Contentful - implementation + integration + migration + the governance setup,
// always paired with a Next.js or Astro front end. The whole rest of the site already names Contentful
// as a headless SOURCE our front ends read (NextjsCapabilities, AstroScope, WebDevScope); this page
// reciprocates: Contentful is the content backend, the FRONT-END build routes OUT to Next.js/Astro
// (front-end-qualified anchors), editor-first page-based teams route OUT to WordPress, a leaner/
// developer-first structured need routes to Sanity, and wanting to own the software routes to Strapi.
// Never absorb Next.js/Astro front-end terms or WordPress editor-content terms. Every capability is
// offer-framed ("we model", "we wire") - never a shipped-Contentful record.
const uses = [
  { icon: <IconType className="h-5 w-5" />, t: "Content modelling and architecture", d: "The foundation: your domain modelled as typed content types with validations, references and a real content graph - shaped around how your teams and channels actually use the content, so an editor cannot break the shape and a front end can trust it." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Contentful implementation", d: "Spaces, environments, roles and the delivery setup stood up as a governed platform: the content model in code, the APIs wired, and the editorial workspace configured so your teams publish the way they actually work, not the way a default admin assumes." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Integration into your stack", d: "Contentful connected to the rest of your systems through the App Framework and Marketplace apps and through webhooks - translation and DAM, search, commerce and analytics - so content flows into and out of the platform instead of living on an island." },
  { icon: <IconServer className="h-5 w-5" />, t: "The front end that reads it", d: "Contentful is the backend; the site is a front end that reads it over the Content Delivery or GraphQL API - Next.js for app-grade and SEO-critical sites, Astro for content sites - with preview builds off the Preview API and on-demand revalidation on publish." },
  { icon: <IconShield className="h-5 w-5" />, t: "Governance and editorial workflow at scale", d: "Roles and permissions, tasks and comments for review, scheduled publishing and releases so related changes ship together, localization for many markets, and orchestration across spaces and brands - wired to your real approval process." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations onto Contentful", d: "Moving off a legacy CMS onto structured content: we model the target first, script the extract and transform through the Management API, load into a non-production environment to verify content and references, and map URLs with redirects so the SEO survives the cutover." },
];

const routes = [
  {
    label: "The front end for an app or an SEO-critical site",
    href: "/technologies/nextjs",
    anchor: "Next.js, the React front end that reads Contentful",
    tail: "is where that build happens - server rendering, on-demand revalidation from Contentful, and the interactivity of a real application. Contentful models, governs and stores the content; the site itself is the front end.",
  },
  {
    label: "The front end for a fast content or marketing site",
    href: "/technologies/astro",
    anchor: "Astro, a fast content-site front end over Contentful",
    tail: "is the leaner pairing when the site is mostly static content - Astro reads Contentful as its source and ships almost no JavaScript. We build both front ends and pick the fit.",
  },
  {
    label: "Your content is really a single team editing one site",
    href: "/technologies/sanity",
    anchor: "Sanity, a leaner headless CMS",
    tail: "is the developer-first, lighter-weight structured backend for that shape. Contentful's governance and enterprise plan earn their keep when many teams coordinate; below that scale, a leaner CMS is the honest call.",
  },
  {
    label: "You want to own and self-host the running software",
    href: "/technologies/strapi",
    anchor: "Strapi, the self-hosted headless CMS you own",
    tail: "is the route when owning the software itself matters - Contentful is hosted SaaS, so you own your content, not the platform that runs it.",
  },
  {
    label: "A team that just wants to edit whole pages in a familiar admin",
    href: "/technologies/wordpress",
    anchor: "WordPress, the traditional page-based CMS",
    tail: "is often the right, cheaper call - a themed admin your team already knows. Contentful earns its keep when content is structured, reused and governed across many surfaces, not when one team edits pages in place.",
  },
];

export function ContentfulScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Contentful"
            title="Contentful implementation, integration, and the front end that reads it"
            sub="Contentful is the content backend - we model your content, stand up the governed platform, integrate it into your stack, and pair it with a front end that renders fast. A typical Contentful engagement is one of these:"
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

        {/* Boundary callout - Contentful is the backend; route the front-end build to Next.js/Astro,
            a leaner need to Sanity, self-hosting to Strapi, and editor-first page teams to WordPress. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Contentful is the backend - here is what reads it, and when it is more CMS than you need
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Contentful does not render your website; it stores, governs and serves your content. The
                site is a front end, and sometimes Contentful is more platform than the job needs - here
                is where each of those goes:
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
                      <Link href={r.href} className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
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
