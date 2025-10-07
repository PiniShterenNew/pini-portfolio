# claude.md — Development & Code Rules

## ⚙️ Tech Stack

* **Vite + React + TypeScript**
* **Tailwind CSS 3.x**
* **Framer Motion** — אנימציות ומעברי אלמנטים
* **clsx** — ניהול מחלקות דינמיות
* **react-hook-form** — ניהול טפסים וולידציה
* **react-intersection-observer** — הפעלת אנימציות בעת כניסת אלמנטים למסך
* **lucide-react** — אייקונים וקטוריים

---

## 🧱 Code Structure

```
src/
 ├─ components/    → רכיבי UI (Button, Card, Input)
 ├─ sections/      → מקטעי עמוד (Hero, Services, Process, Contact)
 ├─ hooks/         → Hooks כלליים (useScrollAnimation, useForm, וכו’)
 ├─ lib/           → פונקציות עזר כלליות
 ├─ assets/        → תמונות ואייקונים
 ├─ styles/        → משתנים, טוקנים, theme
 ├─ App.tsx
 └─ main.tsx
```

### עקרונות כתיבה

* **React.FC<Props>** לכל רכיב.
* ללא Inline styles — שימוש אך ורק ב־Tailwind.
* שימוש ב־`clsx` עבור תנאים.
* ייבוא: React → libs → components → styles.
* שמות קבצים באנגלית, שמות רכיבים באות גדולה.
* `const` בלבד (לא `let`).
* טיפוסי Props תמיד מפורטים.
* כל קובץ מתחיל בהערה:

  ```tsx
  // Description: what this file does
  // Author: Pinchas
  // Created with claude.md rules
  ```

---

## 🧠 Hooks

### useScrollAnimation

Hook מותאם להפעלת אנימציות כשאלמנט נכנס לתצוגה.

```ts
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return { ref, inView }
}
```

---

## 🧩 Code Style

* גרש יחיד ('')
* ללא נקודה־פסיק
* מרווחים של 2 רווחים
* פונקציות חץ בלבד
* שמות משתנים תיאוריים וקצרים

---

## 🔒 Quality

* ESLint + TypeScript חובה.
* בדיקת Types בכל build.
* אין קוד מת או console.log בקומיט.

---

## ⚡ Performance

* Lazy Loading לרכיבים גדולים.
* שימוש ב־React.memo לרכיבים סטטיים.
* אנימציות רק כשאלמנט נראה (לא ב־mount).

---

## ✅ Deployment

* Build דרך `npm run build`
* פריסה: Vercel
* בדיקת Lighthouse מעל 90 בכל קטגוריה.


# claude.md — Design, Layout & Animations

## 🎨 Design Language

* צבעים עיקריים:

  ```js
  primary:   #4f46e5   // סגול עיקרי
  secondary: #818cf8   // סגול בהיר
  accent:    #facc15   // זהוב
  background:#ffffff   // רקע לבן
  text:      #111827   // טקסט כהה
  ```
* פונטים: `Heebo`, גיבוי `Assistant`
* ריווחים: `py-20` לכל מקטע עמוד
* Layout: `max-w-screen-xl mx-auto px-4`
* עקרון עיצוב: **פשטות, אוויר, עקביות, תנועה עדינה**

---

## 🪄 Micro Animations

### 1. כניסת מקטעים (scroll in)

ספריה: `framer-motion`

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
/>
```

* הפעלה רק בעת כניסה למסך (`viewport={{ once: true }}`)

### 2. Hover על כפתורים

```tsx
className="transition-all duration-300 hover:scale-105 hover:bg-secondary"
```

* קנה מידה עדין + שינוי צבע

### 3. כרטיסי שירותים

```tsx
<motion.div
  whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}
  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
/>
```

### 4. טקסטים ב-Hero

* כותרת: fade + slide מהצד
* תת־כותרת: delay של 0.2s
* כפתור CTA: delay של 0.4s + bounce קטן עם `easeInOut`

---

## 🧩 Components Guidelines

* **Hero Section**: רקע גרדיאנט עדין `bg-gradient-to-b from-white to-indigo-50`
* **Services Section**: שלושה קלפים ברוחב שווה, spacing של `gap-8`
* **Process Section**: רשת של ארבעה צעדים עם אייקונים (`lucide-react`)
* **Portfolio Section**: תמונות בגבולות מעוגלים `rounded-2xl` והצללה עדינה `shadow-lg`
* **Contact Section**: טופס במרכז, הצללה רכה, `focus:ring-primary`

---

## 🧠 Motion Principles

* כל תנועה קצרה מ־0.8 שניות.
* אין שימוש באנימציות אינסופיות.
* תנועה תמיד בכיוון קריא (y+ = כניסה מלמטה, x− = כניסה מימין).
* אין שינויי צבע או גודל חדים.

---

## 🧰 ספריות מדויקות

* **Framer Motion** → אנימציות ומיקרו־מעברים
* **react-intersection-observer** → הפעלת אנימציות בעת כניסת מקטעים
* **lucide-react** → אייקונים מודרניים
* **clsx** → תנאי עיצוב בקלאסים
* **react-hook-form** → טפסים קלים ונקיים

---

## ✅ סיכום

העיצוב מבוסס על מינימליזם מודרני, צבעים חיים אך עדינים, טיפוגרפיה נושמת, ותנועות עדינות שמניעות את המשתמש קדימה מבלי להעמיס.
