import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, Heebo, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";
import FloatingCTA from "@/components/FloatingCTA";

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
  style: ['normal', 'italic'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
})

const heebo = Heebo({
  subsets: ['latin', 'hebrew'],
  variable: '--font-hebrew',
  weight: ['300', '400', '500', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pini-portfolio.vercel.app'),
  title: "Pini Shteren · Frontend & Fullstack Engineer",
  description: "Frontend & Fullstack Engineer — React, Next.js, TypeScript, Node.js. Product-minded, ships features end-to-end. 5+ years building SaaS products in production.",
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Pini Shteren · Frontend & Fullstack Engineer",
    description: "React · Next.js · TypeScript · Node.js — product-minded engineer who ships features end-to-end.",
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'he_IL',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: "Pini Shteren logo" }],
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0b0a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${geist.variable} ${heebo.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
      >
        <AppProvider>
          {children}
          <FloatingCTA />
          <div
            id="gsap-overlay"
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--bg)',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: 9998,
            }}
          />
        </AppProvider>
      </body>
    </html>
  )
}
