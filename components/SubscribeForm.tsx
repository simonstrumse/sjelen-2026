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
          className="w-full rounded-[14px] border border-white/0 bg-white/14 px-5 py-3 text-base font-light tracking-[0.08em] text-white placeholder:text-white/55 shadow-[inset_0_0_34px_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(255,255,255,0.32)] backdrop-blur-2xl outline-none transition focus:bg-white/18 focus:placeholder:text-white/35 focus:shadow-[inset_0_0_30px_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(255,255,255,0.4)]"
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
          className="w-full rounded-[14px] border border-white/0 bg-white/12 px-5 py-3 text-base font-light tracking-[0.08em] text-white placeholder:text-white/55 shadow-[inset_0_0_32px_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(255,255,255,0.28)] backdrop-blur-2xl outline-none transition focus:bg-white/17 focus:placeholder:text-white/32 focus:shadow-[inset_0_0_28px_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(255,255,255,0.36)]"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="stone-button relative mx-auto mt-2 w-full"
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
