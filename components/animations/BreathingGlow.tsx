"use client";

import { motion } from "framer-motion";
import { breathingGlow } from "@/lib/animation-configs";

interface BreathingGlowProps {
  children: React.ReactNode;
  className?: string;
}

export default function BreathingGlow({ children, className = "" }: BreathingGlowProps) {
  return (
    <motion.div
      className={className}
      animate={breathingGlow.animate}
      transition={breathingGlow.transition}
    >
      {children}
    </motion.div>
  );
}
