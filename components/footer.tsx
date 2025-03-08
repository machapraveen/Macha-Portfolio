import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Macha Praveen
            </h2>
            <p className="text-sm text-muted-foreground mt-1">AI/ML Engineer | Data Scientist | Full Stack Developer</p>
          </div>

          <div className="flex space-x-4">
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
        </div>

        <div className="border-t border-primary/10 mt-6 pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            © {new Date().getFullYear()} Macha Praveen. All rights reserved. Made with
            <Heart className="h-4 w-4 mx-1 text-pink-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

