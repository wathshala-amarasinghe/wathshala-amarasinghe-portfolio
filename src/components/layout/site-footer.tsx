// ─────────────────────────────────────────────
//  SiteFooter
// ─────────────────────────────────────────────

import { profile } from "@/data/profile";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-[--color-divider] px-6 py-8 text-xs text-[--color-text-muted] sm:flex-row">
      <p>
        &copy; {year} {profile.name}. All rights reserved.
      </p>
      <p>Designed & built by Wathshala Amarasinghe</p>
    </footer>
  );
}
