"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck, CheckCircle2, KeyRound } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "SOC 2 Type II & Banking Compliance",
    spec: "RBI Audit Compliant",
    description: "Independently audited technical controls with immutable audit trail logging and continuous regulatory posture monitoring.",
  },
  {
    icon: Lock,
    title: "AES-256-GCM Military Grade Encryption",
    spec: "Zero-Knowledge at Rest",
    description: "End-to-end cryptographic protection for all sensitive financial ledgers, account data, and inter-branch communications.",
  },
  {
    icon: Eye,
    title: "Zero-Trust Perimeter Architecture",
    spec: "Strict Mutual TLS",
    description: "Every internal API request and service-to-service call is cryptographically signed, authenticated, and authorized in real time.",
  },
  {
    icon: FileCheck,
    title: "Complete Data Sovereignty",
    spec: "Indian Cloud Infrastructure",
    description: "Full residency on Tier-IV Indian data centers complying strictly with local banking data locality mandates and ISO 27001.",
  },
];

const certifications = ["RBI Banking Norms", "ISO 27001", "SOC 2 Type II", "OWASP Top 10", "GDPR / DPDP India"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section id="security" ref={sectionRef} className="relative py-28 lg:py-36 bg-foreground/[0.015] border-b border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading & Certifications */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Banking Grade Security</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[0.98]">
              Trust is
              <br />
              <span className="font-serif-italic font-normal bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
                non-negotiable.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              When processing billions in financial balances and mission-critical enterprise workflows, security cannot be an afterthought. It is mathematically verified and baked into every byte.
            </p>

            {/* Certifications Badge Pills */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                Compliance Standards
              </span>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.02] text-xs font-mono text-foreground/80"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Security Feature Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`p-6 rounded-3xl border border-foreground/10 bg-background/50 hover:border-foreground/30 hover:bg-background transition-all duration-400 group flex flex-col justify-between ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-2xl border border-foreground/10 bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        {feature.spec}
                      </span>
                    </div>

                    <h3 className="text-lg font-display mb-2 text-foreground group-hover:translate-x-0.5 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-foreground/5 flex items-center gap-1 text-[11px] font-mono text-foreground/40">
                    <KeyRound className="w-3 h-3" />
                    <span>Hardened Layer 7 Security</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
