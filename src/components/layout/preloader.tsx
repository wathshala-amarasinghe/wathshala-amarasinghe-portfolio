"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // Simple fade out animation for the loader
    tl.to(".preloader-overlay", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.5, // Keep it visible for a short moment
    });
  });

  if (!isLoading) return null;

  return (
    <div className="preloader-overlay fixed inset-0 z-50 flex items-center justify-center bg-[#08090D]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#6B191F]/30 border-t-[#6B191F]" />
        <span className="font-display animate-pulse text-sm font-semibold tracking-widest text-[#6B191F] uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
}
