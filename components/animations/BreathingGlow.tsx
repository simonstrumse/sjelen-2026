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
          "0 0 20px 5px rgba(255,255,255,0.3)",
          "0 0 40px 10px rgba(255,255,255,0.5)",
          "0 0 20px 5px rgba(255,255,255,0.3)"
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
