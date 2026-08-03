"use client";

import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is the typical turnaround time for a website project?",
    answer:
      "The timeline for a website project can vary depending on the complexity of the project and the specific requirements of the client. However, we work closely with our clients to establish a timeline that works for everyone and strive to deliver projects in a timely and efficient manner.",
  },
  {
    question:
      "Can you help with website maintenance and updates after the project is completed?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and fully functional.",
  },
  {
    question:
      "How do you ensure that my website will be optimized for search engines?",
    answer:
      "We build all our websites with SEO best practices in mind from the ground up, including semantic HTML, fast loading speeds, and proper metadata structure.",
  },
  {
    question: "What is your process for website design and development?",
    answer:
      "Our process begins with a discovery phase, followed by wireframing, high-fidelity design, development, testing, and finally launch. We ensure you are involved at every milestone.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default like the image

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-24 mb-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 md:gap-32">
        {/* Left side */}
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] mb-4">
              FAQ
            </p>
            <h2 className="text-4xl font-serif text-foreground font-light leading-tight">
              Common <br />
              <span className="italic text-gold">Questions</span>
            </h2>
          </motion.div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-2/3 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111] border border-white/5 p-6 md:p-8 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-foreground/90 font-light pr-8">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-foreground/50">
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-foreground/50 font-light text-sm leading-relaxed pt-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
