"use client";

import { motion } from "framer-motion";

interface BreathingGlowAndShadowProps {
  children: React.ReactNode;
  className?: string;
}

export default function BreathingGlowAndShadow({ children, className = "" }: BreathingGlowAndShadowProps) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          "0 0 20px 5px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.15)",
          "0 0 40px 10px rgba(255,255,255,0.5), 0 8px 40px rgba(0,0,0,0.25)",
          "0 0 20px 5px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.15)"
        ]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
