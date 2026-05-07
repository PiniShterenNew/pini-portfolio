"use client";

import { LayoutPanelTop, Radio, Terminal } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const icons = [LayoutPanelTop, Radio, Terminal];

export default function Stack() {
  const { t } = useApp();

  return (
    <section id="stack" className="relative py-16 md:py-24 lg:py-36 border-t border-[var(--border)] bg-[var(--surface-0)]">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{t.stack.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-medium tracking-[-0.025em] text-[var(--text)] text-[26px] sm:text-[34px] md:text-[48px] leading-[1.05]">
                {t.stack.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <Reveal delay={120}>
              <p className="text-[15.5px] md:text-[16.5px] text-[var(--muted)] leading-relaxed">
                {t.stack.sub}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {t.stack.groups.map((g, i) => {
            const IconComp = icons[i];
            return (
              <Reveal key={g.title} delay={i * 100}>
                <div className="group relative bg-[var(--bg)] p-6 md:p-8 h-full hover:bg-[var(--surface-1)] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-[var(--border-strong)] text-[var(--text)] group-hover:rotate-12 transition-transform">
                      <IconComp size={18} />
                    </div>
                    <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-[var(--muted-2)]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl md:text-2xl font-medium tracking-tight text-[var(--text)]">
                    {g.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="border border-[var(--border)] bg-[var(--surface-1)] px-2.5 py-1 text-[12.5px] text-[var(--text-2)] font-mono"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
