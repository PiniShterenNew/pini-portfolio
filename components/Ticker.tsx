const phrases = [
  "REACT",
  "TYPESCRIPT",
  "PRODUCT UI",
  "MICRO-INTERACTIONS",
  "SHIPPING DAILY",
  "B2B SAAS",
  "FRONTEND ENGINEER",
  "ISRAEL",
  "AVAILABLE 2026",
  "★",
  "REACT",
  "TYPESCRIPT",
  "PRODUCT UI",
  "MICRO-INTERACTIONS",
  "SHIPPING DAILY",
  "B2B SAAS",
  "FRONTEND ENGINEER",
  "ISRAEL",
  "AVAILABLE 2026",
  "★",
];

export default function Ticker() {
  const block = phrases.map((p, i) => <span key={i}>{p}</span>);
  return (
    <div className="ticker" aria-hidden>
      <div className="ticker__inner">
        {block}
        {block}
      </div>
    </div>
  );
}
