"use client";

import { motion } from "framer-motion";

interface BreathingShadowProps {
  children: React.ReactNode;
  className?: string;
}

export default function BreathingShadow({ children, className = "" }: BreathingShadowProps) {
  return (
    <motion.div
      className={className}
      animate={{
        boxShadow: [
          "0 4px 20px rgba(0,0,0,0.15)",
          "0 8px 40px rgba(0,0,0,0.25)",
          "0 4px 20px rgba(0,0,0,0.15)"
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
