interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function WordReveal({ text, className = "", delay = 0, stagger = 60 }: WordRevealProps) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="word-reveal"
          style={{ animationDelay: `${delay + i * stagger}ms` }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
