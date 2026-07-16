import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconServer, IconDatabase, IconLayout, IconGrid, IconBolt, IconType } from "@/components/icons";

// Fit-framed benefits + the "Is PHP dead? No" myth-buster (the #1 buyer objection,
// answered on-page like Angular's "Is Angular dead? No" - with the honest admission
// that the reputation was earned) + the "when NOT to use Laravel" anti-recommendation
// (the cross-link engine to node/python/custom-software). All facts attributed, none fabricated.
const pillars = [
  { icon: <IconServer className="h-5 w-5" />, t: "Batteries included", d: "Routing, an ORM, auth, queues, caching, a mailer, a scheduler and an admin story all ship in the box - so you build product, not plumbing, and reach a maintainable app faster." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Eloquent & Artisan", d: "Eloquent makes data modelling fast and readable, and Artisan's generators automate the repetitive parts - two reasons a small team ships a lot with Laravel." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Your choice of front end", d: "Blade for server-rendered pages, Livewire for rich interactivity in PHP, or Inertia with React or Vue for a full SPA - one framework, the right view layer per app." },
  { icon: <IconGrid className="h-5 w-5" />, t: "A mature ecosystem", d: "Filament for admin, Cashier for billing, Sanctum for auth, Horizon for queues, Reverb for realtime - first-party packages for the hard parts, not a scavenger hunt." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Fast to production", d: "Laravel's conventions and tooling get you from idea to a working, tested product quickly - ideal for MVPs, SaaS and internal tools where time-to-live matters." },
  { icon: <IconType className="h-5 w-5" />, t: "Modern, typed PHP", d: "PHP 8.4 and 8.5 are typed, fast and static-analysable with PHPStan - far from the untyped, dated PHP the framework's reputation is stuck on." },
];

export function LaravelWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* The myth-buster - the buyer's #1 Laravel objection, answered on-page with
            attributed facts and an honest admission the reputation was earned. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is PHP dead in 2026? <span className="gradient-text">No.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                PHP still powers roughly three-quarters of all websites whose server-side language is
                known (by W3Techs&apos; count), far ahead of any other, and PHP 8.4 and 8.5 are
                current and actively developed. The honest part: PHP earned its dated reputation, back
                when PHP 4 and 5 had an inconsistent standard library, injection-prone database APIs
                and loose-typing footguns. Modern PHP is a different language - strict types, enums,
                readonly, property hooks, a pipe operator and a JIT - and Laravel 13 is thriving on
                top of it. We&apos;d rather tell you that straight than pretend PHP was always great.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Laravel"
            title="Why teams build web apps on Laravel"
            sub="Laravel is the framework we reach for when the job is a real web application shipped fast, in a language with a huge talent pool. Here's what it buys you - and, honestly, when it's the wrong tool."
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

        {/* The anti-recommendation - cross-link engine to the other backends. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use Laravel
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Laravel is our pick for conventional server-rendered and CRUD-heavy web apps with a
              fast, batteries-included workflow. It is the wrong tool - and we&apos;ll say so - when
              the whole product is hard real-time at scale: for tens of thousands of persistent live
              connections, chat backbones or high-fanout streaming,{" "}
              <Link href="/technologies/nodejs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Node.js, the JavaScript event-loop runtime
              </Link>{" "}
              is the sharper tool (Laravel does real-time fine with Reverb, just not as a dedicated
              backbone at extreme scale). When the core of the work is data engineering, ML or
              scientific computing,{" "}
              <Link href="/technologies/python" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Python, the data and ML language
              </Link>{" "}
              leads. And if a JavaScript-everywhere team wants one language front to back, Node is the
              honest pick. Not sure which way to go?{" "}
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
