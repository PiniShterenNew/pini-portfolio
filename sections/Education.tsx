"use client";

import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Segments from "@/components/Segments";

export default function Education() {
  const { t } = useApp();
  const e = t.edu;

  return (
    <section className="section shell" id="education">
      <div className="wrap">
        <Reveal as="header" className="section__head">
          <span className="section__num">{e.num}</span>
          <h2 className="section__title">
            <Segments parts={e.title} />
          </h2>
        </Reveal>

        <div className="edu">
          <Reveal className="edu__card">
            <span className="k">{e.c1k}</span>
            <h3 className="t">
              <Segments parts={e.c1t} />
              <br />
              <span>{e.c1tSub}</span>
            </h3>
            <div className="meta">{e.c1m}</div>
          </Reveal>
          <Reveal className="edu__card" delay={80}>
            <span className="k">{e.c2k}</span>
            <div className="gpa">
              <Segments parts={e.c2v} />
            </div>
            <div className="meta">{e.c2m}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
