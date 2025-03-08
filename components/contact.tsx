"use client"

import { useState } from "react"
import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import SectionHeading from "@/components/section-heading"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! I'm Praveen's AI assistant. How can I help you today?", isUser: false },
  ])
  const [chatInput, setChatInput] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    // Add user message
    setChatMessages((prev) => [...prev, { text: chatInput, isUser: true }])
    const userMessage = chatInput
    setChatInput("")

    // Simulate AI response
    setTimeout(() => {
      let response = "Thank you for your message! Praveen will get back to you soon."

      if (userMessage.toLowerCase().includes("resume") || userMessage.toLowerCase().includes("cv")) {
        response = "You can download Praveen's resume from the button in the navigation bar."
      } else if (userMessage.toLowerCase().includes("contact") || userMessage.toLowerCase().includes("email")) {
        response = "You can contact Praveen at praveenmacha777@gmail.com or through this contact form."
      } else if (userMessage.toLowerCase().includes("project") || userMessage.toLowerCase().includes("work")) {
        response =
          "Praveen has worked on various AI/ML and full-stack projects. Check out the Projects section for more details!"
      } else if (userMessage.toLowerCase().includes("skill") || userMessage.toLowerCase().includes("expertise")) {
        response =
          "Praveen is skilled in AI/ML, Data Science, Full Stack Development, and more. The Skills section has a detailed breakdown."
      }

      setChatMessages((prev) => [...prev, { text: response, isUser: false }])
    }, 1000)
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background/90 to-background/70 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Contact Me" subtitle="Get in touch" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-background/40 backdrop-blur-sm border border-primary/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-purple-500"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href="mailto:praveenmacha777@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        praveenmacha777@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a
                        href="tel:+919700652777"
                        className="text-sm text-muted-foreground hover:text-purple-500 transition-colors"
                      >
                        +91 9700652777
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-10 h-10 rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Kakinada, Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors flex items-center justify-center"
                    onClick={() => setChatOpen(!chatOpen)}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {chatOpen ? "Close Chat" : "Chat with AI Assistant"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {chatOpen && (
              <Card className="bg-background/40 backdrop-blur-sm border border-primary/20 overflow-hidden">
                <CardContent className="p-4">
                  <div className="h-64 overflow-y-auto mb-4 p-2 space-y-3">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={cn(
                          "p-3 rounded-lg max-w-[80%]",
                          msg.isUser ? "bg-primary/20 ml-auto" : "bg-muted/50 mr-auto",
                        )}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleChatSubmit} className="flex gap-2">
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Type your message..."
                      className="bg-background/50 border-primary/30 focus:border-primary/60 transition-colors"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-background/40 backdrop-blur-sm border border-primary/20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-purple-500"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-background/50 border-primary/30 focus:border-primary/60 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-background/50 border-primary/30 focus:border-primary/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary/60 transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

