export type Lang = "en" | "he";

export interface Translation {
  dir: "ltr" | "rtl";
  nav: {
    work: string;
    stack: string;
    experience: string;
    ai: string;
    contact: string;
    resume: string;
    getInTouch: string;
  };
  hero: {
    role: string;
    name: string;
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
    sub: string;
    cta1: string;
    cta2: string;
    meta: { based: string; city: string; status: string; since: string };
    caption: string;
    scroll: string;
  };
  marquee: string[];
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    facts: { k: string; v: string }[];
  };
  stack: {
    eyebrow: string;
    title: string;
    sub: string;
    groups: { title: string; items: string[] }[];
  };
  work: {
    eyebrow: string;
    title: string;
    sub: string;
    cases: {
      tag: string;
      title: string;
      desc: string;
      metrics: { k: string; v: string }[];
    }[];
  };
  ai: {
    eyebrow: string;
    title: string;
    sub: string;
    tabs: { chat: string; estimator: string };
    chatPlaceholder: string;
    send: string;
    suggestions: string[];
    estimator: {
      title: string;
      sub: string;
      placeholder: string;
      analyze: string;
      analyzing: string;
      empty: string;
    };
    disclaimer: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    entries: {
      org: string;
      role: string;
      where: string;
      time: string;
      points: string[];
    }[];
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    sub: string;
    emailLabel: string;
    links: { email: string; phone: string };
    footer: string;
  };
}

