"use client";

import { FormEvent, useRef, useState } from "react";

export default function SubscribeForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setMessage("Takk for at du melder deg på.");
      formRef.current?.reset();
    }, 900);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="sr-only">
          E-postadresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="E-postadresse"
          className="w-full rounded-3xl border border-white/25 bg-white/25 px-5 py-3 text-base text-[#074b3f] shadow-[0_30px_90px_rgba(6,56,47,0.35)] backdrop-blur-xl outline-none transition focus:border-white/70 focus:bg-white/70"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="sr-only">
          Telefonnummer
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Telefonnummer"
          className="w-full rounded-3xl border border-white/20 bg-white/15 px-5 py-3 text-base text-white placeholder:text-white/65 shadow-[0_22px_70px_rgba(3,65,55,0.32)] backdrop-blur-xl outline-none transition focus:border-white/60 focus:bg-white/35"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mx-auto w-full rounded-3xl bg-white px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.32em] text-[#039f8d] shadow-[0_18px_50px_rgba(4,78,66,0.35)] transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sender..." : "Meld meg på"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm font-medium text-white/85">
          {message}
        </p>
      )}
    </form>
  );
}
