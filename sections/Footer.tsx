"use client";

import { ArrowUpRight, Linkedin } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Footer() {
  const { t, lang } = useApp();

  return (
    <footer
      id="contact"
      className="relative pt-16 md:pt-24 lg:pt-36 pb-10 border-t border-[var(--border)] overflow-hidden"
    >
      <div className="absolute inset-0 hero-glow opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-medium tracking-[-0.03em] text-[var(--text)] text-[30px] sm:text-[48px] md:text-[72px] xl:text-[112px] leading-[1.0] md:leading-[0.95]">
                {t.contact.titleA}{" "}
                <span className="italic-display font-light bg-gradient-to-br from-[var(--accent-2)] to-[var(--accent-3)] bg-clip-text text-transparent">
                  {t.contact.titleB}
                </span>{" "}
                {t.contact.titleC}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-lg text-[15.5px] md:text-[16.5px] text-[var(--muted)] leading-relaxed">
                {t.contact.sub}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:pt-2">
            <Reveal delay={200}>
              <a
                href={`mailto:${t.contact.links.email}`}
                className="block border border-[var(--border)] hover:border-[var(--text)] transition-colors p-6 group"
              >
                <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                  {t.contact.emailLabel}
                </div>
                <div
                  className="font-display text-[20px] md:text-[22px] font-medium text-[var(--text)] flex items-center gap-2 break-all"
                  dir="ltr"
                >
                  {t.contact.links.email}
                  <ArrowUpRight
                    size={18}
                    className="ms-auto shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </a>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${t.contact.links.phone.replace(/[^\d+]/g, "")}`}
                  className="border border-[var(--border)] hover:border-[var(--text)] p-4 transition-colors"
                >
                  <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--muted)]">
                    Phone
                  </div>
                  <div className="mt-1 text-[13px] text-[var(--text)] font-mono" dir="ltr">
                    {t.contact.links.phone}
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/pini-shteren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--border)] hover:border-[var(--text)] p-4 transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--muted)]">
                      Social
                    </div>
                    <div className="mt-1 text-[13px] text-[var(--text)]">LinkedIn</div>
                  </div>
                  <Linkedin size={16} className="text-[var(--muted)]" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Massive signature */}
        <div className="mt-20 md:mt-28 overflow-hidden">
          <div
            className="font-display font-medium tracking-[-0.04em] text-[var(--text)] leading-[0.85] text-[13vw] sm:text-[16vw] md:text-[19vw] sig-fill"
            dir="ltr"
          >
            PINI
            <span className="italic-display font-light text-[var(--muted-2)]">.</span>
            SHTEREN
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between text-[11px] font-mono text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
            {t.contact.footer}
          </div>
          <div>{lang === "he" ? "ישראל · UTC+3" : "Israel · UTC+3"}</div>
        </div>
      </div>
    </footer>
  );
}
