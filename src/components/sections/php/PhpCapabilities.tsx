import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconLayers, IconGrid, IconSearch, IconEye, IconPen, IconRefresh, IconDatabase, IconServer, IconCpu, IconCode, IconShield } from "@/components/icons";

// The E-E-A-T CENTREPIECE and main proof substitute (there is NO own-site PHP to inspect).
// Each card names a discipline AND what a buyer would inspect to verify it on ANY vendor's
// codebase - ours included - never "here is ours" (we have no PHP repos to point at). This is
// the same idea as the signature ruler, expressed as engineering practice rather than a table;
// distinct heading so the page does not read the checklist twice. Current 2026 vocabulary
// (Composer/PSR, PHPStan/Psalm, Pest/PHPUnit, Pint, Rector, PDO, FrankenPHP/Swoole/RoadRunner),
// method-not-outcome throughout, no version numbers beyond the 8.4/8.5 line, no dated events.
const caps = [
  { icon: <IconType className="h-5 w-5" />, t: "Typed, modern PHP 8.4/8.5", d: "Typed properties and parameters, enums, readonly, first-class callables, property hooks and asymmetric visibility, and the pipe operator. What you check: open a file and you find type declarations and enums, not mixed everywhere and stringly-typed arrays." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Composer and PSR autoloading", d: "Dependencies managed by Composer with PSR-4 autoloading and a committed lockfile, so the tree is auditable and reproducible - not hand-copied library folders nobody can update. What you check: a composer.json and composer.lock in the repo, and composer audit runs clean or against a tracked list." },
  { icon: <IconGrid className="h-5 w-5" />, t: "PSR and PHP-FIG standards", d: "Written to the shared standards the ecosystem agreed on - PSR-4 for autoloading, PSR-12 for style, PSR-7 and PSR-15 for HTTP messages and middleware where the app is framework-light - so the next engineer already knows the shape. What you check: the code reads like every other modern PHP codebase, so onboarding is fast." },
  { icon: <IconSearch className="h-5 w-5" />, t: "Static analysis in CI", d: "PHPStan or Psalm running at a defined level in the pipeline, with a baseline file so a legacy codebase can adopt it without a stop-the-world rewrite and then ratchet the level up. Whole classes of bug die here, before review. What you check: a phpstan.neon or psalm.xml in the repo and a green analysis step." },
  { icon: <IconEye className="h-5 w-5" />, t: "Tested with PHPUnit or Pest", d: "Automated tests through the real code paths - PHPUnit, the long-standing standard, or Pest for its lighter syntax - run on every change. On legacy work the first tests pin what the system does today before anything is touched. What you check: a tests directory and a test step that actually runs, not a README promise." },
  { icon: <IconPen className="h-5 w-5" />, t: "One code style, enforced", d: "Formatting applied by machine with Pint or PHP-CS-Fixer, so style is never a review argument and diffs show intent, not whitespace. Style drift is the first visible symptom of an unmaintained codebase. What you check: a style config in the repo and a formatting check that fails on drift." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Automated upgrades with Rector", d: "Rector applies mechanical, reviewable refactors at scale - upgrading syntax to a newer PHP line, turning PHPDoc into real type declarations, migrating a framework version - as reviewed pull requests, not a hand-edit marathon. What you check: a rector.php config and upgrade commits that are auditable rule by rule." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Parameterized data access", d: "Database access through PDO or a mature query builder with bound parameters, never input concatenated into SQL. This one discipline closes the classic injection vector that gave 2000s-era PHP its name. What you check: grep the codebase and you find prepared statements and bound parameters, not a query with a raw request value in it." },
  { icon: <IconServer className="h-5 w-5" />, t: "Reproducible runtimes, not a shared host", d: "PHP-FPM behind Nginx as the reliable baseline, containerized with Docker so the PHP version, extensions and config are defined in the repo and rebuild identically on a laptop, in CI and in production. What you check: a Dockerfile and compose file, and an app that boots the same everywhere." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Worker-mode app servers when earned", d: "FrankenPHP in worker mode, RoadRunner, or Swoole and OpenSwoole keep the application booted in memory instead of paying full startup on every request - a real throughput gain, adopted once it is measured and warranted, not by default. What you check: a before-and-after profile, not a benchmark screenshot from someone else." },
  { icon: <IconCode className="h-5 w-5" />, t: "Raw PHP, held to the same bar", d: "When the right answer is plain PHP with no framework - a small utility, one endpoint, a webhook receiver, a snippet in an existing page - it still gets Composer, types, static analysis and a test. No framework is a scope decision, not permission to lower the bar. What you check: even the one-file tool has a lockfile and a test." },
  { icon: <IconShield className="h-5 w-5" />, t: "Security as method, at every boundary", d: "Parameterized queries against SQL injection, output escaping against cross-site scripting, CSRF tokens on state-changing requests, validation where untrusted input enters, secrets in the environment not source, and the OWASP Top Ten as a standing review checklist. What you check: named defenses you can point to in the diff, not a secure-by-design badge." },
];

export function PhpCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer PHP"
            title="Modern PHP engineering, not shared-hosting PHP"
            sub="There is no live PHP running this static Next.js site to point at, so the proof is the discipline. Everything here is an artifact you can inspect on any vendor's work, ours included - a lockfile, a static-analysis config, a test step, a Dockerfile - which is the whole point: you should never have to take our word for what right looks like."
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

        {/* The senior-opinion default line. Offer-framed (how we WOULD build), never a record. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">How we take on a PHP engagement:</span>{" "}
              get onto a supported PHP line and signal currency through 8.4 and 8.5 features, put the
              code under Composer with PSR-4 autoloading, add static analysis and a test suite before
              changing behavior, format with Pint, and use Rector for the mechanical upgrades. We deploy
              on PHP-FPM and Nginx in Docker, and reach for a worker-mode app server only once a profile
              says it will pay. And when the codebase is really a framework job, a CMS job, or a rewrite,
              we say so: a new custom application on a framework is{" "}
              <Link href="/technologies/laravel" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Laravel
              </Link>
              , content your team edits is{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                WordPress
              </Link>
              , and we reach for{" "}
              <Link href="/technologies/nodejs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Node
              </Link>{" "}
              or{" "}
              <Link href="/technologies/python" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Python
              </Link>{" "}
              when the workload is theirs.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
