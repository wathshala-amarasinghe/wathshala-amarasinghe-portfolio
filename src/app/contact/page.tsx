import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "@/components/sections/contact/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Wathshala Amarasinghe to discuss UI/UX design and development opportunities in Sri Lanka and worldwide.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  );
}
