import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// The objection map. Every red-flag question the industry created, answered
// confidently in the client's voice. Answer-first, mirrored 1:1 into FAQPage
// JSON-LD. No fabricated ROAS/results, no guarantees, no organic services.
const faqs = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is paid, measurable advertising - you pay for clicks, leads or sales across channels like Google Ads, Meta, LinkedIn and display, and every dollar is tied to a result. It buys attention now, unlike organic marketing (SEO, content, email), which earns it over time.",
  },
  {
    question: "What's the difference between performance marketing and SEO / digital marketing?",
    answer:
      "Performance marketing is the paid half - you pay platforms for traffic and it stops when the budget stops. SEO and organic digital marketing earn traffic over time and keep working without per-click spend. Most businesses run both. Our organic side lives on our digital marketing service.",
  },
  {
    question: "Do you mark up my ad spend?",
    answer:
      "No. You pay Google, Meta and the other platforms directly - your ad spend never passes through us, so there is nowhere for a markup to hide. We charge one flat monthly fee for the work, and that's the entire bill.",
  },
  {
    question: "Who owns the ad accounts and data?",
    answer:
      "You do - always, no exceptions. Every account (Google Ads, Meta Business Manager, LinkedIn) is created under your business, and we operate as a user on your account. If you ever leave, you keep every account, campaign and all the history.",
  },
  {
    question: "Do you charge a percentage of ad spend or a flat fee?",
    answer:
      "A flat fee - never a percentage. Percentage-of-spend pricing pays an agency more when you spend more, so cutting a wasteful campaign cuts their own pay. A flat fee removes that conflict: 'spend less to make more' is advice we can give freely.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "No - month-to-month. Long lock-ins exist to protect agencies from clients leaving when results disappoint. We'd rather remove that crutch and keep your business by being worth keeping.",
  },
  {
    question: "How much ad spend do I need to start?",
    answer:
      "Enough for the platforms to learn, but you don't need a big budget to start with us. We'll recommend a starting budget that can realistically generate signal for your price point and goal - and tell you honestly if a budget is too thin to work rather than take it anyway. Small budgets are welcome.",
  },
  {
    question: "How fast will paid campaigns show results?",
    answer:
      "Faster than SEO, but not instant. Campaigns go through a learning phase first - Meta ad sets typically stabilize in about 1-2 weeks, and Google Performance Max realistically needs 4-6 weeks before the data is meaningful. Cost-per-result runs higher during learning; that's normal, not failure.",
  },
  {
    question: "Do you guarantee a specific ROAS or results?",
    answer:
      "No - and anyone who does is either guessing or not being straight with you. No agency controls every variable between the click and your sale. What we commit to instead: transparent reporting, disciplined optimization, shared access to all your data, and a real plan to improve over time.",
  },
  {
    question: "Can you prove results if you have no case study yet?",
    answer:
      "Not with a paid case study - we won't pretend otherwise. What we prove instead is how we operate: you own the accounts and data, we don't touch your spend, our fee is flat and transparent, our tracking and reporting are documented up front, and you're month-to-month. The paid audit lets you see our thinking on your account first.",
  },
  {
    question: "Is a small senior team enough to run my paid media?",
    answer:
      "Yes, and it's an advantage. Your spend is planned and managed by a senior person, not handed to a rotating junior behind a 'team' label. Intention InfoService has been incorporated since 2016 and runs lean by design, so you get direct access to the person actually managing your money.",
  },
  {
    question: "How much does paid media management cost?",
    answer:
      "Start with a fixed-price Paid Media Audit from $100 (credited toward your first month), which ends in a plan you keep. Ongoing management is a flat monthly fee scoped to your channels and goals - never a percentage of your ad spend - and you always pay the platforms directly.",
  },
];

export function PerfFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Paid media, answered" />
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
