import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import type { Project } from "@/types/portfolio";
import type { CaseStudyDetail } from "@/data/case-studies";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectMetadata } from "@/components/projects/project-metadata";
import { Tag } from "@/components/ui/tag";

interface ProjectCaseStudyProps {
  project: Project;
  detail: CaseStudyDetail;
}

function SmartPosMap({ areas }: { areas: string[] }) {
  return (
    <div className="overflow-hidden rounded-[--radius-2xl] border border-[--color-divider] bg-[--color-surface] p-6 shadow-[--shadow-xl] sm:p-10">
      <div className="mb-8 flex items-center justify-between gap-4 border-b border-[--color-divider] pb-5">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-[--color-accent-primary] uppercase">
            Smart Web POS
          </p>
          <p className="font-display mt-2 text-xl font-bold text-[--color-text-primary]">
            Connected product structure
          </p>
        </div>
        <span className="rounded-full border border-[--color-divider] bg-[--color-raised] px-3 py-1 text-xs text-[--color-text-secondary]">
          Workflow map
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, index) => (
          <div
            key={area}
            className="flex min-h-24 flex-col justify-between rounded-[--radius-lg] border border-[--color-divider] bg-[--color-raised] p-4"
          >
            <span className="font-mono text-xs text-[--color-accent-primary]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-5 text-sm font-semibold text-[--color-text-primary]">
              {area}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NationSpiceArtwork({ project }: { project: Project }) {
  if (!project.coverImage) return null;

  return (
    <figure className="overflow-hidden rounded-[--radius-2xl] border border-[--color-divider] bg-[#f7eadb] p-3 shadow-[--shadow-xl] sm:p-6">
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        width={1254}
        height={1254}
        priority
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="h-auto w-full rounded-[--radius-xl]"
      />
      <figcaption className="px-2 pt-4 pb-1 text-sm leading-relaxed text-[#542813]">
        The completed Nation Spice identity combines Sri Lankan geography,
        illustrated ingredients, a serif wordmark and the tagline “The Taste of
        Ceylon.”
      </figcaption>
    </figure>
  );
}

function LumiShowcase({ project }: { project: Project }) {
  if (!project.heroMedia || project.heroMedia.type !== "video") return null;

  return (
    <div className="space-y-6">
      <figure className="overflow-hidden rounded-[--radius-2xl] border border-[--color-divider] bg-[#030817] p-3 shadow-[--shadow-xl] sm:p-5">
        <video
          controls
          playsInline
          preload="none"
          poster={project.heroMedia.poster}
          aria-label={project.heroMedia.alt}
          className="aspect-video w-full rounded-[--radius-xl] bg-black object-contain"
        >
          <source src={project.heroMedia.src} type="video/mp4" />
          Your browser does not support embedded video playback.
        </video>
        <figcaption className="flex flex-col items-start justify-between gap-4 px-2 pt-4 pb-1 text-sm leading-relaxed text-white/70 sm:flex-row sm:items-center">
          <span>
            Interactive prototype walkthrough. Playback starts only when you
            choose to play it.
          </span>
          <a
            href="https://www.figma.com/design/ESDIGSF6TqnBSrnxZdBJTn/Untitled?node-id=0-1&p=f&t=lg3NcT2TffwlMpBT-0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-[--radius-md] bg-[--color-accent-primary] px-5 py-3 font-semibold text-[--color-text-primary] transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--color-accent-primary]"
          >
            View design in Figma
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </figcaption>
      </figure>

      <div className="grid gap-6 md:grid-cols-2">
        {project.gallery.map((media, index) => (
          <figure
            key={media.src}
            className="overflow-hidden rounded-[--radius-xl] border border-[--color-divider] bg-[#030817] p-2 shadow-[--shadow-lg]"
          >
            <Image
              src={media.src}
              alt={media.alt}
              width={1920}
              height={1367}
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full rounded-[calc(var(--radius-xl)-0.5rem)]"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function ProjectCaseStudy({ project, detail }: ProjectCaseStudyProps) {
  const isSmartPos = project.slug === "smart-web-pos";
  const isLumi = project.slug === "lumi";

  return (
    <article className="pb-24 sm:pb-32">
      <Container size="md" className="pt-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-[--color-text-secondary] transition-colors hover:text-[--color-accent-primary] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[--color-accent-primary]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to all work
        </Link>
      </Container>

      <Container size="md" className="pt-20 pb-16 sm:pt-24 sm:pb-20">
        <Reveal>
          <p className="mb-5 text-xs font-semibold tracking-[0.16em] text-[--color-accent-primary] uppercase">
            {detail.eyebrow}
          </p>
          <h1 className="font-display max-w-[18ch] text-4xl leading-tight font-bold tracking-tight text-[--color-text-primary] sm:text-5xl">
            {project.title}
          </h1>
          <p className="font-display mt-6 max-w-[24ch] text-2xl leading-snug font-semibold text-[--color-text-primary] sm:text-3xl">
            {detail.headline}
          </p>
          <p className="mt-7 max-w-[65ch] text-lg leading-relaxed text-[--color-text-secondary]">
            {detail.introduction}
          </p>
          <div className="mt-10">
            <ProjectMetadata project={project} />
          </div>
        </Reveal>
      </Container>

      <Container size="lg" className="pb-24">
        <Reveal delay={0.1}>
          {isSmartPos ? (
            <SmartPosMap areas={detail.focusAreas} />
          ) : isLumi ? (
            <LumiShowcase project={project} />
          ) : (
            <NationSpiceArtwork project={project} />
          )}
        </Reveal>
      </Container>

      <Container size="md">
        <div className="space-y-24">
          <Reveal>
            <section aria-labelledby={`${project.slug}-overview`}>
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[--color-accent-primary] uppercase">
                01 · Overview
              </p>
              <h2
                id={`${project.slug}-overview`}
                className="font-display text-3xl font-bold tracking-tight text-[--color-text-primary]"
              >
                The challenge and my contribution
              </h2>
              <div className="mt-8 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide text-[--color-text-primary] uppercase">
                    Design challenge
                  </h3>
                  <p className="leading-relaxed text-[--color-text-secondary]">
                    {detail.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide text-[--color-text-primary] uppercase">
                    My contribution
                  </h3>
                  <p className="leading-relaxed text-[--color-text-secondary]">
                    {detail.contribution}
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section aria-labelledby={`${project.slug}-decisions`}>
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[--color-accent-primary] uppercase">
                02 · Design decisions
              </p>
              <h2
                id={`${project.slug}-decisions`}
                className="font-display text-3xl font-bold tracking-tight text-[--color-text-primary]"
              >
                How the direction was shaped
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {detail.decisions.map((decision, index) => (
                  <div
                    key={decision.title}
                    className="rounded-[--radius-xl] border border-[--color-divider] bg-[--color-surface] p-6"
                  >
                    <span className="font-mono text-xs text-[--color-accent-primary]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-8 text-xl font-bold text-[--color-text-primary]">
                      {decision.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[--color-text-secondary]">
                      {decision.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {!isSmartPos && (
            <Reveal>
              <section aria-labelledby={`${project.slug}-elements`}>
                <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[--color-accent-primary] uppercase">
                  03 · {detail.focusLabel}
                </p>
                <h2
                  id={`${project.slug}-elements`}
                  className="font-display text-3xl font-bold tracking-tight text-[--color-text-primary]"
                >
                  {isLumi
                    ? "What the prototype covers"
                    : "What forms the identity"}
                </h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  {detail.focusAreas.map((area) => (
                    <Tag key={area} variant="accent" className="px-4 py-2">
                      {area}
                    </Tag>
                  ))}
                </div>
              </section>
            </Reveal>
          )}

          <Reveal>
            <section aria-labelledby={`${project.slug}-result`}>
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[--color-accent-primary] uppercase">
                {isSmartPos ? "03" : "04"} · Result
              </p>
              <h2
                id={`${project.slug}-result`}
                className="font-display text-3xl font-bold tracking-tight text-[--color-text-primary]"
              >
                {detail.resultTitle}
              </h2>
              <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-[--color-text-secondary]">
                {detail.result}
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section
              aria-labelledby={`${project.slug}-next`}
              className="rounded-[--radius-2xl] border border-[--color-divider] bg-[--color-surface] p-8 sm:p-10"
            >
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[--color-accent-primary] uppercase">
                {isSmartPos ? "04" : "05"} · Next steps
              </p>
              <h2
                id={`${project.slug}-next`}
                className="font-display text-3xl font-bold tracking-tight text-[--color-text-primary]"
              >
                What I would validate next
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {detail.nextSteps.map((step) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm leading-relaxed text-[--color-text-secondary]"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-[--color-accent-primary]"
                      aria-hidden="true"
                    />
                    {step}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 border-t border-[--color-divider] pt-10 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-[--color-text-muted]">
                  Explore another project or start a conversation.
                </p>
                <p className="font-display mt-1 text-xl font-bold text-[--color-text-primary]">
                  More work by Wathshala Amarasinghe
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 rounded-[--radius-md] border border-[--color-divider] px-5 py-3 text-sm font-semibold text-[--color-text-primary] transition-colors hover:border-[--color-accent-primary]"
                >
                  All projects
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-[--radius-md] bg-[--color-accent-primary] px-5 py-3 text-sm font-semibold text-[--color-text-primary] transition-[filter] hover:brightness-110"
                >
                  Contact me
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </article>
  );
}
