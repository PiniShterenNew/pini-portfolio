# מדריך מותג — פיני שטרן

> מסמך עיצוב מעודכן — גרסה 2.0

---

## זהות המותג

```
שם:          פיני שטרן
תפקיד:      מפתח ומעצב אתרים
Promise:     "אתרים שעובדים קשה כמוך"
Voice:       ישיר, חם, מקצועי. גוף ראשון יחיד ("אני").
```

---

## פלטת צבעים — "Warm Professional"

### צבעי מותג
| צבע | Hex | שימוש |
|------|---------|--------|
| Gold (Accent) | `#D4A843` | הדגשות, אייקונים, hover states |
| Gold Light | `#E8C96A` | גרסה בהירה |
| Gold Dark | `#B8922F` | גרסה כהה |
| Dark | `#2C2C2E` | כפתורים, navbar, כותרות |
| Dark Deep | `#1A1A1A` | טקסט ראשי, hover כהה |
| Muted | `#6E6E73` | טקסט משני |
| CTA | `#C25B3F` | כפתורי פעולה (אופציונלי) |

### צבעי משטח
| צבע | Hex | שימוש |
|------|---------|--------|
| Base | `#FAFAF8` | רקע עמוד |
| Card | `#FFFFFF` | רקע כרטיסים |
| Warm | `#F2F0EC` | רקע sections חלופיים |
| Border | `#E5E5E3` | גבולות |
| Border Hover | `#D5D5D3` | גבולות hover |

### צבעי מצב
| צבע | Hex | שימוש |
|------|---------|--------|
| Success | `#34A853` | הצלחה |
| Error | `#D93025` | שגיאה |

---

## טיפוגרפיה

### פונטים
| פונט | משקלים | שימוש |
|------|---------|--------|
| **Rubik** | 400-700 | כותרות (עברית ראשי) |
| **Heebo** | 300-600 | גוף טקסט (עברית) |
| **DM Sans** | 400-700 | מספרים, אנגלית, tech |

### הירארכיה
| רמה | גודל | משקל | Line Height |
|------|-------|-------|-------------|
| Hero H1 | 2.75rem (44px) | 700 | 1.2 |
| Section H2 | 2rem (32px) | 600 | 1.3 |
| Card H3 | 1.25rem (20px) | 600 | 1.4 |
| Body Large | 1.125rem (18px) | 400 | 1.7 |
| Body | 1rem (16px) | 400 | 1.6 |
| Small | 0.875rem (14px) | 400 | 1.5 |
| Caption | 0.8125rem (13px) | 400 | 1.5 |

---

## ריווח (8px Grid)

```
xs:          8px   (0.5rem)
sm:          16px  (1rem)
md:          24px  (1.5rem)
lg:          32px  (2rem)
xl:          48px  (3rem)
section:     80px  (5rem)
```

### Container widths
- Content: 70rem (1120px)
- Narrow: 40rem (640px)
- Tight: 35rem (560px)

---

## צללים

```
sm:          0 1px 2px rgba(0,0,0,0.04)      — inputs
card:        0 2px 8px rgba(0,0,0,0.06)       — cards
card-hover:  0 8px 24px rgba(0,0,0,0.08)      — hover
lg:          0 8px 24px rgba(0,0,0,0.08)      — elevated
xl:          0 16px 48px rgba(0,0,0,0.1)       — modals
```

---

## Border Radius

```
sm:     6px   — tags, badges
md:     8px   — buttons, inputs (default)
lg:     12px  — cards
xl:     16px  — images, large containers
full:   999px — avatars
```

---

## כפתורים

### Primary
```
bg: #2C2C2E, text: white, radius: 8px
padding: 12px 24px, font: Rubik 500 16px
hover: bg #1A1A1A
focus: ring 2px #D4A843
```

### Secondary
```
bg: transparent, text: #2C2C2E, border: 1px #D5D5D3
hover: bg #F2F0EC
```

### Ghost
```
bg: transparent, text: #2C2C2E
hover: text #D4A843
```

---

## אנימציות

### מותר
- fade-in עדין: opacity 0->1, translateY 12px->0, 400ms ease-out, triggerOnce
- hover transitions: 200ms ease-out (border, color, shadow)
- Accordion height: 200ms easeInOut

### אסור
- blobs, float, ripple, count-up, gradient-shift
- spring physics
- scale on hover (מעבר ל-1.05 לכפתורים)
- scroll-reveal על כל אלמנט בודד

---

## מבנה הדף

```
1. Navbar (3 לינקים + CTA)
2. Hero (תוכן + תמונה)
3. Services (3 כרטיסים)
4. Portfolio (case studies stacked)
5. Process (vertical timeline)
6. About (profile centered)
7. FAQ (3 שאלות, accordion)
8. Contact (form centered)
9. Footer (minimal centered)
```

---

**גרסה:** 2.0
**עודכן:** פברואר 2026
