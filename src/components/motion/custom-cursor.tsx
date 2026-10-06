"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/cn";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Only show on devices with a fine pointer (mouse)
  const [isMouseDevice, setIsMouseDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the device has a mouse
    const checkPointer = () => {
      setIsMouseDevice(window.matchMedia("(pointer: fine)").matches);
    };
    checkPointer();
    window.addEventListener("resize", checkPointer);
    return () => window.removeEventListener("resize", checkPointer);
  }, []);

  useGSAP(() => {
    if (
      !isMouseDevice ||
      prefersReducedMotion ||
      !cursorRef.current ||
      !followerRef.current
    )
      return;

    // Fast-moving center dot
    const xToCursor = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.1,
      ease: "power3",
    });
    const yToCursor = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.1,
      ease: "power3",
    });

    // Slower trailing ring
    const xToFollower = gsap.quickTo(followerRef.current, "x", {
      duration: 0.5,
      ease: "power3",
    });
    const yToFollower = gsap.quickTo(followerRef.current, "y", {
      duration: 0.5,
      ease: "power3",
    });

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Detect hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over an anchor, button, or something with cursor-pointer
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isClickable !== isHovering) {
        setIsHovering(isClickable);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMouseDevice, prefersReducedMotion, isHovering, isVisible]);

  if (!isMouseDevice || prefersReducedMotion) return null;

  return (
    <>
      {/* Center Dot */}
      <div
        ref={cursorRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-9999 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6B191F] transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      />
      {/* Trailing Ring */}
      <div
        ref={followerRef}
        data-hovering={isHovering}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-9998 h-8 w-8 -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full border border-[#6B191F]/50 transition-all duration-300 ease-out data-[hovering=true]:h-14 data-[hovering=true]:w-14 data-[hovering=true]:scale-150 data-[hovering=true]:border-[#6B191F] data-[hovering=true]:bg-[#6B191F]/10",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      />
    </>
  );
}
