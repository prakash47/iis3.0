import type { Metadata, Viewport } from "next";
// Self-hosted variable fonts (no runtime Google dependency, GDPR-safe, faster).
import "@fontsource-variable/inter";
import "@fontsource-variable/sora";
import "./globals.css";
import { siteConfig, absoluteUrl } from "@/config/site";
import { seoConfig } from "@/config/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/seo/jsonLd";

const ogImage = absoluteUrl("/og-default.png");

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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: seoConfig.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    site: seoConfig.twitterHandle,
    creator: seoConfig.twitterHandle,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
