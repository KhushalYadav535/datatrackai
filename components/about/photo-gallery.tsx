"use client";

import { motion } from "framer-motion";

export function PhotoGallery() {
  return (
    <section className="py-24 lg:py-32 border-t border-foreground/10 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 justify-center">
            <span className="w-8 h-px bg-foreground/30" />
            Culture
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">Behind the Scenes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our workspace and leadership events.
          </p>
        </div>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-foreground/10 group break-inside-avoid"
            >
              <img 
                src={`/img${num}.jpg`} 
                alt={`Gallery image ${num}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
