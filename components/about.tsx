"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import SectionHeading from "@/components/section-heading"
import { Brain, Code, Database, Cpu, Globe, Lightbulb } from "lucide-react"

const skills = [
  { name: "AI & ML", icon: <Brain className="h-4 w-4" /> },
  { name: "Full Stack", icon: <Code className="h-4 w-4" /> },
  { name: "Data Science", icon: <Database className="h-4 w-4" /> },
  { name: "Cloud Computing", icon: <Globe className="h-4 w-4" /> },
  { name: "Prompt Engineering", icon: <Lightbulb className="h-4 w-4" /> },
  { name: "Deep Learning", icon: <Cpu className="h-4 w-4" /> },
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background/90 to-background/70 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          )}
        >
          <div className="md:col-span-1">
            <Card className="h-full bg-background/40 backdrop-blur-sm border border-primary/20 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 flex flex-col items-center justify-center h-full relative z-10">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 mb-6 overflow-hidden p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-4xl font-bold">
                    MP
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Macha Praveen
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  B.Tech, Artificial Intelligence And Machine Learning
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1 py-1"
                    >
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full bg-background/40 backdrop-blur-sm border border-primary/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Career Objective
                </h3>
                <p className="text-muted-foreground mb-6 border-l-2 border-primary/30 pl-4">
                  Passionate AI/ML Engineer, Data Scientist, Prompt Engineer, and Full Stack Developer with hands-on
                  experience in building intelligent and scalable applications using Next.js, Progressive Web
                  Applications, and Python. Skilled in solving real-world problems through innovative AI, DS, and ML
                  solutions.
                </p>

                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Extra Curricular Activities
                </h3>
                <ul className="list-none space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>
                      Actively contributed to tech communities, mentoring students and collaborating on innovative
                      solutions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span>
                      Completed IBM SkillsBuild Certifications in Job Application Essentials and Working in a Digital
                      World: Professional Skills.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 mr-2"></span>
                    <span>
                      Developed Data Science projects, such as forecasting aluminium procurement costs and various
                      predictive analytics and AI-driven solutions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>
                      Built and deployed various applications, including Progressive Web Applications (PWAs), Visual
                      Studio Code extensions, Chrome extensions, AI-powered applications, and AI Agents.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span>
                      Led and developed final-year projects for senior (4th-year) students, assisting them in AI/ML, web
                      applications, and software development.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

