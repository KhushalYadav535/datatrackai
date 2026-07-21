import React from "react"
import type { Metadata } from 'next'
import { Inter, Outfit } from "next/font/google";
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CustomCursor } from "@/components/custom-cursor"
import { Preloader } from "@/components/preloader"
import { AiAssistant } from "@/components/ai-assistant"
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ParticleBackground } from "@/components/particle-background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: 'DATATRACK | Custom Software & Banking Automation',
  description: 'Enterprise software development and banking automation solutions built with Agentic AI.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background`}>
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
