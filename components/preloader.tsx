"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background text-foreground"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Glowing Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative px-6 py-2"
            >
              <div className="absolute inset-0 blur-3xl opacity-25 bg-foreground"></div>
              <img 
                src="/datatrack-logo-transparent.png" 
                alt="DataTrack"
                className="relative z-10 h-14 md:h-18 w-auto object-contain dark:invert"
              />
            </motion.div>
            
            {/* Progress Counter */}
            <div className="overflow-hidden h-8 flex items-center justify-center">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl font-mono text-muted-foreground"
              >
                {Math.min(progress, 100)}%
              </motion.div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-64 h-px bg-foreground/10 relative overflow-hidden mt-4">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-foreground"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
