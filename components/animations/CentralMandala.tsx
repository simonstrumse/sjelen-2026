"use client";

import { motion } from "framer-motion";

export default function CentralMandala() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white/30"
      animate={{
        boxShadow: [
          "0 0 20px 5px rgba(255,255,255,0.2)",
          "0 0 40px 10px rgba(255,255,255,0.4)",
          "0 0 20px 5px rgba(255,255,255,0.2)"
        ]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}
