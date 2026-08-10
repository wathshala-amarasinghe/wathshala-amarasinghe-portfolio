"use client";

import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Freelance UI/UX & Full-Stack Developer",
    org: "Self-Employed",
    location: "Remote",
    period: "2022 – Present",
    current: true,
    type: "Freelance",
    description:
      "Independently designing and building end-to-end digital products for clients across various sectors — from brand websites and web apps to custom UI/UX design projects.",
    bullets: [
      "Designing user-centered interfaces from wireframe to high-fidelity using Figma",
      "Building responsive, accessible web applications using React.js, Next.js, TypeScript, and Tailwind CSS",
      "Handling full project lifecycle: client briefs, UX research, design, development, and delivery",
      "Creating custom design systems, component libraries, and front-end architectures for scalable products",
      "Delivering cross-platform, mobile-responsive designs aligned with modern web standards",
    ],
  },
  {
    title: "Associate Software Engineer",
    org: "Medi Connect (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "July 2026 – Present",
    current: true,
    type: "Full-Time",
    description:
      "Contributing to the development of healthcare information systems at a specialised clinical software company, combining UI/UX expertise with front-end engineering.",
    bullets: [
      "Building and maintaining clinical and hospital management systems for the healthcare sector",
      "Contributing to the design and development of healthcare information systems and web applications",
      "Collaborating with cross-functional teams to deliver scalable, user-centered healthcare solutions",
      "Applying UI/UX expertise alongside front-end development for high-quality, accessible digital products",
      "Participating in agile sprints, code reviews, and continuous delivery workflows",
    ],
  },
  {
    title: "Associate UI/UX Developer",
    org: "Tech Connect Global (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "Jan 2026 – June 2026",
    current: false,
    type: "Full-Time",
    description:
      "Designed and developed official company and client-facing web products using modern front-end frameworks.",
    bullets: [
      "Designed and developed the official Tech Connect Global website using Next.js, TypeScript, React, and Tailwind CSS",
      "Designed and developed the Medi Connect official website using React.js, TypeScript, Tailwind CSS, and Vite",
      "Created responsive, user-friendly UI designs aligned with modern UX principles",
      "Collaborated with stakeholders to translate business requirements into functional digital experiences",
      "Maintained design consistency through reusable components and structured layouts",
    ],
  },
  {
    title: "UI/UX Designer Intern",
    org: "Tech Connect Global (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "July 2025 – December 2025",
    current: false,
    type: "Internship",
    description:
      "Designed end-to-end UX/UI for enterprise-level healthcare and finance web applications.",
    bullets: [
      "Designed end-to-end UX/UI for enterprise-level web applications",
      "Contributed to EMR & Hospital Information Systems (HIS) including patient management, laboratory, pharmacy, billing, and dashboards",
      "Designed UI for a personal finance tracking application, focusing on clarity and usability",
      "Conducted user research and usability testing to improve workflows and user efficiency",
      "Created wireframes, interactive prototypes, and high-fidelity UI designs using Figma",
      "Ensured responsive, accessible (WCAG), and consistent interface design across platforms",
    ],
  },
];

const typeColors: Record<string, string> = {
  Freelance: "border-purple-500/40 text-purple-400",
  "Full-Time": "border-gold/40 text-gold",
  Internship: "border-blue-400/40 text-blue-400",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-gold tracking-widest uppercase text-sm mb-4">
            Professional Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light mb-4">
            My <span className="italic text-gold">Career Journey</span>
          </h2>
          <p className="text-foreground/50 font-light max-w-md mx-auto">
            From freelance projects to enterprise healthcare systems — a timeline of growth.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-white/10 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  {exp.current ? (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-3 h-3 rounded-full border-2 bg-gold border-gold shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    />
                  ) : (
                    <div className="w-3 h-3 rounded-full border-2 bg-background border-white/30" />
                  )}
                </div>

                <div
                  className={`ml-14 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-[#111] border border-white/5 hover:border-white/10 transition-colors rounded-2xl p-6 md:p-8 group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-foreground font-serif text-lg leading-tight">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <motion.span
                              animate={{ opacity: [0.6, 1, 0.6] }}
                              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                              className="border border-gold/40 text-gold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full"
                            >
                              Current
                            </motion.span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <Briefcase size={11} className="text-gold/60" />
                          <p className="text-gold/80 text-sm font-light">{exp.org}</p>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/40 text-xs">
                          <span className="flex items-center gap-1">
                            <MapPin size={10} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={10} />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <span className={`border text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full shrink-0 ${typeColors[exp.type] ?? "border-white/20 text-foreground/40"}`}>
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-foreground/50 text-sm font-light leading-relaxed mb-5 italic">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-foreground/60 text-sm font-light leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
