import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))] shadow-[0_10px_32px_-12px_var(--glow)] hover:shadow-[0_16px_44px_-12px_var(--glow)] hover:brightness-110 active:scale-[0.98]",
  secondary:
    "bg-foreground text-background hover:opacity-90 active:scale-[0.98]",
  outline:
    "border border-border bg-surface/70 text-foreground backdrop-blur hover:border-brand-400/60 hover:bg-surface active:scale-[0.98]",
  ghost:
    "text-foreground/80 hover:text-foreground hover:bg-surface active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
