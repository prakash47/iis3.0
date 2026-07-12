import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. NO <Link> in any answer (schema leak) - routing in
// prose. The "vs Sanity/Strapi" question is REFRAMED to fit (Q4) so it does not stake a scored
// "Contentful vs Sanity" head (both are LIVE siblings) - names each once, descriptively, no verdict.
// The Salesforce answer (Q3) is the CONCISE, version-conservative echo of the dedicated section: agreed
// not closed, no date, no price, never "Salesforce owns Contentful". Ownership uses the hosted-SaaS split
// (content yours/exportable, platform rented) - never "own the platform", never flat "no lock-in". No
// pricing figures, no Lighthouse/CWV. "does this site run on Contentful" = a PERMANENT zero (unlike Sanity)
// with the FRESH fit reason. Byte-consistent with how NextjsCapabilities/AstroScope/StrapiCompare name it.
const faqs = [
  {
    question: "What is Contentful, and what is a composable content platform?",
    answer:
      "Contentful is an API-first, hosted headless CMS: it stores and serves your content over APIs but does not render your website. It calls itself a composable content platform because it is built for content assembled and orchestrated across many teams, brands, locales and channels at once - structured content types served over purpose-built APIs, with environments, roles, releases and orchestration to govern who publishes what, where and when. Below that scale it is a lot of platform; at that scale it is the coordination layer a large content operation runs on.",
  },
  {
    question: "Is Contentful worth it, or is it too expensive?",
    answer:
      "It depends entirely on scale, and we answer by fit rather than defend the platform. Contentful earns its price when content is a coordination problem - many teams, brands, locales and channels shipping at once, needing governed environments, review and orchestration. If your content is one small team writing for one site, that governance is weight without payoff, and a leaner CMS is the honest, cheaper call. We would rather tell you it is more than you need than sell you the biggest tool in the shed.",
  },
  {
    question: "Is Contentful still a good choice after the Salesforce acquisition?",
    answer:
      "Contentful has agreed to be acquired by Salesforce, announced in mid-2026 as a signed definitive agreement. As things stand that deal has not closed and is awaiting regulatory approval, so Salesforce does not own Contentful today, and we would not plan as if it did until the deal closes. Contentful has said its API-first architecture and enterprise support will continue. It is a fair thing for a long-term buyer to weigh, which is exactly why we make the platform call on genuine fit rather than on this quarter's headlines - and either way your content stays exportable and yours.",
  },
  {
    question: "Is Contentful the right headless CMS for me, or is a leaner one enough?",
    answer:
      "It comes down to how much content governance you actually need. Contentful is the enterprise end of the structured, headless family: strong when many teams coordinate across brands and channels. A leaner, developer-first option like Sanity fits when content is structured but the team is small; Strapi fits when you want to own and self-host the running software; and WordPress fits when a team just wants to edit whole pages in a familiar admin. We are not a Contentful partner and have no incentive to push it, so if a leaner tool fits you better, we will say so.",
  },
  {
    question: "Do I own my content on Contentful, and am I locked in?",
    answer:
      "You own your content and your content model - the type definitions, entries, assets and relationships - and you can export them at any time through the Content Management API or the CLI; the front-end code we write is yours too. What you do not own is the running platform: Contentful is a hosted service you rent and pay for directly. So the honest answer is not a flat 'no lock-in' - moving off any hosted platform is real work - but your content is exportable, structured data rather than a database held hostage, which is a very different risk than a closed page builder you cannot leave.",
  },
  {
    question: "Can you migrate my existing site onto Contentful?",
    answer:
      "Yes, and it is a defined engineering sequence rather than a copy-paste. We model the target content types first, script the extract and transform from your current source through the Management API, and run the whole import into a non-production environment where we verify counts, references and rendered output before anything touches production. URLs are mapped and redirects planned before cutover, so your SEO equity and inbound links survive the move. Doing it in an isolated environment first is exactly what Contentful's environments are for.",
  },
  {
    question: "Is Contentful good for SEO?",
    answer:
      "Contentful itself renders nothing, so SEO is a property of the front end you put in front of it. Pairing Contentful with a fast Next.js front end (for app- or SEO-critical sites) or Astro (for content sites) gives you server-rendered, fast-loading pages with full control of metadata and structured data. On a migration we protect SEO by mapping every URL, preserving metadata and setting redirects before cutover. We claim the method, never a ranking outcome.",
  },
  {
    question: "Do you build the front end too, or just the Contentful backend?",
    answer:
      "Both. Contentful is the content backend; the website is a separate front end that reads it, and we build that front end on Next.js for app-grade and SEO-critical sites or Astro for content sites, reading Contentful over its Delivery or GraphQL API with preview builds and on-demand revalidation. Contentful models, governs and stores the content; the front end renders it. We deliver the whole path, and you own the front-end code.",
  },
  {
    question: "Are you a Contentful Solution Partner, or Contentful certified?",
    answer:
      "No, and we will not imply otherwise. Contentful runs a Solution Partner program with a public partner directory, and we are not a Contentful Solution Partner and are not listed in that directory - you can check it. There is also no company-level or agency-level Contentful certification to hold: Contentful's certifications are individual credentials a person earns, issued as verified-skill badges, not a badge a company carries, so claiming a company certification would be a category error. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold; any attestations belong to Contentful the platform, never to us.",
  },
  {
    question: "Does this website run on Contentful?",
    answer:
      "No, and it shouldn't. This site is a static Next.js and React build, and its content is one small team's - a handful of pages, one release at a time. That is exactly the case where Contentful's enterprise governance would be overkill, so we would steer ourselves away from it, the same call we would make for you. We do plan to move our own blog onto a leaner CMS, Sanity, not Contentful, so Contentful is a permanent zero on our own domain - not for lack of capability, but because it would not fit.",
  },
];

export function ContentfulFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Contentful development, answered" />
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
