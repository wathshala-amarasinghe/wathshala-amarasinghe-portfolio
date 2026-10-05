"use client";

// ─────────────────────────────────────────────
//  Reveal — GSAP-powered scroll reveal wrapper
//
//  Wraps children in a container that fades and
//  slides in when it enters the viewport.
//  Falls back to visible content if:
//   - JS hasn't loaded
//   - GSAP fails to initialise
//   - User prefers reduced motion
// ─────────────────────────────────────────────

import { useRef, useEffect, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/cn";

// Register @gsap/react hook plugin
import { useGSAP as _hook } from "@gsap/react";
gsap.registerPlugin(_hook);

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay between direct children (seconds). 0 = no stagger */
  stagger?: number;
  /** Y-axis start offset in px */
  yOffset?: number;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

export function Reveal({
  children,
  className,
  stagger = 0,
  yOffset = 24,
  delay = 0,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || prefersReducedMotion) return;

      const target =
        stagger > 0
          ? Array.from(containerRef.current.children)
          : containerRef.current;

      // Set initial state
      gsap.set(target, { opacity: 0, y: yOffset });

      // Animate in on scroll
      gsap.to(target, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [prefersReducedMotion, stagger, yOffset, delay],
    }
  );

  return (
    <div
      ref={containerRef}
      className={cn(className)}
      // Ensure content is visible if animation fails
      style={
        prefersReducedMotion ? { opacity: 1, transform: "none" } : undefined
      }
    >
      {children}
    </div>
  );
}
