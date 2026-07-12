import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "./image";
import { slugify } from "./slugify";

type ImgValue = {
  alt?: string;
  caption?: string;
  dimensions?: { width?: number; height?: number };
  lqip?: string;
};
type CodeValue = { code?: string };
type TableValue = { rows?: { cells?: string[] }[] };
type LinkValue = { href?: string; nofollow?: boolean };
type HeadingValue = { children?: { text?: string }[] };

function headingText(value: unknown): string {
  const v = value as HeadingValue;
  return (v?.children ?? []).map((c) => c?.text ?? "").join("");
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const builder = urlFor(value);
      if (!builder) return null;
      const v = value as ImgValue;
      const width = v.dimensions?.width ?? 1600;
      const height = v.dimensions?.height ?? Math.round(width * 0.5625);
      return (
        <figure className="my-8">
          <Image
            src={builder.width(1600).auto("format").url()}
            alt={v.alt ?? ""}
            width={width}
            height={height}
            className="rounded-2xl border border-border"
            sizes="(max-width: 768px) 100vw, 768px"
            placeholder={v.lqip ? "blur" : "empty"}
            blurDataURL={v.lqip}
          />
          {v.caption && (
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              {v.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-surface-2 p-4 text-sm">
        <code>{(value as CodeValue)?.code}</code>
      </pre>
    ),
    table: ({ value }) => {
      const rows = (value as TableValue)?.rows ?? [];
      if (!rows.length) return null;
      const [head, ...body] = rows;
      return (
        <div className="my-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                {(head?.cells ?? []).map((c, i) => (
                  <th key={i} className="p-3 font-semibold text-foreground">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((r, ri) => (
                <tr key={ri} className="border-b border-border last:border-0">
                  {(r.cells ?? []).map((c, ci) => (
                    <td key={ci} className="p-3 text-muted-foreground">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
  marks: {
    internalLink: ({ value, children }) => (
      <Link
        href={(value as LinkValue)?.href ?? "#"}
        className="font-medium text-brand-500 hover:text-brand-600"
      >
        {children}
      </Link>
    ),
    link: ({ value, children }) => {
      const v = value as LinkValue;
      return (
        <a
          href={v?.href}
          rel={v?.nofollow ? "nofollow noopener noreferrer" : "noopener noreferrer"}
          target="_blank"
          className="font-medium text-brand-500 hover:text-brand-600"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children, value }) => (
      <h2
        id={slugify(headingText(value))}
        className="mt-10 scroll-mt-24 font-display text-2xl font-bold text-foreground"
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={slugify(headingText(value))}
        className="mt-8 scroll-mt-24 font-display text-xl font-semibold text-foreground"
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 font-display text-lg font-semibold text-foreground">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-brand-400 pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted-foreground">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-muted-foreground">{children}</ol>
    ),
  },
};

export function PortableTextBody({ value }: { value: unknown }) {
  if (!value) return null;
  return <PortableText value={value as never} components={components} />;
}

/** Extract h2/h3 headings for a table of contents, using the SAME slugify as the
 *  renderer above so every anchor resolves. */
export function extractToc(value: unknown): { id: string; text: string; level: 2 | 3 }[] {
  if (!Array.isArray(value)) return [];
  const out: { id: string; text: string; level: 2 | 3 }[] = [];
  for (const block of value as { _type?: string; style?: string; children?: { text?: string }[] }[]) {
    if (block?._type !== "block") continue;
    if (block.style !== "h2" && block.style !== "h3") continue;
    const text = (block.children ?? []).map((c) => c?.text ?? "").join("");
    if (!text) continue;
    out.push({ id: slugify(text), text, level: block.style === "h2" ? 2 : 3 });
  }
  return out;
}
