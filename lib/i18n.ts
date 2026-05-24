export type Lang = "en" | "he";

export type Segment = string | { em: string } | { stroke: string };

export interface Translation {
  dir: "ltr" | "rtl";
  nav: {
    mark: string;
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    metaBased: string;
    metaBasedV: string;
    metaYears: string;
    metaYearsV: string;
    metaStatus: string;
    metaStatusV: string;
    l1: Segment[];
    l2: Segment[];
    l3: Segment[];
    l4: Segment[];
    tag: string;
    cta1: string;
    cta2: string;
    scroll: string;
    portraitBadge: string;
  };
  about: {
    num: string;
    title: Segment[];
    p1: Segment[];
    p2: string;
    f1k: string;
    f1v: Segment[];
    f1s: string;
    f2k: string;
    f2v: Segment[];
    f2s: string;
    f3k: string;
    f3v: Segment[];
    f3s: string;
    f4k: string;
    f4v: string;
    f4s: string;
  };
  skills: {
    num: string;
    title: Segment[];
    rows: {
      cat: string;
      items: { text: string; hl?: boolean }[];
      count: string;
    }[];
  };
  proj: {
    num: string;
    head: Segment[];
    brandline: string;
    name: Segment[];
    pitch: string;
    ui: {
      greet: string;
      balL: string;
      balV: Segment[];
      balD: string;
      upcoming: string;
      sub1: string;
      sub2: string;
      sub3: string;
      sub4: string;
      cta: string;
    };
    metrics: { k: string; v: Segment[]; d: string }[];
    pillars: { ix: string; t: Segment[]; d: string }[];
    techlbl: string;
    liveUrl: string;
    liveLabel: string;
  };
  exp: {
    num: string;
    title: Segment[];
    now: string;
    range: string;
    role: Segment[];
    sub: string;
    meta: string;
    bullets: string[];
  };
  edu: {
    num: string;
    title: Segment[];
    c1k: string;
    c1t: Segment[];
    c1tSub: string;
    c1m: string;
    c2k: string;
    c2v: Segment[];
    c2m: string;
  };
  play: {
    num: string;
    title: Segment[];
    cards: {
      l: string;
      t: Segment[];
      d: string;
      s: string;
    }[];
  };
  contact: {
    pre: string;
    l1: string;
    l2: Segment[];
    email: string;
    channels: { label: string; href: string }[];
  };
  footer: {
    left: string;
    center: string;
    right: string;
  };
}

