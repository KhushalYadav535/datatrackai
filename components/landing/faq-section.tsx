"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do you execute mutual NDAs prior to technical discovery?",
    answer: "Absolutely. Enterprise banking records, proprietary algorithms, and internal ERP workflows demand uncompromised confidentiality. We sign comprehensive bilateral NDAs and intellectual property protection agreements before any code or architectural discovery begins."
  },
  {
    question: "How do you guarantee RBI and banking compliance for automation?",
    answer: "Our software is architected from the ground up according to RBI guidelines for cybersecurity, data locality, and computerized accounting in cooperative banks. We maintain immutable audit logs, air-gapped backups, and dual-authorizationMaker-Checker workflows for financial balance alterations."
  },
  {
    question: "What are typical deployment timelines for enterprise modules?",
    answer: "Autonomous AI agents and cloud SaaS workflows deploy in 2 to 4 weeks. Full-scale core banking reconciliation (IBR) and custom ERP systems take between 6 to 12 weeks including legacy data migration, staff training, and parallel audit runs."
  },
  {
    question: "Do you deploy custom local LLMs for sensitive on-premise networks?",
    answer: "Yes. For institutions with strict data sovereignty mandates where external cloud APIs are restricted, we deploy and fine-tune private open-weights models (such as Llama 3 and Mistral) fully on-premise with zero external data leakage."
  },
  {
    question: "What service-level agreements (SLA) and maintenance do you offer?",
    answer: "We provide round-the-clock, 24/7 SLA-backed support with dedicated engineering liaisons. Our support covers proactive system health monitoring, rapid hotfix deployment, database index tuning, and ongoing regulatory update patches."
  }
];

export function FaqSection() {
  return (
    <section className="relative py-28 lg:py-36 border-b border-foreground/10 bg-foreground/[0.01]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-foreground/15 bg-foreground/[0.03] text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Answered</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
            Common questions.
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Everything you need to know about our engagement models, compliance standards, and timelines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="border border-foreground/10 rounded-2xl bg-background/50 hover:bg-background px-6 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline py-5 text-foreground">
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground/60 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6 pl-9 pr-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Support Help Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
          <p className="text-sm text-muted-foreground">
            Have a specialized banking or architectural question?{" "}
            <Link href="#contact" className="text-foreground font-medium underline underline-offset-4 hover:opacity-80 inline-flex items-center gap-1">
              Talk directly with our solutions architects <ArrowRight className="w-3.5 h-3.5 inline" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
