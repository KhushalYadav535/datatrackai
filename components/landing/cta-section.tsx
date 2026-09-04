"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative rounded-3xl border border-foreground/15 bg-foreground/[0.015] overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Dynamic Radial Spotlight */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, color-mix(in oklch, var(--foreground) 10%, transparent), transparent 60%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Column Content */}
              <div className="flex-1 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Accepting Enterprise Engagements</span>
                </div>

                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
                  Ready to engineer
                  <br />
                  <span className="font-serif-italic font-normal bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
                    your automated future?
                  </span>
                </h2>

                <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed">
                  Partner with our solutions architects to build custom banking automation, robust enterprise ERPs, or autonomous agentic workflows tailored to your scale.
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button
                        size="lg"
                        className="bg-foreground hover:bg-foreground/90 text-background px-8 h-13 text-sm font-mono tracking-wider uppercase rounded-full group shadow-xl shadow-foreground/10 cursor-pointer"
                      >
                        Schedule Executive Briefing
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-background/95 backdrop-blur-2xl border-l border-foreground/10 sm:max-w-md w-full overflow-y-auto">
                      <SheetHeader className="mb-6 mt-4">
                        <SheetTitle className="text-3xl font-display">Schedule a Briefing</SheetTitle>
                        <SheetDescription className="text-muted-foreground text-sm">
                          Tell us about your organization and requirements. Our engineering leadership responds within 24 hours under NDA.
                        </SheetDescription>
                      </SheetHeader>
                      
                      {submitted ? (
                        <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3 my-12">
                          <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                          <h4 className="font-display text-xl">Inquiry Received</h4>
                          <p className="text-xs text-muted-foreground">
                            Thank you. Our solutions director will reach out via email shortly.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="name" className="text-xs font-mono uppercase">Full Name</Label>
                            <Input id="name" required placeholder="Ashish Kumar" className="bg-foreground/[0.02] border-foreground/15 rounded-xl h-11" />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="org" className="text-xs font-mono uppercase">Organization / Bank</Label>
                            <Input id="org" required placeholder="Cooperative Bank of India" className="bg-foreground/[0.02] border-foreground/15 rounded-xl h-11" />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-xs font-mono uppercase">Official Email</Label>
                            <Input id="email" type="email" required placeholder="ashish@bank.org" className="bg-foreground/[0.02] border-foreground/15 rounded-xl h-11" />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="phone" className="text-xs font-mono uppercase">Phone / WhatsApp</Label>
                            <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-foreground/[0.02] border-foreground/15 rounded-xl h-11" />
                          </div>

                          <div className="space-y-1.5">
                            <Label htmlFor="message" className="text-xs font-mono uppercase">Scope of Work</Label>
                            <Textarea id="message" required placeholder="Core IBR reconciliation, custom HRMS, or AI Voice agent requirements..." className="min-h-[110px] bg-foreground/[0.02] border-foreground/15 rounded-xl text-sm" />
                          </div>

                          <Button type="submit" className="w-full h-12 text-sm font-mono uppercase tracking-wider rounded-full group mt-4">
                            Submit Consultation Request
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </Button>

                          <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-muted-foreground pt-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                            <span>100% Confidentiality &amp; Bilateral NDA</span>
                          </div>
                        </form>
                      )}
                    </SheetContent>
                  </Sheet>

                  <a
                    href="https://wa.me/919425300792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 h-13 rounded-full border border-foreground/20 hover:border-foreground text-sm font-mono uppercase tracking-wider transition-all hover:bg-foreground/5 text-foreground"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>

                {/* Direct Contacts Row */}
                <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-muted-foreground pt-6 border-t border-foreground/10">
                  <a href="tel:+919425300792" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    +91 9425300792
                  </a>
                  <a href="mailto:ashishkolarkar@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    ashishkolarkar@gmail.com
                  </a>
                  <span>Bhopal, MP • India</span>
                </div>
              </div>

              {/* Right Column 3D Graphic */}
              <div className="hidden lg:flex items-center justify-center w-[460px] h-[460px] shrink-0">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-foreground/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-t border-r border-foreground/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
