"use client";

import { MapPin } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Experience() {
  const { t } = useApp();

  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 lg:py-36 border-t border-[var(--border)] bg-[var(--surface-0)]"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{t.experience.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-medium tracking-[-0.025em] text-[var(--text)] text-[26px] sm:text-[34px] md:text-[48px] leading-[1.05]">
                {t.experience.title}
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-[var(--border)]">
          {t.experience.entries.map((e, i) => (
            <Reveal key={e.org} delay={i * 100}>
              <div className="group grid lg:grid-cols-12 gap-6 lg:gap-8 py-8 md:py-12 border-b border-[var(--border)] hover:bg-[var(--surface-1)] transition-colors px-3 md:px-6 -mx-3 md:-mx-6">
                <div className="lg:col-span-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {e.time}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-[var(--muted-2)] flex items-center gap-1.5">
                    <MapPin size={11} />
                    {e.where}
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-display text-xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--text)]">
                      {e.org}
                    </h3>
                    <span className="text-[var(--muted)] text-[14px] md:text-[15px]">
                      — {e.role}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5 max-w-3xl">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[14px] md:text-[15px] text-[var(--muted)] leading-[1.65]">
                        <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent-2)]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
