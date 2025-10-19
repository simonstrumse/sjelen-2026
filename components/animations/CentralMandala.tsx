"use client";

import { motion } from "framer-motion";

export default function CentralMandala() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white/50"
      animate={{
        boxShadow: [
          "0 0 30px 10px rgba(255,255,255,0.3)",
          "0 0 60px 20px rgba(255,255,255,0.6)",
          "0 0 30px 10px rgba(255,255,255,0.3)"
        ],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}
