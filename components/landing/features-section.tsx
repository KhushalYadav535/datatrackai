"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Globe } from "lucide-react";

const products = [
  { 
    name: "Vocred", 
    category: "Voice AI", 
    status: "Live v2.4",
    tags: ["LLM Agents", "Sub-second TTS", "Enterprise"],
    url: "https://vocred.com", 
    description: "Autonomous AI Voice Agent platform delivering hyper-realistic, human-like conversational experiences for high-volume support." 
  },
  { 
    name: "AapkiSociety", 
    category: "ERP / Housing", 
    status: "Live Platform",
    tags: ["Automated Billing", "Resident Portal", "Fintech"],
    url: "https://aapkisociety.in", 
    description: "Comprehensive multi-tenant society ERP automating gate passes, visitor logging, maintenance collection, and accounts." 
  },
  { 
    name: "Sahayog AI", 
    category: "Banking / Fintech", 
    status: "Production Ready",
    tags: ["RBI Compliant", "Cooperative Banking", "Ledger"],
    url: "https://sahayogai-ella.vercel.app/", 
    description: "Intelligent core finance & compliance software engineered specifically for modern cooperative credit societies." 
  },
  { 
    name: "Sahbhagi", 
    category: "Engagement", 
    status: "Active Web",
    tags: ["Live Polling", "Real-Time Q&A", "Events"],
    url: "https://sahbhagi.vercel.app/", 
    description: "Interactive real-time audience engagement platform featuring live sentiment analysis, voting, and structured Q&A." 
  },
  { 
    name: "KheechMeriPhoto", 
    category: "Generative AI", 
    status: "Viral App",
    tags: ["Diffusion Models", "Style Transfer", "Web3"],
    url: "https://kheechmeriphoto.vercel.app/", 
    description: "AI-powered custom caricature and avatar generator transforming portraits into limitless artistic styles in seconds." 
  },
  { 
    name: "TextMitra", 
    category: "Utility / OCR", 
    status: "Enterprise Tool",
    tags: ["Vision LLM", "Multi-Language OCR", "PDF"],
    url: "https://textmitra.com", 
    description: "Ultra-fast document processing engine extracting structured tabular and text data from noisy scans and legal PDFs." 
  },
  { 
    name: "HRMS Enterprise", 
    category: "Workforce ERP", 
    status: "Enterprise Live",
    tags: ["Payroll Engine", "Biometric Sync", "Compliance"],
    url: "https://hrmssystem.vercel.app/", 
    description: "Full-lifecycle Human Resource Management System with automated Indian payroll compliance, tax deductions, and leaves." 
  },
  { 
    name: "UpRole", 
    category: "Career / EdTech", 
    status: "Live Platform",
    tags: ["ATS Optimizer", "AI Scoring", "Resume"],
    url: "https://www.uprole.me/", 
    description: "Modern, ATS-optimized resume builder and career acceleration platform featuring instant AI skill analysis." 
  },
  { 
    name: "PracticeMitra AI", 
    category: "EdTech AI", 
    status: "Production Ready",
    tags: ["Dynamic Curriculum", "CBSE/ICSE", "Worksheets"],
    url: "https://www.pracup.co.in/", 
    description: "Instant AI educational worksheet and test generator tailored dynamically to syllabi, grade levels, and difficulty tiers." 
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group block p-7 lg:p-8 rounded-3xl border border-foreground/10 hover:border-foreground/30 bg-foreground/[0.015] hover:bg-foreground/[0.035] transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ 
        transitionDelay: `${index * 40}ms`,
        ['--mouse-x' as any]: `${mousePos.x}px`,
        ['--mouse-y' as any]: `${mousePos.y}px`,
      }}
    >
      {/* Interactive spotlight glow on hover */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, color-mix(in oklch, var(--foreground) 7%, transparent), transparent 70%)`
        }}
      />

      <div className="relative z-10">
        {/* Top Meta: Category + Live Status + Arrow Icon */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full border border-foreground/15 bg-foreground/[0.03] text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              {product.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/[0.04] text-[10px] font-mono text-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {product.status}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full border border-foreground/15 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground/40 group-hover:bg-foreground/[0.05] transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-display tracking-tight mb-3 text-foreground group-hover:translate-x-0.5 transition-transform duration-300">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {product.description}
        </p>
      </div>

      {/* Bottom Tags */}
      <div className="relative z-10 pt-4 border-t border-foreground/5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span 
              key={tag}
              className="text-[10px] font-mono text-muted-foreground/80 px-2 py-0.5 rounded bg-foreground/[0.03]"
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="text-[11px] font-mono text-foreground/60 flex items-center gap-1 group-hover:text-foreground transition-colors">
          <Globe className="w-3 h-3" />
          Live
        </span>
      </div>
    </a>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="products"
      ref={sectionRef}
      className="relative py-28 lg:py-36 border-b border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
            <span>Proprietary Ecosystem</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
          </div>

          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Explore our ecosystem of
            <br />
            <span className="font-serif-italic font-normal bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
              AI &amp; SaaS Platforms.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From autonomous voice agents to enterprise banking automation — battle-tested, live, and scaling in real production environments.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
