"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import { motion } from "framer-motion";
import { breathingOpacity } from "@/lib/animation-configs";

export default function V5WhisperedSecret() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex items-center px-4 md:px-20 py-12" style={{ paddingLeft: "10%", alignItems: "center" }}>
        <motion.div
          className="w-full max-w-md"
          animate={breathingOpacity.animate}
          transition={breathingOpacity.transition}
        >
          <FormContainer inputVariant="ghost" buttonVariant="ghost" />
          <p className="text-white text-sm text-center mt-8">noe nytt kommer</p>
        </motion.div>
      </div>
    </div>
  );
}
