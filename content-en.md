# Portfolio Content — English

---

## Navigation
- Brand mark: Pini Shteren / Frontend & Fullstack Engineer
- Work · About · Contact

---

## Hero

**Meta:**
- Based in: Tel Aviv, Israel · UTC+3
- Experience: 5+ years building SaaS products in production
- Availability: ● Open to new opportunities

**Headline:**
Frontend & **Fullstack** Engineer
who spots problems, makes decisions, and **ships**.

**Stack line:** React • Next.js • TypeScript • Node.js • Product Thinking

**Tag line:**
I build products end-to-end, from discovery to production — owning the React/Next.js front end and the Node backend, and the product decisions in between.

**CTAs:** See the work · Get in touch · Download résumé

---

## About

**Title:** I don't start from technology. **I start from a problem.**

**P1:**
Before I ask "what should I build this with," I ask "what's the real problem, and what actually needs to be built to solve it." **That's** where the value is — in the decisions, not in the layer I write code in. Once that's clear, I can build it end-to-end on my own (React, TypeScript, Node, PostgreSQL), down to the details users feel: timing, motion, empty states, and the choices that make a product feel natural.

**P2:**
When I take a feature, I take it all the way — I'm accountable for getting it shipped, working, and actually solving what it's meant to. That means leading the decisions, closing the gaps with Design, Backend, and QA, and not stopping at the line of "I wrote my part of the code."

**Fact strip:**
- Currently: **Cinten** — B2B SaaS · since 2021
- How I work: Problem → **Decision** → Outcome — A consistent pattern, not a stack
- Shipping since: **2021** — Production features, daily
- Strength: Product Thinking — User needs · decisions · ownership

---

## Tech Stack

**Title:** The **tools** I use every day.

| Category | Items |
|---|---|
| Frontend | **React**, **TypeScript**, JavaScript ES6+, Next.js, HTML5, CSS3 |
| State & Data | Redux Toolkit, **Zustand**, Context API, React Query |
| UI & Design | **Tailwind**, Styled Components, **shadcn/ui**, i18n & RTL |
| Backend & APIs | Node.js, Express, REST APIs, PostgreSQL, MongoDB |
| Testing & Tooling | **Vitest**, **Playwright**, Vite, Git, AI dev tools |

---

## Selected Work — Cash Plus

**Brandline:** Cash Plus · Case Study

**Pitch:**
I was tired of financial apps that tell you what already happened. I wanted to understand what's about to happen.

Cash Plus started from a personal problem, not a technical idea: to give users a clear picture of their upcoming financial commitments — before the charge hits, not after.

Along the way it became clear the problem was bigger than subscriptions. Users don't really want to "manage subscriptions" — they want to see all their future commitments in one place. That's what shifted the product from Subscription Tracking to Commitment Management. It's currently in active beta, running on real data.

**Metrics:**

1. **The problem** — Data you can **trust**
   When data flows between server and client, one small mismatch in the contract breaks the whole experience. I decided the model would be defined once and shared across the system, from the DB to the UI — so a mismatch simply can't happen.

2. **The decision** — Sign-in without **friction**
   A user who gets logged out mid-session is a user who leaves. I built a sign-in flow that stays stable and secure over time, without asking the user to log in again and again.

3. **The outcome** — Always **up to date**
   Users need to see their real state right now, not a minute ago. Reminders, updates, and heavy processing run in the background and in real time, so the screen always reflects reality.

**Pillars:**

P · 01 — **From a personal problem to a product.**
The product didn't start from technology — it started from real frustration. The first decision was to change the question: from "how do you track subscriptions" to "how do you see all your future commitments."

P · 02 — **Detecting commitments from unstructured data.**
The real challenge wasn't the UI — it was extracting commitments out of emails. I built a three-layer system — Gmail Query, Regex extraction, and AI classification — that turns free text into a usable data point. It's a decision-making system, not a list of technologies.

P · 03 — **In a money app, one error breaks trust.**
When it's people's money, a single wrong number and the user is gone. So I built the system to protect itself: one shared data contract that prevents mismatches, a sign-in that stays stable over time, and heavy processing that runs in the background — so the product stays trustworthy as it grows.

**Production Evidence — A live product, not a demo.**
- 20 beta users
- 13 Gmail accounts connected
- 62 commitments detected
- 15 active Push devices

"Not 'I know Next.js' — but: I know how to spot a problem, build a solution around it, and learn from reality."

