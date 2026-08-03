"use client";

import { motion } from "motion/react";
import React from "react";

export function ClientMotionDiv({
  children,
  className,
  initial,
  animate,
  transition,
}: {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
