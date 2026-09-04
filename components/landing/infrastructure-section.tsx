"use client";

import { useEffect, useState, useRef } from "react";
import { CheckCircle2, Layers, Cpu, Database, GraduationCap, ShieldCheck } from "lucide-react";

const services = [
  { 
    title: "Enterprise Banking Automation", 
    tagline: "Core IBR, Ledger, & High-Frequency Operations",
    description: "Automate inter-branch reconciliation (IBR), daily balance settlement, and statutory reporting with bank-grade security and zero discrepancy tolerance.", 
    deliverables: ["Inter-Branch Reconciliation (IBR)", "Automated Statutory RBI Reporting", "Fixed Asset Management (FAMS)"],
    icon: ShieldCheck,
    category: "Banking" 
  },
  { 
    title: "Bespoke Software Development", 
    tagline: "High-Scale Web, Mobile, & Cloud Systems",
    description: "Custom digital platforms engineered from scratch using modern microservices, resilient APIs, and reactive frontend architectures.", 
    deliverables: ["Distributed Cloud Microservices", "Cross-Platform iOS & Android", "Real-Time Event Streaming"],
    icon: Layers,
    category: "Full-Stack" 
  },
  { 
    title: "Agentic AI & LLM Automation", 
    tagline: "Autonomous Voice & Workflow Agents",
    description: "Integrate autonomous LLM agents that read enterprise knowledge, orchestrate multi-step business logic, and speak fluently with customers.", 
    deliverables: ["Sub-Second Latency Voice AI", "RAG Enterprise Knowledge Bases", "Autonomous Workflow Automations"],
    icon: Cpu,
    category: "AI Native" 
  },
  { 
    title: "Database Architecture & Optimization", 
    tagline: "Mission-Critical SQL & High-Throughput Caching",
    description: "Enterprise database administration, high-availability replication, indexing audit, query optimization, and secure air-gapped backups.", 
    deliverables: ["PostgreSQL / SQL Performance Tuning", "Zero-Data-Loss Failover", "Multi-Region Distributed Sync"],
    icon: Database,
    category: "Data" 
  },
  { 
    title: "Corporate Tech Leadership Training", 
    tagline: "Upskilling Enterprise Engineering Teams",
    description: "Tailored workshops and hands-on modules conducted by industry veterans for banking officials, corporate IT departments, and universities.", 
    deliverables: ["BMA Certified Training Programs", "Agentic AI & Cloud Architecture", "Banking Compliance & Security"],
    icon: GraduationCap,
    category: "Training" 
  },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="services" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Impact Stats */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
              <span>Core Competencies</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[0.98]">
              Full-stack IT
              <br />
              <span className="font-serif-italic font-normal bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
                Consulting &amp; Systems.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              From mission-critical banking ledgers and automated AI voice agents to high-throughput cloud infrastructure that scales across continents.
            </p>

            {/* Impact Metric Chips */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-foreground/10">
              <div className="p-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-3xl lg:text-4xl font-display mb-1 text-foreground">24/7</div>
                <div className="text-xs font-mono text-muted-foreground uppercase">SLA Support</div>
              </div>
              <div className="p-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-3xl lg:text-4xl font-display mb-1 text-foreground">30+</div>
                <div className="text-xs font-mono text-muted-foreground uppercase">Years Experience</div>
              </div>
              <div className="p-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <div className="text-3xl lg:text-4xl font-display mb-1 text-foreground">100%</div>
                <div className="text-xs font-mono text-muted-foreground uppercase">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Services Deck */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-3xl border border-foreground/10 bg-foreground/[0.015] p-2 space-y-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeService === index;

                return (
                  <div
                    key={service.title}
                    onClick={() => setActiveService(index)}
                    className={`p-6 rounded-2xl transition-all duration-400 cursor-pointer border ${
                      isActive
                        ? "bg-background border-foreground/20 shadow-xl"
                        : "border-transparent hover:border-foreground/10 hover:bg-foreground/[0.02]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-2.5 rounded-xl transition-colors duration-300 shrink-0 ${
                          isActive ? "bg-foreground text-background" : "bg-foreground/5 text-foreground"
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg md:text-xl font-display text-foreground">
                              {service.title}
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-foreground/15 text-muted-foreground uppercase">
                              {service.category}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-muted-foreground">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      <span className={`w-2.5 h-2.5 rounded-full mt-2 transition-all ${
                        isActive ? "bg-emerald-500 scale-125" : "bg-foreground/20"
                      }`} />
                    </div>

                    {/* Expandable details when active */}
                    {isActive && (
                      <div className="mt-5 pt-4 border-t border-foreground/10 pl-12 text-sm">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                        
                        <div className="grid sm:grid-cols-3 gap-2">
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-center gap-1.5 text-xs font-mono text-foreground/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
