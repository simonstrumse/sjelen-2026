"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import BreathingGlowAndShadow from "@/components/animations/BreathingGlowAndShadow";

export default function V18LevitatingForm() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12">
        <BreathingGlowAndShadow className="w-full max-w-md md:max-w-lg">
          <FormContainer inputVariant="shadow" buttonVariant="pill" />
        </BreathingGlowAndShadow>
      </div>
    </div>
  );
}
