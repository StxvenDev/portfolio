import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Database, Server, Globe, Terminal, GitBranch } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "NestJS", level: 90 },
        { name: "API REST", level: 90 },
        { name: "Python", level: 70 },
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 85 },
        { name: "SQL Server", level: 80 },
        { name: "Database Design", level: 80 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: [
        { name: "React.js", level: 75 },
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 80 },
        { name: "JavaScript (ES6+)", level: 90 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Docker", level: 65 },
        { name: "Git", level: 85 },
        { name: "SCRUM", level: 80 },
        { name: "Postman", level: 90 },
        { name: "Swagger", level: 85 },
      ],
    },
    {
      title: "Testing",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Jest", level: 50 },
        { name: "React Testing Library", level: 65 },
        { name: "API Testing", level: 70 },
      ],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 80 },
        { name: "GitLab", level: 75 },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">
            Steven Bossio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#work" className="text-sm font-medium transition-colors hover:text-primary">
              Work
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/certifications" className="text-sm font-medium transition-colors hover:text-primary">
              Certifications
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button size="sm" className="hidden md:flex">
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="flex flex-col gap-4">
            <Button variant="ghost" size="sm" className="w-fit" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h1>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              A comprehensive overview of my technical skills and proficiency levels in various technologies.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <div key={index} className="border rounded-lg p-6 space-y-6">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Steven Bossio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

