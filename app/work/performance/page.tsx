// Description: performance dashboard mini-site work case, all text from en.json
// Author: Pinchas
// Created with claude.md rules

'use client'

import { useState } from 'react'
import Link from 'next/link'
import content from '@/lib/locales/en.json'

const c = content.workPages.performance

const BUNDLE_COLORS = ['#818cf8', '#34d399', '#f59e0b', '#60a5fa', '#f472b6']
const HISTORY = [55, 58, 56, 61, 67, 63, 70, 72, 75, 79, 82, 85]

function ScoreGauge({ score, label, icon }: { score: number; label: string; icon: string }) {
  const color = score >= 90 ? '#22c55e' : score >= 70 ? '#f59e0b' : '#ef4444'
  const dash = 100
  const offset = dash - (score / 100) * dash
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ position: 'relative', width: 80, height: 80 }}>
        <svg viewBox='0 0 36 36' style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
          <circle cx='18' cy='18' r='15.9' stroke='rgba(255,255,255,0.07)' strokeWidth='2.5' fill='none' />
          <circle cx='18' cy='18' r='15.9' stroke={color} strokeWidth='2.5' fill='none'
            strokeDasharray={dash} strokeDashoffset={offset} strokeLinecap='round' />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <span style={{ fontSize: 11 }}>{icon}</span>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#f1f5f9', lineHeight: 1 }}>{score}</span>
        </div>
      </div>
      <span style={{ fontSize: 11, color: '#64748b', textAlign: 'center' }}>{label}</span>
    </div>
  )
}

