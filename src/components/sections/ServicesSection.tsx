"use client";

import { motion } from "motion/react";
import { Monitor, Code, Search, Check, Layers } from "lucide-react";

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

export function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#111] hover:bg-[#151515] border border-white/5 transition-colors duration-300 p-10 flex flex-col items-start rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 text-gold group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/50 font-light leading-relaxed mb-8 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm font-light text-foreground/70"
                    >
                      <div className="w-4 h-4 rounded-full border border-gold/50 flex items-center justify-center">
                        <Check size={10} className="text-gold" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
