"use client";

interface InputProps {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "rounded" | "ghost" | "sharp" | "shadow";
  required?: boolean;
}

export default function Input({
  type,
  name,
  label,
  value,
  onChange,
  variant = "rounded",
  required = true
}: InputProps) {
  const baseStyles = "w-full px-4 py-3 md:px-6 md:py-4 text-base md:text-lg focus:outline-none transition-all";

  const variantStyles = {
    rounded: "bg-white rounded-lg",
    ghost: "bg-transparent border-0 border-b-2 border-white placeholder:text-white/60",
    sharp: "bg-white rounded-none",
    shadow: "bg-white rounded-lg shadow-md hover:shadow-lg"
  };

  return (
    <div className="mb-12 md:mb-16">
      <label
        htmlFor={name}
        className="block text-white text-xs md:text-sm font-bold tracking-wider mb-3 uppercase"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseStyles} ${variantStyles[variant]}`}
      />
    </div>
  );
}
