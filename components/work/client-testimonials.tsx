"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function ClientTestimonials() {
  const testimonials = [
    {
      quote: "Datatrack's core banking solution revolutionized how our rural branches operate. We went from overnight batch processing to real-time synchronization across our entire network.",
      author: "Managing Director",
      company: "Regional Cooperative Bank"
    },
    {
      quote: "The automated payroll engine they architected handles our 10,000+ employees flawlessly. Tax compliance and deductions are now fully automated, saving us hundreds of hours.",
      author: "Chief Financial Officer",
      company: "State Department"
    },
    {
      quote: "Their Agentic AI integration fundamentally changed our customer support. We are resolving complex inquiries instantly, 24/7, without any human intervention required.",
      author: "VP of Operations",
      company: "Enterprise Retail Client"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
            Trusted by the best.
          </h2>
          <p className="text-xl text-background/70">
            Hear directly from the enterprises that rely on our software every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background/5 p-8 lg:p-10 rounded-3xl border border-background/10 relative"
            >
              <Quote className="w-10 h-10 text-background/20 mb-6" />
              <p className="text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-background/60">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
