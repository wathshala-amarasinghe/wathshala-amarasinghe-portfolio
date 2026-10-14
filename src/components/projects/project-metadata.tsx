import type { Project } from "@/types/portfolio";

export function ProjectMetadata({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-2 gap-6 border-y border-[--color-divider] py-8 md:grid-cols-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-wider text-[--color-text-muted] uppercase">
          Client
        </span>
        <span className="text-sm font-medium text-[--color-text-primary]">
          {project.client}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-wider text-[--color-text-muted] uppercase">
          Year
        </span>
        <span className="text-sm font-medium text-[--color-text-primary]">
          {project.year}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-wider text-[--color-text-muted] uppercase">
          Role
        </span>
        <span className="text-sm font-medium text-[--color-text-primary]">
          {project.role}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold tracking-wider text-[--color-text-muted] uppercase">
          {project.tools.length > 0 ? "Tools" : "Focus"}
        </span>
        <span className="text-sm font-medium text-[--color-text-primary]">
          {project.tools.length > 0
            ? project.tools.join(", ")
            : project.categories.join(", ")}
        </span>
      </div>
    </div>
  );
}
