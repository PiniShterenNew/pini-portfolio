# מערכת העיצוב של פנחס סטודיו

## 🎨 משתני CSS

### צבעים
```css
--color-primary-from: #6366F1
--color-primary-via: #8B5CF6
--color-primary-to: #EC4899
--color-bg: #FDFDFF
--color-surface: #FFFFFF
--color-text-main: #1F2937
--color-text-subtle: #4B5563
```

### צללים
```css
--shadow-soft: 0 4px 20px rgba(139, 92, 246, 0.15)
--shadow-hover: 0 6px 24px rgba(139, 92, 246, 0.2)
--shadow-card: 0 2px 12px rgba(139, 92, 246, 0.08)
```

---

## 🧩 מחלקות Tailwind מותאמות

### צבעים
```tsx
// Primary gradient
className="bg-gradient-to-r from-primary-from via-primary-via to-primary-to"

// Text colors
className="text-text-main"
className="text-text-subtle"

// Backgrounds
className="bg-surface"
className="bg-bg"
```

### צללים
```tsx
className="shadow-soft"     // צל רך לכרטיסים
className="shadow-hover"    // צל hover
className="shadow-card"     // צל קטן לכרטיסים
```

### רדיוסים
```tsx
className="rounded-lg"      // 16px
className="rounded-xl"      // 24px
```

---

## 🅰️ טיפוגרפיה

### פונטים
- **Heebo** - טקסט רגיל, פסקאות
- **Plus Jakarta Sans** - כותרות, מודגש

### שימוש
```tsx
// כותרת
<h1 className="font-display text-6xl">כותרת</h1>

// טקסט רגיל
<p className="font-sans text-lg">טקסט</p>
```

---

## ✅ עקרונות עיצוב

1. **רדיוס אחיד**: 16px לכל הכרטיסים והכפתורים
2. **Glass blur**: רק על רכיבים מרחפים (Header, תפריטים)
3. **צללים רכים**: `shadow-soft` לכל כרטיס
4. **גרדיאנטים**: רק בכפתורים, לא ברקעי סקשנים
5. **פונטים**: Heebo לטקסט, Plus Jakarta Sans לכותרות

