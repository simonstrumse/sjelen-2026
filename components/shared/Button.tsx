"use client";

interface ButtonProps {
  type?: "button" | "submit";
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "rounded" | "pill" | "ghost" | "sharp";
  className?: string;
}

export default function Button({
  type = "submit",
  children,
  onClick,
  variant = "rounded",
  className = ""
}: ButtonProps) {
  const baseStyles = "px-8 md:px-12 py-3 md:py-4 text-sm md:text-base font-bold tracking-widest uppercase transition-all cursor-pointer";

  const variantStyles = {
    rounded: "bg-white text-[#03d3b1] rounded-lg hover:opacity-90",
    pill: "bg-white text-[#03d3b1] rounded-full hover:opacity-90",
    ghost: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#03d3b1]",
    sharp: "bg-white text-[#03d3b1] rounded-none hover:opacity-90"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
