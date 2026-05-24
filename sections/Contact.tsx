"use client";

import { useApp } from "@/contexts/AppContext";
import Reveal from "@/components/Reveal";
import Segments from "@/components/Segments";

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;

  return (
    <section className="contact shell" id="contact">
      <div className="wrap">
        <div className="contact__pre">{c.pre}</div>
        <Reveal as="h2" className="contact__big">
          <span>{c.l1}</span>
          <br />
          <span>
            <Segments parts={c.l2} />
          </span>
          <br />
          <a href={`mailto:${c.email}`}>
            {c.email}
            <em>.</em>
          </a>
        </Reveal>

        <Reveal className="contact__channels">
          {c.channels.map((ch, i) => (
            <a key={i} href={ch.href}>
              {ch.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
