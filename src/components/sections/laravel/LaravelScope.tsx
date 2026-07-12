import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconServer, IconGrid, IconLayout, IconCode, IconBolt, IconRefresh, IconArrow } from "@/components/icons";

// Custom-APPLICATION use-cases - deliberately steered away from WordPress's content
// territory and toward "custom PHP application". The boundary callout routes the
// PHP-neighbourhood intents out (WordPress = content, php = raw/legacy) plus the
// web-dev in-body link. Node/Python routing lives in the Why anti-recommendation.
const uses = [
  { icon: <IconServer className="h-5 w-5" />, t: "SaaS products", d: "Multi-tenant SaaS with subscription billing via Cashier, auth and per-customer data - the bespoke platform work Laravel is built to ship fast." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Admin panels & internal tools", d: "Production admin panels, dashboards and back-office tools with Filament, without the throwaway feel of a hand-rolled admin." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Customer & vendor portals", d: "Authenticated portals - client areas, vendor dashboards, booking and reservation systems - with roles, permissions and real data behind them." },
  { icon: <IconCode className="h-5 w-5" />, t: "REST & JSON APIs", d: "Versioned REST and JSON:API backends with Sanctum auth - a clean, documented surface for your mobile app or a separate front end." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Custom web applications", d: "CRUD-heavy business systems, marketplaces and line-of-business apps - the whole application on one codebase, in Blade, Livewire or Inertia." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations & upgrades", d: "Upgrading an older Laravel app to Laravel 13, or modernizing a legacy PHP codebase onto the framework - incrementally, not a big-bang rewrite." },
];

const routes = [
  {
    label: "A content, blog or brochure site your team edits",
    href: "/technologies/wordpress",
    anchor: "WordPress, the PHP CMS your team edits",
    tail: "is the right call - still PHP, just built for content editors instead of a custom application. We won't sell you a bespoke build where a CMS is what you need.",
  },
  {
    label: "Raw or legacy PHP without a framework",
    href: "/technologies/php",
    anchor: "PHP, the language itself",
    tail: "is where non-framework and legacy PHP lives. Laravel is modern PHP done the framework way; plain PHP and legacy modernization are covered there.",
  },
  {
    label: "A broader web build - design, content and front end together",
    href: "/services/web-design-development",
    anchor: "our web design and development service",
    tail: "covers the full web build. A Laravel app ships its own front end via Blade, Livewire or Inertia, and we scope the bigger picture there.",
  },
];

export function LaravelScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Laravel"
            title="Custom applications, not content sites"
            sub="Laravel's sweet spot is bespoke web applications - the software with real business logic behind it. A typical Laravel engagement is one of these:"
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

        {/* Boundary callout - the PHP-neighbourhood routing. Keeps the page in its
            custom-application lane and hands content/CMS + raw-PHP intent to the
            right sibling, plus the web-dev in-body link. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Both are PHP - but different jobs
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Laravel is for building custom PHP applications. When your project is really one of
                these instead, we&apos;ll point you to the right place rather than force the fit:
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
