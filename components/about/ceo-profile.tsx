"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Linkedin, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CeoProfile() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden border-b border-foreground/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-foreground/[0.02] dark:bg-foreground/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
              <Award className="w-3.5 h-3.5" />
              <span>Leadership &amp; Vision</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-4">
              Ashish Kolarkar
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <p className="text-xl font-medium text-foreground">
                CEO &amp; Founder, Datatrack
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3" />
                Industry Leader
              </span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              A pioneering force in central India's technology ecosystem, Ashish has spearheaded enterprise banking automation, core inter-branch reconciliation (IBR), and mission-critical custom architectures for over three decades (30+ years of resilience &amp; leadership). Under his guidance, Datatrack has continually expanded into Agentic AI, high-frequency ERP systems, and global SaaS platforms.
            </p>
            
            {/* Leadership CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="mailto:ashishkolarkar@gmail.com"
                className="inline-flex items-center justify-center bg-foreground text-background px-7 h-13 rounded-full text-xs font-mono uppercase tracking-wider group transition-all hover:bg-foreground/90 shadow-lg"
              >
                <Mail className="w-4 h-4 mr-2.5" />
                ashishkolarkar@gmail.com
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ashishkolarkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-foreground/20 text-foreground px-6 h-13 rounded-full text-xs font-mono uppercase tracking-wider transition-all hover:bg-foreground/5"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </div>

            {/* Quick Experience Counters */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-foreground/10 max-w-lg">
              <div>
                <div className="text-3xl font-display text-foreground">30+</div>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display text-foreground">50+</div>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">Institutions Automated</div>
              </div>
              <div>
                <div className="text-3xl font-display text-foreground">10k+</div>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">Engineers Mentored</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-foreground/15 shadow-2xl group bg-foreground/5"
          >
            <img 
              src="/ashishsir.png" 
              alt="Ashish Kolarkar - CEO Datatrack"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-background/80 backdrop-blur-xl border border-foreground/15 rounded-2xl z-10 space-y-1.5 shadow-lg">
              <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">Advisory &amp; Institutional Governance</p>
              <p className="text-sm font-semibold text-foreground">CEO &amp; Founder at Datatrack</p>
              <p className="text-xs text-muted-foreground">Senior Corporate Trainer at Bhopal Management Association (BMA)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
