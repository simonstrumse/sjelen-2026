"use client";

import { useState, FormEvent } from "react";
import Input from "./Input";
import Button from "./Button";

interface FormContainerProps {
  inputVariant?: "rounded" | "ghost" | "sharp" | "shadow";
  buttonVariant?: "rounded" | "pill" | "ghost" | "sharp";
  className?: string;
  children?: React.ReactNode;
}

export default function FormContainer({
  inputVariant = "rounded",
  buttonVariant = "rounded",
  className = "",
  children
}: FormContainerProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // TODO: Implement Mailchimp integration
      // For now, just show success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage("Takk for at du melder deg på!");
      setEmail("");
      setPhone("");
    } catch (error) {
      setMessage("Noe gikk galt. Prøv igjen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-md md:max-w-lg ${className}`}>
      {children}
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          label="EMAIL ADRESSE:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant={inputVariant}
        />

        <Input
          type="tel"
          name="phone"
          label="TELEFON NUMMER:"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          variant={inputVariant}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            variant={buttonVariant}
            className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
          >
            {isSubmitting ? "SENDER..." : "SUBSCRIBE"}
          </Button>
        </div>

        {message && (
          <p className="text-center text-white mt-6 text-sm md:text-base">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
