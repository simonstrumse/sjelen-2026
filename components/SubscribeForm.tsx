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
    }, 1200);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2 text-left">
        <label
          htmlFor="email"
          className="text-sm font-semibold tracking-[0.2em] text-white/80 uppercase"
        >
          E-postadresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-white/20 bg-white/90 px-5 py-4 text-base text-[#0a4a40] shadow-[0_20px_60px_rgba(0,0,0,0.12)] outline-none transition focus:bg-white focus:shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
        />
      </div>

      <div className="space-y-2 text-left">
        <label
          htmlFor="phone"
          className="text-sm font-semibold tracking-[0.2em] text-white/80 uppercase"
        >
          Telefon (valgfritt)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-2xl border border-white/10 bg-white/20 px-5 py-4 text-base text-white placeholder:text-white/60 outline-none transition focus:border-white/30 focus:bg-white/30"
          placeholder="+47"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-white px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.3em] text-[#039f8d] transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sender..." : "Meld meg på"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm font-medium text-white">
          {message}
        </p>
      )}
    </form>
  );
}
