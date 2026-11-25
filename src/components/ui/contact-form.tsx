"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT_LIMITS } from "@/lib/contact";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const submissionInFlight = useRef(false);
  const [fields, setFields] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submissionInFlight.current) return;
    submissionInFlight.current = true;
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
        signal: AbortSignal.timeout(45_000),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || data?.success !== true) {
        setStatus("error");
        setErrorMessage(
          typeof data?.error === "string"
            ? data.error
            : "Delivery could not be confirmed. Please try again later."
        );
        return;
      }

      setStatus("success");
      setFields({ user_name: "", user_email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage(
        "Delivery could not be confirmed. Please try again later."
      );
    } finally {
      submissionInFlight.current = false;
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border-2 border-[#8d7973] bg-white/5 px-4 py-3 " +
    "text-[--color-text-primary] placeholder:text-white/60 " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)] transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="flex w-full max-w-lg flex-col gap-5 text-left"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="user_name"
          className="text-sm font-semibold text-[--color-text-secondary]"
        >
          Your Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
          maxLength={CONTACT_LIMITS.name}
          readOnly={isSubmitting}
          autoComplete="name"
          value={fields.user_name}
          onChange={handleChange}
          placeholder="John Doe"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="user_email"
          className="text-sm font-semibold text-[--color-text-secondary]"
        >
          Your Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          required
          maxLength={CONTACT_LIMITS.email}
          readOnly={isSubmitting}
          autoComplete="email"
          value={fields.user_email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[--color-text-secondary]"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          maxLength={CONTACT_LIMITS.message}
          readOnly={isSubmitting}
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder="Hi Wathshala, I'd like to talk about..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="group mt-2 w-full justify-center disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send
              size={18}
              className="transition-transform duration-[--duration-fast] group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </>
        )}
      </Button>

      <div className="-mt-5">
        <div role="status">
          {status === "success" && (
            <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-400">
              <CheckCircle2 size={16} />
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}
        </div>

        <div role="alert">
          {status === "error" && (
            <div className="mt-5 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
