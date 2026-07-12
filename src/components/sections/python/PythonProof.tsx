import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - Python is the FURTHEST honest end of the five spokes.
// It touches nothing in our stack: not the runtime (Next.js/React SSG), not even the
// build (that runs on Node, not Python). So this is modelled on ANGULAR (zero own-site
// connection), NOT Node (which had a genuine build-toolchain truth). We name the total
// absence and bank the refusal to fake a "Python-powered" badge as the trust signal.
// On a Python/ML page the client's crown jewels are the DATA and the MODEL, so those
// are promoted into card 1. NO fabricated logos, ratings, ML accuracy numbers or certs.
const riskReversal = [
  { t: "You own 100% of the code, data and models", d: "A standard Python project in your repository, deployed to your cloud - your AWS, GCP or Azure, your database, your domain. The source, the schema, the data pipelines and any trained model artifacts are yours from day one. Nothing about the data or the models is held hostage on our side." },
  { t: "No lock-in, by construction", d: "Standard Python and mainstream open source - FastAPI or Flask, pandas, scikit-learn, PyTorch, PostgreSQL - in a conventional layout any competent Python team can read. We don't wrap your backend or your ML in a framework only we understand, or a proprietary model you can only run through us." },
  { t: "Senior people, direct", d: "You talk to the engineers who write your Python and design your data model - no account-manager layer, no offshore hand-off, no juniors learning ML on your budget." },
  { t: "Transparent, published fixed pricing", d: "The same published tiers as the rest of the site, no metered surprises and no quote wall. A standalone API or a data or ML system is genuinely bespoke, so it enters through a fixed-price Discovery Sprint that ends in a written scope and a fixed build quote - never a mystery hourly rate." },
  { t: "Security- and data-minded, honestly", d: "We build to OWASP practices - input validation, parameterised queries, sane auth and secrets handling, dependency auditing, least privilege - and handle your data and any PII with care. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold. If your project legally needs a vendor who carries a formal attestation, we'll say so plainly." },
  { t: "A registered company since 2016", d: "Intention InfoService is a real, incorporated company, small and senior on purpose - so a Python codebase stays architecturally consistent from data model to deployment instead of passing between rotating hands." },
];

export function PythonProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page <span className="gradient-text">is Python.</span></>}
            sub="Our React and Next.js pages can say 'this page is the technology, inspect it.' This one can't, and we won't fake it. Our site is a static Next.js and React build, and the toolchain that compiles it runs on Node, not Python - so Python powers none of what you're reading. We could have bolted on a 'Python-powered' badge in five minutes. We didn't, because the moment we fabricate that is the moment you can't trust anything else here."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who actually ship modern Python -
              typed FastAPI services, async I/O, Pydantic validation, background workers, and a data
              and ML stack wired into real products. It&apos;s current to Python 3.14: an officially
              supported, opt-in free-threaded build for CPU-bound parallelism, an experimental JIT,
              and modern typed tooling. Dated or hand-wavy vocabulary is how you spot an amateur on a
              backend and ML page. Ours is current - and for a language where the risk is vendors
              overclaiming an AI they can&apos;t back up, that competence, stated as capability and
              never as a result we invented, is the proof that matters.
            </p>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We ship software that handles real data - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production web work has been built from the same primitives a Python backend is
              made of: relational data models, an authenticated accounts and roles layer, a checkout
              and payments flow, content APIs, and third-party integrations that have to not break.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>
              , described honestly - and never dressed up as Python projects or ML case studies with
              invented metrics, because they were web builds and we won&apos;t relabel them. What they
              prove is one true thing: this team ships working software that models real data and
              holds up in production. The Python and ML proof isn&apos;t a borrowed case study - it&apos;s
              the depth on this page and the standard-Python code, data pipelines and model artifacts
              you&apos;ll own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
