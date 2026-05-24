"use client";

import Image from "next/image";
import { useApp } from "@/contexts/AppContext";

export default function Footer() {
  const { t } = useApp();
  const f = t.footer;

  return (
    <footer className="footer">
      <span>{f.left}</span>
      <div className="footer__brand">
        <Image src="/logo.svg" alt="Pini Shteren" width={20} height={20} className="footer__logo" />
        <span style={{ color: "var(--accent)" }}>{f.center}</span>
      </div>
      <span>{f.right}</span>
    </footer>
  );
}
