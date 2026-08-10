"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { name: "GitHub", href: "https://github.com/wathshala-amarasinghe" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/wathshala-amarasinghe/" },
  { name: "Email", href: "mailto:wathshaladulashan@outlook.com" },
];

const skillGroups = [
  { label: "Programming", skills: ["Java", "JavaScript", "TypeScript", "PHP", "HTML", "CSS"] },
  { label: "Frameworks", skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Vite"] },
  { label: "UI/UX & Design", skills: ["Figma", "Adobe XD", "Framer", "Wireframing", "Prototyping", "Design Systems", "WCAG Accessibility"] },
  { label: "Database & Tools", skills: ["MySQL", "MongoDB", "phpMyAdmin", "XAMPP", "GitHub", "Docker", "Postman"] },
];

const experiences = [
  {
    title: "Freelance UI/UX & Full-Stack Developer",
    org: "Self-Employed",
    location: "Remote",
    period: "2022 – Present",
    current: true,
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
    bullets: [
      "Working at a specialised healthcare software development company building clinical and hospital management systems",
      "Contributing to the design and development of healthcare information systems and clinical web applications",
      "Collaborating with cross-functional teams to deliver scalable, user-centered solutions for the healthcare sector",
      "Applying UI/UX expertise alongside front-end development to deliver high-quality, accessible digital products",
      "Participating in agile sprints, code reviews, and continuous delivery workflows",
    ],
  },
  {
    title: "Associate UI/UX Developer",
    org: "Tech Connect Global (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "Jan 2026 – June 2026",
    current: false,
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

export function AboutContent() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <p className="text-gold tracking-widest uppercase text-xs mb-4">
            A BRIEF INTRODUCTION
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground font-light mb-8 leading-tight">
            UI/UX Designer &amp; Associate Developer
          </h2>

          <div className="space-y-6 text-foreground/60 font-light text-sm md:text-base leading-relaxed mb-12">
            <p>
              I&apos;m Wathshala Amarasinghe, a UI/UX Designer and Software Engineering graduate (BSc Hons, Plymouth University) with hands-on experience designing intuitive digital products for healthcare and financial systems. Currently working as an Associate Software Engineer at Medi Connect (Pvt) Ltd.
            </p>
            <p>
              I bring a strong foundation in usability, accessibility (WCAG), and design systems. Whether it&apos;s an enterprise EMR system, a personal finance tracker, or a corporate marketing site — I&apos;m passionate about crafting interfaces that are both beautiful and functionally excellent. My workflow spans research, wireframing, high-fidelity prototyping in Figma, and front-end implementation with React and Next.js.
            </p>
          </div>

          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500 cursor-pointer">
            <img
              src="/profile/profile-photo.jpeg"
              alt="Wathshala Amarasinghe"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#111] hover:bg-[#1a1a1a] border border-white/5 transition-colors p-4 md:p-6 rounded-2xl flex items-center justify-between group"
            >
              <span className="text-foreground/80 font-light text-sm uppercase tracking-wider group-hover:text-gold transition-colors">
                {social.name}
              </span>
              <ArrowUpRight size={16} className="text-foreground/40 group-hover:text-gold transition-colors" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <p className="text-gold tracking-widest uppercase text-xs mb-8">
            PROFESSIONAL EXPERIENCE
          </p>
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className={i > 0 ? "border-t border-white/5 pt-10" : ""}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-foreground font-serif text-lg md:text-xl">{exp.title}</h3>
                      {exp.current && (
                        <span className="border border-gold/40 text-gold text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-gold/80 text-sm font-light">{exp.org} — {exp.location}</p>
                  </div>
                  <span className="text-foreground/40 text-xs uppercase tracking-widest whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-foreground/60 text-sm font-light leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <p className="text-gold tracking-widest uppercase text-xs mb-8">
            UX/UI &amp; TECHNICAL SKILLS
          </p>
          <div className="space-y-6">
            {skillGroups.map((group, i) => (
              <div key={i} className={i > 0 ? "border-t border-white/5 pt-6" : ""}>
                <p className="text-foreground/40 text-xs uppercase tracking-widest mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-white/10 rounded-full px-4 py-1.5 text-[11px] text-foreground/70 uppercase tracking-widest hover:border-gold/40 hover:text-gold transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <p className="text-gold tracking-widest uppercase text-xs mb-8">
            EDUCATION
          </p>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div>
              <h3 className="text-foreground font-serif text-lg md:text-xl">BSc (Hons) in Software Engineering</h3>
              <p className="text-gold/80 text-sm font-light">Plymouth University, United Kingdom</p>
              <p className="text-foreground/50 text-xs mt-1 font-light">Key Modules: Software Engineering Principles, Data Structures &amp; Algorithms, Web Application Development, Database Management Systems, Human-Computer Interaction</p>
            </div>
            <span className="text-foreground/40 text-xs uppercase tracking-widest whitespace-nowrap">Dec 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
