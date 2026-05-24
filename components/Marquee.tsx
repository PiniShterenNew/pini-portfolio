interface Phrase {
  text: string;
  acc?: boolean;
}

const phrases: Phrase[] = [
  { text: "React" },
  { text: "TypeScript", acc: true },
  { text: "Next.js" },
  { text: "Tailwind" },
  { text: "shadcn/ui", acc: true },
  { text: "Zustand" },
  { text: "Playwright" },
  { text: "Vitest", acc: true },
  { text: "Vite" },
  { text: "Node" },
  { text: "PostgreSQL", acc: true },
];

export default function Marquee() {
  const Block = () => (
    <>
      {phrases.map((p, i) => (
        <span key={i} className="marquee__item">
          <span className={p.acc ? "acc" : undefined}>{p.text}</span>
          <span className="star">✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        <Block />
        <Block />
      </div>
    </div>
  );
}
