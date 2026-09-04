"use client";

import { motion } from "framer-motion";

const journeySteps = [
  {
    year: "Inception",
    title: "Founding Datatrack",
    description: "Established Datatrack to provide high-end IT consulting and custom software development services in Bhopal."
  },
  {
    year: "Expansion",
    title: "Banking Automation",
    description: "Led the development of massive enterprise solutions including Inter-Branch Reconciliation (IBR), Payroll Systems, and Fixed Asset Management (FAMS)."
  },
  {
    year: "Leadership",
    title: "Academic & Industry Advisory",
    description: "Appointed as an industrialist member of the governing body for JNCT and engaged as a guest speaker and trainer for the Bhopal Management Association (BMA)."
  },
  {
    year: "Present",
    title: "AI & Next-Gen Scaling",
    description: "Pioneering the shift towards Agentic AI, AI Voice Agents (Vocred), and cross-platform native solutions for enterprise clients globally."
  }
];

export function JourneyTimeline() {
  return (
    <section className="relative py-24 lg:py-32 bg-foreground/5">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 justify-center">
            <span className="w-8 h-px bg-foreground/30" />
            The Journey
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-4">
            30+ Years of Resilience.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Adapting, learning, and thriving through three decades of enterprise technology evolution.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 md:-translate-x-1/2" />

          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[7px] md:left-1/2 w-4 h-4 bg-foreground rounded-full -translate-x-1/2 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"
                }`}>
                  <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-2 block">
                    {step.year}
                  </span>
                  <h3 className="text-2xl font-display mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
