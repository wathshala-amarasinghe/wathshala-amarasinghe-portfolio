// ─────────────────────────────────────────────
//  ProfileSidebar — Sticky left panel
//  Server Component (no client interactivity)
//  Shows name, title, bio, social links.
//  Displays initials avatar when no image supplied.
// ─────────────────────────────────────────────

import { Globe, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

// ── Social Icon SVGs ─────────────────────────
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.49-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.65.673 1.43.673 2.35 0 .76-.147 1.42-.44 1.98-.29.56-.69 1.01-1.2 1.37-.509.36-1.096.62-1.758.79-.665.17-1.35.25-2.06.25H0V4.51l6.938-.007zm-.387 5.804c.6 0 1.09-.14 1.46-.42.37-.28.56-.73.56-1.33 0-.33-.06-.61-.18-.83-.12-.22-.29-.4-.5-.53-.21-.13-.45-.22-.72-.27a4.4 4.4 0 0 0-.87-.08H3.14v3.46h3.41zm.202 6.058c.34 0 .65-.03.93-.1.28-.07.52-.18.73-.34.21-.15.37-.36.49-.61.12-.25.18-.56.18-.93 0-.74-.21-1.28-.63-1.61-.42-.33-.98-.5-1.68-.5H3.14v4.09h3.613zm11.288-9.623c1.07 0 2.01.23 2.83.67.82.44 1.46 1.08 1.91 1.93.45.85.68 1.88.68 3.09 0 .19-.01.36-.02.51-.01.15-.02.27-.04.37H14.13c.05.9.33 1.59.84 2.08.51.49 1.17.73 1.99.73.58 0 1.07-.13 1.47-.4.4-.27.67-.58.81-.93h3.18c-.51 1.44-1.27 2.49-2.28 3.16-1.01.67-2.23 1-3.66 1-1 0-1.89-.17-2.68-.51-.79-.34-1.46-.83-2.01-1.46-.55-.63-.97-1.38-1.27-2.25-.3-.87-.45-1.84-.45-2.9 0-1.01.15-1.94.46-2.81.31-.87.74-1.62 1.31-2.24.57-.62 1.25-1.1 2.04-1.44.79-.34 1.67-.51 2.64-.51zm.04 2.57c-.72 0-1.31.2-1.77.59-.46.39-.75.96-.87 1.72h5.16c-.11-.79-.38-1.37-.82-1.73-.44-.36-.99-.58-1.7-.58zm-3.92-5.33h6.78v1.73h-6.78V3.99z" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const iconMap: Record<string, React.ElementType> = {
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Behance: BehanceIcon,
  Globe,
};

export function ProfileSidebar({ className }: { className?: string }) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside
      aria-label="Profile"
      className={cn(
        "relative flex flex-col justify-between overflow-hidden",
        className
      )}
    >
      {/* Background Image (Avatar) */}
      <div className="absolute inset-0 bg-[--color-surface]">
        {profile.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[--color-raised]">
            <span className="text-[120px] font-bold text-[--color-divider] opacity-50 select-none">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-[#08090d] via-[#08090d]/60 to-transparent" />

      {/* Top Header (Logo & Socials) */}
      <div className="relative z-10 flex w-full items-start justify-between p-6">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-[#6B191F]/50 bg-black/30 p-1 backdrop-blur-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile/my_logo.png"
            alt="Logo"
            className="h-full w-full object-contain drop-shadow-md"
          />
        </div>

        {/* Top right Social Links */}
        {profile.socials.length > 0 && (
          <nav aria-label="Social links" className="flex flex-col gap-2">
            {profile.socials.map((social) => {
              const Icon = iconMap[social.icon] ?? Globe;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/10 bg-black/30 text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[#6B191F] hover:bg-[#6B191F]"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </nav>
        )}
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 flex flex-col gap-4 p-6 pt-32">
        <div>
          <h1 className="font-display text-2xl leading-tight font-bold text-[--color-text-primary]">
            Hey, I&apos;m a<br />
            <span className="text-[#E8D4C3]">{profile.name}</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[--color-text-secondary]">
            {profile.tagline} Based in {profile.location}.
          </p>
        </div>

        <div className="mt-4 flex flex-row items-stretch gap-2">
          <Button
            as="a"
            href={`mailto:${profile.email}`}
            variant="primary"
            className="flex-1 rounded-full border border-transparent bg-[#6B191F] py-2.5 text-xs font-bold whitespace-nowrap text-[#E8D4C3] shadow-xl hover:brightness-110"
          >
            Let&apos;s talk
          </Button>

          {profile.cvPath && (
            <Button
              as="a"
              href={profile.cvPath}
              download
              variant="secondary"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-white/15 py-2.5 text-xs font-bold whitespace-nowrap"
            >
              <Download size={12} />
              Download CV
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
}
