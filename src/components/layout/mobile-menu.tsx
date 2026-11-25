"use client";

import { useEffect, useRef } from "react";
import { Mail, X } from "lucide-react";
import { navSections } from "@/data/navigation";
import { profile } from "@/data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen) return;
    dialog.showModal();
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [isOpen]);

  const closeMenu = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      id="mobile-menu"
      aria-label="Navigation menu"
      onClose={onClose}
      className="fixed inset-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-transparent text-[var(--color-text-primary)] backdrop:bg-transparent"
    >
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
        className="absolute top-2.5 right-4 grid size-11 place-items-center rounded-lg bg-[var(--color-bg)] text-[var(--color-text-primary)]"
      >
        <X size={20} aria-hidden="true" />
      </button>
      <div className="mt-16 h-[calc(100%-4rem)] overflow-y-auto bg-[var(--color-bg)]/95 px-8 py-8 backdrop-blur-lg">
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-2" role="list">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={section.href}
                  onClick={closeMenu}
                  className="font-display block py-4 text-4xl font-bold text-[--color-text-secondary] transition-colors duration-[--duration-fast] hover:text-[--color-text-primary]"
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
    </dialog>
  );
}
