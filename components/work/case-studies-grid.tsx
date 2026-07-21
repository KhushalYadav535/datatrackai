"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mic, Building, Users, Camera, FileText, Landmark, Briefcase, FileBadge, BookOpen } from "lucide-react";

export function CaseStudiesGrid() {
  const caseStudies = [
    {
      title: "Vocred",
      category: "AI",
      client: "Live Platform",
      metrics: ["Voice AI", "Conversational"],
      description: "AI Voice Agent platform delivering human-like conversational experiences.",
      icon: <Mic className="w-6 h-6" />,
      color: "bg-purple-500/10 text-purple-500",
      link: "https://vocred.com"
    },
    {
      title: "AapkiSociety",
      category: "Management",
      client: "Live Platform",
      metrics: ["Community", "Operations"],
      description: "Comprehensive society management system.",
      icon: <Building className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-500",
      link: "https://aapkisociety.in"
    },
    {
      title: "Sahbhagi",
      category: "Engagement",
      client: "Live Platform",
      metrics: ["Interactive", "Q&A"],
      description: "Interactive audience engagement and Q&A platform.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-500",
      link: "https://sahbhagi.vercel.app/"
    },
    {
      title: "KheechMeriPhoto",
      category: "Fun / AI",
      client: "Live App",
      metrics: ["Generative AI", "Creative"],
      description: "AI-powered caricature photo generator with endless styles.",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-pink-500/10 text-pink-500",
      link: "https://kheechmeriphoto.vercel.app/"
    },
    {
      title: "TextMitra",
      category: "Utility",
      client: "Live Tool",
      metrics: ["OCR", "Extraction"],
      description: "Extract text seamlessly from images and PDFs.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-indigo-500/10 text-indigo-500",
      link: "https://textmitra.com"
    },
    {
      title: "Sahayog AI",
      category: "Fintech",
      client: "Live Platform",
      metrics: ["Intelligent Finance", "Cooperatives"],
      description: "Intelligent Finance for Modern Cooperatives.",
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-emerald-500/10 text-emerald-500",
      link: "https://sahayogai-ella.vercel.app/"
    },
    {
      title: "HRMS System",
      category: "HR",
      client: "Enterprise",
      metrics: ["Management", "Enterprise"],
      description: "Complete Human Resource Management System for enterprise teams.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-slate-500/10 text-slate-500",
      link: "https://hrmssystem.vercel.app/"
    },
    {
      title: "UpRole",
      category: "Career",
      client: "Live Platform",
      metrics: ["Resume Builder", "Intuitive"],
      description: "Modern and intuitive resume builder.",
      icon: <FileBadge className="w-6 h-6" />,
      color: "bg-cyan-500/10 text-cyan-500",
      link: "https://www.uprole.me/"
    },
    {
      title: "PracticeMitra AI",
      category: "EdTech",
      client: "Live Platform",
      metrics: ["Education", "Custom Worksheets"],
      description: "Generate customized worksheets instantly using AI.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-yellow-500/10 text-yellow-500",
      link: "https://www.pracup.co.in/"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 justify-center"
          >
            <span className="w-8 h-px bg-foreground/30" />
            Our Portfolio
            <span className="w-8 h-px bg-foreground/30" />
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display tracking-tight mb-6"
          >
            Proof of execution.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Explore our massive portfolio of live platforms, AI agents, and enterprise tools built by the Datatrack team.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.a
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="group relative bg-foreground/5 rounded-3xl p-8 lg:p-10 border border-foreground/10 overflow-hidden hover:bg-foreground hover:text-background transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl ${study.color} group-hover:bg-background group-hover:text-foreground transition-colors duration-500`}>
                    {study.icon}
                  </div>
                  <div className="px-4 py-1.5 rounded-full border border-foreground/20 group-hover:border-background/20 text-xs font-mono tracking-wider">
                    {study.category}
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-display tracking-tight mb-4 group-hover:text-background transition-colors duration-500">
                  {study.title}
                </h3>
                
                <p className="text-muted-foreground text-sm group-hover:text-background/70 mb-8 leading-relaxed transition-colors duration-500 flex-1">
                  {study.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.metrics.map((metric, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-3 py-1 bg-background group-hover:bg-background/20 text-foreground group-hover:text-background rounded-md text-xs font-medium transition-colors duration-500"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm font-medium group-hover:text-background transition-colors duration-500">
                    Visit Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
