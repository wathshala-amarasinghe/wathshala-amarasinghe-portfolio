import type { Project } from "@/types/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ProjectMetadata } from "./project-metadata";
import { ProjectMedia } from "./project-media";

interface CaseStudyLayoutProps {
  project: Project;
  children: React.ReactNode;
}

export function CaseStudyLayout({ project, children }: CaseStudyLayoutProps) {
  return (
    <article className="py-24 sm:py-32">
      <Container size="md">
        <Reveal className="mb-16 flex flex-col gap-8">
          <h1 className="font-display text-4xl leading-tight font-bold tracking-tight text-[--color-text-primary] sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-xl leading-relaxed text-[--color-text-secondary]">
            {project.shortDescription}
          </p>
          <ProjectMetadata project={project} />
        </Reveal>
      </Container>

      {project.heroMedia && (
        <Container size="lg" className="mb-24">
          <Reveal delay={0.2}>
            <ProjectMedia media={project.heroMedia} className="w-full" />
          </Reveal>
        </Container>
      )}

      <Container size="md">
        <div className="prose prose-invert prose-lg prose-headings:font-display prose-headings:tracking-tight prose-a:text-[--color-accent-primary] hover:prose-a:brightness-110 prose-img:rounded-[--radius-xl] max-w-none">
          {children}
        </div>
      </Container>
    </article>
  );
}
