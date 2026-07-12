import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - the HARDEST trust page on the site. Java/Spring Boot powers
// NOTHING here (site is Next.js/React SSG; build runs on Node, not the JVM). Angular/Python/
// Laravel/Django model. The MAKE-OR-BREAK block is "Enterprise-grade engineering, honestly
// sized" - split enterprise-grade ENGINEERING (we deliver) from enterprise procurement
// APPARATUS (bench/certs/SLAs - not us). Card 5 NAMES + DISCLAIMS the real, checkable
// programs (Oracle Java, VMware/Broadcom Spring cert, Tanzu partner) - like LARAVEL, unlike
// Django (which had no program). NO borrowed enterprise logos, scale numbers or case studies.
const riskReversal = [
  { t: "You own 100% of the code, IP, schema and data", d: "A standard Spring Boot application in your repository, deployed to your cloud - your AWS, GCP or Azure, your PostgreSQL, your domain. The source, the entities, the Flyway migrations, the JPA schema and the data live in your database and your repo, yours from day one. No runtime licence to us, no proprietary layer, nothing held hostage on our side." },
  { t: "No lock-in, by construction", d: "Standard Java and standard Spring Boot on mainstream open source - Spring Framework, Spring Data JPA and Hibernate, Spring Security, Maven or Gradle - in the conventional layout any competent Java team can read. We never wrap your system in an in-house framework only we understand, so a bigger team or another vendor can pick it up without us in the room." },
  { t: "Senior people, direct", d: "You talk to the engineers who design your domain model, write your Spring Boot services and shape your API - no account-manager layer, no offshore hand-off, no juniors learning JPA on your budget. On a system that has to stay correct under load for years, who actually writes it is the whole game." },
  { t: "Transparent, published fixed pricing", d: "The same published tiers as the rest of the site, no metered surprises and no quote wall. Most serious Java work is a genuinely bespoke system, so it enters through a fixed-price Discovery Sprint that ends in a written architecture, scope and a fixed build quote - never a mystery hourly rate or a day-rate bench you can't see." },
  { t: "Enterprise-ready, honestly", d: "Strict static typing, JUnit 5 with Testcontainers against real Postgres and message brokers, Spring Security defaults, validation and transaction boundaries done properly. What we do not claim: a SOC 2 report or ISO 27001 certification we don't hold, and there is no HIPAA certification for anyone to hold; Oracle Java or Spring Certified Professional credentials we don't hold; and we are not a Broadcom, VMware Tanzu or Spring partner, so we won't imply it. We also don't run a large bench or offer formal penalty-backed SLAs. If your project legally requires a certified vendor, we'll say so plainly." },
  { t: "A registered company since 2016", d: "Intention InfoService is a real, incorporated company, small and senior on purpose - so a Spring Boot codebase stays architecturally consistent from the first entity to production instead of passing between rotating hands. Enterprise Java rewards continuity of the people who understand the domain." },
];

export function JavaProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page <span className="gradient-text">is Java.</span></>}
            sub="Our React and Next.js pages can say 'this page is the technology, inspect it.' This one can't, and we won't fake it. Our site is a static Next.js and React build, and even the toolchain that compiles it runs on Node, not the JVM - so Java and Spring Boot power none of what you're reading: not the runtime, not the build, not a single request or query. Java is exactly the stack a serious enterprise backend would run on, which is why bolting a 'Powered by Spring Boot' badge onto a page that isn't one would take five minutes - and cost us the one thing this entire site is built to earn."
          />
        </Reveal>

        {/* THE make-or-break block: enterprise-grade ENGINEERING vs enterprise APPARATUS. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Enterprise-grade engineering, honestly sized
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                &quot;Enterprise-grade&quot; means two different things, and they&apos;re worth pulling
                apart. One is <span className="font-semibold text-foreground">engineering</span>: strict
                typing, a properly modelled domain, transactions that hold under concurrent load, tests
                you can trust, security defaults, a codebase a team can safely change in year five. That
                is what Java and Spring Boot are for, and it&apos;s exactly what we build - the same
                discipline whether you&apos;re a two-founder startup, a scale-up, or an engineering team
                inside a larger enterprise. The other is{" "}
                <span className="font-semibold text-foreground">procurement apparatus</span>: a large
                bench, SOC 2 and ISO 27001 on the wall, a named account manager, formal penalty-backed
                SLAs, and a sales floor between you and the people writing the code. That&apos;s a real
                thing some organisations are required to buy - and it is not us, and we won&apos;t dress
                up to look like it.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Here&apos;s the part most enterprise Java vendors won&apos;t tell you: those two are not
                the same, and paying for the second doesn&apos;t guarantee the first - a large bench
                often means your code is written by whoever&apos;s unbooked that quarter, behind an
                account manager who translates. We&apos;re the opposite trade: small and senior on
                purpose, so the people who scope your Spring Boot system are the people who build it and
                hand it over. If a regulated procurement genuinely requires a certified vendor with a
                large bench and formal SLAs, that isn&apos;t us, and we&apos;ll tell you on the first
                call rather than win the work and hope. Knowing which one you actually need is the most
                enterprise-grade thing on this page.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who actually ship modern Java and Spring
              Boot - Spring Boot 4 on Spring Framework 7, records and sealed types and pattern matching,
              virtual threads for high-throughput I/O, Spring Data JPA and Hibernate, Spring Security,
              JUnit 5 with Testcontainers, Maven or Gradle builds, GraalVM native images where startup
              and memory matter. It&apos;s current to Java 25 LTS. Dated Java vocabulary - J2EE,
              hand-rolled thread pools where virtual threads now belong, XML where annotations and
              records now live - is how you spot an amateur on a Java page. Ours is current, and that
              competence, stated as capability and never as a result we invented, is the proof that
              actually travels.
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
              We ship software built from the same parts a Spring Boot system is - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is real web projects - an e-commerce store and a corporate site -
              built from the same primitives a Spring Boot system is made of: relational data models,
              an authenticated accounts and roles layer, a checkout and payments flow, content and
              catalog APIs, an admin surface, and third-party integrations that have to not break.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>
              , described honestly - and never relabelled as Java or Spring Boot projects, because they
              weren&apos;t, and we won&apos;t dress a web build up as something it wasn&apos;t. What they
              prove is one true thing: this team ships working software that models real data, handles
              auth and payments, and holds up in production. The Java-specific proof isn&apos;t a
              borrowed case study or a bank&apos;s logo - it&apos;s the depth on this page and the
              standard Spring Boot code, schema and data you&apos;ll own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
