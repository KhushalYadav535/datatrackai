"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mic, Building, Users, Camera, FileText, Landmark, Briefcase, FileBadge, BookOpen, Filter } from "lucide-react";

const categories = ["All", "AI & Voice", "Fintech & Banking", "Enterprise ERP", "Utility & EdTech"];

const caseStudies = [
  {
    title: "Vocred",
    category: "AI & Voice",
    client: "Live Global Platform",
    metrics: ["Sub-second Latency", "Human-like TTS"],
    tags: ["LLMs", "Audio Stream", "Python", "Next.js"],
    description: "Enterprise voice agent platform delivering ultra-responsive, human-like conversational intelligence for automated customer support and outbound operations.",
    icon: <Mic className="w-5 h-5" />,
    link: "https://vocred.com"
  },
  {
    title: "Sahayog AI",
    category: "Fintech & Banking",
    client: "Banking & Cooperatives",
    metrics: ["RBI Compliant", "Audit Shield"],
    tags: ["Core Banking", "Ledger", "Multi-Tenant"],
    description: "Next-generation intelligent core finance and compliance management software engineered specifically for cooperative credit societies and regional banks.",
    icon: <Landmark className="w-5 h-5" />,
    link: "https://sahayogai-ella.vercel.app/"
  },
  {
    title: "AapkiSociety",
    category: "Enterprise ERP",
    client: "Gated Societies & Real Estate",
    metrics: ["100% Digital Billing", "Visitor Logging"],
    tags: ["ERP", "Automated Billing", "PWA"],
    description: "Comprehensive multi-tenant society ERP automating gate passes, resident accounting, committee voting, and maintenance payment gateways.",
    icon: <Building className="w-5 h-5" />,
    link: "https://aapkisociety.in"
  },
  {
    title: "HRMS Enterprise",
    category: "Enterprise ERP",
    client: "Corporate Teams",
    metrics: ["Payroll Engine", "Biometric Sync"],
    tags: ["Statutory Compliance", "Leaves", "Tax Engine"],
    description: "Complete Human Resource Management System with automated Indian payroll compliance, PF/ESI calculations, and biometric terminal synchronization.",
    icon: <Briefcase className="w-5 h-5" />,
    link: "https://hrmssystem.vercel.app/"
  },
  {
    title: "TextMitra",
    category: "Utility & EdTech",
    client: "Legal & Corporate Utility",
    metrics: ["Multi-Language OCR", "Fast Extraction"],
    tags: ["Vision LLM", "PDF Parser", "High Accuracy"],
    description: "High-speed OCR document processing engine extracting structured tabular and text data from low-resolution scans and legal PDFs.",
    icon: <FileText className="w-5 h-5" />,
    link: "https://textmitra.com"
  },
  {
    title: "Sahbhagi",
    category: "Enterprise ERP",
    client: "Conferences & Events",
    metrics: ["Real-Time Polling", "Live Q&A"],
    tags: ["WebSockets", "Audience Sync", "Analytics"],
    description: "Interactive real-time audience engagement platform featuring live sentiment analysis, anonymous questions, and structured polling.",
    icon: <Users className="w-5 h-5" />,
    link: "https://sahbhagi.vercel.app/"
  },
  {
    title: "KheechMeriPhoto",
    category: "AI & Voice",
    client: "Creative Consumer Web",
    metrics: ["Instant Diffusion", "50+ Art Styles"],
    tags: ["Generative AI", "Image-to-Image", "Fast Inference"],
    description: "AI-powered caricature and stylization engine transforming ordinary photographs into endless artistic aesthetic expressions in seconds.",
    icon: <Camera className="w-5 h-5" />,
    link: "https://kheechmeriphoto.vercel.app/"
  },
  {
    title: "UpRole",
    category: "Utility & EdTech",
    client: "Professional Careers",
    metrics: ["ATS Scoring", "AI Tailoring"],
    tags: ["Career Tool", "Template Engine", "PDF Export"],
    description: "Modern, ATS-optimized resume builder and career acceleration platform featuring real-time AI keyword tailoring against job descriptions.",
    icon: <FileBadge className="w-5 h-5" />,
    link: "https://www.uprole.me/"
  },
  {
    title: "PracticeMitra AI",
    category: "Utility & EdTech",
    client: "EdTech & Educators",
    metrics: ["Custom Worksheets", "CBSE/ICSE Aligned"],
    tags: ["Dynamic Syllabus", "Instant Tests", "AI Prompts"],
    description: "Custom educational worksheet generator dynamically generating practice questions and mock tests aligned with curriculum requirements.",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://www.pracup.co.in/"
  }
];

export function CaseStudiesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-foreground text-background shadow-md"
                  : "bg-foreground/[0.03] text-muted-foreground hover:text-foreground border border-foreground/10 hover:border-foreground/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid of Filtered Projects */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredStudies.map((study, index) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                key={study.title}
                className="group p-8 rounded-3xl border border-foreground/10 hover:border-foreground/30 bg-foreground/[0.015] hover:bg-foreground/[0.035] transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge + Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl border border-foreground/10 bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                        {study.icon}
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-foreground/15 text-muted-foreground uppercase">
                        {study.category}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-foreground/15 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground/40 transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-display tracking-tight mb-3 text-foreground group-hover:translate-x-0.5 transition-transform duration-300">
                    {study.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-foreground/[0.03]">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Metric & Link */}
                  <div className="pt-4 border-t border-foreground/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      ● {study.metrics[0]}
                    </span>
                    <span className="text-foreground/70 group-hover:text-foreground flex items-center gap-1 transition-colors">
                      Launch Site <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
