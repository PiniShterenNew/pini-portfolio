import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Heebo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pini Shteren — React.js Developer & Frontend Engineer",
  description:
    "React.js developer & frontend engineer. Five years of high-performance B2B SaaS. Tel Aviv, Israel.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("pini-theme")||"dark";var l=localStorage.getItem("pini-lang")||"en";document.documentElement.setAttribute("data-theme",t);document.documentElement.setAttribute("lang",l);document.documentElement.setAttribute("dir",l==="he"?"rtl":"ltr");}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} ${heebo.variable} ${jetbrainsMono.variable}`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
