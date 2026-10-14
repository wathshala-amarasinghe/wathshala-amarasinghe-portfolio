"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "portfolio-preloader-seen";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (
      sessionStorage.getItem(SESSION_KEY) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.readyState === "complete"
    ) {
      return;
    }

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(showTimer);
      window.clearTimeout(maxTimer);
      setIsVisible(false);
      sessionStorage.setItem(SESSION_KEY, "true");
    };

    const showTimer = window.setTimeout(() => setIsVisible(true), 150);
    const maxTimer = window.setTimeout(finish, 800);

    window.addEventListener("load", finish, { once: true });
    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(showTimer);
      window.clearTimeout(maxTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[--color-bg]/95"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[--color-accent-primary]/30 border-t-[--color-accent-primary] motion-reduce:animate-none" />
        <span className="font-display text-xs font-semibold tracking-widest text-[--color-accent-primary] uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
