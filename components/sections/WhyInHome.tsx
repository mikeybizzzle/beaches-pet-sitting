"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Home, Clock, Heart, Shield, Activity, Users } from "lucide-react"
import { staggerChildren, fadeIn } from "@/lib/animations"

const benefits = [
  {
    icon: Home,
    title: "Comfort & Familiarity",
    description: "Pets stay in their own environment, reducing stress and anxiety"
  },
  {
    icon: Clock,
    title: "Maintained Routines",
    description: "Regular feeding times, walks, and play schedules continue uninterrupted"
  },
  {
    icon: Heart,
    title: "One-on-One Attention",
    description: "Your pets receive dedicated, personalized care"
  },
  {
    icon: Shield,
    title: "Home Security",
    description: "Your home appears occupied with mail collection and light rotation"
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Professional observation for any health changes or concerns"
  },
  {
    icon: Users,
    title: "No Exposure Risks",
    description: "Avoid illnesses from other animals in kennel settings"
  }
]

export function WhyInHome() {
  return (
    <section id="why-in-home" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          title="The Benefits of In-Home Pet Sitting"
          subtitle="Why your pets thrive with professional in-home care"
        />

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
