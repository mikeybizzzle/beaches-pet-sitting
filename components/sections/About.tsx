"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { CheckCircle2 } from "lucide-react"
import { fadeIn } from "@/lib/animations"

const credentials = [
  "Degreed Veterinary Assistant",
  "11+ Years Professional Experience",
  "Fully Bondable & Insured",
  "Expert in Small Animal Care",
  "Reptile Care Specialist",
  "Client References Available"
]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background-light-blue">
      <Container>
        <SectionHeading
          title="Professional Care from a Trusted Expert"
          subtitle="Compassionate, knowledgeable care that gives you complete peace of mind"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            {...fadeIn}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                Hi, I&apos;m dedicated to animal care and welfare. With my Veterinary Assistant
                degree and over 11 years of hands-on professional experience, I understand
                that leaving your pets is never easy. That&apos;s why I founded Beaches Pet Sitting –
                to provide the kind of knowledgeable, compassionate care that gives you complete
                peace of mind while you&apos;re away.
              </p>
              <p>
                As a mature, reliable professional who is fully bondable, I treat every pet as
                if they were my own. Whether it&apos;s administering medications, maintaining special
                diets, or simply providing companionship and TLC, your pets receive the
                individualized attention they deserve.
              </p>
              <p>
                My expertise extends to all small animals, including those with special needs.
                From playful puppies to senior cats, from rabbits to reptiles, I have the
                knowledge and experience to ensure their safety, health, and happiness.
              </p>
            </div>
          </motion.div>

          {/* Credentials Box */}
          <motion.div
            {...fadeIn}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-card p-8 border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Professional Credentials
              </h3>
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-neutral-700">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
