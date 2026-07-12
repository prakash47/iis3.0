import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconShield, IconDatabase, IconRefresh, IconLayers, IconFileText, IconCheck, IconServer, IconLock, IconCreditCard, IconGauge, IconType } from "@/components/icons";

// The E-E-A-T CENTREPIECE. We have zero fintech clients and have built zero regulated money
// systems, so the depth of what this page knows about fintech's actual failure modes - the silent
// wrong number, the ledger that drifts from the bank - is the entire substitute for a portfolio.
//
// SIX HARD RULES ENFORCED HERE:
// 1. CAPABILITY TENSE ONLY. "We build", "we design" - never "our fintech clients", "the ledgers we
//    run", "in our experience with banks".
// 2. METHOD, NEVER OUTCOME. Nothing here is "compliant", "secure", "bank-grade" or "PCI certified"
//    as a finished property. Card 10 gives a security program its "technical substrate", never
//    conformance. Twelve confident cards with zero proof read as an implied practice unless the
//    honest-proof block sits right after them - it does.
// 3. NO STATISTICS. No transaction volumes, fraud rates, uptime figures, penalty amounts. The
//    Synapse collapse (in Proof) carries no dollar figure.
// 4. VERSION-CONSERVATIVE. Name the standards (ISO 20022, ACH/Nacha, FedNow/RTP as real-time rails,
//    open banking) as entities, not with dates. The Fedwire ISO 20022 migration date is deliberately
//    not printed (same rule that bans effective dates elsewhere).
// 5. NO LEGAL CONCLUSION. Cards 6 and 11 name Reg E / Reg Z / GLBA as regimes and pair each with
//    what we build; they never say a rule applies to the buyer.
// 6. IDEMPOTENCY AND EXACTLY-ONCE ARE SUPPORTING MECHANICS HERE, NOT THE SIGNATURE. The signature
//    (Proof) is reconciliation against the external party that holds the money - the one thing no
//    other page on the site claims. Idempotency/audit-trail vocabulary is already spent on the Java
//    and edtech pages, so it lives here as capability depth, never as the headline move.
const caps = [
  { icon: <IconShield className="h-5 w-5" />, t: "Build on regulated providers, not as the bank", d: "We architect on payment processors, sponsor banks and BaaS rails so the charter, the licence and the custody of funds stay with the regulated party. The software instructs the movement, reconciles it and proves it - it does not become the thing that holds the money." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Double-entry ledger design", d: "Balanced debits and credits, balances derived from immutable entries rather than a mutable number, and money stored as integer minor units with explicit currency and rounding rules - because a float is how a cent goes missing and nobody can say where." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Reconciliation against processor and bank", d: "Automated, auditable break-reports that compare the internal ledger to the processor's settlement files and the bank's balances, with drift alerting - so a divergence between your books and where the money actually is surfaces the next morning, not at an audit." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Idempotent, exactly-once money movement", d: "Idempotency keys and database-level uniqueness so a retried request, a duplicated webhook or a double click cannot post a movement twice. Exactly-once is a property we engineer into the data model, not a hope we attach to the network." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Immutable, tamper-evident audit trail", d: "An append-only event history where corrections are compensating entries rather than edits, so who moved what, when, on whose instruction and against which external reference is answerable with one record. The audit trail is part of the schema, not a log bolted on at the end." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Dispute and chargeback state machines", d: "Modelled transitions with deadline clocks and provisional-credit handling for card disputes and error-resolution claims, so a dispute is a state the system understands and can evidence, not a spreadsheet somebody keeps on the side." },
  { icon: <IconServer className="h-5 w-5" />, t: "Webhook reliability and replay", d: "Signature verification, idempotent handlers, an inbound event log, tolerance for out-of-order delivery, and backfill - so the ledger's truth survives a webhook that arrives late, twice, or not at all, which is the normal weather of real integrations." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Payments and open-banking integration", d: "Processor, ACH and real-time-rail integration, the ISO 20022 messaging the major rails are moving to, and account aggregation through open banking - literacy in the published standards, not just one vendor's happy-path SDK." },
  { icon: <IconType className="h-5 w-5" />, t: "KYC, identity and screening integration", d: "Onboarding wired to an identity-verification vendor with screening, risk scoring, and the review queues and case management an operator's program runs on. The operator - you or your bank - owns the program; we build the software it runs in." },
  { icon: <IconLock className="h-5 w-5" />, t: "Security engineering for financial data", d: "Encryption in transit and at rest, MFA, least-privilege access, key management, secrets handling and audit logging - the technical substrate a written security program under the GLBA Safeguards obligations is evidenced with. Claimed as a method, never as a compliant or secure end state." },
  { icon: <IconServer className="h-5 w-5" />, t: "Disclosure and consumer-protection tooling", d: "Accurate APR, finance-charge and electronic-transfer disclosure generation and record-keeping that a creditor or financial institution needs for lending and payment rules - always paired with the build, never with a claim that the rule applies to you." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Correctness and observability for money", d: "Invariant and property tests that assert the books always balance and no unexplained negatives appear, deterministic event replay, reconciliation dashboards and drift monitoring - because the most expensive fintech bug is a number that is quietly wrong, and you only catch it if you are watching for it." },
];

export function FintechCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build for fintech"
            title="Twelve things a fintech build turns on"
            sub="Almost none of it is the screen a customer sees. This is the layer a financial product is actually judged on when the money starts moving - and it is where a team that has designed a ledger and a reconciliation is worth more than a team that has printed a badge."
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

        {/* Stated as an APPROACH ("here is how we would build yours"), never as a record. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default for a fintech product:</span>{" "}
              keep the money on rails a licensed provider runs, and make the ledger the thing you can
              trust. Start by asking whether a processor plus a sponsor bank or a BaaS provider
              already does the regulated part, and build the interface, the ledger and the
              reconciliation on top rather than becoming the money mover yourself - it is usually
              faster, cheaper and safer, and saying so costs us the larger engagement. When a custom
              build genuinely is right, design the double-entry ledger and the reconciliation before
              the features, so every movement posts once and is compared, continuously, to what the
              processor and the bank actually report. Model disputes, webhooks and corrections as
              states the system understands, not spreadsheets on the side. Keep account data and
              cardholder data on the smallest surface it can live on, encrypted and least-privileged,
              because that is where the GLBA and PCI cost lands. And watch for the silent divergence -
              the books that balance internally but drift from the bank - because it is the one bug
              in this sector that never announces itself.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
