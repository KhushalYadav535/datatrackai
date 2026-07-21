"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you sign NDAs for enterprise projects?",
    answer: "Absolutely. We understand the critical nature of enterprise data and banking automation. We sign comprehensive NDAs and strict confidentiality agreements before any discovery phase begins."
  },
  {
    question: "How do you ensure data security for banking automation?",
    answer: "We deploy our solutions on private cloud or on-premise infrastructure based on compliance needs. We follow OWASP top 10, implement end-to-end encryption (AES-256), and ensure strict compliance for all financial automation tools."
  },
  {
    question: "What is your typical project timeline?",
    answer: "For standard AI integrations or SaaS workflows, deployment takes 2-4 weeks. For full-scale ERP and custom banking automation systems, timelines range from 2 to 6 months depending on the scope and legacy system complexity."
  },
  {
    question: "Do you build custom AI models or use APIs?",
    answer: "Both. Depending on your data privacy requirements and latency needs, we can either integrate cutting-edge APIs (like OpenAI/Anthropic) or train/fine-tune open-source models locally (like Llama 3) for highly sensitive data."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer 24/7 SLA-backed support. From server monitoring and bug fixes to scaling your architecture for high traffic, our dedicated support team has you covered."
  }
];

export function FaqSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-foreground/10 bg-foreground/5">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 justify-center">
            <span className="w-8 h-px bg-foreground/30" />
            FAQ
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
            Common Questions.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-foreground/10">
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium hover:no-underline hover:text-foreground/80 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pr-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
