import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the AEO goldmine (is-PHP-dead,
// is-Laravel-worth-it, Laravel vs Node/Django/WordPress/raw-PHP, Blade vs Livewire vs
// Inertia, cost). Every answer is 2026-correct (Laravel 13, PHP 8.4/8.5, Livewire 4,
// Filament 5, Pest 4), honest, and routes intent. The "Official Laravel Partner" answer
// is a hard honesty line (the program is real and public). Cost byte-identical to tiers.
const faqs = [
  {
    question: "What is Laravel used for?",
    answer:
      "Laravel is a full-stack PHP web framework used to build custom web applications, SaaS products, REST and JSON:API backends, admin panels and dashboards, and CRUD-heavy business systems. It ships with routing, an ORM (Eloquent), auth, queues, caching and a templating engine out of the box, so teams build faster without wiring those together. In 2026 it is the most-used PHP framework, and Laravel 13 even ships a first-party AI SDK for AI-enabled apps.",
  },
  {
    question: "Is Laravel frontend or backend?",
    answer:
      "Laravel is primarily a backend framework - it runs on the server and handles routing, business logic, the database and APIs. It is full-stack in that it also renders the front end through Blade, Livewire or Inertia, so a Laravel app can be the whole application rather than just an API. When you want a decoupled browser UI, Laravel serves the API and React, Next.js or Vue serves the front end.",
  },
  {
    question: "Is PHP dead in 2026?",
    answer:
      "No, and the data isn't close. PHP still powers roughly three-quarters of all websites whose server-side language is known, by W3Techs' count, far ahead of any other, and PHP 8.4 and 8.5 are current and actively developed. 'PHP is dead' describes a dated reputation earned in the PHP 4 and 5 era, not today's usage - modern PHP is typed, fast and a genuinely different language, and Laravel 13 is thriving on top of it.",
  },
  {
    question: "Is Laravel still worth using in 2026?",
    answer:
      "Yes. Laravel is the leading PHP framework by a wide margin, on an annual release cadence - Laravel 13 shipped in March 2026 with a first-party AI SDK, JSON:API resources and native vector search. The ecosystem is expanding, not contracting: Livewire 4, Filament 5, Inertia 2, Reverb for realtime, Pest 4 for testing and Laravel Cloud for deployment. For CRUD-heavy web apps and SaaS with a large talent pool behind it, it is a safe, well-supported default.",
  },
  {
    question: "Are you an official Laravel Partner?",
    answer:
      "No - and we won't imply we are. The Laravel Partners program is a real, publicly listed, vetted program, and we are not in it, so claiming or hinting it would be a lie you could check in one click. We hold no Laravel certification either. What we offer instead is verifiable: the engineering depth on this page, transparent published pricing, and standard-Laravel code you own outright.",
  },
  {
    question: "Laravel vs Node.js - which backend should I choose?",
    answer:
      "Laravel is excellent for conventional server-rendered web apps and CRUD-heavy products with a fast, batteries-included workflow. Node.js is the better fit for real-time features, high-concurrency I/O and one JavaScript or TypeScript language across front and back end. Neither wins in the abstract - it depends on your product and team, and we build in both.",
  },
  {
    question: "Laravel vs Django - which should I use?",
    answer:
      "They're close cousins - both batteries-included, full-stack MVC frameworks with an ORM, auth and an admin story built in. Choose Laravel when your team is in PHP, or when Livewire, Filament and the Laravel hosting ecosystem fit the product. Choose Django when Python is your language, especially if data or ML sits behind the app. We build both and recommend the honest fit, not the one we feel like selling.",
  },
  {
    question: "Laravel vs WordPress - which do I need?",
    answer:
      "Different jobs, both PHP. If you need a content, blog or brochure site your team edits through an admin, that is WordPress. If you need a custom application, SaaS, portal, admin panel or anything with bespoke business logic and data, that is Laravel. A useful rule: a content site is WordPress, custom software with a web front end is Laravel.",
  },
  {
    question: "Laravel vs raw PHP - do I need a framework?",
    answer:
      "For anything beyond a small script, a framework saves you from re-implementing routing, security, auth and database access by hand, and Laravel gives you those with strong, well-documented conventions. Raw or core PHP still makes sense for tiny utilities, or for maintaining an existing custom-PHP codebase, which we cover on our PHP page. This page is about building modern applications on the Laravel framework.",
  },
  {
    question: "Blade vs Livewire vs Inertia - which front end should my Laravel app use?",
    answer:
      "Blade is Laravel's server-rendered templating - simplest, best for content-driven pages. Livewire keeps the logic in PHP while giving you reactive, dynamic interfaces without a separate JS framework - ideal for admin panels, dashboards and form-heavy SaaS, and it is what Filament is built on. Inertia lets you build the front end in React or Vue against your Laravel backend with no separate API - best for a rich SPA-style UI. We pick per product and explain the trade-off.",
  },
  {
    question: "Can you build a SaaS product on Laravel?",
    answer:
      "Yes - Laravel is a common SaaS foundation, with first-party pieces for the hard parts: Cashier for Stripe or Paddle subscription billing, Sanctum and Passport for auth and API tokens, and multi-tenancy patterns for per-customer data. A SaaS platform is genuinely bespoke, so it is scoped as custom software through a Discovery Sprint that ends in a fixed build quote, rather than dropped into a fixed web tier sight-unseen.",
  },
  {
    question: "Can you build an admin panel or internal tool in Laravel?",
    answer:
      "Yes - this is one of Laravel's biggest 2026 strengths. Filament, built on Livewire, generates production admin panels, CRUD resources, dashboards and internal tools fast, without the throwaway feel of a hand-rolled admin. Bespoke internal tools, portals and back-office systems are scoped as custom software through a fixed-price Discovery Sprint.",
  },
  {
    question: "Does this website run on Laravel?",
    answer:
      "No - and we won't pretend it does. This site is a static Next.js and React build, and even the build toolchain runs on Node, not PHP, so Laravel powers none of what you are reading. We could have bolted on a Laravel-powered badge in minutes; we didn't, because that is the moment you stop being able to trust anything else on the page. The proof here is the engineering depth of this page and the standard Laravel code you own outright.",
  },
  {
    question: "How much does Laravel development cost?",
    answer:
      "We publish fixed tiers instead of a quote wall: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and an MVP Sprint from $12,000 for a web app with a real backend. A Laravel web app or SaaS usually lands at the upper tiers; a bespoke system, API or platform is scoped through a custom-software Discovery Sprint from $1,000 that ends in a fixed build quote. No hourly rates, no mystery pricing.",
  },
  {
    question: "Do I own the Laravel code you build?",
    answer:
      "Yes - 100% ownership. It is standard Laravel on mainstream open-source packages, in your repository, deployed to your own cloud or Laravel Cloud account, so the code, database schema, data and IP are yours from day one and any competent Laravel team can take it over. No proprietary lock-in, no framework only we understand. Fixed pricing and code you own outright are the whole point.",
  },
];

export function LaravelFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Laravel development, answered" />
        </Reveal>
        <Reveal className="mt-9">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                  {f.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
