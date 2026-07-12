import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The framework comparison for THIS page: Laravel vs Django (the closest analog - both
// batteries-included full-stack MVC) vs Node (the JS-runtime alternative), Laravel as
// the highlighted brand column. CONSISTENCY LOCK: Laravel's cells match the position the
// nodejs page already published ("conventional server-rendered, CRUD-heavy web apps,
// fast batteries-included workflow"), and Node's cells match NodejsCompare. Fair and
// qualitative - no "Laravel beats Django", no unverifiable stats.
const cols = ["", "Laravel", "Django", "Node.js"];
const rows = [
  { dim: "What it is", laravel: "Full-stack PHP framework", django: "Full-stack Python framework", node: "JavaScript runtime on V8" },
  { dim: "Best for", laravel: "Server-rendered, CRUD-heavy web apps & SaaS", django: "Web apps that lean on Python data or ML", node: "Real-time, high-concurrency, API-first" },
  { dim: "In the box", laravel: "ORM, auth, queues, admin - included", django: "ORM, auth, admin - included", node: "Assemble your own" },
  { dim: "View / front end", laravel: "Blade, Livewire, Inertia (React/Vue)", django: "Templates, DRF for APIs", node: "Bring a front-end framework" },
  { dim: "Language", laravel: "PHP 8.4 / 8.5, typed", django: "Python, type hints", node: "JavaScript / TypeScript" },
  { dim: "Our take", laravel: "Our pick for fast, batteries-included web apps", django: "When the stack is Python or data/ML", node: "When real-time or JS-everywhere leads" },
];

export function LaravelCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Laravel vs Django vs Node.js"
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.laravel}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.django}</td>
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
            Laravel and Django are close cousins - the same batteries-included, full-stack idea, on
            different languages. Weighing Python instead? See our{" "}
            <Link href="/technologies/django" className="font-medium text-brand-500 hover:text-brand-600">
              Django, the batteries-included Python framework
            </Link>{" "}
            page. Need real-time or one JavaScript language across the stack? That&apos;s{" "}
            <Link href="/technologies/nodejs" className="font-medium text-brand-500 hover:text-brand-600">
              Node.js, the JavaScript backend runtime
            </Link>
            . We recommend the fit, not the framework we sell.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
