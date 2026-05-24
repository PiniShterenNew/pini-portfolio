"use client";

import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Segments from "@/components/Segments";

export default function Experience() {
  const { t } = useApp();
  const e = t.exp;

  return (
    <section className="section shell" id="experience">
      <div className="wrap">
        <Reveal as="header" className="section__head">
          <span className="section__num">{e.num}</span>
          <h2 className="section__title">
            <Segments parts={e.title} />
          </h2>
        </Reveal>

        <div className="timeline">
          <Reveal className="tl-item">
            <div className="tl-item__date">
              <span className="now">{e.now}</span>
              <br />
              {e.range}
            </div>
            <div className="tl-item__body">
              <h3 className="tl-role">
                <Segments parts={e.role} />
                <span style={{ fontSize: "0.6em", color: "var(--ink-dim)" }}>{e.sub}</span>
              </h3>
              <div className="tl-meta">{e.meta}</div>
              <ul className="tl-bullets">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
