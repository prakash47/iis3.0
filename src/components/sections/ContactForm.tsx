"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { IconArrow, IconCheck } from "@/components/icons";

/**
 * The /contact lead form. It POSTs to Web3Forms when a public access key is configured
 * (siteConfig.contact.web3formsKey), and gracefully FALLS BACK to a prefilled mailto when it
 * is not - so the form is never dead and never fakes a "sent" confirmation it cannot verify.
 *
 * HONESTY LOCKS (both red-teams): no time-trap and no client-side silent-drop that could bury a
 * real lead behind a fake success (spam is handled server-side by Web3Forms via the hidden
 * `botcheck` field); the selects default to an honest empty/"Not sure yet" (never a fabricated
 * "Website"/"Under $2,000"); the error copy never asserts where the data did or did not go; the
 * reply commitment stays "one business day", never inflated. EVERY field has a `name` so a real
 * POST captures it. Submit is a native <button> (the shared Button component is href-only).
 */
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = siteConfig.contact.web3formsKey; // "" -> honest mailto fallback

const projectTypes = [
  "Website (marketing or business site)",
  "E-commerce store",
  "Web app or SaaS",
  "Mobile app (iOS / Android)",
  "Custom software or internal tool",
  "UI/UX design or branding",
  "SEO and organic marketing",
  "Paid ads (Google / Meta)",
  "Website maintenance or care plan",
  "AI chatbot or automation",
  "Not sure yet, help me choose",
];

// Retuned HONESTLY to our published pricing (from $300 sites, $500 apps, $100/mo care plans),
// so the real low end is never scared off and no fantasy ceiling is invented. Budget is OPTIONAL.
const budgets = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $15,000",
  "More than $15,000",
  "Ongoing monthly plan",
];

const timelines = [
  "Not sure yet",
  "As soon as possible",
  "In the next month",
  "1 to 3 months",
  "Just exploring",
];

const inputCls =
  "mt-1.5 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
const textareaCls =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
const labelCls = "text-sm font-medium text-foreground";
const req = (
  <>
    {" "}
    <span aria-hidden="true" className="text-brand-500">*</span>
    <span className="sr-only">(required)</span>
  </>
);
const opt = <span className="font-normal text-muted-foreground"> (optional)</span>;

type Status = "idle" | "submitting" | "success" | "error";

function composeMailto(fd: FormData): string {
  const body = [
    `Name: ${fd.get("name") ?? ""}`,
    `Email: ${fd.get("email") ?? ""}`,
    `Phone: ${fd.get("phone") ?? ""}`,
    `Company: ${fd.get("company") ?? ""}`,
    `Project type: ${fd.get("project_type") ?? ""}`,
    `Budget: ${fd.get("budget") ?? ""}`,
    `Timeline: ${fd.get("timeline") ?? ""}`,
    "",
    `${fd.get("message") ?? ""}`,
  ].join("\n");
  const subject = `New project enquiry - ${fd.get("project_type") || "General"}`;
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLHeadingElement>(null);
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`;

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    // No backend configured yet: open the visitor's email client with the message prefilled.
    // Do NOT run the async "submitting -> success" states here - that would fake a send.
    if (!ACCESS_KEY) {
      window.location.href = composeMailto(fd);
      return;
    }

    setStatus("submitting");
    try {
      const payload = Object.fromEntries(fd) as Record<string, unknown>;
      payload.access_key = ACCESS_KEY;
      payload.subject = `New project enquiry - ${fd.get("project_type") || "General"}`;
      payload.from_name = "Intention InfoService website";
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) setStatus("success");
      else throw new Error("send-failed");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <span aria-hidden="true" className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <IconCheck className="h-7 w-7" />
        </span>
        <h2 ref={successRef} tabIndex={-1} className="mt-5 font-display text-xl font-bold text-foreground focus:outline-none">
          Thanks, your enquiry is in.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          It has gone to the senior people who would do the work, not a sales queue. You will hear
          back within one business day, usually with a couple of questions and a clear next step
          toward a fixed-price scope. Your details are only used to reply to you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/pricing"
            className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:border-brand-400/50 hover:text-brand-500"
          >
            See published prices
          </Link>
          <Link
            href="/work"
            className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:border-brand-400/50 hover:text-brand-500"
          >
            See our work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      <div>
        <h2 className="font-display text-lg font-bold text-foreground">Tell us about your project</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          A few details are all we need. Fields marked{" "}
          <span aria-hidden="true" className="text-brand-500">*</span> are required.
        </p>
      </div>

      {status === "error" && (
        <div role="alert" className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm leading-relaxed text-foreground">
          <p className="font-semibold">That did not send.</p>
          <p className="mt-1 text-muted-foreground">
            We could not confirm your message reached us. Please email it to us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400">
              {siteConfig.contact.email}
            </a>{" "}
            or send it on{" "}
            <a href={whatsappHref} className="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400">
              WhatsApp
            </a>{" "}
            so nothing is lost. It reaches the same people.
          </p>
        </div>
      )}

      <fieldset disabled={status === "submitting"} className="space-y-4 border-0 p-0 disabled:opacity-70">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelCls}>Name{req}</label>
            <input id="name" name="name" required aria-required="true" autoComplete="name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>Email{req}</label>
            <input id="email" name="email" type="email" required aria-required="true" autoComplete="email" inputMode="email" className={inputCls} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelCls}>Phone or WhatsApp{opt}</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={inputCls} />
          </div>
          <div>
            <label htmlFor="company" className={labelCls}>Company{opt}</label>
            <input id="company" name="company" autoComplete="organization" className={inputCls} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="project_type" className={labelCls}>What can we help with?{req}</label>
            <select id="project_type" name="project_type" required aria-required="true" defaultValue="" className={inputCls}>
              <option value="" disabled>Select one</option>
              {projectTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className={labelCls}>Budget{opt}</label>
            <select id="budget" name="budget" defaultValue="Not sure yet" className={inputCls}>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="timeline" className={labelCls}>Timeline{opt}</label>
          <select id="timeline" name="timeline" defaultValue="Not sure yet" className={inputCls}>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelCls}>What are you building?{req}</label>
          <textarea id="message" name="message" rows={5} required aria-required="true" className={textareaCls} />
        </div>

        {/* Web3Forms honeypot - hidden from humans and assistive tech; if a bot checks it, Web3Forms
            rejects the submission server-side. No client-side silent-drop (which could bury a real lead). */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          style={{ display: "none" }}
        />
      </fieldset>

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="group/btn inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending...
          </>
        ) : status === "error" ? (
          <>Try again</>
        ) : (
          <>
            Send enquiry
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </>
        )}
      </button>

      <p role="status" aria-live="polite" className="sr-only">
        {status === "submitting" ? "Sending your enquiry" : status === "error" ? "Your enquiry could not be sent" : ""}
      </p>

      <p className="text-xs leading-relaxed text-muted-foreground">
        We reply within one business day. Your details are only used to respond to your enquiry -{" "}
        <Link href="/privacy-policy" className="underline decoration-border underline-offset-2 hover:text-foreground">
          see our privacy policy
        </Link>
        .
        {!ACCESS_KEY && " This opens your email app with your message ready to send."}
      </p>
    </form>
  );
}
