"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { Globe, Wifi, Server } from "lucide-react";

const nodes = [
  { city: "Bhopal (HQ)", ping: "6ms", status: "Primary Center", active: true },
  { city: "Mumbai (FinHub)", ping: "12ms", status: "Core Cloud", active: true },
  { city: "Delhi NCR", ping: "16ms", status: "DR Standby", active: true },
  { city: "London", ping: "68ms", status: "Global Edge", active: true },
  { city: "New York", ping: "78ms", status: "Global Edge", active: true },
];

export function GlobeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState(0);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.3,
      mapSamples: 18000,
      mapBrightness: 6.5,
      baseColor: [0.9, 0.9, 0.9],
      markerColor: [0.2, 0.8, 0.6],
      glowColor: [0.8, 0.8, 0.8],
      markers: [
        { location: [23.2599, 77.4126], size: 0.12 }, // Bhopal, India (HQ)
        { location: [19.0760, 72.8777], size: 0.08 }, // Mumbai
        { location: [28.6139, 77.2090], size: 0.07 }, // Delhi
        { location: [51.5074, -0.1278], size: 0.06 }, // London
        { location: [40.7128, -74.0060], size: 0.06 }, // NY
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
        { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
      ]
    });

    let currentReq: number;
    const animate = () => {
      phi += 0.004;
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
    <section className="relative py-28 lg:py-36 overflow-hidden bg-foreground text-background">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-background/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-background/20 bg-background/5 text-xs font-mono uppercase tracking-widest text-background/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Distributed Infrastructure</span>
            <span className="text-background/40">|</span>
            <span>Global Reach</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Serving enterprises
            <br />
            <span className="font-serif-italic font-normal text-background/50">
              with zero latency compromises.
            </span>
          </h2>

          <p className="text-lg text-background/70 leading-relaxed">
            From our central engineering headquarters in Bhopal to financial institutions across India and multinational clients abroad — built for 99.99% multi-region uptime.
          </p>
        </motion.div>

        {/* 3D Globe with Ambient Container */}
        <div className="relative w-full max-w-[650px] lg:max-w-[750px] aspect-square mx-auto flex items-center justify-center">
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", maxWidth: "100%", aspectRatio: 1 }}
          />

          {/* Floating HQ Badge */}
          <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full border border-background/20 bg-background/10 backdrop-blur-md text-xs font-mono text-background/90 shadow-xl">
            <Server className="w-3.5 h-3.5 text-emerald-400" />
            <span>Central Node: Bhopal, MP</span>
          </div>

          {/* Floating SLA Badge */}
          <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full border border-background/20 bg-background/10 backdrop-blur-md text-xs font-mono text-background/90 shadow-xl">
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            <span>Real-time Ping: &lt; 20ms avg</span>
          </div>
        </div>

        {/* Live Nodes Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full max-w-4xl mt-12">
          {nodes.map((node, i) => (
            <div
              key={node.city}
              onClick={() => setSelectedNode(i)}
              className={`p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer text-center ${
                selectedNode === i
                  ? "border-background/40 bg-background/15"
                  : "border-background/10 bg-background/[0.04] hover:bg-background/[0.08]"
              }`}
            >
              <div className="text-xs font-medium text-background truncate">{node.city}</div>
              <div className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {node.ping}
              </div>
              <div className="text-[10px] font-mono text-background/50 mt-0.5">{node.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
