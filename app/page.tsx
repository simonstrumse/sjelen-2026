"use client";

import Link from "next/link";
import { VARIANTS } from "@/lib/constants";

export default function Home() {
  const diverseConcepts = VARIANTS.slice(0, 10);
  const meditativeVariations = VARIANTS.slice(10, 20);

  // Favorites picked by Amanda
  const favorites = VARIANTS.filter(v =>
    ['v2', 'v5', 'v10', 'v15'].includes(v.id)
  );

  return (
    <div className="min-h-screen bg-[#03d3b1] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            SJELEN 2026
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            20 Design Concepts for Amanda Delara
          </p>
        </header>

        {/* Favorites Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              ⭐ Amanda's Favorites
            </h2>
            <span className="text-white/60 text-sm">(Selected picks)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((variant) => (
              <Link
                key={variant.id}
                href={variant.path}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6 hover:bg-white/30 transition-all hover:scale-105 border-2 border-white/40 shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{variant.name}</h3>
                  <span className="text-white/80 text-sm font-bold">{variant.id}</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed font-medium">
                  {variant.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Diverse Concepts Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">
            Diverse Concepts (1-10)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diverseConcepts.map((variant) => (
              <Link
                key={variant.id}
                href={variant.path}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{variant.name}</h3>
                  <span className="text-white/60 text-sm">{variant.id}</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {variant.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Meditative Variations Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide">
            Meditative Variations (11-20)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meditativeVariations.map((variant) => (
              <Link
                key={variant.id}
                href={variant.path}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{variant.name}</h3>
                  <span className="text-white/60 text-sm">{variant.id}</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  {variant.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-white/60 text-sm">
          <p>Click any variant to view the full design</p>
          <p className="mt-2">Built with Next.js 14, TypeScript, Tailwind CSS & Framer Motion</p>
        </footer>
      </div>
    </div>
  );
}
