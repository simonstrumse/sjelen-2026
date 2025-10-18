"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/delara-logo.png"
      alt="DELARA"
      width={244}
      height={74}
      priority
      className={`h-10 w-auto md:h-14 ${className}`}
    />
  );
}
