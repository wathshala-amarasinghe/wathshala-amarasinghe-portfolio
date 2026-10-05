// ─────────────────────────────────────────────
//  PracticeSection — Capabilities overview
// ─────────────────────────────────────────────

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { PenTool, Code2, Search, Layers } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "UX Research",
    description:
      "Uncovering user needs through interviews, usability testing, and competitive analysis to inform product decisions.",
  },
  {
    icon: PenTool,
    title: "UI & Product Design",
    description:
      "Crafting intuitive, accessible, and visually refined interfaces that align with both user goals and business objectives.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Building robust component libraries and documentation to ensure consistency and speed up development.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Translating designs into performant, accessible web experiences using React, TypeScript, and modern CSS.",
  },
];

export function PracticeSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container size="xl" className="px-8 sm:px-12 lg:px-16">
        <Reveal className="mb-16">
          <SectionHeading
            label="Services"
            title="Capabilities"
            subtitle="Bridging the gap between design and engineering."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.title} delay={i * 0.1} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[--radius-lg] bg-[--color-accent-primary-dim] text-[--color-accent-primary]">
                  <Icon size={24} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-[--color-text-primary]">
                    {cap.title}
                  </h3>
                  <p className="leading-relaxed text-[--color-text-secondary]">
                    {cap.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
