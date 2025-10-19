"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import BreathingGlow from "@/components/animations/BreathingGlow";

export default function V8HorizonLine() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12">
        <BreathingGlow className="w-full max-w-md md:max-w-lg">
          <FormContainer inputVariant="sharp" buttonVariant="sharp" />
          <p className="text-white text-sm text-center mt-8">Vær med når Sjelen kommer i 2026</p>
        </BreathingGlow>
      </div>
    </div>
  );
}
