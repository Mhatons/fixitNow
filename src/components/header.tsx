"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container sm:w-[85%] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <span className="text-xl font-bold text-primary-foreground">F</span>
            </div>
            <span className="text-xl font-bold">FixItNow</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              How It Works
            </a>
            <a
              href="#artisans"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Find Artisans
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              About
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Become an Artisan
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium">
                Services
              </a>
              <a href="#how-it-works" className="text-sm font-medium">
                How It Works
              </a>
              <a href="#artisans" className="text-sm font-medium">
                Find Artisans
              </a>
              <a href="#about" className="text-sm font-medium">
                About
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Become an Artisan
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
