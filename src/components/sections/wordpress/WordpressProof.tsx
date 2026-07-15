import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section. WordPress gets the STRONGEST honest angle of any spoke: we
// chose Next.js for our OWN site on purpose (a strength, not a gap), and we'll STILL
// recommend WordPress when it fits YOU = we recommend by fit, not habit. Card 1 leads with
// site/content/HOSTING ownership (WP's real fear = agency-hostage). Card 5 carries the two
// WP-only honesty moves: NO fabricated CWV score (the sharpest trap given our CWV-proof
// brand), and NOT a WordPress VIP partner or Woo Partner (real programs we're not in - name +
// disclaim, like Laravel/Java, unlike Django). Card 6 folds in care plans (WP's real recurring need).
// NOTE (2026-07-10): card 5 used to disclaim "a WooExpert". Automattic RENAMED that program to
// "Woo Partner" in March 2025 and replaced the WooExperts Marketplace with the Woo agency
// directory, so disclaiming "WooExpert" was naming a program that no longer exists - the same
// error as disclaiming the sunset "Shopify Plus Partner". Fixed to the current program name.
const riskReversal = [
  { t: "You own 100% of the site, content and hosting", d: "Standard self-hosted WordPress on your host, your domain, your admin logins - not a locked platform we control. The database, the media library, the theme and the content are yours from day one, exported and handed over in full. Nothing about your site is held hostage on our side, and you can move to any other WordPress developer without asking our permission." },
  { t: "No lock-in, by construction", d: "Standard WordPress core plus reputable, widely-used open plugins and a clean block theme any competent WordPress developer can read and maintain. We don't trap your content inside a proprietary page-builder only we understand, and we don't build an agency-hostage setup that only works while you keep paying us." },
  { t: "Senior people, direct", d: "You talk to the people who actually build your theme, choose your plugins and tune your performance - no account-manager layer, no offshore hand-off, no juniors learning WordPress on your budget and leaving you a pile of unvetted plugins." },
  { t: "Transparent, published fixed pricing", d: "The same published tiers as the rest of the site, no metered surprises and no quote wall. A WordPress brochure, content or blog site maps directly onto the Starter, Launch Sprint or Growth Site tiers; a WooCommerce store lands on the Commerce Sprint. Ongoing care is a published monthly plan, not a mystery retainer." },
  { t: "Built fast and secure, honestly", d: "We do the real work that makes WordPress fast and safe: good managed hosting, caching, a lean block theme, a short audited plugin list, optimized images, and hardened logins, updates and backups. What we won't do is show you a Core Web Vitals or Lighthouse score for a site we haven't built yet - performance is earned on your real pages, not promised on a slide. And we are not a WordPress VIP partner or a Woo Partner in Automattic's agency program, and we hold no WordPress certification - those are real, publicly checkable programs we're simply not in, and we won't imply otherwise." },
  { t: "A registered company since 2016, with care plans", d: "Intention InfoService is a real, incorporated company, small and senior on purpose. WordPress is not build-once-and-forget - core, themes and plugins need regular updates, security patches and backups - so we back it with published monthly care plans that keep your site current instead of leaving it to rot into the 'insecure WordPress' cliche." },
];

export function WordpressProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We didn&apos;t even build this site on <span className="gradient-text">WordPress.</span></>}
            sub="Our React and Next.js pages can say 'this page is the technology, inspect it.' This one can't, and we won't fake it. Our site is a static Next.js and React build, and the toolchain that compiles it runs on Node, not PHP - so WordPress powers none of what you're reading. And here's the part most WordPress agencies won't tell you: we chose Next.js for our own site on purpose, because it's a site we fully control and we wanted the fast, custom path. That is exactly why you can trust us on WordPress - we're not selling you the only thing we know how to build. When your team needs to edit content every day through a familiar admin, WordPress is often the right call for you even though it wasn't for us, and we'll build it fast, secure and yours. Recommending by fit instead of by habit is the whole point."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who actually ship modern WordPress, not
              a 2015 theme-and-plugin shop: block themes and Full Site Editing as the default, a
              theme.json design system, lean custom blocks instead of a pile of page-builder add-ons,
              the WordPress REST API and WPGraphQL for headless front ends, deliberate caching, image
              and Core Web Vitals work, and a short, audited plugin list. Dated or hand-wavy WordPress
              vocabulary - &quot;we&apos;ll install a premium theme and some plugins&quot; - is how you
              spot the shop that ships slow, bloated sites. Ours is current, and that competence,
              stated as capability and never as a performance score we invented, is the proof that
              actually travels.
            </p>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We ship exactly the kinds of sites WordPress is built for - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is real, custom web builds: a professional-training platform rebuild
              and a financial-services site, both on our work page. Both are exactly the kind of
              content-driven, lead-generation sites WordPress is built for - editable content and pages,
              a searchable, filterable catalog, enquiry and enrolment funnels, and an admin a
              non-technical team can actually run day to day - and the training platform was itself a
              slow WordPress site we rebuilt on Next.js.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>
              , described honestly, and never relabelled as WordPress or WooCommerce projects unless
              they were. What they prove is one true thing: this team ships editable, content-driven
              sites with searchable catalogs and working enquiry funnels that hold up in production.
              The WordPress-specific proof isn&apos;t a borrowed case study or a stock badge -
              it&apos;s the current-standard depth on this page and the standard, self-hosted WordPress
              site, content and database you&apos;ll own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
