"use client";

import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{t.about.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-medium tracking-[-0.025em] text-[var(--text)] text-[34px] md:text-[52px] xl:text-[60px] leading-[1.02]">
                {t.about.title}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            <Reveal delay={140}>
              <div className="space-y-5 text-[15.5px] md:text-[17px] text-[var(--muted)] leading-[1.7] max-w-2xl">
                {t.about.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "first-letter-display" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
                {t.about.facts.map((f) => (
                  <div key={f.v} className="border-t border-[var(--text)] pt-3">
                    <div className="font-display text-[28px] md:text-[34px] font-medium tracking-tight text-[var(--text)]">
                      {f.k}
                    </div>
                    <div className="mt-1 text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--muted)]">
                      {f.v}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
