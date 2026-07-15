"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, type NavEntry, type NavLink } from "@/config/navigation";
import { cn } from "@/lib/utils";
import {
  IconCode,
  IconDevice,
  IconLayers,
  IconMegaphone,
  IconTrendingUp,
  IconPen,
  IconShield,
  IconSpark,
  IconChevronDown,
} from "@/components/icons";

/**
 * Desktop navigation (lg+). All links are server-rendered into the initial
 * HTML (client components SSR too) - fully crawlable. JS only manages
 * open/close interactions: hover intent, click, Escape, outside click, blur.
 */

const serviceIcons: Record<string, React.ReactNode> = {
  "/services/web-design-development": <IconCode className="h-5 w-5" />,
  "/services/mobile-app-development": <IconDevice className="h-5 w-5" />,
  "/services/custom-software-development": <IconLayers className="h-5 w-5" />,
  "/services/digital-marketing": <IconMegaphone className="h-5 w-5" />,
  "/services/performance-marketing": <IconTrendingUp className="h-5 w-5" />,
  "/services/ui-ux-design-services": <IconPen className="h-5 w-5" />,
  "/services/website-maintenance-services": <IconShield className="h-5 w-5" />,
  "/services/ai-development": <IconSpark className="h-5 w-5" />,
};

function isEntryActive(entry: NavEntry, pathname: string): boolean {
  const match = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  if (entry.kind === "link") return match(entry.href);
  if (entry.kind === "dropdown")
    return entry.links.some((l) => match(l.href)) || Boolean(entry.viewAll && match(entry.viewAll.href));
  return entry.columns.some(
    (c) => c.links.some((l) => match(l.href)) || Boolean(c.viewAll && match(c.viewAll.href)),
  );
}

function ViewAllLink({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="mt-3 inline-flex items-center gap-1.5 border-t border-border pt-3 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
    >
      {link.label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function DesktopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const openMenu = (i: number) => {
    clearTimeout(closeTimer.current);
    setOpen(i);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };
  const closeNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(null);
  };

  // Close on click outside.
  useEffect(() => {
    if (open === null) return;
    const onPointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeNow();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Route change closes any open panel. Handled during render (reset-on-change)
  // instead of in an effect, so it commits before paint with no extra render.
  // A pending close timer is harmless: it would only re-set `open` to null, and
  // any re-open calls openMenu(), which clears it first.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(null);
  }

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="relative hidden lg:block"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open !== null) {
          triggerRefs.current[open]?.focus();
          closeNow();
        }
      }}
      onBlur={(e) => {
        if (navRef.current && !navRef.current.contains(e.relatedTarget as Node)) closeNow();
      }}
    >
      <ul className="flex items-center gap-1">
        {navigation.map((entry, i) => {
          const active = isEntryActive(entry, pathname);

          if (entry.kind === "link") {
            return (
              <li key={entry.label}>
                <Link
                  href={entry.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {entry.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                    />
                  )}
                </Link>
              </li>
            );
          }

          const isOpen = open === i;
          const panelId = `nav-panel-${i}`;

          return (
            <li
              key={entry.label}
              className={cn(entry.kind === "dropdown" && "relative")}
              onPointerEnter={(e) => e.pointerType === "mouse" && openMenu(i)}
              onPointerLeave={(e) => e.pointerType === "mouse" && scheduleClose()}
            >
              <button
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => (isOpen ? closeNow() : openMenu(i))}
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  active || isOpen ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {entry.label}
                <IconChevronDown
                  className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")}
                />
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                  />
                )}
              </button>

              {/* ── Mega panel (Services). Always rendered so its links are in the SSR HTML
                     (crawlable + link equity); visibility is toggled by CSS off `isOpen`. ── */}
              {entry.kind === "mega" && (
                <div
                  id={panelId}
                  className={cn(
                    "absolute left-1/2 top-full z-50 w-[min(56rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-opacity duration-150",
                    isOpen ? "visible opacity-100" : "invisible opacity-0",
                  )}
                >
                  <div className="nav-panel rounded-2xl border border-border bg-surface p-6 shadow-2xl shadow-black/10 dark:shadow-black/40">
                    <div className="grid grid-cols-[1.2fr_0.9fr_0.9fr] gap-8">
                      {/* Services column */}
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {entry.columns[0].title}
                        </p>
                        <ul className="space-y-0.5">
                          {entry.columns[0].links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={closeNow}
                                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-brand-500 transition-colors group-hover:border-brand-400/50">
                                  {serviceIcons[link.href]}
                                </span>
                                <span>
                                  <span className="block text-sm font-medium text-foreground">
                                    {link.label}
                                  </span>
                                  {link.description && (
                                    <span className="block text-xs text-muted-foreground">
                                      {link.description}
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {entry.columns[0].viewAll && (
                          <ViewAllLink link={entry.columns[0].viewAll} onNavigate={closeNow} />
                        )}
                      </div>

                      {/* Hire developers column */}
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {entry.columns[1].title}
                        </p>
                        <ul className="grid grid-cols-1 gap-0.5">
                          {entry.columns[1].links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={closeNow}
                                className="block rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {entry.columns[1].viewAll && (
                          <ViewAllLink link={entry.columns[1].viewAll} onNavigate={closeNow} />
                        )}
                      </div>

                      {/* Promo panel */}
                      {entry.promo && (
                        <div className="flex flex-col justify-between rounded-xl border border-border bg-muted/60 p-5">
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {entry.promo.title}
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                              {entry.promo.body}
                            </p>
                          </div>
                          <Link
                            href={entry.promo.href}
                            onClick={closeNow}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
                          >
                            {entry.promo.linkLabel}
                            <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Simple dropdown (Industries/Resources). Always rendered for crawlable SSR
                     links; visibility toggled by CSS off `isOpen`. ── */}
              {entry.kind === "dropdown" && (
                <div
                  id={panelId}
                  className={cn(
                    "absolute left-0 top-full z-50 w-64 pt-3 transition-opacity duration-150",
                    isOpen ? "visible opacity-100" : "invisible opacity-0",
                  )}
                >
                  <div className="nav-panel rounded-2xl border border-border bg-surface p-2.5 shadow-2xl shadow-black/10 dark:shadow-black/40">
                    <ul className="space-y-0.5">
                      {entry.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={closeNow}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {entry.viewAll && (
                      <div className="px-3 pb-1">
                        <ViewAllLink link={entry.viewAll} onNavigate={closeNow} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
