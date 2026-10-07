import { cn } from "@/lib/cn";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

const variants = {
  default:
    "bg-[--color-raised] text-[--color-text-secondary] border border-[--color-divider]",
  accent:
    "bg-[--color-accent-primary-dim] text-[--color-accent-primary] border border-[rgba(169,149,255,0.2)]",
  muted:
    "bg-transparent text-[--color-text-muted] border border-[--color-divider]",
};

export function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[--radius-sm] px-2.5 py-0.5",
        "text-xs leading-none font-medium whitespace-nowrap",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
