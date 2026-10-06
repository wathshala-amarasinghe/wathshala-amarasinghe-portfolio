"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import {
  Code,
  PenTool,
  Layout,
  Layers,
  Terminal,
  Database,
  Cloud,
  Server,
  Command,
  Activity,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TechSkillProps {
  name: string;
  description: string;
  percentage: number;
  icon: React.ReactNode;
}

function TechSkill({ name, description, percentage, icon }: TechSkillProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!containerRef.current || prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Starts animation when element is 85% down the screen
          toggleActions: "play none none none",
        },
      });

      // Animate width from 0 to percentage
      tl.fromTo(
        barRef.current,
        { width: "0%" },
        { width: `${percentage}%`, duration: 1.5, ease: "power3.out" }
      );

      // Animate the text number from 0 to percentage
      tl.fromTo(
        textRef.current,
        { innerText: 0 },
        {
          innerText: percentage,
          duration: 1.5,
          ease: "power3.out",
          snap: { innerText: 1 }, // Snap to whole numbers
          onUpdate: function () {
            if (textRef.current) {
              textRef.current.innerHTML = `${Math.round(Number(textRef.current.innerText))}%`;
            }
          },
        },
        "<" // start at the same time as the bar animation
      );
    },
    { scope: containerRef, dependencies: [percentage, prefersReducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-between gap-4 border-b border-[--color-divider] py-4 last:border-0 sm:flex-row sm:items-center"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/5 bg-white/5 text-[--color-text-primary]">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-[--color-text-primary]">
            {name}
          </h3>
          <p className="text-sm text-[--color-text-secondary]">{description}</p>
        </div>
      </div>

      <div className="flex w-full items-center justify-end sm:w-1/2">
        <div className="relative flex h-10 w-full max-w-75 items-center overflow-hidden rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
          <div
            ref={barRef}
            className="absolute top-0 left-0 h-full rounded-full bg-[#6B191F]/80"
            style={{ width: prefersReducedMotion ? `${percentage}%` : "0%" }}
          />
          <span
            ref={textRef}
            className="relative z-10 mr-4 ml-auto text-xs font-bold text-white/90"
          >
            {prefersReducedMotion ? percentage : 0}%
          </span>
        </div>
      </div>
    </div>
  );
}

export function TechSection({ id }: { id: string }) {
  const mainSkills = [
    {
      name: "Figma & UI/UX Design",
      description: "Prototyping, wireframing, and user flows",
      percentage: 90,
      icon: <PenTool size={20} />,
    },
    {
      name: "React & Next.js",
      description: "Frontend web development frameworks",
      percentage: 85,
      icon: <Code size={20} />,
    },
    {
      name: "HTML5, CSS3 & Tailwind CSS",
      description: "Responsive web interfaces & styling",
      percentage: 90,
      icon: <Layout size={20} />,
    },
    {
      name: "JavaScript & TypeScript",
      description: "Interactive components & logic",
      percentage: 80,
      icon: <Terminal size={20} />,
    },
    {
      name: "Databases & Backend",
      description: "Node.js, PostgreSQL, Supabase, Prisma",
      percentage: 75,
      icon: <Database size={20} />,
    },
  ];

  const otherTools = [
    { name: "Adobe XD", icon: <PenTool size={20} /> },
    { name: "Miro", icon: <Layers size={20} /> },
    { name: "Bootstrap", icon: <Layout size={20} /> },
    { name: "Node.js", icon: <Server size={20} /> },
    { name: "SQL & MySQL", icon: <Database size={20} /> },
    { name: "PostgreSQL", icon: <Database size={20} /> },
    { name: "Supabase", icon: <Cloud size={20} /> },
    { name: "Prisma ORM", icon: <Database size={20} /> },
    { name: "Git & GitHub", icon: <Command size={20} /> },
    { name: "Agile/Scrum", icon: <Activity size={20} /> },
  ];

  return (
    <section id={id} className="py-24 sm:py-32">
      <Container size="xl" className="px-8 sm:px-12 lg:px-16">
        <Reveal className="mb-12">
          <SectionHeading
            label="Tech Stack"
            title={
              <>
                See how my expertise with these tools
                <br />
                <span className="text-[--color-text-secondary]">
                  drives better results
                </span>
              </>
            }
          />
        </Reveal>

        <div className="mb-16 flex flex-col gap-2">
          {mainSkills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.1}>
              <TechSkill {...skill} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-display mb-6 text-xl font-bold text-[--color-text-primary]">
            Other tools I use
          </h3>
          <div className="flex flex-wrap gap-4">
            {otherTools.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border-2 border-white/5 bg-white/5 px-4 py-3 backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <div className="text-white/70">{tool.icon}</div>
                <span className="text-sm font-medium text-[--color-text-primary]">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
