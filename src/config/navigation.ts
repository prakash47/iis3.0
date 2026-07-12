import { services, industries, hireTechnologies } from "@/content/catalog";

/**
 * Navigation model - single source of truth for Header (desktop + mobile) and
 * the SEO-approved menu structure:
 *
 *   Services ▾ (mega)   Industries ▾   Work   Pricing   About   [Start a Project]
 *
 * NOTE: "Hire developers" links point to /technologies/* for now; when the
 * transactional /hire-[tech]-developers pages ship, update ONLY this file.
 * A "Resources" entry (Blog · Guides · Comparisons) gets added here once
 * those pages exist - never link to a 404.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface MegaColumn {
  title: string;
  links: NavLink[];
  viewAll?: NavLink;
}

export interface NavPromo {
  title: string;
  body: string;
  href: string;
  linkLabel: string;
}

export type NavEntry =
  | { kind: "link"; label: string; href: string }
  | { kind: "dropdown"; label: string; links: NavLink[]; viewAll?: NavLink }
  | { kind: "mega"; label: string; columns: MegaColumn[]; promo?: NavPromo };

/** Short, scannable menu descriptions (catalog taglines are too long for menus). */
const SERVICE_MENU_DESC: Record<string, string> = {
  "web-design-development": "Websites, web apps & SaaS",
  "mobile-app-development": "iOS, Android & cross-platform",
  "custom-software-development": "SaaS, internal tools & APIs",
  "digital-marketing": "SEO, AI-search, content & email",
  "performance-marketing": "Paid search, social & ROAS",
  "ui-ux-design-services": "UI/UX design & brand identity",
  "website-maintenance-services": "Care plans, security & backups",
  "ai-development": "Chatbots, RAG & automation",
};

export const navigation: NavEntry[] = [
  {
    kind: "mega",
    label: "Services",
    columns: [
      {
        title: "What we do",
        links: services.map((s) => ({
          label: s.name,
          href: `/services/${s.slug}`,
          description: SERVICE_MENU_DESC[s.slug],
        })),
        viewAll: { label: "All services", href: "/services" },
      },
      {
        title: "Hire developers",
        links: hireTechnologies.map((t) => ({
          label: t.name,
          href: `/technologies/${t.slug}`,
        })),
        viewAll: { label: "All technologies", href: "/technologies" },
      },
    ],
    promo: {
      title: "Transparent fixed pricing",
      body: "Every project starts with a clear scope and a published starting price - no quote walls.",
      href: "/pricing",
      linkLabel: "See pricing",
    },
  },
  {
    kind: "dropdown",
    label: "Industries",
    links: industries.map((i) => ({
      label: i.name,
      href: `/industries/${i.slug}`,
    })),
    viewAll: { label: "All industries", href: "/industries" },
  },
  { kind: "link", label: "Work", href: "/work" },
  {
    kind: "dropdown",
    label: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Glossary", href: "/glossary" },
    ],
    viewAll: { label: "All resources", href: "/resources" },
  },
  { kind: "link", label: "Pricing", href: "/pricing" },
  { kind: "link", label: "About", href: "/about" },
];
