import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-b-2 border-[--color-divider] bg-[--color-surface] py-24 sm:py-32"
    >
      <Container size="md" className="mx-0 ml-0 px-8 sm:px-12 lg:px-16">
        <Reveal>
          <div className="mb-16">
            <SectionHeading
              label="About"
              title="Who I Am"
              subtitle="Get to know the person behind the pixels."
            />
          </div>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-[--color-text-secondary]">
            <p>
              I am a UI/UX Engineer and Software Engineering graduate with
              experience designing and developing
              <span className="px-1 text-[#6B191F] italic">
                healthcare, financial, property, and corporate
              </span>{" "}
              digital products. I specialize in translating requirements into
              user flows, wireframes, interactive prototypes, responsive
              interfaces, and reusable design systems.
            </p>
            <p>
              By combining{" "}
              <span className="px-1 text-[#6B191F] italic">
                user-centred design with frontend development
              </span>{" "}
              knowledge, I strive to create accessible, practical, and
              developer-ready experiences that bridge the gap between aesthetics
              and functionality.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
