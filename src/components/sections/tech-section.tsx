"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TechSkillProps {
  name: string;
  description: string;
  percentage: number;
  icon: string;
  iconSurface?: string;
}

interface TechTool {
  name: string;
  icon: string;
  iconSurface?: string;
}

const mainSkills: TechSkillProps[] = [
  {
    name: "Product Design & Design Systems",
    description: "Figma, component systems, and polished product interfaces",
    percentage: 90,
    icon: "/icons/tech/figma.svg",
    iconSurface: "bg-white",
  },
  {
    name: "UX Research & Prototyping",
    description: "User flows, wireframes, testing, and validated decisions",
    percentage: 85,
    icon: "/icons/tech/maze.png",
  },
  {
    name: "Framer & Interaction Design",
    description: "High-fidelity prototypes, motion, and launch-ready pages",
    percentage: 80,
    icon: "/icons/tech/framer.svg",
    iconSurface: "bg-white",
  },
  {
    name: "React & Next.js",
    description: "Responsive, component-based frontend implementation",
    percentage: 85,
    icon: "/icons/tech/react.svg",
    iconSurface: "bg-[#071b27]",
  },
  {
    name: "TypeScript & Tailwind CSS",
    description: "Accessible interaction logic and responsive UI styling",
    percentage: 80,
    icon: "/icons/tech/typescript.svg",
    iconSurface: "bg-white",
  },
];

const techTools: TechTool[] = [
  { name: "Figma", icon: "/icons/tech/figma.svg", iconSurface: "bg-white" },
  {
    name: "FigJam",
    icon: "/icons/tech/figma.svg",
    iconSurface: "bg-[#fff2cc]",
  },
  {
    name: "Framer",
    icon: "/icons/tech/framer.svg",
    iconSurface: "bg-white",
  },
  { name: "Maze", icon: "/icons/tech/maze.png" },
  { name: "Miro", icon: "/icons/tech/miro.svg" },
  { name: "Adobe Photoshop", icon: "/icons/tech/photoshop.svg" },
  { name: "HTML5", icon: "/icons/tech/html5.svg" },
  { name: "CSS3", icon: "/icons/tech/css3.svg" },
  { name: "Tailwind CSS", icon: "/icons/tech/tailwindcss.svg" },
  { name: "JavaScript", icon: "/icons/tech/javascript.svg" },
  { name: "TypeScript", icon: "/icons/tech/typescript.svg" },
  { name: "React", icon: "/icons/tech/react.svg" },
  {
    name: "Next.js",
    icon: "/icons/tech/nextjs.svg",
    iconSurface: "bg-white",
  },
  { name: "VS Code", icon: "/icons/tech/vscode.svg" },
  { name: "Git", icon: "/icons/tech/git.svg" },
  {
    name: "GitHub",
    icon: "/icons/tech/github.svg",
    iconSurface: "bg-white",
  },
  { name: "Node.js", icon: "/icons/tech/nodejs.svg" },
  { name: "Postman", icon: "/icons/tech/postman.svg" },
  {
    name: "ChatGPT",
    icon: "/icons/tech/openai.svg",
    iconSurface: "bg-white",
  },
  {
    name: "GitHub Copilot",
    icon: "/icons/tech/github-copilot.svg",
    iconSurface: "bg-white",
  },
];

function TechSkill({
  name,
  description,
  percentage,
  icon,
  iconSurface,
}: TechSkillProps) {
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
        <div
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg",
            iconSurface
          )}
        >
          <Image
            src={icon}
            alt=""
            width={34}
            height={34}
            aria-hidden="true"
            className="h-8.5 w-8.5 object-contain"
          />
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
            Tools & technologies I use
          </h3>
          <ul
            className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 xl:grid-cols-6"
            aria-label="Tools and technologies"
          >
            {techTools.map((tool) => (
              <li
                key={tool.name}
                className="group flex min-h-30 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl bg-black/20 shadow-lg ring-1 ring-white/10",
                    tool.iconSurface
                  )}
                >
                  <Image
                    src={tool.icon}
                    alt=""
                    width={38}
                    height={38}
                    aria-hidden="true"
                    className="h-9.5 w-9.5 object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </span>
                <span className="text-xs font-semibold text-[--color-text-primary]">
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
