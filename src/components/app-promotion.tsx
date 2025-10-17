import { Button } from "@/components/ui/button"
import { Smartphone, Apple } from "lucide-react"

export function AppPromotion() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur">
            <Smartphone className="h-10 w-10" />
          </div>
          <h2 className="mt-8 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Get the FixItNow App</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-primary-foreground/90">
            Book services on the go, track your artisan in real-time, and manage all your bookings from one place
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              <Apple className="mr-2 h-5 w-5" />
              Download on App Store
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Get it on Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
