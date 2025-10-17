import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Wrench,
  Zap,
  Paintbrush,
  Sparkles,
  Hammer,
  Wind,
  Droplet,
  Scissors,
  Star,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const serviceData: Record<
  string,
  {
    name: string
    icon: any
    description: string
    longDescription: string
    color: string
    bgColor: string
    tasks: string[]
    priceRange: string
    responseTime: string
    artisans: Array<{
      id: string
      name: string
      rating: number
      reviews: number
      location: string
      image: string
      experience: string
      hourlyRate: string
      availability: string
    }>
  }
> = {
  plumber: {
    name: "Professional Plumbing Services",
    icon: Wrench,
    description: "From leaky taps to major pipe fixes — we've got you covered",
    longDescription:
      "Our certified plumbers handle everything from minor repairs to complete plumbing installations. With years of experience and state-of-the-art equipment, we ensure your plumbing issues are resolved quickly and efficiently.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    tasks: [
      "Pipe installation and repair",
      "Faucet and fixture replacement",
      "Drain cleaning and unclogging",
      "Water heater installation",
      "Leak detection and repair",
      "Bathroom and kitchen plumbing",
    ],
    priceRange: "$50 - $150/hour",
    responseTime: "Within 2 hours",
    artisans: [
      {
        id: "1",
        name: "John Martinez",
        rating: 4.9,
        reviews: 127,
        location: "Downtown",
        image: "/professional-plumber-portrait.png",
        experience: "12 years",
        hourlyRate: "$75/hour",
        availability: "Available Today",
      },
      {
        id: "6",
        name: "Robert Taylor",
        rating: 4.8,
        reviews: 94,
        location: "Midtown",
        image: "/professional-plumber-portrait.png",
        experience: "10 years",
        hourlyRate: "$70/hour",
        availability: "Available Tomorrow",
      },
      {
        id: "7",
        name: "James Anderson",
        rating: 5.0,
        reviews: 156,
        location: "Uptown",
        image: "/professional-plumber-portrait.png",
        experience: "15 years",
        hourlyRate: "$85/hour",
        availability: "Available Today",
      },
    ],
  },
  electrician: {
    name: "Licensed Electrical Services",
    icon: Zap,
    description: "Safe and reliable electrical work for your home and office",
    longDescription:
      "Our licensed electricians provide comprehensive electrical services with a focus on safety and quality. From simple repairs to complex installations, we ensure your electrical systems are up to code and functioning perfectly.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    tasks: [
      "Electrical wiring and rewiring",
      "Circuit breaker installation",
      "Lighting installation and repair",
      "Outlet and switch replacement",
      "Electrical panel upgrades",
      "Safety inspections",
    ],
    priceRange: "$60 - $180/hour",
    responseTime: "Within 3 hours",
    artisans: [
      {
        id: "2",
        name: "Sarah Chen",
        rating: 5.0,
        reviews: 98,
        location: "Midtown",
        image: "/professional-electrician-portrait.jpg",
        experience: "8 years",
        hourlyRate: "$80/hour",
        availability: "Available Today",
      },
      {
        id: "8",
        name: "Lisa Johnson",
        rating: 4.9,
        reviews: 112,
        location: "Downtown",
        image: "/professional-electrician-portrait.jpg",
        experience: "9 years",
        hourlyRate: "$85/hour",
        availability: "Available Today",
      },
    ],
  },
  cleaner: {
    name: "Professional Cleaning Services",
    icon: Sparkles,
    description: "Spotless homes and offices, every time",
    longDescription:
      "Our professional cleaning team delivers thorough, reliable cleaning services for residential and commercial spaces. We use eco-friendly products and proven techniques to ensure your space is pristine.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    tasks: [
      "Deep cleaning services",
      "Regular maintenance cleaning",
      "Move-in/move-out cleaning",
      "Office cleaning",
      "Carpet and upholstery cleaning",
      "Window cleaning",
    ],
    priceRange: "$40 - $100/hour",
    responseTime: "Same day available",
    artisans: [
      {
        id: "4",
        name: "Emily Davis",
        rating: 4.9,
        reviews: 203,
        location: "Westside",
        image: "/professional-cleaner-portrait.png",
        experience: "6 years",
        hourlyRate: "$55/hour",
        availability: "Available Today",
      },
    ],
  },
  painter: {
    name: "Expert Painting Services",
    icon: Paintbrush,
    description: "Transform your space with professional painting",
    longDescription:
      "Our skilled painters bring color and life to your spaces with precision and care. Whether it's interior or exterior painting, we deliver flawless finishes that last.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    tasks: [
      "Interior painting",
      "Exterior painting",
      "Wall preparation and repair",
      "Cabinet refinishing",
      "Decorative finishes",
      "Color consultation",
    ],
    priceRange: "$45 - $120/hour",
    responseTime: "Within 24 hours",
    artisans: [
      {
        id: "3",
        name: "Michael Brown",
        rating: 4.8,
        reviews: 156,
        location: "Uptown",
        image: "/professional-painter-portrait.png",
        experience: "15 years",
        hourlyRate: "$65/hour",
        availability: "Available Tomorrow",
      },
    ],
  },
  carpenter: {
    name: "Master Carpentry Services",
    icon: Hammer,
    description: "Custom woodwork and furniture solutions",
    longDescription:
      "Our master carpenters create beautiful, functional woodwork tailored to your needs. From custom furniture to structural repairs, we deliver craftsmanship that stands the test of time.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    tasks: [
      "Custom furniture building",
      "Cabinet installation",
      "Door and window installation",
      "Deck and fence construction",
      "Trim and molding work",
      "Furniture repair and restoration",
    ],
    priceRange: "$55 - $140/hour",
    responseTime: "Within 24 hours",
    artisans: [
      {
        id: "5",
        name: "David Wilson",
        rating: 5.0,
        reviews: 89,
        location: "Eastside",
        image: "/professional-carpenter-portrait.png",
        experience: "20 years",
        hourlyRate: "$90/hour",
        availability: "Available This Week",
      },
    ],
  },
  "ac-repairer": {
    name: "AC Repair & Maintenance",
    icon: Wind,
    description: "Keep your space cool and comfortable",
    longDescription:
      "Our HVAC specialists provide comprehensive air conditioning services to keep your home or office comfortable year-round. From routine maintenance to emergency repairs, we've got you covered.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    tasks: [
      "AC installation",
      "AC repair and troubleshooting",
      "Regular maintenance",
      "Filter replacement",
      "Duct cleaning",
      "Thermostat installation",
    ],
    priceRange: "$60 - $160/hour",
    responseTime: "Within 4 hours",
    artisans: [
      {
        id: "9",
        name: "Carlos Rodriguez",
        rating: 4.9,
        reviews: 134,
        location: "Downtown",
        image: "/professional-ac-technician-portrait.jpg",
        experience: "11 years",
        hourlyRate: "$80/hour",
        availability: "Available Today",
      },
    ],
  },
  handyman: {
    name: "General Handyman Services",
    icon: Droplet,
    description: "Your go-to for all home repairs and maintenance",
    longDescription:
      "Our versatile handymen handle a wide range of home repair and maintenance tasks. No job is too small, and we're equipped to tackle multiple issues in a single visit.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    tasks: [
      "General repairs",
      "Furniture assembly",
      "Drywall repair",
      "Minor plumbing fixes",
      "Minor electrical work",
      "Home maintenance",
    ],
    priceRange: "$40 - $90/hour",
    responseTime: "Same day available",
    artisans: [
      {
        id: "10",
        name: "Tom Harris",
        rating: 4.8,
        reviews: 178,
        location: "Midtown",
        image: "/professional-handyman.png",
        experience: "14 years",
        hourlyRate: "$60/hour",
        availability: "Available Today",
      },
    ],
  },
  gardener: {
    name: "Professional Gardening Services",
    icon: Scissors,
    description: "Beautiful lawns and gardens, expertly maintained",
    longDescription:
      "Our experienced gardeners provide comprehensive lawn care and garden maintenance services. We help you create and maintain beautiful outdoor spaces that enhance your property.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    tasks: [
      "Lawn mowing and edging",
      "Garden design and planting",
      "Tree and shrub trimming",
      "Weed control",
      "Fertilization and soil care",
      "Seasonal cleanup",
    ],
    priceRange: "$35 - $80/hour",
    responseTime: "Within 48 hours",
    artisans: [
      {
        id: "11",
        name: "Maria Garcia",
        rating: 5.0,
        reviews: 145,
        location: "Westside",
        image: "/professional-gardener-portrait.png",
        experience: "13 years",
        hourlyRate: "$50/hour",
        availability: "Available This Week",
      },
    ],
  },
}

