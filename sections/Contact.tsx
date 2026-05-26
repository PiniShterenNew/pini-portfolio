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
          <a href={`mailto:${c.email}`} className="contact__email-link">
            {c.email}
            <em>.</em>
          </a>
        </Reveal>

        <Reveal className="contact__channels">
          <div className="contact__channels-primary">
            <a href={c.channels[0].href} className="contact__channel--primary">
              {c.channels[0].label}
            </a>
          </div>
          <div className="contact__channels-secondary">
            {c.channels.slice(1, 4).map((ch, i) => (
              <a key={i} href={ch.href} className="contact__channel--secondary">
                {ch.label}
              </a>
            ))}
          </div>
          <div className="contact__channels-utility">
            <a href={c.channels[4].href} className="contact__channel--utility">
              {c.channels[4].label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
