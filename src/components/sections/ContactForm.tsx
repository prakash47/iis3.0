"use client";

import { useState, useRef, useEffect, forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import Link from "next/link";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { siteConfig } from "@/config/site";
import { IconArrow, IconCheck, IconUser, IconMail, IconBuilding, IconLayers, IconTag, IconClock, IconChat } from "@/components/icons";

/**
 * The /contact lead form. POSTs to /api/contact (SMTP via Gmail). Best-practice UX:
 *  - International phone field with a country-code dropdown + flags (react-phone-number-input),
 *    validated per selected country with libphonenumber-js (E.164 value on the wire).
 *  - Email + required-field validation on blur, then live once a field has errored.
 *  - Accessible errors (aria-invalid, aria-describedby -> helper + error, role=alert,
 *    focus-first-error on submit) with icon + colour + text (never colour alone) and helper
 *    text under every field.
 *  - Invisible Google reCAPTCHA v3 (executed on submit) when a site key is configured; the
 *    server verifies the token. Everything degrades gracefully when keys/SMTP are unset.
 *  - A hidden honeypot handled server-side; no client-side silent-drop of real leads.
 */
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const RECAPTCHA_ACTION = "contact_submit";

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
const budgets = ["Not sure yet", "Under $1,000", "$1,000 - $5,000", "$5,000 - $15,000", "More than $15,000", "Ongoing monthly plan"];
const timelines = ["Not sure yet", "As soon as possible", "In the next month", "1 to 3 months", "Just exploring"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COMMON_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com", "live.com", "proton.me", "protonmail.com"];

function lev(a: string, b: string): number {
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}

/** Non-blocking "did you mean" suggestion for a mistyped common email domain. */
function suggestEmail(email: string): string {
  const at = email.lastIndexOf("@");
  if (at < 1) return "";
  const domain = email.slice(at + 1).toLowerCase();
  if (!domain.includes(".") || COMMON_DOMAINS.includes(domain)) return "";
  let best = "", bestD = 3;
  for (const d of COMMON_DOMAINS) {
    const dist = lev(domain, d);
    if (dist > 0 && dist < bestD) { bestD = dist; best = d; }
  }
  return best ? email.slice(0, at + 1) + best : "";
}

type Values = { name: string; email: string; phone: string; company: string; project_type: string; budget: string; timeline: string; message: string };
type Status = "idle" | "submitting" | "success" | "error";

function validateField(name: keyof Values, v: string): string {
  switch (name) {
    case "name": return v.trim() ? "" : "Please enter your name.";
    case "email":
      if (!v.trim()) return "Please enter your email.";
      return EMAIL_RE.test(v.trim()) ? "" : "Enter a valid email, e.g. name@company.com.";
    case "phone": return !v ? "" : isValidPhoneNumber(v) ? "" : "Enter a valid phone number for the country you selected.";
    case "project_type": return v ? "" : "Please choose what we can help with.";
    case "message": return v.trim().length >= 10 ? "" : "Tell us a little about your project - a sentence is plenty.";
    default: return "";
  }
}
const REQUIRED: (keyof Values)[] = ["name", "email", "project_type", "message"];

/** Borderless input for the phone field (module-level so it never remounts / loses focus). */
const PhoneTextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input ref={ref} {...props} className="min-w-0 flex-1 border-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" />
));
PhoneTextInput.displayName = "PhoneTextInput";

const labelCls = "block text-sm font-medium text-foreground";
const reqMark = (
  <>
    {" "}
    <span aria-hidden="true" className="text-brand-500">*</span>
    <span className="sr-only">(required)</span>
  </>
);
const optMark = <span className="font-normal text-muted-foreground"> (optional)</span>;

function AlertIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-3.5 w-3.5 shrink-0 fill-current">
      <path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM9 6h2v6H9V6zm0 7h2v2H9v-2z" />
    </svg>
  );
}

declare global {
  interface Window {
    grecaptcha?: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> };
  }
}

