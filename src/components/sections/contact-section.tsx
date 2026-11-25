import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/ui/contact-form";
import { profile } from "@/data/profile";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 sm:py-48">
      <Container size="md" className="flex flex-col items-center text-center">
        <Reveal stagger={0.1}>
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[--color-accent-primary-dim] text-[--color-accent-primary]">
            <Mail size={32} />
          </div>

          <h2 className="font-display mb-6 text-4xl font-bold tracking-tight text-[--color-text-primary] sm:text-5xl">
            Let&apos;s build something together.
          </h2>

          <p className="mx-auto mb-12 max-w-xl text-xl leading-relaxed text-[--color-text-secondary]">
            I&apos;m currently open for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>

          <div className="flex w-full justify-center">
            <ContactForm />
          </div>
          <a
            className="mt-6 inline-flex min-h-10 items-center underline underline-offset-4"
            href={`mailto:${profile.email}`}
          >
            Email me directly
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
