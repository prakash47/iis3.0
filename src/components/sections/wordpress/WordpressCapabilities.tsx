import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayout, IconGauge, IconShield, IconPen, IconGrid, IconCode, IconRefresh, IconSearch, IconType, IconLayers, IconServer, IconClock } from "@/components/icons";

// The E-E-A-T CENTREPIECE and main proof substitute (there is NO own-site WordPress to
// inspect - and our brand is CWV proof, so this is the highest-temptation page for fake
// numbers). Current 2026 vocabulary - block themes + FSE + theme.json, the block editor,
// headless via REST/WPGraphQL + Next.js, ACF/SCF, PHP 8.x. Performance card 2 states METHOD
// only, NEVER a fabricated Lighthouse/CWV score. Dated framing (classic editor as default,
// "WordPress is just blogs", premium-theme-and-plugins) would detonate the "we build fast WP" claim.
const caps = [
  { icon: <IconLayout className="h-5 w-5" />, t: "Custom block theme / FSE", d: "A lean custom block theme on theme.json and Full Site Editing, not a bought multipurpose theme carrying features you'll never use. Editors get an on-brand design system; you get markup we control and keep fast." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Performance engineering", d: "WordPress is fast when it's engineered, not assumed: page and object caching, a deliberately small plugin footprint, modern image formats, a quality managed host, and real Core Web Vitals work on LCP, CLS and INP. We do the work that produces real numbers - we don't publish invented ones." },
  { icon: <IconShield className="h-5 w-5" />, t: "Security & hardening", d: "WordPress core is not the weak point - most vulnerabilities live in plugins - so security is a build discipline: least-privilege roles, prompt updates, reputable vetted plugins only, hardened config, a firewall, and a current PHP line." },
  { icon: <IconPen className="h-5 w-5" />, t: "The block editor & custom blocks", d: "The editing experience your team actually uses: native Gutenberg blocks, custom blocks in React or as ACF blocks, patterns and pattern overrides - so authoring is guided and on-brand, not a blank canvas that drifts." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Structured content with ACF / SCF", d: "Real sites are typed content - team members, case studies, locations, FAQs - modelled with custom fields and custom post types via ACF or its fork Secure Custom Fields, so the same data renders consistently and stays easy to edit." },
  { icon: <IconCode className="h-5 w-5" />, t: "Headless WordPress", d: "When speed is the priority, keep the WordPress admin and serve a Next.js or React front end over the WordPress REST API or WPGraphQL. The honest reconciliation of the editing experience your team wants with the performance our brand is built on." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations", d: "Move a site onto WordPress from Wix, Squarespace, an ageing WordPress install or another CMS - content and media preserved, URL structure mapped, and 301 redirects in place so hard-won SEO survives the move." },
  { icon: <IconSearch className="h-5 w-5" />, t: "SEO-ready builds", d: "Clean semantic HTML, structured data and schema, XML sitemaps, sensible information architecture and Core Web Vitals baked in from the start - with Yoast or Rank Math configured on top, not markup left to a plugin to paper over." },
  { icon: <IconType className="h-5 w-5" />, t: "Multilingual & accessibility", d: "Multi-language builds with WPML or Polylang, and accessibility treated as a build requirement - semantic markup, keyboard navigation, contrast and ARIA - rather than a bolt-on." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Page builders, done right", d: "Where a team already lives in a page builder, we use it well and honestly: Bricks for clean, performant markup over Elementor's heavier output. But the leanest, fastest result is still a native block theme, and we'll say so." },
  { icon: <IconServer className="h-5 w-5" />, t: "Hosting, staging & deploys", d: "Quality managed WordPress hosting, a proper staging environment, and Git-based deploys with version control - so changes are tested before they reach production and the site is a maintainable artefact, not a live edit nobody can roll back." },
  { icon: <IconClock className="h-5 w-5" />, t: "Maintenance & care", d: "WordPress is living software - core, theme and plugin updates, backups, uptime monitoring and security patching are ongoing, not a one-time launch task. We run that through our website care plans." },
];

export function WordpressCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build WordPress"
            title="WordPress the 2026 way, not the 2015 way"
            sub="There's no WordPress running this static Next.js site to point at, so the proof is the depth. This is modern WordPress - block themes and Full Site Editing, headless with Next.js, real performance and security engineering - not the premium-theme-and-a-dozen-plugins build that earned WordPress its slow, bloated reputation."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c) => (
            <div key={c.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {c.icon}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The senior-opinion default-build line */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default WordPress build:</span>{" "}
              a lean custom block theme on Full Site Editing - no bought multipurpose theme - with
              content modelled properly in ACF or Secure Custom Fields so editors get purpose-built
              screens instead of a blank canvas. A small, vetted plugin footprint, a caching plus
              image-optimization plus quality managed-host performance setup tuned against real Core
              Web Vitals, and hardened security with least-privilege roles and forced updates on a
              supported PHP 8.x line. Everything ships through staging and Git-based deploys, backed by
              a care plan because WordPress is living software. And when raw speed is the priority, we
              go headless - WordPress admin for your editors, a Next.js front end for performance - the
              honest reconciliation of the editing experience you want with the fast, custom standard
              we&apos;re known for.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
