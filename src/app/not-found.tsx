import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center gap-5 px-8 py-16"
    >
      <p className="text-sm font-semibold tracking-widest text-[var(--color-accent-text)]">
        404
      </p>
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p>The page may have moved or the address may be incorrect.</p>
      <Link
        className="inline-flex min-h-11 items-center rounded-md bg-[var(--color-accent-primary)] px-5 font-semibold text-[var(--color-text-primary)]"
        href="/"
      >
        Back to portfolio
      </Link>
    </main>
  );
}
