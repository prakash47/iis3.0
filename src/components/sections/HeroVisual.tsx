/**
 * Hero visual: a "performance console" - three Lighthouse-style rings drawing
 * to 100 with floating metric chips. Pure CSS/SVG animation, server-rendered,
 * zero client JS. Labeled as our build standard (a target, not a fake claim).
 */

function Ring({
  label,
  delay,
}: {
  label: string;
  delay: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-20 w-20 sm:h-24 sm:w-24">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r="44" pathLength="100" fill="none" strokeWidth="7" className="stroke-border" />
          <circle
            cx="50" cy="50" r="44" pathLength="100" fill="none" strokeWidth="7"
            strokeLinecap="round" strokeDasharray="100" strokeDashoffset="0"
            stroke="url(#ring-grad)" className="ring-anim" style={{ animationDelay: delay }}
          />
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--grad-from)" />
              <stop offset="100%" stopColor="var(--grad-to)" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-foreground sm:text-2xl">
          100
        </span>
      </div>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

function Chip({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`float-y absolute z-10 hidden items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-foreground shadow-lg sm:flex ${className ?? ""}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg" aria-hidden="true">
      {/* Floating metric chips */}
      <Chip className="-left-6 top-6" delay="0s">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        LCP&nbsp;&lt;&nbsp;1.0s
      </Chip>
      <Chip className="-right-6 -top-4" delay="1.4s">
        <span className="h-2 w-2 rounded-full bg-brand-500" />
        Next.js&nbsp;·&nbsp;React
      </Chip>
      <Chip className="-bottom-4 left-8" delay="2.6s">
        <span className="h-2 w-2 rounded-full bg-accent-500" />
        0.00&nbsp;CLS
      </Chip>

      {/* Console card with rotating gradient border */}
      <div className="glow-border card relative overflow-hidden rounded-3xl">
        <div className="relative z-[1]">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              build - production ✓
            </span>
          </div>

          {/* Rings */}
          <div className="flex items-center justify-around px-6 py-8">
            <Ring label="Performance" delay="0.2s" />
            <Ring label="SEO" delay="0.5s" />
            <Ring label="Accessibility" delay="0.8s" />
          </div>

          {/* Deploy log */}
          <div className="space-y-2 border-t border-border px-6 py-5 font-mono text-xs text-muted-foreground">
            <p><span className="text-emerald-500">✓</span> 43 static pages generated</p>
            <p><span className="text-emerald-500">✓</span> structured data valid</p>
            <p><span className="text-emerald-500">✓</span> deployed to edge · Mumbai PoP</p>
          </div>

          {/* Honest framing */}
          <div className="border-t border-border bg-muted/60 px-6 py-3 text-center text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            The bar every build ships at
          </div>
        </div>
      </div>
    </div>
  );
}
