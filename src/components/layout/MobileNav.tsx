"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { IconChevronDown, IconPhone, IconMail, IconWhatsApp } from "@/components/icons";

/**
 * Mobile drawer (below lg). Links are server-rendered (SSR) and identical to
 * desktop - mobile-first indexing sees the full menu. <details> accordions
 * keep per-section state out of JS; body scroll locks while open.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { contact } = siteConfig;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-brand-400/60"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto border-t border-border bg-background"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 py-4">
            <div className="flex-1 divide-y divide-border">
              {navigation.map((entry) => {
                if (entry.kind === "link") {
                  return (
                    <Link
                      key={entry.label}
                      href={entry.href}
                      className="block py-3.5 text-base font-medium text-foreground"
                    >
                      {entry.label}
                    </Link>
                  );
                }

                const links = entry.kind === "mega" ? entry.columns[0].links : entry.links;
                const viewAll = entry.kind === "mega" ? entry.columns[0].viewAll : entry.viewAll;

                return (
                  <details key={entry.label} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-base font-medium text-foreground">
                      {entry.label}
                      <IconChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="pb-4">
                      <ul className="space-y-1">
                        {links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {entry.kind === "mega" && (
                        <>
                          <p className="mb-2 mt-4 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            {entry.columns[1].title}
                          </p>
                          <ul className="grid grid-cols-2 gap-1.5 px-3">
                            {entry.columns[1].links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="block rounded-lg border border-border px-3 py-2 text-center text-sm text-muted-foreground transition-colors hover:border-brand-400/60 hover:text-foreground"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {viewAll && (
                        <Link
                          href={viewAll.href}
                          className="mt-3 inline-flex items-center gap-1.5 px-3 text-sm font-semibold text-brand-600 dark:text-brand-400"
                        >
                          {viewAll.label} <span aria-hidden="true">→</span>
                        </Link>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>

            {/* Bottom actions */}
            <div className="mt-6 space-y-3 pb-6">
              <Link
                href="/contact"
                className="contact-btn flex h-12 items-center justify-center text-base font-semibold"
              >
                Contact Us
              </Link>
              <div className="grid grid-cols-3 gap-2">
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex flex-col items-center gap-1 rounded-xl border border-border py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <IconPhone className="h-4 w-4" /> Call
                  </a>
                )}
                {contact.whatsapp && (
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener"
                    className="flex flex-col items-center gap-1 rounded-xl border border-border py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <IconWhatsApp className="h-4 w-4" /> WhatsApp
                  </a>
                )}
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex flex-col items-center gap-1 rounded-xl border border-border py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <IconMail className="h-4 w-4" /> Email
                  </a>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
