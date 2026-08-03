"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/portfolio";

import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const activeSection = useActiveSection();
  const [isElevated, setIsElevated] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsElevated(window.scrollY > 8);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/88 backdrop-blur-md supports-[backdrop-filter]:bg-background/72",
        isElevated && "border-border",
      )}
    >
      <Container className="site-header-container flex items-center justify-between gap-5">
        <Link
          aria-label="Wathshala Amarasinghe, return to homepage"
          className="shrink-0 rounded-sm font-heading text-lg font-semibold tracking-[-0.03em] text-primary sm:text-xl"
          href="/#home"
        >
          Wathshala<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {navigation.map((item) => {
              const isActive = item.sectionId === activeSection;

              return (
                <li key={item.label}>
                  <Link
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-2.5 text-[13px] font-medium text-secondary transition-colors hover:text-primary xl:px-3 xl:text-sm",
                      "after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform",
                      isActive &&
                        "text-accent after:scale-x-100 [text-decoration:underline] decoration-transparent",
                      item.isCta &&
                        "ml-1 border border-accent px-4 text-accent after:hidden hover:bg-accent hover:text-[#10242b]",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileMenu activeSection={activeSection} items={navigation} />
      </Container>
    </header>
  );
}
