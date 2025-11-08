"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { fadeIn } from "@/lib/animations"

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "I provide in-home pet sitting services throughout the Beaches area and surrounding neighborhoods. Contact me to confirm service to your location."
  },
  {
    question: "What types of pets do you care for?",
    answer: "I care for all small animals including dogs, cats, birds, rabbits, guinea pigs, hamsters, and reptiles. My veterinary training allows me to confidently care for pets with special needs."
  },
  {
    question: "Are you insured and bonded?",
    answer: "Yes, I am fully bondable and maintain professional standards for your peace of mind and security."
  },
  {
    question: "How far in advance should I book?",
    answer: "I recommend booking as soon as you know your travel dates. Popular periods like holidays fill quickly. The free interview can be scheduled anytime before your trip."
  },
  {
    question: "Can you administer medications?",
    answer: "Yes, with my veterinary assistant training, I'm experienced in administering oral medications, topical treatments, and insulin injections."
  },
  {
    question: "What if my pet has an emergency?",
    answer: "With my veterinary background, I can assess situations quickly and take appropriate action, including transporting to your veterinarian or emergency clinic if needed."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container size="narrow">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our services"
        />

        <motion.div
          {...fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Accordion type="single" defaultValue="0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger value={index.toString()}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent value={index.toString()}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  )
}
