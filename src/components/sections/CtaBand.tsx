import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface CtaLink {
  label: string;
  href: string;
}

export function CtaBand({
  title = "Have a project in mind?",
  subtitle = "Talk to the founder - not a sales rep. Fixed pricing, a clear timeline, and no obligation.",
  primary = { label: "Start a Project", href: "/contact" },
  secondary,
}: {
  title?: string;
  subtitle?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="aurora bg-band">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1] flex flex-col items-start gap-8 py-20 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-lg text-slate-300">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primary.href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))] px-7 text-base font-semibold text-white shadow-[0_10px_36px_-10px_var(--glow)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
          >
            {primary.label}
            <span aria-hidden="true">→</span>
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
