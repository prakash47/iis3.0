import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayout, IconPen, IconServer, IconLock, IconLayers, IconRefresh, IconArrow } from "@/components/icons";

// WordPress's lane - editable content sites - stated in the exact consistency-lock
// vocabulary the Laravel/Django/Next.js pages already published ("off-the-shelf CMS",
// "familiar admin", "themes and plugins", "content/blog/brochure/marketing sites").
// The routing callout concedes ecommerce to WooCommerce/Shopify, custom apps to
// Laravel/Django, and speed/headless to Next.js - the anti-cannibalization spine.
const uses = [
  { icon: <IconLayout className="h-5 w-5" />, t: "Marketing & brochure sites", d: "The content and marketing sites a non-technical team edits itself - services, about, landing pages - through a familiar admin, on a lean custom block theme." },
  { icon: <IconPen className="h-5 w-5" />, t: "Blogs, content & news", d: "Editorial and content-heavy sites - blogs, resource hubs, news and knowledge bases - where publishing and editing daily without a developer is the point." },
  { icon: <IconServer className="h-5 w-5" />, t: "Corporate & business sites", d: "Company sites with real information architecture, structured content and an admin your team runs day to day - the WordPress use case at its strongest." },
  { icon: <IconLock className="h-5 w-5" />, t: "Membership & community", d: "Sites with logins, gated content, memberships or communities - using WordPress's mature ecosystem of vetted plugins instead of building it all from scratch." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Custom block-theme builds", d: "A bespoke design as a lean custom block theme on Full Site Editing - on-brand and fast, not a bought multipurpose theme carrying features you'll never use." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations to WordPress", d: "Moving a site onto well-built WordPress from Wix, Squarespace, an ageing WordPress install or another CMS - content preserved, URLs mapped, redirects in place so your SEO survives." },
];

export function WordpressScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with WordPress"
            title="The content sites your team runs"
            sub="WordPress is the off-the-shelf CMS for content-driven sites a team edits itself, through a familiar admin with a huge ecosystem of themes and plugins. A typical WordPress engagement is one of these:"
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

        {/* Boundary routing - concede ecommerce, custom apps and raw speed to the right
            siblings. Keeps WordPress in its editable-content-CMS lane. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Where WordPress ends, and where we&apos;ll send you
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                WordPress is a CMS, not the answer to everything. When your project is really one of
                these, we&apos;ll point you to the right place rather than force it into WordPress:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Selling online - a store
                    </span>
                    {" - "}
                    <Link href="/technologies/woocommerce" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      WooCommerce, WordPress ecommerce
                    </Link>{" "}
                    is on its own page - or{" "}
                    <Link href="/technologies/shopify" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      Shopify
                    </Link>{" "}
                    for a fully hosted store with nothing to maintain.
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A custom application or bespoke business logic
                    </span>
                    {" - "}
                    WordPress is a CMS, not an application framework, so a bespoke product is a custom
                    build in{" "}
                    <Link href="/technologies/laravel" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      Laravel
                    </Link>
                    ,{" "}
                    <Link href="/technologies/django" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      Django
                    </Link>{" "}
                    or{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      custom software
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Speed is the whole point - or you want WP editing and top performance
                    </span>
                    {" - "}
                    a custom{" "}
                    <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      Next.js build
                    </Link>{" "}
                    is faster, and headless WordPress gives you the WordPress admin your editors know
                    with a Next.js front end for speed.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
