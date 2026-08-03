"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BackToTop() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!buttonRef.current) return;

      // Initially hidden and slightly scaled down
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.8, pointerEvents: "none" });

      gsap.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "1000px top", // Show after scrolling down 1000px
          end: "bottom top", // Keep it visible for the rest of the page
          toggleActions: "play none none reverse", // Fade in on enter, fade out on leave back
        },
      });
    });

    // Fallback for reduced motion: just use native CSS sticky/fixed if needed,
    // but typically we can still fade it in without scaling, or just leave it.
    mm.add("(prefers-reduced-motion: reduce)", () => {
      if (!buttonRef.current) return;
      
      gsap.set(buttonRef.current, { opacity: 0, pointerEvents: "none" });
      
      gsap.to(buttonRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.1, // Quick toggle
        scrollTrigger: {
          trigger: document.documentElement,
          start: "1000px top",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => mm.revert();
  });

  const scrollToTop = () => {
    // We can use native smooth scroll here, or GSAP ScrollToPlugin if installed.
    // Native is usually fine and respects OS level reduced-motion automatically if configured.
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  // Helper to read reduced motion for the click handler
  const prefersReducedMotion = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
