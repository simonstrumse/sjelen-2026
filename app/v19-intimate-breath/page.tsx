"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import BreathingGlow from "@/components/animations/BreathingGlow";

export default function V19IntimateBreath() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} className="mb-4" />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-8">
        <BreathingGlow className="w-full max-w-sm md:max-w-md">
          <FormContainer inputVariant="rounded" buttonVariant="rounded" className="space-y-8" />
        </BreathingGlow>
      </div>
    </div>
  );
}
