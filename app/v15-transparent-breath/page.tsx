"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import { motion } from "framer-motion";
import { breathingOpacity } from "@/lib/animation-configs";

export default function V15TransparentBreath() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12">
        <motion.div
          className="w-full max-w-md md:max-w-lg"
          animate={breathingOpacity.animate}
          transition={breathingOpacity.transition}
        >
          <FormContainer inputVariant="rounded" buttonVariant="rounded" />
        </motion.div>
      </div>
    </div>
  );
}
