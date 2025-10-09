# 🎨 מדריך מותג - פנחס סטודיו

> מסמך זה מכיל את כל משתני העיצוב, צבעים, פונטים ו-gradients שבשימוש באתר.

---

## 🎨 פלטת צבעים

### צבעי מותג עיקריים

#### Tailwind Config
```js
colors: {
  primary: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    400: '#818CF8',
    500: '#6366F1',  // סגול עיקרי
    600: '#4F46E5',  // סגול כהה
    700: '#4338CA',
    from: '#6366F1', // התחלת gradient
    via: '#8B5CF6',  // אמצע gradient
    to: '#EC4899',   // סוף gradient (ורוד)
  },
  accent: '#EC4899',      // ורוד דגש
  surface: '#FFFFFF',     // רקע כרטיסים
  bg: '#FDFDFF',          // רקע עמוד
  text: {
    main: '#1F2937',      // טקסט ראשי
    subtle: '#4B5563',    // טקסט משני
  },
}
```

#### CSS Variables (Light Mode)
```css
:root {
  /* צבעי מותג */
  --primary: 260 70% 60%;          /* סגול עיקרי */
  --primary-hover: 260 70% 50%;    /* סגול hover */
  --secondary: 220 70% 60%;        /* כחול משני */
  --tertiary: 330 70% 60%;         /* ורוד שלישוני */

  /* רקעים */
  --bg-primary: 240 40% 97%;       /* רקע עמוד */
  --bg-secondary: 250 35% 93%;     /* רקע משני */
  --bg-tertiary: 260 30% 90%;      /* רקע שלישוני */
  --bg-card: 245 35% 96%;          /* רקע כרטיס */
  --bg-input: 245 25% 95%;         /* רקע input */

  /* טקסטים */
  --text-primary: 245 40% 25%;     /* טקסט ראשי */
  --text-secondary: 240 15% 45%;   /* טקסט משני */
  --text-inverse: 0 0% 100%;       /* טקסט לבן */

  /* גבולות וצללים */
  --border: 240 10% 30%;
  --border-hover: 240 10% 40%;
  --shadow: 0 2px 8px 0 rgb(0 0 0 / 0.08);
  --shadow-lg: 0 6px 20px -2px rgb(0 0 0 / 0.1);
  --shadow-card: 0 4px 12px -2px rgb(0 0 0 / 0.06);

  /* צבעי blob */
  --blob-pink: 330 75% 65%;
  --blob-blue: 221 75% 60%;
  --blob-purple: 262 75% 63%;
}
```

#### CSS Variables (Dark Mode)
```css
.dark {
  /* צבעי מותג */
  --primary: 260 70% 65%;
  --primary-hover: 260 70% 75%;
  --secondary: 220 70% 60%;
  --tertiary: 330 70% 60%;

  /* רקעים */
  --bg-primary: 230 30% 10%;
  --bg-secondary: 240 30% 12%;
  --bg-tertiary: 250 30% 14%;
  --bg-card: 245 30% 12%;
  --bg-input: 245 25% 20%;

  /* טקסטים */
  --text-primary: 0 0% 100%;
  --text-secondary: 240 10% 70%;
  --text-inverse: 230 30% 10%;

  /* גבולות */
  --border: 240 10% 25%;
  --border-hover: 240 10% 35%;

  /* צבעי blob */
  --blob-pink: 330 75% 55%;
  --blob-blue: 221 75% 55%;
  --blob-purple: 262 75% 60%;
}
```

---

## 🌈 Gradients

### Primary Gradient (הכי בשימוש)
```css
background: linear-gradient(
  135deg,
  hsl(var(--primary)) 0%,
  hsl(var(--secondary)) 50%,
  hsl(var(--tertiary)) 100%
);
```

**או בצורה ישירה:**
```css
background: linear-gradient(to right, #6366F1, #8B5CF6, #EC4899);
```

### Hero Section Gradient (Light)
```css
.gradient-hero-light {
  background: radial-gradient(
    circle at center,
    hsl(265 70% 90%) 0%,
    hsl(250 65% 87%) 40%,
    hsl(240 50% 84%) 80%
  );
}
```

