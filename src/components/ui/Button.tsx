import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text";
type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};
type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps | "href"> & {
    href?: never;
  };
type LinkButtonProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps | "href"> & {
    href: string;
    disabled?: boolean;
  };

export type ButtonProps = NativeButtonProps | LinkButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#10242b] hover:bg-accent-hover disabled:bg-muted disabled:text-background",
  secondary:
    "border border-border bg-card text-primary hover:border-accent hover:bg-card-hover",
  text: "px-1 text-accent underline-offset-4 hover:text-accent-hover hover:underline",
};

function getButtonClasses(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className,
  );
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      children,
      className,
      variant = "primary",
      disabled,
      href,
      onClick,
      ...anchorProps
    } = props;
    const classes = getButtonClasses(variant, className);

    if (disabled) {
      return (
        <span
          aria-disabled="true"
          className={cn(classes, "cursor-not-allowed opacity-60")}
        >
          {children}
        </span>
      );
    }

    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link className={classes} href={href} onClick={onClick} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a className={classes} href={href} onClick={onClick} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    ...buttonProps
  } = props as NativeButtonProps;
  const classes = getButtonClasses(variant, className);

  return (
    <button className={classes} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
