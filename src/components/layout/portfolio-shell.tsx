import type { ReactNode } from "react";
import { LeftSidebarArea } from "./left-sidebar-area";
import { SectionNavigation } from "./section-navigation";
import { MobileHeader } from "./mobile-header";
import { MobileScrollTop } from "./mobile-scroll-top";
import { ProfileSidebar } from "./profile-sidebar";
import { SiteFooter } from "./site-footer";
import { Preloader } from "./preloader";

interface PortfolioShellProps {
  children: ReactNode;
}

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="relative min-h-screen bg-[--color-bg]">
      <Preloader />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full w-full object-cover opacity-30 mix-blend-screen"
        >
          <source
            src="/videos/background/Wathshala-Portfolio-Wave-Background.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10">
        <MobileHeader />

        <div className="px-4 pt-4 lg:hidden">
          <ProfileSidebar className="min-h-[calc(100svh-6rem)] w-full rounded-4xl border border-white/10 bg-[--color-surface] shadow-2xl" />
        </div>

        <MobileScrollTop />

        <div className="lg:grid lg:min-h-screen lg:grid-cols-[var(--sidebar-width)_1fr_var(--nav-rail-width)]">
          <div className="sticky top-0 hidden h-screen py-8 pr-4 pl-12 lg:block">
            <LeftSidebarArea />
          </div>

          <main id="main-content" className="w-full" tabIndex={-1}>
            {children}
            <SiteFooter />
          </main>

          <div className="sticky top-0 hidden h-screen overflow-visible py-8 pr-12 pl-4 lg:flex lg:justify-center">
            <SectionNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
