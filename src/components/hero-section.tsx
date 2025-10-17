"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 sm:w-[85%] w-[95%] mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
              Book Reliable Artisans <span className="text-primary">Anytime, Anywhere</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              FixItNow connects you with skilled and trusted professionals for all your home and office needs.
            </p>

            <div className="mt-10 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your location"
                    className="h-12 pl-10 pr-4 transition-all hover:shadow-md focus:shadow-lg"
                  />
                </div>
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for a service"
                    className="h-12 pl-10 pr-4 transition-all hover:shadow-md focus:shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-700">
              <Button size="lg" className="w-full sm:w-auto transition-all hover:scale-105 hover:shadow-lg">
                Find an Artisan
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 sm:w-auto transition-all hover:scale-105 hover:shadow-lg"
              >
                Become an Artisan
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-[900ms]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20 hover:scale-110">
                  <span className="text-lg font-bold text-primary">✓</span>
                </div>
                <span>Verified Professionals</span>
              </div>
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-[1000ms]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20 hover:scale-110">
                  <span className="text-lg font-bold text-primary">✓</span>
                </div>
                <span>Instant Booking</span>
              </div>
              <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-[1100ms]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/20 hover:scale-110">
                  <span className="text-lg font-bold text-primary">✓</span>
                </div>
                <span>Upfront Pricing</span>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl lg:aspect-auto lg:h-[600px]">
              <Image
                src="/images/emmanuel-ikwuegbu-zWOgsj3j0wA-unsplash.jpg"
                alt="Professional artisan with tools"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute bottom-8 left-8 rounded-2xl bg-background/95 p-4 shadow-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="text-xl font-bold">5.0</span>
                  </div>
                  <div>
                    <p className="font-semibold">Trusted by 10,000+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/20 blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  )
}
