"use client";

import Logo from "./Logo";
import { motion } from "framer-motion";

interface HeaderProps {
  layout?: "balanced" | "centered";
  showYear?: boolean;
  breathingText?: boolean;
  className?: string;
}

export default function Header({
  layout = "balanced",
  showYear = true,
  breathingText = false,
  className = ""
}: HeaderProps) {
  const yearAnimation = breathingText ? {
    animate: {
      textShadow: [
        "0 0 10px rgba(255,255,255,0.3)",
        "0 0 20px rgba(255,255,255,0.6)",
        "0 0 10px rgba(255,255,255,0.3)"
      ]
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  if (layout === "centered") {
    return (
      <header className={`flex flex-col items-center pt-10 md:pt-16 ${className}`}>
        {breathingText ? (
          <motion.div {...yearAnimation}>
            <Logo />
          </motion.div>
        ) : (
          <Logo />
        )}
        {showYear && (
          breathingText ? (
            <motion.div
              className="text-white font-bold text-2xl md:text-3xl tracking-wider mt-4"
              {...yearAnimation}
            >
              2026
            </motion.div>
          ) : (
            <div className="text-white font-bold text-2xl md:text-3xl tracking-wider mt-4">
              2026
            </div>
          )
        )}
      </header>
    );
  }

  return (
    <header className={`flex justify-between items-start px-8 md:px-16 pt-8 md:pt-12 ${className}`}>
      {breathingText ? (
        <motion.div {...yearAnimation}>
          <Logo />
        </motion.div>
      ) : (
        <Logo />
      )}
      {showYear && (
        breathingText ? (
          <motion.div
            className="text-white font-bold text-2xl md:text-3xl tracking-wider"
            {...yearAnimation}
          >
            2026
          </motion.div>
        ) : (
          <div className="text-white font-bold text-2xl md:text-3xl tracking-wider">
            2026
          </div>
        )
      )}
    </header>
  );
}
