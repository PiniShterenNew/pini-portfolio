// Component examples using the new design system
// This file serves as a reference guide

/* 
======================
🎨 BUTTON EXAMPLES
======================
*/

// Primary gradient button
const PrimaryButton = () => (
  <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-from via-primary-via to-primary-to text-white shadow-soft hover:shadow-hover transition-all duration-300">
    כפתור ראשי
  </button>
)

// Secondary button with border
const SecondaryButton = () => (
  <button className="px-8 py-4 rounded-lg border-2 border-primary-500 text-primary-600 hover:bg-primary-50 transition-all duration-300">
    כפתור משני
  </button>
)

/* 
======================
🃏 CARD EXAMPLES
======================
*/

// Standard card with soft shadow
const Card = () => (
  <div className="p-6 bg-surface rounded-lg shadow-card hover:shadow-soft transition-all duration-300">
    <h3 className="font-display text-2xl mb-4">כותרת הכרטיס</h3>
    <p className="font-sans text-text-subtle">תוכן הכרטיס</p>
  </div>
)

// Glass card (for floating elements)
const GlassCard = () => (
  <div className="p-6 bg-white/70 backdrop-blur-md rounded-xl border border-white/40 shadow-soft">
    <h3 className="font-display text-xl">כרטיס זכוכית</h3>
  </div>
)

/* 
======================
📝 TYPOGRAPHY EXAMPLES
======================
*/

const Typography = () => (
  <div>
    {/* Hero heading */}
    <h1 className="font-display text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-from via-primary-via to-primary-to">
      כותרת ראשית
    </h1>
    
    {/* Section heading */}
    <h2 className="font-display text-4xl font-bold text-text-main">
      כותרת סקשן
    </h2>
    
    {/* Body text */}
    <p className="font-sans text-lg text-text-subtle leading-relaxed">
      טקסט גוף רגיל עם ריווח שורות נוח
    </p>
  </div>
)

/* 
======================
🎭 SECTION EXAMPLES
======================
*/

const Section = () => (
  <section className="py-20 bg-bg">
    <div className="max-w-6xl mx-auto px-6">
      {/* Section content */}
    </div>
  </section>
)

/* 
======================
✅ DESIGN PRINCIPLES
======================

1. רדיוסים אחידים:
   - כפתורים/כרטיסים קטנים: rounded-lg (16px)
   - כרטיסים גדולים: rounded-xl (24px)

2. צללים:
   - כרטיס רגיל: shadow-card
   - כרטיס עם hover: shadow-soft
   - כרטיס מרחף: shadow-hover

3. גרדיאנטים:
   - רק בכפתורים וכותרות
   - לא ברקעי סקשנים

4. Glass effect:
   - רק על רכיבים מרחפים
   - bg-white/70 backdrop-blur-md

5. פונטים:
   - כותרות: font-display (Plus Jakarta Sans)
   - טקסט: font-sans (Heebo)
*/

export {}