const translations: Record<Lang, Translation> = {
  en: {
    dir: "ltr",
    nav: {
      work: "Work",
      stack: "Craft",
      experience: "Path",
      ai: "AI",
      contact: "Contact",
      resume: "Resume",
      getInTouch: "Hire me",
    },
    hero: {
      role: "React.js Developer · Frontend Engineer",
      name: "Pini Shteren",
      tag1: "I build",
      tag2: "high-performance",
      tag3: "interfaces",
      tag4: "for the web.",
      sub: "Five years turning 30-second waits into sub-second ones. React, TypeScript, real-time systems and the kind of obsessive performance work that makes products feel inevitable.",
      cta1: "See the work",
      cta2: "Ask the AI",
      meta: { based: "Based in", city: "Tel Aviv, IL", status: "Available", since: "since '21" },
      caption: "Caught between cigars & code. Tel Aviv, 2024.",
      scroll: "Scroll",
    },
    marquee: ["React.js", "TypeScript", "Real-time", "Performance", "WebSockets", "Architecture", "RBAC", "Accessibility"],
    about: {
      eyebrow: "01 — About",
      title: "Frontend, but the obsessive kind.",
      body: [
        "I'm a React engineer based in Tel Aviv. For five years I've shipped production-grade UIs for a real-time B2B SaaS platform — the kind with hundreds of concurrent users, five permission tiers, and zero tolerance for jank.",
        "I care about three things, in order: how the code reads in two years, how the interface feels in two seconds, how the architecture scales in two quarters.",
      ],
      facts: [
        { k: "5+", v: "Years shipping" },
        { k: "97%", v: "Latency cut" },
        { k: "85+", v: "Lighthouse" },
        { k: "20+", v: "Screens shipped" },
      ],
    },
    stack: {
      eyebrow: "02 — Craft",
      title: "The tools, sharpened.",
      sub: "Pragmatic. Battle-tested. Picked for the long haul, not the demo.",
      groups: [
        { title: "Frontend", items: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "i18n"] },
        { title: "State & Realtime", items: ["Redux Toolkit", "Zustand", "Socket.io", "WebSockets", "Context API", "REST"] },
        { title: "Backend & Tooling", items: ["Node.js", "Express", "Postgres", "Vite", "Playwright", "Vitest"] },
      ],
    },
    work: {
      eyebrow: "03 — Selected work",
      title: "Three problems. Three measurable wins.",
      sub: "Confidential client work — UI mockups shown.",
      cases: [
        {
          tag: "01 / Realtime",
          title: "From polling to streams.",
          desc: "Replaced a 30-second polling cycle with a Socket.io architecture serving hundreds of concurrent users. Re-thought the data layer end-to-end.",
          metrics: [
            { k: "97%", v: "Latency reduction" },
            { k: "<1s", v: "Live updates" },
            { k: "100s", v: "Concurrent users" },
          ],
        },
        {
          tag: "02 / Access",
          title: "Permissions, declarative.",
          desc: "A frontend RBAC system spanning five user tiers — gated features, conditional UI, protected routing — exposed through a single readable permission API.",
          metrics: [
            { k: "5+", v: "User tiers" },
            { k: "100%", v: "Route coverage" },
            { k: "1", v: "Permission API" },
          ],
        },
        {
          tag: "03 / Performance",
          title: "55 to 85+, tracked.",
          desc: "Bundle slashed by ~35%. Lighthouse score climbed from 55 to 85+. Test coverage from sparse to 80%+. Regression bugs cut by ~40%.",
          metrics: [
            { k: "−35%", v: "Bundle size" },
            { k: "55 → 85+", v: "Lighthouse" },
            { k: "−40%", v: "Regressions" },
          ],
        },
      ],
    },
    ai: {
      eyebrow: "04 — Live demo",
      title: "Talk to the portfolio.",
      sub: "A real AI grounded in my CV. Ask anything — or describe your project for a tech-stack recommendation.",
      tabs: { chat: "Ask About Pini", estimator: "Project Estimator" },
      chatPlaceholder: "Ask about experience, stack, projects…",
      send: "Send",
      suggestions: [
        "What's your biggest performance win?",
        "Real-time architecture experience?",
        "Available for full-time?",
        "Tell me about RBAC.",
      ],
      estimator: {
        title: "Describe your project.",
        sub: "I'll suggest a stack and rough timeline.",
        placeholder: "e.g., A real-time IoT dashboard with role-based admin panel.",
        analyze: "Analyze with AI",
        analyzing: "Analyzing…",
        empty: "Your tailored recommendation will appear here.",
      },
      disclaimer: "Powered by Claude · responses are AI-generated.",
    },
    experience: {
      eyebrow: "05 — Path",
      title: "Five years of shipping.",
      entries: [
        {
          org: "Cinten (formerly BeST)",
          role: "React.js Developer / Frontend Engineer",
          where: "Tel Aviv, IL",
          time: "Jul 2021 — Present",
          points: [
            "Replaced polling with Socket.io WebSocket streams — 30s → <1s latency for hundreds of concurrent users.",
            "Built a frontend RBAC system covering 5+ user roles with permission-gated features and protected routing.",
            "Bundle −35%; Lighthouse 55 → 85+; coverage to 80%+; Playwright E2E across releases.",
          ],
        },
        {
          org: "SVCollege",
          role: "Frontend Development Certificate",
          where: "Israel",
          time: "2020 — 2021",
          points: [
            "Intensive industry-focused program: JavaScript, React, HTML5/CSS3, web architecture, UI design.",
            "Graduated top of cohort. GPA: 97.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "06 — Let's talk",
      titleA: "Have something",
      titleB: "complex",
      titleC: "to ship?",
      sub: "Available for new opportunities — full-time or contract, on-site Israel or remote.",
      emailLabel: "Email me",
      links: { email: "pini5192@gmail.com", phone: "+972-54-834-5192" },
      footer: "© 2026 Pini Shteren — designed & built with intention.",
    },
  },
  he: {
    dir: "rtl",
    nav: {
      work: "עבודות",
      stack: "כלים",
      experience: "מסלול",
      ai: "AI",
      contact: "צור קשר",
      resume: "קו״ח",
      getInTouch: "שכור אותי",
    },
    hero: {
      role: "מפתח React.js · מהנדס פרונטאנד",
      name: "פיני שטרן",
      tag1: "אני בונה",
      tag2: "ממשקים מהירים",
      tag3: "וחכמים",
      tag4: "לאינטרנט.",
      sub: "חמש שנים של הפיכת המתנות של 30 שניות לפחות משנייה. React, TypeScript, מערכות בזמן אמת, ועבודת ביצועים אובססיבית שגורמת למוצרים להרגיש מובנים מאליהם.",
      cta1: "ראה עבודות",
      cta2: "שאל את ה-AI",
      meta: { based: "ממוקם ב", city: "תל אביב", status: "פנוי", since: "מ-2021" },
      caption: "בין סיגרים לקוד. תל אביב, 2024.",
      scroll: "גלול",
    },
    marquee: ["React.js", "TypeScript", "זמן אמת", "ביצועים", "WebSockets", "ארכיטקטורה", "RBAC", "נגישות"],
    about: {
      eyebrow: "01 — אודות",
      title: "פרונטאנד, מהסוג האובססיבי.",
      body: [
        "אני מפתח React מתל אביב. חמש שנים שאני משלח ממשקי פרודקשן לפלטפורמת SaaS B2B בזמן אמת — מהסוג עם מאות משתמשים בו-זמנית, חמש דרגות הרשאה, ואפס סובלנות ל-jank.",
        "אכפת לי משלושה דברים, בסדר הזה: איך הקוד נקרא בעוד שנתיים, איך הממשק מרגיש בעוד שתי שניות, ואיך הארכיטקטורה מתרחבת בעוד שני רבעונים.",
      ],
      facts: [
        { k: "+5", v: "שנים בפרודקשן" },
        { k: "97%", v: "שיפור latency" },
        { k: "+85", v: "Lighthouse" },
        { k: "+20", v: "מסכים" },
      ],
    },
    stack: {
      eyebrow: "02 — כלים",
      title: "הכלים, מחודדים.",
      sub: "פרגמטי. נבדק בקרב. נבחר לטווח ארוך, לא להדגמה.",
      groups: [
        { title: "צד לקוח", items: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "i18n"] },
        { title: "מצב וזמן אמת", items: ["Redux Toolkit", "Zustand", "Socket.io", "WebSockets", "Context API", "REST"] },
        { title: "צד שרת וכלים", items: ["Node.js", "Express", "Postgres", "Vite", "Playwright", "Vitest"] },
      ],
    },
    work: {
      eyebrow: "03 — עבודות נבחרות",
      title: "שלוש בעיות. שלושה הישגים מדידים.",
      sub: "עבודת לקוח חסויה — מוצגות סקיצות UI.",
      cases: [
        {
          tag: "01 / זמן אמת",
          title: "מ-Polling לזרמים.",
          desc: "החלפתי מחזור polling של 30 שניות בארכיטקטורת Socket.io שמשרתת מאות משתמשים. שכבת הנתונים תוכננה מחדש מקצה לקצה.",
          metrics: [
            { k: "97%", v: "שיפור latency" },
            { k: ">1s", v: "עדכונים חיים" },
            { k: "מאות", v: "משתמשים" },
          ],
        },
        {
          tag: "02 / הרשאות",
          title: "הרשאות, דקלרטיבי.",
          desc: "מערכת RBAC בצד הלקוח עם חמש דרגות משתמש — פיצ׳רים מותנים, UI מותאם, ניתוב מוגן — דרך API הרשאות אחד וקריא.",
          metrics: [
            { k: "+5", v: "דרגות משתמש" },
            { k: "100%", v: "כיסוי ניתוב" },
            { k: "1", v: "API הרשאות" },
          ],
        },
        {
          tag: "03 / ביצועים",
          title: "מ-55 ל-85+, מדיד.",
          desc: "Bundle הוקטן ב-~35%. Lighthouse עלה מ-55 ל-85+. כיסוי בדיקות מדל ל-80%+. רגרסיות הצטמצמו ב-~40%.",
          metrics: [
            { k: "35%-", v: "גודל Bundle" },
            { k: "55 → 85+", v: "Lighthouse" },
            { k: "40%-", v: "רגרסיות" },
          ],
        },
      ],
    },
    ai: {
      eyebrow: "04 — הדגמה חיה",
      title: "דבר עם הפורטפוליו.",
      sub: "AI אמיתי מבוסס על קורות החיים שלי. שאל כל דבר — או תאר את הפרויקט שלך להמלצת סטאק.",
      tabs: { chat: "שאל על פיני", estimator: "הערכת פרויקט" },
      chatPlaceholder: "שאל על ניסיון, סטאק, פרויקטים…",
      send: "שלח",
      suggestions: [
        "מה ההישג הכי גדול שלך בביצועים?",
        "ניסיון בארכיטקטורת זמן אמת?",
        "פנוי למשרה מלאה?",
        "ספר על RBAC.",
      ],
      estimator: {
        title: "תאר את הפרויקט שלך.",
        sub: "אציע סטאק ולוח זמנים משוער.",
        placeholder: "לדוגמה: דשבורד IoT בזמן אמת עם פאנל אדמין מבוסס הרשאות.",
        analyze: "נתח עם AI",
        analyzing: "מנתח…",
        empty: "ההמלצה המותאמת תופיע כאן.",
      },
      disclaimer: "מופעל ע״י Claude · התשובות נוצרות ע״י AI.",
    },
    experience: {
      eyebrow: "05 — מסלול",
      title: "חמש שנים של שילוח.",
      entries: [
        {
          org: "Cinten (לשעבר BeST)",
          role: "מפתח React.js / מהנדס פרונטאנד",
          where: "תל אביב",
          time: "יולי 2021 — היום",
          points: [
            "החלפתי polling בזרמי WebSocket — 30 שניות → פחות משנייה למאות משתמשים בו-זמנית.",
            "בניתי מערכת RBAC בצד הלקוח עם 5+ דרגות משתמש: פיצ׳רים מותנים וניתוב מוגן.",
            "Bundle 35%-; Lighthouse 55 → 85+; כיסוי ל-80%+; Playwright E2E בכל הריליסים.",
          ],
        },
        {
          org: "SVCollege",
          role: "תעודת פיתוח פרונטאנד",
          where: "ישראל",
          time: "2020 — 2021",
          points: [
            "תוכנית אינטנסיבית בהתאמה לתעשייה: JavaScript, React, HTML5/CSS3, ארכיטקטורת ווב, עיצוב UI.",
            "סיימתי מצטיין מחזור. ממוצע: 97.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "06 — בוא נדבר",
      titleA: "יש לך משהו",
      titleB: "מורכב",
      titleC: "לשלוח?",
      sub: "פנוי להזדמנויות חדשות — משרה מלאה או חוזה, באתר בישראל או מרחוק.",
      emailLabel: "שלח לי מייל",
      links: { email: "pini5192@gmail.com", phone: "+972-54-834-5192" },
      footer: "© 2026 פיני שטרן — עוצב ונבנה בכוונה.",
    },
  },
};

export default translations;
