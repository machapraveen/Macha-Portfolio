"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import SectionHeading from "@/components/section-heading"
import { Award, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "AWS Internship Training",
    organization: "INTERNSHIP STUDIO",
    period: "Jul 2024 - Aug 2024",
    description: "Hands-on training on AWS cloud services, deployment, and security best practices.",
    color: "from-primary to-purple-500",
  },
  {
    title: "Professional Program On Data Science And AI",
    organization: "360DigitMG",
    period: "Jun 2024 - Sep 2024",
    description: "Covered CRISP-ML(Q), EDA, supervised & unsupervised learning, text mining, deep learning, and GANs.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Python Programming",
    organization: "360DigitMG",
    period: "Jun 2024 - Jul 2024",
    description: "Focused on core Python concepts and practical applications.",
    color: "from-pink-500 to-indigo-400",
  },
  {
    title: "Basic Course On SQL",
    organization: "360DigitMG",
    period: "Jun 2024 - Aug 2024",
    description: "Covered fundamental SQL queries, database management, and data retrieval techniques.",
    color: "from-indigo-400 to-primary",
  },
  {
    title: "Data Visualization Using Power BI",
    organization: "360DigitMG",
    period: "Jun 2024 - Aug 2024",
    description: "Practical training on Power BI dashboards and data storytelling techniques.",
    color: "from-primary to-purple-500",
  },
  {
    title: "Artificial Intelligence And Machine Learning",
    organization: "APSSDC In Collaboration With EduNet Foundation",
    period: "May 2024 - Jun 2024",
    description:
      "Focused on AI/ML projects using IBM SkillsBuild. Covered supervised & unsupervised learning, data preprocessing, and model optimization.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cybersecurity With Kali Linux",
    organization: "APSSDC In Collaboration With EduNet Foundation",
    period: "May 2024 - Jun 2024",
    description: "Hands-on experience with ethical hacking and penetration testing using Kali Linux.",
    color: "from-pink-500 to-indigo-400",
  },
  {
    title: "Job Application Essentials",
    organization: "IBM SkillsBuild",
    period: "May 2024 - Jun 2024",
    description:
      "Learned resume writing, interview preparation, and personal branding strategies. Explored effective job search techniques and LinkedIn optimization.",
    color: "from-indigo-400 to-primary",
  },
]

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const itemsPerPage = 3
  const totalPages = Math.ceil(certifications.length / itemsPerPage)

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

    const element = document.getElementById("certifications")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Certifications & Training" subtitle="My professional development" />

        <div className="relative">
          <div ref={carouselRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
            {certifications.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((cert, index) => (
              <Card
                key={index}
                className={cn(
                  "bg-background/40 backdrop-blur-sm border border-primary/20 transition-all duration-500 relative group",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                  "transform hover:scale-[1.02] hover:shadow-lg",
                )}
                style={
                  {
                    "--index": index,
                    transitionDelay: `${index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={cn("absolute top-0 left-0 h-1 w-full bg-gradient-to-r", cert.color)}></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                        {cert.title}
                      </h3>
                      <p className="text-primary text-sm">{cert.organization}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{cert.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={cn(
                  "w-8 h-8 rounded-full",
                  currentPage === index
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-primary/30 hover:bg-primary/10 hover:border-primary/50",
                )}
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

