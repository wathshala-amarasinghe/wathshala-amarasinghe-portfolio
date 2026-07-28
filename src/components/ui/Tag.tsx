import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary-background px-3 py-1 text-xs font-medium text-secondary",
        className,
      )}
      {...props}
    />
  );
}
