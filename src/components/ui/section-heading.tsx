import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        <span className="text-xs font-semibold tracking-[0.12em] text-[#6B191F] uppercase">
          {label}
        </span>
      )}
      <h2 className="font-display text-[clamp(2rem,4vw+1rem,3rem)] leading-tight font-bold tracking-tight text-[--color-text-primary]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg leading-relaxed text-[--color-text-secondary]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
