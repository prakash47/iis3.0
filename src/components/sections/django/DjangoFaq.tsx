import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the AEO goldmine (Django vs FastAPI/
// Flask/Laravel/Node/WordPress, is-Django-relevant, is-Django-secure, cost). Every answer
// is 2026-correct (Django 5.2 LTS / 6.0, Python 3.13, DRF/Ninja, HTMX, Channels, Wagtail),
// honest, and routes intent. CONSISTENCY LOCK with the Python page: FastAPI = the API-first
// async default; Django = the complete web platform + admin. Cost byte-identical to tiers.
const faqs = [
  {
    question: "What is Django used for?",
    answer:
      "Django is a batteries-included Python web framework for building complete web applications: content and admin-heavy sites, SaaS products, portals, dashboards and REST APIs. It ships an ORM, authentication, a production-ready admin, forms, security defaults and a templating engine out of the box, so a small team builds the whole application on one framework instead of assembling parts. Its natural home is a web app that leans on Python data or ML behind it.",
  },
  {
    question: "Is Django frontend or backend?",
    answer:
      "Django is primarily a backend framework - it runs on the server and handles routing, business logic, the database, auth and APIs. It is full-stack in that it also renders the front end through its template engine, so a Django app can be the whole application rather than just an API. When you want a decoupled browser UI, Django with DRF serves the API and React, Next.js or Angular serves the front end.",
  },
  {
    question: "Is Django good for web development?",
    answer:
      "Yes - for content and admin-heavy web apps and SaaS it is one of the strongest 2026 choices, precisely because so much is included and secure by default. Its built-in admin alone can save weeks of back-office UI, and no other mainstream framework ships one. It is a weaker fit for a tiny API-only microservice, where FastAPI is lighter, and for a simple editable brochure site, where a CMS like WordPress is less engineering than a custom build.",
  },
  {
    question: "Django vs FastAPI - which should I use?",
    answer:
      "Different jobs, both Python. Use Django when you want a complete web platform with a built-in admin, ORM and auth out of the box - a content, admin or SaaS app where batteries-included saves the most time. Use FastAPI for a new API-first or async, high-concurrency service; it is the strongest 2026 default for that shape, and we cover it on our Python page. Many teams even run both. We pick per project and tell you why.",
  },
  {
    question: "Django vs Flask - which should I use?",
    answer:
      "Flask is a minimal micro-framework: you assemble the ORM, auth and admin yourself, which is ideal for small, simple services. Django gives you all of that in the box, which is why it wins for larger, longer-lived applications where an admin, auth and structure matter. Flask and FastAPI are the lighter, API-first Python options we cover on our Python page; this page is about building full applications on Django.",
  },
  {
    question: "Django vs Laravel - which should I use?",
    answer:
      "They're close cousins - both batteries-included, full-stack MVC frameworks with an ORM, auth and an admin story built in. Choose Django when Python is your language, especially if data or ML sits behind the app. Choose Laravel when your team is in PHP, or when Livewire, Filament and the Laravel hosting ecosystem fit the product. We build both and recommend the honest fit, not the one we feel like selling.",
  },
  {
    question: "Django vs Node.js - which backend should I choose?",
    answer:
      "Django is excellent for content, admin and CRUD-heavy web apps, and for anything that leans on Python's data or ML ecosystem. Node.js is the better fit for real-time features, high-concurrency I/O and one JavaScript language across front and back end. Neither wins in the abstract - it depends on your product and team, and we build in both.",
  },
  {
    question: "Is Django still relevant in 2026?",
    answer:
      "Yes. Django 6.0 shipped in December 2025 and Django 5.2 LTS carries security support into 2028, so it is actively developed, not legacy. The 'old and slow' reputation is dated: async views and async ORM methods have matured, DRF and Django Ninja cover modern APIs, the Django and HTMX pattern gives rich interactivity without a heavy JS SPA, and the built-in admin and security defaults remain things no other framework hands you for free. It is not the right pick for a pure API-first async microservice - that's FastAPI's lane - but for a full web platform it is a safe, well-supported 2026 default.",
  },
  {
    question: "Is Django good for building APIs?",
    answer:
      "Yes, through Django REST Framework (DRF), the battle-tested API layer - serializers, viewsets, auth and permissions - ideal when the API is part of, or attached to, a larger Django app and you want the admin, ORM and auth alongside it. Django Ninja is the modern, async, Pydantic-based option when you want a FastAPI-style feel inside Django. For a standalone, API-first or high-concurrency async service with no web app around it, FastAPI is usually the cleaner default - that's on our Python page.",
  },
  {
    question: "Django vs WordPress - which do I need?",
    answer:
      "Different jobs. If you need a content, blog or brochure site your team edits through a familiar admin with themes and plugins, that is WordPress. If you need a custom content platform with bespoke models, editorial workflow and real business logic, that is Django - often with Wagtail, the Django CMS. A useful rule: an editable content site is WordPress; a custom application or a content platform built to your own rules is Django.",
  },
  {
    question: "Can you build a SaaS or admin dashboard on Django?",
    answer:
      "Yes - it's one of Django's biggest strengths. The built-in admin gives you a production back-office fast, and the framework's auth, ORM and permissions make multi-tenant SaaS, portals and dashboards natural. A SaaS platform is genuinely bespoke, so it's scoped as custom software through a fixed-price Discovery Sprint that ends in a written plan and a fixed build quote, rather than dropped into a fixed web tier sight-unseen.",
  },
  {
    question: "Is Django secure?",
    answer:
      "Security is one of the reasons to choose it. Django protects against the common web risks by default - SQL injection through the ORM, cross-site scripting via auto-escaping templates, CSRF, clickjacking - and ships secure password hashing and a hardened auth system, with native Content Security Policy added in Django 6.0. Nothing is automatic if you fight the framework, but secure defaults you'd otherwise have to remember are exactly why teams reach for it.",
  },
  {
    question: "Does this website run on Django?",
    answer:
      "No - and we won't pretend it does. This site is a static Next.js and React build, and even the build toolchain runs on Node, not Python, so Django powers none of what you are reading. We could have added a Built-with-Django badge in minutes; we didn't, because that is the moment you could no longer trust anything else on the page. The proof here is the engineering depth of this page and the standard-Django code, admin and database you own outright.",
  },
  {
    question: "How much does Django development cost?",
    answer:
      "We publish fixed tiers instead of a quote wall: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and an MVP Sprint from $12,000 for a web app with a real backend. A Django web app or SaaS usually lands at the upper tiers; a bespoke system, platform or standalone API is scoped through a custom-software Discovery Sprint from $1,000 that ends in a fixed build quote. No hourly rates, no mystery pricing.",
  },
  {
    question: "Do I own the Django code you build?",
    answer:
      "Yes - 100% ownership. It is standard Django on mainstream open-source packages, in your repository, deployed to your own cloud, so the code, database schema, data and IP are yours from day one and any competent Django team can take it over. No proprietary lock-in, no framework only we understand. Fixed pricing and code you own outright are the whole point.",
  },
];

export function DjangoFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Django development, answered" />
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
