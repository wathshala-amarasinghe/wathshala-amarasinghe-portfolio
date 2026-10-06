"use client";
// ─────────────────────────────────────────────
//  LeftSidebarArea
//  Switches between ProfileSidebar and ProjectContext
//  when the user scrolls into the "work" section.
//  Uses direct scroll-position check for reliability.
// ─────────────────────────────────────────────

import { useEffect, useState } from "react";
import { ProfileSidebar } from "./profile-sidebar";
import { ProjectContext } from "./project-context";

export function LeftSidebarArea() {
  const [showProject, setShowProject] = useState(false);

  useEffect(() => {
    const check = () => {
      const section = document.getElementById("work");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // show project context when the work section is in view
      // (its top is above 80% of viewport, and bottom hasn't passed the top)
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      setShowProject(inView);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div className="h-full w-full transition-all duration-500">
      {showProject ? (
        <ProjectContext />
      ) : (
        <ProfileSidebar className="h-full w-full rounded-4xl bg-[--color-surface] shadow-xl" />
      )}
    </div>
  );
}
