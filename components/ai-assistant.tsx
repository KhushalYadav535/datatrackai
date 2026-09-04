"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

const quickPrompts = [
  "What banking automation do you build?",
  "Tell me about Vocred AI Voice agent",
  "How can I contact Ashish Kolarkar?",
  "What is AapkiSociety ERP?",
];

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "Hello! I am the Datatrack AI Assistant. Ask me anything about our enterprise banking automation, AI agents, or schedule an executive consultation." 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getAiResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("bank") || q.includes("ibr") || q.includes("reconciliation")) {
      return "Datatrack specializes in core banking automation, including Inter-Branch Reconciliation (IBR), statutory RBI compliance reporting, daily balance settlements, and Fixed Asset Management (FAMS) for cooperative and regional banks across India.";
    }
    if (q.includes("vocred") || q.includes("voice")) {
      return "Vocred is our flagship AI Voice Agent platform built for sub-second, human-like voice conversations in customer support and debt collections. You can test it live at vocred.com!";
    }
    if (q.includes("ashish") || q.includes("ceo") || q.includes("founder")) {
      return "Ashish Kolarkar is the CEO & Founder of Datatrack. With 30+ years of engineering leadership and resilience, he trains executives at the Bhopal Management Association (BMA). You can reach him at ashishkolarkar@gmail.com.";
    }
    if (q.includes("society") || q.includes("aapkisociety")) {
      return "AapkiSociety (aapkisociety.in) is our comprehensive multi-tenant society management ERP that automates visitor passes, digital maintenance billing, resident communication, and committee accounts.";
    }
    if (q.includes("contact") || q.includes("hire") || q.includes("consult") || q.includes("meeting")) {
      return "You can schedule a consultation using the 'Schedule Consultation' button on the homepage, call +91 9425300792, or email ashishkolarkar@gmail.com. We respond within 24 hours under NDA.";
    }
    return "Thank you for asking! Datatrack builds enterprise-grade software, AI agents, and banking automation systems. Feel free to explore our products above or book a consultation with our leadership.";
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: query }]);
    if (!textToSend) setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getAiResponse(query);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: response
      }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[400px] max-w-[calc(100vw-32px)] bg-background/95 backdrop-blur-2xl border border-foreground/15 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col h-[520px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm text-foreground">Datatrack AI</h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-[10px] font-mono text-muted-foreground">Always active • Sub-second AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-foreground/10 rounded-full transition-colors text-foreground"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3.5">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user' ? 'bg-foreground/10 text-foreground' : 'bg-foreground text-background'
                  }`}>
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`p-3.5 rounded-2xl text-xs leading-relaxed max-w-[82%] ${
                    msg.role === 'user' 
                      ? 'bg-foreground text-background rounded-tr-none font-medium' 
                      : 'bg-foreground/[0.03] border border-foreground/10 rounded-tl-none text-foreground'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground p-2">
                  <Bot className="w-3.5 h-3.5 animate-pulse" />
                  <span>Datatrack AI is thinking...</span>
                </div>
              )}
            </div>

            {/* Quick Prompt Suggestion Chips */}
            <div className="px-4 py-2 border-t border-foreground/5 bg-foreground/[0.01] flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full border border-foreground/10 bg-foreground/[0.03] hover:border-foreground/30 hover:bg-foreground/[0.06] text-[10px] font-mono text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors shrink-0"
                >
                  <Sparkles className="w-2.5 h-2.5 inline mr-1 text-emerald-500" />
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3.5 border-t border-foreground/10 bg-background">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2 relative">
                <input
                  type="text"
                  placeholder="Ask about banking automation, Vocred, CEO..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-foreground/[0.03] border border-foreground/15 rounded-full px-4 py-2.5 pr-11 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1.5 p-2 bg-foreground text-background rounded-full hover:bg-foreground/90 disabled:opacity-30 transition-all"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
        className="fixed bottom-6 right-6 w-13 h-13 rounded-full bg-foreground text-background shadow-2xl flex items-center justify-center z-50 transition-colors hover:bg-foreground/90 group cursor-pointer border border-background/20"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </motion.button>
    </>
  );
}
