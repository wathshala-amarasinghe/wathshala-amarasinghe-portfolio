"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Compass, MapPin, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const socials = [
  {
    name: "Email",
    href: "mailto:wathshaladulashan@outlook.com",
    icon: MailIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wathshala-amarasinghe",
    icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/wathshala-amarasinghe",
    icon: GithubIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/wathshala",
    icon: TwitterIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/wathshala",
    icon: InstagramIcon,
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/wathshala",
    icon: Compass,
  },
];

export function ContactContent() {
  return (
    <main className="min-h-screen pt-32 pb-16 flex items-center justify-center relative overflow-hidden">
      {/* Left side portrait */}
      <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full z-0 group cursor-pointer">
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-background z-10 pointer-events-none" />
        <img
          src="/profile/profile-photo.jpeg"
          alt="Portrait of Wathshala Amarasinghe"
          className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 object-top"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 flex justify-end relative z-10">
        <div className="w-full lg:w-1/2 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-foreground/40 tracking-widest uppercase text-xs mb-4">
              Contact
            </p>
            <h1 className="text-5xl font-serif text-foreground font-light">
              Let&apos;s get in touch.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-white/5 p-8 bg-background/80 backdrop-blur-sm rounded-sm mb-6"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between p-4 border border-white/5 bg-background/80 backdrop-blur-sm hover:border-gold/30 hover:bg-card transition-all group rounded-sm"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={16}
                      className="text-foreground/50 group-hover:text-gold transition-colors"
                    />
                    <span className="text-xs uppercase tracking-widest text-foreground/60 group-hover:text-foreground transition-colors">
                      {social.name}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-foreground/30 group-hover:text-gold transition-colors"
                  />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
