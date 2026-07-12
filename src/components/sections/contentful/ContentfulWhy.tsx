import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconShield, IconServer, IconDatabase, IconLayout, IconRefresh } from "@/components/icons";

// THE SIGNATURE (genuinely unspent): the ENTERPRISE-GOVERNANCE / ORCHESTRATION / COORDINATION-AT-SCALE
// axis. Sanity SPENT "content as data, not pages" (the content-MODEL axis); Strapi SPENT "own the
// software" (ownership-SCOPE); Shopify/Woo SPENT the anti-upsell (custody/cost); the hubs SPENT "easy to
// claim, here is how to check". Contentful's axis = coordination: at enterprise scale, content stops
// being a writing problem and becomes a COORDINATION problem (many teams, brands, locales, channels
// shipping at once). The opener is varied off Sanity's "content isn't a [X]" negation shape. The honest
// WEDGE cuts both ways: worth it AT enterprise scale, overkill BELOW it - so the anti-rec routes leaner
// needs away (to Sanity), self-hosting to Strapi, editor-first pages to WordPress. GUARD: pair the
// abstraction with a concrete payoff (environments = git for your content model; orchestration = many
// teams shipping without stepping on each other). No "own the platform"/flat "no lock-in" here.
const pillars = [
  { icon: <IconLayers className="h-5 w-5" />, t: "Git for your content model", d: "Environments are full, isolated copies of your model and data. You branch one, change the schema safely, review the diff and promote by repointing an alias - the same release discipline your code already has, with rollback as cheap as pointing the alias back. Merge computes the changeset between two environments so a model change is reviewed, not hand-applied to production and hoped over." },
  { icon: <IconShield className="h-5 w-5" />, t: "Who ships what, reviewed, and when", d: "Roles and permissions scope who can edit or publish, down to content types and fields; tasks and comments make review an explicit, tracked step; scheduled publishing lands a campaign at a set time; and releases bundle related changes so a launch's page, banner and nav go live together instead of leaking half-finished." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Assemble pages without breaking the brand", d: "Studio and Experience Builder let content teams assemble pages from design-system components you register - components with defined props, bound to structured content, inside the same review governance. It is governed visual assembly, not a free-for-all page builder, so marketers move fast while brand and structure hold." },
  { icon: <IconServer className="h-5 w-5" />, t: "One source, many channels", d: "Orchestration connects content across environments, spaces, brands and channels: a parent brand pushes a shared component or policy to a dozen sub-brand spaces, and one content set fans out to web, app and commerce without being re-authored per surface. Content changes propagate by reference, not by a hundred manual edits." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Built for many markets", d: "Locales are first-class: fields localize per market, fallbacks fill the gaps, and translation workflows plug into the same review and publishing governance. A page exists once as a structured entry with per-locale values, not as forty forked copies that drift apart the day after launch." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Structured, so it moves", d: "Content is typed data served over purpose-built APIs, exportable through the Management API and CLI. Combined with an approach that stays standard Contentful, the parts that encode your work stay portable and in your hands - the platform is rented, but the content is yours to take." },
];

export function ContentfulWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* THE SIGNATURE - coordination-at-scale. Abstraction welded to the concrete payoff, plus the
            honest fit wedge (worth it at scale, overkill below it). Opener varied off Sanity's negation. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                At enterprise scale, content stops being a writing problem.{" "}
                <span className="gradient-text">It becomes a coordination problem.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Every headless CMS can store a typed model and serve it over an API. That is table stakes,
                and it is not, by itself, a reason to choose Contentful. What Contentful is actually built
                to solve shows up only at scale, when the bottleneck stops being &quot;can we structure
                this content&quot; and becomes &quot;how do many teams, brands, locales and channels all
                ship changes at once without stepping on each other.&quot; That is a coordination problem,
                and coordination is what Contentful engineers into the platform: environments and Merge
                give you git for your content model, and orchestration, governed visual assembly and
                releases let a large organization run many properties in parallel. The honest flip side is
                the whole point of this page - that apparatus, and the enterprise plan that comes with it,
                is worth every bit of its cost at that scale and overkill below it. If your content is one
                team writing for one site, you would be paying for coordination you do not have to do, and
                we would route you to something leaner.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Contentful"
            title="What a composable content platform gives you at scale"
            sub="Contentful is built on one idea - content operations that many teams can run at once - and everything below follows from it. Here is what that buys you, and, honestly, when a leaner tool is the better call."
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

        {/* The anti-recommendation - the fit wedge as routing. This is the block the /technologies hub
            deep-links as id="when-not" (do not remove the id). */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When Contentful is more CMS than you need
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Contentful is a lot of platform, and that is a reason to walk away as often as a reason to
              buy. If your content is one small team writing for one site, the governance and the
              enterprise plan are weight without payoff, and a leaner, developer-first structured backend
              like{" "}
              <Link href="/technologies/sanity" className="font-medium text-brand-500 hover:text-brand-600">
                Sanity
              </Link>{" "}
              is the honest call. If owning and self-hosting the running software matters more than a
              managed service, that is{" "}
              <Link href="/technologies/strapi" className="font-medium text-brand-500 hover:text-brand-600">
                Strapi
              </Link>
              . And if your team just wants to edit whole pages in a familiar admin, that is{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                WordPress
              </Link>
              . Not sure which side of that line you are on?{" "}
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
