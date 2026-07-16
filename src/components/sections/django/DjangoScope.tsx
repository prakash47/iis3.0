import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGrid, IconServer, IconFileText, IconLock, IconCode, IconCpu, IconArrow } from "@/components/icons";

// Django's lane, drawn tightly against the freshly-built Python page (which owns the
// language + FastAPI/Flask + data/ML) and WordPress (content). The routing callout is
// the anti-cannibalization spine. Consistent with the published position: Django = full
// web platform + admin + ORM + auth + content/admin-heavy + DRF APIs, and the web app in
// front of Python data/ML (the "best for" union of what Python + Laravel pages published).
const uses = [
  { icon: <IconGrid className="h-5 w-5" />, t: "Content & admin-heavy web apps", d: "The apps Django is built for: real business logic, a data model, and a production admin your team runs the operation from, out of the box." },
  { icon: <IconServer className="h-5 w-5" />, t: "Internal tools & back-office portals", d: "Operations dashboards, staff portals, vendor and customer portals - auth, roles and permissions handled by the framework, not hand-rolled." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Custom content platforms", d: "A real content platform with editorial workflow, page trees and structured content on Wagtail, the Django CMS - not a simple brochure site (that's WordPress)." },
  { icon: <IconLock className="h-5 w-5" />, t: "Membership & auth-heavy apps", d: "Sign-up, roles, subscriptions and permission-heavy products - Django's auth, sessions and object-level permissions are a genuine head start." },
  { icon: <IconCode className="h-5 w-5" />, t: "DRF APIs for a Django app", d: "REST and JSON APIs with Django REST Framework or Django Ninja, exposed from the Django app you're already building - for a mobile app or a separate front end." },
  { icon: <IconCpu className="h-5 w-5" />, t: "The web app in front of Python data or ML", d: "The dashboard, admin and API that surface your Python data pipelines or ML models to real users - since Django is already Python, it sits there naturally." },
];

const routes = [
  {
    label: "A new API-first or async service where raw throughput is the point",
    href: "/technologies/python",
    anchor: "Python the language - FastAPI, Flask, data and ML",
    tail: "is the sharper call. Django 6.0 has genuine async, but for a pure API-first service FastAPI is still the 2026 default, and it lives on the Python page.",
  },
  {
    label: "A simple content or blog site a non-technical team edits itself",
    href: "/technologies/wordpress",
    anchor: "WordPress, the off-the-shelf CMS for editors",
    tail: "is usually the right call - less engineering than a custom build. Django earns its keep for custom content platforms, not a five-page editable site.",
  },
  {
    label: "A finished AI product - a chatbot, RAG assistant or AI feature",
    href: "/services/ai-development",
    anchor: "our AI development service",
    tail: "is a scoped service priced to the requirement. Django is the web app that sits in front of your data or model - not where we invent an AI price.",
  },
  {
    label: "A broader web build - design, content and front end together",
    href: "/services/web-design-development",
    anchor: "our web design and development service",
    tail: "covers the full web build. Django ships its own front end via templates or HTMX, and we scope the bigger picture there.",
  },
];

export function DjangoScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Django"
            title="The web app with the boring parts already built"
            sub="Django's lane is the real application - business logic, a data model, an admin, auth - where batteries-included saves the most. A typical Django engagement is one of these:"
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

        {/* Boundary routing - keeps the page out of the Python page's API-first/data/ML
            lane and WordPress's editable-content lane. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Which job is really yours? Here&apos;s where each one goes
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This page owns the batteries-included Django web platform - the admin, ORM, auth and
                DRF APIs. When your project is really one of these instead, we&apos;ll point you to the
                right place rather than force the fit:
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
