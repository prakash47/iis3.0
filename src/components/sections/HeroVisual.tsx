/**
 * Hero visual: the "Aurora Orb" - a glowing cyan->violet brand sphere wrapped
 * by orbiting rings, surrounded by glass chips for the full service range
 * (Build / Mobile / AI / Growth). Pure inline SVG, server-rendered, zero client
 * JS. Neutrals use theme tokens (fill-surface / -foreground / -muted-foreground,
 * stroke-border) so it adapts to light + dark; brand gradients are fixed. All
 * motion is CSS and reduced-motion safe. Decorative -> parent is aria-hidden.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg" aria-hidden="true">
      <svg viewBox="0 0 600 480" className="h-auto w-full">
        <defs>
          <radialGradient id="hv_bgGlow" cx="50%" cy="46%" r="60%">
            <stop offset="0%" stopColor="#2cbcf4" stopOpacity="0.16" />
            <stop offset="42%" stopColor="#6d5df1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#6d5df1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hv_orbBody" cx="38%" cy="32%" r="78%">
            <stop offset="0%" stopColor="#7fe0ff" />
            <stop offset="26%" stopColor="#2cbcf4" />
            <stop offset="60%" stopColor="#00a0e3" />
            <stop offset="82%" stopColor="#3a52c9" />
            <stop offset="100%" stopColor="#393185" />
          </radialGradient>
          <radialGradient id="hv_orbInner" cx="40%" cy="34%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hv_orbRim" cx="50%" cy="50%" r="50%">
            <stop offset="82%" stopColor="#6d5df1" stopOpacity="0" />
            <stop offset="97%" stopColor="#6d5df1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6d5df1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hv_specular" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hv_ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2cbcf4" />
            <stop offset="55%" stopColor="#00a0e3" />
            <stop offset="100%" stopColor="#6d5df1" />
          </linearGradient>
          <linearGradient id="hv_iconCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2cbcf4" />
            <stop offset="100%" stopColor="#0084c7" />
          </linearGradient>
          <linearGradient id="hv_iconViolet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6d5df1" />
            <stop offset="100%" stopColor="#393185" />
          </linearGradient>
          <linearGradient id="hv_trendGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00a0e3" />
            <stop offset="100%" stopColor="#6d5df1" />
          </linearGradient>
          <linearGradient id="hv_trendFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2cbcf4" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#2cbcf4" stopOpacity="0" />
          </linearGradient>
          <filter id="hv_softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="6" stdDeviation="9" floodColor="#393185" floodOpacity="0.16" />
          </filter>
          <filter id="hv_chipShadow" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#1a2a6b" floodOpacity="0.14" />
          </filter>
          <filter id="hv_orbGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="16" result="b" />
            <feColorMatrix in="b" type="matrix" values="0 0 0 0 0.17  0 0 0 0 0.63  0 0 0 0 0.89  0 0 0 0.9 0" />
          </filter>
        </defs>

        {/* ambient glow */}
        <rect x="0" y="0" width="600" height="480" fill="url(#hv_bgGlow)" />

        {/* drifting particles */}
        <g className="hv-twinkle" fill="#00a0e3">
          <circle cx="92" cy="96" r="3" opacity="0.5" />
          <circle cx="520" cy="120" r="2.5" opacity="0.45" />
          <circle cx="70" cy="300" r="2" opacity="0.4" />
          <circle cx="540" cy="330" r="3" opacity="0.4" />
          <circle cx="150" cy="420" r="2.5" opacity="0.35" />
          <circle cx="470" cy="430" r="2" opacity="0.4" />
          <circle cx="300" cy="52" r="2.5" opacity="0.4" />
        </g>
        <g className="hv-twinkle" style={{ animationDelay: "1.6s" }} fill="#6d5df1">
          <circle cx="128" cy="150" r="2" opacity="0.4" />
          <circle cx="500" cy="70" r="2.5" opacity="0.4" />
          <circle cx="560" cy="240" r="2" opacity="0.35" />
          <circle cx="60" cy="220" r="2.5" opacity="0.35" />
          <circle cx="360" cy="440" r="2" opacity="0.4" />
        </g>

        {/* orb + rings (gently float together) */}
        <g className="float-soft">
          <ellipse cx="300" cy="238" rx="196" ry="70" fill="none" stroke="url(#hv_ringGrad)" strokeWidth="2" opacity="0.28" transform="rotate(-24 300 238)" />
          <circle className="hv-breathe" cx="300" cy="238" r="118" fill="url(#hv_orbBody)" filter="url(#hv_orbGlow)" />
          <g filter="url(#hv_softShadow)">
            <circle cx="300" cy="238" r="100" fill="url(#hv_orbBody)" />
            <circle cx="300" cy="238" r="100" fill="url(#hv_orbInner)" />
            <circle cx="300" cy="238" r="100" fill="url(#hv_orbRim)" />
            <ellipse cx="266" cy="200" rx="34" ry="24" fill="url(#hv_specular)" transform="rotate(-28 266 200)" />
            <circle cx="336" cy="286" r="30" fill="#393185" opacity="0.14" />
          </g>
          <ellipse cx="300" cy="238" rx="176" ry="62" fill="none" stroke="url(#hv_ringGrad)" strokeWidth="2.4" transform="rotate(18 300 238)" />
          <ellipse cx="300" cy="238" rx="176" ry="62" fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.35" transform="rotate(18 300 238)" />
          <circle cx="459" cy="205" r="9" fill="#6d5df1" opacity="0.22" />
          <circle cx="459" cy="205" r="5" fill="#6d5df1" />
          <circle cx="141" cy="271" r="4" fill="#2cbcf4" />
        </g>

        {/* Build chip */}
        <g className="float-y">
          <rect x="86" y="92" width="132" height="52" rx="16" className="fill-surface stroke-border" strokeWidth="1" filter="url(#hv_chipShadow)" />
          <rect x="98" y="102" width="32" height="32" rx="10" fill="url(#hv_iconCyan)" />
          <path d="M110 112 l-5 6 l5 6 M118 112 l5 6 l-5 6" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="142" y="114" fontSize="14" fontWeight="600" className="fill-foreground">Build</text>
          <text x="142" y="130" fontSize="11" className="fill-muted-foreground">Web &amp; apps</text>
        </g>

        {/* Mobile chip */}
        <g className="float-y" style={{ animationDelay: "0.9s" }}>
          <rect x="400" y="70" width="128" height="52" rx="16" className="fill-surface stroke-border" strokeWidth="1" filter="url(#hv_chipShadow)" />
          <rect x="412" y="80" width="32" height="32" rx="10" fill="url(#hv_iconViolet)" />
          <rect x="422" y="86" width="12" height="20" rx="3" fill="none" stroke="#ffffff" strokeWidth="2" />
          <line x1="426" y1="102" x2="430" y2="102" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <text x="456" y="92" fontSize="14" fontWeight="600" className="fill-foreground">Mobile</text>
          <text x="456" y="108" fontSize="11" className="fill-muted-foreground">iOS &amp; Android</text>
        </g>

        {/* AI chip */}
        <g className="float-y" style={{ animationDelay: "1.7s" }}>
          <rect x="78" y="332" width="118" height="52" rx="16" className="fill-surface stroke-border" strokeWidth="1" filter="url(#hv_chipShadow)" />
          <rect x="90" y="342" width="32" height="32" rx="10" fill="url(#hv_iconViolet)" />
          <path d="M106 346 l3.4 7.6 l7.6 3.4 l-7.6 3.4 l-3.4 7.6 l-3.4 -7.6 l-7.6 -3.4 l7.6 -3.4 Z" fill="#ffffff" />
          <text x="134" y="354" fontSize="14" fontWeight="600" className="fill-foreground">AI</text>
          <text x="134" y="370" fontSize="11" className="fill-muted-foreground">Smart tools</text>
        </g>

        {/* Growth chip */}
        <g className="float-y" style={{ animationDelay: "1.2s" }}>
          <rect x="392" y="336" width="150" height="80" rx="18" className="fill-surface stroke-border" strokeWidth="1" filter="url(#hv_chipShadow)" />
          <text x="410" y="360" fontSize="13" fontWeight="600" className="fill-foreground">Growth</text>
          <path d="M410 400 L410 384 L438 388 L466 372 L494 362 L522 348 L522 400 Z" fill="url(#hv_trendFill)" />
          <path d="M410 384 L438 388 L466 372 L494 362 L522 348" fill="none" stroke="url(#hv_trendGrad)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="522" cy="348" r="7" fill="#6d5df1" opacity="0.22" />
          <circle cx="522" cy="348" r="4" fill="#6d5df1" />
          <path d="M508 350 l14 -2 l-2 12" fill="none" stroke="#6d5df1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
