import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. NO <Link> in any answer (schema leak) - routing in
// prose. RED-TEAM FIXES: "Is Drupal still relevant?" is REFRAMED to the forward "What's new in Drupal in
// 2026?" (the "Is X dead?" interrogative is spent by Angular/Laravel/PHP, and "Is X relevant?" collides
// with WordpressWhy). The gov/higher-ed clause is NOT repeated here (spent once, in DrupalScope). "Starshot"
// is named at most ONCE, here, as the former codename. Partner/cert: both programs named + disclaimed, NO
// tier, individual-cert narrowing (never "we are not Drupal/Acquia certified"). Ownership = self-hosted
// own code/site/data, never "own the host". "vs WordPress" answered by FIT, never "Drupal is better". No
// pricing figures, no Lighthouse/CWV. "does this site run on Drupal" = a PERMANENT zero on the complexity
// axis. Byte-consistent with the live WordpressCompare/Faq positioning of WordPress as the page-based CMS.
const faqs = [
  {
    question: "What is Drupal used for?",
    answer:
      "Drupal is an open-source PHP content management system built for genuinely complex, structured content and fine-grained editorial governance. Where a simpler CMS handles pages and posts, Drupal treats content types, taxonomy, relationships, editorial workflow, roles and multilingual as core capabilities, so it suits sites where the content model itself is intricate - many interrelated types, deep categorization, staged review and several languages. It renders its own site and can also run decoupled, serving that structured content to a separate front end.",
  },
  {
    question: "Drupal vs WordPress - which should I use?",
    answer:
      "It comes down to how structured your content is, and we answer by fit, not by declaring a winner. WordPress is the simpler, page-based choice: a familiar admin and a huge plugin ecosystem, ideal for content a team edits without a complex model behind it. Drupal is the structured choice: deep taxonomies, many interrelated content types, fine-grained roles and real multilingual, all native to the core. If your content is mostly straightforward, WordPress is usually the simpler, cheaper call; if the content model itself is genuinely complex, that is where Drupal earns its keep. We route you by the shape of your content.",
  },
  {
    question: "Is Drupal worth it, or is it hard to use?",
    answer:
      "Worth it when the content is genuinely complex, and over-engineered when it is not. Drupal rewards up-front investment in modelling and governance, which pays off on an intricate content estate and is wasted effort on a simple brochure or blog. It has a reputation for a steeper learning curve than a page-based CMS, and Drupal CMS is narrowing that gap for site builders with Recipes and in-browser page building, though several of those pieces are still maturing. If your content does not need that structural power, we will say so and point you somewhere lighter.",
  },
  {
    question: "What's new in Drupal in 2026?",
    answer:
      "The current line is Drupal 11, and the headline is Drupal CMS - the official distribution aimed at making Drupal faster to adopt, with Recipes, Project Browser and in-browser visual page building through Drupal Canvas. Alongside that, the platform has added the Access Policy API for context-aware permissions, class-based hooks, and continued work on Single Directory Components for the front end. And with Drupal 7 past its end of life, a large migration wave is moving sites onto Drupal 11. It is an actively developed platform, and we track where it is going as well as where it is.",
  },
  {
    question: "What is Drupal CMS?",
    answer:
      "Drupal CMS is the official distribution of Drupal 11, released in January 2025 - the product that came out of the initiative formerly codenamed Starshot. Its goal is to make Drupal easy to adopt for non-technical site builders: it bundles Recipes (composable feature packs that configure a slice of functionality in one step), Project Browser for installing modules from the admin UI, automatic updates, and in-browser visual page building. It is fast-moving and parts of it are still maturing, so we treat it as the current direction and pin a build to what is dependable today.",
  },
  {
    question: "Can you migrate my Drupal 7 site to Drupal 11?",
    answer:
      "Yes. Drupal 7 is past its end of life, so moving off it is the honest priority, and the core Migrate API is the supported path. We map your old content types, fields, taxonomy and users into a freshly modelled Drupal 11 site, run the import into a non-production copy to verify content and relationships, and map your URLs with redirects before cutover so your SEO survives the move. We treat the migration as a chance to fix the content model rather than photocopy it, and we scope it from an audit of your actual site, not a guess.",
  },
  {
    question: "Do I own my Drupal site?",
    answer:
      "Yes. Drupal is open-source under the GPL and self-hosted, so what we build is yours to keep - the code, the running site and the data. You pay for your own hosting in your own name, which means you rent the servers, not us; we would never claim you own the host. And because no single vendor owns Drupal, no one can relicense it or pull the rug out from under a site built on it. A standard Drupal build can be handed to any competent Drupal team without asking us.",
  },
  {
    question: "Is Drupal good for SEO?",
    answer:
      "Drupal renders its own front end, so SEO is a matter of method: clean semantic markup, structured data, sensible information architecture, and performance work on the pages. For a decoupled build, SEO is a property of the Next.js or Astro front end reading Drupal over its API. On a migration we protect SEO by mapping every URL, preserving metadata and setting redirects before cutover. We claim the method, never a ranking outcome.",
  },
  {
    question: "Is Drupal good for headless or decoupled builds?",
    answer:
      "Yes. JSON:API is in core and GraphQL is available through contrib, so Drupal can serve its structured content to a separate front end you build in Next.js or Astro while it stays the content and governance backend. That said, if there is no traditional site to render at all and the whole point is API-first content operations, a purpose-built headless backend may fit the shape better, and we would tell you that rather than push Drupal into a role a lighter tool suits.",
  },
  {
    question: "Are you a Drupal Certified Partner, or Acquia certified?",
    answer:
      "No, and we will not imply otherwise. The Drupal Certified Partner program is the non-profit Drupal Association's own program, earned through a volume of contribution credits we have not put in, and we are not in its public directory. We are not an Acquia partner either - the Acquia Solution Partner Program is a separate commercial agency program. There is no company-level Drupal certification: the Acquia certifications are individual credentials a developer earns through Acquia Academy, not a company badge, so a company claiming one would be a category error. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold.",
  },
  {
    question: "Does this website run on Drupal?",
    answer:
      "No, and it shouldn't. This site is a static Next.js and React build, and its content is a handful of simple types - the case where Drupal's native structural power would be over-engineered. We plan to move our own blog onto a lighter structured CMS, not a full traditional CMS like Drupal, so Drupal is a permanent zero on our own domain. That is a fit judgment, not a knock on the platform, and it is exactly the judgment we would apply to your project.",
  },
];

export function DrupalFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Drupal development, answered" />
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
