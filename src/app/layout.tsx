import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig, absoluteUrl, isIndexable } from "@/config/site";
import { seoConfig } from "@/config/seo";

// Self-hosted variable fonts via next/font/local: no runtime Google dependency, and
// next/font handles preload + a size-adjusted fallback automatically (zero CLS from the
// font swap). This is the "next/font for self-hosted fonts" the Next.js spoke sells.
// display "optional" (not "swap"): a swap repaints the hero text when the font lands,
// which re-stamps the text LCP at font-arrival time (~3.5s on throttled mobile) and
// costs a relayout. With "optional" the size-adjusted fallback simply keeps the first
// paint on slow visits (identical metrics, zero CLS) and the brand fonts render from
// cache on every later navigation - text LCP stays at first paint.
// Weight-instanced subsets (scripts/subset-fonts.mjs): the site uses only wght
// 400-800 (zero thin/light/black usage), so the variable axis is restricted to
// that range - Inter 47->28KB, Sora 33->22KB. Smaller payloads land sooner on
// throttled mobile, which is where the H1's LCP was waiting on font arrival.
const inter = localFont({
  src: "./fonts/inter-latin-wght-400-800.woff2",
  variable: "--font-inter",
  weight: "400 800",
  display: "optional",
});
const sora = localFont({
  src: "./fonts/sora-latin-wght-400-800.woff2",
  variable: "--font-sora",
  weight: "400 800",
  display: "optional",
});

const ogImages = [
  { url: absoluteUrl("/og-default.png"), width: 1200, height: 630, alt: seoConfig.defaultTitle },
];

// Runs before paint: sets .js (enables reveal animations) and restores the
// saved theme (or system preference) without a flash of wrong theme.
const themeInit = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m))d.classList.add('dark');}catch(e){}})();`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfe" },
    { media: "(prefers-color-scheme: dark)", color: "#060a14" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  // No default canonical here: every real page sets its own via metadataFrom/pageMetadata,
  // and a root "/" fallback silently canonicalized any alternates-less route to the homepage.
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: seoConfig.siteName,
    locale: seoConfig.locale,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    site: seoConfig.twitterHandle,
    creator: seoConfig.twitterHandle,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: ogImages,
  },
  // Site-wide default. Indexable pages inherit this (metadataFrom only sets its
  // own robots for explicitly-noindexed pages), so gating it here flips the WHOLE
  // site to noindex on any non-production deployment - see isIndexable in site.ts.
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${siteConfig.name} - Resources`}
          href="/feed.xml"
        />
      </head>
      {/* True shell only. The marketing chrome (Header/Footer/MobileCtaBar + skip
          link + sitewide Org/WebSite JSON-LD) lives in (marketing)/layout.tsx so
          the full-screen /studio route can render outside it. */}
      <body className="h-full">{children}</body>
    </html>
  );
}
