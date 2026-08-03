"use client";

import type { ReactNode } from "react";

import { registerGSAP } from "@/lib/gsap";

registerGSAP();

export default function GSAPProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
