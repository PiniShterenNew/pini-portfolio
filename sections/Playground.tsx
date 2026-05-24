"use client";

import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Segments from "@/components/Segments";

export default function Playground() {
  const { t } = useApp();
  const p = t.play;

  return (
    <section className="section shell" id="playground">
      <div className="wrap">
        <Reveal as="header" className="section__head">
          <span className="section__num">{p.num}</span>
          <h2 className="section__title">
            <Segments parts={p.title} />
          </h2>
        </Reveal>

        <div className="playground">
          {p.cards.map((c, i) => (
            <Reveal key={i} className="play" delay={i * 80}>
              <span className="label">{c.l}</span>
              <h4 className="ttl">
                <Segments parts={c.t} />
              </h4>
              <p className="desc">{c.d}</p>
              <div className="stamp">
                ● <span>{c.s}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
