"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useApp } from "@/contexts/AppContext";
import WordReveal from "@/components/WordReveal";

export default function Hero() {
  const { t, lang } = useApp();
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!portraitRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        portraitRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    if (window.matchMedia("(min-width: 1024px)").matches) {
      window.addEventListener("mousemove", onMove);
    }
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const stats = [
    { k: "5+", v: lang === "he" ? "שנים" : "Years" },
    { k: "97%", v: lang === "he" ? "Latency" : "Latency cut" },
    { k: "85+", v: "Lighthouse" },
    { k: "20+", v: lang === "he" ? "מסכים" : "Screens" },
  ];

  return (
    <section id="top" className="relative min-h-[100svh] pt-20 md:pt-28 pb-12 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-noise pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <div className="absolute top-28 md:top-32 inset-x-0 px-5 md:px-10 flex justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)] z-10">
        <span className="hidden sm:inline">{t.hero.role}</span>
        <span>{lang === "he" ? "פורטפוליו / 2026" : "Portfolio / 2026"}</span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 pt-12 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left — type column */}
          <div className="lg:col-span-7 xl:col-span-7 relative z-10 order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-1)] backdrop-blur px-3 py-1.5 text-[12px] text-[var(--text-2)] reveal-fade"
              style={{ animationDelay: "100ms" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 pulse-dot" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono uppercase tracking-[0.14em] text-[10.5px]">
                {t.hero.meta.status}
              </span>
              <span className="text-[var(--muted-2)]">/</span>
              <span className="font-mono text-[var(--muted)] text-[11px]">{t.hero.meta.city}</span>
            </div>

            <h1 className="mt-6 md:mt-9 font-display tracking-[-0.03em] leading-[0.92] text-[var(--text)]">
              <span className="block text-[34px] sm:text-[52px] md:text-[72px] xl:text-[104px] font-light italic-display">
                <WordReveal text={t.hero.tag1} delay={200} />
              </span>
              <span className="block text-[34px] sm:text-[52px] md:text-[72px] xl:text-[104px] font-bold mt-1">
                <span className="bg-gradient-to-br from-[var(--text)] via-[var(--text)] to-[var(--muted)] bg-clip-text text-transparent">
                  <WordReveal text={t.hero.tag2} delay={400} />
                </span>
              </span>
              <div className="flex items-baseline gap-2 sm:gap-3 md:gap-5 flex-wrap mt-1 text-[34px] sm:text-[52px] md:text-[72px] xl:text-[104px] font-light">
                <WordReveal text={t.hero.tag3} delay={650} />
                <span className="inline-flex items-center text-[var(--accent-2)] self-center">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="hero-spin sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px]">
                    <path
                      d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="font-light italic-display">
                  <WordReveal text={t.hero.tag4} delay={850} />
                </span>
              </div>
            </h1>

            <p
              className="mt-7 md:mt-9 max-w-xl text-[15px] md:text-[16.5px] text-[var(--muted)] leading-[1.65] reveal-fade"
              style={{ animationDelay: "1100ms" }}
            >
              {t.hero.sub}
            </p>

            <div
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 reveal-fade"
              style={{ animationDelay: "1250ms" }}
            >
              <a href="#work" className="cta-primary group">
                <span>{t.hero.cta1}</span>
                <span className="cta-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </a>
              <a href="#ai" className="cta-secondary group">
                <Sparkles size={14} className="text-[var(--accent-2)]" />
                <span>{t.hero.cta2}</span>
              </a>
            </div>

            <div
              className="mt-8 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-4 max-w-2xl reveal-fade"
              style={{ animationDelay: "1400ms" }}
            >
              {stats.map((s) => (
                <div key={s.v} className="border-t border-[var(--border)] pt-3">
                  <div className="font-display text-2xl md:text-[28px] font-medium tracking-tight text-[var(--text)]">
                    {s.k}
                  </div>
                  <div className="mt-0.5 text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--muted)]">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="lg:col-span-5 xl:col-span-5 relative order-1 lg:order-2">
            <div className="relative mx-auto lg:mx-0 max-w-[360px] md:max-w-[440px] lg:max-w-none lg:ms-auto">
              <div
                ref={portraitRef}
                className="portrait-stack relative aspect-[4/5]"
                style={{ transition: "transform 0.6s cubic-bezier(.2,.8,.2,1)" }}
              >
                <div className="absolute -inset-3 md:-inset-5 border border-[var(--border)] rounded-[2px] portrait-frame" />
                <div className="absolute -inset-1 md:-inset-2 border border-[var(--border-strong)] rounded-[2px]" />

                <div className="relative h-full w-full overflow-hidden bg-[var(--surface-2)] portrait-clip">
                  <Image
                    src="/assets/pini.jpeg"
                    alt="Pini Shteren"
                    fill
                    className="object-cover portrait-img"
                    priority
                  />
                  <div className="absolute inset-0 portrait-tone pointer-events-none" />
                  <div className="absolute inset-0 portrait-grain pointer-events-none mix-blend-overlay opacity-40" />
                </div>

                <div className="absolute -bottom-2 md:-bottom-3 start-2 md:start-4 bg-[var(--bg)] border border-[var(--border)] px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-[0.14em] text-[var(--muted)]">
                  P.S — 24
                </div>

                <span className="corner-tick top-0 start-0" />
                <span className="corner-tick top-0 end-0" style={{ transform: "scaleX(-1)" }} />
                <span className="corner-tick bottom-0 start-0" style={{ transform: "scaleY(-1)" }} />
                <span className="corner-tick bottom-0 end-0" style={{ transform: "scale(-1,-1)" }} />
              </div>

              <div className="absolute -top-4 -end-2 md:-end-6 rotate-[3deg] bg-[var(--bg)] border border-[var(--border)] px-3 py-2 shadow-soft hidden sm:block">
                <div className="text-[9.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
                  Available
                </div>
                <div className="font-display text-[13px] font-semibold tracking-tight text-[var(--text)]">
                  {t.hero.meta.since}
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-10 md:-bottom-12 end-0 max-w-[180px] text-end">
                <div className="text-[10.5px] font-mono italic text-[var(--muted)] leading-snug">
                  {t.hero.caption}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 md:bottom-6 start-5 md:start-10 hidden md:flex items-center gap-3 text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
          <span className="inline-block h-8 w-px bg-[var(--border-strong)] scroll-line" />
          <span>{t.hero.scroll}</span>
        </div>
      </div>
    </section>
  );
}
