"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp, Award, Shield, CheckCircle } from "lucide-react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl lg:text-7xl font-display tracking-tight text-foreground">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const metrics = [
  { 
    value: 50, 
    suffix: "+", 
    prefix: "",
    label: "Enterprise Banks & Societies Automated",
    subtext: "Core IBR, daily balancing & audits",
    icon: Shield
  },
  { 
    value: 30, 
    suffix: "+", 
    prefix: "",
    label: "Years of Enterprise Trust & Resilience",
    subtext: "Three decades of engineering innovation",
    icon: Award
  },
  { 
    value: 100, 
    suffix: "%", 
    prefix: "",
    label: "Audit & Regulatory Compliance Rate",
    subtext: "RBI & statutory cooperative guidelines",
    icon: CheckCircle
  },
  { 
    value: 200, 
    suffix: "+", 
    prefix: "",
    label: "Custom SaaS & Enterprise Deployments",
    subtext: "Across banking, ERP & AI agents",
    icon: TrendingUp
  },
];

export function MetricsSection() {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="studio" ref={sectionRef} className="relative py-28 lg:py-36 border-b border-foreground/10 bg-foreground/[0.01]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
              <span>Proven Impact</span>
            </div>

            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Proven numbers.
              <br />
              <span className="font-serif-italic font-normal bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
                Trusted by industry leaders.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/[0.02] font-mono text-xs text-muted-foreground self-start lg:self-auto">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Telemetry
            </span>
            <span className="text-foreground/30">|</span>
            <span suppressHydrationWarning>{time.toLocaleTimeString()} IST</span>
          </div>
        </div>
        
        {/* Metrics Luxury Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className={`p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.015] hover:border-foreground/30 hover:bg-foreground/[0.035] transition-all duration-500 flex flex-col justify-between ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl border border-foreground/10 bg-foreground/[0.03] flex items-center justify-center text-foreground mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <AnimatedCounter 
                    end={typeof metric.value === 'number' ? metric.value : 0} 
                    suffix={metric.suffix} 
                    prefix={metric.prefix}
                  />

                  <div className="mt-4 text-base font-medium text-foreground leading-snug">
                    {metric.label}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-foreground/5 text-xs font-mono text-muted-foreground">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
