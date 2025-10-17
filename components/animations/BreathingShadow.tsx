"use client";

import { motion } from "framer-motion";
import { breathingShadow } from "@/lib/animation-configs";

interface BreathingShadowProps {
  children: React.ReactNode;
  className?: string;
}

export default function BreathingShadow({ children, className = "" }: BreathingShadowProps) {
  return (
    <motion.div
      className={className}
      animate={breathingShadow.animate}
      transition={breathingShadow.transition}
    >
      {children}
    </motion.div>
  );
}
