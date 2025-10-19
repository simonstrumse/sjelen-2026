"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import CentralMandala from "@/components/animations/CentralMandala";
import { motion } from "framer-motion";

export default function V10EtherealPortal() {
  return (
    <motion.div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #03d3b1 0%, #02b99a 25%, #01a88b 50%, #02b99a 75%, #03d3b1 100%)",
        backgroundSize: "300% 300%"
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
      <CentralMandala />

      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12 relative z-10">
        <Header layout="centered" showYear={false} className="mb-12" />
        <FormContainer inputVariant="rounded" buttonVariant="pill" />
      </div>
    </motion.div>
  );
}
