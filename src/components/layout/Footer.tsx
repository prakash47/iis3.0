import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { services, industries, hireTechnologies } from "@/content/catalog";
import {
  IconPin,
  IconPhone,
  IconMail,
  IconWhatsApp,
  IconLinkedIn,
  IconX,
  IconInstagram,
  IconFacebook,
} from "@/components/icons";

function FooterCol({
  title,
  items,
  viewAll,
}: {
  title: string;
  items: { label: string; href: string }[];
  viewAll?: { label: string; href: string };
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          </li>
        ))}
        {viewAll && (
          <li>
            <Link
              href={viewAll.href}
              className="font-semibold text-brand-700 transition-colors hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
            >
              {viewAll.label} →
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const { contact, social } = siteConfig;
  const addr = contact.address;

  // Each brand's official colour on hover (icons use currentColor). X is black on light,
  // white on dark; Instagram uses its recognised brand magenta.
  const socials = [
    { label: "LinkedIn", href: social.linkedin, icon: <IconLinkedIn className="h-4.5 w-4.5" />, hover: "hover:text-[#0A66C2] hover:border-[#0A66C2]" },
    { label: "X (Twitter)", href: social.x, icon: <IconX className="h-4.5 w-4.5" />, hover: "hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white" },
    { label: "Instagram", href: social.instagram, icon: <IconInstagram className="h-4.5 w-4.5" />, hover: "hover:text-[#E4405F] hover:border-[#E4405F]" },
    { label: "Facebook", href: social.facebook, icon: <IconFacebook className="h-4.5 w-4.5" />, hover: "hover:text-[#1877F2] hover:border-[#1877F2]" },
  ].filter((s) => s.href);

  return (
    <footer className="mt-auto border-t border-border bg-muted">
      <Container className="grid gap-x-8 gap-y-12 py-16 sm:grid-cols-2 xl:grid-cols-[1.4fr_1.5fr_1fr_1.4fr_0.95fr]">
        {/* Brand + NAP */}
        <div className="sm:col-span-2 xl:col-span-1">
          <Link href="/" aria-label="Intention InfoService - home" className="flex items-center">
            <Image src="/logo-256.png" alt="" width={256} height={99} unoptimized className="h-12 w-auto dark:hidden" />
            <Image src="/logo-white-256.png" alt="" width={256} height={99} unoptimized className="hidden h-12 w-auto dark:block" />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Incorporated 2016 · Serving worldwide
          </p>

          {/* NAP - keep identical to Google Business Profile + Organization schema */}
          <address className="mt-6 space-y-3 text-sm not-italic text-muted-foreground">
            <p className="flex items-start gap-2.5">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              {addr.addressLocality}, {addr.streetAddress}, {addr.addressRegion}{" "}
              {addr.postalCode}, India
            </p>
            {contact.phone && (
              <p className="flex items-center gap-2.5">
                <IconPhone className="h-4 w-4 shrink-0 text-brand-500" />
                <a href={`tel:${contact.phone}`} className="transition-colors hover:text-foreground">
                  {contact.phoneDisplay}
                </a>
              </p>
            )}
            {contact.email && (
              <p className="flex items-center gap-2.5">
                <IconMail className="h-4 w-4 shrink-0 text-brand-500" />
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-foreground">
                  {contact.email}
                </a>
              </p>
            )}
            {contact.whatsapp && (
              <p className="flex items-center gap-2.5">
                <IconWhatsApp className="h-4 w-4 shrink-0 text-brand-500" />
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener"
                  className="transition-colors hover:text-foreground"
                >
                  Chat on WhatsApp
                </a>
              </p>
            )}
          </address>

          {socials.length > 0 && (
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        <FooterCol
          title="Services"
          items={services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))}
          viewAll={{ label: "All services", href: "/services" }}
        />

        <FooterCol
          title="Hire Developers"
          items={hireTechnologies.map((t) => ({
            label: t.name,
            href: `/technologies/${t.slug}`,
          }))}
          viewAll={{ label: "All technologies", href: "/technologies" }}
        />

        <FooterCol
          title="Industries"
          items={industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))}
          viewAll={{ label: "All industries", href: "/industries" }}
        />

        {/* Company + Resources stacked in one column (Resources below Company) */}
        <div className="space-y-8">
          <FooterCol
            title="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Work", href: "/work" },
              { label: "Pricing", href: "/pricing" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <FooterCol
            title="Resources"
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Guides", href: "/guides" },
              { label: "Glossary", href: "/glossary" },
            ]}
          />
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {siteConfig.foundingYear}-{year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            {/* Plain <a>, not <Link>: sitemap.xml is an XML route, not an RSC page -
                a client Link prefetches it as ?_rsc=... which 404s in the console. */}
            <a href="/sitemap.xml" className="transition-colors hover:text-foreground">
              Sitemap
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
