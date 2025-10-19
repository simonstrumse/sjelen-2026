"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import { motion } from "framer-motion";

export default function V6LuminousField() {
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

      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12">
        <p className="text-white text-base md:text-lg mb-12 tracking-wide">Ro for sjelen</p>
        <FormContainer inputVariant="rounded" buttonVariant="rounded" />
      </div>
    </motion.div>
  );
}
