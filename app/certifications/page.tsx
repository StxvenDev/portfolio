import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Calendar, ExternalLink } from "lucide-react"

export default function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      title: "Fundamentals of Data Analysis",
      issuer: "Google",
      date: "August 2023",
      description:
        "Completed Google's course on data analysis fundamentals, covering key concepts and tools for analyzing and interpreting data.",
      verificationUrl: "https://coursera.org/verify/7JE7PQU45V52",
      imageUrl: "https://res.cloudinary.com/db7o301hd/image/upload/v1742527509/Google_cert_page-0001_jeoouu.jpg",
    },
    {
      id: 2,
      title: "Intensive Software Development",
      issuer: "Universidad Tecnológica de Bolívar",
      date: "October 2022",
      description:
        "Completed an intensive software development program covering advanced Java, professional SQL, and agile methodologies.",
      imageUrl: "https://res.cloudinary.com/db7o301hd/image/upload/v1742527493/Desarrollo_Software_cert_page-0001_lvwsqz.jpg",
    },
    {
      id: 3,
      title: "Aptis English Certification",
      issuer: "British Council",
      date: "May 2024",
      description:
        "Achieved certification in English language proficiency, demonstrating competency in reading, writing, listening, and speaking.",
      imageUrl: "https://res.cloudinary.com/db7o301hd/image/upload/v1742527493/Aptis_page-0001_xxzr3o.jpg",
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h1>
            <p className="max-w-[85%] text-muted-foreground sm:text-lg">
              Professional certifications and educational achievements that demonstrate my expertise and continuous
              learning.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex flex-col md:flex-row gap-8 border-b pb-12">
                <div className="md:w-1/3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
                    <Image src={cert.imageUrl || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-2xl font-bold">{cert.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{cert.description}</p>
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

