"use client";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  // Using text placeholder since we don't have the actual logo file yet
  // TODO: Replace with actual Delara logo image
  return (
    <div className={`text-white font-bold text-2xl md:text-3xl tracking-wider ${className}`}>
      DELARA
    </div>
  );
}
