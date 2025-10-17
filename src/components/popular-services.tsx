import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Zap, Paintbrush, Sparkles, Hammer, Wind, Droplet, Scissors } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    name: "Plumber",
    description: "Fix leaks, install pipes, and handle all plumbing needs",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Zap,
    name: "Electrician",
    description: "Wiring, repairs, and electrical installations",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Sparkles,
    name: "Cleaner",
    description: "Professional cleaning for homes and offices",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Paintbrush,
    name: "Painter",
    description: "Interior and exterior painting services",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Hammer,
    name: "Carpenter",
    description: "Custom furniture and woodwork solutions",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Wind,
    name: "AC Repairer",
    description: "AC installation, maintenance, and repairs",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Droplet,
    name: "Handyman",
    description: "General repairs and maintenance services",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Scissors,
    name: "Gardener",
    description: "Lawn care and garden maintenance",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
]

const serviceLinks: Record<string, string> = {
  Plumber: "/service/plumber",
  Electrician: "/service/electrician",
  Cleaner: "/service/cleaner",
  Painter: "/service/painter",
  Carpenter: "/service/carpenter",
  "AC Repairer": "/service/ac-repairer",
  Handyman: "/service/handyman",
  Gardener: "/service/gardener",
}

export function PopularServices() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container sm:w-[85%] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Popular Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Find the right professional for any job around your home or office
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.name}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.bgColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <Button variant="link" className="mt-4 h-auto p-0 text-primary" asChild>
                    <Link href={serviceLinks[service.name] || "#"}>Book Now →</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
