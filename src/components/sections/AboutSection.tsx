"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";

const socialIcons = [
  {
    name: "GitHub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    href: "https://github.com/wathshala-amarasinghe",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    href: "https://www.linkedin.com/in/wathshala-amarasinghe",
  },
  {
    name: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    href: "mailto:wathshaladulashan@outlook.com",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-20 flex z-0 select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[15vw] font-serif text-foreground/10 italic pr-8">Wathshala Amarasinghe</span>
          <span className="text-[15vw] font-serif text-foreground/10 italic pr-8">Wathshala Amarasinghe</span>
          <span className="text-[15vw] font-serif text-foreground/10 italic pr-8">Wathshala Amarasinghe</span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-24 relative"
        >
          <div className="w-125 max-w-full aspect-square relative z-10 group cursor-pointer">
            <img
              src="/profile/profile-photo.jpeg"
              alt="Portrait of Wathshala Amarasinghe"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#050505] to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold font-light italic leading-tight">
              Designing experiences <br /> that truly matter!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <p className="text-foreground/60 font-light leading-relaxed">
              Hi, I&apos;m Wathshala Amarasinghe — a UI/UX Designer and Software Engineering graduate with hands-on experience building digital products for healthcare and financial systems. I specialise in translating complex requirements into clean, functional interfaces through research, wireframing, and high-fidelity design. I&apos;m passionate about accessibility, design systems, and collaborating in agile teams to deliver scalable solutions.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.name}
                  className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-gold/10 hover:border-gold/30 text-foreground/60 hover:text-gold transition-all"
                >
                  {icon.icon}
                </a>
              ))}
              <a
                href="/cv/Wathshala-Dulashan-CV.pdf"
                download="Wathshala-Dulashan-CV.pdf"
                className="inline-flex items-center gap-2 border border-gold/50 text-gold px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-gold/10 hover:border-gold transition-colors"
              >
                <Download size={13} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
