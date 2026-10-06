"use client";

// ─────────────────────────────────────────────
//  useActiveSection
//  Tracks which portfolio section is currently
//  in the viewport using IntersectionObserver.
//  Used to highlight the active nav-rail item
//  and update the profile sidebar context.
// ─────────────────────────────────────────────

import { useEffect, useState } from "react";

interface UseActiveSectionOptions {
  /** Selector for section elements. Defaults to "section[id]" */
  selector?: string;
}

export function useActiveSection({
  selector = "section[id]",
}: UseActiveSectionOptions = {}): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(selector)
      );
      if (sections.length === 0) return;

      const windowH = window.innerHeight;
      let currentActiveId = "";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Calculate how close the top of the section is to a line ~30% down the screen
        const distance = Math.abs(rect.top - windowH * 0.3);

        // If the section's top is somewhere above the bottom of the screen,
        // and its bottom is below the top of the screen (i.e. it's visible)
        if (rect.top < windowH * 0.7 && rect.bottom > windowH * 0.1) {
          if (distance < minDistance) {
            minDistance = distance;
            currentActiveId = section.id;
          }
        }
      });

      if (currentActiveId) {
        setActiveId((previousId) =>
          previousId === currentActiveId ? previousId : currentActiveId
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector]);

  return activeId;
}
