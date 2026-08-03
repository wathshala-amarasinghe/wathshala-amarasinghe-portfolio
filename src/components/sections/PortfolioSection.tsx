"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "@/components/ui/TiltCard";

const defaultProjects = [
  {
    title: "E-Commerce Redesign",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Marketing Website",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Real Estate Portal",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
  },
];

export function PortfolioSection({
  hideHeader = false,
  projects = defaultProjects,
}: {
  hideHeader?: boolean;
  projects?: any[];
}) {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-black/40 border-y border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light">
                Selected <span className="italic text-gold">work</span>
              </h2>
            </motion.div>
            <motion.a
              href="#"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm"
            >
              See All <ArrowUpRight size={16} />
            </motion.a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer perspective-1000"
            >
              <Link href={`/work/${project.slug || "e-commerce-platform"}`}>
              <TiltCard className="relative overflow-hidden rounded-2xl h-full block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-gold text-sm tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.category}
                </p>
                <h3 className="text-2xl font-serif text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
              </div>
            </TiltCard>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