const translations: Record<Lang, Translation> = {
  en: {
    dir: "ltr",
    nav: {
      mark: "Pini Shteren / FE",
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      metaBased: "Based in",
      metaBasedV: "Israel · UTC+3",
      metaYears: "Experience",
      metaYearsV: "5+ years shipping product",
      metaStatus: "Availability",
      metaStatusV: "● Open to new work · 2026",
      l1: ["Frontend"],
      l2: ["engineer ", { em: "building" }],
      l3: [{ stroke: "interfaces" }, " people"],
      l4: ["actually ", { em: "enjoy" }, "."],
      tag: "I design and build the front of products — React, TypeScript, a healthy obsession with how things feel under the cursor.",
      cta1: "See the work",
      cta2: "Say hello",
      scroll: "Scroll",
      portraitBadge: "P.S — Tel Aviv",
    },
    about: {
      num: "01 / About",
      title: [{ em: "Hello." }, " The short version."],
      p1: [
        "I'm ",
        { em: "Pini" },
        " — a frontend engineer with five years of building React and TypeScript apps that run in production every day. I care about the in-between: the millisecond before a tooltip appears, the curve a panel slides on, the empty state nobody else thought about.",
      ],
      p2: "I work end-to-end on product UI — from rough Figma to shipped feature, talking to design, backend, and QA along the way. Lately I've leaned heavily into AI-assisted workflows for refactors, tests, and faster debugging loops.",
      f1k: "Currently",
      f1v: [{ em: "Cinten" }],
      f1s: "B2B SaaS · since 2021 (was BeST)",
      f2k: "Stack of choice",
      f2v: ["React", { em: "·" }, "TS"],
      f2s: "Tailwind, shadcn, Vite, Zustand",
      f3k: "Shipping since",
      f3v: ["202", { em: "1" }],
      f3s: "Production features, daily",
      f4k: "Loves",
      f4v: "Micro-UX",
      f4s: "Empty states. Hover. Motion.",
    },
    skills: {
      num: "02 / Stack",
      title: ["The ", { em: "tools" }, ", ordered by hours spent."],
      rows: [
        {
          cat: "Frontend",
          items: [
            { text: "React", hl: true },
            { text: "TypeScript", hl: true },
            { text: "JavaScript ES6+" },
            { text: "Next.js" },
            { text: "HTML5" },
            { text: "CSS3" },
          ],
          count: "06",
        },
        {
          cat: "State & Data",
          items: [
            { text: "Redux Toolkit" },
            { text: "Zustand", hl: true },
            { text: "Context API" },
          ],
          count: "03",
        },
        {
          cat: "UI & Styling",
          items: [
            { text: "Tailwind", hl: true },
            { text: "Styled Components" },
            { text: "shadcn/ui", hl: true },
            { text: "Ant Design" },
            { text: "i18n" },
          ],
          count: "05",
        },
        {
          cat: "Backend & APIs",
          items: [
            { text: "Node.js" },
            { text: "Express" },
            { text: "REST APIs" },
            { text: "PostgreSQL" },
            { text: "MongoDB" },
          ],
          count: "05",
        },
        {
          cat: "Testing & Tooling",
          items: [
            { text: "Vitest", hl: true },
            { text: "Playwright", hl: true },
            { text: "Vite" },
            { text: "Git" },
            { text: "AI-assisted dev tools" },
          ],
          count: "05",
        },
      ],
    },
    proj: {
      num: "03 / Selected work",
      head: ["One ", { em: "thing" }, " at a time."],
      brandline: "Personal Finance · Full-Stack · 2025",
      name: ["Cash ", { em: "Plus" }],
      pitch:
        "A full-stack app for tracking every recurring financial commitment — subscriptions, rent, loans — with a timeline that shows exactly what's leaving your account and when.",
      ui: {
        greet: "Hey, Pini ↗",
        balL: "Monthly subscriptions",
        balV: ["$", { em: "184" }, ".50"],
        balD: "↓ $32 saved this month",
        upcoming: "Upcoming this week",
        sub1: "Renews · Mon",
        sub2: "Renews · Wed",
        sub3: "Renews · Thu",
        sub4: "Renews · Sat",
        cta: "Review & cancel",
      },
      metrics: [
        {
          k: "Type-safe end-to-end",
          v: [{ em: "Zod" }],
          d: "Shared Zod schemas across client and server in a pnpm monorepo — one source of truth from the database all the way to the UI.",
        },
        {
          k: "Auth security",
          v: [{ em: "JWT" }, " ×2"],
          d: "Dual-token flow: access token in memory (15 min) + refresh token in httpOnly cookie (7 days). Protected against XSS with token rotation and mutex.",
        },
        {
          k: "Real-time + background jobs",
          v: [{ em: "Live" }],
          d: "Socket.io for live notifications. BullMQ + Redis for CSV imports and scheduled reminders — all running quietly in the background.",
        },
      ],
      pillars: [
        {
          ix: "P · 01",
          t: ["Built ", { em: "Hebrew-first" }, "."],
          d: "Full RTL support from the ground up — not bolted on after. Every layout, component, and type decision was made with Hebrew as the primary language.",
        },
        {
          ix: "P · 02",
          t: [{ em: "See" }, " what's coming."],
          d: "A financial timeline that surfaces upcoming charges before they hit. Push and email reminders give you a one-tap path to cancel — no fine print digging.",
        },
        {
          ix: "P · 03",
          t: ["Production ", { em: "standards" }, "."],
          d: "Soft-delete, structured logging, typed error codes, token rotation with mutex — built as if it were going to production, because it is.",
        },
      ],
      techlbl: "Built with",
      liveUrl: "https://cashplus-app.com",
      liveLabel: "↗ Visit cashplus-app.com",
    },
    exp: {
      num: "04 / Track record",
      title: ["Where I've ", { em: "shipped" }, "."],
      now: "● Now",
      range: "2021 — Present",
      role: [{ em: "Frontend Engineer" }, " · Cinten"],
      sub: " (formerly BeST)",
      meta: "Tel Aviv · B2B SaaS platform · React / TypeScript",
      bullets: [
        "Built and maintained user-facing features across multiple product areas in a production React and TypeScript codebase.",
        "Shipped responsive UI components and integrated the frontend with backend APIs and real-time data streams.",
        "Implemented authentication flows, protected routes, and role-based access control end-to-end.",
        "Improved usability, rendering performance, and long-term code maintainability across the product.",
        "Expanded test coverage with Vitest and Playwright, and leveraged AI-assisted tools to accelerate implementation, refactoring, and debugging.",
      ],
    },
    edu: {
      num: "05 / Education",
      title: ["Where it ", { em: "started" }, "."],
      c1k: "Certificate · 2020–2021",
      c1t: [{ em: "SVCollege" }],
      c1tSub: "Frontend Development",
      c1m: "React · JS · UI fundamentals",
      c2k: "Final GPA",
      c2v: [{ em: "97" }],
      c2m: "Top of cohort · Capstone project shipped to production",
    },
    play: {
      num: "06 / Misc",
      title: ["Things on the ", { em: "side" }, "."],
      cards: [
        {
          l: "Languages",
          t: ["Hebrew ", { em: "·" }, " English"],
          d: "Native Hebrew, professional working English. Comfortable in async teams, remote-first, written-spec workflows.",
          s: "Bilingual UI work",
        },
        {
          l: "Practice",
          t: [{ em: "Motion" }, " & micro-UX"],
          d: "An ongoing study of the small choices — easings, hover states, loading rhythms — that make products feel alive instead of correct.",
          s: "Always shipping",
        },
        {
          l: "Workflow",
          t: ["AI-assisted ", { em: "dev" }],
          d: "Heavy use of AI tooling for refactors, tests, debugging loops and codebase navigation — to spend more time on the product and less on the plumbing.",
          s: "Daily",
        },
      ],
    },
    contact: {
      pre: "07 / Let's talk · Available Q1 2026",
      l1: "Have a product",
      l2: ["that ", { em: "deserves" }, " a better front?"],
      email: "pini5192@gmail.com",
      channels: [
        { label: "✦ Email", href: "mailto:pini5192@gmail.com" },
        { label: "✦ +972 54 834 5192", href: "tel:+972548345192" },
        { label: "✦ LinkedIn", href: "https://linkedin.com/in/pini-shteren" },
        { label: "✦ GitHub", href: "https://github.com/PiniShterenNew" },
        { label: "↑ Back to top", href: "#top" },
      ],
    },
    footer: {
      left: "© 2026 Pini Shteren",
      center: "Designed & built by hand.",
      right: "v1.0 · IL",
    },
  },

  he: {
    dir: "rtl",
    nav: {
      mark: "פיני שטרן / Frontend",
      work: "עבודה",
      about: "אודות",
      contact: "צור קשר",
    },
    hero: {
      metaBased: "ממוקם ב",
      metaBasedV: "ישראל · UTC+3",
      metaYears: "ניסיון",
      metaYearsV: "5+ שנים של שיפ לפרודקשן",
      metaStatus: "זמינות",
      metaStatusV: "● פנוי להזדמנויות · 2026",
      l1: ["מהנדס"],
      l2: ["פרונטאנד ", { em: "שבונה" }],
      l3: [{ stroke: "ממשקים" }, " שאנשים"],
      l4: ["באמת ", { em: "נהנים" }, " מהם."],
      tag: "אני מעצב ובונה את הצד הקדמי של מוצרים — React, TypeScript, ואובססיה בריאה לאיך שדברים מרגישים מתחת לעכבר.",
      cta1: "לעבודות",
      cta2: "להגיד שלום",
      scroll: "גלול",
      portraitBadge: "פיני · תל אביב",
    },
    about: {
      num: "01 / אודות",
      title: [{ em: "שלום." }, " הגרסה הקצרה."],
      p1: [
        "אני ",
        { em: "פיני" },
        " — מהנדס פרונטאנד עם חמש שנים של בניית אפליקציות React ו-TypeScript שרצות בפרודקשן יום-יום. אכפת לי מהפינות: המילישנייה לפני שטולטיפ מופיע, העקומה שעליה פאנל נפתח, ה-empty state ששאף אחר לא חשב עליו.",
      ],
      p2: "אני עובד end-to-end על UI מוצרי — מ-Figma מחוספס ועד פיצ׳ר שמותקן, מדבר עם עיצוב, באקאנד ו-QA לאורך הדרך. לאחרונה אני נשען חזק על workflows מבוססי AI לרפקטורים, בדיקות ולופי דיבאג מהירים.",
      f1k: "כרגע",
      f1v: [{ em: "Cinten" }],
      f1s: "B2B SaaS · מאז 2021 (לשעבר BeST)",
      f2k: "סטאק מועדף",
      f2v: ["React", { em: "·" }, "TS"],
      f2s: "Tailwind, shadcn, Vite, Zustand",
      f3k: "משיק מאז",
      f3v: ["202", { em: "1" }],
      f3s: "פיצ׳רים בפרודקשן, יום-יום",
      f4k: "אוהב",
      f4v: "מיקרו-UX",
      f4s: "Empty states · Hover · Motion",
    },
    skills: {
      num: "02 / Stack",
      title: ["ה", { em: "כלים" }, ", לפי שעות שימוש."],
      rows: [
        {
          cat: "Frontend",
          items: [
            { text: "React", hl: true },
            { text: "TypeScript", hl: true },
            { text: "JavaScript ES6+" },
            { text: "Next.js" },
            { text: "HTML5" },
            { text: "CSS3" },
          ],
          count: "06",
        },
        {
          cat: "State & Data",
          items: [
            { text: "Redux Toolkit" },
            { text: "Zustand", hl: true },
            { text: "Context API" },
          ],
          count: "03",
        },
        {
          cat: "UI & עיצוב",
          items: [
            { text: "Tailwind", hl: true },
            { text: "Styled Components" },
            { text: "shadcn/ui", hl: true },
            { text: "Ant Design" },
            { text: "i18n" },
          ],
          count: "05",
        },
        {
          cat: "Backend & APIs",
          items: [
            { text: "Node.js" },
            { text: "Express" },
            { text: "REST APIs" },
            { text: "PostgreSQL" },
            { text: "MongoDB" },
          ],
          count: "05",
        },
        {
          cat: "Testing & כלים",
          items: [
            { text: "Vitest", hl: true },
            { text: "Playwright", hl: true },
            { text: "Vite" },
            { text: "Git" },
            { text: "כלי AI לפיתוח" },
          ],
          count: "05",
        },
      ],
    },
    proj: {
      num: "03 / עבודה נבחרת",
      head: ["דבר ", { em: "אחד" }, " בכל פעם."],
      brandline: "פיננסים אישיים · Full-Stack · 2025",
      name: ["Cash ", { em: "Plus" }],
      pitch:
        "אפליקציית Full-Stack לניהול כל ההוצאות החוזרות שלך — מנויים, שכירות, הלוואות — עם ציר זמן שמראה מה עומד לצאת מחשבונך ומתי.",
      ui: {
        greet: "היי, פיני ↗",
        balL: "מנויים חודשיים",
        balV: ["$", { em: "184" }, ".50"],
        balD: "↓ חסכת $32 החודש",
        upcoming: "חידושים השבוע",
        sub1: "מתחדש · ב׳",
        sub2: "מתחדש · ד׳",
        sub3: "מתחדש · ה׳",
        sub4: "מתחדש · ש׳",
        cta: "סקירה וביטול",
      },
      metrics: [
        {
          k: "Type safety מקצה לקצה",
          v: [{ em: "Zod" }],
          d: "Schemas משותפים בין client ו-server במונורפו של pnpm — מקור אמת אחד מה-DB ועד ה-UI, ללא כפילות.",
        },
        {
          k: "אבטחת Auth",
          v: [{ em: "JWT" }, " ×2"],
          d: "מערכת dual-token: access token בזיכרון (15 דקות) + refresh token ב-httpOnly cookie (7 ימים). מוגן מפני XSS עם rotation ו-mutex.",
        },
        {
          k: "Real-time + עבודות ברקע",
          v: [{ em: "Live" }],
          d: "Socket.io לעדכונים חיים. BullMQ + Redis לייבוא CSV ולתזמון תזכורות — הכל רץ בשקט ברקע.",
        },
      ],
      pillars: [
        {
          ix: "P · 01",
          t: ["נבנה ", { em: "עברית-ראשון" }, "."],
          d: "תמיכת RTL מלאה מהיסוד — לא הוספה בדיעבד. כל החלטת layout, קומפוננטה וטיפוגרפיה נלקחה כשעברית היא השפה הראשית.",
        },
        {
          ix: "P · 02",
          t: [{ em: "לראות" }, " מה מגיע."],
          d: "ציר זמן פיננסי שמציף חיובים עתידיים לפני שהם מגיעים. התראות Push ומייל עם נתיב ביטול בלחיצה אחת — בלי לחפש את האותיות הקטנות.",
        },
        {
          ix: "P · 03",
          t: ["סטנדרטים של ", { em: "פרודקשן" }, "."],
          d: "Soft-delete, structured logging, קודי שגיאה עם טיפוס, token rotation עם mutex — נבנה כאילו הוא הולך לפרודקשן, כי הוא הולך.",
        },
      ],
      techlbl: "נבנה עם",
      liveUrl: "https://cashplus-app.com",
      liveLabel: "↗ cashplus-app.com",
    },
    exp: {
      num: "04 / ניסיון",
      title: ["איפה ", { em: "עבדתי" }, "."],
      now: "● עכשיו",
      range: "2021 — היום",
      role: [{ em: "Frontend Engineer" }, " · Cinten"],
      sub: " (לשעבר BeST)",
      meta: "תל אביב · פלטפורמת B2B SaaS · React / TypeScript",
      bullets: [
        "בניתי ותחזקתי פיצ׳רים ופלואו של משתמש קצה במגוון אזורי מוצר בקודבייס פרודקשן ב-React/TypeScript.",
        "שיפתי קומפוננטות UI רספונסיביות וחיברתי את הצד הקדמי ל-APIs ולעדכונים בזמן אמת.",
        "מימוש פלואו של אימות, נתיבים מוגנים והתנהגות UI לפי הרשאות — מקצה לקצה.",
        "שיפור שמישות, ביצועי רינדור ותחזוקתיות קוד לאורך המוצר.",
        "תרמתי לכיסוי בדיקות עם Vitest ו-Playwright; נשען על כלי AI להאצת מימוש, רפקטור ודיבאג.",
      ],
    },
    edu: {
      num: "05 / השכלה",
      title: ["איפה זה ", { em: "התחיל" }, "."],
      c1k: "תעודה · 2020–2021",
      c1t: [{ em: "SVCollege" }],
      c1tSub: "פיתוח Frontend",
      c1m: "React · JS · יסודות UI",
      c2k: "ציון סופי",
      c2v: [{ em: "97" }],
      c2m: "ראש המחזור · פרויקט גמר שהותקן לפרודקשן",
    },
    play: {
      num: "06 / שונות",
      title: ["דברים ", { em: "בצד" }, "."],
      cards: [
        {
          l: "שפות",
          t: ["עברית ", { em: "·" }, " אנגלית"],
          d: "עברית שפת אם, אנגלית מקצועית. נוח בצוותים אסינכרוניים, remote-first, ו-spec בכתב.",
          s: "עבודה דו-לשונית",
        },
        {
          l: "תרגול",
          t: [{ em: "Motion" }, " & micro-UX"],
          d: "מחקר מתמשך של הבחירות הקטנות — easings, hover, קצב טעינה — שגורמות למוצר להרגיש חי במקום פשוט נכון.",
          s: "תמיד משיק",
        },
        {
          l: "Workflow",
          t: ["AI-assisted ", { em: "dev" }],
          d: "שימוש כבד בכלי AI לרפקטור, בדיקות, לופי דיבאג וניווט בקודבייס — כדי לבלות יותר זמן על המוצר ופחות על האינסטלציה.",
          s: "יום-יום",
        },
      ],
    },
    contact: {
      pre: "07 / בוא נדבר · זמין Q1 2026",
      l1: "יש לך מוצר",
      l2: ["ש", { em: "מגיע" }, " לו פרונט יותר טוב?"],
      email: "pini5192@gmail.com",
      channels: [
        { label: "✦ Email", href: "mailto:pini5192@gmail.com" },
        { label: "✦ +972 54 834 5192", href: "tel:+972548345192" },
        { label: "✦ LinkedIn", href: "https://linkedin.com/in/pini-shteren" },
        { label: "✦ GitHub", href: "https://github.com/PiniShterenNew" },
        { label: "↑ חזרה למעלה", href: "#top" },
      ],
    },
    footer: {
      left: "© 2026 פיני שטרן",
      center: "עוצב ונבנה ביד.",
      right: "v1.0 · IL",
    },
  },
};

export default translations;
