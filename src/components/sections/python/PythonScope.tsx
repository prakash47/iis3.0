import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconServer, IconCode, IconDatabase, IconCpu, IconRefresh, IconLayers, IconArrow } from "@/components/icons";

// Python's distinctive scope question is NOT Node's "do you even need a backend?" -
// it's "WHICH Python is this?" Python spans web + data + ML, so the page's job is to
// narrow, name and route. These 6 use-cases own the Python-language lane; the routing
// callout below is the anti-cannibalization spine (django, ai-development, nodejs,
// custom-software all get their intent routed OUT with the right anchors).
const uses = [
  { icon: <IconServer className="h-5 w-5" />, t: "FastAPI backends & APIs", d: "Typed, async REST APIs with FastAPI and Pydantic v2 - the modern Python default, with validation and interactive docs generated straight from your models." },
  { icon: <IconCode className="h-5 w-5" />, t: "Python web apps", d: "API-first web apps on FastAPI or Flask. A content and admin-heavy site is Django's home ground, and we cover that on the Django page." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Data engineering & pipelines", d: "ETL, analytics and reporting with pandas and Polars, orchestrated with Airflow or Prefect - idempotent, observable, tested pipelines, not notebooks in production." },
  { icon: <IconCpu className="h-5 w-5" />, t: "ML integration", d: "Integrating and serving machine-learning models with scikit-learn, PyTorch and Hugging Face - the engineering, not the research. Want a finished AI product? That routes to our AI service." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Automation & scripting", d: "Scraping, data wrangling, internal CLIs, scheduled jobs and glue between systems - built to be reliable and re-runnable, because a small script has a way of becoming load-bearing." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Backends for web & mobile", d: "The Python server behind a React, Next.js or React Native front end - auth, data, business logic and integrations, typed end to end." },
];

// The routing table - each "not this page's job" intent maps to the right internal
// destination with a deliberately-distinct, framework/role-qualified anchor.
const routes = [
  {
    label: "A content and admin-heavy web app",
    href: "/technologies/django",
    anchor: "Django, the batteries-included Python web framework",
    tail: "gives you the admin, ORM and auth out of the box - still Python, just the framework built for that shape.",
  },
  {
    label: "Real-time, high-concurrency, one JS language across the stack",
    href: "/technologies/nodejs",
    anchor: "Node.js, the other backend runtime",
    tail: "is often the better fit, and we build there too. Many teams run both - Node for the real-time layer, Python behind it for data and AI.",
  },
  {
    label: "A finished AI product - a chatbot, RAG assistant or AI feature",
    href: "/services/ai-development",
    anchor: "AI development",
    tail: "is a scoped service, priced to the requirement - not a language you buy by the tier. We route the product there, not fake it here.",
  },
  {
    label: "A bespoke system or standalone data or ML platform",
    href: "/services/custom-software-development",
    anchor: "custom software development",
    tail: "scopes it through a fixed-price Discovery Sprint that ends in a written plan and a fixed build quote.",
  },
];

export function PythonScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Python"
            title="Python is three jobs, not one"
            sub="Python spans web, data and AI, so 'we do Python' means little on its own. Here's the work this page owns - and, honestly, where we'll send you instead when your job belongs somewhere else."
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

        {/* The routing callout - the honest anti-cannibalization spine. No competitor
            offers this; it pre-qualifies leads and keeps the page in its lane. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Which Python job is yours? Here&apos;s where each one goes
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This page owns Python the language, FastAPI and Flask, data, automation and ML
                integration. When your project is really one of these instead, we&apos;ll point you to
                the right place rather than force the fit:
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
