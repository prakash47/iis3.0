import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** The Studio owns the full viewport and must NOT inherit the marketing chrome
 *  (that lives in (marketing)/layout.tsx). This bare layout just passes through,
 *  inside the root html/body shell. */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