export default function PerformancePage() {
  const [view, setView] = useState<'before' | 'after'>('after')

  const totalBefore = c.bundles.reduce((s, b) => s + b.before, 0)
  const totalAfter = c.bundles.reduce((s, b) => s + b.after, 0)
  const savings = Math.round((1 - totalAfter / totalBefore) * 100)

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: '#0a0f1e', color: '#e2e8f0', minHeight: '100vh' }}>
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0d1526', padding: '0 24px', display: 'flex', alignItems: 'center', height: 56, gap: 24, position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 'auto' }}>
          <div style={{ width: 28, height: 28, background: 'linear-gradient(135deg,#10b981,#06b6d4)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>P</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#f1f5f9', letterSpacing: '-0.01em' }}>{c.appName}</span>
          <span style={{ fontSize: 11, color: '#475569', fontFamily: 'monospace', marginLeft: 4 }}>{c.appVersion}</span>
        </div>
        {c.navItems.map((n) => (
          <a key={n} href='#' style={{ fontSize: 13, color: n === c.activeNav ? '#10b981' : '#475569', fontWeight: 500, textDecoration: 'none' }}>{n}</a>
        ))}
        <Link href='/' style={{ marginLeft: 'auto', fontSize: 12, color: '#475569', textDecoration: 'none', padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4 }}>
          {content.workPages.backToPortfolio}
        </Link>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px', letterSpacing: '-0.02em' }}>{c.pageTitle}</h1>
            <p style={{ fontSize: 13, color: '#475569', margin: 0, fontFamily: 'monospace' }}>{c.pageMeta}</p>
          </div>
          <button style={{ fontSize: 12, padding: '8px 14px', borderRadius: 6, background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)', cursor: 'pointer', fontWeight: 600 }}>
            {c.runAuditBtn}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '20px 24px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.lighthouseLabel}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
              {c.audits.map((a) => <ScoreGauge key={a.label} {...a} />)}
            </div>
          </div>

          <div style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '20px 24px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.bundleSizeLabel}</div>
            <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 11, color: '#475569', marginBottom: 2 }}>{c.beforeLabel}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#ef4444', letterSpacing: '-0.04em' }}>{totalBefore}<span style={{ fontSize: 13, fontWeight: 400, color: '#475569', marginLeft: 2 }}>{c.kbUnit}</span></div>
              </div>
              <div style={{ fontSize: 28, color: '#334155', alignSelf: 'center' }}>→</div>
              <div>
                <div style={{ fontSize: 11, color: '#475569', marginBottom: 2 }}>{c.afterLabel}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#10b981', letterSpacing: '-0.04em' }}>{totalAfter}<span style={{ fontSize: 13, fontWeight: 400, color: '#475569', marginLeft: 2 }}>{c.kbUnit}</span></div>
              </div>
              <div style={{ marginLeft: 'auto', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 8, padding: '8px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: '#10b981', letterSpacing: '-0.04em' }}>−{savings}%</span>
                <span style={{ fontSize: 10, color: '#475569' }}>{c.reductionLabel}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 12, background: 'rgba(255,255,255,0.04)', borderRadius: 6, padding: 3, width: 'fit-content' }}>
              {([c.toggleBefore, c.toggleAfter] as const).map((v, idx) => {
                const key = idx === 0 ? 'before' : 'after'
                return (
                  <button key={v} onClick={() => setView(key as 'before' | 'after')}
                    style={{ fontSize: 12, padding: '4px 12px', borderRadius: 4, background: view === key ? '#10b981' : 'transparent', color: view === key ? '#fff' : '#64748b', border: 'none', cursor: 'pointer', fontWeight: view === key ? 600 : 400 }}>
                    {v}
                  </button>
                )
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {c.bundles.map((b, i) => {
                const val = view === 'before' ? b.before : b.after
                const pct = (val / totalBefore) * 100
                return (
                  <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#64748b', minWidth: 68 }}>{b.name}</span>
                    <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: BUNDLE_COLORS[i], borderRadius: 4, transition: 'width 0.4s ease' }} />
                    </div>
                    <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#94a3b8', minWidth: 44, textAlign: 'right' }}>{val}{c.kbUnit}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.historyLabel}</div>
            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#10b981' }}>{c.historyDelta}</span>
          </div>
          <div style={{ position: 'relative' }}>
            {[50, 60, 70, 80, 90, 100].map((v) => (
              <div key={v} style={{ position: 'absolute', left: 0, right: 0, borderTop: '1px solid rgba(255,255,255,0.04)', top: `${((100 - v) / 60) * 120}px` }}>
                <span style={{ fontSize: 9, color: '#334155', fontFamily: 'monospace', paddingRight: 4 }}>{v}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 0, height: 120, paddingLeft: 24, position: 'relative' }}>
              {HISTORY.map((s, i) => {
                const pct = ((s - 50) / 50) * 100
                const isLast = i === HISTORY.length - 1
                return (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ fontSize: 9, color: isLast ? '#10b981' : 'transparent', fontWeight: 700, fontFamily: 'monospace' }}>{s}</div>
                    <div style={{ width: '70%', height: `${pct}%`, background: isLast ? '#10b981' : `rgba(16,185,129,${0.2 + (pct / 100) * 0.4})`, borderRadius: '2px 2px 0 0', minHeight: 3, transition: 'height 0.5s', border: isLast ? '1px solid #10b981' : 'none' }} />
                  </div>
                )
              })}
            </div>
            <div style={{ display: 'flex', paddingLeft: 24, marginTop: 6 }}>
              {c.months.map((m) => (
                <div key={m} style={{ flex: 1, textAlign: 'center', fontSize: 9, color: '#334155', fontFamily: 'monospace' }}>{m}</div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: 11, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.vitalsLabel}</div>
          {c.vitals.map((v) => (
            <div key={v.metric} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 100px 100px 60px', padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.04)', alignItems: 'center' }}>
              <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#10b981', fontWeight: 700 }}>{v.metric}</span>
              <span style={{ fontSize: 13, color: '#94a3b8' }}>{v.name}</span>
              <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#ef4444', textDecoration: 'line-through' }}>{v.before}</span>
              <span style={{ fontFamily: 'monospace', fontSize: 12, color: '#10b981', fontWeight: 600 }}>{v.after}</span>
              <span style={{ fontSize: 11, color: '#10b981' }}>{c.passLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
