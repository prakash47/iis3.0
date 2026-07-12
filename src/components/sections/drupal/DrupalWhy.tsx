import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconGrid, IconShield, IconServer, IconLayers, IconLock } from "@/components/icons";

// THE SIGNATURE (genuinely unspent): STRUCTURE-AS-NATIVE-CORE. Sanity SPENT "content as data" (model
// axis); Strapi SPENT "own the software" (ownership-scope); Contentful SPENT "coordination at enterprise
// scale" (governance/orchestration); WordPress SPENT "recommend-by-fit / off-the-shelf editor CMS";
// WooCommerce SPENT "the honest price of owning your store" (cost-of-ownership). Drupal's axis = the
// STRUCTURAL machinery (content model, taxonomy, workflow, roles, languages) is built into the CORE, not
// bolted on as plugins. Concrete payoff welded on: fewer third-party plugins for the hard structural work
// = smaller maintenance-and-security surface, and the structure holds as ONE coherent system.
// RED-TEAM LOCKS: the plugin contrast is a property of DRUPAL ("structure lives in core"), NEVER phrased
// "unlike WordPress"; the anti-rec routes simple content to WordPress on FIT ("simpler, page-based,
// familiar admin"), NEVER on plugin count; the signature and the WordPress route never share a sentence.
// Self-hosted OWNERSHIP is NOT here (spent by Strapi/Woo - it lives in the demoted Proof card only).
// No "Is Drupal dead/relevant?" interrogative (spent by Angular/Laravel/PHP).
const pillars = [
  { icon: <IconType className="h-5 w-5" />, t: "A content model, not post types", d: "Content types, fields and bundles are core constructs, so an event, a case study, a course and a product each become a first-class type with its own typed shape and validation - enforced everywhere it is used. The model is a real system you can query and reference, not a soup of loosely typed posts." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Taxonomy and relationships, built in", d: "Controlled vocabularies, hierarchical terms and entity references are native, so content relates to content in ways the system understands. Deep category trees, cross-referenced topics and faceted filtering sit on one relationship graph - the structural work that becomes a fragile plugin pile elsewhere." },
  { icon: <IconShield className="h-5 w-5" />, t: "Editorial governance in core", d: "Content moderation, editorial workflows, staged content changes for review, and fine-grained roles down to content types and fields are part of the platform, not an add-on. Complex publishing operations get gates and review as a native capability, which is exactly what a simple site never needs." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Real multilingual, woven through", d: "Translation lives in the entity system across three layers - content, configuration and interface - so a single site serves genuinely localized content with per-language workflow. For an organization that actually operates in several languages, that is the difference between a real multilingual site and a duplicated one." },
  { icon: <IconServer className="h-5 w-5" />, t: "Views: query the model, no SQL", d: "Views is a core query and display builder: filtered, sorted, access-aware listings composed against the content model and rendered as pages, blocks, feeds or JSON. A directory, a related-content rail, an editorial queue and a REST endpoint can all be Views over the same entities, so the reporting layer stays in lockstep with the model." },
  { icon: <IconLock className="h-5 w-5" />, t: "One system, smaller surface", d: "Because the structural machinery is core rather than a dozen independently versioned extensions, there are fewer moving third-party parts to patch, monitor and keep compatible over the years. The content model, the queries, the workflow and the access rules reference the same entities and speak the same language." },
];

export function DrupalWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* THE SIGNATURE - structure-as-native-core. Abstraction welded to the concrete payoff (smaller
            surface, one coherent system). Plugin contrast stated as a property of Drupal, never "unlike
            WordPress". */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                In Drupal, the structure is built in,{" "}
                <span className="gradient-text">not bolted on.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                The thing that actually distinguishes Drupal is where the structural power lives. Fields,
                entities and bundles, Views, taxonomy, content moderation and editorial workflow,
                fine-grained roles and context-aware access, and real multilingual are all part of the
                core system - not a stack of thirty independently authored, independently versioned
                plugins bolted together until the site holds the right shape. When every piece of hard
                structural work is a separate third-party extension, complexity is additive: each is its
                own update cadence, its own security advisory, its own point of failure, and the
                integration between them is your problem. In Drupal those capabilities are designed to work
                as one system, so the content model, the query layer, the workflow and the access rules
                reference the same entities and speak the same language. The concrete payoff is a smaller
                maintenance-and-security surface and a structure that holds together as one thing rather
                than thirty - which is what keeps a large content estate maintainable as it grows.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Drupal"
            title="What native structure buys you"
            sub="Drupal is built on one idea - the structural machinery belongs in the core - and everything below follows from it. Here is what that buys you, and, honestly, when a lighter tool is the better call."
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

        {/* The anti-recommendation - route the simple case away on FIT, never on plugin count. This is the
            block the /technologies hub deep-links as id="when-not" (do not remove the id). */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When Drupal is more CMS than you need
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Drupal rewards investment in modelling and governance up front, and that is exactly the wrong
              trade for a simple site. If your content is a handful of straightforward page types that one
              team maintains, that native power is capability you would pay to carry and never use, and the
              simpler, page-based, familiar-admin choice is{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                WordPress
              </Link>
              . If what you actually want is a pure API-first headless backend with the front end fully
              separate, a{" "}
              <Link href="/technologies/sanity" className="font-medium text-brand-500 hover:text-brand-600">
                leaner headless CMS
              </Link>{" "}
              fits the shape better. Not sure which side of that line you are on?{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                We will make that call with you
              </Link>{" "}
              before we quote.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
