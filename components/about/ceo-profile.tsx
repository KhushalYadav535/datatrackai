"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Linkedin } from "lucide-react";

export function CeoProfile() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Leadership
            </span>
            <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
              Ashish Kolarkar
            </h1>
            <p className="text-xl font-medium text-foreground mb-6">
              CEO & Founder, Datatrack
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              A visionary leader in Bhopal's IT ecosystem, Ashish has pioneered enterprise banking automation and custom software development. With deep expertise spanning branch automation, IBR, and AI integrations, he has consistently driven Datatrack to deliver mission-critical solutions that scale.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="mailto:ashishkolarkar@gmail.com"
                className="inline-flex items-center justify-center bg-foreground text-background px-8 h-14 rounded-full text-base font-medium group transition-all hover:bg-foreground/90"
              >
                <Mail className="w-5 h-5 mr-3" />
                ashishkolarkar@gmail.com
                <ArrowRight className="w-4 h-4 ml-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ashishkolarkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-foreground/10 text-foreground px-6 h-14 rounded-full text-base font-medium transition-all hover:bg-foreground/5"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/5] lg:aspect-square bg-foreground/5 rounded-3xl overflow-hidden border border-foreground/10 flex items-center justify-center group"
          >
            <img 
              src="/ashishsir.png" 
              alt="Ashish Kolarkar"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent mix-blend-overlay"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/40 backdrop-blur-md border border-foreground/10 rounded-2xl z-10">
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Current Roles</p>
              <p className="text-sm font-medium">CEO at Datatrack</p>
              <p className="text-sm text-muted-foreground mt-1">Governing Body Member at JNCT</p>
              <p className="text-sm text-muted-foreground mt-1">Speaker & Trainer at BMA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
