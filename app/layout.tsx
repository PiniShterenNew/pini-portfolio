import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, Heebo, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-hebrew",
  weight: ["300", "400", "500", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pini Shteren — Frontend Engineer",
  description:
    "Frontend engineer building React and TypeScript products. 5+ years shipping production UI.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Pini Shteren — Frontend Engineer",
    description: "React · TypeScript · Product UI",
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Pini Shteren" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${geist.variable} ${heebo.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
