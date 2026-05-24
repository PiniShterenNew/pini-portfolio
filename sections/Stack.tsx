"use client";

import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Segments from "@/components/Segments";

export default function Stack() {
  const { t } = useApp();
  const s = t.skills;

  return (
    <section className="section shell" id="skills">
      <div className="wrap">
        <Reveal as="header" className="section__head">
          <span className="section__num">{s.num}</span>
          <h2 className="section__title">
            <Segments parts={s.title} />
          </h2>
        </Reveal>

        <div className="skills">
          {s.rows.map((row, i) => (
            <Reveal key={i} className="skillrow" delay={i * 50}>
              <span className="skillrow__cat">{row.cat}</span>
              <span className="skillrow__items">
                {row.items.map((it, j) => (
                  <span key={j} className={`skill ${it.hl ? "skill--hl" : ""}`}>
                    {it.text}
                  </span>
                ))}
              </span>
              <span className="skillrow__count">{row.count}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
