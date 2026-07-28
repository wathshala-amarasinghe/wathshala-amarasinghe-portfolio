"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import type { NavigationSectionId } from "@/types/portfolio";

const sectionIds: readonly NavigationSectionId[] = [
  "home",
  "about",
  "services",
  "experience",
  "projects",
  "contact",
];

export function useActiveSection(): NavigationSectionId {
  const pathname = usePathname();
  const [activeSection, setActiveSection] =
    useState<NavigationSectionId>("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const mostVisible = [...visibleSections.entries()].sort(
          (a, b) => b[1] - a[1],
        )[0]?.[0];

        if (mostVisible) {
          setActiveSection(mostVisible as NavigationSectionId);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== "/") {
    return pathname.startsWith("/projects") ? "projects" : "home";
  }

  return activeSection;
}
