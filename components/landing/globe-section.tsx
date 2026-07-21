"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";

export function GlobeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    // Cobe globe v2 API
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 1, // Dark mode globe
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1], // White globe lines
      markerColor: [0.1, 0.5, 1], // Blue markers
      glowColor: [1, 1, 1], // White glow
      markers: [
        { location: [40.7128, -74.0060], size: 0.05 }, // NY
        { location: [51.5074, -0.1278], size: 0.05 }, // London
        { location: [23.2599, 77.4126], size: 0.1 }, // Bhopal, MP (India)
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
      ]
    });

    let currentReq: number;
    const animate = () => {
      phi += 0.005;
      globe.update({ phi });
      currentReq = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(currentReq);
      globe.destroy();
    };
  }, []);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 justify-center">
            <span className="w-8 h-px bg-background/30" />
            Global Reach
            <span className="w-8 h-px bg-background/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Serving enterprises globally.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-70">
            From our headquarters in India to clients across the world, our infrastructure scales anywhere you need it.
          </p>
        </motion.div>

        <div className="relative w-full max-w-[800px] aspect-square mx-auto flex items-center justify-center">
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", maxWidth: "100%", aspectRatio: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
