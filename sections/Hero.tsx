"use client";

import { useApp } from "@/contexts/AppContext";
import Segments from "@/components/Segments";
import Ticker from "@/components/Ticker";
import PortraitPicture from "@/components/PortraitPicture";

export default function Hero() {
  const { t, lang } = useApp();

  return (
    <section className="hero shell" id="top">
      <div className="wrap hero__grid">
        <div className="hero__content">
          <div className="hero__meta">
            <div className="item">
              <span className="label">{t.hero.metaBased}</span>
              <span className="value">{t.hero.metaBasedV}</span>
            </div>
            <div className="item">
              <span className="label">{t.hero.metaYears}</span>
              <span className="value">{t.hero.metaYearsV}</span>
            </div>
            <div className="item">
              <span className="label">{t.hero.metaStatus}</span>
              <span className="value live">{t.hero.metaStatusV}</span>
            </div>
          </div>

          <h1 className="display">
            <span className="stack">
              <Segments parts={t.hero.l1} />
            </span>
            <span className="stack">
              <Segments parts={t.hero.l2} />
            </span>
            <span className="stack">
              <Segments parts={t.hero.l3} />
            </span>
            <span className="stack">
              <Segments parts={t.hero.l4} />
            </span>
          </h1>

          <div className="hero__sub">
            <p className="hero__tag">{t.hero.tag}</p>
            <div className="hero__cta">
              <a href="#work" className="btn btn--solid">
                {t.hero.cta1}
                <span className="arrow">{lang === "he" ? "←" : "→"}</span>
              </a>
              <a href="mailto:pini5192@gmail.com" className="btn">
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>

        <aside className="hero__portrait" aria-hidden="false">
          <PortraitPicture alt="Pini Shteren" priority sizes="(min-width: 1024px) 40vw, 100vw" />
          <span className="hero__portrait-badge">{t.hero.portraitBadge}</span>
        </aside>
      </div>

      <Ticker />
    </section>
  );
}
