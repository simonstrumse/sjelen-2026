"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import CentralMandala from "@/components/animations/CentralMandala";

export default function V13CentralMandala() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col relative">
      <Header layout="balanced" showYear={true} />

      <CentralMandala />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12 relative z-10">
        <FormContainer inputVariant="rounded" buttonVariant="rounded" />
      </div>
    </div>
  );
}
