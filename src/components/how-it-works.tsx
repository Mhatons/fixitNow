import { Search, Calendar, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Search for a Service",
    description: "Browse our wide range of services and find the perfect artisan for your needs",
    step: "01",
  },
  {
    icon: Calendar,
    title: "Book Instantly or Schedule",
    description: "Choose a time that works for you and book with just a few clicks",
    step: "02",
  },
  {
    icon: CheckCircle,
    title: "Relax, We Fix It!",
    description: "Our verified professionals arrive on time and get the job done right",
    step: "03",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-16 sm:py-24">
      <div className="container sm:w-[85%] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Get your repairs done in three simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border md:block" />
                )}
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <Icon className="h-10 w-10" />
                  <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                    {step.step}
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
