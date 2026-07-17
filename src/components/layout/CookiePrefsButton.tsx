"use client";

import { COOKIE_PREFS_EVENT } from "@/components/layout/CookieConsent";

/**
 * Footer "Cookie preferences" link - reopens the consent banner so a visitor can
 * change their analytics choice at any time (a GDPR requirement: withdrawing
 * consent must be as easy as giving it). Rendered only when GA is configured.
 */
export function CookiePrefsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_PREFS_EVENT))}
      className="cursor-pointer transition-colors hover:text-foreground"
    >
      Cookie preferences
    </button>
  );
}