export function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", phone: "", company: "", project_type: "", budget: "Not sure yet", timeline: "Not sure yet", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [emailHint, setEmailHint] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLHeadingElement>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`;

  // Load reCAPTCHA v3 only on this page; tear the badge + script down on unmount.
  useEffect(() => {
    if (!SITE_KEY || document.getElementById("recaptcha-v3")) return;
    const s = document.createElement("script");
    s.id = "recaptcha-v3";
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    document.head.appendChild(s);
    return () => {
      s.remove();
      document.querySelectorAll(".grecaptcha-badge").forEach((n) => n.parentElement?.remove());
    };
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function setField(name: keyof Values, v: string) {
    setValues((p) => ({ ...p, [name]: v }));
    if (touched[name]) setErrors((p) => ({ ...p, [name]: validateField(name, v) }));
    if (name === "email") setEmailHint("");
  }
  function blurField(name: keyof Values, v: string) {
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validateField(name, v) }));
    if (name === "email") setEmailHint(suggestEmail(v.trim()));
  }

  async function getToken(): Promise<string | null> {
    if (!SITE_KEY || !window.grecaptcha) return null;
    await new Promise<void>((r) => window.grecaptcha!.ready(r));
    try { return await window.grecaptcha.execute(SITE_KEY, { action: RECAPTCHA_ACTION }); } catch { return null; }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Validate everything; mark all touched so errors show.
    const next: Partial<Record<keyof Values, string>> = {};
    (Object.keys(values) as (keyof Values)[]).forEach((k) => { const msg = validateField(k, values[k]); if (msg) next[k] = msg; });
    setTouched({ name: true, email: true, phone: true, project_type: true, message: true });
    setErrors(next);
    const firstError = (["name", "email", "phone", "project_type", "message"] as (keyof Values)[]).find((k) => next[k]);
    if (firstError) {
      document.getElementById(firstError === "phone" ? "phone-input" : firstError)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const token = await getToken();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company_website: honeypot.current?.value ?? "", token }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) setStatus("success");
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
        <div className="mt-6 flex justify-center">
          <Link href="/pricing" className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground transition-colors hover:border-brand-400/50 hover:text-brand-500">
            See published prices
          </Link>
        </div>
      </div>
    );
  }

  const errText = (name: keyof Values) =>
    touched[name] && errors[name] ? (
      <p id={`${name}-error`} role="alert" className="mt-1.5 flex items-start gap-1.5 text-xs font-medium text-red-600 dark:text-red-400">
        <AlertIcon />
        {errors[name]}
      </p>
    ) : null;
  const describedBy = (name: keyof Values) => (touched[name] && errors[name] ? `${name}-error` : undefined);
  const inputCls = (name: keyof Values) =>
    `h-11 w-full rounded-xl border bg-background pl-11 pr-3.5 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 ${touched[name] && errors[name] ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : "border-border focus:border-brand-500 focus:ring-brand-500/30"}`;
  const leftIcon = (node: React.ReactNode) => (
    <span aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 z-[1] -translate-y-1/2 text-muted-foreground">{node}</span>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <h2 className="font-display text-lg font-bold text-foreground">Tell us about your project</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          A few details are all we need. Fields marked{" "}
          <span aria-hidden="true" className="text-brand-500">*</span> are required.
        </p>
      </div>

      {status === "error" && (
        <div role="alert" className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm leading-relaxed text-foreground">
          <p className="font-semibold">That did not send.</p>
          <p className="mt-1 text-muted-foreground">
            We could not confirm your message reached us. Please email it to us at{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400">{siteConfig.contact.email}</a>{" "}
            or send it on{" "}
            <a href={whatsappHref} className="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400">WhatsApp</a>{" "}
            so nothing is lost. It reaches the same people.
          </p>
        </div>
      )}

      <fieldset disabled={status === "submitting"} className="space-y-4 border-0 p-0 disabled:opacity-70">
        <div>
          <label htmlFor="name" className={labelCls}>Name{reqMark}</label>
          <div className="relative mt-1.5">
            {leftIcon(<IconUser className="h-5 w-5" />)}
            <input id="name" name="name" autoComplete="name" placeholder="Your full name" value={values.name}
              onChange={(e) => setField("name", e.target.value)} onBlur={(e) => blurField("name", e.target.value)}
              aria-required="true" aria-invalid={!!(touched.name && errors.name)} aria-describedby={describedBy("name")} className={inputCls("name")} />
          </div>
          {errText("name")}
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>Email{reqMark}</label>
          <div className="relative mt-1.5">
            {leftIcon(<IconMail className="h-5 w-5" />)}
            <input id="email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@company.com" value={values.email}
              onChange={(e) => setField("email", e.target.value)} onBlur={(e) => blurField("email", e.target.value)}
              aria-required="true" aria-invalid={!!(touched.email && errors.email)} aria-describedby={describedBy("email")} className={inputCls("email")} />
          </div>
          {errText("email")}
          {emailHint && !errors.email && (
            <p className="mt-1.5 text-xs text-muted-foreground">
              Did you mean{" "}
              <button type="button" onClick={() => { setField("email", emailHint); setEmailHint(""); }} className="font-semibold text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-400">{emailHint}</button>?
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone-input" className={labelCls}>Phone or WhatsApp{optMark}</label>
          <PhoneInput
            id="phone-input"
            name="phone"
            defaultCountry="US"
            flags={flags}
            placeholder="Enter phone number"
            value={values.phone}
            onChange={(v) => setField("phone", v || "")}
            onBlur={() => blurField("phone", values.phone)}
            inputComponent={PhoneTextInput}
            aria-describedby={describedBy("phone")}
            aria-invalid={!!(touched.phone && errors.phone)}
            className={`mt-1.5 flex h-11 items-center gap-2 rounded-xl border bg-background px-3.5 transition-colors focus-within:ring-2 ${touched.phone && errors.phone ? "border-red-500 focus-within:ring-red-500/30" : "border-border focus-within:border-brand-500 focus-within:ring-brand-500/30"}`}
          />
          {errText("phone")}
        </div>

        <div>
          <label htmlFor="company" className={labelCls}>Company{optMark}</label>
          <div className="relative mt-1.5">
            {leftIcon(<IconBuilding className="h-5 w-5" />)}
            <input id="company" name="company" autoComplete="organization" placeholder="Your company name" value={values.company}
              onChange={(e) => setField("company", e.target.value)} className={inputCls("company")} />
          </div>
        </div>

        <div>
          <label htmlFor="project_type" className={labelCls}>What can we help with?{reqMark}</label>
          <div className="relative mt-1.5">
            {leftIcon(<IconLayers className="h-5 w-5" />)}
            <select id="project_type" name="project_type" value={values.project_type}
              onChange={(e) => setField("project_type", e.target.value)} onBlur={(e) => blurField("project_type", e.target.value)}
              aria-required="true" aria-invalid={!!(touched.project_type && errors.project_type)} aria-describedby={describedBy("project_type")} className={inputCls("project_type")}>
              <option value="" disabled>Select a project type</option>
              {projectTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          {errText("project_type")}
        </div>

        <div>
          <label htmlFor="budget" className={labelCls}>Budget{optMark}</label>
          <div className="relative mt-1.5">
            {leftIcon(<IconTag className="h-5 w-5" />)}
            <select id="budget" name="budget" value={values.budget} onChange={(e) => setField("budget", e.target.value)} className={inputCls("budget")}>
              {budgets.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="timeline" className={labelCls}>Timeline{optMark}</label>
          <div className="relative mt-1.5">
            {leftIcon(<IconClock className="h-5 w-5" />)}
            <select id="timeline" name="timeline" value={values.timeline} onChange={(e) => setField("timeline", e.target.value)} className={inputCls("timeline")}>
              {timelines.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelCls}>What are you building?{reqMark}</label>
          <div className="relative mt-1.5">
            <span aria-hidden="true" className="pointer-events-none absolute left-3.5 top-3 z-[1] text-muted-foreground"><IconChat className="h-5 w-5" /></span>
            <textarea id="message" name="message" rows={5} placeholder="Tell us what you're building, and what success looks like." value={values.message}
              onChange={(e) => setField("message", e.target.value)} onBlur={(e) => blurField("message", e.target.value)}
              aria-required="true" aria-invalid={!!(touched.message && errors.message)} aria-describedby={describedBy("message")}
              className={`w-full rounded-xl border bg-background pl-11 pr-3.5 py-2.5 text-sm text-foreground transition-colors focus:outline-none focus:ring-2 ${touched.message && errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : "border-border focus:border-brand-500 focus:ring-brand-500/30"}`} />
          </div>
          {errText("message")}
        </div>

        {/* Honeypot - hidden from humans and assistive tech; a bot that fills it is dropped server-side. */}
        <input ref={honeypot} type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" style={{ display: "none" }} />
      </fieldset>

      <button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"}
        className="group/btn inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? (
          <><span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />Sending...</>
        ) : status === "error" ? (<>Try again</>) : (
          <>Send enquiry<IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" /></>
        )}
      </button>

      <p role="status" aria-live="polite" className="sr-only">
        {status === "submitting" ? "Sending your enquiry" : status === "error" ? "Your enquiry could not be sent" : ""}
      </p>

      <p className="text-xs leading-relaxed text-muted-foreground">
        We reply within one business day. Your details are only used to respond to your enquiry -{" "}
        <Link href="/privacy-policy" className="underline decoration-border underline-offset-2 hover:text-foreground">see our privacy policy</Link>.
        {SITE_KEY && (
          <>
            {" "}This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="underline decoration-border underline-offset-2 hover:text-foreground">Privacy Policy</a>{" "}and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener" className="underline decoration-border underline-offset-2 hover:text-foreground">Terms of Service</a>{" "}apply.
          </>
        )}
      </p>
    </form>
  );
}
