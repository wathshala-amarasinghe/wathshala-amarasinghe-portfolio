"use client";

// ─────────────────────────────────────────────
//  ProjectCard — Homepage showcase card
// ─────────────────────────────────────────────

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ProjectCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (
      !prefersReducedMotion &&
      project.slug === "kavon" &&
      project.gallery.length > 0
    ) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % project.gallery.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [prefersReducedMotion, project.slug, project.gallery.length]);
  const CardWrapper = project.status === "published" ? "a" : "div";
  const href =
    project.status === "published" ? `/work/${project.slug}` : undefined;

  return (
    <CardWrapper
      href={href}
      data-project={project.slug}
      className={cn(
        "group block w-full",
        project.status === "published" && "hover-lift cursor-pointer"
      )}
    >
      <div
        className="relative mb-5 aspect-4/3 w-full overflow-hidden rounded-4xl border border-white/10 p-3 shadow-2xl sm:aspect-video sm:p-6 lg:p-8"
        style={{
          background:
            "radial-gradient(circle at 78% 25%, rgba(107, 25, 31, 0.95) 0%, rgba(107, 25, 31, 0.4) 28%, transparent 58%), linear-gradient(135deg, #241416 0%, #110d0d 48%, #08090d 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute -top-1/4 -right-[8%] h-3/4 w-1/2 rounded-full bg-[--color-accent-primary] opacity-20 blur-3xl"
        />

        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/15 bg-black/75 shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
          {project.slug === "kavon" && project.gallery.length > 0 ? (
            <div
              className="flex h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {project.gallery.map((img) => (
                <div key={img.src} className="relative h-full w-full shrink-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : project.coverImage ? (
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[--duration-cinematic] group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-black/80 via-[--color-surface] to-[--color-accent-primary]/30 px-6 text-center">
              <div aria-hidden="true">
                <span className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
                  Case Study
                </span>
                <p className="font-display mt-3 text-2xl font-bold text-white sm:text-4xl">
                  {project.title}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold text-[--color-text-primary]">
            {project.title}
          </h3>
          {project.status === "published" && (
            <ArrowUpRight
              size={24}
              className="shrink-0 text-[--color-text-muted] transition-colors duration-[--duration-fast] group-hover:text-[--color-accent-primary]"
            />
          )}
        </div>

        <p className="text-base leading-relaxed text-[--color-text-secondary]">
          {project.shortDescription}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          {project.categories.slice(0, 3).map((category) => (
            <Tag key={category} variant="default">
              {category}
            </Tag>
          ))}
          {project.status === "draft" && (
            <Tag variant="muted" className="ml-auto">
              Case study coming soon
            </Tag>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
