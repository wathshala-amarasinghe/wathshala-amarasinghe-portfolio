"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { navSections } from "@/data/navigation";
import { cn } from "@/lib/cn";
import {
  Home,
  Briefcase,
  Sparkles,
  User,
  Mail,
  ArrowUp,
  Layers,
  MessageSquare,
  Monitor,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CurrentTime } from "@/components/ui/current-time";

const iconMap: Record<string, React.ElementType> = {
  hero: Home,
  about: User,
  "work-experience": Briefcase,
  work: Layers,
  services: Sparkles,
  tech: Monitor,
  testimonials: MessageSquare,
  contact: Mail,
};

export function SectionNavigation({ className }: { className?: string }) {
  const activeId = useActiveSection();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Page sections"
      className={cn("flex flex-col items-center justify-start pt-2", className)}
    >
      <div className="mb-4 flex w-17.5 flex-col items-end gap-2">
        <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 shadow-2xl backdrop-blur-2xl">
          <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]"></span>
          <span className="text-[8px] font-bold tracking-wider whitespace-nowrap text-white/80 uppercase">
            Available for Work
          </span>
        </div>

        <CurrentTime className="w-auto" />
      </div>

      <div className="flex flex-col items-center gap-2 rounded-full border-[3px] border-[--color-divider] bg-black/60 p-2 shadow-2xl backdrop-blur-2xl">
        <ul className="flex flex-col items-center gap-2" role="list">
          {navSections.map((section) => {
            const isActive = activeId === section.id;
            const Icon = iconMap[section.id] ?? Home;
            return (
              <li key={section.id} className="group relative">
                <a
                  href={section.href}
                  aria-label={section.label}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-[--duration-fast]",
                    isActive
                      ? "bg-white/10 text-[--color-accent-primary]"
                      : "text-white/50 hover:-translate-y-1 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                </a>
                <span className="pointer-events-none absolute top-1/2 right-full mr-4 translate-x-2 -translate-y-1/2 rounded-md border border-[--color-divider] bg-[--color-surface] px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                  {section.label}
                </span>
              </li>
            );
          })}
        </ul>

        <div
          data-hidden={!showScrollTop}
          className="my-2 h-px w-6 bg-white/10 opacity-100 transition-all duration-300 data-[hidden=true]:my-0 data-[hidden=true]:h-0 data-[hidden=true]:opacity-0"
        />

        <button
          onClick={scrollToTop}
          data-hidden={!showScrollTop}
          className="visible flex h-12 w-12 items-center justify-center rounded-full text-white/50 opacity-100 transition-all duration-300 hover:bg-white/5 hover:text-white data-[hidden=true]:invisible data-[hidden=true]:h-0 data-[hidden=true]:w-0 data-[hidden=true]:opacity-0"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </nav>
  );
}
