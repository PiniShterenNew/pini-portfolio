# Pini Shteren — Portfolio

A personal portfolio for **Pini Shteren**, a Frontend & Fullstack Engineer
(React · Next.js · TypeScript · Node.js). Editorial-dark aesthetic, fully
bilingual (English / Hebrew) with complete RTL support, and scroll-driven
GSAP animations.

🔗 **Live:** https://pini-portfolio.vercel.app

---

## Tech Stack

| Area        | Tools                                            |
| ----------- | ------------------------------------------------ |
| Framework   | Next.js 15 (App Router)                          |
| Language    | TypeScript                                       |
| Styling     | Tailwind CSS 3 + a hand-built CSS design system  |
| Animation   | GSAP + `@gsap/react`, Framer Motion              |
| Fonts       | Instrument Serif, Geist, Heebo, JetBrains Mono   |
| i18n        | JSON locale files (`en` / `he`) with typed access |
| Deployment  | Vercel                                           |

---

## Getting Started

```bash
# install dependencies
npm install

# run the dev server (http://localhost:3000)
npm run dev

# production build
npm run build && npm start
```

> Requires Node.js 18.18+ (Next.js 15).

---

## Project Structure

```
app/            → Next.js App Router (layout, page, global CSS)
sections/       → page sections (Hero, Stack, Work, SelectedProjects,
                  Experience, Testimonials, About, Contact, Footer)
components/     → reusable UI (Navbar, Reveal, Segments, CashPlusPhone, …)
contexts/       → AppContext (language + theme state)
lib/            → i18n loader, GSAP setup, helpers
  └─ locales/   → en.json / he.json (all UI copy lives here)
public/         → images, résumé (cv.pdf), icons, sitemap
```

### Editing content

All visible text is stored in `lib/locales/en.json` and `lib/locales/he.json`.
The TypeScript type for translations is derived from `en.json`, so **both files
must keep an identical key structure** — add a key to one, add it to the other.

You can validate parity with:

```bash
node -e "const en=require('./lib/locales/en.json'),he=require('./lib/locales/he.json');const k=o=>{let r=[];for(const x in o){const p=x;r.push(p);if(o[x]&&typeof o[x]=='object'&&!Array.isArray(o[x]))r=r.concat(k(o[x]).map(c=>p+'.'+c))}return r};const a=new Set(k(en)),b=new Set(k(he));console.log('missing in he:',[...a].filter(x=>!b.has(x)));console.log('missing in en:',[...b].filter(x=>!a.has(x)))"
```

---

## Internationalization & RTL

- Language is toggled at runtime via `AppContext`; `dir` and `lang` are set on
  `<html>` and persisted to `localStorage`.
- Hebrew renders right-to-left across the entire layout, including flipped
  timelines, mirrored icons, and direction-aware typography.

---

## License

Personal project — all rights reserved © Pini Shteren.
