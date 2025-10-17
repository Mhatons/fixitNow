"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Home,
  Download,
  Share2,
  MessageSquare,
  Star,
} from "lucide-react"
import Link from "next/link"

interface BookingData {
  artisan: {
    id: string
    name: string
    specialization: string
    rating: number
    reviews: number
    location: string
    image: string
    hourlyRate: string
  }
  selectedDate: string
  selectedTime: string
  estimatedHours: string
  serviceType: string
  urgency: string
  fullName: string
  email: string
  phone: string
  address: string
  description: string
  total: string
}

export default function BookingConfirmationPage() {
  const router = useRouter()
  const [bookingData, setBookingData] = useState<BookingData | null>(null)
  const [bookingId] = useState(() => `FIN-${Date.now().toString().slice(-8)}`)

  useEffect(() => {
    const data = sessionStorage.getItem("bookingData")
    if (data) {
      setBookingData(JSON.parse(data))
    } else {
      router.push("/")
    }
  }, [router])

  if (!bookingData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(bookingData.selectedDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

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
          </div>
        </div>
      </header>

      <div className="container sm:w-[85%] w-[95%] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Success Banner */}
        <div className="mb-8 text-center mt-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="mt-4 text-3xl font-bold">Booking Confirmed!</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Your service has been successfully scheduled. We&apos;ve sent a confirmation email to {bookingData.email}
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="text-base">
              Booking ID: {bookingId}
            </Badge>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Artisan Details */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Your Professional</h2>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-20 w-20 ring-2 ring-primary/10">
                      <AvatarImage
                        src={bookingData.artisan.image || "/placeholder.svg"}
                        alt={bookingData.artisan.name}
                      />
                      <AvatarFallback>
                        {bookingData.artisan.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{bookingData.artisan.name}</h3>
                      <p className="text-sm text-muted-foreground">{bookingData.artisan.specialization}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-secondary text-secondary" />
                          <span className="text-sm font-semibold">{bookingData.artisan.rating}</span>
                          <span className="text-sm text-muted-foreground">({bookingData.artisan.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{bookingData.artisan.location}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/artisan/${bookingData.artisan.id}`}>View Profile</Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Appointment Details */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Appointment Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-sm text-muted-foreground">{formattedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-sm text-muted-foreground">{bookingData.selectedTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Home className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Service Address</p>
                        <p className="text-sm text-muted-foreground">{bookingData.address}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Service Information</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service Type:</span>
                      <span className="font-medium">{bookingData.serviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Duration:</span>
                      <span className="font-medium">{bookingData.estimatedHours} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Priority:</span>
                      <Badge variant={bookingData.urgency === "urgent" ? "destructive" : "secondary"}>
                        {bookingData.urgency === "urgent" ? "Urgent" : "Standard"}
                      </Badge>
                    </div>
                    {bookingData.description && (
                      <div className="pt-2">
                        <p className="text-sm font-medium">Description:</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{bookingData.description}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Your Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">{bookingData.fullName}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">{bookingData.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">{bookingData.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Cost Summary */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Cost Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Hourly Rate:</span>
                      <span className="font-medium">{bookingData.artisan.hourlyRate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estimated Hours:</span>
                      <span className="font-medium">{bookingData.estimatedHours} hrs</span>
                    </div>
                    {bookingData.urgency === "urgent" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Urgent Fee:</span>
                        <span className="font-medium">+50%</span>
                      </div>
                    )}
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold">Estimated Total:</span>
                        <span className="text-2xl font-bold text-primary">${bookingData.total}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Final cost may vary based on actual time and materials used. Payment is due after service
                      completion.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardContent className="space-y-3 p-6">
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Receipt
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Booking
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Add to Calendar
                  </Button>
                </CardContent>
              </Card>

              {/* What's Next */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold">What&apos;s Next?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        You&apos;ll receive a confirmation email with all the details
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        The artisan will contact you 24 hours before the appointment
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        You can cancel or reschedule up to 24 hours before
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Need Help?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Our support team is here to assist you with any questions.
                  </p>
                  <Button className="w-full bg-transparent" variant="outline">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={`/booking/${bookingData.artisan.id}`}>Book Another Service</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
