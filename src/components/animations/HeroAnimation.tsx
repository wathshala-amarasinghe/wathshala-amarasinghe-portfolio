"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface HeroAnimationProps {
  children: ReactNode;
  className?: string;
}

export default function HeroAnimation({ children, className = "" }: HeroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Slowly moving hero background grid (if present)
        gsap.to(".hero-grid", {
          backgroundPosition: "100px 100px",
          duration: 20,
          repeat: -1,
          ease: "none",
        });

        // Coordinated hero entrance timeline
        tl.from(".hero-title", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.2, // Small delay so it doesn't run before paint
        })
          .from(
            ".hero-subtitle",
            {
              y: 20,
              opacity: 0,
              duration: 0.7,
            },
            "-=0.5" // Overlap
          )
          .from(
            ".hero-action",
            {
              y: 20,
              opacity: 0,
              duration: 0.6,
              stagger: 0.1,
            },
            "-=0.4"
          )
          .from(
            ".hero-image",
            {
              scale: 0.95,
              opacity: 0,
              duration: 0.9,
              ease: "power2.out",
            },
            "-=0.6"
          );

        // Subtle profile-image glow (pulse effect)
        gsap.to(".hero-image-glow", {
          opacity: 0.7,
          scale: 1.05,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
