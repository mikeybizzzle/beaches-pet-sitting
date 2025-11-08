"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Check } from "lucide-react"
import { staggerChildren, fadeIn } from "@/lib/animations"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Full Day Care",
    price: "$125",
    duration: "24 hours",
    featured: false,
    includes: [
      "Overnight supervision",
      "All meals & medications",
      "Walks & playtime",
      "Continuous care & monitoring"
    ]
  },
  {
    name: "Free Consultation",
    price: "FREE",
    duration: "Always",
    featured: true,
    includes: [
      "In-home meeting",
      "Discuss pet routines",
      "Tour of home & supplies",
      "Answer all questions",
      "No obligation"
    ]
  },
  {
    name: "Half Day Care",
    price: "$75",
    duration: "12 hours",
    featured: false,
    includes: [
      "Daytime or evening care",
      "Feeding & medications",
      "Walks & activities",
      "Professional supervision"
    ]
  }
]

export function Pricing() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-background-light-blue">
      <Container>
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Professional pet care at reasonable rates"
        />

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className={cn(
                "h-full flex flex-col",
                plan.featured && "border-2 border-secondary-500 shadow-xl relative"
              )}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                  </div>
                  <p className="text-neutral-600">{plan.duration}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.featured ? "secondary" : "default"}
                    className="w-full"
                    onClick={scrollToBooking}
                  >
                    {plan.featured ? "Schedule Free Interview" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
