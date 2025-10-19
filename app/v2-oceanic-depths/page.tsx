"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import CentralMandala from "@/components/animations/CentralMandala";
import { motion } from "framer-motion";

export default function V2OceanicDepths() {
  return (
    <motion.div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #03d3b1 0%, #02b99a 50%, #03d3b1 100%)",
        backgroundSize: "200% 200%"
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <Header layout="balanced" showYear={true} />

      <CentralMandala />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12 relative z-10">
        <FormContainer inputVariant="rounded" buttonVariant="pill" />
      </div>
    </motion.div>
  );
}
