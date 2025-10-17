"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import { motion } from "framer-motion";
import { breathingBackground } from "@/lib/animation-configs";

export default function V11BreathingSpace() {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      animate={breathingBackground.animate}
      transition={breathingBackground.transition}
    >
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12">
        <FormContainer inputVariant="rounded" buttonVariant="rounded" />
      </div>
    </motion.div>
  );
}
