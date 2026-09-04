"use client";

import { motion } from "framer-motion";
import { Laptop, HeartPulse, GraduationCap, Coffee, Rocket, Globe } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      title: "Remote & Hybrid Freedom",
      description: "Collaborate from our flagship Bhopal headquarters or anywhere across India with asynchronous workflows.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Top-Tier Hardware",
      description: "Apple Silicon M-series MacBooks, 4K monitors, and enterprise-grade peripherals for every builder.",
      icon: <Laptop className="w-5 h-5" />
    },
    {
      title: "Comprehensive Health",
      description: "Full medical coverage for you and your direct dependents with zero-deductible hospital tiers.",
      icon: <HeartPulse className="w-5 h-5" />
    },
    {
      title: "Continuous Learning Budget",
      description: "Dedicated annual stipend for conferences, AI research papers, books, and international certifications.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: "Direct Leadership Impact",
      description: "Work directly alongside CEO Ashish Kolarkar and build software deployed to millions of banking users.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      title: "Offsites & Retreats",
      description: "Regular team retreats, catered lunch sprints, gourmet coffee, and collaborative hackathons.",
      icon: <Coffee className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 lg:py-36 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-background/20 bg-background/5 text-xs font-mono uppercase tracking-widest text-background/70 mb-6">
            <span>Engineering Culture</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[0.98]">
            Why build at
            <br />
            <span className="font-serif-italic font-normal text-background/50">
              Datatrack?
            </span>
          </h2>

          <p className="text-lg text-background/70 leading-relaxed">
            We invest deeply into engineering talent, cutting-edge tools, and high-trust autonomy so you can do your life's best work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-background/[0.03] hover:bg-background/[0.06] p-8 rounded-3xl border border-background/10 hover:border-background/25 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-background/10 rounded-2xl flex items-center justify-center mb-6 text-background">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-display mb-2.5 text-background">{benefit.title}</h3>
              <p className="text-background/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
