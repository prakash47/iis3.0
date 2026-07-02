"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const projectTypes = [
  "Website",
  "Web App / SaaS",
  "E-commerce",
  "Mobile App",
  "Digital Marketing",
  "AI Solution",
  "Other",
];

const budgets = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

const field =
  "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
const label = "text-sm font-medium text-foreground";

export function ContactForm() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[0]);

  // No backend yet: compose a prefilled email. TODO: wire to Resend/Formspree/HubSpot.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company")}`,
      `Project type: ${projectType}`,
      `Budget: ${budget}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    const subject = `New project enquiry - ${projectType}`;
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={label}>Company (optional)</label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className={label}>Project type</label>
          <select
            id="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={field}
          >
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={label}>Budget</label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={field}
          >
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>Tell us about your project</label>
        <textarea id="message" name="message" rows={5} required className={field} />
      </div>

      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Send enquiry
      </button>
      <p className="text-xs text-muted-foreground">
        We reply within 1 business day. Your details are only used to respond to your enquiry.
      </p>
    </form>
  );
}
