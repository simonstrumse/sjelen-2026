"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import { motion } from "framer-motion";
import { breathingBackground } from "@/lib/animation-configs";

export default function V6LuminousField() {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      animate={breathingBackground.animate}
      transition={breathingBackground.transition}
    >
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12">
        <p className="text-white text-base md:text-lg mb-12 tracking-wide">Ro for sjelen</p>
        <FormContainer inputVariant="rounded" buttonVariant="rounded" />
      </div>
    </motion.div>
  );
}
