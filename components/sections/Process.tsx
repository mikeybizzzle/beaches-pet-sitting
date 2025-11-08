"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Calendar, MessageCircle, Plane } from "lucide-react"
import { staggerChildren, fadeIn } from "@/lib/animations"

const steps = [
  {
    number: "1",
    icon: Calendar,
    title: "Book Your Free Interview",
    description: "Schedule a convenient time for an in-home consultation"
  },
  {
    number: "2",
    icon: MessageCircle,
    title: "Meet & Discuss",
    description: "We'll discuss your pets' specific needs, routines, and any special requirements"
  },
  {
    number: "3",
    icon: Plane,
    title: "Relax & Travel",
    description: "Enjoy your time away knowing your pets are in expert, caring hands"
  }
]

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Getting Started is Easy"
          subtitle="Three simple steps to worry-free pet care"
        />

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-primary-200 z-0" />
              )}

              {/* Step Number Circle */}
              <div className="relative z-10 mb-6 inline-flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg">
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600 max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
