import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE HARDEST HONEST-PROOF PROBLEM ON THE SITE, and the pattern the other five verticals inherit.
//
// A technology page can substitute engineering depth for a portfolio. An INDUSTRY page cannot do
// the same trick with domain credibility - "we understand education" is exactly what a firm with
// no education clients would say. So the signature has to be something a firm WITHOUT clients can
// demonstrate and a firm WITH clients routinely gets wrong.
//
// THE SIGNATURE: allocate the legal obligations. Agencies bluff here constantly - "FERPA-compliant
// vendor", "COPPA compliant platform" - and both are category errors. FERPA binds the institution;
// a vendor only comes inside it through the school-official exception. COPPA binds the operator.
// Naming who actually carries what, correctly, is a costly signal: it forfeits the badge language
// competitors use, and it is checkable against the regulators' own guidance.
//
// THE GUARDRAIL THAT KEEPS IT FROM BEING LIABILITY-SHEDDING: every "this obligation is yours"
// clause is immediately followed by "and here is what we build so you can meet it." Without that
// pairing it reads as a vendor dodging accountability. Never separate the halves.
//
// HARD RULES:
// - Never "FERPA/COPPA/GDPR compliant" or "certified" as a property of us or of software.
// - Never a legal conclusion ("COPPA applies to you"). That is the buyer's counsel's call.
// - Accessibility: METHOD, never OUTCOME. No "WCAG 2.1 AA compliant", no "accessible", no "we
//   issue VPATs". WCAG 2.1 AA is the version the ADA Title II rule actually adopts - never 2.2.
// - Do not raise the Student Privacy Pledge: it was retired in 2025, so there is nothing to sign
//   and nothing to not-sign. Mentioning it invites a claim we do not need to make.
// - No SOC 2, ISO 27001 or HIPAA. We hold none and have never been audited.
const riskReversal = [
  { t: "You own the code, the data and the records", d: "The repository, the IP and every student, staff and assessment record are yours, on infrastructure in your name. We build on mainstream open tools, and we hand over everything on final payment with no licence back to us. Owning it outright is not a nicety in education - it is how an institution stays in control of obligations that are legally its own." },
  { t: "Open standards, so you can replace us", d: "LTI 1.3, OneRoster, QTI and SCORM exist so that a platform is not a prison. We build to the published specifications rather than a private integration only we understand, which means another team can pick this up, and another tool can plug into it, without asking our permission or paying us rent." },
  { t: "A paid discovery, then a fixed price", d: "An education platform is custom software, so it enters through a short paid discovery that ends in a written scope and a fixed build quote, credited toward the build. Payments are tied to delivered, approved milestones, never all upfront, and an NDA is available on request before you tell us anything." },
  { t: "We help you clear procurement, not pretend we already have", d: "A VPAT is a document authored about a finished product, so we do not have one, and any firm handing you theirs is handing you a document about their software, not yours. We build to WCAG 2.1 AA as a method and verify on real assistive technology, we help populate the VPAT and the accessibility conformance report your buyer wants, and we will complete a HECVAT truthfully - including the parts where the honest answer is that we hold no SOC 2 and no ISO 27001, and have never been audited." },
  { t: "Senior people, and a registered company since 2016", d: "You talk to the people who read the specifications and write the integration, not an account manager relaying it. Intention InfoService is a real, incorporated company, small and senior on purpose, and there is no offshore hand-off between the conversation and the code." },
  { t: "We will tell you not to build", d: "The most expensive thing we could sell you is a custom platform you did not need, and the anti-recommendation a few paragraphs up costs us exactly that engagement whenever we are right. It is the only credential we can honestly offer before the first education build ships, and we would rather offer it than a borrowed logo." },
];

