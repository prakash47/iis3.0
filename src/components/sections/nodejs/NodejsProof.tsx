import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - the "honest middle" between the React page (strong
// own-site wedge: the live UI IS React) and the Angular page (zero own-site
// connection). Node genuinely runs our BUILD toolchain (true, verifiable) but this
// static site has NO live Node server per request - so we bank the build-tooling
// truth and refuse the false "inspect this live backend" claim. NO fabricated
// logos, case studies, certs, scale numbers or ratings.
const riskReversal = [
  { t: "You own 100% of the code, IP and data", d: "A standard Node project in your repository, deployed to your cloud accounts - your AWS, GCP or Azure, your database, your domain. The code, the schema and the data are yours from day one, so there's nothing to get back if we ever part ways." },
  { t: "No lock-in, by construction", d: "Standard Node.js and mainstream open source - Express, Fastify or NestJS, PostgreSQL, the usual tools - in a conventional structure any competent Node team can read. We don't wrap your backend in a framework only we understand." },
  { t: "Senior people, direct", d: "You talk to the engineers who write your Node code and design your data model - no account-manager layer, no offshore hand-off, no juniors learning on your budget." },
  { t: "Transparent, published fixed pricing", d: "The same published tiers as the rest of the site, no metered surprises and no quote wall. Where a system is genuinely bespoke, it enters through a fixed-price Discovery Sprint that ends in a written scope and a fixed build quote." },
  { t: "Security-minded, honestly", d: "We build to OWASP practices - input validation, parameterised queries, sane auth and secrets handling, dependency auditing, least privilege. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold. If your project legally needs a vendor who carries a formal attestation, we'll say so plainly." },
  { t: "A registered company since 2016", d: "Intention InfoService is a real, incorporated company, small and senior on purpose - so a backend codebase stays architecturally consistent from data model to deployment instead of passing between rotating hands." },
];

export function NodejsProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>Node builds this site. It doesn&apos;t serve it - <span className="gradient-text">and that&apos;s the honest part.</span></>}
            sub="Unlike our React and Next.js pages, we can't say 'this page is a live Node backend, inspect it' - this is a static site with no live server, and we won't pretend otherwise. Plenty of agencies decorate these pages with borrowed logos and scale they can't show. Here's the more honest signal instead."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The honest version other agencies skip
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Node.js genuinely runs the toolchain that built this page - Next.js compiles on the
              Node runtime, and npm, the bundler and our build scripts all execute on Node - so Node
              is real, verifiable infrastructure in how this site is made. But this is a static site:
              there is no live Node server answering requests as you read this, because a marketing
              site does not need one, and we won&apos;t dress up fast pre-built HTML as a database-backed
              API humming in the background. Knowing when a project needs a Node backend and when it
              emphatically does not is the most valuable judgment we bring - and declining to run a
              server we didn&apos;t need is exactly the discipline we&apos;d apply to your budget and your
              architecture. The capability detail above is written by people shipping current Node -
              native type-stripping, the built-in test runner, worker threads for CPU-bound work.
              Dated vocabulary is how you spot an amateur on a backend page; ours is current to Node
              24 LTS and Node 26.
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
              We ship software with real backends - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work has involved the parts a backend is made of: product and order
              data, payments, authentication, content APIs and integrations.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>
              , described honestly and never dressed up as Node case studies with invented metrics.
              That proves one true thing - this team ships working software that handles real data
              and real integrations. The Node-specific proof is the depth on this page, and the
              standard-Node code, in your own repo and cloud accounts, that you&apos;ll own.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
