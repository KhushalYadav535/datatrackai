"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/work" },
  { name: "Services", href: "/#services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/#contact" },
];

function MagneticLink({ children, href }: { children: React.ReactNode; href: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };
  
  const reset = () => setPosition({ x: 0, y: 0 });
  
  return (
    <motion.div
      onMouseMove={handleMouse as any}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      <Link
        href={href}
        className="text-xs uppercase tracking-widest font-mono text-foreground/70 hover:text-foreground transition-colors duration-200 relative group px-3.5 py-1.5"
      >
        {children}
        <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-foreground scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
      </Link>
    </motion.div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "top-3 left-3 right-3 md:top-4 md:left-6 md:right-6" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "glass-pill rounded-full max-w-[1180px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-5 md:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Official Logo */}
          <Link href="/" className="flex items-center gap-2.5 group py-1">
            <img 
              src="/datatrack-logo-transparent.png" 
              alt="DataTrack - Trusted AI Partner" 
              className={`w-auto object-contain transition-all duration-500 dark:invert ${
                isScrolled ? "h-8 md:h-9" : "h-10 md:h-11"
              }`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <MagneticLink key={link.name} href={link.href}>
                {link.name}
              </MagneticLink>
            ))}
          </div>

          {/* Desktop Right Actions: Live Status + Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Status Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 bg-foreground/[0.03] text-[11px] font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Q2</span>
            </div>

            {/* Dark / Light Mode Switch */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-full border border-foreground/10 hover:border-foreground/30 flex items-center justify-center text-foreground/70 hover:text-foreground transition-all duration-200 bg-foreground/[0.02] hover:bg-foreground/[0.06]"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
                )}
              </button>
            )}

            {/* CTA Button */}
            <Button
              asChild
              size="sm"
              className={`bg-foreground hover:bg-foreground/90 text-background rounded-full transition-all duration-300 font-mono text-xs tracking-wider uppercase group ${
                isScrolled ? "px-4 h-9" : "px-6 h-10"
              }`}
            >
              <Link href="/#contact">
                Consult Us
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground p-1"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-foreground hover:bg-foreground/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu - Full Screen Luxury Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-2xl z-40"
          >
            <div className="flex flex-col h-full px-8 pt-24 pb-8">
              <div className="flex items-center justify-between mb-8">
                <img 
                  src="/datatrack-logo-transparent.png" 
                  alt="DataTrack" 
                  className="h-8 w-auto object-contain dark:invert"
                />
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Enterprise</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-display text-foreground hover:text-muted-foreground transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom CTAs */}
              <div className="pt-8 border-t border-foreground/10 flex flex-col gap-4">
                <Button 
                  asChild
                  className="w-full bg-foreground text-background rounded-full h-12 text-sm font-mono uppercase tracking-wider"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/#contact">
                    Get In Touch
                  </Link>
                </Button>
                <p className="text-center font-mono text-xs text-muted-foreground">
                  +91 9425300792 • MP, India
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
