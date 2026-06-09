// Description: Testimonials section - single large quote card from Nir Cohen (CTO @ Cinten)
// Author: Pinchas
// Created with claude.md rules
"use client";

import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Segments from "@/components/Segments";

export default function Testimonials() {
  const { t } = useApp();
  const s = t.testimonials;

  return (
    <section className="section shell" id="testimonials">
      <div className="wrap">
        <Reveal as="header" className="section__head">
          <span className="section__num">{s.num}</span>
          <h2 className="section__title">
            <Segments parts={s.title} />
          </h2>
        </Reveal>

        <div className="testimonials">
          {s.items.map((item, i) => (
            <Reveal key={i} className="testimonial-card" delay={i * 80}>
              <div className="testimonial-card__quote-mark" aria-hidden="true">
                "
              </div>
              <blockquote className="testimonial-card__body">
                <p className="testimonial-card__text">{item.quote}</p>
                <footer className="testimonial-card__credit">
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    {item.author.charAt(0)}
                  </span>
                  <div className="testimonial-card__meta">
                    <strong className="testimonial-card__author">{item.author}</strong>
                    <span className="testimonial-card__role">
                      {item.role}
                      {" · "}
                      <span className="testimonial-card__company">{item.company}</span>
                    </span>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
