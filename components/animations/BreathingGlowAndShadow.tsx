"use client";

import { motion } from "framer-motion";
import { breathingGlowAndShadow } from "@/lib/animation-configs";

interface BreathingGlowAndShadowProps {
  children: React.ReactNode;
  className?: string;
}

export default function BreathingGlowAndShadow({ children, className = "" }: BreathingGlowAndShadowProps) {
  return (
    <motion.div
      className={className}
      animate={breathingGlowAndShadow.animate}
      transition={breathingGlowAndShadow.transition}
    >
      {children}
    </motion.div>
  );
}
