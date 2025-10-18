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
      className="flex flex-col gap-6"
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
          className="w-full rounded-[32px] border border-white/0 bg-white/12 px-5 py-3 text-base font-light tracking-[0.08em] text-white placeholder:text-white/55 shadow-[inset_0_0_30px_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(255,255,255,0.25)] backdrop-blur-2xl outline-none transition focus:bg-white/18 focus:placeholder:text-white/35 focus:shadow-[inset_0_0_28px_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(255,255,255,0.35)]"
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
          className="w-full rounded-[32px] border border-white/0 bg-white/10 px-5 py-3 text-base font-light tracking-[0.08em] text-white placeholder:text-white/55 shadow-[inset_0_0_28px_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.22)] backdrop-blur-2xl outline-none transition focus:bg-white/16 focus:placeholder:text-white/30 focus:shadow-[inset_0_0_26px_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(255,255,255,0.32)]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative mx-auto mt-2 w-full rounded-[22px] border border-white/28 bg-white/18 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-[0_22px_55px_rgba(4,78,66,0.32),inset_0_2px_0_rgba(255,255,255,0.65),inset_0_-8px_20px_rgba(1,49,41,0.4)] transition hover:bg-white/24 hover:shadow-[0_24px_60px_rgba(4,78,66,0.38),inset_0_2px_0_rgba(255,255,255,0.7),inset_0_-8px_20px_rgba(1,49,41,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:cursor-not-allowed disabled:opacity-60"
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
