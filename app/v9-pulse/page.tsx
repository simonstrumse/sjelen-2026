"use client";

import Header from "@/components/shared/Header";
import FormContainer from "@/components/shared/FormContainer";

export default function V9Pulse() {
  return (
    <div className="min-h-screen bg-[#03d3b1] flex flex-col">
      <Header layout="centered" showYear={true} breathingText={true} />

      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-12">
        <p className="text-white text-base md:text-lg mb-8 tracking-wide">Sjelen 2026</p>
        <FormContainer inputVariant="rounded" buttonVariant="rounded" />
      </div>
    </div>
  );
}
