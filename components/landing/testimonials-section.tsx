"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote: "Datatrack completely transformed our core branch operations. Inter-branch reconciliation that previously consumed hours of frantic auditing now balances automatically in seconds with zero data loss.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "Meridian Regional Banking Corp",
    metric: "10x Faster Branch Reconciliation",
    rating: 5,
  },
  {
    quote: "Their AI Voice Agent deployment with Vocred handled our peak festive season customer calls with uncanny human empathy and sub-second latency. It saved us hundreds of support hours.",
    author: "Marcus Webb",
    role: "VP of Customer Experience",
    company: "Flux Systems & Telecom",
    metric: "40% Direct Cost Reduction",
    rating: 5,
  },
  {
    quote: "AapkiSociety automated our entire gated community financial ledger, visitor approvals, and monthly maintenance collections. It is easily the most dependable ERP we have used.",
    author: "Elena Rodriguez",
    role: "President, Board of Directors",
    company: "Beacon Heights Towers",
    metric: "100% Automated Digital Billing",
    rating: 5,
  },
  {
    quote: "The custom enterprise ERP integrations connected our biometric attendance, Indian tax payroll calculations, and banking payout pipelines smoothly without a minute of downtime.",
    author: "James Liu",
    role: "Head of People Operations",
    company: "Prism Enterprise Networks",
    metric: "50+ Modules Unified",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsAnimating(false);
    }, 250);
  };

  const nextSlide = () => {
    changeSlide((activeIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    changeSlide((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const active = testimonials[activeIndex];

  return (
    <section className="relative py-28 lg:py-36 border-b border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center justify-between gap-4 mb-16 pb-4 border-b border-foreground/10">
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Executive Endorsements</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full border border-foreground/15 hover:border-foreground flex items-center justify-center text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full border border-foreground/15 hover:border-foreground flex items-center justify-center text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Quote & Impact Block */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8">
            {/* 5-Star Rating */}
            <div className="flex items-center gap-1 mb-6 text-amber-500">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-xs font-mono text-muted-foreground">5.0 Verified Enterprise Review</span>
            </div>

            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight text-foreground">
                "{active.quote}"
              </p>
            </blockquote>

            {/* Author Meta */}
            <div
              className={`mt-10 flex items-center gap-5 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-foreground/15 flex items-center justify-center text-xl font-display text-foreground">
                {active.author.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold text-foreground">{active.author}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Client
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {active.role} • <span className="text-foreground/80">{active.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight Card */}
          <div className="lg:col-span-4">
            <div
              className={`p-8 rounded-3xl border border-foreground/15 bg-foreground/[0.02] transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-3">
                Key Operational Metric
              </span>
              <p className="font-display text-3xl lg:text-4xl text-foreground mb-4">
                {active.metric}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Measured in post-deployment quarterly audits comparing against legacy manual workflows.
              </p>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => changeSlide(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="mt-20 pt-10 border-t border-foreground/10">
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase mb-6 text-center">
            Trusted by forward-thinking banks, cooperatives &amp; enterprises
          </p>
          <div className="w-full mask-marquee overflow-hidden">
            <div className="flex gap-16 items-center marquee whitespace-nowrap py-2">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-16 items-center shrink-0">
                  {["Meridian Regional Bank", "Flux Systems AI", "Beacon Heights Society", "Prism Enterprises", "Apex Cooperative Bank", "Nova Tech Labs", "Quantum Capital", "Vertex India"].map(
                    (company) => (
                      <span
                        key={`${setIdx}-${company}`}
                        className="font-display text-lg md:text-xl text-foreground/35 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                      >
                        {company}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
