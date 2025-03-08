"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero3D from "@/components/hero-3d"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background via-background/95 to-background/90 text-foreground overflow-hidden"
    >
      <Navbar />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div
        className={cn(
          "container mx-auto px-4 py-20 flex flex-col items-center text-center z-10 transition-all duration-1000 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
            Macha Praveen
          </span>
          <span className="absolute -inset-1 animate-pulse rounded-lg bg-primary/20 blur-xl"></span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-6 text-foreground/90">
          <span className="text-primary">AI/ML Engineer</span> |<span className="text-purple-500"> Data Scientist</span>{" "}
          |<span className="text-pink-500"> Prompt Engineer</span> |
          <span className="text-indigo-400"> Full Stack Developer</span>
        </h2>

        <p className="max-w-2xl text-foreground/70 mb-8">
          Passionate about building intelligent and scalable applications using Next.js, Progressive Web Applications,
          and Python. Skilled in solving real-world problems through innovative AI, DS, and ML solutions.
        </p>

        <div className="w-full max-w-4xl mb-8">
          <Hero3D />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity border-none relative group overflow-hidden"
          >
            <a href="#contact">
              Get in Touch
              <span className="absolute bottom-0 left-0 w-full h-full bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-primary/30 hover:border-primary/60 relative group overflow-hidden"
          >
            <a href="#projects">
              View Projects
              <span className="absolute bottom-0 left-0 w-full h-full bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <a href="mailto:praveenmacha777@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 transition-colors"
          >
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-pink-500 transition-colors"
          >
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="animate-bounce rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}

