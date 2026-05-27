"use client";

import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Segments from "@/components/Segments";
import Marquee from "@/components/Marquee";

export default function About() {
  const { t } = useApp();
  const a = t.about;

  return (
    <section className="section shell" id="about">
      <div className="wrap">
        <Reveal as="header" className="section__head">
          <span className="section__num">{a.num}</span>
          <h2 className="section__title">
            <Segments parts={a.title} />
          </h2>
        </Reveal>

        <Reveal className="about">
          <div className="about__bio rtl:text-right ltr:text-left">
            <p>
              <Segments parts={a.p1} />
            </p>
            <p>{a.p2}</p>
          </div>

          <div className="factgrid">
            <div className="fact">
              <span className="k">{a.f1k}</span>
              <span className="v">
                <Segments parts={a.f1v} />
              </span>
              <span className="sub">{a.f1s}</span>
            </div>
            <div className="fact">
              <span className="k">{a.f2k}</span>
              <span className="v">
                <Segments parts={a.f2v} />
              </span>
              <span className="sub">{a.f2s}</span>
            </div>
            <div className="fact">
              <span className="k">{a.f3k}</span>
              <span className="v">
                <Segments parts={a.f3v} />
              </span>
              <span className="sub">{a.f3s}</span>
            </div>
            <div className="fact">
              <span className="k">{a.f4k}</span>
              <span className="v">{a.f4v}</span>
              <span className="sub">{a.f4s}</span>
            </div>
          </div>
        </Reveal>

        <Marquee />
      </div>
    </section>
  );
}
