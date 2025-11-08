"use client"

import { Container } from "@/components/shared/Container"
import { GraduationCap, Award, ShieldCheck } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Beaches Pet Sitting</h3>
            <p className="text-neutral-400 mb-4">Professional In-Home Pet Care</p>
            <div className="space-y-2 text-neutral-400">
              <p>Phone: [Number]</p>
              <p>Email: [Email]</p>
              <p>Service Area: Beaches & Surrounding</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Book Interview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Credentials</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-400">Veterinary Assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-400">11+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary-400" />
                <span className="text-neutral-400">Fully Bondable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Beaches Pet Sitting. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
