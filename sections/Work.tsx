"use client";

import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Gauge, Info } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

/* ─── Mock UI panels ──────────────────────────────────────────── */

function MockRealtime() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 overflow-hidden" dir="ltr">
      <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)] shrink-0">
        <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
        socket.io · live
        <span className="ms-auto text-[var(--muted-2)]">412ms</span>
      </div>
      {/* Bar chart — inline rgba avoids Tailwind JIT CSS-var opacity bug */}
      <div className="grid grid-cols-8 gap-1 items-end" style={{ height: 56 }}>
        {Array.from({ length: 48 }).map((_, i) => {
          const h = 10 + ((i * 17) % 46);
          return (
            <div
              key={i}
              className="rounded-sm"
              style={{
                height: h,
                background: "linear-gradient(to top, rgba(212,165,116,0.55), rgba(107,155,209,0.35))",
              }}
            />
          );
        })}
      </div>
      <div className="mt-auto shrink-0 rounded border border-[var(--border)] bg-[var(--surface-2)] p-2.5 font-mono text-[10.5px] text-[var(--muted)] leading-relaxed">
        <div>
          <span className="text-[var(--muted-2)]">→</span> ws://api/stream{" "}
          <span className="text-emerald-400">200</span>
        </div>
        <div>
          <span className="text-[var(--muted-2)]">←</span> tick #11824 · 0.39s
        </div>
      </div>
    </div>
  );
}

function MockRBAC() {
  const roles = ["admin", "manager", "trainer", "trainee", "viewer"];
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 overflow-hidden" dir="ltr">
      <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)] shrink-0">
        <ShieldCheck size={12} />
        permissions · 5 roles
      </div>
      <div className="space-y-1.5 mt-1 flex-1">
        {roles.map((r, i) => (
          <div key={r} className="flex items-center gap-2">
            <div className="w-14 text-[10px] font-mono text-[var(--muted-2)] truncate">{r}</div>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  width: `${20 + i * 18}%`,
                  background: "linear-gradient(to right, rgba(107,155,209,0.8), rgba(212,165,116,0.8))",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="shrink-0 rounded border border-[var(--border)] bg-[var(--surface-2)] p-2.5 font-mono text-[10.5px] text-[var(--muted)]">
        <span className="text-[var(--muted-2)]">if</span> user.can(
        <span style={{ color: "rgba(107,155,209,0.9)" }}>&quot;edit&quot;</span>)
      </div>
    </div>
  );
}

function MockPerf() {
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2 overflow-hidden" dir="ltr">
      <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)] shrink-0">
        <Gauge size={12} />
        lighthouse
      </div>
      <div className="flex items-center gap-4 mt-1 shrink-0">
        <div className="relative h-16 w-16 shrink-0">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15.9" stroke="rgba(255,255,255,0.07)" strokeWidth="2.5" fill="none" />
            <circle
              cx="18" cy="18" r="15.9" stroke="url(#pg)" strokeWidth="2.5" fill="none"
              strokeDasharray="100" strokeDashoffset="15" strokeLinecap="round"
            />
            <defs>
              <linearGradient id="pg">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-semibold text-[var(--text)]">
            85
          </div>
        </div>
        <div className="text-[10.5px] font-mono text-[var(--muted)] space-y-0.5">
          <div>FCP <span className="text-[var(--text-2)]">1.2s</span></div>
          <div>TBT <span className="text-[var(--text-2)]">90ms</span></div>
          <div>CLS <span className="text-[var(--text-2)]">0.02</span></div>
        </div>
      </div>
      <div className="mt-auto h-10 relative shrink-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 36" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pg2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path d="M0 28 L40 26 L80 20 L120 13 L160 8 L200 5" stroke="url(#pg2)" strokeWidth="1.5" fill="none" />
          <path d="M0 28 L40 26 L80 20 L120 13 L160 8 L200 5 L200 36 L0 36Z" fill="url(#pg2)" opacity="0.12" />
        </svg>
      </div>
    </div>
  );
}

const Mocks = [MockRealtime, MockRBAC, MockPerf];
const slugs = ["realtime", "access", "performance"];

/* background tints — hardcoded rgba so they always render */
const accentStyles: React.CSSProperties[] = [
  { background: "linear-gradient(135deg, rgba(212,165,116,0.12) 0%, rgba(212,165,116,0.03) 50%, transparent 100%)" },
  { background: "linear-gradient(135deg, rgba(107,155,209,0.12) 0%, rgba(107,155,209,0.03) 50%, transparent 100%)" },
  { background: "linear-gradient(135deg, rgba(52,211,153,0.10) 0%, rgba(52,211,153,0.03) 50%, transparent 100%)" },
];

export default function Work() {
  const { t } = useApp();

  return (
    <section id="work" className="relative py-16 md:py-24 lg:py-36 border-t border-[var(--border)]">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{t.work.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-medium tracking-[-0.025em] text-[var(--text)] text-[26px] sm:text-[34px] md:text-[48px] xl:text-[60px] leading-[1.05]">
                {t.work.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={120}>
              <p className="text-[13px] font-mono text-[var(--muted)] flex items-center gap-2">
                <Info size={12} />
                {t.work.sub}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          {t.work.cases.map((c, i) => {
            const Mock = Mocks[i];
            const reverse = i % 2 === 1;
            return (
              <Reveal key={c.title} delay={i * 80}>
                <Link href={`/work/${slugs[i]}`} className="block group">
                  <article className="relative overflow-hidden border border-[var(--border)] bg-[var(--bg)] grid lg:grid-cols-12 hover:border-[var(--border-strong)] transition-colors cursor-pointer">
                    {/* Mock panel */}
                    <div
                      className={`relative h-44 sm:h-52 lg:h-auto lg:col-span-5 overflow-hidden ${
                        reverse ? "lg:order-2" : ""
                      } border-b lg:border-b-0 ${
                        reverse ? "lg:border-s" : "lg:border-e"
                      } border-[var(--border)]`}
                      style={accentStyles[i]}
                    >
                      <div className="absolute inset-0 hero-grid opacity-30" />
                      <Mock />
                    </div>

                    {/* Text content */}
                    <div
                      className={`p-6 md:p-10 lg:col-span-7 flex flex-col min-h-0 ${reverse ? "lg:order-1" : ""}`}
                    >
                      <div className="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
                        <span>{c.tag}</span>
                        <ArrowUpRight
                          size={14}
                          className="text-[var(--muted)] group-hover:text-[var(--text)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                        />
                      </div>
                      <h3 className="mt-4 font-display text-xl sm:text-2xl md:text-[30px] xl:text-[38px] font-medium tracking-[-0.02em] text-[var(--text)] leading-[1.1]">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-[14px] md:text-[15px] text-[var(--muted)] leading-relaxed max-w-xl">
                        {c.desc}
                      </p>

                      {/* Metrics */}
                      <div className="mt-auto pt-6 grid grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
                        {c.metrics.map((m) => (
                          <div key={m.v} className="bg-[var(--bg)] p-3 md:p-4 overflow-hidden">
                            <div className="font-display text-base md:text-xl font-medium tracking-tight text-[var(--text)] truncate">
                              {m.k}
                            </div>
                            <div className="mt-0.5 text-[9.5px] md:text-[10.5px] font-mono uppercase tracking-[0.1em] text-[var(--muted)] truncate">
                              {m.v}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
