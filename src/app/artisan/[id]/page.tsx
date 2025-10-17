import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  Shield,
  Award,
  Briefcase,
  Calendar,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const artisanData: Record<
  string,
  {
    id: string
    name: string
    specialization: string
    rating: number
    reviews: number
    location: string
    image: string
    experience: string
    hourlyRate: string
    availability: string
    bio: string
    skills: string[]
    certifications: string[]
    completedJobs: number
    responseTime: string
    languages: string[]
    serviceAreas: string[]
    testimonials: Array<{
      name: string
      rating: number
      date: string
      comment: string
      service: string
    }>
    portfolio: Array<{
      title: string
      description: string
      image: string
    }>
  }
> = {
  "1": {
    id: "1",
    name: "John Martinez",
    specialization: "Master Plumber",
    rating: 4.9,
    reviews: 127,
    location: "Downtown",
    image: "https://mockmind-api.uifaces.co/content/human/92.jpg",
    experience: "12 years",
    hourlyRate: "$75/hour",
    availability: "Available Today",
    bio: "With over 12 years of experience in residential and commercial plumbing, I take pride in delivering high-quality workmanship and excellent customer service. I specialize in complex pipe installations, water heater repairs, and emergency plumbing services. My goal is to solve your plumbing issues efficiently while ensuring long-lasting results.",
    skills: [
      "Pipe Installation & Repair",
      "Water Heater Services",
      "Drain Cleaning",
      "Leak Detection",
      "Bathroom Plumbing",
      "Kitchen Plumbing",
      "Emergency Services",
      "Sewer Line Repair",
    ],
    certifications: ["Licensed Master Plumber", "EPA Certified", "OSHA Safety Certified", "Backflow Prevention"],
    completedJobs: 450,
    responseTime: "Within 2 hours",
    languages: ["English", "Spanish"],
    serviceAreas: ["Downtown", "Midtown", "Uptown", "Westside"],
    testimonials: [
      {
        name: "Sarah Johnson",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "John was fantastic! He fixed our leaking pipe quickly and explained everything clearly. Very professional and reasonably priced. Highly recommend!",
        service: "Pipe Repair",
      },
      {
        name: "Michael Chen",
        rating: 5,
        date: "1 month ago",
        comment:
          "Excellent service! John installed our new water heater efficiently and cleaned up perfectly. He's now our go-to plumber.",
        service: "Water Heater Installation",
      },
      {
        name: "Emily Rodriguez",
        rating: 4,
        date: "2 months ago",
        comment:
          "Very knowledgeable and professional. Fixed our drain issue and gave us helpful maintenance tips. Will definitely call again.",
        service: "Drain Cleaning",
      },
    ],
    portfolio: [
      {
        title: "Complete Bathroom Renovation",
        description: "Full plumbing installation for luxury bathroom remodel including fixtures and piping",
        image: "/modern-bathroom-plumbing.png",
      },
      {
        title: "Commercial Kitchen Setup",
        description: "Industrial plumbing system for restaurant kitchen with multiple stations",
        image: "/commercial-kitchen-plumbing.jpg",
      },
      {
        title: "Water Heater Replacement",
        description: "Tankless water heater installation with upgraded piping system",
        image: "/tankless-water-heater-installation.png",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Sarah Chen",
    specialization: "Licensed Electrician",
    rating: 5.0,
    reviews: 98,
    location: "Midtown",
    image: "https://mockmind-api.uifaces.co/content/human/217.jpg",
    experience: "8 years",
    hourlyRate: "$80/hour",
    availability: "Available Today",
    bio: "As a licensed electrician with 8 years of experience, I specialize in residential and commercial electrical work. Safety is my top priority, and I ensure all work meets or exceeds code requirements. From simple repairs to complete rewiring projects, I deliver reliable and professional electrical services.",
    skills: [
      "Electrical Wiring",
      "Panel Upgrades",
      "Lighting Installation",
      "Circuit Breaker Repair",
      "Outlet Installation",
      "Smart Home Integration",
      "Electrical Inspections",
      "Generator Installation",
    ],
    certifications: ["Licensed Electrician", "Master Electrician", "Low Voltage Certified", "Solar Installation"],
    completedJobs: 380,
    responseTime: "Within 3 hours",
    languages: ["English", "Mandarin"],
    serviceAreas: ["Midtown", "Downtown", "Eastside"],
    testimonials: [
      {
        name: "David Wilson",
        rating: 5,
        date: "1 week ago",
        comment:
          "Sarah did an amazing job upgrading our electrical panel. Very thorough and professional. Explained everything clearly.",
        service: "Panel Upgrade",
      },
      {
        name: "Lisa Thompson",
        rating: 5,
        date: "3 weeks ago",
        comment: "Excellent work installing our new lighting system. Sarah was punctual, clean, and very skilled.",
        service: "Lighting Installation",
      },
    ],
    portfolio: [
      {
        title: "Smart Home Electrical Setup",
        description: "Complete smart home wiring with automated lighting and security systems",
        image: "/smart-home-electrical-wiring.jpg",
      },
      {
        title: "Commercial Office Rewiring",
        description: "Full electrical system upgrade for 5000 sq ft office space",
        image: "/commercial-office-electrical-work.jpg",
      },
    ],
  },
  "3": {
    id: "3",
    name: "Michael Brown",
    specialization: "Professional Painter",
    rating: 4.8,
    reviews: 156,
    location: "Uptown",
    image: "https://mockmind-api.uifaces.co/content/human/102.jpg",
    experience: "15 years",
    hourlyRate: "$65/hour",
    availability: "Available Tomorrow",
    bio: "With 15 years of painting experience, I transform spaces with precision and care. I specialize in both interior and exterior painting, using premium materials and proven techniques. My attention to detail and commitment to customer satisfaction have earned me a reputation for excellence.",
    skills: [
      "Interior Painting",
      "Exterior Painting",
      "Cabinet Refinishing",
      "Wall Preparation",
      "Decorative Finishes",
      "Color Consultation",
      "Wallpaper Removal",
      "Pressure Washing",
    ],
    certifications: ["Professional Painter Certification", "Lead-Safe Certified", "OSHA Safety Training"],
    completedJobs: 520,
    responseTime: "Within 24 hours",
    languages: ["English"],
    serviceAreas: ["Uptown", "Westside", "Downtown"],
    testimonials: [
      {
        name: "Jennifer Adams",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Michael painted our entire house and it looks amazing! Very professional and the quality is outstanding.",
        service: "Interior Painting",
      },
      {
        name: "Robert Lee",
        rating: 5,
        date: "1 month ago",
        comment: "Great work on our exterior painting. Michael was reliable and the finish is perfect.",
        service: "Exterior Painting",
      },
    ],
    portfolio: [
      {
        title: "Victorian Home Restoration",
        description: "Complete exterior painting with historical color matching",
        image: "/victorian-house-exterior-painting.jpg",
      },
      {
        title: "Modern Living Room Makeover",
        description: "Interior painting with accent walls and decorative finishes",
        image: "/modern-living-room-painted.jpg",
      },
    ],
  },
  "4": {
    id: "4",
    name: "Emily Davis",
    specialization: "Expert Cleaner",
    rating: 4.9,
    reviews: 203,
    location: "Westside",
    image: "https://mockmind-api.uifaces.co/content/human/209.jpg",
    experience: "6 years",
    hourlyRate: "$55/hour",
    availability: "Available Today",
    bio: "I provide thorough, reliable cleaning services for homes and offices. With 6 years of experience and a keen eye for detail, I ensure every space is spotless. I use eco-friendly products and customize my services to meet each client's specific needs.",
    skills: [
      "Deep Cleaning",
      "Regular Maintenance",
      "Move-in/Move-out Cleaning",
      "Office Cleaning",
      "Carpet Cleaning",
      "Window Cleaning",
      "Kitchen Sanitization",
      "Bathroom Cleaning",
    ],
    certifications: ["Professional Cleaning Certification", "Green Cleaning Certified", "OSHA Safety Training"],
    completedJobs: 680,
    responseTime: "Same day available",
    languages: ["English"],
    serviceAreas: ["Westside", "Downtown", "Midtown"],
    testimonials: [
      {
        name: "Amanda White",
        rating: 5,
        date: "1 week ago",
        comment: "Emily is amazing! Our house has never been cleaner. She's thorough, reliable, and very professional.",
        service: "Deep Cleaning",
      },
      {
        name: "James Miller",
        rating: 5,
        date: "2 weeks ago",
        comment: "Excellent service for our office. Emily is consistent and does a fantastic job every time.",
        service: "Office Cleaning",
      },
    ],
    portfolio: [
      {
        title: "Post-Construction Cleanup",
        description: "Complete deep cleaning after home renovation",
        image: "/post-construction-cleaning.png",
      },
      {
        title: "Corporate Office Maintenance",
        description: "Regular cleaning services for 10,000 sq ft office space",
        image: "/clean-modern-office.png",
      },
    ],
  },
  "5": {
    id: "5",
    name: "David Wilson",
    specialization: "Master Carpenter",
    rating: 5.0,
    reviews: 89,
    location: "Eastside",
    image: "https://mockmind-api.uifaces.co/content/human/99.jpg",
    experience: "20 years",
    hourlyRate: "$90/hour",
    availability: "Available This Week",
    bio: "With 20 years of carpentry experience, I create custom woodwork that combines functionality with beauty. From built-in cabinets to custom furniture, I take pride in delivering exceptional craftsmanship. Every project receives my full attention to detail and commitment to quality.",
    skills: [
      "Custom Furniture",
      "Cabinet Making",
      "Trim & Molding",
      "Deck Construction",
      "Door Installation",
      "Window Installation",
      "Furniture Repair",
      "Wood Finishing",
    ],
    certifications: ["Master Carpenter Certification", "OSHA Safety Certified", "Fine Woodworking Certificate"],
    completedJobs: 320,
    responseTime: "Within 24 hours",
    languages: ["English"],
    serviceAreas: ["Eastside", "Uptown", "Midtown"],
    testimonials: [
      {
        name: "Patricia Garcia",
        rating: 5,
        date: "3 weeks ago",
        comment: "David built custom cabinets for our kitchen and they're absolutely beautiful. True craftsmanship!",
        service: "Custom Cabinets",
      },
      {
        name: "Thomas Anderson",
        rating: 5,
        date: "1 month ago",
        comment:
          "Outstanding work on our deck. David is a true professional and his attention to detail is impressive.",
        service: "Deck Construction",
      },
    ],
    portfolio: [
      {
        title: "Custom Kitchen Cabinets",
        description: "Handcrafted oak cabinets with soft-close hardware",
        image: "/custom-kitchen-cabinets.jpg",
      },
      {
        title: "Built-in Library Shelving",
        description: "Floor-to-ceiling custom bookshelf with ladder",
        image: "/built-in-library-shelves.jpg",
      },
    ],
  },
}

export default function ArtisanProfilePage({ params }: { params: { id: string } }) {
  const artisan = artisanData[params.id]

  if (!artisan) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container sm:w-[85%] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="text-xl font-bold text-primary-foreground">F</span>
              </div>
              <span className="text-xl font-bold">FixItNow</span>
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Profile Header */}
      <section className="border-b mt-8 border-border bg-gradient-to-b from-muted/50 to-background py-8 sm:py-12">
        <div className=" sm:w-[85%] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Avatar className="h-32 w-32 ring-4 ring-primary/10">
                  <AvatarImage src={artisan.image || "/placeholder.svg"} alt={artisan.name} />
                  <AvatarFallback className="text-2xl">
                    {artisan.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold">{artisan.name}</h1>
                      <p className="mt-1 text-lg text-muted-foreground">{artisan.specialization}</p>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {artisan.availability}
                    </Badge>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-secondary text-secondary" />
                      <span className="font-semibold">{artisan.rating}</span>
                      <span className="text-sm text-muted-foreground">({artisan.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>{artisan.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-5 w-5" />
                      <span>{artisan.experience} experience</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Shield className="h-3 w-3" />
                      Verified Professional
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Award className="h-3 w-3" />
                      Top Rated
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      {artisan.completedJobs}+ Jobs Completed
                    </Badge>
                  </div>

                  <p className="mt-4 leading-relaxed text-muted-foreground">{artisan.bio}</p>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Hourly Rate</p>
                      <p className="mt-1 text-2xl font-bold">{artisan.hourlyRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="mt-1 font-semibold">{artisan.responseTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Languages</p>
                      <p className="mt-1 font-semibold">{artisan.languages.join(", ")}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <Button className="w-full" size="lg" asChild>
                      <Link href={`/booking/${artisan.id}`}>Book Now</Link>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>

                  <div className="mt-6 space-y-2 border-t border-border pt-4">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 sm:py-12">
        <div className="sm:w-[85%] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <Award className="h-5 w-5 text-primary" />
                      Skills & Expertise
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {artisan.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <Shield className="h-5 w-5 text-primary" />
                      Certifications
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {artisan.certifications.map((cert) => (
                        <li key={cert} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-sm">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <MapPin className="h-5 w-5 text-primary" />
                      Service Areas
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {artisan.serviceAreas.map((area) => (
                        <Badge key={area} variant="outline">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Experience Highlights
                    </h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Years of Experience</span>
                        <span className="font-semibold">{artisan.experience}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Jobs Completed</span>
                        <span className="font-semibold">{artisan.completedJobs}+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Average Rating</span>
                        <span className="font-semibold">{artisan.rating} / 5.0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                {artisan.testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                      </div>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{testimonial.comment}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{testimonial.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {artisan.portfolio.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                      <Image
                        src={artisan.image}
                        alt={artisan.name}
                        width={500}
                        height={400}
                        className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">About {artisan.name}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{artisan.bio}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-semibold">Professional Background</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {artisan.name} has been working in the {artisan.specialization.toLowerCase()} field for{" "}
                        {artisan.experience}, completing over {artisan.completedJobs} successful projects. Their
                        commitment to quality and customer satisfaction has earned them a {artisan.rating}-star rating.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Work Philosophy</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Every project is approached with professionalism, attention to detail, and a commitment to
                        exceeding client expectations. Quality workmanship and clear communication are the foundation of
                        every job.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl">Ready to Book {artisan.name}?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-muted-foreground">
            Schedule your service today and experience professional quality work
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={`/booking/${artisan.id}`}>
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <MessageSquare className="mr-2 h-5 w-5" />
              Ask a Question
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
