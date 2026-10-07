"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { MobileMenu } from "./mobile-menu";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[--color-divider] bg-[--color-bg]/90 px-5 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#6B191F]/30 bg-black/30 p-1">
            <Image
              src="/images/profile/my_logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold text-[--color-text-primary]">
              {profile.name}
            </span>
            <span className="text-xs text-[--color-accent-primary]">
              {profile.title}
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="-mr-1 rounded-[--radius-md] p-2 text-[--color-text-secondary] transition-colors duration-[--duration-fast] hover:bg-[--color-raised] hover:text-[--color-text-primary]"
        >
          {isOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
