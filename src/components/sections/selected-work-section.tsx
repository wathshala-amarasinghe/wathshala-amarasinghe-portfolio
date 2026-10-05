// ─────────────────────────────────────────────
//  SelectedWorkSection — Homepage projects
// ─────────────────────────────────────────────

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/projects";

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      className="border-y-2 border-[--color-divider] bg-[--color-surface] py-24 sm:py-32"
    >
      <Container size="xl" className="px-8 sm:px-12 lg:px-16">
        <Reveal className="mb-16">
          <SectionHeading
            label="Selected Work"
            title="Recent Projects"
            subtitle="A selection of product design, interaction, and development work from the past few years."
          />
        </Reveal>

        <div className="flex flex-col gap-24 sm:gap-32">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
