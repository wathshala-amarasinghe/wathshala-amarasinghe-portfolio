"use client";

// ─────────────────────────────────────────────
//  SelectedWorkSection — Homepage projects
// ─────────────────────────────────────────────

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { allProjects } from "@/data/projects";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/cn";

const workFilters = [
  {
    id: "all",
    label: "All Projects",
    heading: "All Projects",
    description: "Selected product design and development case studies.",
  },
  {
    id: "web-development",
    label: "Web Development",
    heading: "Web Development",
    description: "Responsive products designed and implemented for the web.",
  },
  {
    id: "ui-ux-design",
    label: "UI/UX Design",
    heading: "UI/UX Design",
    description: "Research-led flows, interfaces, and product experiences.",
  },
  {
    id: "graphic-logo-design",
    label: "Graphic & Logo Design",
    heading: "Graphic & Logo Design",
    description: "Brand identities, logos, and visual design work.",
  },
  {
    id: "video-editing",
    label: "Video Editing",
    heading: "Video Editing",
    description:
      "Video editing and motion design work will be added here soon.",
  },
] as const;

type WorkFilter = (typeof workFilters)[number]["id"];

function projectMatchesFilter(project: Project, filter: WorkFilter) {
  switch (filter) {
    case "web-development":
      return (
        project.categories.includes("Web Design") ||
        project.role.includes("Developer") ||
        project.role.includes("Engineer")
      );
    case "ui-ux-design":
      return project.categories.some((category) =>
        [
          "Product Design",
          "UX Research",
          "UI Design",
          "Design System",
        ].includes(category)
      );
    case "graphic-logo-design":
      return project.categories.includes("Brand & Visual");
    case "video-editing":
      return [project.coverImage, project.heroMedia, ...project.gallery].some(
        (media) => media?.type === "video"
      );
    default:
      return true;
  }
}

export function SelectedWorkSection() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("all");
  const activeFilterContent =
    workFilters.find((filter) => filter.id === activeFilter) ?? workFilters[0];
  const visibleProjects = allProjects.filter((project) =>
    projectMatchesFilter(project, activeFilter)
  );

  return (
    <section
      id="work"
      className="border-y-2 border-[--color-divider] bg-[--color-surface] py-12 sm:py-16"
    >
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8">
          <SectionHeading
            label="Selected Work"
            title="Recent Projects"
            subtitle="A selection of product design, interaction, and development work from the past few years."
          />
        </Reveal>

        <Reveal className="mb-8">
          <div
            role="group"
            className="flex flex-wrap gap-2"
            aria-label="Filter recent projects by discipline"
          >
            {workFilters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-[--duration-fast] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-accent-primary]",
                    isActive
                      ? "border-[--color-accent-primary] bg-[--color-accent-primary] text-[--color-text-primary]"
                      : "border-white/10 bg-white/5 text-[--color-text-secondary] hover:border-white/20 hover:bg-white/10 hover:text-[--color-text-primary]"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div>
          <div className="mb-6 flex flex-col gap-2 border-b border-[--color-divider] pb-4">
            <h3 className="font-display text-2xl font-bold text-[--color-text-primary]">
              {activeFilterContent.heading}
            </h3>
            <p className="text-sm text-[--color-text-secondary]">
              {activeFilterContent.description}
            </p>
          </div>

          {visibleProjects.length > 0 ? (
            <div className="flex flex-col gap-12 sm:gap-16">
              {visibleProjects.map((project, index) => (
                <Reveal
                  key={`${activeFilter}-${project.slug}`}
                  delay={index * 0.1}
                >
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex min-h-64 items-center justify-center rounded-[2.5rem] border border-dashed border-white/15 bg-black/20 px-6 text-center backdrop-blur-md">
              <div className="max-w-lg">
                <h4 className="font-display text-xl font-bold text-[--color-text-primary]">
                  Projects coming soon
                </h4>
                <p className="mt-2 text-sm text-[--color-text-secondary]">
                  {activeFilterContent.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
