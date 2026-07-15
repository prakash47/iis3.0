import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE HARDEST SIGNATURE PROBLEM AFTER HEALTHCARE, and the one most at risk of re-running it.
//
// The reusable industry family is "position outside the regulated binding". Healthcare drew the
// business-associate boundary and stood outside it; its virtue is ABSENCE ("the data we never
// store"). If fintech's signature were "we don't hold your customers' money / we keep the money and
// card data off our systems", it would (a) be healthcare's absence move with funds swapped for PHI,
// and (b) collide head-on with the SPENT card-custody phrasing (WooScope/WooWhy "card data off your
// server / compliance scope as small as it can be"; HealthScope "post straight into the processor").
//
// So the signature is NOT non-custody, and it is NOT idempotency/exactly-once/audit-trail (all
// already spent as method on the Java and edtech pages - JavaScope "ledger systems where
// correctness under concurrent load is non-negotiable", EdtechCapabilities "grade writes idempotent
// and auditable ... silent data loss"). The ONE genuinely unspent core is RECONCILIATION AGAINST AN
// EXTERNAL PARTY THAT HOLDS THE REAL MONEY - the sponsor bank / processor / FBO account - which no
// other page can claim, and which the Synapse collapse is the public exhibit for. Fintech's virtue
// is CORRECTNESS UNDER MOTION, not absence.
//
// So the glow card leads with the ledger-as-a-claim-until-reconciled, reasoned by "you are not the
// bank"; the "we don't hold funds" card is present but NOT first.
//
// HARD RULES:
// - Never "compliant", "secure", "bank-grade", "PCI certified" as a property of us or software.
// - Never a legal conclusion about the buyer (money transmitter, licence, GLBA financial institution).
// - Every "this binds X" clause immediately paired with "and here is what we build".
// - "reconcile to the penny" is framed as the obligation the build must meet, never a warranted outcome.
// - The Synapse citation is an attributed industry event with NO dollar figure, never our client.
// - The badge disclaim names each programme by current name + entity-kind. PCI = no certificate
//   exists (QSA/ASV are assessor-firm credentials); SOC 2/SOC 1 = reports; ISO 27001 = org cert;
//   Stripe/Plaid Partner Programs + Visa Ready + Mastercard Engage = live company/product
//   programmes; money-transmitter licensing = a licence held by the operating entity, not a badge.
//   No fee figures.

const riskReversal = [
  { t: "The ledger reconciles, or the build isn't done", d: "Every money movement is posted once and only once, keyed so a retry or a duplicated webhook cannot double it, and reconciled against what the processor and the bank actually report. Books that balance internally but drift from the bank are the failure we design against first, because it is the one nobody sees until it is expensive." },
  { t: "Every movement is provable after the fact", d: "An append-only, tamper-evident record of who moved what, when, on whose instruction and against which external reference - so a dispute, an audit or a regulator's question has one answer rather than a reconstruction. The audit trail is part of the data model, not a log bolted on at the end." },
  { t: "We don't hold your customers' money", d: "The funds sit where the licence is: in accounts your sponsor bank or processor holds, in their name, under their charter. We build the software that instructs those movements and reconciles them, and never become the custodian, the transmitter, or the party your customers' balances depend on. Less of your risk lives on anything we run." },
  { t: "You own the code, the ledger schema and the integrations", d: "The repository, the data model and the processor, Plaid and bank integrations are yours, on infrastructure in your name, handed over on final payment with no licence back to us. We build to the published rails - card networks, ACH, ISO 20022, open banking - so your bank, your processor or another team can carry it forward without paying us rent." },
  { t: "Procurement, answered truthfully", d: "No SOC 2 report, no ISO 27001, and no PCI Attestation of Compliance of our own - and there is no PCI certificate for anyone to hold. We complete your security questionnaire honestly, including the parts where the answer is no, and evidence the parts that are genuinely ours: the access model, the audit logging, the data-flow diagram, the reconciliation design. If procurement requires a supplier who carries those attestations, that is not us, and we will say so plainly." },
  { t: "We'll flag when the real project is a licence", d: "When a brief may turn on a money-transmitter licence or a sponsor-bank relationship before it is a software project, we say so - as a question for your counsel, not a verdict we issue - and it costs us the build whenever renting the rails turns out to be the answer. Pointing you at the licensed provider instead of a bespoke money mover is the only credential we can honestly offer before the first fintech build ships." },
];

