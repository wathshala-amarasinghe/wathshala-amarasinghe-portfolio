"use client";
// ─────────────────────────────────────────────
//  ExperienceSection — Employment & Education
//  Animated timeline with scroll-fill color
// ─────────────────────────────────────────────

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { experience, education } from "@/data/experience";
import { useEffect, useRef, useState } from "react";

function AnimatedTimeline({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const fill = fillRef.current;
    if (!container || !fill) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      // How far into the container we've scrolled
      const scrolled = windowH - rect.top;
      const total = rect.height;
      const percent = Math.min(Math.max(scrolled / total, 0), 1);
      setFillHeight(percent * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative ml-3 flex flex-col gap-12 pl-6">
      {/* Track (full height grey line) */}
      <div className="absolute top-0 left-0 h-full w-px bg-white/10" />
      {/* Filled (animated maroon line from top) */}
      <div
        ref={fillRef}
        className="absolute top-0 left-0 w-px bg-linear-to-b from-[#6B191F] to-[#A91F27] transition-none"
        style={{ height: `${fillHeight}%` }}
      />
      {children}
    </div>
  );
}

function formatDate(dateStr: string | "present") {
  if (dateStr === "present") return "Present";
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function ExperienceSection() {
  return (
    <section
      id="work-experience"
      className="border-y-[3px] border-white/5 bg-[--color-surface] py-24 sm:py-32"
    >
      <Container size="xl" className="px-8 sm:px-12 lg:px-16">
        <Reveal className="mb-16">
          <SectionHeading label="Background" title="Experience & Education" />
        </Reveal>

        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-16">
          {/* Experience Column */}
          <div className="flex flex-col gap-12">
            <Reveal delay={0.1}>
              <h3 className="font-display mb-8 border-b border-white/5 pb-4 text-2xl font-bold text-[--color-text-primary]">
                Employment
              </h3>
            </Reveal>

            <AnimatedTimeline>
              {experience.map((job, i) => (
                <Reveal
                  key={`${job.company}-${job.startDate}-${i}`}
                  delay={0.2 + i * 0.1}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute top-1.5 -left-7.75 h-3 w-3 rounded-full border-2 border-[#6B191F] bg-[#6B191F] shadow-[0_0_12px_rgba(107,25,31,0.7)]" />

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                      <h4 className="text-xl font-bold text-[--color-text-primary]">
                        {job.title}
                      </h4>
                      <span className="text-sm font-medium whitespace-nowrap text-[#6B191F]">
                        {formatDate(job.startDate)} — {formatDate(job.endDate)}
                      </span>
                    </div>

                    <span className="font-medium text-[--color-text-secondary]">
                      {job.company}
                      {job.location && (
                        <>
                          <span className="mx-1.5 opacity-50">•</span>
                          {job.location}
                        </>
                      )}
                    </span>

                    <p className="mt-2 text-sm leading-relaxed text-[--color-text-muted]">
                      {job.description}
                    </p>

                    {job.highlights.length > 0 && (
                      <ul className="mt-3 flex flex-col gap-2">
                        {job.highlights.map((highlight, j) => (
                          <li
                            key={j}
                            className="relative pl-4 text-sm text-[--color-text-muted] before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#6B191F]/60 before:content-['']"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </AnimatedTimeline>
          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-12">
            <Reveal delay={0.1}>
              <h3 className="font-display mb-8 border-b border-white/5 pb-4 text-2xl font-bold text-[--color-text-primary]">
                Education
              </h3>
            </Reveal>

            <AnimatedTimeline>
              {education.map((edu, i) => (
                <Reveal
                  key={`${edu.institution}-${i}`}
                  delay={0.2 + i * 0.1}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute top-1.5 -left-7.75 h-3 w-3 rounded-full border border-white/30 bg-white/20" />
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-between gap-1">
                      <h4 className="text-xl font-bold text-[--color-text-primary]">
                        {edu.degree}
                      </h4>
                      <span className="text-sm font-semibold text-[#6B191F]">
                        Graduated: December 2025
                      </span>
                    </div>

                    <span className="font-medium text-[--color-text-secondary]">
                      University of Plymouth, UK
                    </span>
                    <span className="text-sm text-[--color-text-muted]">
                      Delivered at NSBM Green University, Homagama, Sri Lanka
                    </span>

                    <span className="text-sm text-[--color-text-muted]">
                      {edu.field}
                      {edu.location && (
                        <>
                          <span className="mx-1.5 opacity-50">•</span>
                          {edu.location}
                        </>
                      )}
                    </span>
                  </div>
                </Reveal>
              ))}
            </AnimatedTimeline>
          </div>
        </div>
      </Container>
    </section>
  );
}
