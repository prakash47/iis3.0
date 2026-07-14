import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconLayers, IconBuilding, IconRefresh, IconServer, IconShield } from "@/components/icons";

// THE SIGNATURE (unspent). Laravel already spent "Is PHP dead? No / modern PHP is a
// different language" - the LANGUAGE'S-currency argument. This page's move is a different
// axis entirely: cheap PHP and good PHP are the same language, so the page hands the buyer
// a RULER - the tells that separate the two, pointed strictly OUTWARD at ANY codebase they
// are shown (a rival's quote, a freelancer's commit, the code they already own), never at
// "check ours". It deliberately avoids the "[X] is easy to fake, here's how to check ours"
// sentence skeleton (spent twice: /technologies + /industries hubs) and the "Is PHP [X]?"
// interrogative (spent on Laravel). The tells table lives ONLY here; Capabilities and the
// FAQ reference the discipline without re-printing the checklist.
const tells = [
  { cheap: "An end-of-life PHP version, with no more security patches coming", good: "A supported line, its currency shown by 8.4 and 8.5 features" },
  { cheap: "Dependencies hand-copied into the repo, no Composer", good: "Composer with a committed lockfile and PSR-4 autoloading" },
  { cheap: "SQL built by pasting user input into strings", good: "Parameterized queries through PDO, output escaped at render" },
  { cheap: "No tests, and nothing runs in a pipeline", good: "Tested with PHPUnit or Pest, run on every change in CI" },
  { cheap: "require and include spaghetti, files nobody can map", good: "A PSR-4 structure that a static analyser reads clean" },
  { cheap: "Everything is a loosely-typed string", good: "Typed properties, enums and readonly, so tools can check it" },
];

const pillars = [
  { icon: <IconType className="h-5 w-5" />, t: "A typed, analysable language", d: "Typed properties and parameters, enums, readonly, property hooks and a pipe operator in the current line. The footguns that earned the old reputation are opt-out by default now, and a static analyser can prove large classes of them gone." },
  { icon: <IconLayers className="h-5 w-5" />, t: "A real package ecosystem", d: "Composer and Packagist give PHP a mature dependency ecosystem with PSR interoperability standards, so you assemble from well-maintained, auditable libraries instead of copy-pasting code nobody can update." },
  { icon: <IconBuilding className="h-5 w-5" />, t: "A talent pool that will still be here", d: "A huge amount of the web runs on PHP, which means a deep hiring pool and long-lived tooling. A codebase in standard, modern PHP is one you can staff and hand over for years, not a niche only its author understands." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Friendly to gradual modernization", d: "You rarely have to choose between leaving PHP frozen and rewriting it. Composer, static analysis with a baseline, and automated refactoring let an old codebase move forward one reviewed step at a time, in production." },
  { icon: <IconServer className="h-5 w-5" />, t: "Deploys like anything modern", d: "PHP-FPM behind Nginx, containerized with Docker so the environment lives in the repo, and a worker-mode app server when throughput earns it. Modern PHP deployment has nothing to do with files dragged onto a shared host." },
  { icon: <IconShield className="h-5 w-5" />, t: "Defenses that are well understood", d: "The classic PHP wounds - injection, unescaped output, cross-site request forgery - have standard, checkable countermeasures. Security is a discipline you keep applying, and modern PHP hands you the safe path by default." },
];

export function PhpWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* THE RULER - the page's signature. Outward-pointing, buyer-run, stack-neutral. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Cheap PHP and good PHP are the same language.{" "}
                <span className="gradient-text">The difference is in the code, and you can read it.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                PHP has a floor and a ceiling, and most of what a buyer is handed sits near the floor -
                not because the teams who wrote it failed, but because PHP is very good at making code
                that just works under deadline, and a lot of that code is still online. The problem is
                that on the surface it all looks the same. So instead of asking you to trust that ours
                is the good kind, here are the tells that separate the two - a ruler you can hold up
                against any PHP you are ever shown: a rival&apos;s quote, a freelancer&apos;s last
                commit, or the codebase you already own and are a little afraid of.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th scope="col" className="p-4 font-semibold text-foreground">
                          The cheap kind, the tells
                        </th>
                        <th scope="col" className="bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400">
                          Done right, the tells
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tells.map((r, i) => (
                        <tr key={r.good} className={i < tells.length - 1 ? "border-b border-border" : ""}>
                          <td className="p-4 align-top text-muted-foreground">{r.cheap}</td>
                          <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.good}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Run that column against every PHP quote on your desk. A shop working near the floor
                cannot publish this table, because their own work fails it - which is exactly why it is
                worth publishing. And if the code in question is the legacy PHP you already run, this is
                the same checklist we start a rescue from.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why PHP"
            title="What modern PHP actually gives you"
            sub="PHP is the load-bearing majority of the web, and the current language is nothing like the one its reputation is stuck on. Here is what it buys you when it is written to the right side of that ruler - and, honestly, when it is the wrong tool."
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

        {/* The anti-recommendation - the cross-link engine. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When raw PHP is the wrong choice
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Plain PHP earns its place on small, tightly-scoped work and on modernizing what already
              exists. It is the wrong starting point - and we will say so - when you are building a new
              application with real scope, where hand-rolling routing, auth and a data layer just
              recreates a private framework only your last developer understood: that belongs on{" "}
              <Link href="/technologies/laravel" className="font-medium text-brand-500 hover:text-brand-600">
                Laravel, the batteries-included PHP framework
              </Link>
              . When the core of the product is hard real-time at scale, or one JavaScript language
              across front and back end,{" "}
              <Link href="/technologies/nodejs" className="font-medium text-brand-500 hover:text-brand-600">
                Node.js on the event loop
              </Link>{" "}
              is the sharper tool; when it leans on data, automation or machine learning,{" "}
              <Link href="/technologies/python" className="font-medium text-brand-500 hover:text-brand-600">
                Python, the data language
              </Link>{" "}
              leads. And if the job is really content your team edits, that is{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                WordPress
              </Link>
              . Not sure which way to go?{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                We will pick the right stack
              </Link>{" "}
              for the job, not the one this page happens to be about.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
