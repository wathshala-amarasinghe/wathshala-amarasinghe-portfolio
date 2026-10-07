"use client";

import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { navSections } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => firstLinkRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={cn(
        "fixed inset-0 z-30 lg:hidden",
        "bg-[--color-bg]/95 backdrop-blur-lg",
        "flex flex-col justify-center px-8",
        "transition-all duration-[--duration-moderate] ease-[--ease-out-smooth]",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className="absolute inset-0 z-[-1]"
        onClick={onClose}
        aria-hidden="true"
      />

      <nav aria-label="Mobile navigation">
        <ul className="flex flex-col gap-2" role="list">
          {navSections.map((section, idx) => (
            <li key={section.id}>
              <a
                ref={idx === 0 ? firstLinkRef : undefined}
                href={section.href}
                onClick={onClose}
                className="font-display block py-4 text-4xl font-bold text-[--color-text-secondary] transition-colors duration-[--duration-fast] hover:text-[--color-text-primary] focus-visible:text-[--color-accent-primary] focus-visible:outline-none"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-12 border-t border-[--color-divider] pt-8">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-sm text-[--color-text-muted] transition-colors duration-[--duration-fast] hover:text-[--color-accent-primary]"
        >
          <Mail size={14} aria-hidden="true" />
          {profile.email}
        </a>
      </div>
    </div>
  );
}
