import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconServer, IconLayout, IconRefresh, IconGrid, IconCpu, IconArrow } from "@/components/icons";

// What we build WITH Strapi - the content-backend work, always paired with a Next.js or Astro front
// end. Reciprocates the live locks (NextjsCapabilities/AstroScope/SanityScope name Strapi as the
// headless source their front ends read): Strapi = the content backend, the FRONT-END build routes
// OUT to Next.js/Astro (front-end-qualified anchors), editor-first page teams to WordPress, and the
// maintenance-averse to a managed option (SaaS CMS or Strapi Cloud). Never absorb front-end or
// editor-content terms; never scored-compare Contentful or Drupal (both now live siblings).
const uses = [
  { icon: <IconType className="h-5 w-5" />, t: "Content-type modelling", d: "The foundation: your content modelled as collection types, single types and reusable components with typed fields and relations, written to your repository and reviewable in a pull request - not trapped in a vendor dashboard." },
  { icon: <IconServer className="h-5 w-5" />, t: "The API, and custom Node", d: "Strapi generates a REST API from your model (and a typed GraphQL API via its official plugin); where the generated API is not enough, we extend it with custom Node controllers, services, routes, middleware and lifecycle hooks - all TypeScript-first." },
  { icon: <IconLayout className="h-5 w-5" />, t: "A custom admin & plugins", d: "The admin is a React app we configure and extend - custom fields, roles and permissions, internationalization, the media library - and the plugin ecosystem covers the rest. Building React interfaces over an API is our home ground." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Self-hosted setup, and care", d: "We deploy Strapi on infrastructure you control, on the database you choose, so you own the running software - and, because self-hosting has to be patched and kept current, we can run and update it for you on a care plan, or hand it to your team." },
  { icon: <IconGrid className="h-5 w-5" />, t: "The front end that reads it", d: "Strapi is the backend; the site is built on a front end that reads its API - Next.js for app-grade and SEO-critical sites, Astro for content sites - with webhook-driven revalidation so a publish refreshes only the routes that changed." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations onto Strapi", d: "Moving off WordPress or a legacy CMS onto a self-hosted headless backend: we model the target content types first, script the extract and transform, load into a non-production instance to verify, and map URLs with redirects so the SEO survives." },
];

const routes = [
  {
    label: "The front end for an app or an SEO-critical site",
    href: "/technologies/nextjs",
    anchor: "Next.js, the React front end over Strapi",
    tail: "is where that build happens - server rendering, on-demand revalidation from Strapi, and the interactivity of a real application. Strapi holds the content and the API; the site is the front end.",
  },
  {
    label: "A team that just wants to edit whole pages in a familiar admin",
    href: "/technologies/wordpress",
    anchor: "WordPress, the traditional page-based CMS",
    tail: "is often the right, cheaper call - a themed admin your team knows, with plugins. Strapi is a headless backend that serves an API, not a page-editing tool.",
  },
  {
    label: "A team that would rather never run a server",
    href: "/technologies/sanity",
    anchor: "a managed, hosted CMS like Sanity",
    tail: "is the honest choice when you do not want to patch and host anything - or Strapi's own managed Strapi Cloud. Self-hosted Strapi is for teams who want to own and run the backend; we will say so before you commit.",
  },
];

export function StrapiScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Strapi"
            title="A self-hosted content backend, and the front end that reads it"
            sub="Strapi is the content backend - we model your content, extend it in Node, and stand up the admin your editors use, then pair it with a front end that renders fast. A typical Strapi engagement is one of these:"
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

        {/* Boundary callout - route the front-end build, editor-first teams, and the maintenance-averse. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Strapi is the backend - here is what reads it, and when it is the wrong CMS
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Strapi does not render your website; it stores your content and serves an API. The site
                is a front end, and sometimes a self-hosted CMS is not the right call at all - here is
                where each of those goes:
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
