"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-reveal wrapper. Progressive enhancement: hidden state only applies
 * when <html class="js"> (set by the inline script), so crawlers and no-JS
 * users always see content. `group` staggers direct children via CSS.
 */
export function Reveal({
  children,
  className,
  group = false,
}: {
  children: React.ReactNode;
  className?: string;
  group?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(group ? "reveal-group" : "reveal", className)}>
      {children}
    </div>
  );
}
