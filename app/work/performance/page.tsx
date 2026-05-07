"use client";

import { useState } from "react";
import Link from "next/link";

const HISTORY = [55, 58, 56, 61, 67, 63, 70, 72, 75, 79, 82, 85];
const MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];

const BUNDLES = [
  { name: "vendor.js", before: 412, after: 268, color: "#818cf8" },
  { name: "main.js", before: 188, after: 124, color: "#34d399" },
  { name: "ui.js", before: 96, after: 58, color: "#f59e0b" },
  { name: "utils.js", before: 44, after: 30, color: "#60a5fa" },
  { name: "icons.js", before: 38, after: 16, color: "#f472b6" },
];

const AUDITS = [
  { label: "Performance", score: 85, icon: "⚡" },
  { label: "Accessibility", score: 94, icon: "♿" },
  { label: "Best Practices", score: 92, icon: "✓" },
  { label: "SEO", score: 97, icon: "🔍" },
];

function ScoreGauge({ score, label, icon }: { score: number; label: string; icon: string }) {
  const color = score >= 90 ? "#22c55e" : score >= 70 ? "#f59e0b" : "#ef4444";
  const dash = 100;
  const offset = dash - (score / 100) * dash;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ position: "relative", width: 80, height: 80 }}>
        <svg viewBox="0 0 36 36" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
          <circle cx="18" cy="18" r="15.9" stroke="rgba(255,255,255,0.07)" strokeWidth="2.5" fill="none" />
          <circle cx="18" cy="18" r="15.9" stroke={color} strokeWidth="2.5" fill="none"
            strokeDasharray={dash} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <span style={{ fontSize: 11 }}>{icon}</span>
          <span style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", lineHeight: 1 }}>{score}</span>
        </div>
      </div>
      <span style={{ fontSize: 11, color: "#64748b", textAlign: "center" }}>{label}</span>
    </div>
  );
}

