"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { TrustBadge } from "@/components/shared/TrustBadge"
import { GraduationCap, Award, ShieldCheck, Heart } from "lucide-react"
import { fadeIn, staggerChildren } from "@/lib/animations"

export function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <Container className="relative z-10 py-20">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            {...fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Professional In-Home Pet Care{" "}
            <span className="text-secondary-400">You Can Trust</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-2xl mb-10 text-primary-50 max-w-3xl mx-auto"
          >
            With 11+ years of professional experience and veterinary training, your pets
            receive expert care in the comfort of their own home.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToBooking}
              className="text-lg px-10 py-4"
            >
              Book Your Free Interview
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <TrustBadge icon={Award} text="11+ Years Experience" />
            <TrustBadge icon={GraduationCap} text="Veterinary Assistant Degree" />
            <TrustBadge icon={ShieldCheck} text="Fully Bondable" />
            <TrustBadge icon={Heart} text="All Small Animals Welcome" />
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
