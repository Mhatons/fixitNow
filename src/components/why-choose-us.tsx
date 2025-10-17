import { Shield, DollarSign, Clock, ThumbsUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All artisans are background-checked and certified for your peace of mind",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees. Know exactly what you'll pay before booking",
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book services 24/7 with real-time availability and confirmation",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guarantee",
    description: "100% satisfaction guaranteed or we'll make it right",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container sm:w-[85%] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Why Choose FixItNow?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            We&apos;re committed to providing the best service experience
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
