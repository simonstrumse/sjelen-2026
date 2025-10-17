"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import BreathingGlowAndShadow from "@/components/animations/BreathingGlowAndShadow";

export default function V3SacredPortal() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="centered" showYear={true} />

      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12">
        <p className="text-white text-base md:text-lg mb-12 tracking-wide">Sjelen venter</p>
        <BreathingGlowAndShadow className="w-full max-w-md md:max-w-lg">
          <FormContainer inputVariant="shadow" buttonVariant="pill" />
        </BreathingGlowAndShadow>
      </div>
    </div>
  );
}
