export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only z-9999 rounded-md bg-[var(--color-accent-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-primary)] focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
    >
      Skip to main content
    </a>
  );
}
