import React from "react"
import type { Metadata } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CustomCursor } from "@/components/custom-cursor"
import { Preloader } from "@/components/preloader"
import { AiAssistant } from "@/components/ai-assistant"
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ParticleBackground } from "@/components/particle-background";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap" 
});

const instrumentSerif = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-instrument-serif",
  style: ["normal", "italic"],
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains",
  display: "swap" 
});

export const metadata: Metadata = {
  title: 'DATATRACK | Enterprise Banking Automation & Custom Software',
  description: 'Mission-critical enterprise software, banking automation, and Agentic AI workflows built for modern scale.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground selection:bg-foreground selection:text-background`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SmoothScroll>
            <Preloader />
            <CustomCursor />
            <ParticleBackground />
            <div className="relative z-10">
              {children}
            </div>
            <AiAssistant />
            <Analytics />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
