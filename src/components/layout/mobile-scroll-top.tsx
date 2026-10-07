"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MobileScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 500);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      data-visible={isVisible}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        })
      }
      aria-label="Scroll to top"
      className="pointer-events-none fixed right-5 bottom-5 z-40 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full border border-white/15 bg-[--color-accent-primary] text-[--color-text-primary] opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 data-[visible=true]:pointer-events-auto data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 lg:hidden"
    >
      <ArrowUp aria-hidden="true" size={19} />
    </button>
  );
}
