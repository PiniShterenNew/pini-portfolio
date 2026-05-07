import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span className="inline-block h-px w-8 bg-[var(--text)]" />
      <span>{children}</span>
    </div>
  );
}
