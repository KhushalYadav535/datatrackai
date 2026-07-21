"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const jobs = [
  {
    role: "Senior AI Engineer",
    type: "Full-time",
    location: "Bhopal (Hybrid)",
    description: "Lead the development of our Agentic AI solutions. Requires deep expertise in LLMs, LangChain, and Python/FastAPI."
  },
  {
    role: "Full-Stack Developer",
    type: "Full-time",
    location: "Bhopal (On-site)",
    description: "Build robust enterprise applications using Next.js, React, Node, and PostgreSQL. Focus on banking automation tools."
  },
  {
    role: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    description: "Design premium, glassmorphic interfaces for our global SaaS products. Must be highly skilled in Figma and interaction design."
  }
];

export function JobListings() {
  return (
    <section className="py-32 lg:py-48 relative min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 justify-center">
            <span className="w-8 h-px bg-foreground/30" />
            Careers
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6">
            Join the team.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We are always looking for visionary engineers and designers to help us automate the world's most critical infrastructure.
          </p>
        </motion.div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-foreground/5 border border-foreground/10 hover:border-foreground/30 rounded-3xl p-8 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-display mb-3">{job.role}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                  </div>
                  <p className="text-foreground/80 leading-relaxed max-w-2xl">{job.description}</p>
                </div>
                
                <a 
                  href="mailto:careers@datatrackonline.com"
                  className="shrink-0 inline-flex items-center justify-center bg-background border border-foreground/10 text-foreground px-6 h-12 rounded-full font-medium transition-all hover:bg-foreground hover:text-background"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
