"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function CurrentTime({ className }: { className?: string }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!date) return null;

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-0.5 rounded-xl px-3 py-2",
        "border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl",
        "text-center whitespace-nowrap select-none",
        className
      )}
    >
      <span className="text-[9px] font-semibold tracking-wider text-white/40 uppercase">
        {date}
      </span>
      <span className="font-display text-base leading-none font-bold tracking-tight text-[#E8D4C3]">
        {time}
      </span>
    </div>
  );
}
