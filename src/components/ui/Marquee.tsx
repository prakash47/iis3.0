/** CSS-only infinite marquee (content duplicated once; second copy is aria-hidden). */
function Row({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden}>
      {items.map((item) => (
        <span
          key={item}
          className="whitespace-nowrap rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}
