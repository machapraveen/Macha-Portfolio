"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import SectionHeading from "@/components/section-heading"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Aluminum Forecast Genius",
    period: "Feb 2025 - Mar 2025",
    description:
      "A machine learning model for predicting aluminum procurement costs based on market trends and historical data.",
    tags: ["Machine Learning", "Data Science", "Forecasting"],
    link: "#",
    color: "from-primary to-purple-500",
  },
  {
    title: "Dev-Trackr",
    period: "Jun 2024 - Present",
    description:
      "A full-fledged Learning Management System that enables users to create, manage, and track courses with interactive features.",
    tags: ["Next.js", "React", "TypeScript"],
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Learning Management System (LMS)",
    period: "Mar 2024 - Present",
    description:
      "A full-fledged Learning Management System that enables users to create, manage, and track courses with interactive features.",
    tags: ["Next.js", "React", "Node.js"],
    link: "#",
    color: "from-pink-500 to-indigo-400",
  },
  {
    title: "Aluminum Price API",
    period: "Mar 2024 - Present",
    description:
      "A REST API providing real-time and historical data on aluminum pricing, assisting businesses in procurement and forecasting.",
    tags: ["API", "Node.js", "Express"],
    link: "#",
    color: "from-indigo-400 to-primary",
  },
  {
    title: "OCR - Optical Character Recognition Tool",
    period: "Mar 2024 - Present",
    description:
      "A text extraction tool that converts printed or handwritten text into machine-readable formats using OCR technology.",
    tags: ["Computer Vision", "Python", "OCR"],
    link: "#",
    color: "from-primary to-purple-500",
  },
  {
    title: "Identifying Glaucoma from Fundus Images",
    period: "Mar 2024 - Present",
    description: "A deep learning-powered system that detects glaucoma in fundus images, improving early diagnosis.",
    tags: ["Deep Learning", "Computer Vision", "Healthcare"],
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const scrollToProject = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * (carouselRef.current.offsetWidth / 3)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handlePrevious = () => {
    if (activeProject !== null && activeProject > 0) {
      setActiveProject(activeProject - 1)
      scrollToProject(activeProject - 1)
    }
  }

  const handleNext = () => {
    if (activeProject !== null && activeProject < projects.length - 1) {
      setActiveProject(activeProject + 1)
      scrollToProject(activeProject + 1)
    }
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background/90 to-background/70 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Projects" subtitle="My recent work" />

        <div className="relative">
          <div
            ref={carouselRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto pb-4 hide-scrollbar"
          >
            {projects.slice(0, visibleProjects).map((project, index) => (
              <Card
                key={index}
                className={cn(
                  "bg-background/40 backdrop-blur-sm border border-primary/20 overflow-hidden transition-all duration-500 relative group",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  "flex flex-col transform hover:scale-[1.02] hover:shadow-lg",
                  activeProject === index ? "ring-2 ring-primary" : "",
                )}
                style={
                  {
                    "--index": index,
                    transitionDelay: `${index * 100}ms`,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={cn("absolute top-0 left-0 h-1 w-full bg-gradient-to-r", project.color)}></div>
                <CardContent className="p-6 flex-grow relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{project.period}</p>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5 text-xs border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 relative z-10">
                  <div className="flex space-x-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {activeProject !== null && (
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                disabled={activeProject === 0}
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={activeProject === projects.length - 1}
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {projects.length > visibleProjects && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={() => setVisibleProjects((prev) => prev + 6)}
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