**Core stack:** React 19 · Next.js 15 · TypeScript · Tailwind v4 · shadcn/ui · Node · Express · PostgreSQL · Kysely · BullMQ · Redis · Socket.io · i18next · RTL · pnpm workspaces · Zod

---

## Selected Projects

**Title:** More things I've **built**.

1. **Cinten Platform**
   Real-time B2B SaaS platform — WebSocket architecture, in-app chat, and list virtualization for large datasets.
   Stack: React · TypeScript · Node.js · Socket.io

2. **i18n Inspector**
   Developer tool for inspecting and managing i18n translation files — catches missing keys, unused strings and structural drift across locales.
   Stack: TypeScript · Node.js · i18n · CLI
   [Source ↗](https://github.com/PiniShterenNew/i18n-inspector)

3. **This Portfolio**
   Editorial, bilingual (EN/HE + full RTL) portfolio with GSAP scroll animations and a hand-built design system.
   Stack: Next.js · TypeScript · GSAP · i18n · RTL
   [Source ↗](https://github.com/PiniShterenNew/pini-portfolio)

---

## Testimonials

**Title:** What **others** say.

> "Pini consistently took ownership of complex features from planning through production.
>
> He combines product thinking with strong execution and communicates effectively across Product, Design, and Engineering teams.
>
> He is dependable, proactive, and capable of moving important work forward with minimal oversight."

— **Nir Cohen**, CTO · Cinten

---

## Experience

**Title:** Professional **Experience.**

**2021 - Present · ● Now**
**Leading features end-to-end** · Cinten (formerly BeST)
Tel Aviv · B2B SaaS platform · React / TypeScript / Node

| # | Title | Problem | Decision | Outcome | Tag |
|---|---|---|---|---|---|
| 01 | From laggy updates to real time | Features that needed continuous updates ran on polling — repeated round-trips to the server, with a delay users felt. | I proposed moving to a WebSocket architecture and was involved on both the client and the server. | A genuine real-time experience instead of repeated polling. | Initiative · architectural decision |
| 02 | A new channel, born from a real need | Users were missing a group communication channel inside the product workflow. | I led a chat system end-to-end, including real-time behavior. | A meaningful feature that went into daily use inside the existing product. | Spotting a need · end-to-end build |
| 03 | An interface you don't have to learn | A brand-new interface creates a learning curve and confuses users. | Instead of inventing a new UX, I adopted familiar patterns from messaging apps everyone already knows. | Users understood the interface intuitively, almost without explanation. | Product thinking |
| 04 | Keeping large data usable | Screens with long lists got heavy and hurt the smoothness of the experience. | I implemented virtualization that renders only what's actually on screen. | Smooth scrolling even on lists with very large amounts of data. | Performance as UX |
| 05 | Cutting the wait on heavy screens | Screens loaded requests one after another for no reason — and the user waited for nothing. | I found where loading could happen in parallel and ran the requests together. | Shorter load times and a noticeably faster-feeling product. | Optimization |
| 06 | Making sure users always know what changed | Users didn't see updated content after images changed, and didn't know what changed between versions. | A mechanism that forces stale content to refresh, and a clear way to communicate every version change. | Users see up-to-date content and know what's new. | Ownership beyond the code |

**Pattern:** One pattern repeats across all of these: you don't start from technology — you start from a problem.

---

## Education

**Title:** Where it **started.**

- Certificate · 2020–2021 · **SVCollege** · Frontend Development
- React · JS · UI fundamentals
- Final GPA: **97** — Top of cohort · Capstone project shipped to production

---

## Specializations

**Title:** Areas of **expertise.**

1. **i18n & RTL** — Full **RTL & LTR** support
   Experience building interfaces for Hebrew and English from the design stage, with full adaptation to layouts, typography, and interactions.
   *Bilingual UI*

2. **Product UX** — Product-focused **user experience**
   Focus on usability, clarity, and workflow design to build interfaces that are intuitive and easy to use.
   *Product thinking*

3. **Workflow** — Modern Development **Workflow**
   AI tools, test writing, and refactoring as part of the daily development process — to improve speed and quality.
   *Daily work*

---

## Contact

**Pre:** Let's talk · Open to opportunities

Open to opportunities as a Frontend or Fullstack Engineer on teams **that value ownership and product thinking**.

- pini5192@gmail.com
- +972 54 834 5192
- [LinkedIn](https://linkedin.com/in/pini-shteren)
- [GitHub](https://github.com/PiniShterenNew)
- Download résumé (PDF)

---

## Footer

© 2026 Pini Shteren
Spotting problems, making decisions, and owning them from idea to production.
v1.0 · IL
