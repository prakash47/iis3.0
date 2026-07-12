import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconShield, IconRefresh, IconLayers, IconLock, IconDatabase, IconSearch } from "@/components/icons";

// THE MYTH-BUSTER dismantles the category's default assumption - that becoming a fintech means
// building regulated money infrastructure. Most of the time it does not: the money moves on a
// processor or a sponsor bank you rent, and building the regulated layer yourself is rarely the
// move. This is where spine (a), "you are not the bank / rent the rails", lives - it is the
// reusable industry-family anti-recommendation, NOT the page's signature (that is the ledger, in
// Proof).
//
// ZERO STATISTICS. No transaction volumes, no fraud rates, no market sizes, no penalty figures, no
// "X% of fintechs". The Synapse collapse is cited as an attributed industry event with NO dollar
// figure. Authority here comes from knowing where the money and the licence actually live, and
// from being willing to talk a buyer out of building regulated infrastructure.
//
// NEVER A LEGAL CONCLUSION about the buyer. "may turn on a licence - a question for your counsel",
// NEVER "you need a money-transmitter licence" or "the real project IS a licensing project".
const pillars = [
  { icon: <IconShield className="h-5 w-5" />, t: "You are almost never the bank", d: "The charter, the licence and the custody of funds sit with a regulated party - a sponsor bank, a licensed transmitter, a processor - and in a BaaS model the money sits in that bank's accounts, in its name. A software firm is not that party and cannot become it by writing code. Knowing where the licence and the money actually live is the first real decision, and we make it in writing. What we build is the software that instructs those rails and reconciles against them." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "The bug that never crashes", d: "In most software a serious bug throws an error. In fintech the worst one does not: a movement posts twice, a webhook is replayed, a rounding rule drifts, and the books quietly stop matching the bank. Nobody sees it until it is expensive. We design for exactly-once posting and continuous reconciliation because the failure mode here is a number that is silently wrong, not a page that is visibly down." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Integration is the product", d: "Almost nothing in fintech stands alone. The processor, the sponsor bank, the ledger, the identity vendor and the open-banking aggregator all have to agree, and the rails that make them agree - card networks, ACH governed by Nacha, the ISO 20022 messaging the major rails are moving to, open banking through Plaid - are published standards. Building to them well, with retries and reconciliation, is where a fintech build is won or lost." },
  { icon: <IconLock className="h-5 w-5" />, t: "The least money to move through you", d: "Every system that sits in the flow of funds is another place the money can be delayed, doubled or lost, and another party a regulator asks about. So we keep the funds movement on the licensed rails and keep our systems to instructing and proving it - not custody. It is a smaller surface for you, and it is the posture whose absence is the recurring headline in this sector." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Financial data is not ordinary data", d: "Account data and personal financial information sit under the GLBA Safeguards obligations for the institution that holds them, and cardholder data drags a whole environment into PCI scope. Those are not paragraphs to bolt on; they are access models, encryption and audit decisions in the schema. What we build is least-privilege access, encryption and the audit trail a written security program is evidenced with." },
  { icon: <IconSearch className="h-5 w-5" />, t: "We would rather scope than guess", d: "A fintech build is custom software. It enters through a paid discovery that ends in a written scope, a money-flow map and a fixed price - because the alternative is a number invented before anyone knew whether funds or account data would flow through what we build, which is the question that decides the cost and the risk." },
];

export function FintechWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Should you build regulated financial infrastructure?{" "}
                <span className="gradient-text">Almost never - and we&apos;d rather say so first.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Most briefs that arrive as &quot;a fintech&quot; describe software that instructs
                money on rails somebody else already runs - a processor for the payments, a sponsor
                bank or a Banking-as-a-Service provider for the accounts and the licence. That is
                usually the right shape. Renting those rails means the charter, the custody of funds
                and the regulated obligations stay with a party that is licensed to carry them, and
                your build is the interface, the ledger and the reconciliation on top.{" "}
                <span className="font-semibold text-foreground">When is building the regulated layer yourself right?</span>{" "}
                Rarely, and only when the money movement itself is genuinely your product and no
                provider will carry it - at which point the first project is a licensing and
                sponsor-bank question, and that is a matter for your counsel, not a screen we design.
                The firm that blurs this - that quietly becomes the ledger of record and the money
                mover without the licence to match - is the firm whose books eventually stop matching
                the bank. That is the failure the public record of the Synapse collapse is made of,
                and it is the one this page is built to help you avoid.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why fintech is different"
            title="What building for fintech actually demands"
            sub="Every sector claims to be special. In this one the regulated entity is usually not you and never your vendor, the worst bug is a number that is quietly wrong rather than a crash, and the money you show on a screen is only a claim until it reconciles with the party that actually holds it."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The anti-recommendation. id="when-not" matches the thirteen technology spokes and the
            edtech + healthcare pages, so the site-wide "we tell you when not to" promise is one
            click from the hero button. BOTH HALVES: the refusals, then where custom genuinely wins.
            No legal conclusion about the buyer - licence questions route to their counsel. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to build, and when we&apos;d turn the work down
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              If a processor plus a sponsor bank or a BaaS provider already does what you need,
              integrate onto them and keep your money - that is the column we highlight in the table
              below, and it is the answer most often. If a brief may turn on a money-transmitter
              licence or a sponsor-bank relationship before it is a software project, we flag it as a
              question for your counsel, not a determination we make, and we will not pretend code
              substitutes for whatever that answer is. If your product is crypto - an exchange, a
              DeFi protocol, token issuance, crypto wallets or smart contracts - that is not us, and
              we say so plainly rather than learn it on your budget. If it is high-frequency trading
              infrastructure or a core-banking ledger of record for a chartered bank, you want a
              specialist we are not. And if procurement gates on a supplier who carries a SOC 2
              report, an ISO 27001 certification or a signed contract we cannot offer, we do not
              clear that gate, and you should choose a firm that does.{" "}
              <span className="font-semibold text-foreground">Where a custom build genuinely wins:</span>{" "}
              when the ledger, the reconciliation, the dashboards, the back office or the
              embedded-payment experience is the product and the off-the-shelf tools fight it. That
              is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                where a fintech build gets scoped and priced
              </Link>
              , and we will make that case with you in writing rather than assume it. Talking you out
              of building regulated infrastructure you do not need is the only credential we can offer
              before the first fintech build ships.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
