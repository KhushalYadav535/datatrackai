"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "AI-First Approach",
    description: "Every problem is evaluated through the lens of modern Agentic AI to find the most efficient automated solution."
  },
  {
    title: "Uncompromising Security",
    description: "From banking algorithms to local LLMs, we treat data privacy and encryption as our highest priority."
  },
  {
    title: "Scalable Architectures",
    description: "We don't build temporary patches. Our systems are engineered to scale seamlessly across global regions."
  }
];

export function CoreValues() {
  return (
    <section className="py-24 lg:py-32 border-t border-foreground/10 bg-foreground/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 justify-center">
            <span className="w-8 h-px bg-foreground/30" />
            Philosophy
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">Core Principles</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The engineering philosophy that drives our consulting.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 lg:p-10 rounded-3xl border border-foreground/10 bg-background/50 hover:bg-background transition-colors"
            >
              <h3 className="text-2xl font-display mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
