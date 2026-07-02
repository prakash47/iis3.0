import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[image:linear-gradient(135deg,var(--grad-from),var(--grad-to))]" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}
