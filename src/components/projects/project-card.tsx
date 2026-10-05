"use client";

// ─────────────────────────────────────────────
//  ProjectCard — Homepage showcase card
// ─────────────────────────────────────────────

import { useState, useEffect } from "react";
import type { Project } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";

export function ProjectCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (project.slug === "kavon" && project.gallery.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % project.gallery.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [project.slug, project.gallery.length]);
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
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border-[3px] border-white/5 bg-black/40 backdrop-blur-xl sm:aspect-[16/9]">
        {project.slug === "kavon" && project.gallery.length > 0 ? (
          <div 
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {project.gallery.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="h-full w-full shrink-0 object-cover"
              />
            ))}
          </div>
        ) : project.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            className="h-full w-full object-cover transition-transform duration-[--duration-cinematic] group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[--color-surface] to-[--color-divider] opacity-50" />
        )}
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
