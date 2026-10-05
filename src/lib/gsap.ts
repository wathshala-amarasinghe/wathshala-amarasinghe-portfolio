// ─────────────────────────────────────────────
//  GSAP Registration Module  (Client-side only)
//  Import this from Client Components that need
//  GSAP plugins. Never import in Server Components.
// ─────────────────────────────────────────────
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once; safe to call multiple times.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
