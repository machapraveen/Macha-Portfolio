"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import SectionHeading from "@/components/section-heading"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "B.Tech, Artificial Intelligence And Machine Learning",
    institution: "Aditya College Of Engineering And Technology",
    period: "2022 - 2026",
    grade: "CGPA: 7.00/7",
    color: "from-primary to-primary/70",
  },
  {
    degree: "Senior Secondary (XII), Board Of Secondary Education Andhra Pradesh",
    institution: "Sri Chaitanya Jr College",
    period: "2021",
    grade: "Percentage: 8.80%",
    color: "from-purple-500 to-purple-500/70",
  },
  {
    degree: "Secondary (X), Board Of Secondary Education, Andhra Pradesh",
    institution: "Sri Chaitanya",
    period: "2019",
    grade: "CGPA: 9.80/10",
    color: "from-pink-500 to-pink-500/70",
  },
]

export default function Education() {
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

    const element = document.getElementById("education")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-background/90 to-background/70 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Education" subtitle="My academic background" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-primary via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={cn(
                  "relative transition-all duration-1000 delay-[calc(200ms*var(--index))]",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  "md:flex md:justify-between md:even:flex-row-reverse",
                )}
                style={{ "--index": index } as React.CSSProperties}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center hidden md:flex z-10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>

                {/* Left side content for even items */}
                <div className={cn("hidden md:block w-[calc(50%-2rem)]", index % 2 === 0 ? "md:block" : "md:hidden")}>
                  <div className="h-full flex items-center justify-end">
                    <div className="w-full max-w-xs text-right pr-8">
                      <h4 className="text-lg font-medium text-primary">{edu.period}</h4>
                      <p className="text-sm text-muted-foreground">{edu.grade}</p>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <Card
                  className={cn(
                    "w-full md:w-[calc(50%-2rem)] bg-background/40 backdrop-blur-sm border border-primary/20 relative group",
                    "md:even:ml-auto md:odd:mr-auto",
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={cn("absolute top-0 left-0 h-1 w-full bg-gradient-to-r", edu.color)}></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start">
                      <div className="md:hidden mr-4 mt-1">
                        <div className="w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-primary">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground md:hidden">{edu.period}</p>
                        <p className="text-sm font-medium mt-1 md:hidden">{edu.grade}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Right side content for odd items */}
                <div className={cn("hidden md:block w-[calc(50%-2rem)]", index % 2 === 1 ? "md:block" : "md:hidden")}>
                  <div className="h-full flex items-center">
                    <div className="w-full max-w-xs pl-8">
                      <h4 className="text-lg font-medium text-primary">{edu.period}</h4>
                      <p className="text-sm text-muted-foreground">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

