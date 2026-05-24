"use client";

import Image from "next/image";
import { useApp } from "@/contexts/AppContext";

export default function Navbar() {
  const { lang, toggleLang, t } = useApp();

  return (
    <nav className="nav">
      <div className="nav__mark">
        <Image
          src="/logo.svg"
          alt="Pini Shteren"
          width={28}
          height={28}
          className="nav__logo"
          priority
        />
        <span>{t.nav.mark}</span>
      </div>
      <div className="nav__links">
        <a href="#work">{t.nav.work}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#contact">{t.nav.contact}</a>
        <button className="langtoggle" onClick={toggleLang} aria-label="Switch language">
          <span className={lang === "en" ? "on" : undefined}>EN</span>
          <span style={{ opacity: 0.3 }}>/</span>
          <span className={lang === "he" ? "on" : undefined}>עב</span>
        </button>
      </div>
    </nav>
  );
}
