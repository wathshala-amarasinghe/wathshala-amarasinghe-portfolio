import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1280px]",
  full: "max-w-full",
};

export function Container({
  as: Tag = "div",
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
