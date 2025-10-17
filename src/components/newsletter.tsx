"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-2xl bg-muted/50 p-8 text-center sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mt-6 text-balance text-2xl font-bold tracking-tight sm:text-3xl">Stay Updated</h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Subscribe to our newsletter for exclusive deals, tips, and updates
          </p>
          <form className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input type="email" placeholder="Enter your email" className="h-12 flex-1" />
            <Button type="submit" size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
