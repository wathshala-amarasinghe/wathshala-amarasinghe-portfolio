"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/data/experience";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollDownArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView();
  };

  return (
    <button
      onClick={scrollDown}
      aria-label="Scroll down"
      tabIndex={visible ? undefined : -1}
      aria-hidden={!visible}
      className={[
        "absolute bottom-12 left-1/2 -translate-x-1/2",
        "flex flex-col items-center gap-1 text-white/70 transition-all duration-300 hover:text-[var(--color-accent-text)]",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <span className="text-xs font-semibold tracking-[0.2em] uppercase">
        Scroll
      </span>
      <ChevronDown size={20} aria-hidden="true" />
    </button>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center pt-24 pb-32 sm:pt-32 sm:pb-40"
    >
      <Container size="md" className="mx-0 ml-0 px-8 sm:px-12 lg:px-16">
        <Reveal stagger={0.15}>
          <p className="mb-6 text-sm font-bold tracking-[0.25em] text-[var(--color-accent-text)] uppercase">
            — UI/UX Engineer &amp; Product Designer
          </p>

          <h1 className="font-display mb-8 max-w-4xl text-[clamp(2.5rem,5vw+1rem,4.5rem)] leading-none font-bold tracking-tight text-[--color-text-primary]">
            I design &amp; build digital products that{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[var(--color-accent-text)] italic">
                people
              </span>
              <span
                className="absolute -bottom-1 left-0 h-0.75 w-full rounded-full bg-[#6B191F] opacity-40"
                aria-hidden="true"
              />
            </span>{" "}
            <span className="text-[#E8D4C3]">love</span> to use.
          </h1>

          <p className="mb-8 text-xl font-medium text-[--color-text-secondary] sm:text-2xl">
            Currently working as an{" "}
            <span className="text-[var(--color-accent-text)] italic">
              {experience[0].title}
            </span>
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-[--color-text-secondary]">
            I help teams build intuitive interfaces, robust design systems, and
            polished frontend experiences.
          </p>
        </Reveal>
      </Container>

      <ScrollDownArrow />
    </section>
  );
}
