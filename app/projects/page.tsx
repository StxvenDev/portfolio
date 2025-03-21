import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
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
            <Link href="/#process" className="text-sm font-medium transition-colors hover:text-primary">
              Process
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">All Projects</h1>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              A collection of my work across various industries and design challenges.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/api-development" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="REST API Development"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">REST API Development</h3>
                <p className="mt-2 text-muted-foreground">
                  Designed and implemented RESTful APIs with Express.js for a property management system.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Node.js</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Express.js</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">MySQL</div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/authentication-system" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Authentication System"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Authentication System</h3>
                <p className="mt-2 text-muted-foreground">
                  Implemented a secure JWT authentication module that enhanced system security.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">JWT</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Node.js</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Security</div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/enterprise-application" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Enterprise Application"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Enterprise Application</h3>
                <p className="mt-2 text-muted-foreground">
                  Built a scalable enterprise application using NestJS with modular architecture.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">NestJS</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">TypeScript</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">MongoDB</div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/database-optimization" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Database Optimization"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Database Optimization</h3>
                <p className="mt-2 text-muted-foreground">
                  Optimized database queries and normalized data structure to improve application performance.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">SQL</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">MySQL</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Performance</div>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/docker-deployment" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Docker Deployment"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Docker Deployment</h3>
                <p className="mt-2 text-muted-foreground">
                  Containerized applications using Docker for consistent deployment across environments.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Docker</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">DevOps</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">CI/CD</div>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <Link href="/projects/full-stack-app" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=450&width=720"
                  alt="Full-Stack Application"
                  width={720}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Full-Stack Application</h3>
                <p className="mt-2 text-muted-foreground">
                  Developed a complete application with React frontend and Node.js backend for business management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">React</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">Node.js</div>
                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">PostgreSQL</div>
                </div>
              </div>
            </div>
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

