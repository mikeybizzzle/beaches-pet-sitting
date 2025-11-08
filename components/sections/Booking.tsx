"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { Phone, Mail, Calendar } from "lucide-react"
import { fadeIn, staggerChildren } from "@/lib/animations"

export function Booking() {
  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
      <Container>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            {...fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to Book Your Free Interview?
          </motion.h2>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 text-primary-50"
          >
            Let&apos;s discuss how I can keep your pets happy and healthy while you&apos;re away
          </motion.p>

          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-lg mb-10 text-primary-100"
          >
            Take the first step toward worry-free travel. Schedule your complimentary
            in-home consultation today.
          </motion.p>

          {/* Calendar Placeholder */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20"
          >
            <Calendar className="w-16 h-16 mx-auto mb-4 text-secondary-400" />
            <p className="text-lg mb-4">Calendar booking integration will be added here</p>
            <p className="text-sm text-primary-100">(Calendly, Cal.com, or custom solution)</p>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-lg font-semibold mb-4">Or contact me directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+1234567890">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href="mailto:info@beachespetsitting.com">
                <Button variant="outline" size="lg" className="gap-2 bg-white/10 border-white text-white hover:bg-white hover:text-primary-600">
                  <Mail className="w-5 h-5" />
                  Email Me
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
