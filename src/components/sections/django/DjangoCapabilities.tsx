import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDatabase, IconGrid, IconServer, IconLayout, IconLock, IconBolt, IconChat, IconClock, IconShield, IconFileText, IconEye, IconCpu } from "@/components/icons";

// The E-E-A-T CENTREPIECE and main proof substitute (there is NO own-site Django to
// inspect). Current 2026 vocabulary - Django 5.2 LTS / 6.0, Python 3.13/3.14, async views
// + async ORM query methods (stated precisely, not "fully async"), DRF + Django Ninja,
// HTMX, Channels, Celery + 6.0 built-in Tasks, native CSP, Wagtail, pytest-django, uv/Ruff.
// ORM = Django ORM (NOT SQLAlchemy - that's the Python page). Dated framing (Django 1.x,
// Python 2, function-views-only, "Django can't do async") would detonate the proof.
const caps = [
  { icon: <IconDatabase className="h-5 w-5" />, t: "The ORM & data modelling", d: "Models, relationships, typed fields and versioned migrations over PostgreSQL. The senior work is indexes, select_related and prefetch_related and a query budget - the ORM is easy to make slow, so killing N+1s and reading QuerySet.explain() is the real skill." },
  { icon: <IconGrid className="h-5 w-5" />, t: "The Django admin as a real back office", d: "The admin nobody else ships, turned into an actual internal tool: custom ModelAdmin, inlines, bulk actions, list filters and permissions, themed with django-unfold so it looks like your product. A genuine back office in days, not a raw scaffold left exposed." },
  { icon: <IconServer className="h-5 w-5" />, t: "APIs with DRF or Django Ninja", d: "Django REST Framework for the mature, batteries-included REST toolkit - serializers, viewsets, auth, throttling - or Django Ninja for FastAPI-style typed, async, Pydantic-validated endpoints inside Django. Strawberry for GraphQL, versioning and pagination handled." },
  { icon: <IconLayout className="h-5 w-5" />, t: "The interactivity choice", d: "Django templates plus HTMX for the low-JS, server-rendered path that took over in 2026 - rich interactivity without shipping a SPA - or a decoupled React and Next.js front end on a DRF or Ninja API when the UI genuinely needs it." },
  { icon: <IconLock className="h-5 w-5" />, t: "Auth & permissions", d: "Sessions out of the box, django-allauth for social login, MFA and email flows, dj-rest-auth or JWT for API clients, and Django's permission system extended to object-level and role-based access." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Async views & the async ORM, honestly", d: "Async views on ASGI and the ORM's async query methods - aget, async iteration, the new AsyncPaginator - for high-concurrency I/O. And the honest line: much of Django is still synchronous, so we use async where it earns its keep and don't pretend Django is FastAPI." },
  { icon: <IconChat className="h-5 w-5" />, t: "Realtime with Channels", d: "WebSockets and long-lived connections - notifications, presence, live dashboards, chat - with Django Channels over ASGI and a Redis channel layer. Socket auth, reconnection and scale-out thought through, with Node flagged when realtime is the whole product." },
  { icon: <IconClock className="h-5 w-5" />, t: "Background jobs & scheduling", d: "Slow or flaky work - email, reports, exports, scheduled jobs - moved off the request path onto Celery with Redis, or the lighter built-in Tasks framework new in Django 6.0. Retries with backoff, periodic schedules and separate workers." },
  { icon: <IconShield className="h-5 w-5" />, t: "Security to Django's high defaults", d: "Django's strongest card, used properly: CSRF protection, template auto-escaping against XSS, the ORM's parameterised queries against SQL injection, clickjacking and HSTS via the security middleware, and native Content Security Policy new in Django 6.0." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Content platforms with Wagtail", d: "When the job is a real content platform - editorial workflow, page trees, structured content, a friendly editor experience - Wagtail on Django, not a raw admin. A custom platform your team runs, distinct from a brochure site you'd sooner edit in WordPress." },
  { icon: <IconEye className="h-5 w-5" />, t: "Testing with pytest-django", d: "pytest-django with fixtures, factories and parametrization, feature tests driven through the real request path against a Postgres container rather than over-mocked, and coverage gates. Fast enough to run on every commit, so a green suite means something." },
  { icon: <IconCpu className="h-5 w-5" />, t: "In front of Python data & ML", d: "Django's natural home is the web app and admin on top of your data - dashboards, jobs you trigger and monitor, results from a Python data or ML backend surfaced to real users. The modelling itself is Python work; Django is the product around it, not where we invent an accuracy number." },
];

export function DjangoCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Django"
            title="Django the 2026 way, not the Django 1.x way"
            sub="There's no live Django running this static Next.js site to point at, so the proof is the depth. This is current to Django 5.2 LTS and Django 6.0 on Python 3.13 - the built-in admin, the ORM, DRF and HTMX, not the function-view, Python-2, 'just Rails for Python' Django its reputation is stuck on."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c) => (
            <div key={c.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {c.icon}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The senior-opinion default-architecture line (deployment lives here) */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default Django architecture:</span>{" "}
              Django 5.2 LTS on Python 3.13 for anything that needs to sit still, or Django 6.0 when a
              build wants the newest. PostgreSQL as the store, DRF or Django Ninja for APIs, Django
              templates with HTMX or a decoupled React and Next.js front end chosen per app. Celery on
              Redis, or the built-in Tasks framework, when work needs to leave the request path;
              Channels over ASGI for realtime; pytest-django from the first commit; uv and Ruff for a
              fast reproducible toolchain. Deployed on ASGI behind Gunicorn with Uvicorn workers in
              multi-stage Docker, WhiteNoise or a CDN for static, Redis for cache and sessions. We
              reach for FastAPI when the job is a pure async API-first service, Node when realtime is
              the whole product, and WordPress when it&apos;s really a simple editable content site.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
