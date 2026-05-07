"use client";

import { useState } from "react";
import Link from "next/link";

type Role = "admin" | "manager" | "trainer" | "trainee" | "viewer";

const ROLES: Role[] = ["admin", "manager", "trainer", "trainee", "viewer"];

const INITIAL_FEATURES: { name: string; description: string; roles: Record<Role, boolean> }[] = [
  { name: "Manage users", description: "Create, edit and deactivate user accounts", roles: { admin: true, manager: true, trainer: false, trainee: false, viewer: false } },
  { name: "View analytics", description: "Access usage metrics and performance reports", roles: { admin: true, manager: true, trainer: true, trainee: false, viewer: false } },
  { name: "Start session", description: "Launch live training sessions", roles: { admin: true, manager: true, trainer: true, trainee: false, viewer: false } },
  { name: "Join session", description: "Participate in a training session", roles: { admin: true, manager: true, trainer: true, trainee: true, viewer: false } },
  { name: "Edit content", description: "Modify drills, programs and media", roles: { admin: true, manager: false, trainer: true, trainee: false, viewer: false } },
  { name: "Export data", description: "Download reports as CSV/PDF", roles: { admin: true, manager: true, trainer: false, trainee: false, viewer: false } },
  { name: "View live feed", description: "Watch real-time session activity", roles: { admin: true, manager: true, trainer: true, trainee: true, viewer: true } },
];

const ROLE_COUNTS: Record<Role, number> = { admin: 3, manager: 8, trainer: 24, trainee: 212, viewer: 47 };

const ROLE_COLORS: Record<Role, { bg: string; text: string; border: string }> = {
  admin: { bg: "#fef3c7", text: "#92400e", border: "#fcd34d" },
  manager: { bg: "#ede9fe", text: "#5b21b6", border: "#c4b5fd" },
  trainer: { bg: "#dbeafe", text: "#1e40af", border: "#93c5fd" },
  trainee: { bg: "#dcfce7", text: "#166534", border: "#86efac" },
  viewer: { bg: "#f1f5f9", text: "#475569", border: "#cbd5e1" },
};

export default function AccessPage() {
  const [features, setFeatures] = useState(INITIAL_FEATURES);
  const [selected, setSelected] = useState<Role>("trainer");

  function toggle(fi: number, role: Role) {
    setFeatures((prev) =>
      prev.map((f, i) => i === fi ? { ...f, roles: { ...f.roles, [role]: !f.roles[role] } } : f)
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#f8fafc", color: "#0f172a", minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e2e8f0", background: "#ffffff", padding: "0 24px", display: "flex", alignItems: "center", height: 56, gap: 28, position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: "auto" }}>
          <div style={{ width: 28, height: 28, background: "#4f46e5", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff" }}>A</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", letterSpacing: "-0.01em" }}>AccessOS</span>
        </div>
        {["Roles", "Features", "Users", "Audit log"].map((n) => (
          <a key={n} href="#" style={{ fontSize: 13, color: n === "Features" ? "#4f46e5" : "#64748b", fontWeight: n === "Features" ? 600 : 400, textDecoration: "none", borderBottom: n === "Features" ? "2px solid #4f46e5" : "2px solid transparent", paddingBottom: 2 }}>
            {n}
          </a>
        ))}
        <Link href="/" style={{ marginLeft: "auto", fontSize: 12, color: "#64748b", textDecoration: "none", padding: "6px 12px", border: "1px solid #e2e8f0", borderRadius: 6 }}>
          ← Back to portfolio
        </Link>
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 4px", letterSpacing: "-0.02em" }}>Feature Permissions</h1>
          <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>Manage which roles can access each feature. Changes are applied immediately.</p>
        </div>

        {/* Role summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
          {ROLES.map((r) => {
            const c = ROLE_COLORS[r];
            const isSelected = selected === r;
            return (
              <button key={r} onClick={() => setSelected(r)}
                style={{ background: isSelected ? c.bg : "#fff", border: `1.5px solid ${isSelected ? c.border : "#e2e8f0"}`, borderRadius: 8, padding: "12px 14px", cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: isSelected ? c.text : "#94a3b8", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>{r}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: isSelected ? c.text : "#0f172a", letterSpacing: "-0.03em" }}>{ROLE_COUNTS[r]}</div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>users</div>
              </button>
            );
          })}
        </div>

        {/* Permission matrix */}
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(5, 80px)", borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
            <div style={{ padding: "12px 20px", fontSize: 12, fontWeight: 600, color: "#64748b" }}>Feature</div>
            {ROLES.map((r) => {
              const c = ROLE_COLORS[r];
              return (
                <div key={r} style={{ padding: "10px 8px", textAlign: "center" }}>
                  <span style={{ fontSize: 10.5, fontWeight: 600, color: c.text, background: c.bg, padding: "2px 8px", borderRadius: 10, border: `1px solid ${c.border}` }}>{r}</span>
                </div>
              );
            })}
          </div>

          {features.map((f, fi) => (
            <div key={f.name} style={{ display: "grid", gridTemplateColumns: "1fr repeat(5, 80px)", borderBottom: "1px solid #f1f5f9", transition: "background 0.1s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafa")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
              <div style={{ padding: "14px 20px" }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, color: "#0f172a" }}>{f.name}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{f.description}</div>
              </div>
              {ROLES.map((r) => (
                <div key={r} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <button onClick={() => toggle(fi, r)}
                    style={{ width: 36, height: 20, borderRadius: 10, background: f.roles[r] ? "#4f46e5" : "#e2e8f0", border: "none", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
                    <span style={{ position: "absolute", top: 2, left: f.roles[r] ? 18 : 2, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 2px rgba(0,0,0,0.2)" }} />
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Info bar */}
        <div style={{ background: "#ede9fe", border: "1px solid #c4b5fd", borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 13, color: "#5b21b6" }}>
            <strong>Tip:</strong> Click any toggle to instantly update permissions. All changes are version-controlled and reflected in the audit log.
          </span>
          <button style={{ marginLeft: "auto", fontSize: 12, padding: "6px 14px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}>
            Publish changes
          </button>
        </div>
      </div>
    </div>
  );
}
