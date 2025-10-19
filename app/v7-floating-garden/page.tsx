"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";
import BreathingShadow from "@/components/animations/BreathingShadow";

export default function V7FloatingGarden() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} />

      <div className="flex-1 flex items-center justify-end px-4 md:px-20 py-12">
        <BreathingShadow className="w-full max-w-md">
          <FormContainer inputVariant="rounded" buttonVariant="pill" />
        </BreathingShadow>
      </div>
    </div>
  );
}
