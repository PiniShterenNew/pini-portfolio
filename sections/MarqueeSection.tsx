"use client";

import { useApp } from "@/contexts/AppContext";

export default function MarqueeSection() {
  const { t } = useApp();
  const items = [...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <section className="relative py-6 md:py-8 border-y border-[var(--border)] overflow-hidden bg-[var(--surface-0)]">
      <div className="marquee-track flex gap-10 md:gap-14 whitespace-nowrap">
        {items.map((w, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 md:gap-14 text-[var(--muted)] font-display text-2xl md:text-3xl tracking-tight"
          >
            <span className="font-light italic-display">{w}</span>
            <span className="text-[var(--accent-2)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
