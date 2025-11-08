"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Moon, Heart, Stethoscope, Star } from "lucide-react"
import { staggerChildren, fadeIn } from "@/lib/animations"

const services = [
  {
    icon: Moon,
    title: "In-Home Overnight Services",
    description: "Your pets sleep soundly in their own beds with professional overnight supervision and care."
  },
  {
    icon: Heart,
    title: "All Small Animals",
    description: "Expert care for dogs, cats, birds, rabbits, and even reptiles – all pets deserve professional attention."
  },
  {
    icon: Stethoscope,
    title: "Veterinary-Trained",
    description: "Degreed Veterinary Assistant bringing medical knowledge and professional standards to pet care."
  },
  {
    icon: Star,
    title: "Customized Routines",
    description: "Every pet is unique. I follow your specific instructions to maintain comfort and routine."
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Comprehensive In-Home Pet Care Services"
          subtitle="Professional care tailored to your pet's unique needs"
        />

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full hover:shadow-card-hover transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
