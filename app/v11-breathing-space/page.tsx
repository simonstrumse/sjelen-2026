"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import { motion } from "framer-motion";

export default function V11BreathingSpace() {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      animate={{
        backgroundColor: [
          "rgba(3, 211, 177, 0.95)",
          "rgba(3, 211, 177, 1)",
          "rgba(3, 211, 177, 0.95)"
        ]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12">
        <FormContainer inputVariant="rounded" buttonVariant="rounded" />
      </div>
    </motion.div>
  );
}
