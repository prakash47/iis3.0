import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - the cleanest ZERO on the site: PHP powers nothing here, not
// even the package manager (npm, not Composer). The family opening is shared byte-for-byte
// with LaravelProof/DjangoProof (an intended family signal); the TAIL diverges hard, because
// PHP is the closest sibling to Laravel - it welds the admission to the signature RULER (we
// just handed you the tells, so faking a badge would make the ruler worthless). Card 5 carries
// the partner/cert honesty, built to clear every trap: ZCPE is an INDIVIDUAL exam (never "we
// are not Zend Certified" - category error), there is NO PHP vendor partner program (community
// governance stated as a trust asset, never an invented disclaim), and the byte-locked SOC 2/
// ISO 27001/HIPAA sibling line. Never cites "Zend Framework" (renamed Laminas). Method, never
// outcome. The two real web projects bridge as web work, never relabelled as PHP.
const riskReversal = [
  { t: "You own 100% of the code, IP and data", d: "Standard, plain PHP in your repository, deployed to your host and your database, on your domain - the source, the schema and the data yours from day one. Nothing is held hostage on our side, and there is no account-manager gate between you and your own code." },
  { t: "No lock-in, by construction", d: "Mainstream open PHP on Composer and PSR interfaces, in the conventional layout any competent PHP team can pick up and maintain. We never wrap your app in a bespoke in-house framework only we understand - the thing that turns a freelancer leaving into a crisis." },
  { t: "We take on code we did not write, after an audit", d: "Inheriting a PHP codebase you cannot read is the most common reason people call us. The first step is never a quote - it is a look at what the application actually does, the state of its dependencies and whether it can still be upgraded, so we can tell you honestly whether a rescue or a rewrite is the cheaper path before you commit." },
  { t: "Senior people, direct", d: "You talk to the engineers who write your PHP and design your schema - no offshore hand-off, no juniors learning on your budget. This is the line between the standard, tested PHP we write and the seat-rental PHP the market is full of." },
  { t: "Security-minded, honestly", d: "We build on the defenses modern PHP gives us - parameterized queries and PDO against SQL injection, output escaping, CSRF tokens, hashed auth - alongside OWASP practices and changes shown to you in staging before they reach production. On credentials, the honest picture: there is no company-level or agency-level PHP certification to hold - the Zend Certified PHP Engineer credential is an individual exam a developer sits, not an agency badge - and there is no PHP vendor partner program at all, because no single company owns PHP. It is governed in the open by The PHP Group and the community-funded PHP Foundation, which is something a firm funds, not a badge it earns; that governance is a feature, not a gap, since no vendor can relicense the language or pull it out from under you. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold. If your project legally needs a vendor who carries a formal attestation, we will say so plainly." },
  { t: "A registered company since 2016", d: "Intention InfoService is a real, incorporated company, small and senior on purpose - so a PHP codebase stays architecturally consistent from the first audit to deployment instead of passing between rotating hands." },
];

export function PhpProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page <span className="gradient-text">is PHP.</span></>}
            sub="Our React and Next.js pages can say 'this page is the technology, inspect it.' This one can't, and we won't fake it. Our site is a static Next.js and React build, and even the toolchain that compiles it runs on Node, not PHP - so PHP powers none of what you're reading: not the runtime, not the build, not one line, and not even the package manager, which is npm and not Composer. We just handed you the tells for spotting real PHP from a badge, so the single cheapest thing we could do is fail our own test and glue a 'Built with PHP 8.5' sticker on a page that has no PHP in it. We didn't - because the moment we'd fake that is the moment the ruler we just gave you is worth nothing."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who know current PHP practice cold -
              typed 8.4 and 8.5, Composer and PSR, PHPStan or Psalm in CI, Pest or PHPUnit, Rector for
              upgrades, PDO for data access. Dated or hand-wavy PHP vocabulary is how you spot an amateur
              on a PHP page; ours is current, and that competence, stated as capability and never as a
              result we invented, is the proof that actually travels. Everything we just claimed is a
              discipline you can verify from an artifact, not a number you have to believe.
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
              We ship web software built from the same parts - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is real web projects - an e-commerce store and a corporate site -
              built from the exact primitives a PHP application is made of: relational data models, an
              authenticated accounts and roles layer, a checkout and payments flow, catalog and content
              APIs, an admin surface, and third-party integrations that have to not break. You can{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                see the two web builds, labelled for exactly what they are
              </Link>
              , and never dressed up as PHP projects, because they weren&apos;t. What they prove is one
              true thing: this team ships working software that models real data, handles auth and
              payments, and holds up in production. The PHP-specific proof is not a borrowed case study -
              it is the depth on this page and the standard, open PHP and Composer code you would own
              outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
