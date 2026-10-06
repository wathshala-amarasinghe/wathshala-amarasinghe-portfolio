// ─────────────────────────────────────────────
//  SkipLink — Accessibility skip-navigation link
//  Must be the first focusable element on the page.
// ─────────────────────────────────────────────

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only fixed top-4 left-4 z-9999 rounded-md bg-[--color-accent-primary] px-4 py-2 text-sm font-semibold text-[--color-bg] focus:not-sr-only focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
