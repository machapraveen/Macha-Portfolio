"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import SectionHeading from "@/components/section-heading"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "ReactJS", level: 92 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Django", level: 85 },
    ],
  },
  {
    name: "AI & Data Science",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "Natural Language Processing", level: 88 },
      { name: "Computer Vision", level: 82 },
      { name: "Power BI", level: 80 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 85 },
      { name: "DevOps", level: 80 },
      { name: "Docker", level: 82 },
      { name: "CI/CD", level: 78 },
      { name: "Kubernetes", level: 75 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Blockchain", level: 70 },
      { name: "Ethical Hacking", level: 75 },
    ],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-gradient-to-r from-primary to-purple-500"
    if (level >= 80) return "bg-gradient-to-r from-purple-500 to-pink-500"
    if (level >= 70) return "bg-gradient-to-r from-pink-500 to-indigo-400"
    return "bg-gradient-to-r from-indigo-400 to-primary"
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Skills" subtitle="My technical expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={cn(
                "bg-background/40 backdrop-blur-sm border border-primary/20 transition-all duration-1000 delay-[calc(100ms*var(--index))] relative group",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
              style={{ "--index": index } as React.CSSProperties}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-purple-500"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(`${category.name}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 w-full rounded-full overflow-hidden bg-muted/30">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            getProgressColor(skill.level),
                            isVisible ? "w-[var(--level)]" : "w-0",
                          )}
                          style={{ "--level": `${skill.level}%` } as React.CSSProperties}
                        ></div>
                      </div>

                      {/* Skill description tooltip */}
                      {hoveredSkill === `${category.name}-${skill.name}` && (
                        <div className="absolute top-full left-0 mt-2 p-2 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-md shadow-lg z-20 w-full">
                          <p className="text-xs text-muted-foreground">{getSkillDescription(skill.name)}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    Python: "Expert in Python for AI/ML, data analysis, and backend development.",
    JavaScript: "Proficient in modern JavaScript for web and application development.",
    TypeScript: "Strong typing skills for building robust and maintainable applications.",
    Java: "Experience with Java for enterprise applications and Android development.",
    "C++": "Knowledge of C++ for system programming and performance-critical applications.",
    HTML: "Expert in semantic HTML for accessible and SEO-friendly websites.",
    CSS: "Advanced styling with CSS, including animations and responsive design.",
    "Next.js": "Full-stack React framework expertise for production applications.",
    ReactJS: "Component-based UI development with React ecosystem tools.",
    "Node.js": "Server-side JavaScript for building scalable network applications.",
    "Express.js": "Web application framework for Node.js to build APIs and web services.",
    Django: "Python web framework for rapid development and clean, pragmatic design.",
    "Machine Learning": "Experience with supervised and unsupervised learning algorithms.",
    "Deep Learning": "Neural network architectures for complex pattern recognition tasks.",
    "Natural Language Processing": "Text analysis, sentiment analysis, and language generation.",
    "Computer Vision": "Image recognition, object detection, and visual data processing.",
    "Power BI": "Data visualization and business intelligence dashboard creation.",
    SQL: "Database querying, schema design, and optimization.",
    MongoDB: "NoSQL database for flexible, document-oriented data storage.",
    PostgreSQL: "Advanced relational database management system.",
    AWS: "Cloud infrastructure deployment, management, and optimization.",
    DevOps: "Continuous integration, delivery, and infrastructure as code.",
    Docker: "Containerization for consistent development and deployment environments.",
    "CI/CD": "Automated testing and deployment pipelines.",
    Kubernetes: "Container orchestration for scaling and managing applications.",
    GitHub: "Version control, collaboration, and project management.",
    "VS Code": "Advanced IDE usage with extensions and customizations.",
    Postman: "API testing, documentation, and development.",
    "Project Management": "Agile methodologies, team coordination, and delivery.",
    Blockchain: "Distributed ledger technology and smart contract development.",
    "Ethical Hacking": "Security testing and vulnerability assessment.",
  }

  return descriptions[skillName] || `Skilled in ${skillName} for professional applications.`
}

