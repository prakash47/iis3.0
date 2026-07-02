/** Minimal inline line-icons (stroke = currentColor, zero deps, zero JS). */

function Svg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-6 w-6"}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const IconCode = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
  </Svg>
);

export const IconDevice = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </Svg>
);

export const IconMegaphone = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1zM14 8.5a4 4 0 0 1 0 7M17 6a8 8 0 0 1 0 12" />
  </Svg>
);

export const IconPen = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 19.5 4.5 21 6 13.5 16.7 2.8a2 2 0 0 1 2.8 0l1.7 1.7a2 2 0 0 1 0 2.8L12 19.5zM14.5 5l4.5 4.5" />
  </Svg>
);

export const IconShield = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 2.5 4.5 5.5v6c0 4.7 3.2 8.3 7.5 10 4.3-1.7 7.5-5.3 7.5-10v-6L12 2.5z" />
    <path d="m9 11.5 2.2 2.2L15.5 9" />
  </Svg>
);

export const IconSpark = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 3v0c.9 3.9 2.1 5.1 6 6v0c-3.9.9-5.1 2.1-6 6v0c-.9-3.9-2.1-5.1-6-6v0c3.9-.9 5.1-2.1 6-6zM19 14l.6 2.4L22 17l-2.4.6L19 20l-.6-2.4L16 17l2.4-.6L19 14zM5 15l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2z" />
  </Svg>
);

export const IconArrow = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </Svg>
);

export const IconCheck = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Svg>
);

export const IconChevronDown = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const IconPin = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const IconPhone = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Svg>
);

export const IconMail = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
);

/* ── Brand icons (filled, official-ish glyphs) ─────────────────────────── */

function BrandSvg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "h-5 w-5"} aria-hidden="true">
      {children}
    </svg>
  );
}

export const IconLinkedIn = ({ className }: { className?: string }) => (
  <BrandSvg className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </BrandSvg>
);

export const IconX = ({ className }: { className?: string }) => (
  <BrandSvg className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </BrandSvg>
);

export const IconInstagram = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconFacebook = ({ className }: { className?: string }) => (
  <BrandSvg className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </BrandSvg>
);

export const IconWhatsApp = ({ className }: { className?: string }) => (
  <BrandSvg className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </BrandSvg>
);
