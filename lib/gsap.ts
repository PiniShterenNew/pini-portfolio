"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Respect prefers-reduced-motion via CSS @media in globals.css
}

export { gsap, ScrollTrigger };
