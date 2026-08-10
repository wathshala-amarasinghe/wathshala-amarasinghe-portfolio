"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    content:
      "Working with Wathshala was a game-changer for our brand. The attention to detail and creative vision brought our ideas to life in a way we couldn't have imagined.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Founder of Nova",
    content:
      "Exceptional web design skills and a true professional. The project was delivered ahead of schedule and the results exceeded our expectations across the board.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Emma Roberts",
    role: "Marketing Director",
    content:
      "The new website has drastically improved our conversion rates. It's not only visually stunning but incredibly user-friendly and optimized perfectly for SEO.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "David Smith",
    role: "E-commerce Manager",
    content:
      "A seamless collaboration from start to finish. Wathshala took the time to understand our complex requirements and delivered a flawless digital experience.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-32 px-6 bg-black/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-light mb-4">
            What my <span className="italic text-gold">clients say</span>
          </h2>
          <p className="text-foreground/60 font-light">
            Don&apos;t just take my word for it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card hover:bg-card-hover border border-white/5 p-8 rounded-2xl transition-colors relative"
            >
              <Quote className="absolute top-8 right-8 text-gold/20" size={40} />
              <p className="text-foreground/80 font-light leading-relaxed mb-8 italic relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover filter grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500"
                />
                <div>
                  <h4 className="font-serif text-foreground">{testimonial.name}</h4>
                  <p className="text-gold text-sm font-light">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
