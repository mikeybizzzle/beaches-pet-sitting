"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Star, Quote } from "lucide-react"
import { staggerChildren, fadeIn } from "@/lib/animations"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-background-light-blue">
      <Container>
        <SectionHeading
          title="What Pet Parents Say"
          subtitle="Client recommendations available upon request"
        />

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn}>
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Quote className="w-12 h-12 text-primary-200 mx-auto mb-6" />
                <p className="text-lg text-neutral-700 mb-6 italic">
                  "We value our clients' privacy and share testimonials only with permission.
                  Many satisfied pet parents have trusted us with their beloved companions.
                  References are available upon request during your free consultation."
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-secondary-500 text-secondary-500" />
                  ))}
                </div>
                <p className="text-neutral-600">
                  Contact us to speak with current and past clients
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
