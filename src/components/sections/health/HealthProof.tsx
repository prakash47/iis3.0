import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE HARDEST HONEST-PROOF PROBLEM ON THE SITE AFTER EDTECH, and structurally harder than it.
//
// In edtech the law never touched us: FERPA binds the school, so we stood outside the obligation
// and described it cleanly. In healthcare HIPAA reaches the vendor DIRECTLY the moment it handles
// PHI on a covered entity's behalf - we become a business associate, directly liable under HITECH,
// and our subcontractors become business associates too. So the move here is not "allocate the
// obligation away" (that would be a rerun of edtech). It is "draw the business-associate boundary,
// put ourselves on the outside of it on purpose, and show what standing outside costs us."
//
// WHY THE COST HAS TO BE MADE LEGIBLE (or the signature collapses). "We don't hold PHI" reads,
// cold, as "we CAN'T hold PHI" - incapacity, not choice. We cannot do the Shopify move (prove we
// can do the expensive thing, then decline it) because we have zero healthcare clients and zero
// BAAs. So the sacrifice is relocated onto two things that ARE legible:
//   (a) the ANNUITY we refuse - being the business associate that hosts the data and bills a
//       recurring managed-PHI retainer to run it forever, which is where the sticky revenue in
//       this sector lives; and
//   (b) the HARDER ENGINEERING we take on - synthetic/de-identified dev data, time-boxed logged
//       break-glass instead of a standing key, request-time reads instead of a copy.
// And the cynic's rebuttal ("you're just offloading risk onto the client") is answered on the
// page: the PHI already sits in the client's infrastructure where their liability already is; we
// decline to ADD a party to their breach surface. Say it, because a good critic raises it fast.
//
// HARD RULES:
// - Never "HIPAA-compliant", "secure", "certified" or "accessible" as a property of us or software.
// - Never a legal conclusion about the buyer ("HIPAA applies to you", "you are a covered entity").
// - Every "this obligation binds you" clause is IMMEDIATELY followed by "and here is what we build".
// - The precise verb is "store", never "touch": a portal front end momentarily handles PHI in the
//   DOM but stores none of it at rest on our side. "Store" survives an adversarial read.
// - The badge disclaim names each programme by its CURRENT name and its ENTITY-KIND, correcting
//   rather than committing the category errors. HIPAA cert = none exists (branch b). SOC 2 = a
//   report, not a certification. ISO 27001 / HITRUST = org certifications. ONC/ASTP, Epic Showroom,
//   Epic Toolbox = PRODUCT credentials (agency disclaim would be a category error). Epic "App
//   Orchard" is RETIRED - naming it would be the fourth dead-programme burn. No Epic/Oracle fees.

const riskReversal = [
  { t: "Your PHI stays in your infrastructure, in your name", d: "Patient data lives at rest inside your own HIPAA-eligible environment - your cloud, your database, your account - not on a system we operate and rent back to you. What we build reads and writes it through your infrastructure rather than copying it into ours, so the records you are accountable for never expand onto servers you cannot audit." },
  { t: "We develop against synthetic data, not your patients", d: "We build and test on synthetic records and de-identified datasets, so real patient data is not required to do the work. Where a task genuinely needs production access it is scoped, time-boxed, logged and granted by you, never a standing key we keep. It is harder work for us, and a smaller blast radius for you." },
  { t: "You own the code, the schema and the integration", d: "The repository, the data model, the FHIR and SMART on FHIR integration and every record are yours, on infrastructure registered in your name, handed over on final payment with no licence back to us. We build to published standards so another team, or your record system's own vendor, can take it forward without paying us rent." },
  { t: "We are honest about the boundary, before you sign", d: "We do not sign business associate agreements and we do not store your patients' PHI today, and we will not pretend otherwise to win the work. If discovery finds that patient data genuinely has to flow through what we build, we tell you it changes the engagement and that it is not one we take on - rather than quietly becoming your business associate and hoping the contract goes unread." },
  { t: "Procurement, answered truthfully", d: "No business associate agreement, no HITRUST certification, no SOC 2 report and no ISO 27001 of our own - and there is no HIPAA certification for anyone to hold. We complete your security questionnaire honestly, including the parts where the answer is no, and help you evidence the parts that are genuinely ours: the access model, the audit logging, the data-flow diagram. If your procurement requires a supplier who carries those attestations, we will tell you plainly that is not us." },
  { t: "We will tell you not to build", d: "If your record system's own patient portal already does this, or a SMART on FHIR app on top of it does, we point you there rather than quote a bespoke build - and the anti-recommendation above costs us that engagement whenever we are right. It is the only credential we can honestly offer before the first health build ships, and we would rather offer it than a borrowed logo." },
];

