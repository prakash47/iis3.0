import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Plain strings, no anchors - the same array feeds
// the schema and the <details>, so FAQPage question count == visible details count automatically.
//
// SELF-COMPETITION GUARD. FAQPage nodes already ship across the site. DELIBERATELY OMITTED here: any
// stack-agnostic "what do you build with" answer (spent 5x+); "do you do staff augmentation" (the
// /technologies hub owns it); a generic "how long does it take" (the homepage owns the week ladder);
// and a generic "do you build a mobile app" (folded into Scope's hand-off). Ownership and cost are
// kept ONLY because the fintech answers are genuinely ledger/funds/processor-shaped.
//
// GUARDRAILS ENFORCED:
// - Never "PCI/GLBA compliant", "certified", "bank-grade" or "secure" as a property of us or software.
// - Never a legal conclusion about the buyer (money transmitter, licence, financial institution).
// - Every "this binds X" clause paired with "and here is what we build".
// - ZERO statistics. Synapse is an attributed industry event with NO dollar figure.
// - "app" never appears as a delivered capability - we have shipped zero mobile apps.
// - PCI = no certificate exists; SOC 2 = a report; Stripe/Plaid programmes = live, company-level.
// - The precise posture: we do not hold funds, are not the bank/transmitter, and do not build crypto.
const faqs = [
  {
    question: "Do I need a money-transmitter license?",
    answer:
      "That is a determination for your counsel, not for us, so we will not tell you that you do or you do not. What we can tell you is where the question comes from: if your product holds customer funds or moves money for a fee as a principal, licensing and a sponsor-bank relationship usually come into it, and that is a project in its own right before it is a software project. Most products avoid it by riding a bank or a licensed provider that already carries the licence and the funds. We build the software either way, and we flag early which path a brief looks like it is on, because it changes the whole shape of the build.",
  },
  {
    question: "Do you hold customer funds, and where does the money actually sit?",
    answer:
      "We never hold your customers' money. The funds sit where the licence is: in accounts a sponsor bank or a processor holds, in their name, under their charter - often pooled 'for benefit of' your customers. We build the software that instructs those movements and reconciles them against what the bank and processor report; we do not become the custodian or the party your customers' balances depend on. That is deliberate, and it is the posture whose absence, in the Synapse collapse, left tens of thousands of people unable to reach their money when a middleware's ledger stopped matching the banks.",
  },
  {
    question: "Should you build on Stripe and a provider, or build the payments yourself?",
    answer:
      "Almost always, build on a provider. A processor, and a sponsor bank or a Banking-as-a-Service provider, already carry the regulated part - the licence, the custody of funds, the card rails - and rebuilding that is the most expensive and most dangerous way to reach the same place. The honest first question is whether an off-the-shelf provider does the regulated movement, and whether your product is the interface, the ledger and the reconciliation on top. Building the regulated infrastructure yourself is right only when the money movement itself is genuinely your product and no provider will carry it, which is rarer than it sounds and a licensing question before a software one.",
  },
  {
    question: "Is your software PCI compliant?",
    answer:
      "No one can hand you 'PCI compliant software', because PCI compliance is not a property of software and there is no PCI certificate. The PCI Security Standards Council issues no certification to merchants or developers; compliance is evidenced by an Attestation of Compliance, a Report on Compliance or a Self-Assessment Questionnaire, and it is held by the entity whose systems are in the cardholder-data environment - the merchant or the service provider, under the current PCI DSS v4.0.1 standard. What we build keeps the card data on your processor's rails so the systems we touch stay out of that environment, and we build the access controls, encryption and audit trail your own attestation is evidenced with. The compliance is yours to hold; the engineering that makes it reachable is what we do.",
  },
  {
    question: "How do you avoid what happened with Synapse?",
    answer:
      "By treating reconciliation as the first requirement, not the last feature. Synapse, on the public record, was a middleware whose internal ledger stopped matching what the partner banks actually held, and the gap is where people's money went missing. The engineering answer is a double-entry ledger where every movement posts once and only once, reconciled continuously against what the processor and the bank report, with drift alerting the morning a divergence appears rather than at an audit - and an append-only audit trail so any balance can be explained. We also do not put ourselves in the position Synapse was in: we do not hold the funds or become the ledger of record your customers depend on. The bank does; our ledger stays a reconciled claim on it.",
  },
  {
    question: "Am I a fintech, or do I actually need to become a bank?",
    answer:
      "Most 'fintechs' are software on rails a regulated party already runs - they are not banks and do not want to be, because a charter is a multi-year regulatory undertaking, not a feature. The useful distinction is whether your product needs to hold funds or move money as a principal, or whether it can instruct a bank or processor that does. If it can, you are building software on regulated rails, which is the bulk of what this sector actually is. If it genuinely cannot, the first project is a licensing and sponsor-bank question for your counsel, and we will say so rather than pretend a screen answers it.",
  },
  {
    question: "What does a fintech build cost?",
    answer:
      "We publish one number here and refuse to invent the other. Every agency page in this sector prints a custom-fintech price band, and none of them can know whether funds or account data will flow through your build, or whether a licence sits in the path - which is the single biggest driver of the cost and the risk. So a fintech build enters through a paid Discovery Sprint from $1,000, which is one to two weeks and ends in a written scope, a money-flow map showing where the funds and the licence live, and a fixed price for the build, credited toward it. If discovery concludes a provider already does the regulated part, you keep the scope and the recommendation, and the expensive engagement never happens.",
  },
  {
    question: "Can you integrate with a processor, Plaid, or a sponsor bank?",
    answer:
      "That is most of the work, and we build to the published standards rather than one vendor's happy-path SDK - processor and payout APIs, ACH, the ISO 20022 messaging the major rails are moving to, and open-banking access for account aggregation. The integration that breaks is rarely the first call; it is the webhook that arrives late or twice, the settlement file that disagrees with your ledger, the retry that must not double-post. We design for those explicitly, with idempotent handlers, an event log, replay, and reconciliation against what the other side actually reports. We have built and run a real payment-processor integration in production - a store checkout - and we are candid that a checkout is the simple end of this, not the multi-party case.",
  },
  {
    question: "Do you build crypto, blockchain or web3 products?",
    answer:
      "No, and we would rather say so plainly than learn it on your budget. This page is about traditional and embedded fintech - payments, ledgers, dashboards, lending and onboarding front ends on regulated rails - not cryptocurrency exchanges, DeFi protocols, token issuance, crypto wallets or smart contracts. That is a different technical and regulatory world, with its own custody and securities questions, and we do not have the shipped experience to stand behind it. If crypto is the core of your product, you want a team that specialises in it, and we will tell you that on the first call.",
  },
  {
    question: "Can you build AI fraud-scoring or underwriting into our product?",
    answer:
      "We build AI on the assistive side - grounded in your own data, with a human in the loop - and we are deliberately careful at the line where a model starts making a credit or a fraud decision on its own. Autonomous underwriting and fraud-scoring models carry fair-lending, explainability and adverse-action obligations that fall on the lender or the institution, and building the model that drives those decisions is not something we would put our name to without the specialist and legal work it requires. We will build the surfaces, the case-management and the review queues around a decisioning system, and integrate a provider's scoring - and we will tell you when a feature needs a specialist we are not.",
  },
  {
    question: "Do you hold SOC 2, ISO 27001 or a PCI attestation?",
    answer:
      "No to all three, and it is worth being precise about what each is. A SOC 2 (and a SOC 1) is an attestation report a CPA firm writes about an organisation's controls, not a certificate, and we have not undergone one. ISO 27001 is a genuine certification held by an organisation, and we are not certified to it. And there is no PCI certificate at all - PCI compliance is evidenced by an Attestation of Compliance held by the entity in the cardholder-data environment, not by a developer. We complete your security questionnaire honestly, including the parts where the answer is no, and evidence the parts that are genuinely ours - the access model, the audit logging, the reconciliation design. If procurement gates on a supplier who carries those attestations, that is not us, and you should choose a firm that does.",
  },
  {
    question: "Who owns the code, and who owns the ledger?",
    answer:
      "You own the code outright - the repository, the ledger schema, the reconciliation logic and the processor and bank integrations, on infrastructure in your name, handed over on final payment with no licence back to us. The funds and the accounts were never ours to own; they sit with your bank or processor throughout. We build to the published rails deliberately, so that your bank, your processor or another team can carry the work forward without paying us rent, and so that the thing most critical to a financial product - the ledger and its reconciliation - is fully yours and fully inspectable rather than a black box only we understand.",
  },
  {
    question: "Have you built fintech software before?",
    answer:
      "No regulated fintech, and we will not dress that up. We have no fintech clients, no bank or processor logos and no money system in production, and you should weigh that. Our production work is a custom, full-stack online store on its own backend - which did take real payments at checkout through a processor - and a corporate site. What we offer instead of a portfolio is the reconciliation and ledger depth on this page, an accurate account of where the money and the licence actually live, and a willingness to tell you to rent the rails rather than build them. If a fintech portfolio is your deciding criterion, there are firms who have one, and we would rather you knew that now than after a discovery.",
  },
  {
    question: "What is a ledger, and why does reconciliation matter so much?",
    answer:
      "A ledger is the record of every money movement and the balances that follow from it. In fintech it is doubly important because your ledger is not the money - the money sits at a bank or a processor - so your ledger is a claim about what they hold, and a claim is only trustworthy if it is kept equal to the source. Reconciliation is the continuous check that your record still matches theirs: the settlement file, the bank balance, the processor's report. It matters because the worst fintech bug does not crash - a movement posts twice, a fee drifts, a webhook is missed - and the books quietly stop matching the bank until someone, usually a customer or a regulator, discovers it the hard way. We build the reconciliation that catches it the next morning.",
  },
  {
    question: "How do you keep financial data secure?",
    answer:
      "With method, and without claiming an outcome we cannot attest. We keep account data and cardholder data on the smallest surface it can live on - ideally your processor's and your bank's, not ours - and where we do build systems that touch it, we apply least-privilege access, encryption in transit and at rest, key management, secrets handling and audit logging. Those are the technical substrate a written security program under the federal safeguards obligations is evidenced with; the program itself, and any attestation, belong to the institution that holds the data. We will not tell you a system is secure or compliant as a finished state - we will tell you what we built, and help you evidence it for the buyer or the bank that asks.",
  },
];

export function FintechFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Building for fintech, answered" />
        </Reveal>
        <Reveal className="mt-9">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                  {f.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
