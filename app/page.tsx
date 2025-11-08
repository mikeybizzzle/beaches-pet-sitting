import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { About } from "@/components/sections/About"
import { WhyInHome } from "@/components/sections/WhyInHome"
import { Pricing } from "@/components/sections/Pricing"
import { Process } from "@/components/sections/Process"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { Booking } from "@/components/sections/Booking"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <WhyInHome />
      <Pricing />
      <Process />
      <Testimonials />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  )
}