export default function PerformancePage() {
  const [view, setView] = useState<"before" | "after">("after");

  const totalBefore = BUNDLES.reduce((s, b) => s + b.before, 0);
  const totalAfter = BUNDLES.reduce((s, b) => s + b.after, 0);
  const savings = Math.round((1 - totalAfter / totalBefore) * 100);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0a0f1e", color: "#e2e8f0", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "#0d1526", padding: "0 24px", display: "flex", alignItems: "center", height: 56, gap: 24, position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: "auto" }}>
          <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#10b981,#06b6d4)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>P</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#f1f5f9", letterSpacing: "-0.01em" }}>PerfView</span>
          <span style={{ fontSize: 11, color: "#475569", fontFamily: "monospace", marginLeft: 4 }}>v2.4.1</span>
        </div>
        {["Overview", "Bundle", "Vitals", "History"].map((n) => (
          <a key={n} href="#" style={{ fontSize: 13, color: n === "Overview" ? "#10b981" : "#475569", fontWeight: 500, textDecoration: "none" }}>{n}</a>
        ))}
        <Link href="/" style={{ marginLeft: "auto", fontSize: 12, color: "#475569", textDecoration: "none", padding: "6px 12px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4 }}>
          ← Back to portfolio
        </Link>
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 4px", letterSpacing: "-0.02em" }}>Performance Report</h1>
            <p style={{ fontSize: 13, color: "#475569", margin: 0, fontFamily: "monospace" }}>cinten-platform · main · last run 2 min ago</p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button style={{ fontSize: 12, padding: "8px 14px", borderRadius: 6, background: "rgba(16,185,129,0.12)", color: "#10b981", border: "1px solid rgba(16,185,129,0.25)", cursor: "pointer", fontWeight: 600 }}>
              Run audit
            </button>
          </div>
        </div>

        {/* Top row: Lighthouse + bundle summary */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Lighthouse scores */}
          <div style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "20px 24px" }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>Lighthouse Scores</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {AUDITS.map((a) => <ScoreGauge key={a.label} {...a} />)}
            </div>
          </div>

          {/* Bundle size summary */}
          <div style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "20px 24px" }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Bundle Size</div>
            <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: "#475569", marginBottom: 2 }}>Before</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#ef4444", letterSpacing: "-0.04em" }}>{totalBefore}<span style={{ fontSize: 13, fontWeight: 400, color: "#475569", marginLeft: 2 }}>kb</span></div>
              </div>
              <div style={{ fontSize: 28, color: "#334155", alignSelf: "center" }}>→</div>
              <div>
                <div style={{ fontSize: 11, color: "#475569", marginBottom: 2 }}>After</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#10b981", letterSpacing: "-0.04em" }}>{totalAfter}<span style={{ fontSize: 13, fontWeight: 400, color: "#475569", marginLeft: 2 }}>kb</span></div>
              </div>
              <div style={{ marginLeft: "auto", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 8, padding: "8px 14px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: "#10b981", letterSpacing: "-0.04em" }}>−{savings}%</span>
                <span style={{ fontSize: 10, color: "#475569" }}>reduction</span>
              </div>
            </div>
            {/* Toggle */}
            <div style={{ display: "flex", gap: 4, marginBottom: 12, background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: 3, width: "fit-content" }}>
              {(["before", "after"] as const).map((v) => (
                <button key={v} onClick={() => setView(v)}
                  style={{ fontSize: 12, padding: "4px 12px", borderRadius: 4, background: view === v ? "#10b981" : "transparent", color: view === v ? "#fff" : "#64748b", border: "none", cursor: "pointer", fontWeight: view === v ? 600 : 400, textTransform: "capitalize" }}>
                  {v}
                </button>
              ))}
            </div>
            {/* Bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {BUNDLES.map((b) => {
                const val = view === "before" ? b.before : b.after;
                const pct = (val / totalBefore) * 100;
                return (
                  <div key={b.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#64748b", minWidth: 68 }}>{b.name}</span>
                    <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.05)", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: b.color, borderRadius: 4, transition: "width 0.4s ease" }} />
                    </div>
                    <span style={{ fontFamily: "monospace", fontSize: 11, color: "#94a3b8", minWidth: 44, textAlign: "right" }}>{val}kb</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* History chart */}
        <div style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "20px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Lighthouse Score History</div>
            <span style={{ fontSize: 11, fontFamily: "monospace", color: "#10b981" }}>+30 pts over 12 months</span>
          </div>
          <div style={{ position: "relative" }}>
            {/* Y-axis lines */}
            {[50, 60, 70, 80, 90, 100].map((v) => (
              <div key={v} style={{ position: "absolute", left: 0, right: 0, borderTop: "1px solid rgba(255,255,255,0.04)", top: `${((100 - v) / 60) * 120}px` }}>
                <span style={{ fontSize: 9, color: "#334155", fontFamily: "monospace", paddingRight: 4 }}>{v}</span>
              </div>
            ))}
            {/* Chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 0, height: 120, paddingLeft: 24, position: "relative" }}>
              {HISTORY.map((s, i) => {
                const pct = ((s - 50) / 50) * 100;
                const isLast = i === HISTORY.length - 1;
                return (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ fontSize: 9, color: isLast ? "#10b981" : "transparent", fontWeight: 700, fontFamily: "monospace" }}>{s}</div>
                    <div style={{ width: "70%", height: `${pct}%`, background: isLast ? "#10b981" : `rgba(16,185,129,${0.2 + (pct / 100) * 0.4})`, borderRadius: "2px 2px 0 0", minHeight: 3, transition: "height 0.5s", border: isLast ? "1px solid #10b981" : "none" }} />
                  </div>
                );
              })}
            </div>
            {/* X-axis labels */}
            <div style={{ display: "flex", paddingLeft: 24, marginTop: 6 }}>
              {MONTHS.map((m) => (
                <div key={m} style={{ flex: 1, textAlign: "center", fontSize: 9, color: "#334155", fontFamily: "monospace" }}>{m}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Vitals table */}
        <div style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)", fontSize: 11, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Core Web Vitals</div>
          {[
            { metric: "FCP", name: "First Contentful Paint", before: "3.8s", after: "1.2s", pass: true },
            { metric: "LCP", name: "Largest Contentful Paint", before: "5.1s", after: "1.8s", pass: true },
            { metric: "TBT", name: "Total Blocking Time", before: "620ms", after: "90ms", pass: true },
            { metric: "CLS", name: "Cumulative Layout Shift", before: "0.18", after: "0.02", pass: true },
            { metric: "TTI", name: "Time to Interactive", before: "7.2s", after: "2.4s", pass: true },
          ].map((v) => (
            <div key={v.metric} style={{ display: "grid", gridTemplateColumns: "60px 1fr 100px 100px 60px", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)", alignItems: "center" }}>
              <span style={{ fontFamily: "monospace", fontSize: 12, color: "#10b981", fontWeight: 700 }}>{v.metric}</span>
              <span style={{ fontSize: 13, color: "#94a3b8" }}>{v.name}</span>
              <span style={{ fontFamily: "monospace", fontSize: 12, color: "#ef4444", textDecoration: "line-through" }}>{v.before}</span>
              <span style={{ fontFamily: "monospace", fontSize: 12, color: "#10b981", fontWeight: 600 }}>{v.after}</span>
              <span style={{ fontSize: 11, color: "#10b981" }}>✓ Pass</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
