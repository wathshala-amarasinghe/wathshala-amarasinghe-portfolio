"use client";

import { motion } from "motion/react";

const steps = [
  {
    title: "Research & Discovery",
    description:
      "Understanding user needs, business goals, and pain points through user research, interviews, and competitive analysis before any design decisions are made.",
  },
  {
    title: "Wireframing & Information Architecture",
    description:
      "Mapping out user flows and laying the structural foundation with low-fidelity wireframes, ensuring intuitive navigation and logical content hierarchy.",
  },
  {
    title: "High-Fidelity UI Design",
    description:
      "Crafting pixel-perfect, accessible interfaces in Figma with attention to typography, colour, spacing, and interactive states aligned to the design system.",
  },
  {
    title: "Prototyping & Usability Testing",
    description:
      "Creating interactive prototypes and conducting usability testing sessions to validate design decisions and iterate based on real user feedback.",
  },
  {
    title: "Implementation & Handoff",
    description:
      "Delivering developer-ready assets and specifications, and collaborating closely during front-end implementation using React, Next.js, and Tailwind CSS.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-gold tracking-widest uppercase text-sm mb-4">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light mb-4">
            Your Website <span className="italic text-gold">in 5 steps</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-1/2 md:left-1/2 space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:-translate-x-full md:pr-16" : "md:pl-16"
              } pl-12 md:w-full`}
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-auto md:right-[-5px] md:[&_div]:left-[-5px] top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10"></div>

              <div className="bg-card hover:bg-card-hover transition-colors border border-white/5 p-8 rounded-2xl w-full">
                <span className="text-gold font-serif text-5xl opacity-20 absolute top-4 right-8 select-none">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-serif text-foreground mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-foreground/60 font-light leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
