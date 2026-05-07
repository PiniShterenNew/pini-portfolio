"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export default function MobileCTA() {
  const { t } = useApp();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-3 inset-x-3 z-40 transition-all safe-bottom ${
        show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 border border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl p-2 shadow-xl shadow-black/20">
        <a
          href="#ai"
          className="flex-1 inline-flex items-center justify-center gap-1.5 border border-[var(--border)] bg-[var(--surface-1)] text-[var(--text)] px-3 py-2.5 text-[12px] font-mono uppercase tracking-[0.14em] font-medium"
        >
          <Sparkles size={13} className="text-[var(--accent-2)]" />
          AI
        </a>
        <a
          href="mailto:pini5192@gmail.com"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[var(--accent)] text-[var(--accent-fg)] px-3 py-2.5 text-[12px] font-mono uppercase tracking-[0.14em] font-medium"
        >
          {t.nav.getInTouch}
        </a>
      </div>
    </div>
  );
}
