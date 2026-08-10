"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/50 border-b border-white/5"
    >
      <Link
        href="/"
        className="text-lg font-serif font-bold text-foreground hover:text-gold transition-colors"
      >
        Wathshala.
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-xs uppercase tracking-widest font-medium text-foreground/80 hover:text-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Button
        asChild
        variant="outline"
        className="rounded-full border-white/10 uppercase tracking-widest text-xs h-9 px-6 hover:bg-gold hover:text-black hover:border-gold transition-colors"
      >
        <Link href="/contact">Let&apos;s Talk</Link>
      </Button>
    </motion.header>
  );
}
