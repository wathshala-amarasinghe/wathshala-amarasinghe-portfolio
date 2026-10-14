import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative border-b border-[--color-divider] py-24 sm:py-32"
    >
      <Container size="xl" className="px-8 sm:px-12 lg:px-16">
        <Reveal className="mb-16">
          <SectionHeading
            label="Testimonials"
            title="Tech Testimonials"
            subtitle="What colleagues and clients say about my work."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Reveal
              key={i}
              delay={0.1 * i}
              className="rounded-2xl border-[3px] border-[--color-divider] bg-[--color-surface] p-8"
            >
              <p className="mb-6 text-lg leading-relaxed text-[--color-text-primary] italic">
                &quot;Wathshala is an incredible UI/UX engineer who always
                bridges the gap between design and development effortlessly. A
                true asset to any team.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--color-raised] text-sm font-bold text-[--color-text-muted]">
                  J.D.
                </div>
                <div>
                  <p className="font-bold text-[--color-text-primary]">
                    John Doe
                  </p>
                  <p className="text-sm text-[--color-text-muted]">
                    Product Manager
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
