import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. NO <Link> in any answer (schema leak) - routing in
// prose. The "is Strapi free / paywall" question is the primary myth-buster (the licensing honesty).
// Strapi-vs-Sanity is fair (live sibling, self-hosted-vs-SaaS axis); Contentful appears once,
// descriptively, no scored comparison and no staked "vs Contentful" head. Partner/cert is NOT repeated
// here (lives only in the Proof risk-reversal card). GraphQL = via Strapi's OFFICIAL PLUGIN (REST is
// core). No Strapi Cloud tier names, no CVE/req-s numbers, no Lighthouse/CWV. Ownership = own code +
// data + database (self-hosted), distinct from the hosted-SaaS siblings. "does this site run on Strapi"
// = a PERMANENT zero (unlike Sanity, not on the plan).
const faqs = [
  {
    question: "Is Strapi actually free, or will I hit a paywall?",
    answer:
      "Both, and here is where the line is. Strapi's Community Edition is genuinely open-source and MIT-licensed, free to self-host with no per-seat fees and no cap on API requests, admin users or content entries. The core is a real product, not a trial: content types, a REST API out of the box and GraphQL via the official plugin, role-based access control, internationalization, the media library, the plugin system, draft and publish, and the Document Service. What sits behind paid editions are specific extras - things like advanced release management, content history, live preview and Strapi's AI features, with single sign-on, review workflows and audit logs in the higher tiers. So the honest version is: the open-source core is free and yours, and you only pay if you want a specific paid-edition feature or managed hosting. Before you commit, we tell you which side of that line your feature list falls on.",
  },
  {
    question: "Strapi vs Sanity - which should I use?",
    answer:
      "It comes down to who runs the backend. Sanity and Contentful are hosted, SaaS headless CMSs: you own your content, but the vendor runs the software and you rent access to it. Strapi's Community Edition is open-source and self-hosted: you own the running software too - the code, the React admin and the database - and extend it in Node. Pick self-hosted Strapi when owning and controlling the backend is a genuine requirement; pick a SaaS CMS, or managed Strapi Cloud, when you would rather not run infrastructure. Neither is better in the abstract, and we recommend by fit.",
  },
  {
    question: "Strapi vs WordPress - what's the difference?",
    answer:
      "Different jobs. WordPress is a traditional, page-based CMS where a team edits whole pages through a familiar themed admin with plugins - often the simpler, cheaper choice for a single site one team maintains. Strapi is a headless content backend that serves a REST or GraphQL API to a separate Next.js or Astro front end. If your team just wants to edit pages in a familiar admin, that is WordPress; if you want structured content served to one or more front ends and a backend you own, that is Strapi.",
  },
  {
    question: "Is Strapi good for SEO?",
    answer:
      "Strapi itself is a headless backend - on its own it renders nothing, so it has no direct bearing on SEO. SEO comes from the front end we pair with it: a fast Next.js or Astro build reading Strapi's API, with structured content, clean metadata and localization. On a migration, we protect SEO by mapping every URL, preserving metadata, and setting redirects before cutover. We claim the method, never a ranking outcome.",
  },
  {
    question: "Do I own my data with Strapi?",
    answer:
      "Yes, and more than that. With a self-hosted Community Edition build you own both the data and the CMS software itself: you host it on infrastructure you control, the content lives in a database you choose - PostgreSQL, MySQL or SQLite - and the code is MIT-licensed and yours to read, patch and extend in Node. You own the running software, not just the content inside it, and you can move to any other Strapi developer without asking us.",
  },
  {
    question: "Self-hosted Strapi vs Strapi Cloud - which should I pick?",
    answer:
      "A real choice, and it is the same open-source Strapi either way. Self-host it for full control and to own the whole stack, and you pay only your own infrastructure. Or use Strapi Cloud, Strapi's own managed-hosting product, to skip the DevOps - you still own the code, but Strapi runs it. Self-hosting means someone patches and maintains the server; managed hosting hands that off. We help you decide by how much operational work your team wants to own, and you pay your host or Strapi directly, with no markup from us.",
  },
  {
    question: "Isn't self-hosting a lot of work - who keeps it patched?",
    answer:
      "Yes, honestly - self-hosting is real work, and pretending otherwise is how CMSs rot. Someone has to patch Strapi, harden the server and manage deploys; Strapi ships security fixes on a rolling basis, and each one needs assessing, testing in staging and deploying carefully. The honest options are three: we run and patch it for you on a published care plan, your own team does it, or, if you would rather never think about it, you take a managed route instead - a SaaS headless CMS or Strapi's own managed Strapi Cloud. We help you pick by fit, not by what bills us the most.",
  },
  {
    question: "Does this website run on Strapi?",
    answer:
      "No, and unlike Sanity it is not on the plan to. This site is a static Next.js and React build; we do plan to move our own blog onto Sanity, but Strapi is not on that list, so this is a permanent no, not a 'not yet.' Strapi is a Node.js app with a React admin, and Node and React are what we build every day - which is why we can read a Strapi codebase cold - but knowing Node and React is not the same as having shipped a Strapi CMS, and we will not blur the two.",
  },
  {
    question: "Do I own the code you build?",
    answer:
      "Yes - the code is yours, and with self-hosted Strapi that ownership is unusually complete. Your content types, your custom Node controllers and services, and the standard open-source Strapi they run on all live in your repository and on your infrastructure, in a database you control. Any competent Node team can pick it up, and you can move on without asking us. Fixed pricing and code you own outright are the whole point.",
  },
];

export function StrapiFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Strapi development, answered" />
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
