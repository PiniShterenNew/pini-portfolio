"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Calculator, Sparkles, SendHorizontal, Loader2 } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const PINI_CONTEXT = `You are an AI assistant for Pini Shteren's portfolio. Answer questions about him concisely (2-4 sentences), in the same language as the question (Hebrew or English). Be friendly and confident, never invent facts. If asked something not in context, say you don't have that info and suggest emailing pini5192@gmail.com.

ABOUT PINI:
- React.js Developer / Frontend Engineer based in Tel Aviv, Israel.
- ~5 years of production experience (since July 2021).
- Currently at Cinten (formerly BeST), Tel Aviv. Available for new opportunities — immediate start.
- Email: pini5192@gmail.com · Phone: +972-54-834-5192
- Languages: Hebrew (native), English (professional working).

STACK: React.js, TypeScript, Next.js, Redux Toolkit, Zustand, Socket.io, WebSockets, Node.js, Express, Postgres, MongoDB, Tailwind, shadcn/ui, Vite, Webpack, Vitest, Jest, Playwright.

KEY ACHIEVEMENTS at Cinten:
- Built 20+ interactive UI screens for a real-time B2B SaaS training platform.
- Replaced polling with Socket.io — latency from ~30s to <1s (97%) for hundreds of concurrent users.
- Cut bundle ~35% (code-splitting, tree-shaking, lazy loading); Lighthouse 55 → 85+.
- Test coverage to 80%+; introduced Playwright E2E; ~40% fewer regression bugs.
- Frontend RBAC: 5+ user roles, permission-gated features, conditional UI, protected routing.
- State with Redux Toolkit + Zustand; UI response under 100ms.
- Secure auth: JWT, auto-refresh, sessions. WCAG-compliant Hebrew/English i18n.
- Full-stack contributions in Node.js + Socket.io for real-time backend.

