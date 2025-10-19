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
          "#03d3b1",
          "#02c0a0",
          "#03d3b1"
        ]
      }}
      transition={{
        duration: 5,
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