export function EdtechProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We have not built an <span className="gradient-text">LMS.</span></>}
            sub="We have one genuine education-sector build - a professional training institute's website, on our work page - but no shipped LMS, no university logos and no learner counts, and you should weigh that. What we offer beyond that build is the thing most agencies in this sector get wrong on purpose, because getting it right forfeits the badge language they use - an accurate account of who the law actually binds, and what we build so that you can meet it."
          />
        </Reveal>

        {/* THE SIGNATURE. Each regulation: who it binds, then immediately what we build for it. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Who the law actually binds - and what we build for it
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">FERPA binds the school, not the software.</span>{" "}
                A vendor is not usually bound by FERPA at all - it receives student records under the
                school-official exception, which requires that it perform an institutional service,
                operate under the institution&apos;s direct control, use the records only for the
                contracted purpose, and never re-disclose them. So &quot;FERPA-compliant vendor&quot;
                is a category error, and anyone selling you one is selling you a phrase. What we build
                is the machinery the exception depends on: role-scoped access, purpose limitation
                enforced in the data model, audit logging, retention and deletion you control, and
                contract terms that put us under your direction.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">COPPA binds the operator of the service.</span>{" "}
                In a school deployment the school may consent on a parent&apos;s behalf, but only for
                educational use and with no commercial purpose attached. Offered directly to families,
                there is no school in the loop and the operator - which is you, not us - must obtain
                verifiable parental consent itself. We do not decide whether COPPA applies to you;
                your counsel does. What we build is the consent capture, the data minimisation, and
                the third-party disclosure controls that either path requires.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">GDPR makes the institution the controller and us the processor,</span>{" "}
                and there is no general certificate a development firm can hold to prove it behaves
                like one. What we build is the processor posture: data-processing terms, subject-rights
                mechanics, minimisation, and in-region hosting where residency is required.{" "}
                <span className="font-semibold text-foreground">And unlike FERPA, many US state student-privacy laws bind the provider directly</span>{" "}
                - no selling student data, no targeted advertising, no building non-educational
                profiles. Those cannot be promised in a contract clause and then ignored in the
                schema, so we engineer them in rather than write them down. Which state regimes apply
                to you is, again, a question for your counsel and not for us.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                What you will never get from us is the word &quot;compliant.&quot; Not about FERPA,
                not about COPPA, not about GDPR, and not about accessibility. Compliance is a property
                of how an institution operates and contracts, attested by people who are qualified to
                attest it. We do the engineering that makes it reachable, we tell you where the cost
                of clearing each gate actually lands, and we leave the attestation where it belongs.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Accessibility is the gate that fails you at the end
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Public schools, community colleges and public universities buy against WCAG 2.1 AA -
              that is the technical standard the 2024 ADA Title II web rule adopts for state and local
              government, and those institutions are covered by it. Procurement asks for a VPAT before
              it asks for a demo, and higher education frequently asks for a HECVAT alongside it.
              Here is the part worth being precise about: a VPAT is a document a product owner authors
              about a finished product, and a completed one is an accessibility conformance report. It
              is not a badge a development firm holds and hands over. So we do not claim conformance
              for software that does not exist yet, and we do not tell you your platform will be
              accessible before it has been tested. We build to WCAG 2.1 AA as a method - semantic
              structure, keyboard operability, screen-reader labelling, contrast, focus order,
              captions and transcripts - we verify on real assistive technology rather than trust a
              checker score, and we help you populate the conformance report and the security
              questionnaire your buyer actually reads.
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

        {/* THE BADGE DISCLAIM. Unlike the /technologies hub - which takes a claim-free posture
            because a consolidated line would category-error across twenty programmes - an EdTech
            buyer's diligence is literally "is this firm a Moodle or Canvas partner?", so a vague
            "we hold no badges" reads as evasion. We name each programme AND correct the two
            category errors that a naive disclaim would commit:
              1. 1EdTech certifies PRODUCTS, not agencies, and certification is gated on paid
                 membership. "We are not 1EdTech certified" is the same error as "we are not a
                 Google Developer Expert" (an individual) or "a Flutter Favorite" (a package).
              2. Axim Collaborative, which stewards Open edX, does not certify or endorse service
                 providers at all - so "we are not an Open edX Certified Partner" would invent a
                 credential. Branch (b): say there is none to hold.
            Also: never present a Google Ads "Premier Partner" status as an education credential. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The badges we don&apos;t have, named exactly
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">1EdTech</span>, formerly IMS Global,
              certifies <em>products</em>, not development companies. A tool that passes
              interoperability testing earns the certification and appears in the product directory,
              and the process is gated on paid membership. There is no &quot;1EdTech certified
              developer&quot; for a firm to be. We hold no membership and no certified product. We
              build to the published LTI, OneRoster and QTI specifications, which are free to anyone,
              and on a build for you any certification would be yours to earn as the product owner.{" "}
              <span className="font-semibold text-foreground">Moodle</span> runs an official Moodle
              Certified Partner and Certified Service Provider programme, vetted on a track record of
              Moodle work. We are not in it, and we could not be yet - the track record is the
              requirement. We build with Moodle as open-source software.{" "}
              <span className="font-semibold text-foreground">Instructure</span> runs an official
              Canvas partner programme with integration and channel tiers; we are not an Instructure
              partner, and we integrate through the published LTI and REST APIs.{" "}
              <span className="font-semibold text-foreground">Open edX</span> is different again:
              Axim Collaborative, which stewards it, does not certify or endorse service providers at
              all, so there is no Open edX certification for anyone to hold. It does maintain a
              provider listing, and we are not on it.{" "}
              <span className="font-semibold text-foreground">Google</span> runs a Google for
              Education partner programme and a separate Classroom API developer track; we hold
              neither, and we would never present an advertising &quot;Premier Partner&quot; status
              from a different Google programme as an education credential.{" "}
              <span className="font-semibold text-foreground">Anthology</span>, which has merged with
              Blackboard, runs developer and channel partner tiers; we hold none of them. Nor do we
              hold SOC 2 or ISO 27001, and we have never been audited for either. What we offer
              instead of a badge is the depth on this page, a paid discovery before any price, and
              code you own outright.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. Lead with the real, directly-relevant education-sector build now on /work
            (the training-institute rebuild). Keep the LMS fence: it was the catalog/enrolment/
            marketing surface of a training business, not the learning-delivery core. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The education platform we actually rebuilt
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work here is real and directly relevant: we rebuilt a professional
              training institute&apos;s website - a large course catalog turned into a fast,
              filterable experience, templated per-city course pages that rank without tipping into
              thin content, demo-class and enquiry funnels, certificate validation, and a
              headless-CMS content operation the marketing team runs itself - migrated off a slow
              WordPress build without losing its search footing, after which organic traffic grew by
              around 120%.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                You can see that build on our work page.
              </Link>{" "}
              <span className="font-semibold text-foreground">What it is not is a full LMS.</span>{" "}
              We did not build the learning-delivery core - no assessment engine, no gradebook, no
              SCORM or xAPI runtime, no adaptive course player. A training business&apos;s catalog,
              enrolment and marketing surface is genuine education work and it is what we shipped; the
              learning platform itself is a different machine, and we will not relabel one as the
              other. Beyond that build we have no other education clients. The education-specific part
              of what we offer is the standards depth on this page, the compliance allocation above
              it, and a willingness to tell you the thing that costs us the sale.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
