"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import BreathingGlow from "@/components/animations/BreathingGlow";

export default function V16PoeticStillness() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="centered" showYear={true} />

      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12">
        <p className="text-white text-base md:text-lg mb-12 tracking-wide">Sjelen venter</p>
        <BreathingGlow className="w-full max-w-md md:max-w-lg">
          <FormContainer inputVariant="rounded" buttonVariant="rounded" />
        </BreathingGlow>
      </div>
    </div>
  );
}
