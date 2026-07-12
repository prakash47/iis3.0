import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconDatabase, IconLayout, IconServer, IconLock, IconGrid, IconClock, IconChat, IconEye, IconGauge, IconCreditCard, IconShield } from "@/components/icons";

// The E-E-A-T CENTREPIECE and main proof substitute (there is NO own-site Laravel to
// inspect). Current 2026 vocabulary - Laravel 13, PHP 8.4/8.5, Livewire 4, Filament 5,
// Pest 4, Reverb, Octane/FrankenPHP, Laravel Cloud. Dated framing (Laravel 5, PHP 7,
// "PHP has no types", Laravel Mix, Homestead) would detonate the whole proof strategy.
const caps = [
  { icon: <IconType className="h-5 w-5" />, t: "Modern, typed PHP 8.4/8.5", d: "Property hooks, asymmetric visibility, enums, readonly and the pipe operator, in a codebase type-checked by PHPStan or Larastan and formatted by Pint. A typed, statically-analysed language in 2026, not the untyped PHP of its reputation." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Eloquent ORM & data modelling", d: "Relationships, typed casts and versioned migrations over PostgreSQL or MySQL. The senior work is indexes, eager loading and a query budget - Eloquent is easy to make slow, so killing N+1s is the real skill." },
  { icon: <IconLayout className="h-5 w-5" />, t: "The interactivity choice", d: "Blade for content, Livewire 4 (single-file components, Islands) for rich interactivity without leaving PHP, Inertia 2 with React or Vue for an SPA on one codebase, or a pure API. We match the tool to the app, not to habit." },
  { icon: <IconServer className="h-5 w-5" />, t: "API development", d: "Versioned REST and Laravel 13's first-party JSON:API resources, token and SPA auth via Sanctum, validation as the contract, and docs that track the code. Pagination, rate limiting and consistent error shapes handled." },
  { icon: <IconLock className="h-5 w-5" />, t: "Auth & authorization", d: "The Laravel 13 starter kits, or Fortify and Sanctum, for login, registration and tokens, with policies and gates for who-can-do-what. Passkeys, social login and SSO via WorkOS or Socialite when you need them." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Admin panels with Filament", d: "Filament, built on Livewire, for the admin, CRUD, dashboards and internal tooling that would otherwise cost weeks: resources, tables, forms, policies and multi-tenancy out of the box." },
  { icon: <IconClock className="h-5 w-5" />, t: "Queues, jobs & scheduling", d: "Slow or flaky work - email, PDFs, exports, webhooks - moved off the request path onto Redis-backed queues with Horizon: retries with backoff, batching, unique and rate-limited jobs, plus a scheduler for cron." },
  { icon: <IconChat className="h-5 w-5" />, t: "Realtime with Reverb", d: "Live features - notifications, presence, dashboards, chat - over WebSockets on Laravel's first-party Reverb server, broadcast through Echo and paired cleanly with Livewire or Inertia. Reconnection and scaling thought through." },
  { icon: <IconEye className="h-5 w-5" />, t: "Testing with Pest 4", d: "Pest as the modern default: feature tests through the HTTP layer against a real database, plus Pest 4 browser testing (Playwright-powered) with visual regression and parallel sharding. Fast enough to run on every commit." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Performance, measured", d: "Eager loading and a query budget first, then Redis caching, then Octane on FrankenPHP or Swoole to keep the app in memory for a large throughput gain once it's earned. We profile with Pulse before we optimise." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Payments, billing & multi-tenancy", d: "Subscriptions, metered billing, invoices and webhooks through Cashier (Stripe or Paddle), and multi-tenant SaaS - single-database or database-per-tenant - done deliberately, with the isolation and billing edge cases handled." },
  { icon: <IconShield className="h-5 w-5" />, t: "Security to an OWASP standard", d: "Framework defaults used properly: validation at every trust boundary, CSRF and origin-aware request-forgery protection, Eloquent's parameter binding against SQL injection, Blade escaping against XSS, guarded mass assignment and signed URLs." },
];

export function LaravelCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Laravel"
            title="Laravel the 2026 way, not the Laravel 5 way"
            sub="There's no live Laravel running this static Next.js site to point at, so the proof is the depth. This is current to Laravel 13 on PHP 8.4 and 8.5, Livewire 4, Filament 5 and Pest 4 - not the Laravel 5, PHP 7, no-type-hints stack the framework's reputation is stuck on."
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

        {/* The senior-opinion default-architecture line */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default Laravel architecture:</span>{" "}
              Laravel 13 on PHP 8.4 or 8.5, typed and static-analysed with PHPStan and formatted with
              Pint. Livewire 4 when the team is PHP-first, Inertia 2 with React or Vue when it wants an
              SPA - chosen per app, not by default. Eloquent over PostgreSQL, Filament for the admin,
              Redis-backed queues under Horizon, Reverb for realtime, Cashier for billing. Pest from
              the first commit, deployed on Laravel Cloud or Forge. We reach for Node when the product
              is real-time-heavy, and Python when the backend leans on data and ML - and we&apos;ll
              tell you honestly when your job is really WordPress, not a custom Laravel build.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
