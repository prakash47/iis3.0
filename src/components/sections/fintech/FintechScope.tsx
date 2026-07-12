import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCreditCard, IconGrid, IconServer, IconRefresh, IconCheck, IconLayers, IconArrow } from "@/components/icons";

// CAPABILITY TENSE ONLY. We have zero fintech clients and have built zero regulated money systems,
// so every card describes what a job of this shape involves and how we would approach it - never
// "the payment systems we run" or "our fintech clients". The word "app" stays out of the headings.
//
// EVERY CARD IS ON THE SOFTWARE SIDE OF THE REGULATED LINE. None of them requires Intention
// InfoService to hold customer funds, become the licensed money transmitter, or take on the card
// issuer / sponsor-bank role. That is the scope of the business this page describes.
//
// Anchors are worded differently from every inbound link on the site.
const uses = [
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Embedded-payment front ends", d: "Checkout, billing, subscriptions and payouts built on a processor, where the card data and the money movement live on the processor's rails and your interface instructs them - not a payments system we stand up and hold the risk for." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Financial dashboards and reporting", d: "The balances, transactions, statements and analytics people actually read, assembled from your processor, bank and ledger data - clear, correct, and reconciled to the sources rather than a pretty view that quietly disagrees with them." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Reconciliation and ledger tooling", d: "The double-entry ledger and the reconciliation that compares it, continuously, to what the processor and the bank actually report - break-reports, drift alerts and an audit trail. This is the discipline whose absence broke Synapse, and we build it first, not last." },
  { icon: <IconServer className="h-5 w-5" />, t: "Back-office and operations tooling", d: "The internal consoles a finance team runs on: reviewing transactions, resolving disputes, issuing refunds and adjustments as auditable entries, and answering the question a regulator or a customer asks with one record rather than a reconstruction." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Onboarding, KYC and lending front ends", d: "The onboarding, identity-verification and application flows that ride a sponsor bank or a BaaS provider, wired to an identity vendor, with the review queues and case management the operator's program runs - you or your bank own the program; we build its software." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Open-banking and processor integrations", d: "Account aggregation and payment initiation through open-banking access (Plaid and its peers), and processor, ACH and real-time-rail integrations built to the published standards - so the connection is engineered for retries, webhooks and reconciliation, not just a happy-path SDK call." },
];

export function FintechScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build for fintech"
            title="The software around the money, not the money itself"
            sub="Fintech software is mostly instruction, integration and proof. The funds sit at a bank or a processor, the licence sits with a regulated entity, and the interesting engineering is what you build around them so that every movement posts once, reconciles, and can be explained afterwards. A typical engagement is one of these:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((u) => (
            <div key={u.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {u.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                What this page is, and where the build actually lives
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This page is about the sector, what building for it demands, and which side of the
                regulated line we stand on. The engagement itself is priced and scoped on the service
                pages:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A bespoke system, scoped before it is priced
                    </span>
                    {" - "}
                    a ledger, a dashboard or an integration layer is custom software, so it enters
                    through{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                      the discovery that ends in a fixed build price
                    </Link>
                    . Which stack it lands on is a separate question, answered on{" "}
                    <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
                      how we decide what to build it with
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A store checkout is a different job
                    </span>
                    {" - "}
                    if you are selling goods and need a shop with a cart and checkout, the payments
                    are handled for you by the commerce platform, and that is{" "}
                    <Link href="/technologies/shopify" className="font-medium text-brand-500 hover:text-brand-600">
                      a Shopify store
                    </Link>{" "}
                    or{" "}
                    <Link href="/technologies/woocommerce" className="font-medium text-brand-500 hover:text-brand-600">
                      a WooCommerce store
                    </Link>
                    , not a fintech build. The marketing site in front of the product is{" "}
                    <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                      our web design and development service
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Customers on phones, and AI
                    </span>
                    {" - "}
                    a native finance experience is a separate build, and we have shipped no mobile
                    app for anyone yet, in this sector or any other. The honest state of our app work
                    is on{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                      mobile app development, on honest terms
                    </Link>
                    . AI routes to{" "}
                    <Link href="/services/ai-development" className="font-medium text-brand-500 hover:text-brand-600">
                      adding AI to a financial product, carefully
                    </Link>
                    , on the assistive side - not underwriting or fraud-scoring models we would have
                    to stand behind.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
