import { cn } from "@/lib/utils";

type Tone = "default" | "onDark";

const tones: Record<Tone, string> = {
  default: "border-border bg-surface text-muted-foreground",
  onDark: "border-white/15 bg-white/5 text-slate-300",
};

/**
 * Small rounded "eyebrow" pill used above section headings. Optional live
 * ping-dot signals an active studio. Server component, pure CSS animation.
 */
export function Pill({
  children,
  dot = false,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  dot?: boolean;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span aria-hidden="true" className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
        </span>
      )}
      {children}
    </span>
  );
}
