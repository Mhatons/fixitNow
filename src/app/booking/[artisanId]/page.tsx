"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Star,
  MapPin,
  ArrowLeft,
  CalendarIcon,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  User,
  Phone,
  Mail,
  Home,
} from "lucide-react"
import Link from "next/link"

const artisanData: Record<
  string,
  {
    id: string
    name: string
    specialization: string
    rating: number
    reviews: number
    location: string
    image: string
    hourlyRate: string
    availability: string
  }
> = {
  "1": {
    id: "1",
    name: "John Martinez",
    specialization: "Master Plumber",
    rating: 4.9,
    reviews: 127,
    location: "Downtown",
    image: "https://mockmind-api.uifaces.co/content/human/92.jpg",
    hourlyRate: "$75/hour",
    availability: "Available Today",
  },
  "2": {
    id: "2",
    name: "Sarah Chen",
    specialization: "Licensed Electrician",
    rating: 5.0,
    reviews: 98,
    location: "Midtown",
    image: "https://mockmind-api.uifaces.co/content/human/217.jpg",
    hourlyRate: "$80/hour",
    availability: "Available Today",
  },
  "3": {
    id: "3",
    name: "Michael Brown",
    specialization: "Professional Painter",
    rating: 4.8,
    reviews: 156,
    location: "Uptown",
    image: "https://mockmind-api.uifaces.co/content/human/102.jpg",
    hourlyRate: "$65/hour",
    availability: "Available Tomorrow",
  },
  "4": {
    id: "4",
    name: "Emily Davis",
    specialization: "Expert Cleaner",
    rating: 4.9,
    reviews: 203,
    location: "Westside",
    image: "https://mockmind-api.uifaces.co/content/human/209.jpg",
    hourlyRate: "$55/hour",
    availability: "Available Today",
  },
  "5": {
    id: "5",
    name: "David Wilson",
    specialization: "Master Carpenter",
    rating: 5.0,
    reviews: 89,
    location: "Eastside",
    image: "https://mockmind-api.uifaces.co/content/human/99.jpg",
    hourlyRate: "$90/hour",
    availability: "Available This Week",
  },
}

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
]

export default function BookingPage({ params }: { params: { artisanId: string } }) {
  const router = useRouter()
  const artisan = artisanData[params.artisanId]

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [estimatedHours, setEstimatedHours] = useState<string>("2")
  const [serviceType, setServiceType] = useState<string>("")
  const [urgency, setUrgency] = useState<string>("standard")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Customer details
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")

  if (!artisan) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">Artisan not found</p>
            <Button className="mt-4" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const calculateTotal = () => {
    const baseRate = Number.parseInt(artisan.hourlyRate.replace(/\D/g, ""))
    const hours = Number.parseFloat(estimatedHours) || 0
    const urgencyMultiplier = urgency === "urgent" ? 1.5 : 1
    return (baseRate * hours * urgencyMultiplier).toFixed(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDate || !selectedTime || !serviceType || !agreedToTerms) {
      alert("Please fill in all required fields and agree to the terms")
      return
    }

    // Store booking data in sessionStorage
    const bookingData = {
      artisan,
      selectedDate: selectedDate.toISOString(),
      selectedTime,
      estimatedHours,
      serviceType,
      urgency,
      fullName,
      email,
      phone,
      address,
      description,
      total: calculateTotal(),
    }

    sessionStorage.setItem("bookingData", JSON.stringify(bookingData))
    router.push("/booking/confirmation")
  }

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
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/artisan/${artisan.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Profile
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
            <Link href={`/artisan/${artisan.id}`} className="hover:text-foreground">
              {artisan.name}
            </Link>
            <span>/</span>
            <span className="text-foreground">Book Service</span>
          </div>
        </div>
      </div>

      <div className="container sm:w-[85%] w-[95%] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 mt-12">
          <h1 className="text-3xl font-bold">Book Your Service</h1>
          <p className="mt-2 text-muted-foreground">Fill in the details below to schedule your appointment</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Artisan Info Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Selected Professional</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                        <p className="text-sm text-muted-foreground">{artisan.specialization}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                            <span className="text-sm font-semibold">{artisan.rating}</span>
                            <span className="text-sm text-muted-foreground">({artisan.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{artisan.location}</span>
                          </div>
                          <Badge variant="secondary">{artisan.availability}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Service Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="serviceType">
                        Service Type <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="serviceType"
                        placeholder="e.g., Pipe repair, Water heater installation"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Service Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the issue or service you need in detail..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="estimatedHours">Estimated Duration (hours)</Label>
                      <Input
                        id="estimatedHours"
                        type="number"
                        min="0.5"
                        step="0.5"
                        value={estimatedHours}
                        onChange={(e) => setEstimatedHours(e.target.value)}
                        className="mt-2"
                      />
                      <p className="mt-1 text-xs text-muted-foreground">
                        This is an estimate. Final cost will be based on actual time spent.
                      </p>
                    </div>

                    <div>
                      <Label>
                        Urgency <span className="text-destructive">*</span>
                      </Label>
                      <RadioGroup value={urgency} onValueChange={setUrgency} className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="font-normal">
                            Standard (Normal pricing)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent" className="font-normal">
                            Urgent (1.5x pricing for priority service)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>

                {/* Date & Time Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date & Time</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>
                        Preferred Date <span className="text-destructive">*</span>
                      </Label>
                      <div className="mt-2 flex justify-center">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          className="rounded-md border"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>
                        Preferred Time <span className="text-destructive">*</span>
                      </Label>
                      <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTime(time)}
                            className="w-full"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="fullName">
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative mt-2">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="fullName"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">
                          Phone Number <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative mt-2">
                          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative mt-2">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">
                        Service Address <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative mt-2">
                        <Home className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="address"
                          placeholder="123 Main St, City, State 12345"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Terms & Conditions */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the terms and conditions <span className="text-destructive">*</span>
                        </label>
                        <p className="text-sm text-muted-foreground">
                          By booking, you agree to our cancellation policy and service terms.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">
                        {selectedDate ? selectedDate.toLocaleDateString() : "Not selected"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{selectedTime || "Not selected"}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Hourly Rate:</span>
                      <span className="font-medium">{artisan.hourlyRate}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Estimated Hours:</span>
                        <span className="font-medium">{estimatedHours || "0"} hrs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Base Cost:</span>
                        <span className="font-medium">
                          $
                          {(
                            Number.parseInt(artisan.hourlyRate.replace(/\D/g, "")) *
                            (Number.parseFloat(estimatedHours) || 0)
                          ).toFixed(2)}
                        </span>
                      </div>
                      {urgency === "urgent" && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Urgent Fee (50%):</span>
                          <span className="font-medium">
                            $
                            {(
                              (Number.parseInt(artisan.hourlyRate.replace(/\D/g, "")) *
                                (Number.parseFloat(estimatedHours) || 0)) /
                              2
                            ).toFixed(2)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Estimated Total:</span>
                      <span className="text-2xl font-bold text-primary">${calculateTotal()}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Final cost may vary based on actual time and materials used
                    </p>
                  </div>

                  <div className="space-y-2 rounded-lg bg-muted/50 p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="text-xs text-muted-foreground">Verified professional</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="text-xs text-muted-foreground">Satisfaction guaranteed</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="text-xs text-muted-foreground">Free cancellation up to 24hrs</p>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Confirm Booking
                  </Button>

                  <div className="flex items-start gap-2 rounded-lg border border-border bg-background p-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      You won&apos;t be charged until the service is completed. Payment is made directly to the artisan.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
