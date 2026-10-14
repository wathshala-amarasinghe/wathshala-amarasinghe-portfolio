"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/cn";

import { useGSAP as _hook } from "@gsap/react";
gsap.registerPlugin(_hook);

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  yOffset?: number;
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

      gsap.set(target, { opacity: 0, y: yOffset });

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
      style={
        prefersReducedMotion ? { opacity: 1, transform: "none" } : undefined
      }
    >
      {children}
    </div>
  );
}
