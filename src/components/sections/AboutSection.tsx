"use client";

import { motion } from "motion/react";

const socialIcons = [
  {
    name: "Twitter",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),
  },
  {
    name: "Instagram",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "Dribbble",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
      </svg>
    ),
  },
  {
    name: "Linkedin",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Marquee Text */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-20 flex z-0 select-none">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[15vw] font-serif text-foreground/10 italic pr-8">
            Arik Andersson
          </span>
          <span className="text-[15vw] font-serif text-foreground/10 italic pr-8">
            Arik Andersson
          </span>
          <span className="text-[15vw] font-serif text-foreground/10 italic pr-8">
            Arik Andersson
          </span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Center Portrait Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-24 relative"
        >
          <div className="w-[500px] max-w-full aspect-square relative z-10">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
              alt="Portrait"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            {/* Fade effect at the bottom of the image to blend into background */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Two Column Layout Below Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold font-light italic leading-tight">
              A website that leaves <br /> a lasting impression!
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
              Hi, I'm Arik Andersson - a freelancer specializing in premium web
              design, development, and SEO services. I'm passionate about
              creating unique and effective solutions for my clients, and I
              bring a personal touch to every project. Let's work together to
              bring your vision to life!
            </p>

            <div className="flex items-center gap-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={icon.name}
                  className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-gold/10 hover:border-gold/30 text-foreground/60 hover:text-gold transition-all"
                >
                  {icon.svg}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
