"use client";

/**
 * Theme toggle - icons swap via CSS (dark:hidden), so there's no client
 * state and no hydration mismatch. The click handler just flips the class.
 */
export function ThemeToggle() {
  function toggle() {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode - ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground transition-colors hover:border-brand-400/60"
    >
      {/* Moon (shown in light mode) */}
      <svg className="dark:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      {/* Sun (shown in dark mode) */}
      <svg className="hidden dark:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