export function HealthProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>The patient data we can&apos;t lose is the data <span className="gradient-text">we never store.</span></>}
            sub="We have no healthcare clients, no hospital logos, no business associate agreement on file and no audit to wave, and you should weigh that. What we have instead is a posture most firms in this sector quietly reverse. Rather than expanding onto your side of the compliance boundary and asking to hold your patients' data, we architect ourselves to the outside of it - and below is exactly what that buys you, and what it costs us."
          />
        </Reveal>

        {/* THE SIGNATURE. The direct-liability boundary, and the cost of standing outside it made
            legible: data minimisation as the system's shape, the annuity refused, the harder
            engineering taken on, and the cynic's rebuttal answered in place. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                The business associate boundary, and the side we build ourselves onto
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The single most valuable thing a healthcare software firm can become is your business associate</span>{" "}
                - the shop that holds the data, hosts the system, signs the agreement and bills a
                recurring retainer to run it forever. That is where the stickiest revenue in this
                sector lives, and it is the obvious thing for a development firm to grow into. We
                decline it on purpose. It is not a contract we were offered and turned down; it is a
                business model we could build and choose not to, the same against-interest move as
                telling a merchant to use a platform we do not sell.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Standing outside that boundary is more work, not less. We build synthetic and
                de-identified datasets to develop against instead of reading the failing record
                directly. We engineer time-boxed, logged, client-granted break-glass instead of
                holding a standing production key. We reach data at request time through
                infrastructure in your name instead of copying it into a database we control. We take
                on that cost so that we hold less of your risk.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">And no, this does not offload risk onto you.</span>{" "}
                Your patients&apos; data already sits in your own infrastructure, where your liability
                already is. Our posture does not move risk onto your side of the table; it declines to
                add a new party to your breach surface. The least data we can lose is the data we
                never store, and that is a security virtue rather than a limitation - which is the
                whole point of building it this way.
              </p>
            </div>
          </div>
        </Reveal>

        {/* THE ALLOCATION WALKTHROUGH. Healthcare's answer to edtech's FERPA/COPPA/GDPR block, but
            a genuinely different structure: HIPAA reaches US directly (unlike FERPA), the FTC rule
            and state laws bind the operator when HIPAA does NOT, and GDPR is special-category.
            Every "this binds you" is immediately paired with "and here is what we build". */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Who each law binds - and what we build for it
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">HIPAA binds the covered entity - and, unlike FERPA in education, it binds us directly the moment we handle PHI.</span>{" "}
              A software firm that creates, receives, maintains or transmits protected health
              information on a covered entity&apos;s behalf is a business associate, directly liable
              under HITECH, and its own subcontractors become business associates in turn. Whether a
              given engagement makes us one is specific to its facts and its contract, not something a
              web page can decide. So we architect not to become one, and when a build genuinely
              cannot avoid it, we say the engagement changes and that it is not one we take today.
              What we build is the client-hosted data plane, a minimum-necessary access model, audit
              logging, and break-glass that expires.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The FTC Health Breach Notification Rule and state consumer-health laws bind the app operator even where HIPAA does not.</span>{" "}
              A direct-to-consumer wellness or mental-health product usually sits outside HIPAA, and
              inside the FTC rule - which the Commission has enforced against GoodRx and against the
              Premom app for leaking health data to advertisers through trackers - and inside laws
              like Washington&apos;s My Health My Data Act, which carries a private right of action,
              and California&apos;s medical-information law, which now reaches some mental-health
              apps. We do not decide which regime applies to you; your counsel does. What we build is
              consent capture, data minimisation, third-party-disclosure controls, and the exact thing
              those FTC cases turned on: no advertising or analytics trackers on any surface that sees
              health data.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">GDPR makes health data a special category, the institution the controller and us the processor.</span>{" "}
              Processing needs both a lawful basis and a specific Article 9 condition, and there is no
              general certificate a development firm can hold to prove it behaves like a processor.
              What we build is the processor posture: data-processing terms, subject-rights mechanics,
              minimisation, and in-region hosting where residency is required. What you will never get
              from us is the word compliant - not about HIPAA, not about the FTC rule, not about GDPR,
              and not about accessibility. Compliance is a property of how an organisation operates and
              contracts, attested by people qualified to attest it. We do the engineering that makes
              it reachable, tell you where the cost of clearing each gate actually lands, and leave
              the attestation where it belongs.
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

        {/* THE BADGE DISCLAIM - the richest on the site, because healthcare's programmes span six
            entity-states at once: a credential that does not exist (HIPAA); an attestation report
            mislabelled as a certification everywhere (SOC 2); genuine organisation certifications
            (ISO 27001, HITRUST); product credentials that an agency disclaim would category-error
            (ONC/ASTP, Epic Showroom/Toolbox listings); a live company programme (athenahealth
            Marketplace); and a retired name that must not be spoken (Epic App Orchard, "Cerner
            Code"). Each named correctly, or corrected. No fee amounts. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The healthcare badges, named correctly - and the category errors we won&apos;t commit
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Start with the one that does not exist.{" "}
              <span className="font-semibold text-foreground">There is no HIPAA certification.</span>{" "}
              The Department of Health and Human Services neither issues nor recognises one, and a
              cloud provider as large as Amazon Web Services says the same about itself, so a
              &quot;HIPAA-certified&quot; badge advertises a thing the regulator does not grant. What
              do exist are these, and we hold none of them. A{" "}
              <span className="font-semibold text-foreground">SOC 2</span> is an attestation report a
              CPA firm writes about an organisation&apos;s controls, not a certificate - we have not
              undergone a SOC 2 examination. <span className="font-semibold text-foreground">ISO 27001</span>{" "}
              is a genuine certification held by an organisation, and we are not certified to it.{" "}
              <span className="font-semibold text-foreground">HITRUST CSF</span> is the
              healthcare-specific certification this sector flaunts most, at its e1, i1 and r2
              assessment levels, held by an organisation - we hold none of them.{" "}
              <span className="font-semibold text-foreground">ONC / ASTP Certified Health IT</span>{" "}
              is a credential that attaches to a product rather than a company: a product is tested by
              an authorised testing laboratory, certified by an authorised certification body, and
              listed on the Certified Health IT Product List with its own identifier - so &quot;an
              ONC-certified agency&quot; is a category error, and on a build for you that
              certification would be yours to earn as the product&apos;s owner. The record-system
              marketplaces work the same way.{" "}
              <span className="font-semibold text-foreground">Epic</span> lists products in the Epic
              Showroom, entered at the Connection Hub tier, and grants its Toolbox designation to
              products that follow its recommended practices - product credentials, not company ones,
              and we have none.{" "}
              <span className="font-semibold text-foreground">Oracle Health</span>, formerly Cerner,
              runs a developer program where a product earns validated-integration status and a
              marketplace listing - again a product listing, which we do not have.{" "}
              <span className="font-semibold text-foreground">athenahealth</span> runs its Marketplace
              and Marketplace Partner Program, where a partner lists an integrated solution - once
              more a product listing we have not made. We name these precisely because this sector is
              full of firms that hold a product-level credential, or none at all, and let it imply the
              company is certified. It does not, we hold none, and what we offer instead of a badge is
              the boundary on this page, code you own outright, and a paid discovery before any price.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. Claim the PROBLEM SHAPE, never the sector, and lead with the CLINICAL BREAK
            so it cannot read as "a store is a hospital". Rebuilt in genuinely different prose - it
            must NOT paraphrase EdtechProof's "a school administrator is a store administrator"
            sentence, and it must NOT reuse the "See our work" anchor. It argues from the two real
            builds now on /work (a training-platform rebuild and a financial-services site). */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              What our real work proves here, and what it does not
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is real, custom web builds - a professional training platform
              rebuild and a financial-services site, both on our work page. Neither is a clinic
              system, and we will not pretend otherwise. What carries over is narrow and deliberately
              non-clinical: identity and roles deciding who may see which record, structured catalogs
              and records that must stay correct, enquiry and enrolment flows that have to post
              reliably and never silently drop, and an operator screen a non-technical person runs
              all day. That machinery we have built and run in production, and a patient or provider
              portal is made partly of it.{" "}
              <span className="font-semibold text-foreground">What does not carry over is the entire clinical core.</span>{" "}
              A wrong enrolment costs money; a wrong allergy, medication or lab value can harm a
              patient. PHI is not catalog data, an electronic health record is not an enquiry form,
              and breach notification, minimum-necessary access and the business associate boundary
              are things a training site or a loan-comparison site never taught anyone. So we claim
              the first machine, and we fence off the second as work we have not shipped:{" "}
              <Link href="/work" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                the two real builds on our work page, described honestly
              </Link>
              . We have no healthcare clients, no shipped patient portal, and no EHR integrated in
              production. The healthcare-specific part of what we offer is the standards depth on this
              page, the boundary above it, and a willingness to tell you the thing that costs us the
              sale.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
