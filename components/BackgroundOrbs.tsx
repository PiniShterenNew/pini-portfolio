"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function BackgroundOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, 140]);
  const x2 = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, 25]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, -18]);

  return (
    <div className="bg-orbs" aria-hidden="true" ref={containerRef}>
      <motion.div className="orb orb--1" style={{ y: y1, rotate: rotate1 }} />
      <motion.div className="orb orb--2" style={{ y: y2, x: x2, rotate: rotate2 }} />
      <motion.div className="orb orb--3" style={{ y: y3 }} />
    </div>
  );
}
