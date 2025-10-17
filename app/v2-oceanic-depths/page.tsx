"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import CentralMandala from "@/components/animations/CentralMandala";
import { motion } from "framer-motion";
import { oceanicGradient } from "@/lib/animation-configs";

export default function V2OceanicDepths() {
  return (
    <motion.div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #03d3b1 0%, #02b99a 50%, #03d3b1 100%)",
        backgroundSize: "200% 200%"
      }}
      animate={oceanicGradient.animate}
      transition={oceanicGradient.transition}
    >
      <Header layout="balanced" showYear={true} />

      <CentralMandala />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12 relative z-10">
        <FormContainer inputVariant="rounded" buttonVariant="pill" />
      </div>
    </motion.div>
  );
}
