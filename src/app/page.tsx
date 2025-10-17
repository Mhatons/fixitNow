"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PopularServices } from "@/components/popular-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AppPromotion } from "@/components/app-promotion"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedArtisans } from "@/components/featured-artisans"
import { Newsletter } from "@/components/newsletter"
import { CustomerReviews } from "@/components/customer-reviews"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className=" min-h-[calc(100vh-64px)]">
        <HeroSection />
        <PopularServices />
        <HowItWorks />
        <FeaturedArtisans />
        <CustomerReviews />
        <WhyChooseUs />
        <AppPromotion />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

