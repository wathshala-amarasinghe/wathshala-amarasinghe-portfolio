import { ArrowUpRight, Mail } from "lucide-react";

import GSAPReveal from "@/components/animations/GSAPReveal";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import {
  personalInformation,
  projectCategories,
  services,
  socialLinks,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section
        aria-labelledby="home-heading"
        className="background-grid flex min-h-[calc(82svh-var(--header-height))] items-center py-20"
        id="home"
      >
        <Container>
          <GSAPReveal className="max-w-4xl">
            <Tag>UI/UX and product design portfolio</Tag>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {personalInformation.title}
            </p>
            <h1
              className="mt-4 font-heading text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-primary sm:text-6xl lg:text-7xl"
              id="home-heading"
            >
              I&apos;m {personalInformation.name}. I turn complex ideas into
              clear digital experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">
              {personalInformation.introduction}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/#projects">
                Explore projects <ArrowUpRight aria-hidden size={18} />
              </Button>
              <Button
                href={`mailto:${personalInformation.email}`}
                variant="secondary"
              >
                <Mail aria-hidden size={18} /> Get in touch
              </Button>
            </div>
          </GSAPReveal>
        </Container>
      </section>

      <section
        aria-labelledby="about-heading"
        className="section-space border-y border-border bg-secondary-background"
        id="about"
      >
        <Container>
          <SectionHeading
            description="Wathshala works across research, wireframing, prototyping, design systems, and frontend collaboration to shape clear and usable product experiences."
            eyebrow="About"
            headingId="about-heading"
            title="Design thinking with implementation in view."
          />
        </Container>
      </section>

      <section
        aria-labelledby="services-heading"
        className="section-space"
        id="services"
      >
        <Container>
          <SectionHeading
            description="A focused set of capabilities supporting product teams from early thinking through delivery."
            eyebrow="Services"
            headingId="services-heading"
            title="From product questions to coherent interfaces."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                className="rounded-card border border-border bg-card p-6"
                key={service.title}
              >
                <h3 className="font-heading text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-secondary">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="section-space border-y border-border bg-secondary-background"
        id="experience"
      >
        <Container>
          <SectionHeading
            description="Professional work focused on UI/UX design and associate UI/UX development, with experience details reserved for verified CV content."
            eyebrow="Experience"
            headingId="experience-heading"
            title="Product design and frontend collaboration."
          />
        </Container>
      </section>

      <section
        aria-labelledby="projects-heading"
        className="section-space"
        id="projects"
      >
        <Container>
          <SectionHeading
            description="Portfolio work spans real healthcare, FinTech, and corporate product contexts. Detailed case studies will use only verified source material."
            eyebrow="Projects"
            headingId="projects-heading"
            title="Work grounded in real product contexts."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <Tag key={category.id}>{category.label}</Tag>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="contact-heading"
        className="section-space border-t border-border bg-secondary-background"
        id="contact"
      >
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            description="For UI/UX, product-design, or frontend collaboration opportunities, contact Wathshala directly by email."
            eyebrow="Contact"
            headingId="contact-heading"
            title="Let’s discuss thoughtful digital products."
          />
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${personalInformation.email}`}>
              <Mail aria-hidden size={18} /> Email Wathshala
            </Button>
            {socialLinks
              .filter((link) => link.href.startsWith("https://"))
              .map((link) => (
                <Button
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="text"
                >
                  {link.label} <ArrowUpRight aria-hidden size={16} />
                </Button>
              ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
