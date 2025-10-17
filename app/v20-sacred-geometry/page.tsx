"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import BreathingGlow from "@/components/animations/BreathingGlow";

export default function V20SacredGeometry() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} />

      {/* Using golden ratio positioning: ~61.8% from top */}
      <div className="flex-1 flex items-start justify-center px-4 md:px-8" style={{ paddingTop: "38.2vh" }}>
        <BreathingGlow className="w-full max-w-md md:max-w-lg">
          <FormContainer inputVariant="rounded" buttonVariant="rounded" />
        </BreathingGlow>
      </div>
    </div>
  );
}
