"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/contexts/AppContext";
import { Sun, Moon, ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme, lang, setLang, t } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#stack", label: t.nav.stack },
    { href: "#ai", label: t.nav.ai, highlight: true },
    { href: "#experience", label: t.nav.experience },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1400px] px-4 md:px-10 pt-3 md:pt-5">
        <nav
          className={`flex items-center justify-between border border-[var(--border)] px-3 md:px-4 py-2.5 md:py-3 transition-all ${
            scrolled
              ? "bg-[var(--bg)]/85 backdrop-blur-xl"
              : "bg-[var(--surface-0)]/60 backdrop-blur-xl"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-7 w-7 items-center justify-center bg-[var(--text)] text-[var(--bg)]">
              <span className="font-display font-bold text-[12px]">P</span>
            </span>
            <span className="font-display font-medium text-[14.5px] tracking-tight text-[var(--text)]">
              Pini Shteren
            </span>
            <span className="hidden sm:inline-block ms-1 text-[var(--muted)] text-[11.5px] font-mono uppercase tracking-[0.16em]">
              / {lang === "he" ? "פרונט" : "frontend"}
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-3 py-2 text-[12.5px] font-mono uppercase tracking-[0.14em] transition-colors ${
                    l.highlight
                      ? "text-[var(--accent-2)] hover:opacity-80"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {l.highlight && "✦ "}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="hidden sm:flex items-center gap-0.5 p-0.5 border border-[var(--border)] bg-[var(--surface-1)]">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-[10.5px] font-mono font-medium transition-colors ${
                  lang === "en" ? "bg-[var(--bg)] text-[var(--text)]" : "text-[var(--muted)]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("he")}
                className={`px-2 py-1 text-[10.5px] font-mono font-medium transition-colors ${
                  lang === "he" ? "bg-[var(--bg)] text-[var(--text)]" : "text-[var(--muted)]"
                }`}
              >
                עב
              </button>
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex h-9 w-9 items-center justify-center border border-[var(--border)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-[var(--text-2)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 bg-[var(--accent)] hover:opacity-90 text-[var(--accent-fg)] px-3.5 py-2 text-[12px] font-mono uppercase tracking-[0.14em] font-medium transition-opacity"
            >
              {t.nav.getInTouch}
              <ArrowUpRight size={12} />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center border border-[var(--border)] bg-[var(--surface-1)] text-[var(--text-2)]"
              aria-label="Toggle menu"
            >
              {open ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 border border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-3 py-3 text-[13px] font-mono uppercase tracking-[0.14em] ${
                  l.highlight
                    ? "text-[var(--accent-2)]"
                    : "text-[var(--text-2)] hover:bg-[var(--surface-1)]"
                }`}
              >
                {l.highlight && "✦ "}
                {l.label}
              </a>
            ))}
            <div className="mt-1 pt-2 border-t border-[var(--border)] flex gap-2 px-1">
              <div className="flex-1 flex gap-0.5 p-0.5 border border-[var(--border)] bg-[var(--surface-1)]">
                <button
                  onClick={() => setLang("en")}
                  className={`flex-1 py-1.5 text-[11px] font-mono font-medium ${
                    lang === "en" ? "bg-[var(--bg)] text-[var(--text)]" : "text-[var(--muted)]"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("he")}
                  className={`flex-1 py-1.5 text-[11px] font-mono font-medium ${
                    lang === "he" ? "bg-[var(--bg)] text-[var(--text)]" : "text-[var(--muted)]"
                  }`}
                >
                  עברית
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
