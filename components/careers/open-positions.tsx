"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, LineChart, ShieldCheck } from "lucide-react";

export function OpenPositions() {
  const positions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Bhopal (Hybrid)",
      type: "Full-Time",
      description: "Lead the development of massive enterprise applications. Experience in Next.js, Node.js, and SQL architectures required.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Agentic AI Engineer",
      department: "AI/ML",
      location: "Remote (India)",
      type: "Full-Time",
      description: "Build autonomous LLM agents that integrate with internal tools to resolve complex banking and HR operations.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "FinTech Product Manager",
      department: "Product",
      location: "Bhopal (On-site)",
      type: "Full-Time",
      description: "Drive the roadmap for our branch banking automation suite. Deep understanding of RBI guidelines and cooperative banking preferred.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Security & DevOps Engineer",
      department: "Infrastructure",
      location: "Hybrid",
      type: "Full-Time",
      description: "Ensure bank-grade security across all deployments. Experience with Kubernetes, AWS, and zero-trust architectures.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Open Roles
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight">
              Join the team building the future.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            We're always looking for ambitious engineers and builders. If you don't see a role that fits, reach out anyway.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {positions.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-foreground/10 hover:border-foreground transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="p-4 bg-foreground/5 rounded-2xl shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                {job.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-mono">{job.department}</span>
                  <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-mono">{job.location}</span>
                  <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-mono">{job.type}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{job.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {job.description}
                </p>
                <button className="inline-flex items-center text-sm font-medium hover:text-muted-foreground transition-colors">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
