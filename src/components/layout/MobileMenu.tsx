"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type {
  NavigationItem,
  NavigationSectionId,
} from "@/types/portfolio";

type MobileMenuProps = {
  items: readonly NavigationItem[];
  activeSection: NavigationSectionId;
};

export function MobileMenu({ items, activeSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = "mobile-navigation";

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isOpen]);

  return (
    <div className="relative lg:hidden" ref={rootRef}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none"
        onClick={() => setIsOpen((current) => !current)}
        ref={buttonRef}
        type="button"
      >
        {isOpen ? <X aria-hidden size={21} /> : <Menu aria-hidden size={21} />}
      </button>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-3rem))] rounded-card border border-border bg-secondary-background p-2 shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
          id={menuId}
        >
          <ul className="space-y-1">
            {items.map((item) => {
              const isActive = item.sectionId === activeSection;

              return (
                <li key={item.label}>
                  <Link
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "flex min-h-11 items-center rounded-lg border-l-2 border-transparent px-4 py-2.5 text-sm font-medium text-secondary transition-colors hover:bg-card hover:text-primary",
                      isActive &&
                        "border-accent bg-card text-accent [text-decoration:underline] decoration-2 underline-offset-4",
                      item.isCta &&
                        "mt-2 justify-center border border-accent text-accent",
                    )}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
