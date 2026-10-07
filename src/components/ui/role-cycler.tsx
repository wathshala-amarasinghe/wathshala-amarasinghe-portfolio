"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Associate Software Engineer",
  "UI/UX Designer",
  "Product Designer",
  "Freelancer",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

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
      <span
        className="ml-0.5 inline-block h-[1em] w-0.75 animate-pulse bg-[#6B191F] align-baseline"
        aria-hidden="true"
      />
    </span>
  );
}
