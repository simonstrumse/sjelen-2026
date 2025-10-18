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
      className="space-y-5"
    >
      <div className="space-y-1.5 text-left">
        <label
          htmlFor="email"
          className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase"
        >
          E-postadresse
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-white/20 bg-white/85 px-4 py-3 text-base text-[#0a4a40] outline-none transition focus:border-white/60 focus:bg-white"
        />
      </div>

      <div className="space-y-1.5 text-left">
        <label
          htmlFor="phone"
          className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase"
        >
          Telefon (valgfritt)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:bg-white/20"
          placeholder="+47"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-white px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.28em] text-[#039f8d] transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60 disabled:cursor-not-allowed disabled:opacity-60"
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
