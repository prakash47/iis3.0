import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Cost is answered HONESTLY
// (scoped, not guessed) - no fabricated price, no certification claims, no
// invented SaaS metrics.
const faqs = [
  {
    question: "What is custom software development, and when do I need it?",
    answer:
      "Custom software is a system built for your exact process - an internal tool, a portal, a SaaS platform, an API or an automation - instead of bending your business to fit an off-the-shelf product. You need it when spreadsheets or subscription tools no longer fit, when you need to connect systems that don't talk, or when a workflow is costing you real time.",
  },
  {
    question: "How do you price custom software when every project is different?",
    answer:
      "We don't guess a price, and we don't hide behind a quote wall. Every build starts with a fixed-price Discovery Sprint from $1,000 that produces a written scope, an architecture and a fixed price for the build - which you approve before any code. The discovery fee is credited toward your build.",
  },
  {
    question: "How much does custom software or a SaaS platform cost?",
    answer:
      "It depends entirely on scope - a single automation is a very different number from a multi-tenant SaaS platform, so an honest fixed price only comes after discovery. The Discovery Sprint (from $1,000) exists exactly to give you that real, fixed number quickly, instead of a vague range or a sales call.",
  },
  {
    question: "Who owns the code, IP and data?",
    answer:
      "You do - 100% of the code, the IP and your data transfer to you on final payment, with no lock-in and no license back to us. We hand over the repository, documentation and cloud accounts so you can host it, extend it and hire anyone to work on it later.",
  },
  {
    question: "Do you sign an NDA?",
    answer:
      "Yes, on request. Your idea, data and business details stay confidential from the first conversation. We're a registered company since 2016, and we're happy to sign your NDA or provide ours.",
  },
  {
    question: "How do you handle security?",
    answer:
      "With security-minded engineering: role-based access control, encrypted secrets, least-privilege integrations and audited dependencies, built to your compliance requirements. We build to the standard your data needs; we don't claim certifications we don't hold.",
  },
  {
    question: "Can it integrate with our existing tools?",
    answer:
      "Yes - integrations are core to what we do. We connect your CRM, ERP, payment provider, auth provider or legacy database, and build the APIs, webhooks and data sync between them so your systems finally talk to each other.",
  },
  {
    question: "How long does a custom software project take?",
    answer:
      "Weeks to a few months, depending on scope - a focused internal tool ships far faster than a full platform. After discovery you get a real timeline with milestones, and we demo working software every week so you always know where things stand.",
  },
  {
    question: "Will I be locked in to you?",
    answer:
      "No. We build on mainstream, open stacks - Node, Laravel, Django, Java and Spring, Next.js and React - with no proprietary framework, plus documented handover and tests. You own everything, so any competent team can take it over. We earn the next phase; we don't trap you into it.",
  },
  {
    question: "Can you replace our spreadsheets or a legacy system?",
    answer:
      "Yes. We start by mapping how you work today, then build a system that replaces the spreadsheet or the legacy tool - migrating your data carefully so nothing is lost, and rolling it out in stages so your team is never stranded.",
  },
  {
    question: "What's the difference between custom software, a web app, and a mobile app?",
    answer:
      "Custom software is the system and back office your business runs on. A web app or website is the browser-facing front end or web presence. A mobile app is a native iOS or Android app. They often work together - we build all three, and this page is about the systems, platforms, tooling, APIs and automation behind them.",
  },
  {
    question: "Can you do a small automation or integration on a tight budget?",
    answer:
      "Yes. Not everything is a big platform - connecting two tools or automating one manual process can be a small, focused job. Tell us what you have in mind and your budget, and we'll scope an honest fixed price for the smallest thing that delivers value first.",
  },
];

export function CustomFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Custom software, answered" />
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
