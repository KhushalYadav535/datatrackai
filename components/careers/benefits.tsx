"use client";

import { motion } from "framer-motion";
import { Laptop, HeartPulse, GraduationCap, Coffee, Rocket, Globe } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      title: "Remote & Hybrid Options",
      description: "Work from our state-of-the-art Bhopal office or anywhere in India.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Top-Tier Equipment",
      description: "M-series MacBooks and enterprise-grade hardware for all engineers.",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health coverage for you and your dependents.",
      icon: <HeartPulse className="w-6 h-6" />
    },
    {
      title: "Continuous Learning",
      description: "Annual stipend for courses, conferences, and certifications.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Startup Culture, Enterprise Scale",
      description: "Move fast, break things (in staging), and deploy to massive clients.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Office Perks",
      description: "Catered lunches, premium coffee, and regular team offsites.",
      icon: <Coffee className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
            Why join Datatrack?
          </h2>
          <p className="text-xl text-background/70">
            We invest heavily in our team so they can focus on doing their best work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/5 p-8 rounded-3xl border border-background/10 hover:bg-background/10 transition-colors"
            >
              <div className="w-12 h-12 bg-background/10 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-background/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
