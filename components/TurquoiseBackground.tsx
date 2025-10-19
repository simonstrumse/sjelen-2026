"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

interface LightPool {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
  noiseOffsetX: number;
  noiseOffsetY: number;
}

export default function TurquoiseBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      // Parameters
      const params = {
        seed: 12345,
        breathDuration: 42,
        poolCount: 4,
        noiseOctaves: 4,
        colorTemp: 0.7,
        intensity: 0.8,
        driftSpeed: 0.5,
        cyanColor: { r: 95, g: 255, b: 245 },
        baseColor: { r: 3, g: 211, b: 177 },
        tealColor: { r: 2, g: 157, b: 134 },
      };

      let lightPools: LightPool[] = [];
      let startTime: number;

      // Light Pool class methods
      const updatePool = (pool: LightPool, time: number) => {
        const noiseX = p.noise(pool.noiseOffsetX + time * pool.speed * 0.0003) - 0.5;
        const noiseY = p.noise(pool.noiseOffsetY + time * pool.speed * 0.0003) - 0.5;

        pool.x = pool.baseX + noiseX * 150;
        pool.y = pool.baseY + noiseY * 150;
      };

      const getPoolIntensity = (
        pool: LightPool,
        px: number,
        py: number,
        time: number
      ) => {
        const d = p.dist(px, py, pool.x, pool.y);

        // Breathing pulse using asymmetric timing
        const breathCycle = params.breathDuration * 1000;
        const t = ((time + pool.phase * breathCycle) % breathCycle) / breathCycle;
        let breath: number;
        if (t < 0.38) {
          breath = p.map(t, 0, 0.38, 0.6, 1.0);
        } else if (t < 0.72) {
          breath = p.map(t, 0.38, 0.72, 1.0, 0.5);
        } else {
          breath = p.map(t, 0.72, 1.0, 0.5, 0.6);
        }

        // Gaussian falloff
        const intensity = breath * Math.exp(-Math.pow(d / pool.size, 2) * 2);
        return intensity;
      };

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style("display", "block");
        canvas.style("position", "fixed");
        canvas.style("top", "0");
        canvas.style("left", "0");
        canvas.style("z-index", "0");

        p.colorMode(p.RGB, 255);
        p.noStroke();

        // Initialize
        p.randomSeed(params.seed);
        p.noiseSeed(params.seed);

        startTime = p.millis();
        lightPools = [];

        // Create light pools
        for (let i = 0; i < params.poolCount; i++) {
          const angle = (i / params.poolCount) * p.TWO_PI + p.random(-0.3, 0.3);
          const radius = p.width * (0.2 + p.random(0.15));
          const x = p.width / 2 + p.cos(angle) * radius;
          const y = p.height / 2 + p.sin(angle) * radius;
          const size = p.random(250, 450);
          const phase = p.random(1.0);
          const speed = params.driftSpeed * p.random(0.8, 1.2);

          lightPools.push({
            baseX: x,
            baseY: y,
            x,
            y,
            size,
            phase,
            speed,
            noiseOffsetX: p.random(1000),
            noiseOffsetY: p.random(1000),
          });
        }
      };

      p.draw = () => {
        const time = p.millis() - startTime;

        // Update light pools
        for (const pool of lightPools) {
          updatePool(pool, time);
        }

        const { cyanColor, baseColor, tealColor } = params;

        // Render using rectangles instead of pixels for smoother result
        p.noStroke();

        const resolution = 6; // Block size for performance
        for (let y = 0; y < p.height; y += resolution) {
          for (let x = 0; x < p.width; x += resolution) {
            // Sample from center of block for smoother transitions
            const sampleX = x + resolution / 2;
            const sampleY = y + resolution / 2;

            // Accumulate light from all pools
            let totalIntensity = 0;
            for (const pool of lightPools) {
              totalIntensity += getPoolIntensity(pool, sampleX, sampleY, time);
            }

            // Add layered Perlin noise
            let noiseVal = 0;
            for (let octave = 0; octave < params.noiseOctaves; octave++) {
              const freq = Math.pow(2, octave) * 0.002;
              const amp = Math.pow(0.5, octave);
              noiseVal +=
                p.noise(sampleX * freq, sampleY * freq, time * 0.0001 * params.driftSpeed) *
                amp;
            }

            totalIntensity =
              totalIntensity * params.intensity + noiseVal * 0.15;
            totalIntensity = p.constrain(totalIntensity, 0, 1);

            // Color temperature interpolation
            let r: number, g: number, b: number;
            if (totalIntensity > 0.6) {
              let t = p.map(totalIntensity, 0.6, 1.0, 0, 1);
              t = Math.pow(t, params.colorTemp);
              r = p.lerp(baseColor.r, cyanColor.r, t);
              g = p.lerp(baseColor.g, cyanColor.g, t);
              b = p.lerp(baseColor.b, cyanColor.b, t);
            } else {
              let t = p.map(totalIntensity, 0, 0.6, 0, 1);
              t = Math.pow(t, 1.0 / params.colorTemp);
              r = p.lerp(tealColor.r, baseColor.r, t);
              g = p.lerp(tealColor.g, baseColor.g, t);
              b = p.lerp(tealColor.b, baseColor.b, t);
            }

            // Draw rectangle (no gaps, smooth transitions)
            p.fill(r, g, b);
            p.rect(x, y, resolution, resolution);
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
