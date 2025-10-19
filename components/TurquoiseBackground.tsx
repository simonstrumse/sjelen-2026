"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

export default function TurquoiseBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      // Simplified parameters - gentle waves only
      const params = {
        seed: 12345,
        waveSpeed: 0.3,
        waveScale: 0.0015,
        colorVariation: 0.12,
        cyanColor: { r: 95, g: 255, b: 245 },
        baseColor: { r: 3, g: 211, b: 177 },
        tealColor: { r: 2, g: 157, b: 134 },
      };

      let startTime: number;

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style("display", "block");
        canvas.style("position", "fixed");
        canvas.style("top", "0");
        canvas.style("left", "0");
        canvas.style("z-index", "0");
        canvas.style("width", "100vw");
        canvas.style("height", "100vh");

        p.colorMode(p.RGB, 255);
        p.noStroke();
        p.noSmooth(); // Prevent anti-aliasing artifacts

        // Initialize
        p.randomSeed(params.seed);
        p.noiseSeed(params.seed);

        startTime = p.millis();
      };

      p.draw = () => {
        const time = p.millis() - startTime;
        const { cyanColor, baseColor, tealColor } = params;

        p.noStroke();
        p.rectMode(p.CORNER);

        const resolution = 6; // Smaller blocks for smoother result

        // Ensure we cover the full canvas including edges - add extra column/row for safety
        const cols = Math.ceil(p.width / resolution) + 1;
        const rows = Math.ceil(p.height / resolution) + 1;

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = col * resolution;
            const y = row * resolution;

            // Sample from center of block
            const sampleX = x + resolution / 2;
            const sampleY = y + resolution / 2;

            // Simple wave pattern using layered Perlin noise
            const timeOffset = time * 0.0001 * params.waveSpeed;

            // Two octaves of noise for gentle undulation
            const wave1 = p.noise(
              sampleX * params.waveScale,
              sampleY * params.waveScale,
              timeOffset
            );
            const wave2 = p.noise(
              sampleX * params.waveScale * 2,
              sampleY * params.waveScale * 2,
              timeOffset * 1.5
            ) * 0.5;

            // Combine waves (centered around 0.5, variation controlled)
            const waveValue = (wave1 + wave2) / 1.5;

            // Map to color variation range (subtle)
            const variation = p.map(waveValue, 0, 1, -params.colorVariation, params.colorVariation);

            // Interpolate colors based on wave value
            // Center color is baseColor, waves shift toward cyan or teal
            let r: number, g: number, b: number;
            if (variation > 0) {
              // Shift toward cyan
              const t = variation / params.colorVariation;
              r = p.lerp(baseColor.r, cyanColor.r, t * 0.6);
              g = p.lerp(baseColor.g, cyanColor.g, t * 0.6);
              b = p.lerp(baseColor.b, cyanColor.b, t * 0.6);
            } else {
              // Shift toward teal
              const t = -variation / params.colorVariation;
              r = p.lerp(baseColor.r, tealColor.r, t * 0.4);
              g = p.lerp(baseColor.g, tealColor.g, t * 0.4);
              b = p.lerp(baseColor.b, tealColor.b, t * 0.4);
            }

            // Draw rectangle - add overlap to prevent any gaps
            p.fill(r, g, b);
            p.rect(x, y, resolution + 1, resolution + 1);
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    // Create p5 instance
    p5InstanceRef.current = new p5(sketch, containerRef.current);

    // Cleanup
    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}
