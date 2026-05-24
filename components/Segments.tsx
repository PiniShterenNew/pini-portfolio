import { Fragment } from "react";
import type { Segment } from "@/lib/i18n";

interface SegmentsProps {
  parts: Segment[];
}

export default function Segments({ parts }: SegmentsProps) {
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") return <Fragment key={i}>{p}</Fragment>;
        if ("em" in p) return <em key={i}>{p.em}</em>;
        if ("stroke" in p) return <span key={i} className="stroke">{p.stroke}</span>;
        return null;
      })}
    </>
  );
}
