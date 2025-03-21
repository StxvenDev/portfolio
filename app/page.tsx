"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Download, Send, Github, ExternalLink, Mail, Phone, MapPin, Menu, X } from "lucide-react"

export default function Home() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col dark">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            Steven Bossio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : "text-muted-foreground"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : "text-muted-foreground"}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "work" ? "text-primary" : "text-muted-foreground"}`}
            >
              Work
            </button>
            <Link
              href="/certifications"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              Certifications
            </Link>
            <Link
              href="/skills"
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              Skills
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "contact" ? "text-primary" : "text-muted-foreground"}`}
            >
              Contact
            </button>
            <Button asChild size="sm">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b border-border py-4 px-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium py-2 hover:text-primary">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium py-2 hover:text-primary">
              About
            </button>
            <button onClick={() => scrollToSection("work")} className="text-sm font-medium py-2 hover:text-primary">
              Work
            </button>
            <Link href="/certifications" className="text-sm font-medium py-2 hover:text-primary">
              Certifications
            </Link>
            <Link href="/skills" className="text-sm font-medium py-2 hover:text-primary">
              Skills
            </Link>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium py-2 hover:text-primary">
              Contact
            </button>
            <Button asChild size="sm" className="w-full">
              <a href="/assets/Steven_CV.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm <span className="gradient-text">Steven Bossio</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Backend Developer</h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Backend developer with 1+ years of experience in Node.js, Express.js, and Nest.js. Passionate about
                  building scalable solutions that exceed technical expectations.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button onClick={() => scrollToSection("about")}>Learn More About Me</Button>
                  <Button variant="outline" onClick={() => scrollToSection("contact")}>
                    Get In Touch
                  </Button>
                </div>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-11-19-43-31.jpg-aJKERcjesyRnQwOMH90yFexjIgFsJq.jpeg"
                  alt="Shuaib Karim"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

              <div className="space-y-6">
                <p className="text-lg">
                  I'm a Backend Developer with 1+ years of experience building robust architectures using Node.js,
                  Express.js, and Nest.js. I have strong knowledge in databases (MySQL, PostgreSQL, MongoDB) and I'm
                  passionate about implementing scalable solutions that exceed technical expectations.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="gradient-border p-6 bg-card">
                    <h3 className="text-xl font-semibold mb-4">Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Backend Developer</h4>
                        <p className="text-sm text-muted-foreground">SYSNET SAS | Jan 2024 - Present</p>
                        <ul className="list-disc list-inside text-sm mt-2 text-muted-foreground">
                          <li>Built enterprise applications with Node.js, NestJS and React</li>
                          <li>Collaborated with multidisciplinary teams</li>
                          <li>Worked with SQL Server, MongoDB and Docker</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Backend Developer</h4>
                        <p className="text-sm text-muted-foreground">INMOBI | Apr 2023 - Dec 2023</p>
                        <ul className="list-disc list-inside text-sm mt-2 text-muted-foreground">
                          <li>Designed and developed REST APIs with Express.js</li>
                          <li>Optimized SQL queries in MySQL</li>
                          <li>Implemented JWT authentication module</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-6 bg-card">
                    <h3 className="text-xl font-semibold mb-4">Skills & Education</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Technical Skills</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Node.js, Express.js, NestJS, React.js, MySQL, PostgreSQL, MongoDB, Docker
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Specialties</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          API Development, Database Optimization, Authentication Systems, Full-Stack Development
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Education</h4>
                        <p className="text-sm text-muted-foreground">Systems Engineering (8th Semester)</p>
                        <p className="text-xs text-muted-foreground">Unicolombo | Expected: 2026</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Technology in Information Systems Development
                        </p>
                        <p className="text-xs text-muted-foreground">Unicolombo | Completed: Aug 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button asChild>
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">My Work</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Check out my portfolio on Vercel to see my latest projects and designs.
              </p>

              <div className="gradient-border p-8 bg-card flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <ExternalLink className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">View My Portfolio</h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Explore my backend projects, which include microservices, REST APIs, WebSockets, and design patterns. Additionally, I have also worked on React projects, where I have implemented interactive and optimized interfaces, efficiently integrating with my backend solutions.
                </p>
                <Button asChild size="lg">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit My Vercel Profile
                  </a>
                </Button>
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Backend Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Building robust APIs and server-side applications with Node.js, Express.js, and NestJS.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Database Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Designing and optimizing databases using MySQL, PostgreSQL, MongoDB, and SQL Server.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating complete applications with React.js frontend and Node.js backend, containerized with
                    Docker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <a href="mailto:bossiolealbl@gmail.com" className="text-muted-foreground hover:text-primary">
                        bossiolealbl@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-primary" />
                      <a href="tel:+573205696581" className="text-muted-foreground hover:text-primary">
                        +57 320 569 6581
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-muted-foreground">Cartagena, Colombia</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-8 mb-6">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <Button asChild variant="outline" size="icon">
                      <a
                        href="https://github.com/StxvenDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href="mailto:bossiolealbl@gmail.com" aria-label="Email">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Steven Bossio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/StxvenDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                GitHub
              </a>
              <a href="mailto:bossiolealbl@gmail.com" className="text-muted-foreground hover:text-primary">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

