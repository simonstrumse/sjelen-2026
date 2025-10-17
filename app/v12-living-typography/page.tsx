"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";

export default function V12LivingTypography() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="balanced" showYear={true} breathingText={true} />

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-12">
        <FormContainer inputVariant="rounded" buttonVariant="rounded" />
      </div>
    </div>
  );
}
