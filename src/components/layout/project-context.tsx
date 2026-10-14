"use client";

import { projects } from "@/data/projects";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export function ProjectContext() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll("[data-project]"));
    if (cards.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          const slug = visible.target.getAttribute("data-project");
          if (slug) setActiveSlug(slug);
        }
      },
      { threshold: 0.3, rootMargin: "-10% 0px -40% 0px" }
    );

    cards.forEach((card) => observerRef.current?.observe(card));

    return () => observerRef.current?.disconnect();
  }, []);

  const activeProject =
    projects.find((p) => p.slug === activeSlug) || projects[0];
  const activeIndex = projects.findIndex((p) => p.slug === activeSlug);
  const displayIndex = activeIndex === -1 ? 1 : activeIndex + 1;

  return (
    <aside className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-4xl bg-[--color-surface] p-8 shadow-xl transition-all duration-500">
      <div className="absolute inset-0 bg-linear-to-br from-[#6B191F]/20 via-transparent to-transparent opacity-50 transition-opacity" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-[#6B191F]/50 bg-black/30 p-1 backdrop-blur-md transition-transform">
          <Image
            src="/images/profile/my_logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-full w-full object-contain object-center drop-shadow-md"
          />
        </div>

        <div className="transition-all duration-300">
          <h2 className="font-display mb-4 text-3xl leading-tight font-bold text-[--color-text-primary] transition-all">
            {activeProject.title}
          </h2>
          <p className="text-sm leading-relaxed text-[--color-text-secondary] transition-all">
            {activeProject.shortDescription}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-1 transition-all duration-300">
          <span className="text-xs font-semibold tracking-wider text-[--color-text-secondary] uppercase">
            Year
          </span>
          <span className="text-lg font-medium text-[--color-text-primary]">
            {activeProject.year}
          </span>
        </div>

        <div className="mt-2 flex flex-col gap-1 transition-all duration-300">
          <span className="text-xs font-semibold tracking-wider text-[--color-text-secondary] uppercase">
            Role
          </span>
          <span className="text-lg font-medium text-[--color-text-primary]">
            {activeProject.role}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 transition-all duration-300">
          {activeProject.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
            >
              {cat}
            </span>
          ))}
          {activeProject.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-between pt-8 transition-all duration-300">
        <div className="font-display text-sm font-bold tracking-widest text-[#6B191F]">
          {displayIndex.toString().padStart(2, "0")}{" "}
          <span className="text-white/30">
            / {projects.length.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </aside>
  );
}
