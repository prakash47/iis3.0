import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCode, IconServer, IconBolt, IconRefresh, IconShield, IconGauge, IconArrow } from "@/components/icons";

// The raw / plain / no-framework PHP lane + the legacy surface - exactly what the live
// Laravel page routes here (LaravelScope: "raw or legacy PHP without a framework ... plain
// PHP and legacy modernization are covered there"; LaravelFaq: "tiny utilities, or ...
// maintaining an existing custom-PHP codebase, which we cover on our PHP page"). Every
// "application" is qualified as non-framework so this page never re-competes with Laravel's
// printed "custom PHP web applications". The boundary callout reciprocates back to Laravel
// with a differently-worded anchor and routes content/store intent to the right sibling.
const uses = [
  { icon: <IconCode className="h-5 w-5" />, t: "Custom PHP without a framework", d: "Bespoke PHP applications where a full framework would be overhead you do not need - tight control over what runs, fewer moving parts, no framework upgrade treadmill. The discipline stays the same: typed, tested, under Composer." },
  { icon: <IconServer className="h-5 w-5" />, t: "APIs, services and endpoints", d: "REST and JSON APIs, webhook receivers and single-purpose services in plain PHP or a micro-framework like Slim - a clean, documented surface for a front end, a mobile app or another system to talk to." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Small tools, scripts and CLIs", d: "The one-endpoint internal tool, the cron job, the import script, the snippet embedded in an existing PHP page - small utilities done to the same bar as an application, not thrown together and forgotten." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Legacy PHP rescue & modernization", d: "The biggest lane: an old codebase on an end-of-life PHP line, often with no framework or an old one and no tests. We move it forward incrementally, with the lights on, instead of a big-bang rewrite." },
  { icon: <IconShield className="h-5 w-5" />, t: "Security & version upgrades", d: "Getting a codebase off an unsupported PHP line and onto one that still gets security patches, closing the classic injection and escaping gaps along the way. Often the single highest-value, lowest-drama piece of work." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Maintenance & support", d: "Ongoing care for an existing custom-PHP codebase - dependency and version updates, bug fixes and small features - so a running system stays healthy instead of drifting quietly toward the danger zone." },
];

const routes = [
  {
    label: "A new custom application you want built on a framework",
    href: "/technologies/laravel",
    anchor: "Laravel, for building a new custom application on a framework",
    tail: "is usually the better call - shared conventions, an ORM, auth and an admin story in the box, and a large hiring pool. Plain PHP is the right base for small, tightly-scoped work and for modernizing what already exists; a greenfield application with real scope belongs on the framework.",
  },
  {
    label: "A content, blog or brochure site your team edits",
    href: "/technologies/wordpress",
    anchor: "WordPress, when the job is content not code",
    tail: "is the honest choice - still PHP, just built for editors with themes and plugins rather than a codebase. We will not sell you a bespoke build where a CMS is what you actually need.",
  },
  {
    label: "An online store or shopping cart",
    href: "/technologies/woocommerce",
    anchor: "WooCommerce, the self-hosted PHP store",
    tail: "is where PHP e-commerce lives - a catalog, cart and checkout you own on WordPress. Building all of that from raw PHP is rarely worth it when a mature store platform exists.",
  },
];

export function PhpScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with PHP"
            title="Raw, custom and legacy PHP - not content sites"
            sub="This page is the plain-PHP and legacy lane: bespoke PHP without a heavy framework, APIs and small tools, and the whole job of keeping and modernizing PHP you already run. A typical engagement is one of these:"
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

        {/* Boundary callout - reciprocates Laravel's inbound link and routes framework /
            content / store intent to the right sibling rather than forcing the fit. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                When it is really a framework, a CMS or a store
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Plain PHP is the right base for small, tightly-scoped work and for modernizing what
                already exists. When your project is really one of these, we will point you to the
                right place rather than talk you into hand-rolling it:
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