EDUCATION: SVCollege — Frontend Development Certificate (2020-2021), GPA 97, top of cohort.`;

async function callClaude(prompt: string): Promise<string> {
  const res = await fetch("/api/claude", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!res.ok) throw new Error("API error");
  const data = await res.json();
  return data.text;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

function AIChat() {
  const { t, lang } = useApp();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  async function send(text?: string) {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput("");
    const newMsgs: Message[] = [...messages, { role: "user", content: q }];
    setMessages(newMsgs);
    setLoading(true);
    try {
      const history = newMsgs
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n\n");
      const prompt = `${PINI_CONTEXT}\n\nConversation so far:\n${history}\n\nAnswer the latest user question. Reply in the user's language (Hebrew if Hebrew, otherwise English). Keep it concise.`;
      const reply = await callClaude(prompt);
      setMessages([...newMsgs, { role: "assistant", content: reply.trim() }]);
    } catch {
      setMessages([
        ...newMsgs,
        {
          role: "assistant",
          content: lang === "he" ? "מצטער, משהו השתבש." : "Sorry, something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[460px] md:h-[520px]">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3">
        {messages.length === 0 && (
          <div className="space-y-3">
            <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
              {lang === "he" ? "נסה לשאול" : "Try asking"}
            </div>
            <div className="flex flex-wrap gap-2">
              {t.ai.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="border border-[var(--border)] hover:border-[var(--text)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] px-3 py-1.5 text-[12.5px] text-[var(--text-2)] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : ""}`}>
            {m.role === "assistant" && (
              <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 border border-[var(--accent-2)]/40 bg-[var(--accent-2)]/10 text-[var(--accent-2)]">
                <Sparkles size={12} />
              </span>
            )}
            <div
              className={`max-w-[85%] px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-[var(--accent)] text-[var(--accent-fg)]"
                  : "bg-[var(--surface-1)] border border-[var(--border)] text-[var(--text)]"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-2.5">
            <span className="shrink-0 inline-flex items-center justify-center h-7 w-7 border border-[var(--accent-2)]/40 bg-[var(--accent-2)]/10 text-[var(--accent-2)]">
              <Sparkles size={12} />
            </span>
            <div className="px-3.5 py-3 bg-[var(--surface-1)] border border-[var(--border)] flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)] animate-pulse" />
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--muted)] animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--muted)] animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="border-t border-[var(--border)] bg-[var(--surface-0)] p-3 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.ai.chatPlaceholder}
          dir="auto"
          className="flex-1 bg-[var(--surface-1)] border border-[var(--border)] px-3.5 py-2.5 text-[14px] text-[var(--text)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--text)]"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="inline-flex items-center gap-1.5 bg-[var(--accent)] hover:opacity-90 text-[var(--accent-fg)] px-4 py-2.5 text-[13.5px] font-medium disabled:opacity-40 transition-opacity"
        >
          <SendHorizontal size={14} />
          <span className="hidden sm:inline">{t.ai.send}</span>
        </button>
      </form>
    </div>
  );
}

interface EstimatorOutput {
  stack?: string[];
  phases?: { name: string; weeks: string }[];
  totalWeeks?: string;
  notes?: string;
  error?: string;
}

function AIEstimator() {
  const { t, lang } = useApp();
  const [desc, setDesc] = useState("");
  const [out, setOut] = useState<EstimatorOutput | null>(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!desc.trim() || loading) return;
    setLoading(true);
    setOut(null);
    try {
      const prompt = `You are Pini Shteren — a senior React frontend engineer. A potential client describes a project. Recommend a tech stack and rough delivery plan based on YOUR expertise (React, TypeScript, Next.js, Socket.io, Redux Toolkit, Zustand, Tailwind, Node.js).

Reply in ${lang === "he" ? "Hebrew" : "English"}. Return ONLY valid JSON, no markdown:
{"stack":["item1","item2","item3","item4","item5"],"phases":[{"name":"...","weeks":"1-2"},{"name":"...","weeks":"2-3"},{"name":"...","weeks":"1"}],"totalWeeks":"5-7","notes":"1-2 sentence rationale"}

Project: ${desc}`;
      const reply = await callClaude(prompt);
      const match = reply.match(/\{[\s\S]*\}/);
      const parsed = JSON.parse(match ? match[0] : reply);
      setOut(parsed);
    } catch {
      setOut({ error: lang === "he" ? "שגיאה בניתוח." : "Couldn't parse." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-0 md:gap-px bg-[var(--border)] min-h-[460px] md:min-h-[520px]">
      <div className="bg-[var(--bg)] p-5 md:p-7 flex flex-col">
        <h3 className="font-display text-xl font-medium tracking-tight text-[var(--text)]">
          {t.ai.estimator.title}
        </h3>
        <p className="mt-1 text-[13.5px] text-[var(--muted)]">{t.ai.estimator.sub}</p>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder={t.ai.estimator.placeholder}
          rows={8}
          dir="auto"
          className="mt-4 flex-1 bg-[var(--surface-1)] border border-[var(--border)] p-3.5 text-[14px] text-[var(--text)] placeholder:text-[var(--muted-2)] focus:outline-none focus:border-[var(--text)] resize-none"
        />
        <button
          onClick={analyze}
          disabled={loading || !desc.trim()}
          className="mt-3 inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:opacity-90 text-[var(--accent-fg)] px-4 py-3 text-sm font-medium disabled:opacity-40 transition-opacity"
        >
          {loading ? (
            <>
              <Loader2 size={15} className="animate-spin" />
              {t.ai.estimator.analyzing}
            </>
          ) : (
            <>
              <Sparkles size={15} />
              {t.ai.estimator.analyze}
            </>
          )}
        </button>
      </div>
      <div className="bg-[var(--surface-0)] p-5 md:p-7 overflow-y-auto">
        {!out && !loading && (
          <div className="h-full flex items-center justify-center text-center">
            <div className="text-[13.5px] text-[var(--muted)]">
              <Sparkles size={20} className="text-[var(--accent-2)] mb-2 mx-auto" />
              <div>{t.ai.estimator.empty}</div>
            </div>
          </div>
        )}
        {loading && (
          <div className="h-full flex items-center justify-center">
            <div className="flex items-center gap-2 text-[var(--muted)] text-[13.5px]">
              <Loader2 size={15} className="animate-spin" />
              {t.ai.estimator.analyzing}
            </div>
          </div>
        )}
        {out?.error && <div className="text-rose-400 text-[14px]">{out.error}</div>}
        {out && !out.error && (
          <div className="space-y-5">
            <div>
              <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)] mb-2">
                {lang === "he" ? "סטאק" : "Stack"}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {out.stack?.map((s) => (
                  <span
                    key={s}
                    className="border border-[var(--border)] bg-[var(--surface-1)] px-2 py-1 text-[12px] text-[var(--text-2)] font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)] mb-2">
                {lang === "he" ? "שלבים" : "Phases"}
              </div>
              <div className="space-y-2">
                {out.phases?.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border border-[var(--border)] bg-[var(--surface-1)] px-3 py-2.5"
                  >
                    <span className="inline-flex items-center justify-center h-6 w-6 bg-[var(--accent-2)]/15 border border-[var(--accent-2)]/30 text-[var(--accent-2)] font-mono text-[11px]">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-[13.5px] text-[var(--text)]">{p.name}</span>
                    <span className="font-mono text-[12px] text-[var(--muted)]">
                      {p.weeks} {lang === "he" ? "שב'" : "wk"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
              <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
                {lang === "he" ? "סה״כ" : "Total"}
              </div>
              <div className="font-display text-3xl font-medium text-[var(--text)]">
                {out.totalWeeks}
                <span className="text-[12px] font-mono text-[var(--muted)] ms-2 font-normal">
                  {lang === "he" ? "שב'" : "wks"}
                </span>
              </div>
            </div>
            {out.notes && (
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">{out.notes}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AIDemo() {
  const { t } = useApp();
  const [tab, setTab] = useState<"chat" | "estimator">("chat");

  return (
    <section
      id="ai"
      className="relative py-24 md:py-36 border-t border-[var(--border)] overflow-hidden"
    >
      <div className="absolute inset-0 hero-glow opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{t.ai.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display font-medium tracking-[-0.025em] text-[var(--text)] text-[34px] md:text-[52px] xl:text-[60px] leading-[1.02]">
                {t.ai.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={120}>
              <p className="text-[15.5px] md:text-[16.5px] text-[var(--muted)] leading-relaxed">
                {t.ai.sub}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={160}>
          <div className="border border-[var(--border)] bg-[var(--bg)] overflow-hidden">
            <div className="flex items-center justify-between px-3 md:px-4 py-2.5 border-b border-[var(--border)] bg-[var(--surface-0)]">
              <div className="flex items-center gap-1 p-0.5 border border-[var(--border)] bg-[var(--surface-1)]">
                <button
                  onClick={() => setTab("chat")}
                  className={`inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 text-[12.5px] font-medium transition-all ${
                    tab === "chat"
                      ? "bg-[var(--bg)] text-[var(--text)]"
                      : "text-[var(--muted)] hover:text-[var(--text-2)]"
                  }`}
                >
                  <MessageCircle size={13} />
                  {t.ai.tabs.chat}
                </button>
                <button
                  onClick={() => setTab("estimator")}
                  className={`inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 text-[12.5px] font-medium transition-all ${
                    tab === "estimator"
                      ? "bg-[var(--bg)] text-[var(--text)]"
                      : "text-[var(--muted)] hover:text-[var(--text-2)]"
                  }`}
                >
                  <Calculator size={13} />
                  {t.ai.tabs.estimator}
                </button>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.14em] text-[var(--muted)]">
                <Sparkles size={11} className="text-[var(--accent-2)]" />
                {t.ai.disclaimer}
              </div>
            </div>
            {tab === "chat" ? <AIChat /> : <AIEstimator />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
