"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { Monitor, Code, Search, Check, Layers } from "lucide-react";
import { MouseEvent } from "react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered digital products through research, wireframing, prototyping, and high-fidelity UI using Figma and Adobe XD.",
    icon: Monitor,
    features: ["User Research", "Wireframing & Prototyping", "High-Fidelity UI"],
  },
  {
    title: "Front-End Development",
    description:
      "Building responsive, accessible, and performant web interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.",
    icon: Code,
    features: ["React.js / Next.js", "TypeScript & Tailwind CSS", "Responsive & Accessible"],
  },
  {
    title: "Design Systems",
    description:
      "Creating reusable component libraries and structured design systems that ensure consistency, scalability, and faster development.",
    icon: Layers,
    features: ["Component Libraries", "Style Guides", "Accessibility (WCAG)"],
  },
  {
    title: "UX Research",
    description:
      "Conducting user research and usability testing to validate design decisions and iterate based on real-world usage.",
    icon: Search,
    features: ["Usability Testing", "User Interviews", "Agile Iteration"],
  },
];

function ServiceCard({ service, index }: { service: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      className="relative group bg-[#111]/80 hover:bg-card border border-white/5 transition-colors duration-500 rounded-2xl overflow-hidden flex flex-col items-start p-10 h-full backdrop-blur-sm"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-black/40 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 group-hover:scale-110">
        <Icon size={24} strokeWidth={1.5} className="text-white/70 group-hover:text-gold transition-colors duration-500" />
      </div>
      
      <h3 className="relative z-10 text-2xl font-serif text-foreground mb-4">
        {service.title}
      </h3>
      
      <p className="relative z-10 text-foreground/50 font-light leading-relaxed mb-8 text-sm grow">
        {service.description}
      </p>

      <ul className="relative z-10 space-y-3 mt-auto w-full">
        {service.features.map((feature: string) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm font-light text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300"
          >
            <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-gold/30 group-hover:bg-gold/10 transition-colors duration-300 shrink-0">
              <Check size={10} className="text-foreground/50 group-hover:text-gold transition-colors duration-300" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-gold tracking-wider uppercase text-sm font-medium mb-4 block">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">My Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
