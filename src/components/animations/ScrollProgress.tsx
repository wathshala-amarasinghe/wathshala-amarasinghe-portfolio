"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!progressRef.current) return;

      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2, // Small scrub value for smoothness without feeling laggy
        },
      });
    });

    return () => mm.revert();
  });

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left scale-x-0 z-50"
      style={{ transformOrigin: "0% 50%" }}
    />
  );
}
