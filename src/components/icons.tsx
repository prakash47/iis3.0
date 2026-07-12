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

export const IconBolt = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8z" />
  </Svg>
);

export const IconTag = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M4 4h6.5L20 13.5 13.5 20 4 10.5V4z" />
    <circle cx="8.2" cy="8.2" r="1.4" />
  </Svg>
);

export const IconClock = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const IconTrendingUp = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M3 17 9 11l4 4 7-7" />
    <path d="M15 7h6v6" />
  </Svg>
);

export const IconSearch = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m21 21-4.35-4.35" />
  </Svg>
);

export const IconRocket = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.79-.87.78-2.2-.02-3a2.13 2.13 0 0 0-2.98 0z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.9 12.9 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.3 22.3 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </Svg>
);

export const IconGradCap = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M3 9.2 12 5l9 4.2-9 4.2-9-4.2z" />
    <path d="M7 11.3v4.4c0 1.1 2.2 2 5 2s5-.9 5-2v-4.4" />
    <path d="M21 9.4V14" />
  </Svg>
);

export const IconHeartPulse = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 20.3C8.5 18 3.5 14.4 3.5 9.7 3.5 7.1 5.6 5.1 8.1 5.1c1.6 0 3.1.9 3.9 2.2.8-1.3 2.3-2.2 3.9-2.2 2.5 0 4.6 2 4.6 4.6 0 4.7-5 8.3-8.4 10.6z" />
    <path d="M7.5 11.8h2.3l1.1-1.9 1.9 3.6 1-1.7h2.7" />
  </Svg>
);

export const IconCreditCard = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
    <path d="M2.5 9.8h19" />
    <path d="M6 14.5h3.5" />
  </Svg>
);

export const IconBuilding = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M3.5 21V5.5a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1V21" />
    <path d="M14 9.5h5.5a1 1 0 0 1 1 1V21" />
    <path d="M2.5 21h19" />
    <path d="M6.5 8h3M6.5 11.5h3M6.5 15h3" />
  </Svg>
);

export const IconPlane = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M21.4 3.6 2.9 10.8a.5.5 0 0 0 0 .9l6.5 2.3 2.4 6.7a.5.5 0 0 0 .9.1l3-5.5 6.3-11a.4.4 0 0 0-.6-.7z" />
    <path d="M9.4 14 21.4 3.6" />
  </Svg>
);

export const IconPlay = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10.2 8.6 15.5 12l-5.3 3.4z" />
  </Svg>
);

export const IconCheck = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Svg>
);

export const IconLayers = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 3 2.5 8 12 13l9.5-5L12 3z" />
    <path d="m2.5 12 9.5 5 9.5-5" />
    <path d="m2.5 16 9.5 5 9.5-5" />
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

export const IconPalette = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 3.5c-4.7 0-8.5 3.6-8.5 8s3.8 8 8.5 8c1.2 0 1.9-1 1.6-2.1-.3-1.1.5-2 1.6-2H17a3.5 3.5 0 0 0 3.5-3.5c0-4-3.8-8.4-8.5-8.4z" />
    <circle cx="7.5" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="10.5" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="16.8" cy="12" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconLayout = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 9v11" />
  </Svg>
);

export const IconGrid = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
  </Svg>
);

export const IconType = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M4 7V5h16v2M12 5v14M9 19h6" />
  </Svg>
);

export const IconEye = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

export const IconRefresh = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M3.5 12a8.5 8.5 0 0 1 14.4-6.1L21 8.5" />
    <path d="M20.5 12a8.5 8.5 0 0 1-14.4 6.1L3 15.5" />
    <path d="M21 4v4.5h-4.5M3 20v-4.5h4.5" />
  </Svg>
);

export const IconDatabase = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
    <path d="M4.5 5.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
    <path d="M4.5 11.5v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
  </Svg>
);

export const IconServer = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </Svg>
);

export const IconGauge = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M4.2 17a9 9 0 1 1 15.6 0" />
    <path d="M12 13l3.6-3.2" />
    <circle cx="12" cy="13" r="1.3" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconFileText = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M13.5 2.5H7A1.5 1.5 0 0 0 5.5 4v16A1.5 1.5 0 0 0 7 21.5h10a1.5 1.5 0 0 0 1.5-1.5V7.5z" />
    <path d="M13.5 2.5V7.5H18.5" />
    <path d="M8.5 12.5h7M8.5 16h7M8.5 9h3" />
  </Svg>
);

export const IconChat = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V16H5.5A1.5 1.5 0 0 1 4 14.5z" />
    <path d="M8 8.5h8M8 11.5h5" />
  </Svg>
);

export const IconCpu = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2" />
  </Svg>
);

export const IconLock = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.3" r="1.3" fill="currentColor" stroke="none" />
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
