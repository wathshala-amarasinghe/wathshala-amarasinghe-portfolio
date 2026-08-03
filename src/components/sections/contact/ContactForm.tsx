"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    try {
      // Replace with your Formspree ID or other endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        required
        placeholder="NAME"
        className="w-full bg-[#151515] px-4 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-gold transition-colors placeholder:text-foreground/30 text-xs tracking-widest uppercase"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="EMAIL"
        className="w-full bg-[#151515] px-4 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-gold transition-colors placeholder:text-foreground/30 text-xs tracking-widest uppercase"
      />
      <textarea
        rows={5}
        name="message"
        required
        placeholder="MESSAGE"
        className="w-full bg-[#151515] px-4 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-gold transition-colors placeholder:text-foreground/30 resize-none text-xs tracking-widest uppercase"
      />

      {status === "error" && (
        <p className="text-red-500 text-xs text-center tracking-widest">
          Failed to send message. Please try again.
        </p>
      )}
      
      {status === "success" && (
        <p className="text-gold text-xs text-center tracking-widest">
          Message sent successfully! I'll be in touch soon.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className="w-full uppercase tracking-widest text-xs h-12 text-black bg-gold hover:bg-gold-light mt-2 rounded-sm disabled:opacity-50"
      >
        {status === "submitting" ? "SENDING..." : status === "success" ? "SENT" : "SEND MESSAGE"}
      </Button>
    </form>
  );
}
