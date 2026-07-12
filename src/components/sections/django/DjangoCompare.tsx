import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The framework comparison for THIS page: Django vs Laravel vs Node, Django highlighted.
// Deliberately the FRAMEWORK lane (not Django vs FastAPI vs Flask - that would chase the
// keywords the freshly-built Python page owns; the Django-vs-FastAPI decision is an FAQ).
// CONSISTENCY LOCK: cells match what LaravelCompare already published about all three, and
// Django's "best for" is the UNION of what the Python page (content/admin-heavy) and Laravel
// page (data/ML-adjacent) published about Django. Fair and qualitative - no unverifiable stats.
const cols = ["", "Django", "Laravel", "Node.js"];
const rows = [
  { dim: "What it is", django: "Full-stack Python framework", laravel: "Full-stack PHP framework", node: "JavaScript runtime on V8" },
  { dim: "Best for", django: "Content/admin-heavy apps, and apps in front of Python data or ML", laravel: "Server-rendered, CRUD-heavy web apps & SaaS", node: "Real-time, high-concurrency, API-first" },
  { dim: "In the box", django: "ORM, auth, admin - included", laravel: "ORM, auth, queues, admin - included", node: "Assemble your own" },
  { dim: "View / front end", django: "Templates, HTMX, DRF for APIs", laravel: "Blade, Livewire, Inertia", node: "Bring a front-end framework" },
  { dim: "Language", django: "Python 3.13, type hints", laravel: "PHP 8.4 / 8.5, typed", node: "JavaScript / TypeScript" },
  { dim: "Our take", django: "Our pick when the stack is Python", laravel: "Fast, batteries-included PHP web apps", node: "When real-time or JS-everywhere leads" },
];

export function DjangoCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Django vs Laravel vs Node.js"
            title={<>The honest 2026 <span className="gradient-text">framework comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. All three are excellent - the real choice in 2026 is about your language, your workload, and how much you want in the box."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {cols.map((c, i) => (
                      <th
                        key={c || "dim"}
                        scope="col"
                        className={
                          i === 1
                            ? "bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400"
                            : "p-4 font-semibold text-foreground"
                        }
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.django}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.laravel}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.node}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Django and{" "}
            <Link href="/technologies/laravel" className="font-medium text-brand-500 hover:text-brand-600">
              Laravel, the same batteries-included idea in PHP
            </Link>
            , are close cousins. Need real-time or one JavaScript language across the stack? That&apos;s{" "}
            <Link href="/technologies/nodejs" className="font-medium text-brand-500 hover:text-brand-600">
              Node.js, for real-time and JavaScript-everywhere
            </Link>
            . And for a pure async API-first service,{" "}
            <Link href="/technologies/python" className="font-medium text-brand-500 hover:text-brand-600">
              FastAPI on our Python page
            </Link>{" "}
            is the sharper default. We recommend the fit, not the framework we sell.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
