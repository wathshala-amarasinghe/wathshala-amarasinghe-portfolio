"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

export function registerGSAP(): void {
  if (typeof window === "undefined" || isRegistered) return;

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  isRegistered = true;
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger };
