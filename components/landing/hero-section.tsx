"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Lock, Activity } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 lg:pt-36">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-foreground/[0.02] dark:bg-foreground/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] lg:w-[750px] lg:h-[750px] opacity-35 dark:opacity-40 pointer-events-none transition-opacity duration-1000">
        <AnimatedSphere />
      </div>
      
      {/* Precision architectural grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${16.6 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${12.5 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center">
        {/* Eyebrow Pill */}
        <div 
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] backdrop-blur-md text-xs font-mono text-foreground/80 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot" />
            <span className="tracking-wide">AI-Native Systems &amp; Banking Automation</span>
            <span className="text-foreground/30">|</span>
            <span className="text-muted-foreground hidden sm:inline">Enterprise Grade</span>
          </div>
        </div>
        
        {/* Main headline */}
        <div className="mb-8 max-w-5xl">
          <h1 
            className={`text-[clamp(2.75rem,7vw,6.25rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Custom Software &amp;</span>
            <span className="block font-serif-italic font-normal bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
              Banking Automation.
            </span>
          </h1>
        </div>
        
        {/* Description & CTAs Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
          <p 
            className={`lg:col-span-7 text-lg lg:text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We engineer mission-critical automation systems and bespoke enterprise platforms for financial institutions across India. From core branch reconciliation (IBR) and autonomous AI workflows to full-scale SaaS platforms that scale without compromise.
          </p>
          
          {/* CTAs */}
          <div 
            className={`lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-13 text-sm font-mono tracking-wider uppercase rounded-full group shadow-xl shadow-foreground/10 w-full sm:w-auto"
            >
              <Link href="#contact">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="h-13 px-7 text-sm font-mono tracking-wider uppercase rounded-full border-foreground/20 hover:bg-foreground/5 w-full sm:w-auto"
            >
              <Link href="#products">
                Explore Products
              </Link>
            </Button>
          </div>
        </div>

        {/* Enterprise Trust Strip */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-foreground/10 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2.5 text-xs font-mono text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-foreground shrink-0" />
            <span>RBI Guideline Compliant</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono text-muted-foreground">
            <Lock className="w-4 h-4 text-foreground shrink-0" />
            <span>Bank-Grade Encryption</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono text-muted-foreground">
            <Activity className="w-4 h-4 text-foreground shrink-0" />
            <span>99.99% High Availability</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono text-muted-foreground">
            <Zap className="w-4 h-4 text-foreground shrink-0" />
            <span>Sub-Second Reconciliation</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Live Metrics Marquee */}
      <div 
        className={`w-full border-t border-b border-foreground/10 bg-foreground/[0.015] py-5 mt-16 mask-marquee overflow-hidden transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center shrink-0">
              {[
                { value: "10x", label: "Faster Reconciliation", company: "COOPERATIVE & REGIONAL BANKS" },
                { value: "100%", label: "Compliance Guaranteed", company: "FINANCIAL SECTOR AUDITS" },
                { value: "24/7", label: "Automated Processing", company: "ENTERPRISE ERP WORKFLOWS" },
                { value: "Zero", label: "Data Loss Incidence", company: "MISSION CRITICAL DATA" },
                { value: "50+", label: "Financial Institutions", company: "DEPLOYED ACROSS INDIA" },
              ].map((stat, sIdx) => (
                <div key={`${stat.company}-${i}-${sIdx}`} className="flex items-baseline gap-4">
                  <span className="text-3xl lg:text-4xl font-display tracking-tight text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase font-mono">
                    {stat.label}
                    <span className="block text-[10px] text-foreground/40 mt-0.5 tracking-wider">{stat.company}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
