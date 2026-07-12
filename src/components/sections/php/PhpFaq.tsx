import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. NO <Link> in any answer (schema leak) -
// routing is described in prose. Deliberately does NOT restage Laravel's spent "Is PHP dead?"
// myth-buster or its market-share clause. "Is my PHP version safe" answers as MECHANISM only
// (EOL = no patches), never enumerating the live support matrix (which churns). PHP-vs-Node-vs
// -Python stays byte-consistent with NodejsFaq and routes new server-app intent to Laravel.
// Cost byte-identical to the published tiers. Cert/partner answer clears every trap.
const faqs = [
  {
    question: "What is PHP used for?",
    answer:
      "PHP is a server-side language that runs a large share of the web. On this page we cover it in its raw, no-framework form: custom PHP applications without a heavy framework, REST and JSON APIs, small tools, scripts and webhook receivers, and - most often - maintaining and modernizing existing PHP codebases. When the job is a new application with real scope, a framework like Laravel is usually the better base, and we will point you there.",
  },
  {
    question: "What is the difference between PHP and Laravel?",
    answer:
      "PHP is the language; Laravel is a framework written in PHP. Laravel is modern PHP done the framework way - it ships routing, an ORM, auth and an admin story so you build product instead of plumbing. This page is about PHP itself: plain PHP without a framework, and keeping or modernizing PHP you already run. If you are building a new custom application, that usually belongs on Laravel, which we cover on its own page.",
  },
  {
    question: "Do I need a PHP framework, or is plain PHP enough?",
    answer:
      "For a single endpoint, a small utility, a webhook receiver or a snippet embedded in an existing page, plain PHP is often simpler and easier to reason about - fewer moving parts and no upgrade treadmill. The moment you have routing, auth, a data layer and background jobs across more than a couple of engineers, hand-rolling those recreates a private framework only your last developer understood. That is when a real framework earns its keep.",
  },
  {
    question: "Is PHP outdated?",
    answer:
      "PHP's reputation was earned honestly - PHP 4 and 5 had an inconsistent standard library and loose-typing footguns. The current language is not that language: PHP 8.4 and 8.5 are typed, have enums and readonly, and are statically analysable. The real risk is not PHP in the abstract, it is which PHP - a codebase on an end-of-life version, untyped and untested, versus a supported line written with modern discipline. We build the second kind.",
  },
  {
    question: "Is PHP secure?",
    answer:
      "Insecure is a property of a codebase and the version it runs on, not of the language. The classic PHP wounds were string-concatenated SQL and unescaped output, and they have standard, checkable defenses: parameterized queries through PDO, output escaping, CSRF tokens, validation at every trust boundary, and a supported PHP line that still gets security patches. We apply those as method - security is a practice you keep, not a stamp we put on the finished product, and we never sell a guarantee.",
  },
  {
    question: "Is my PHP version still safe to run?",
    answer:
      "The mechanism is what matters: once a PHP version reaches end of life, it stops receiving security patches, so new vulnerabilities in the runtime itself are simply never fixed for you. PHP 5.x and 7.x are long past that line, and PHP 8.1 has now reached it too. If you are on one of those, the highest-value first step is getting onto a supported line - which is usually less disruptive than teams fear, and something we do incrementally.",
  },
  {
    question: "Should I rewrite my PHP app or modernize it?",
    answer:
      "Usually modernize. A rewrite restarts the clock on every bug the old system already found and fixed, and the second system almost always overshoots. Most legacy PHP can be walked forward in place - onto a supported version, under Composer, behind tests - with the business still running. A full rewrite is the right call only in narrow cases, like a runtime too old to boot on supported infrastructure or source that is effectively lost. We will tell you honestly which situation you are in.",
  },
  {
    question: "Can you take over or maintain an existing PHP codebase?",
    answer:
      "Yes, and the first step is always an audit rather than a quote. We look at what the application actually does, the state of its dependencies, and whether it can still be upgraded, then tell you whether a rescue is cheaper than a rewrite or the opposite. Ongoing upkeep - version and dependency updates, security patches, bug fixes and small features - runs on a monthly care plan, which we cover on our website maintenance service.",
  },
  {
    question: "PHP vs Node.js vs Python - which backend should I choose?",
    answer:
      "It depends on the workload, and we build in all three. For a new server-rendered, CRUD-heavy web application in PHP, a framework like Laravel is usually the pick; raw PHP is strongest for small services and for maintaining existing PHP. Node.js is the better fit for real-time features, high-concurrency I/O and one JavaScript language across the stack, and Python leads when the work is data, automation or machine learning. We recommend the fit, not the language this page is about.",
  },
  {
    question: "Can you build a REST or JSON API in PHP?",
    answer:
      "Yes. For an API-only service we use plain PHP or a micro-framework like Slim, written to PSR standards - PSR-7 and PSR-15 for HTTP messages and middleware - with validation as the contract, consistent error shapes, and documentation that tracks the code. If the API is part of a larger application with auth, an admin and background jobs, a full framework is usually the better home, and we will say so.",
  },
  {
    question: "Does this website run on PHP?",
    answer:
      "No, and we will not pretend it does. This site is a static Next.js and React build, and even the toolchain that compiles it runs on Node, not PHP - so PHP powers none of what you are reading, right down to the package manager, which is npm and not Composer. The proof on this page is not a badge, it is the engineering depth and the standard, open PHP code you would own outright.",
  },
  {
    question: "Are you certified in PHP, or a PHP partner?",
    answer:
      "There is no company-level or agency-level PHP certification to hold - the Zend Certified PHP Engineer credential is an individual exam a developer sits, not an agency badge - and there is no PHP vendor partner program at all, because no single company owns PHP. It is governed in the open by The PHP Group and the community-funded PHP Foundation, which is something a firm funds, not a badge it earns. We would rather be the firm whose code you can audit than the firm with the most logos.",
  },
  {
    question: "How much does PHP development cost?",
    answer:
      "We publish fixed tiers instead of a quote wall: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and an MVP Sprint from $12,000 for a web app with a real backend. A custom PHP build maps onto those the way any web build does. A legacy rescue, upgrade or modernization is scoped through a custom-software Discovery Sprint from $1,000 that ends in a fixed quote. No hourly rates, no mystery pricing.",
  },
  {
    question: "Do I own the PHP code you write?",
    answer:
      "Yes - 100% ownership. It is standard, plain PHP on mainstream open-source packages managed by Composer, in your repository and deployed to your own host, so the code, the database schema, the data and the IP are yours from day one, and any competent PHP team can take it over. No proprietary lock-in, no in-house framework only we understand. Fixed pricing and code you own outright are the whole point.",
  },
];

export function PhpFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="PHP development, answered" />
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
