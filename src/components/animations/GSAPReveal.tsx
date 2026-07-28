"use client";

import { useGSAP } from "@gsap/react";
import type { ReactNode } from "react";
import { useRef } from "react";

import { gsap, prefersReducedMotion, registerGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

registerGSAP();

type GSAPRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  triggerOnce?: boolean;
};

export default function GSAPReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 24,
  stagger = 0,
  triggerOnce = true,
}: GSAPRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = containerRef.current;
      if (!element || prefersReducedMotion()) return;

      const safeDistance = Math.min(Math.max(distance, 0), 50);
      const offset = {
        x:
          direction === "left"
            ? safeDistance
            : direction === "right"
              ? -safeDistance
              : 0,
        y:
          direction === "up"
            ? safeDistance
            : direction === "down"
              ? -safeDistance
              : 0,
      };
      const targets = stagger > 0 ? Array.from(element.children) : element;

      gsap.from(targets, {
        ...offset,
        autoAlpha: 0,
        duration: Math.min(Math.max(duration, 0.5), 0.9),
        delay: Math.max(delay, 0),
        stagger: Math.min(Math.max(stagger, 0), 0.12),
        ease: "power2.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: triggerOnce,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  );
}
