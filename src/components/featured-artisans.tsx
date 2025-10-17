"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const artisans = [
  {
    id: "1",
    name: "John Martinez",
    specialization: "Master Plumber",
    rating: 4.9,
    reviews: 127,
    location: "Downtown",
    image: "https://mockmind-api.uifaces.co/content/human/92.jpg",
    experience: "12 years",
  },
  {
    id: "2",
    name: "Sarah Chen",
    specialization: "Licensed Electrician",
    rating: 5.0,
    reviews: 98,
    location: "Midtown",
    image: "https://mockmind-api.uifaces.co/content/human/217.jpg",
    experience: "8 years",
  },
  {
    id: "3",
    name: "Michael Brown",
    specialization: "Professional Painter",
    rating: 4.8,
    reviews: 156,
    location: "Uptown",
    image: "https://mockmind-api.uifaces.co/content/human/102.jpg",
    experience: "15 years",
  },
  {
    id: "4",
    name: "Emily Davis",
    specialization: "Expert Cleaner",
    rating: 4.9,
    reviews: 203,
    location: "Westside",
    image: "https://mockmind-api.uifaces.co/content/human/209.jpg",
    experience: "6 years",
  },
  {
    id: "5",
    name: "David Wilson",
    specialization: "Master Carpenter",
    rating: 5.0,
    reviews: 89,
    location: "Eastside",
    image: "https://mockmind-api.uifaces.co/content/human/99.jpg",
    experience: "20 years",
  },
]

export function FeaturedArtisans() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artisans.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artisans.length) % artisans.length)
  }

  return (
    <section id="artisans" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Featured Artisans</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Meet our top-rated professionals ready to help you
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {artisans.map((artisan) => (
              <Card key={artisan.id} className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 ring-2 ring-primary/10 transition-transform duration-300 group-hover:scale-110">
                      <AvatarImage src={artisan.image || "/placeholder.svg"} alt={artisan.name} />
                      <AvatarFallback>
                        {artisan.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-semibold">{artisan.name}</h3>
                    <p className="text-sm text-muted-foreground">{artisan.specialization}</p>
                    <div className="mt-3 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="font-semibold">{artisan.rating}</span>
                      <span className="text-sm text-muted-foreground">({artisan.reviews})</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{artisan.location}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{artisan.experience} experience</p>
                    <Button className="mt-4 w-full" size="sm" asChild>
                      <Link href={`/artisan/${artisan.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
