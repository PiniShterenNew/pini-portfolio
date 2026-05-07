"use client";

import { ArrowUpRight, ShieldCheck, Gauge, Info } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

function MockRealtime() {
  return (
    <div className="absolute inset-0 p-5 flex flex-col gap-3" dir="ltr">
      <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)]">
        <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
        socket.io · live
        <span className="ms-auto text-[var(--muted-2)]">412ms</span>
      </div>
      <div className="grid grid-cols-8 gap-1 mt-1">
        {Array.from({ length: 48 }).map((_, i) => {
          const h = 10 + ((i * 17) % 32);
          return (
            <div
              key={i}
              className="rounded-sm bg-gradient-to-t from-[var(--accent-2)]/40 to-[var(--accent-3)]/30"
              style={{ height: h }}
            />
          );
        })}
      </div>
      <div className="mt-auto rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 font-mono text-[11px] text-[var(--muted)] leading-relaxed">
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
    <div className="absolute inset-0 p-5 flex flex-col gap-3" dir="ltr">
      <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)]">
        <ShieldCheck size={12} />
        permissions · 5 roles
      </div>
      <div className="space-y-1.5 mt-1">
        {roles.map((r, i) => (
          <div key={r} className="flex items-center gap-2">
            <div className="w-16 text-[10.5px] font-mono text-[var(--muted-2)] truncate">{r}</div>
            <div className="flex-1 h-2 bg-[var(--surface-2)] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[var(--accent-3)]/70 to-[var(--accent-2)]/70"
                style={{ width: `${20 + i * 18}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 font-mono text-[11px] text-[var(--muted)]">
        <div>
          <span className="text-[var(--muted-2)]">if</span> user.can(
          <span className="text-[var(--accent-3)]">&quot;edit&quot;</span>)
        </div>
      </div>
    </div>
  );
}

function MockPerf() {
  return (
    <div className="absolute inset-0 p-5 flex flex-col gap-3" dir="ltr">
      <div className="flex items-center gap-2 text-[11px] font-mono text-[var(--muted)]">
        <Gauge size={12} />
        lighthouse
      </div>
      <div className="flex items-center gap-5 mt-1">
        <div className="relative h-20 w-20">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15.9" stroke="var(--surface-2)" strokeWidth="2.5" fill="none" />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              stroke="url(#perfg)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset="15"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="perfg">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display text-xl font-semibold text-[var(--text)]">
            85
          </div>
        </div>
        <div className="text-[11px] font-mono text-[var(--muted)]">
          <div>
            FCP <span className="text-[var(--text-2)]">1.2s</span>
          </div>
          <div>
            TBT <span className="text-[var(--text-2)]">90ms</span>
          </div>
          <div>
            CLS <span className="text-[var(--text-2)]">0.02</span>
          </div>
        </div>
      </div>
      <div className="mt-auto h-12 relative">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
          <path
            d="M0 30 L 40 28 L 80 22 L 120 14 L 160 9 L 200 6"
            stroke="url(#perfg2)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 30 L 40 28 L 80 22 L 120 14 L 160 9 L 200 6 L 200 40 L 0 40 Z"
            fill="url(#perfg2)"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="perfg2">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const Mocks = [MockRealtime, MockRBAC, MockPerf];
const accents = [
  "from-[var(--accent-2)]/15 via-[var(--accent-2)]/5",
  "from-[var(--accent-3)]/15 via-[var(--accent-3)]/5",
  "from-emerald-400/12 via-emerald-400/5",
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
                <article className="group relative overflow-hidden border border-[var(--border)] bg-[var(--bg)] grid lg:grid-cols-12 hover:border-[var(--border-strong)] transition-colors">
                  <div
                    className={`relative h-44 sm:h-52 lg:h-auto lg:col-span-5 ${
                      reverse ? "lg:order-2" : ""
                    } border-b lg:border-b-0 ${
                      reverse ? "lg:border-s" : "lg:border-e"
                    } border-[var(--border)] bg-gradient-to-br ${accents[i]} to-transparent`}
                  >
                    <div className="absolute inset-0 hero-grid opacity-40" />
                    <Mock />
                  </div>
                  <div
                    className={`p-6 md:p-10 lg:col-span-7 flex flex-col ${reverse ? "lg:order-1" : ""}`}
                  >
                    <div className="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
                      <span>{c.tag}</span>
                      <ArrowUpRight
                        size={14}
                        className="text-[var(--muted)] group-hover:text-[var(--text)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-xl sm:text-2xl md:text-[34px] xl:text-[40px] font-medium tracking-[-0.02em] text-[var(--text)] leading-[1.1]">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-[14.5px] md:text-[15.5px] text-[var(--muted)] leading-relaxed max-w-xl">
                      {c.desc}
                    </p>
                    <div className="mt-auto pt-7 grid grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
                      {c.metrics.map((m) => (
                        <div key={m.v} className="bg-[var(--bg)] p-3 md:p-4">
                          <div className="font-display text-lg md:text-2xl font-medium tracking-tight text-[var(--text)]">
                            {m.k}
                          </div>
                          <div className="mt-1 text-[10.5px] font-mono uppercase tracking-[0.12em] text-[var(--muted)] truncate">
                            {m.v}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
