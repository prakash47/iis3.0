import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconDatabase, IconGrid, IconPen, IconType, IconRefresh } from "@/components/icons";

// THE SIGNATURE (unspent): content-as-data. No sibling owns the content-modelling axis - WordPress
// owns the opposite pole (page-based, editor-first, familiar admin), Astro owns front-end delivery
// (the JS-diet), PHP owns readable/ownable code (the ruler), the hubs own positioning. "Content as
// data, not pages" is Sanity's actual core innovation and is defensible with ZERO Sanity portfolio
// (it is a claim about how the TECHNOLOGY models content, provable by capability depth). GUARD: pair
// the abstraction with the concrete payoff (write once, publish everywhere) - it reads as jargon to a
// non-technical buyer otherwise. The developer-heavy anti-recommendation routes editor-first teams to
// WordPress (reinforces the CMS-family boundary without pre-locking the other CMS spokes).
const pillars = [
  { icon: <IconLayers className="h-5 w-5" />, t: "Write once, publish everywhere", d: "Because content is structured data rather than a page, the same article, product or author is authored once and rendered on a website, a mobile app, an email or a screen that does not exist yet - no retyping the same copy into three systems that then drift apart." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Content you can actually query", d: "GROQ filters, follows references and reshapes your content in a single request, so a view gets exactly the data it renders and nothing more. Your content is a queryable store, not a pile of HTML you scrape." },
  { icon: <IconGrid className="h-5 w-5" />, t: "A content graph, not duplicated fields", d: "A reference points one document at another - a post at its author, a product at its category - so you change a thing once and everywhere that references it updates. You compose relationships instead of copy-pasting the same data into every page." },
  { icon: <IconPen className="h-5 w-5" />, t: "Rich text that stays structured", d: "Portable Text keeps formatted content as typed data, not a blob of markup, so the front end decides how each heading, link and embedded block renders - and the same rich text can be presented differently on different surfaces." },
  { icon: <IconType className="h-5 w-5" />, t: "A Studio your team can build on", d: "The editing environment is an open-source React application you configure and extend in code - custom fields, previews and workflows shaped to your team - not a rented admin panel you have to work around." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Structured, so it moves", d: "Content modelled as JSON is exportable and portable by design - it is not trapped inside a page template or a theme. Combined with an open-source Studio and schema in your repo, the parts that encode your work stay in your hands." },
];

export function SanityWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* THE SIGNATURE - content-as-data. Abstraction welded to the concrete payoff. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Your content isn&apos;t a stack of pages.{" "}
                <span className="gradient-text">It&apos;s structured data you can query.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                A traditional CMS stores your content as pages - a title, a blob of HTML, done - and the
                moment you need that same content somewhere else, you copy it, and the copies drift. Sanity
                treats content as data instead. You model it once as typed schemas, store it as structured
                JSON in the Content Lake, and query it with GROQ - so one article, product or author is
                authored a single time and served to your website, your app, an email, and whatever surface
                comes next, without being retyped into each one. The abstract version is &quot;content as
                data, not pages.&quot; The concrete version is: write it once, publish it everywhere, and
                never keep three drifting copies of the same paragraph again.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Sanity"
            title="What structured content gives you"
            sub="Sanity is built on one idea - content is data - and everything else follows from it. Here is what that buys you, and, honestly, when a simpler tool is the better call."
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

        {/* The anti-recommendation - the editor-heaviness objection, answered honestly, routing
            editor-first teams to WordPress. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              Is Sanity too developer-heavy for my editors? Only at the start - and that is the point.
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Honest yes-and-no. Standing Sanity up is a developer job - someone has to model your content
              as schemas in code before anyone can edit a word - and that upfront modelling is exactly what
              you are paying for. Once the schemas exist, editors never touch code: day-to-day editing is a
              real-time, collaborative environment with structured fields and rich text. But if what your
              team wants is to log into a familiar admin and edit whole pages with no developer in the loop,
              that is a{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                WordPress
              </Link>{" "}
              job, and we will route you straight there rather than sell you a mismatch. Not sure which side
              you are on?{" "}
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