export function FintechProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>In fintech, the worst bug never crashes. It leaves the number <span className="gradient-text">quietly wrong.</span></>}
            sub="We have built a financial-services site - a loan-comparison platform, on our work page - but no regulated money system, no bank or processor logos, no transaction volumes to quote and no audit to wave, and you should weigh that. What we have instead is a clear account of a fact most of this sector blurs: you are almost never the bank, the money moves on rails you rent, and the ledger you show on a screen is only a claim about someone else's money until it reconciles with the party that actually holds it. Below is what we build so it does, and what building it that way costs us."
          />
        </Reveal>

        {/* THE SIGNATURE. Leads with the ledger-as-a-claim and external reconciliation (the one
            unspent core), reasoned by "you are not the bank", then the annuity refused and the
            harder engineering taken on. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                You are not the bank. So the ledger has to prove where the money went.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Because you never hold the money, the balances in your system are not the money -
                they are a <span className="font-semibold text-foreground">claim</span> about money a
                bank or a processor is actually holding. A claim is worth nothing until it reconciles
                with the party that holds the real thing. So the engineering that matters most is not
                the screen and not even the payment - it is keeping your ledger provably equal, every
                day, to what the bank and the processor report, and catching the moment it starts to
                drift. That single discipline is what the public record of the Synapse collapse was
                missing: a middleware whose internal ledger stopped matching the banks that held the
                funds, and tens of thousands of people who could not reach their money.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The lucrative thing we refuse.</span>{" "}
                The stickiest business a fintech software firm can grow into is becoming the
                money-movement layer itself - sitting in the flow of funds, holding the ledger of
                record, and billing to keep the money moving forever. That is where the recurring
                revenue and the lock-in live, and it is exactly the position Synapse occupied. We
                decline it on purpose: we do not become the custodian or the transmitter, and we do
                not make your customers&apos; balances depend on a system we run. It is not a contract
                we were offered and turned down; it is a business model we could build and choose not
                to.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">The harder engineering we take on.</span>{" "}
                We make ledger correctness the first requirement instead of the last feature: a
                double-entry ledger, exactly-once posting, reconciliation against what the processor
                and the bank actually report, and an append-only audit trail. None of it demos, none
                of it screenshots, and clients undervalue it right up until the night the books stop
                matching the bank. Building it before the interface that sells the funding round is a
                real cost to us in a demo-driven sale, and it is the honest inversion of &quot;we
                don&apos;t hold your money&quot; into &quot;we build the thing that makes not holding
                it safe.&quot;
              </p>
            </div>
          </div>
        </Reveal>

        {/* THE ALLOCATION WALKTHROUGH. Fintech's answer to edtech's FERPA/COPPA block and
            healthcare's HIPAA block - but a genuinely different structure: these regimes bind the
            financial institution, the creditor, or the regulated money mover, almost never the
            fintech and never its vendor. Every "binds X" paired with "and here is what we build".
            No legal conclusion about the buyer. Print no dates, thresholds or clause numbers. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Who each rule binds - and what we build for it
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Money-transmitter licensing and the anti-money-laundering rules bind the regulated entity that moves the money</span>{" "}
              - a bank or a licensed transmitter - not its software vendor. In a sponsor-bank model
              the bank owns the anti-money-laundering program and the licence, and the funds sit in
              accounts in its name; standing up your own licence is a project in its own right.
              Whether your product needs one is a question for your counsel, never a determination we
              make. What we build is the onboarding and identity-verification front end, the review
              queues and case management, and the transaction-monitoring surfaces the program runs on
              - never the legal program itself.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The consumer-protection rules bind the financial institution and the creditor.</span>{" "}
              Electronic-transfer error resolution and unauthorised-transfer liability fall on the
              institution; lending disclosure falls on the creditor; and which of them your product
              is, or whether it merely rides one, is again your counsel&apos;s call and is genuinely
              contested at the edges for nonbank platforms. What we build is the dispute and
              error-resolution state machine with its deadline clocks and provisional-credit handling,
              the disclosure and statement surfaces driven by terms your counsel sets, and the
              immutable event log that can prove what happened.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">The financial-data-security rules bind whoever holds the account data.</span>{" "}
              The federal safeguards obligations fall on the financial institution that holds customer
              financial information, and cardholder data pulls whichever systems touch it into the PCI
              cardholder-data environment - which is one reason we architect so those systems are
              yours and your processor&apos;s, not ours. Under open banking, access to account data
              runs on the customer&apos;s permission and is itself in regulatory flux. What we build is
              least-privilege access, encryption of account data in transit and at rest, and the audit
              trail and data-flow map a written security program is evidenced with.{" "}
              <span className="font-semibold text-foreground">What you will never get from us is the word compliant</span>{" "}
              - not about PCI, not about the safeguards rules, not about anything. Compliance is a
              property of how a regulated organisation operates and contracts, attested by people
              qualified to attest it. We do the engineering that makes it reachable, tell you where the
              cost of each gate lands, and leave the attestation where it belongs.
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

        {/* THE BADGE DISCLAIM. PCI = no certificate exists (the real credentials QSA/ASV belong to
            assessor firms); SOC 2/SOC 1 = reports; ISO 27001 = org cert; Stripe/Plaid Partner
            Programs + Visa Ready + Mastercard Engage = live company/product programmes; a
            money-transmitter licence is held by the operating entity, not a vendor badge. No fees. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The fintech badges, named correctly - and the category errors we won&apos;t commit
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Start with the one that does not exist.{" "}
              <span className="font-semibold text-foreground">There is no PCI certificate.</span>{" "}
              The PCI Security Standards Council issues no certification to merchants or developers;
              compliance is evidenced by an Attestation of Compliance, a Report on Compliance or a
              Self-Assessment Questionnaire, and it is held by the merchant or service provider whose
              systems are in the cardholder-data environment. PCI does credential people - Qualified
              Security Assessors and Approved Scanning Vendors - but those belong to assessor and
              scanning firms, not to a development company, so a &quot;PCI-certified developer&quot;
              advertises a thing that is not granted. The current standard is PCI DSS v4.0.1. What
              else exists, and we hold none of it: a <span className="font-semibold text-foreground">SOC 2</span>{" "}
              (and a SOC 1) is an attestation report a CPA firm writes about an organisation&apos;s
              controls, not a certificate, and we have not undergone one;{" "}
              <span className="font-semibold text-foreground">ISO 27001</span> is a genuine
              certification held by an organisation, and we are not certified to it. The programmes
              this sector waves are company-level or product-level, and we are in none of them: the{" "}
              <span className="font-semibold text-foreground">Stripe Partner Program</span> is live, a
              company joins it at the Partner tier and can advance to Premier;{" "}
              <span className="font-semibold text-foreground">Plaid</span> runs a partner program with
              a public directory;{" "}
              <span className="font-semibold text-foreground">Visa Ready</span> and{" "}
              <span className="font-semibold text-foreground">Mastercard Engage</span> admit
              technology providers and their payment products, not services firms as a trust badge. And{" "}
              <span className="font-semibold text-foreground">a money-transmitter licence</span> is not
              a badge at all - it is a licence held on the national registry by the entity that
              actually conducts the money transmission, a bank or a licensed transmitter, and never its
              software vendor. We name these precisely because this sector is full of firms that hold a
              product listing, a partner tier or nothing at all and let it imply the company is
              certified or bank-grade. It does not, we hold none, and what we offer instead of a badge
              is the reconciliation discipline on this page, code you own outright, and a paid
              discovery before any price.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. Claim the PROBLEM SHAPE, never the sector. Genuinely fresh prose - it must
            NOT paraphrase HealthProof's "a booking-and-payment flow that has to post once and
            exactly once" sentence, which is spent on the SAME store project. The word "reconcile" in
            argue from the loan-comparison site now on /work (real financial-services web work), and
            keep the hard fence: lead-gen, never money-movement - no funds, no payments, no ledger,
            no multi-party reconciliation. Fresh /work anchor. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              What our real work proves here, and what it does not
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work includes a genuine financial-services build: a loan-comparison and
              enquiry site for a lending advisory - structured pages for ten loan categories with
              eligibility and rate detail, a real-time affordability calculator, and enquiry funnels
              that turn interest into qualified leads, on a fast custom build you can see on our work
              page. That is real, fintech-adjacent web work.{" "}
              <span className="font-semibold text-foreground">What it is not is the hard fintech case.</span>{" "}
              It is lead-generation: it moves no money, holds no funds, processes no payments, runs no
              ledger, and reconciles nothing across you, a processor, a sponsor bank and a card
              network. The reconciliation this page is really about - a ledger of held balances kept
              provably equal, day after day, to the bank that holds them - is work we have not
              shipped. So we claim the financial-services front end and fence off the regulated
              money-movement core, plainly:{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                the builds we&apos;ve actually shipped
              </Link>
              , described honestly. We have no regulated-fintech clients and no money system in
              production. The fintech-specific part of what we offer is the reconciliation and ledger
              depth on this page, the boundary above it, and a willingness to tell you the thing that
              costs us the sale.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
