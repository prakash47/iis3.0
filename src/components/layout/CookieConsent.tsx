"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import { isIndexable } from "@/config/site";

/**
 * Consent-gated Google Analytics (GDPR / Consent Mode v2, "basic" implementation)
 * plus the consent banner itself - no third-party CMP script, so the banner costs
 * nothing and matches the site's design system.
 *
 * How it behaves:
 *  - No choice yet   -> banner shows, gtag does NOT load, zero analytics cookies.
 *  - Accept          -> a Consent Mode command (analytics granted, all ad signals
 *                       denied) is queued BEFORE gtag's config, then gtag loads
 *                       and tracks this and future visits.
 *  - Decline         -> nothing loads; if gtag was already running this session,
 *                       consent is downgraded and _ga cookies are expired.
 *  - "Cookie preferences" in the footer reopens the banner to change the choice.
 *
 * Performance: a first-time visit (and every Lighthouse/PSI run - bots never
 * consent) carries ZERO third-party script. gtag loads only for visitors who
 * accepted, after hydration. GA additionally requires isIndexable so previews
 * and staging never send traffic into the real property; the banner itself only
 * needs the measurement id, so it can be design-reviewed on staging safely.
 *
 * Consent state lives in localStorage and is read via useSyncExternalStore (the
 * React-sanctioned pattern for external stores): no setState-in-effect, no
 * hydration mismatch, and cross-tab changes sync via the "storage" event.
 */

const CONSENT_KEY = "iis-analytics-consent"; // "granted" | "denied"
const CONSENT_CHANGE = "iis:consent-change";
export const COOKIE_PREFS_EVENT = "iis:cookie-prefs";

type Consent = "granted" | "denied" | null;

/** Queue a Consent Mode v2 command ahead of (or into) the gtag queue.
 *  window.dataLayer is typed by @next/third-parties. gtag commands must be
 *  pushed as an arguments object, never a plain array. */
function pushConsent(kind: "default" | "update", analytics: "granted" | "denied") {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    void args;
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  }
  gtag("consent", kind, {
    analytics_storage: analytics,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

// Module scope, client bundle only: for a returning visitor who already accepted,
// queue the consent default BEFORE anything renders - gtag replays the dataLayer
// in order, so its config command always finds consent already granted.
let consentDefaultPushed = false;
if (typeof window !== "undefined" && window.localStorage?.getItem(CONSENT_KEY) === "granted") {
  pushConsent("default", "granted");
  consentDefaultPushed = true;
}

function getSnapshot(): Consent {
  const v = localStorage.getItem(CONSENT_KEY);
  return v === "granted" || v === "denied" ? v : null;
}
// During SSR there is no choice to read: render neither banner nor GA.
function getServerSnapshot(): Consent {
  return null;
}
function subscribe(cb: () => void) {
  window.addEventListener(CONSENT_CHANGE, cb);
  window.addEventListener("storage", cb); // cross-tab sync
  return () => {
    window.removeEventListener(CONSENT_CHANGE, cb);
    window.removeEventListener("storage", cb);
  };
}

/** Expire Google Analytics cookies for this site (used when consent is withdrawn). */
function expireGaCookies() {
  const rootDomain = location.hostname.split(".").slice(-2).join(".");
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0]?.trim();
    if (!name || !name.startsWith("_ga")) continue;
    const expiry = "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = `${name}${expiry}`;
    document.cookie = `${name}${expiry}; domain=.${rootDomain}`;
  }
}

export function CookieConsent({ gaId }: { gaId: string }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [reopened, setReopened] = useState(false);
  // SSR renders null consent too; only show the banner once mounted on the client.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    const reopen = () => setReopened(true); // event callback - allowed setState
    window.addEventListener(COOKIE_PREFS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_PREFS_EVENT, reopen);
  }, []);

  function accept() {
    pushConsent(consentDefaultPushed ? "update" : "default", "granted");
    consentDefaultPushed = true;
    localStorage.setItem(CONSENT_KEY, "granted");
    window.dispatchEvent(new Event(CONSENT_CHANGE));
    setReopened(false);
  }

  function decline() {
    if (consent === "granted") {
      // gtag may already be running this session: downgrade + clean up.
      pushConsent("update", "denied");
      expireGaCookies();
    }
    localStorage.setItem(CONSENT_KEY, "denied");
    window.dispatchEvent(new Event(CONSENT_CHANGE));
    setReopened(false);
  }

  const open = mounted && (consent === null || reopened);

  return (
    <>
      {consent === "granted" && isIndexable && <GoogleAnalytics gaId={gaId} />}
      {open && (
        <section
          aria-label="Cookie consent"
          className="consent-in fixed bottom-[5.25rem] left-4 right-4 z-50 rounded-2xl border border-border bg-surface p-5 shadow-xl shadow-black/10 sm:right-auto sm:max-w-sm lg:bottom-4"
        >
          <p className="font-display text-sm font-semibold text-foreground">Cookies on this site</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            We would like to use Google Analytics to see which pages help visitors - one
            first-party cookie, no ads, no cross-site tracking. See our{" "}
            <Link
              href="/privacy-policy"
              className="text-brand-700 underline underline-offset-2 hover:text-brand-500 dark:text-brand-400"
            >
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              onClick={accept}
              className="inline-flex h-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))] px-4 text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Accept analytics
            </button>
            <button
              type="button"
              onClick={decline}
              className="inline-flex h-9 items-center justify-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Decline
            </button>
          </div>
        </section>
      )}
    </>
  );
}
