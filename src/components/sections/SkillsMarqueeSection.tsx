"use client";

import { motion } from "motion/react";
import { 
  FaJava, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaFigma, FaGithub, FaDocker, FaUniversalAccess
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiPhp, SiNextdotjs, SiTailwindcss, SiVite, 
  SiFramer, SiMysql, SiMongodb, SiPhpmyadmin, SiXampp, SiPostman
} from "react-icons/si";
import { Layers, MonitorSmartphone, MousePointer2, PenTool } from "lucide-react";

const skills = [
  // Programming
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
  { name: "HTML", icon: FaHtml5, color: "#e34f26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
  // Frameworks
  { name: "React.js", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  // UI/UX & Design
  { name: "Figma", icon: FaFigma, color: "#f24e1e" },
  { name: "Adobe XD", icon: PenTool, color: "#ff61f6" },
  { name: "Framer", icon: SiFramer, color: "#0055FF" },
  { name: "Wireframing", icon: MousePointer2, color: "#c5a059" },
  { name: "Prototyping", icon: MonitorSmartphone, color: "#c5a059" },
  { name: "Design Systems", icon: Layers, color: "#c5a059" },
  { name: "WCAG Accessibility", icon: FaUniversalAccess, color: "#00A4E4" },
  // Database & Tools
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "phpMyAdmin", icon: SiPhpmyadmin, color: "#6C78AF" },
  { name: "XAMPP", icon: SiXampp, color: "#FB7A24" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Docker", icon: FaDocker, color: "#2496ed" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

export function SkillsMarqueeSection() {
  return (
    <section className="py-20 bg-[#111]/30 border-y border-white/5 overflow-hidden">
      <div className="mb-12 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold tracking-wider uppercase text-sm font-medium mb-4 block">
            UX/UI & Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Technologies I Work With</h2>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-6">
        <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 group">
          {Array.from({ length: 2 }).map((_, i) => (
            <div 
              key={i} 
              className="flex gap-6 animate-marquee shrink-0 pr-6 group-hover:[animation-play-state:paused]"
              aria-hidden={i === 1}
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={`${skill.name}-${index}`} 
                    className="flex items-center gap-4 bg-card border border-white/5 px-8 py-4 rounded-xl transition-all duration-300 hover:border-gold/30 hover:bg-[#1a1a1a] hover:shadow-[0_0_20px_rgba(197,160,89,0.15)] cursor-default"
                  >
                    <Icon size={32} style={{ color: skill.color }} />
                    <span className="text-foreground/90 font-medium whitespace-nowrap text-lg tracking-wide">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
