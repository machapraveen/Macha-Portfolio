"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import SectionHeading from "@/components/section-heading"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "AWS INTERN",
    company: "INTERNSHIP STUDIO",
    location: "Virtual",
    period: "Jul 2024 - Aug 2024",
    description: [
      "Gained hands-on experience with AWS cloud services.",
      "Built and deployed cloud computing solutions.",
      "Implemented security best practices in AWS infrastructure.",
    ],
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    color: "from-primary to-primary/70",
  },
  {
    title: "Cloud Computing",
    company: "Studio",
    location: "Virtual",
    period: "Jul 2024 - Aug 2024",
    description: [
      "Worked with AWS cloud services handling deployment security and optimization.",
      "Developed and tested serverless applications using AWS Lambda and DynamoDB.",
    ],
    icon: <Briefcase className="h-5 w-5 text-purple-500" />,
    color: "from-purple-500 to-purple-500/70",
  },
  {
    title: "Cybersecurity Intern",
    company: "Andhra Pradesh State Skill Development Corporation (APSSDC) In Collaboration With Edunet Foundation",
    location: "Virtual",
    period: "May 2024 - Jun 2024",
    description: [
      "Gained practical exposure to cybersecurity concepts.",
      "Used Kali Linux for penetration testing and ethical hacking.",
      "Developed skills in vulnerability assessment and threat mitigation.",
    ],
    icon: <Briefcase className="h-5 w-5 text-pink-500" />,
    color: "from-pink-500 to-pink-500/70",
  },
  {
    title: "AI & ML Intern",
    company: "Andhra Pradesh State Skill Development Corporation (APSSDC) In Collaboration With Edunet Foundation",
    location: "Virtual",
    period: "May 2024 - Jun 2024",
    description: [
      "Worked on AI and ML projects using IBM SkillsBuild.",
      "Gained insights into supervised & unsupervised learning, data preprocessing, and model training.",
      "Developed and optimized ML models for real-world applications.",
    ],
    icon: <Briefcase className="h-5 w-5 text-indigo-400" />,
    color: "from-indigo-400 to-indigo-400/70",
  },
]

export default function Experience() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Work Experience" subtitle="My professional journey" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-primary via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                  {exp.icon}
                </div>

                {/* Left side content for even items */}
                <div className={cn("hidden md:block w-[calc(50%-2rem)]", index % 2 === 0 ? "md:block" : "md:hidden")}>
                  <div className="h-full flex items-center justify-end">
                    <div className="w-full max-w-xs text-right pr-8">
                      <h4 className="text-lg font-medium text-primary">{exp.period}</h4>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
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
                  <div className={cn("absolute top-0 left-0 h-1 w-full bg-gradient-to-r", exp.color)}></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start">
                      <div className="md:hidden mr-4 mt-1">
                        <div className="w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                          {exp.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground md:hidden">
                          {exp.location} | {exp.period}
                        </p>
                        <ul className="list-none space-y-2 mt-3">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Right side content for odd items */}
                <div className={cn("hidden md:block w-[calc(50%-2rem)]", index % 2 === 1 ? "md:block" : "md:hidden")}>
                  <div className="h-full flex items-center">
                    <div className="w-full max-w-xs pl-8">
                      <h4 className="text-lg font-medium text-primary">{exp.period}</h4>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
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

