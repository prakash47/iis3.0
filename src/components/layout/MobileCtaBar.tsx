import Link from "next/link";
import { IconArrow } from "@/components/icons";

/**
 * Mobile sticky CTA bar - fixed to the bottom on small screens, revealed by a
 * CSS scroll-timeline once the hero scrolls away (falls back to always-visible
 * where scroll-timeline is unsupported; hidden on lg+). The <body> carries
 * bottom padding on mobile so this never covers footer content.
 */
export function MobileCtaBar() {
  return (
    <div className="mobile-cta fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/90 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">Start your project</p>
          <p className="truncate text-xs text-muted-foreground">Fixed price. No sales call needed.</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_var(--glow)] active:scale-[0.98]"
        >
          Start a Project
          <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
