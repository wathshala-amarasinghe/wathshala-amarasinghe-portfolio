"use client";

import { useEffect, useState } from "react";

interface UseActiveSectionOptions {
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
        const distance = Math.abs(rect.top - windowH * 0.3);

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector]);

  return activeId;
}
