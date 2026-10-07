import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type AnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type Props = ButtonProps | AnchorProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[--color-accent-primary] text-[--color-text-primary] hover:brightness-110",
  secondary:
    "bg-[--color-raised] text-[--color-text-primary] border-2 border-[--color-divider] hover:border-[--color-accent-primary] hover:text-[--color-accent-primary]",
  ghost:
    "text-[--color-text-secondary] hover:text-[--color-text-primary] hover:bg-[--color-raised]",
  outline:
    "border-2 border-[--color-accent-primary] text-[--color-accent-primary] hover:bg-[--color-accent-primary-dim]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

const base =
  "inline-flex items-center justify-center rounded-[--radius-md] font-medium leading-none transition-all duration-[--duration-fast] cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[--color-accent-primary] focus-visible:outline-offset-2 disabled:opacity-40 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  className,
  as,
  ...props
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (as === "a") {
    return (
      <a
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