export default function ServiceDetailPage({ params }: { params: { category: string } }) {
  const service = serviceData[params.category]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-foreground">
              Services
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.bgColor}`}>
                <Icon className={`h-8 w-8 ${service.color}`} />
              </div>
              <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">{service.name}</h1>
              <p className="mt-4 text-pretty text-xl text-muted-foreground">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{service.responseTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Verified Professionals</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Book a Professional Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={`/.jpg?height=400&width=600&query=${service.name} professional at work`}
                alt={service.name}
                width={500}
                height={400}
                className="h-full w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Service */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold">About This Service</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{service.longDescription}</p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold">What&apos;s Included</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold">Service Details</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Price Range</p>
                      <p className="mt-1 font-semibold">{service.priceRange}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response Time</p>
                      <p className="mt-1 font-semibold">{service.responseTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Available Artisans</p>
                      <p className="mt-1 font-semibold">{service.artisans.length} professionals</p>
                    </div>
                  </div>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Available Artisans */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Available Professionals</h2>
            <p className="mt-2 text-muted-foreground">Choose from our verified and top-rated artisans</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.artisans.map((artisan) => (
              <Card key={artisan.id} className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16 ring-2 ring-primary/10">
                      <AvatarImage src={artisan.image || "/placeholder.svg"} alt={artisan.name} />
                      <AvatarFallback>
                        {artisan.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{artisan.name}</h3>
                      <div className="mt-1 flex items-center gap-1">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="text-sm font-semibold">{artisan.rating}</span>
                        <span className="text-sm text-muted-foreground">({artisan.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{artisan.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">{artisan.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-medium">{artisan.hourlyRate}</span>
                    </div>
                  </div>

                  <Badge variant="secondary" className="mt-3">
                    {artisan.availability}
                  </Badge>

                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <Link href={`/artisan/${artisan.id}`}>View Profile</Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/booking/${artisan.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold">How do I book a service?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Simply browse available artisans, select your preferred professional, choose a date and time, and
                  confirm your booking. You&apos;ll receive instant confirmation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold">What if I need to cancel or reschedule?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  You can cancel or reschedule up to 24 hours before your appointment without any charges. Contact our
                  support team for assistance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold">Are the artisans verified?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Yes, all our artisans go through a thorough verification process including background checks, skill
                  assessments, and customer reviews.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold">How is pricing determined?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Pricing is transparent and upfront. You&apos;ll see the hourly rate before booking, and the final cost
                  depends on the time spent and materials used.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="border-t border-border bg-primary py-12 text-primary-foreground sm:py-16">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">Need Help Fast?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/90">
            Our professionals are ready to help you. Book now and get your issues resolved quickly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Book a Professional
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
