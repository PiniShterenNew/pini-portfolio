"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const USERS = [
  { name: "Roei K.", role: "Trainer", status: "active", sessions: 3 },
  { name: "Noa S.", role: "Trainee", status: "active", sessions: 1 },
  { name: "Amit D.", role: "Manager", status: "idle", sessions: 0 },
  { name: "Liran M.", role: "Trainee", status: "active", sessions: 2 },
  { name: "Hila R.", role: "Trainer", status: "active", sessions: 4 },
  { name: "Yoni P.", role: "Trainee", status: "idle", sessions: 1 },
];

function useTick() {
  const [tick, setTick] = useState(11824);
  const [latency, setLatency] = useState(390);
  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setLatency(Math.floor(320 + Math.random() * 180));
    }, 1800);
    return () => clearInterval(id);
  }, []);
  return { tick, latency };
}

function useBarData() {
  const [bars, setBars] = useState(() => Array.from({ length: 24 }, (_, i) => 20 + ((i * 13) % 60)));
  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => [...prev.slice(1), Math.floor(15 + Math.random() * 65)]);
    }, 1200);
    return () => clearInterval(id);
  }, []);
  return bars;
}

export default function RealtimePage() {
  const { tick, latency } = useTick();
  const bars = useBarData();
  const [activeNav, setActiveNav] = useState("live");

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#070d1a", color: "#e2e8f0", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "#0b1221", padding: "0 24px", display: "flex", alignItems: "center", height: 56, gap: 32, position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: "auto" }}>
          <div style={{ width: 28, height: 28, background: "#0ea5e9", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff" }}>C</div>
          <span style={{ fontWeight: 600, fontSize: 15, color: "#f1f5f9", letterSpacing: "-0.01em" }}>Cinten</span>
          <span style={{ fontSize: 11, color: "#64748b", marginLeft: 4, fontWeight: 400 }}>Platform</span>
        </div>
        {["live", "sessions", "analytics", "settings"].map((n) => (
          <button key={n} onClick={() => setActiveNav(n)}
            style={{ fontSize: 13, fontWeight: 500, color: activeNav === n ? "#0ea5e9" : "#64748b", background: "none", border: "none", cursor: "pointer", paddingBottom: 2, borderBottom: activeNav === n ? "2px solid #0ea5e9" : "2px solid transparent", textTransform: "capitalize" }}>
            {n}
          </button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />
          <span style={{ fontSize: 12, color: "#94a3b8" }}>WebSocket connected</span>
        </div>
        <Link href="/" style={{ fontSize: 12, color: "#64748b", textDecoration: "none", padding: "6px 12px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4 }}>
          ← Back to portfolio
        </Link>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 0, height: "calc(100vh - 56px)" }}>
        {/* Sidebar */}
        <aside style={{ borderRight: "1px solid rgba(255,255,255,0.07)", background: "#0b1221", padding: "20px 0", overflowY: "auto" }}>
          <div style={{ padding: "0 16px 12px", fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase" }}>Connected now</div>
          {USERS.map((u) => (
            <div key={u.name} style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: u.status === "active" ? "rgba(14,165,233,0.25)" : "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: u.status === "active" ? "#7dd3fc" : "#475569", flexShrink: 0 }}>
                {u.name[0]}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: 500, color: "#e2e8f0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{u.name}</div>
                <div style={{ fontSize: 11, color: "#64748b" }}>{u.role}</div>
              </div>
              {u.status === "active" && <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />}
            </div>
          ))}

          <div style={{ margin: "16px 0", borderTop: "1px solid rgba(255,255,255,0.07)" }} />
          <div style={{ padding: "0 16px 8px", fontSize: 10, fontWeight: 600, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase" }}>Stats</div>
          {[
            { label: "Active sessions", value: "247" },
            { label: "Avg latency", value: `${latency}ms` },
            { label: "Events / min", value: "1,842" },
          ].map((s) => (
            <div key={s.label} style={{ padding: "8px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#64748b" }}>{s.label}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9", fontVariantNumeric: "tabular-nums" }}>{s.value}</span>
            </div>
          ))}
        </aside>

        {/* Main */}
        <main style={{ padding: 24, overflowY: "auto", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#f1f5f9", margin: 0, letterSpacing: "-0.02em" }}>Live Activity</h1>
              <p style={{ fontSize: 13, color: "#64748b", margin: "4px 0 0" }}>Real-time WebSocket stream · tick #{tick}</p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ fontSize: 12, padding: "8px 14px", borderRadius: 6, background: "rgba(14,165,233,0.12)", color: "#38bdf8", border: "1px solid rgba(14,165,233,0.25)", cursor: "pointer" }}>Export</button>
              <button style={{ fontSize: 12, padding: "8px 14px", borderRadius: 6, background: "#0ea5e9", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600 }}>+ New session</button>
            </div>
          </div>

          {/* Metric cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
            {[
              { label: "Active users", value: "247", delta: "+12", up: true },
              { label: "Avg latency", value: `${latency}ms`, delta: `< 1s`, up: true },
              { label: "Events/min", value: "1,842", delta: "↑ 8%", up: true },
              { label: "Error rate", value: "0.02%", delta: "↓ stable", up: true },
            ].map((m) => (
              <div key={m.label} style={{ background: "#0b1221", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "16px 18px" }}>
                <div style={{ fontSize: 11.5, color: "#64748b", marginBottom: 8 }}>{m.label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#f1f5f9", letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>{m.value}</div>
                <div style={{ fontSize: 11, color: "#22c55e", marginTop: 4 }}>{m.delta}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div style={{ background: "#0b1221", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "16px 18px" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", marginBottom: 14 }}>Event throughput (last 24s)</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 72 }}>
              {bars.map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${(h / 80) * 100}%`, borderRadius: "2px 2px 0 0", background: i === bars.length - 1 ? "#0ea5e9" : `rgba(14,165,233,${0.25 + (h / 80) * 0.45})`, transition: "height 0.4s ease" }} />
              ))}
            </div>
          </div>

          {/* Live feed */}
          <div style={{ background: "#0b1221", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "16px 18px", flexGrow: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 5px #22c55e" }} />
              Live event stream
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.8 }}>
              {[
                { t: `00:${String(Math.floor(latency / 100)).padStart(2, "0")}`, e: "TRAINEE_ACTION", u: "Noa S.", d: "completed drill #7", c: "#22c55e" },
                { t: "00:04", e: "SOCKET_TICK", u: "server", d: `tick #${tick} dispatched to 247 clients`, c: "#0ea5e9" },
                { t: "00:09", e: "SESSION_START", u: "Roei K.", d: "opened session 'Sprint training'", c: "#a78bfa" },
                { t: "00:11", e: "TRAINEE_ACTION", u: "Liran M.", d: "paused at 00:02:34", c: "#22c55e" },
                { t: "00:14", e: "SOCKET_TICK", u: "server", d: `tick #${tick - 1} dispatched to 247 clients`, c: "#0ea5e9" },
                { t: "00:18", e: "AUTH_REFRESH", u: "Amit D.", d: "JWT refreshed silently", c: "#64748b" },
              ].map((ev, i) => (
                <div key={i} style={{ display: "flex", gap: 12, padding: "3px 0", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                  <span style={{ color: "#475569", minWidth: 36 }}>{ev.t}</span>
                  <span style={{ color: ev.c, minWidth: 120 }}>{ev.e}</span>
                  <span style={{ color: "#64748b", minWidth: 60 }}>{ev.u}</span>
                  <span style={{ color: "#94a3b8" }}>{ev.d}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
