import { cn } from "@/lib/utils";

/**
 * A small, verifiable proof chip (icon + label). Used for the hero trust row;
 * reusable anywhere a compact, checkable claim needs surfacing.
 */
export function TrustChip({
  icon,
  children,
  className,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-2 text-sm font-medium text-foreground backdrop-blur",
        className,
      )}
    >
      <span aria-hidden="true" className="text-brand-500">
        {icon}
      </span>
      {children}
    </span>
  );
}
