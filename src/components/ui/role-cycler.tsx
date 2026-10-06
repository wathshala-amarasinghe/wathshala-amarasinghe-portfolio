"use client";

// ─────────────────────────────────────────────
//  RoleCycler — Animated role title component
//  Cycles through titles with a typewriter effect
// ─────────────────────────────────────────────

import { useEffect, useState } from "react";

const ROLES = ["UI/UX Designer", "UI/UX Engineer", "Product Designer"];

const TYPING_SPEED = 80; // ms per character
const DELETING_SPEED = 45; // ms per character
const PAUSE_AFTER_TYPE = 1800; // ms to wait after fully typed
const PAUSE_AFTER_DELETE = 400; // ms to wait after fully deleted

export function RoleCycler() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<
    "typing" | "pausing" | "deleting" | "waiting"
  >("typing");

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        // Fully typed — pause
        const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, DELETING_SPEED);
        return () => clearTimeout(t);
      } else {
        // Fully deleted — move to next role
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, phase, roleIndex]);

  return (
    <span className="inline-flex items-baseline gap-0">
      <span className="text-[#6B191F] italic">{displayed}</span>
      {/* Blinking cursor */}
      <span
        className="ml-0.5 inline-block h-[1em] w-0.75 animate-pulse bg-[#6B191F] align-baseline"
        aria-hidden="true"
      />
    </span>
  );
}
