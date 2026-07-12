import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Commercial-investigation + definitional questions for buying a custom web
// build - deliberately distinct from the homepage FAQ, and stack-agnostic.
// Every Q&A is visible on the page and mirrored 1:1 into FAQPage JSON-LD.
const faqs = [
  {
    question: "What's included in a custom web development project?",
    answer:
      "A typical build includes UI/UX design, custom development, a headless or traditional CMS, SEO and schema, analytics, and a tested launch. You get code and content you fully own. E-commerce, web-app features like auth and dashboards, and AI add-ons are scoped in when you need them.",
  },
  {
    question: "How much does a custom website or web app cost?",
    answer:
      "Intention InfoService publishes fixed starting prices: a single-page site from $300, a multi-page site from $1,500, a lead-focused site from $4,000, e-commerce from $7,000, and web-app MVPs from $12,000. The final number depends on scope, but you always agree a fixed price after a short discovery, before any build begins - never open-ended hourly billing.",
  },
  {
    question: "Do you take on smaller projects or tighter budgets?",
    answer:
      "Yes. Alongside our published packages, we take on smaller single-page and starter builds. There's no minimum you need to hit to talk to us - tell us your scope and budget and we'll shape an honest fixed price that fits, or say so honestly if we're not the right fit.",
  },
  {
    question: "What technology stack do you use to build a website?",
    answer:
      "We're stack-agnostic and pick the right tool per project - Next.js, React or Astro on the front end; WordPress, Laravel, Django, Node or Java on the back end; Shopify or custom for commerce. In discovery we recommend the stack that best fits your goals, timeline and budget, then you approve it before we build.",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design is how a site looks, feels and flows - layout, branding, UX and accessibility. Web development is the engineering that makes it work - the code, CMS, integrations and performance. A full-service company like Intention InfoService does both, so design and build stay in sync from day one.",
  },
  {
    question: "What is the difference between a website and a web application?",
    answer:
      "A website mainly presents information - pages a visitor reads, like a marketing or corporate site. A web application is interactive software in the browser - logins, dashboards, data and workflows, like a SaaS product or a customer portal. We build both, and often a mix of the two.",
  },
  {
    question: "Do I own the code and design when the project is done?",
    answer:
      "Yes. You own the code, the design and the content outright, with no platform lock-in and no ongoing license to us. We hand over the repository and CMS access at launch, so you can host it anywhere and hire anyone to work on it later.",
  },
  {
    question: "Can you redesign or rebuild my existing website?",
    answer:
      "Yes. We start with a short audit of your current site's performance, SEO and content, then rebuild it on a modern stack - usually migrating your content and preserving search rankings with proper redirects. Many clients come to us to replace a slow WordPress or template site.",
  },
  {
    question: "Is a small team a risk for my project?",
    answer:
      "For most businesses it's the opposite. You work directly with the senior people building your product, not an account manager or a rotating offshore team. Intention InfoService has been a registered company since 2016 and deliberately takes on a limited number of projects at a time, so yours gets real attention.",
  },
  {
    question: "What do you need from me during the project?",
    answer:
      "Less than you'd expect. After discovery we run on weekly demos, so you review progress in about an hour a week. We handle the design, engineering and technical decisions; you provide brand assets and content, or the people who have them, plus timely sign-off at each milestone.",
  },
  {
    question: "Do you really work to a fixed price, or does it change?",
    answer:
      "The price is fixed once scope is agreed in discovery, and it doesn't move unless you ask to add work. If you want to expand scope mid-project we quote that change separately and you approve it first, so there are no surprise invoices at the end.",
  },
  {
    question: "What happens after launch - do you offer support?",
    answer:
      "Every site is handed over stable and documented, and you can add an optional care plan from $100 a month for hosting, security updates, monitoring and small changes. There's no lock-in: the care plan is there if you want it, not a requirement to launch.",
  },
  {
    question: "How do you make a website fast and SEO-ready?",
    answer:
      "We choose a stack suited to your project, ship minimal code, optimize images and fonts, and add structured data and clean information architecture from the start. That's why this page passes Core Web Vitals - and you can verify the scores yourself on PageSpeed Insights.",
  },
  {
    question: "Which regions and industries do you build for?",
    answer:
      "Intention InfoService works with startups, SMBs and enterprises across the US, UK, UAE, Europe and India, with overlapping hours, weekly demos and quotes in USD. We're not tied to one sector - the work is custom web and web-app development, and the vertical shapes the requirements rather than the stack. Our industry pages set out what we understand about each one.",
  },
];

export function WebDevFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Web development, answered" />
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
