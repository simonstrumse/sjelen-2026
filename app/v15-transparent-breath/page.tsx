"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import { motion } from "framer-motion";

export default function V15TransparentBreath() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12">
        <motion.div
          className="w-full max-w-md md:max-w-lg"
          animate={{
            opacity: [0.85, 1, 0.85]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FormContainer inputVariant="rounded" buttonVariant="rounded" />
        </motion.div>
      </div>
    </div>
  );
}
