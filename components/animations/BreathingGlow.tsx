"use client";

import { motion } from "framer-motion";

interface BreathingGlowProps {
  children: React.ReactNode;
  className?: string;
}

export default function BreathingGlow({ children, className = "" }: BreathingGlowProps) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          "0 0 30px 10px rgba(255,255,255,0.4)",
          "0 0 60px 20px rgba(255,255,255,0.7)",
          "0 0 30px 10px rgba(255,255,255,0.4)"
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
