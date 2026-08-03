import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  headingId,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="font-heading text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-4xl"
        id={headingId}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
