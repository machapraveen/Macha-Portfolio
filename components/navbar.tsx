"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1))
      const currentPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/10" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="#home"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:opacity-80 transition-opacity"
        >
          Macha Praveen
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "relative group overflow-hidden",
                activeSection === item.href.substring(1) ? "text-primary" : "text-foreground/80 hover:text-primary",
              )}
            >
              <Link href={item.href}>
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                    activeSection === item.href.substring(1) && "scale-x-100",
                  )}
                />
              </Link>
            </Button>
          ))}
          <Button
            size="sm"
            asChild
            className="ml-2 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity"
          >
            <a href="/Macha_Praveen_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-primary/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "justify-start",
                  activeSection === item.href.substring(1) ? "text-primary" : "text-foreground/80",
                )}
                onClick={() => setIsOpen(false)}
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
            <Button size="sm" asChild className="mt-2 justify-start bg-gradient-to-r from-primary to-purple-500">
              <a href="/Macha_Praveen_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

