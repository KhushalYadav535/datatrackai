"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function VisionQuote() {
  return (
    <section className="py-32 lg:py-48 relative overflow-hidden bg-foreground text-background">
      {/* Dark mode cinematic background */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <Quote className="w-16 h-16 mx-auto mb-12 opacity-20" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.1] tracking-tight mb-12"
        >
          "The future of enterprise software is not just automated; it is <span className="opacity-50">agentic and intelligent</span>."
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="font-mono text-sm tracking-widest uppercase opacity-70">Ashish Kolarkar</p>
          <p className="text-sm opacity-50 mt-2">CEO, Datatrack</p>
        </motion.div>
      </div>
    </section>
  );
}
