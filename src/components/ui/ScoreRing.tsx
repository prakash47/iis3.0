/**
 * Circular score gauge (Lighthouse-style). Pure SVG, CSS draw-in animation,
 * zero client JS. References the shared "lh-grad" gradient defined once by the
 * parent section. Decorative ring + real, visible score text.
 */
export function ScoreRing({
  score,
  label,
  delay,
}: {
  score: number;
  label: string;
  delay?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="relative h-20 w-20 sm:h-24 sm:w-24">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50" cy="50" r="44" pathLength="100" fill="none"
            strokeWidth="7" className="stroke-border"
          />
          <circle
            cx="50" cy="50" r="44" pathLength="100" fill="none"
            strokeWidth="7" strokeLinecap="round"
            strokeDasharray={`${score} 100`} stroke="url(#lh-grad)"
            className="ring-anim" style={{ animationDelay: delay }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-emerald-600 dark:text-emerald-400 sm:text-2xl">
          {score}
        </span>
      </div>
      <span className="text-xs font-medium text-muted-foreground sm:text-sm">{label}</span>
    </div>
  );
}
