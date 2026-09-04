"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check, Terminal, Play } from "lucide-react";

const steps = [
  {
    number: "01",
    duration: "Week 1 - 2",
    title: "Discovery & System Architecture",
    description: "Deep audit of legacy workflows, regulatory compliance specs (RBI/Banking standards), and architectural design for high concurrency.",
    fileName: "architecture.config.ts",
    code: `// Phase 1: Architecture & Compliance Spec
const system = await datatrack.architect({
  domain: 'banking-automation',
  modules: ['ibr-reconciliation', 'ai-voice-agent', 'erp'],
  compliance: {
    rbiGuidelines: true,
    dataSovereignty: 'IN-WEST',
    encryption: 'AES-256-GCM'
  },
  slaTarget: '99.99%'
});`,
  },
  {
    number: "02",
    duration: "Week 3 - 6",
    title: "Agile Development & Agentic AI",
    description: "Custom core development with robust microservices, fine-tuned agentic models, automated test coverage, and sandbox simulation.",
    fileName: "engine.pipeline.ts",
    code: `// Phase 2: Implementation & AI Integration
const deployment = await datatrack.build({
  engine: 'Microservices + Distributed Queues',
  aiWorkflows: {
    agentType: 'Autonomous Reconciler',
    models: ['Llama-3-Enterprise', 'Custom-Voice-V2'],
    zeroHallucinationCheck: true
  },
  testsPassed: '1,420 / 1,420'
});`,
  },
  {
    number: "03",
    duration: "Ongoing SLA",
    title: "Zero-Downtime Go Live & 24/7 SLA",
    description: "Enterprise deployment with real-time audit tracing, instant failover redundancy, and proactive 24/7 technical monitoring.",
    fileName: "production.status.ts",
    code: `// Phase 3: Production Rollout
await datatrack.deploy({
  environment: 'production-primary',
  failover: 'hot-standby',
  realTimeMetrics: true,
  supportSLA: '24/7 Priority Hotline'
});

console.log('System Status: 100% Operational 🚀');`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const handleCopy = () => {
    navigator.clipboard.writeText(steps[activeStep].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-foreground text-background overflow-hidden"
    >
      {/* Background ambient pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-background/20 bg-background/5 text-xs font-mono uppercase tracking-widest text-background/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Methodology</span>
            <span className="text-background/40">|</span>
            <span>Engineering Process</span>
          </div>

          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Three steps.
            <br />
            <span className="font-serif-italic font-normal text-background/50">
              Infinite enterprise possibilities.
            </span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Steps selector */}
          <div className="lg:col-span-6 space-y-2">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-400 group cursor-pointer ${
                  activeStep === index 
                    ? "bg-background/10 border-background/25 shadow-lg" 
                    : "border-transparent hover:border-background/10 hover:bg-background/[0.03] opacity-60 hover:opacity-90"
                }`}
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-xs tracking-widest text-background/40 px-2 py-1 rounded bg-background/5 shrink-0 mt-1">
                    {step.number}
                  </span>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl lg:text-2xl font-display text-background group-hover:translate-x-1 transition-transform duration-300">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-mono text-background/50 border border-background/15 px-2 py-0.5 rounded-full shrink-0">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-sm text-background/70 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Active progress bar */}
                    {activeStep === index && (
                      <div className="mt-4 h-0.5 bg-background/20 rounded-full overflow-hidden">
                        <div className="h-full bg-background rounded-full w-full transition-all duration-500" />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code IDE display */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-background/20 bg-background/[0.04] backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="px-5 py-3.5 border-b border-background/15 flex items-center justify-between bg-background/[0.03]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-background/60 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    {steps[activeStep].fileName}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs font-mono text-background/60 hover:text-background px-2.5 py-1 rounded bg-background/5 hover:bg-background/15 transition-all"
                  aria-label="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs md:text-sm min-h-[300px] overflow-x-auto bg-black/40">
                <pre className="text-background/80 leading-relaxed">
                  {steps[activeStep].code.split('\n').map((line, idx) => {
                    const isComment = line.trim().startsWith('//');
                    const isKeyword = line.includes('const ') || line.includes('await ') || line.includes('return ');
                    return (
                      <div key={`${activeStep}-${idx}`} className="flex gap-4 py-0.5">
                        <span className="text-background/20 select-none w-6 text-right shrink-0">{idx + 1}</span>
                        <span className={isComment ? 'text-emerald-400/80 italic' : isKeyword ? 'text-violet-300' : 'text-background/90'}>
                          {line}
                        </span>
                      </div>
                    );
                  })}
                </pre>
              </div>

              {/* Window Footer Status */}
              <div className="px-5 py-3 border-t border-background/15 flex items-center justify-between text-xs font-mono text-background/50 bg-background/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Pipeline: Validated</span>
                </div>
                <div className="flex items-center gap-1">
                  <Play className="w-3 h-3 text-background/40" />
                  <span>Execution: ~42ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
