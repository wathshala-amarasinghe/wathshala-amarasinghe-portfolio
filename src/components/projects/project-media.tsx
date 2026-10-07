import type { ProjectMedia as ProjectMediaType } from "@/types/portfolio";
import { cn } from "@/lib/cn";

interface ProjectMediaProps {
  media: ProjectMediaType;
  className?: string;
}

export function ProjectMedia({ media, className }: ProjectMediaProps) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "h-auto w-full rounded-[--radius-xl] bg-[--color-raised]",
          className
        )}
        aria-label={media.alt}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={media.src}
      alt={media.alt}
      loading="lazy"
      className={cn(
        "h-auto w-full rounded-[--radius-xl] bg-[--color-raised]",
        className
      )}
    />
  );
}