### Hero Section Gradient (Dark)
```css
.gradient-hero-dark {
  background: radial-gradient(
    circle at center,
    hsl(230 30% 8%),
    hsl(250 35% 10%),
    hsl(260 40% 14%)
  );
}
```

### Text Gradient (כותרות)
```css
.text-gradient {
  background: linear-gradient(
    to right,
    hsl(var(--primary)),
    hsl(var(--secondary)),
    hsl(var(--tertiary))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Icon Gradient
```css
background: linear-gradient(
  135deg,
  hsl(var(--primary)) 0%,
  hsl(var(--secondary)) 100%
);
```

---

## 🖋️ פונטים (Google Fonts)

### פונטים בשימוש

#### 1. **Heebo** (עברית ראשי)
```html
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet"/>
```

**משקלים בשימוש:**
- 400 (Regular) - טקסט רגיל
- 500 (Medium) - טקסט בינוני
- 600 (SemiBold) - טקסט מודגש
- 700 (Bold) - כותרות משניות

**שימוש:**
```css
font-family: 'Heebo', 'Plus Jakarta Sans', sans-serif;
```

---

#### 2. **Plus Jakarta Sans** (אנגלית/Display)
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet"/>
```

**משקלים בשימוש:**
- 500 (Medium)
- 600 (SemiBold)
- 700 (Bold)
- 800 (ExtraBold) - כותרות ראשיות

**שימוש:**
```css
font-family: 'Plus Jakarta Sans', 'Heebo', sans-serif;
```

---

#### 3. **Assistant** (עברית משני)
```html
<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&display=swap" rel="stylesheet"/>
```

**משקלים בשימוש:**
- 300 (Light)
- 400 (Regular)
- 600 (SemiBold)
- 700 (Bold)

**שימוש:**
```css
font-family: 'Assistant', sans-serif;
```

---

### הגדרות Tailwind
```js
fontFamily: {
  sans: ['Heebo', 'Plus Jakarta Sans', 'sans-serif'],
  display: ['Plus Jakarta Sans', 'Heebo', 'sans-serif'],
}
```

---

## 💎 Shadows & Effects

### Box Shadows (Tailwind)
```js
boxShadow: {
  soft: '0 4px 20px rgba(139, 92, 246, 0.15)',
  hover: '0 6px 24px rgba(139, 92, 246, 0.2)',
  card: '0 2px 12px rgba(139, 92, 246, 0.08)',
}
```

### Border Radius
```js
borderRadius: {
  lg: '16px',
  xl: '24px',
}
```

---

## 🎭 Animations

### Blob Animation
```js
animation: {
  'blob': 'blob 7s infinite',
}

keyframes: {
  'blob': {
    '0%': { transform: 'translate(0px, 0px) scale(1)' },
    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
    '100%': { transform: 'translate(0px, 0px) scale(1)' },
  },
}
```

### Gradient Flow
```css
@keyframes gradient-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-flow {
  background-size: 200% 200%;
  animation: gradient-flow 8s ease infinite;
}
```

---

## 📐 Spacing System

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
```

---

## 🎯 שימוש מהיר

### כפתור ראשי
```tsx
<button className="bg-gradient-to-r from-primary-from via-primary-via to-primary-to text-white px-8 py-4 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300">
  לחץ כאן
</button>
```

### כרטיס
```tsx
<div className="bg-surface rounded-xl shadow-card hover:shadow-hover transition-all duration-300 p-6">
  תוכן הכרטיס
</div>
```

### כותרת עם Gradient
```tsx
<h1 className="text-gradient font-display text-5xl font-extrabold">
  כותרת מדהימה
</h1>
```

---

## 🔗 קישורים מהירים

- **צבעים:** `tailwind.config.js` (שורות 9-28)
- **משתני CSS:** `src/index.css` (שורות 9-71)
- **פונטים:** `src/styles/globals.css` (שורה 4)
- **Gradients:** `src/index.css` (שורות 164-266)

---

**נוצר על ידי:** Pinchas Studio  
**עודכן לאחרונה:** אוקטובר 2024  
**גרסה:** 1.0

