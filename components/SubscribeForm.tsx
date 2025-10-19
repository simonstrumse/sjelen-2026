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
          className="stone-engraved w-full"
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
          className="stone-engraved w-full"
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
