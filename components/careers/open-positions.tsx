"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, LineChart, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export function OpenPositions() {
  const positions = [
    {
      title: "Senior Full-Stack Architecture Lead",
      department: "Engineering",
      location: "Bhopal (Hybrid / On-site)",
      type: "Full-Time",
      experience: "4+ Years",
      description: "Lead the development of massive enterprise applications and banking ledgers. Deep expertise in Next.js, Node.js, distributed queues, and PostgreSQL required.",
      perks: ["Competitive Package", "Direct Leadership Impact", "Performance Bonus"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Agentic AI & LLM Systems Engineer",
      department: "AI/ML R&D",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "2+ Years",
      description: "Build autonomous multi-agent LLM systems and sub-second voice synthesis pipelines that integrate seamlessly with internal banking tools.",
      perks: ["Cutting-Edge AI Stack", "GPU Cloud Credits", "Flexible Hours"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "FinTech & Banking Product Manager",
      department: "Product & Strategy",
      location: "Bhopal (On-site)",
      type: "Full-Time",
      experience: "3+ Years",
      description: "Drive the strategic roadmap for our branch banking automation suite. Deep working understanding of cooperative banking, statutory reporting, and RBI norms preferred.",
      perks: ["High Autonomy", "Executive Exposure", "Health Insurance"],
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "DevSecOps & Cloud Reliability Engineer",
      department: "Infrastructure",
      location: "Hybrid (India)",
      type: "Full-Time",
      experience: "3+ Years",
      description: "Ensure bank-grade security and zero-downtime high availability across Kubernetes, AWS GovCloud, and hardened on-premise deployments.",
      perks: ["Zero-Downtime Culture", "Continuous Learning", "Travel Allowance"],
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-foreground/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>We Are Hiring Builders</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight leading-[0.98]">
              Join the team building
              <br />
              <span className="font-serif-italic font-normal bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent">
                the automated enterprise.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            We are looking for ambitious engineers and thinkers based in Bhopal or remote across India. If you don't see an exact match, send us your portfolio anyway.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {positions.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-8 rounded-3xl border border-foreground/10 hover:border-foreground/30 bg-foreground/[0.015] hover:bg-foreground/[0.03] transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-3.5 bg-foreground/5 rounded-2xl shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    {job.icon}
                  </div>

                  <div className="flex flex-wrap gap-1.5 justify-end">
                    <span className="px-2.5 py-1 bg-foreground/5 rounded-full text-[11px] font-mono text-muted-foreground">{job.department}</span>
                    <span className="px-2.5 py-1 bg-foreground/5 rounded-full text-[11px] font-mono text-muted-foreground">{job.location}</span>
                    <span className="px-2.5 py-1 bg-foreground/5 rounded-full text-[11px] font-mono text-muted-foreground">{job.type}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display mb-3 text-foreground group-hover:translate-x-0.5 transition-transform duration-300">
                  {job.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Perks tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.perks.map((perk) => (
                    <span key={perk} className="inline-flex items-center gap-1 text-[11px] font-mono text-foreground/70 bg-foreground/[0.03] px-2.5 py-1 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {perk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply Direct Link */}
              <div className="pt-4 border-t border-foreground/10 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">Experience: {job.experience}</span>
                <a
                  href={`mailto:ashishkolarkar@gmail.com?subject=Application for ${encodeURIComponent(job.title)} - Datatrack&body=Hello Ashish,%0D%0A%0D%0AI would like to apply for the position of ${encodeURIComponent(job.title)}. Attached is my resume and portfolio link.`}
                  className="inline-flex items-center text-xs font-mono tracking-wider uppercase text-foreground hover:opacity-70 transition-opacity font-semibold"
                >
                  Apply Directly <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
