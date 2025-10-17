import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Jessica Thompson",
    role: "Homeowner",
    image: "https://mockmind-api.uifaces.co/content/human/111.jpg",
    rating: 5,
    text: "Amazing service! The plumber arrived on time and fixed my leaking pipe in no time. Very professional and affordable.",
  },
  {
    name: "Robert Anderson",
    role: "Business Owner",
    image: "https://mockmind-api.uifaces.co/content/human/112.jpg",
    rating: 5,
    text: "I use FixItNow for all my office maintenance needs. The electricians are top-notch and the booking process is seamless.",
  },
  {
    name: "Maria Garcia",
    role: "Property Manager",
    image: "https://mockmind-api.uifaces.co/content/human/87.jpg",
    rating: 5,
    text: "Managing multiple properties is easier with FixItNow. Reliable artisans, transparent pricing, and excellent customer support.",
  },
]

export function CustomerReviews() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="container sm:w-[85%] w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Join thousands of satisfied customers who trust FixItNow
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.name} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{`"${review.text}"`}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={review.image || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
