import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconServer, IconGrid, IconShield, IconCpu, IconLayout, IconTrendingUp } from "@/components/icons";

// Fit-framed benefits + the "Is Django still relevant in 2026?" myth-buster (the #1
// buyer objection - Django framed as "old/slow vs FastAPI") answered on-page with real
// facts + honest FastAPI concession + the ONE attributed famous-user mention (framework
// evidence, NEVER our clients) + the "when NOT to use Django" cross-link engine. The two
// signature pillars = the admin + security-by-default (matching the hub taglines).
const pillars = [
  { icon: <IconServer className="h-5 w-5" />, t: "The boring 80%, already built", d: "The admin, ORM, migrations, auth, forms and common attack defenses ship in the box - so the budget goes on the 20% that's actually your product, not the plumbing every app needs." },
  { icon: <IconGrid className="h-5 w-5" />, t: "The admin nobody else ships", d: "A production-grade back office generated from your models, out of the box - the internal tool your team runs the business from, that Laravel needs a package for and FastAPI has nothing for." },
  { icon: <IconShield className="h-5 w-5" />, t: "Secure by default", d: "CSRF, SQL-injection protection through the ORM, XSS auto-escaping, clickjacking middleware and, in Django 6.0, native CSP - the security you'd otherwise have to remember, on by default." },
  { icon: <IconCpu className="h-5 w-5" />, t: "A natural home for data & ML", d: "It's already Python, so Django is the obvious web app, admin and API to put in front of your data pipelines or ML models - the interface your users actually see." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Modern without a heavy SPA", d: "The Django and HTMX pattern ships rich, interactive server-rendered UIs with little client JavaScript - a genuine 2026 way to build polished apps fast, small team or not." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "Mature, and hiring is easy", d: "Django is over a decade proven, on a dependable LTS cadence, with a huge talent pool - so what we build is a safe, well-supported bet the next team can maintain." },
];

export function DjangoWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* The myth-buster - the buyer's #1 Django objection, answered with real facts,
            an honest FastAPI concession, and the one attributed famous-user mention. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is Django still relevant in 2026? <span className="gradient-text">Yes.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Django 6.0 shipped in December 2025 with a built-in background-tasks framework, native
                Content Security Policy and template partials, and Django 5.2 LTS is supported into
                2028 - an actively developed framework, not a legacy one. Its real edge is still the
                thing nobody else ships: a production-grade admin generated from your models, plus
                security defaults - CSRF, ORM-parameterised queries, template auto-escaping,
                clickjacking protection, now native CSP - that are on by default. Django runs large
                parts of platforms like Instagram and Pinterest, which is evidence the framework
                scales, not a claim about who we&apos;ve worked with. The honest limit: for a pure
                API-first, high-concurrency async service where raw throughput is the point, FastAPI
                leads, so we&apos;ll point you there rather than force Django. Django&apos;s home ground
                is the complete web platform, and there it&apos;s one of the safest 2026 picks.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Django"
            title="Why teams build web apps on Django"
            sub="Django is the framework we reach for when the job wants an admin, an ORM and auth from day one, and security handled by default. Here's what it buys you - and, honestly, when it's the wrong tool."
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

        {/* The anti-recommendation - the cross-link engine. Fair to Django (it has async,
            Channels, Wagtail); the honesty is about where the specialist tool is sharper. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use Django
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Django is our pick when the job is a real web application with an admin, an ORM and auth
              wanted from day one - content and admin-heavy platforms, SaaS, portals, internal tools.
              It is the wrong tool - and we&apos;ll say so - when the whole product is an API-first,
              async service where raw throughput is the point: Django 6.0 has genuine async now, but
              for that shape{" "}
              <Link href="/technologies/python" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Python, FastAPI and the async API-first lane
              </Link>{" "}
              is the sharper default. When the product is hard real-time at scale - a chat backbone or
              high-fanout streaming - {""}
              <Link href="/technologies/nodejs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Node.js, for real-time and JavaScript-everywhere
              </Link>{" "}
              is sharper, though Django handles ordinary real-time fine with Channels. If you just need
              a content or brochure site a non-technical team edits, that&apos;s often{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                WordPress, the off-the-shelf CMS for editors
              </Link>
              . And if what you actually want is a finished AI product, that&apos;s{" "}
              <Link href="/services/ai-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                our AI development service
              </Link>
              . Not sure which way to go?{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                We&apos;ll pick the right stack
              </Link>{" "}
              for the job, not the one this page happens to be about.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
