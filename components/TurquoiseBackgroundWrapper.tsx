"use client";

import dynamic from "next/dynamic";

// Load p5.js background only on client-side (no SSR)
const TurquoiseBackground = dynamic(
  () => import("@/components/TurquoiseBackground"),
  { ssr: false }
);

export default function TurquoiseBackgroundWrapper() {
  return <TurquoiseBackground />;
}
